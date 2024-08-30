'use client'

import { Profile } from "@/types";
import Image from "next/image";
import { IoArrowBackSharp, IoShareSocialOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";
import { useProfile } from "./ContextProvider";

export default function Header() {
    const { profile } = useProfile() || {};
    // const profile = null;

    const { ref, inView, entry } = useInView();


    return (
        <>
            {profile && (
                <div
                    ref={ref}
                    className="flex px-4 py-2 bg-sky-50">
                    {/* about profile */}
                    <div className="flex  flex-col w-3/4 gap-3">
                        <div className="text-xl font-semibold text-slate-800">
                            {profile.name}
                        </div>

                        <div className="text-xs font-medium text-slate-500">
                            {profile.specialties.map((item, idx) => (
                                <span key={idx}>{item}, </span>
                            ))}
                        </div>

                        <div className="text-sm text-slate-500">
                            {profile.education.map((item, idx) => (
                                <span key={idx}>{item}, </span>
                            ))}
                        </div>

                        <div className="text-lg font-semibold text-slate-800">
                            {profile.experience.total} Experience
                        </div>
                    </div>

                    {/* avatar */}
                    <div className="flex w-1/2 justify-center items-center justify-end">
                        <div className="h-36 w-36">
                            <Image
                                src={profile.avatar}
                                alt="avatar"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="h-full w-full rounded-full"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* sticky header */}
            {(profile && !inView) &&
                < div className="flex px-4 py-2 bg-white shadow-xl sticky top-0 z-10 gap-3 items-center">
                    <span>
                        <IoArrowBackSharp className="text-slate-800 text-xl" />
                    </span>

                    <div className="flex justify-center">
                        <div className="h-10 w-10">
                            <Image
                                src={profile.avatar}
                                alt="avatar"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="h-full w-full rounded-full"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="text-base font-medium text-slate-800">
                            {profile.name}
                        </div>
                        <div className="text-base font-medium text-slate-800 -mt-2">
                            {profile.specialties[0]}
                        </div>
                    </div>


                    <span className="ml-auto px-3">
                        <IoShareSocialOutline className="text-slate-800 text-xl" />
                    </span>

                </div >
            }

            {!profile && (
                <div className="flex px-4 py-2 bg-sky-50">
                    <div className="animate-pulse flex flex-col w-3/4 gap-3">
                        <div className="h-6 bg-slate-200 w-11/12 rounded-md mt-1"></div>
                        <div className="h-6 bg-slate-200 w-11/12 rounded-md"></div>
                        <div className="h-6 bg-slate-200 w-11/12 rounded-md"></div>
                        <div className="h-6 bg-slate-200 w-11/12 rounded-md"></div>
                        <div className="h-6 bg-slate-200 w-11/12 rounded-md"></div>
                    </div>

                    <div className="flex w-1/2 justify-center mt-3">
                        <div className="h-36 w-36 bg-slate-200 rounded-full"></div>
                    </div>
                </div>
            )}
        </>
    )
}