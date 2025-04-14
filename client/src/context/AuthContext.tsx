import { createContext, useContext, useState, ReactNode } from "react";
import { User } from "@shared/schema";

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    // Initialize with admin user for demo purposes
    return {
      id: 1,
      username: "drsutono",
      password: "", // Don't include actual password in the client
      fullName: "Dr. Sutono",
      role: "admin",
      specialty: "General Practice",
      status: "active"
    };
  });

  const login = async (username: string, password: string): Promise<boolean> => {
    // For demo purposes, we'll always succeed
    // In a real app we would make a POST to /api/auth/login
    setUser({
      id: 1,
      username: "drsutono",
      password: "", // Don't include actual password in the client
      fullName: "Dr. Sutono",
      role: "admin",
      specialty: "General Practice",
      status: "active"
    });
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
