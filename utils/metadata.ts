

import { Metadata } from 'next';
import { Profile } from '@/types';

async function fetchProfile(): Promise<Profile> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/profile`);
  return await response.json() as Profile;
}

export async function generateMetadata(): Promise<Metadata> {
  const profile = await fetchProfile();
  return {
    title: `Book an appointment with ${profile.name}`,
    description: `Book an appointment with ${profile.name} at ${profile.clinicInfo.name} located in ${profile.clinicInfo.location}`,    
  };
}
