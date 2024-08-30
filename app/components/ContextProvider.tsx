'use client'

import { useState, createContext, useEffect, useContext } from "react";
import { Profile } from "@/types";
import axios from "axios";

interface ContextProps {
  profile: Profile | null;
  setProfile: (profile: Profile | null) => void;
}


const ProfileContext = createContext<ContextProps | undefined>(undefined);

export const useProfile = () => {
  const context = useContext(ProfileContext);
  return context;
};


export default function ContextProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get('/api/profile');
      const profileData = await response.data;
      setProfile(profileData);
    };

    fetchProfile();
  }, []);


  
  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}






