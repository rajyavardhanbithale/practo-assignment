
type Profile = {
    id: number;
    name: string;
    avatar: string;
    isClaimed: boolean;
    qualifications: string[];
    specialties: string[];
    experience: {
        total: string;
        asSpecialist: string;
    };
    clinicInfo: {
        name: string,
        location: string,
        waitingTime: string,
        isOpen: boolean,
        lastUpdate: string
    },
    like: string;
    rating: number;
    fees: number;
    patientRecommendation: number;
    affiliation: string;
    medicalRegistration: string;
    education: string[];
};

export type { Profile };