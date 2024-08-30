import { Profile } from "@/types";
import { AiFillLike } from "react-icons/ai";
import { PiStarFourFill } from "react-icons/pi";


export default function RatingCard({ profile }: { profile: Profile }) {
    return (
        <>
            <div className="flex w-full">
                {/* like */}
                <div className="flex w-1/2 flex-col justify-center items-center gap-1">
                    <div className="flex justify-center items-end gap-1">
                        <AiFillLike size={22} className="text-green-600" />
                        <p className="text-2xl text-slate-800 font-bold">{profile.like}</p>
                    </div>

                    <p className="text-slate-800 text-xs">Patient Recommendation</p>
                    <p className="underline text-slate-800 text-xs">{profile.patientRecommendation} Patient Stories</p>
                </div>

                <div className="flex h-16 bg-slate-200 w-0.5 rounded-full">
                </div>

                {/* rating */}
                <div className="flex w-1/2 flex-col justify-center items-center gap-1">
                    <div className="flex justify-center items-end gap-1">
                        <PiStarFourFill size={22} className="text-blue-600" />
                        <span className="text-2xl text-slate-800 font-bold">
                            {profile.rating}
                            <span className="text-xl">
                                /5
                            </span>
                        </span>
                    </div>

                    <p className="text-slate-800 text-xs">Clinic Excellence Rating</p>
                    <p className="underline text-slate-800 text-xs">Based on Audit</p>
                </div>
            </div>
        </>
    )
} 