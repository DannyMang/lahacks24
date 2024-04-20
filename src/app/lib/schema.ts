import { relations } from 'drizzle-orm';
import {
	integer,
	pgTable,
	serial,
	text,
	timestamp,
	varchar
} from 'drizzle-orm/pg-core';

export const userTable = pgTable('users', {
    userId: varchar('userId', { length: 50 }).primaryKey(),
    email: text('email').notNull(),
    passwordHash: text('passwordHash').notNull(), // Store only hashed passwords
    createdAt: timestamp('createdAt', { withTimezone: true }).notNull(),
    lastLogin: timestamp('lastLogin', { withTimezone: true })
  });
  
  export const objectTable = pgTable('objects', {
    objectId: serial('objectId').primaryKey(),
    type: varchar('type', { length: 50 }).notNull(),
    health: integer('health').notNull(),
    attack: integer('attack').notNull()
  });
  
  export const postTable = pgTable('posts', {
    postId: serial('postId').primaryKey(),
    userId: varchar('userId', { length: 50 })
      .notNull()
      .references(() => userTable.userId), // assuming posts are related to users
    objectId: integer('objectId')
      .notNull()
      .references(() => objectTable.objectId), // reference to an 'object'
    imageId: varchar('imageId', { length: 50 }), // varchar to reflect possibility of alphanumeric IDs
    name: text('name').notNull(),
    postedAt: timestamp('postedAt', { withTimezone: true }).notNull()
  });
  
  export const postObjectRelations = relations(postTable, ({ one }) => ({
    user: one(userTable, {
      fields: [postTable.userId],
      references: [userTable.userId]
    }),
    object: one(objectTable, {
      fields: [postTable.objectId],
      references: [objectTable.objectId]
    })
  }));
  