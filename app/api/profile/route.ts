import { Profile } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {

    const profile = {
        id: 1,
        name: "Dr. Sumanth Shetty",
        avatar: "https://imagesx.practo.com/providers/dr-sumanth-shetty-dentist-bangalore-89d282eb-19a9-464b-b888-87a17e746559.jpg",
        isClaimed: true,
        qualifications: [
            "BDS",
            "MDS - Paedodontics And Preventive Dentistry"
        ],
        specialties: [
            "Dentist",
            "Implantologist",
            "Pediatric Dentist",
            "Cosmetic/Aesthetic Dentist",
            "Preventive Dentistry",
            "Dental Surgeon"
        ],
        experience: {
            total: "25 Years",
            asSpecialist: "24 years"
        },
        clinicInfo:{
            name:"Chisel Dental",
            location: "Koramangala",
            waitingTime: "15 mins",
            isOpen: true,
            lastUpdate:"Today"
        },
        like: "97%",
        rating: 4.9,
        patientRecommendation: 2815,
        fees:300,
        medicalRegistration: "Verified",
        education: ['BDS', ' MDS - Paedodontics And Preventive Dentistry']
    };



    return NextResponse.json(profile as Profile);
}