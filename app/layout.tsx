import type { Metadata } from "next";
import { Inter, Lato, Poppins } from "next/font/google";
import "./globals.css";
import ContextProvider from "./components/ContextProvider";
import { Profile } from "@/types";

const inter = Poppins({
  subsets: ["latin"],
  weight: ['100', '300', '400', '700', '900'],
});

// async function fetchProfile() {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/profile`);
//   return await response.json() as Profile;
// }

// export async function generateMetadata(){
//   const profile = await fetchProfile();
//   return {
//     title: `Book an appointment with ${profile.name}`,
//     description: `Book an appointment with ${profile.name} at ${profile.clinicInfo.name}`,

//     openGraph: {
//       title: `Book an appointment with ${profile.name}`,
//       description: `Book an appointment with ${profile.name} at ${profile.clinicInfo.name}`,

//       images: [
//         {
//           url: profile.avatar,
//           width: 800,
//           height: 600,
//         },
//         {
//           url: profile.avatar,
//           width: 1800,
//           height: 1600,
//         },
//       ],
//     },

//   };
// }



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body className={`${inter.className} sm:bg-slate-50`}>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
