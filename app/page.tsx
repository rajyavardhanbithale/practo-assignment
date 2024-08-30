'use client'

import Header from "./components/Header";
import RatingCard from "./components/RatingCard";
import Appointment from "./components/Appointments/Appointment";
import StickyBook from "./components/StickBook";
import Recommended from "./components/Recommended";

export default function Home() {

  return (
    <main className="flex flex-col gap-7 mb-20 sm:max-w-[768px] sm:mt-20 sm:m-20">
      <Header />
      <RatingCard />
      <div>
        <Appointment />
      </div>
      <Recommended />
      <StickyBook />
 
    </main>
  );
}
