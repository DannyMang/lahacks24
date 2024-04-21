import { createContext, useContext, useState, ReactNode, FC } from "react";

const AppContext = createContext<UserState | undefined>(undefined);

interface UserState {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}
interface Props {
  children: ReactNode;
}

export const AppWrapper: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppWrapper");
  }
  return context;
}
