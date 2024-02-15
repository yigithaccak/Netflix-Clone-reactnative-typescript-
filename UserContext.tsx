import React, {createContext, useContext, useState, ReactNode} from 'react';

interface UserContextProps {
  children: ReactNode;
}

const UserContext = createContext<any>(null);

export const UserProvider: React.FunctionComponent<UserContextProps> = ({
  children,
}) => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{selectedUser, setSelectedUser}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
