import { Profile } from "@/types";
import { AiFillLike } from "react-icons/ai";
import { PiStarFourFill } from "react-icons/pi";
import { useProfile } from "./ContextProvider";


export default function RatingCard() {

    const { profile } = useProfile() || {};
    // const profile = null;

    return (
        <>
            {profile && (
                <div className="flex w-full sm:bg-white sm:py-6 sm:rounded-xl">
                    {/* like */}
                    <div className="flex w-1/2 flex-col justify-center items-center gap-1">
                        <div className="flex justify-center items-end gap-1">
                            <AiFillLike size={22} className="text-green-600" />
                            <p className="text-2xl text-slate-800 font-bold">{profile.like}</p>
                        </div>

                        <p className="text-slate-800 text-xs">Patient Recommendation</p>
                        <p className="underline text-slate-800 text-xs">{profile.patientRecommendation} Patient Stories</p>
                    </div>

                    <div className="flex h-16 bg-slate-200 w-0.5 rounded-fullgit branch -M main">
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
            )}

            {!profile && (
                <div className="flex w-full">
                    {/* like skeleton */}
                    <div className="flex w-1/2 flex-col justify-center items-center gap-3">
                        <div className="flex justify-center items-end gap-1">
                            <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
                            <div className="w-16 h-6 bg-gray-300 rounded-full animate-pulse"></div>
                        </div>

                        <div className="w-24 h-4 bg-gray-300 rounded-full animate-pulse"></div>
                        <div className="w-32 h-4 bg-gray-300 rounded-full animate-pulse"></div>
                    </div>

                    <div className="flex h-16 bg-slate-200 w-0.5 rounded-full">
                    </div>

                    <div className="flex w-1/2 flex-col justify-center items-center gap-3">
                        <div className="flex justify-center items-end gap-1">
                            <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
                            <div className="w-16 h-6 bg-gray-300 rounded-full animate-pulse"></div>
                        </div>

                        <div className="w-24 h-4 bg-gray-300 rounded-full animate-pulse"></div>
                        <div className="w-32 h-4 bg-gray-300 rounded-full animate-pulse"></div>
                    </div>
                </div>
            )}

            
        </>
    )
} 