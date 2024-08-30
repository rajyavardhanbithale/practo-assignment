import Header from "./components/Header";
import { Profile } from "@/types";
import RatingCard from "./components/RatingCard";
import Appointment from "./components/Appointments/Appointment";
import StickyBook from "./components/StickBook";

async function fetchProfile() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/profile`)
  return await response.json() as Profile
}



export async function generateMetadata() {
  const profile = await fetchProfile() as Profile

  return {
    title: `Book an appointment with ${profile.name}`,
  }
}


export default async function Home() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/profile`)
  const profile = await response.json() as Profile

  return (
    <main className="flex flex-col gap-5">
      <Header profile={profile} />
      <RatingCard profile={profile} />
      <RatingCard profile={profile} />
      <RatingCard profile={profile} />
      <RatingCard profile={profile} />
      <RatingCard profile={profile} />

      <div>
        <Appointment profile={profile} />
      </div>

      <StickyBook />
    </main>
  );
}
