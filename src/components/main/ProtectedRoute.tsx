"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged } from 'firebase/auth';
import { googleAuth } from '@/app/lib/firebase';  // Corrected import, assuming auth is your Firebase auth instance

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(googleAuth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log("User logged in, UID:", currentUser.uid);  // Log the UID of the user
      } else {
        useRouter().push('/landingpage').catch(err => console.error("Failed to route to /landingpage", err));
        console.log("No user logged in");
      }
      setIsLoading(false);
    });

    return () => {
      console.log("Cleaning up auth subscription");
      unsubscribe(); 
    };
  }, [useRouter()]); 
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return user ? <>{children}</> : null;
};

export default ProtectedRoute;
