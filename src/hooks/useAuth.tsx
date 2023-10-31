'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import auth, { ISignInCredentials, Response } from "../lib/auth";

interface AuthContextData {
  signed: boolean;
  user: Response['user'] | null;
  signIn: (props: ISignInCredentials) => Promise<Response | null>;
  signOut: () => Promise<void>;
  updateUser: (props: Response['user']) => Promise<void>;
  loading: boolean;
  type: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Response['user'] | null>(null);
  const [usertype, setUsertype] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = localStorage.getItem("@pi_myId");
      const storagedType = localStorage.getItem("@pi_type");

      if (storagedUser && storagedType) {
        const response = await auth.getUserData(storagedUser, storagedType);
        localStorage.setItem("@pi_cmpId", response.user.companyId as string);
        setUser(response.user);
        setUsertype(response.type);
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signOut() {
    localStorage.clear();
    setUser(null);
  }

  async function signIn(props: ISignInCredentials): Promise<Response | null> {
    const response = await auth.signIn(props);
    if(!response) return null;
    setUser(response.user);
    setUsertype(response.type);
    localStorage.setItem("@pi_myId", response.user.id);
    localStorage.setItem("@pi_type", response.type);
    if(response.user.companyId) localStorage.setItem("@pi_cmpId", response.user.companyId as string);
    return response;
  }

  async function updateUser(props: Response['user']) {
    setUser(props);
  }
  
  return (
    <AuthContext.Provider value={{ 
      signed: !!user, 
      user, 
      loading,
      signIn,
      signOut,
      updateUser,
      type: usertype
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}