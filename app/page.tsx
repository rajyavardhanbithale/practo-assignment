'use client'

import Header from "./components/Header";
import RatingCard from "./components/RatingCard";
import Appointment from "./components/Appointments/Appointment";
import StickyBook from "./components/StickBook";
import Recommended from "./components/Recommended";

export default function Home() {

  return (
    <main className="flex flex-col gap-10 mb-20 sm:max-w-[768px] sm:mt-20 sm:m-20">
      <Header />
      <RatingCard />
      <div className="block sm:fixed sm:right-0">
        <Appointment />
      </div>
      <Recommended />
      <StickyBook />
    </main>
  );
}
