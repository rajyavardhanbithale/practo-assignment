'use client'

import { Profile } from "@/types";
import Image from "next/image";
import { IoArrowBackSharp, IoShareSocialOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";
import { useProfile } from "./ContextProvider";
import { FaCheckCircle } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

export default function Header() {
    const { profile } = useProfile() || {};
    // const profile = null;

    const { ref, inView, entry } = useInView();


    return (
        <>
            {profile && (
                <div
                    ref={ref}
                    className="flex px-4 py-2 bg-sky-50 sm:bg-slate-100 sm:flex-row-reverse">
                    {/* about profile */}
                    <div className="flex flex-col w-3/4 sm:w-full gap-3 mt-2">
                        <Image
                            src={'https://www.practostatic.com/marketplace-api/doctor-profile/pcd_blue_logo.png'}
                            height={0}
                            width={0}
                            sizes="100vw"
                            className="h-14 w-11/12 sm:w-1/2 -ml-8 block sm:hidden"
                            alt="practo"
                        />
                        <div className="text-2xl font-semibold text-slate-800">
                            {profile.name}
                        </div>

                        <div className="text-sm  sm:text-lg text-slate-500 hidden sm:block">
                            {profile.education.map((item, idx) => (
                                <span key={idx}>{item}, </span>
                            ))}
                        </div>

                        <div className="text-xs sm:text-lg font-medium text-slate-500">
                            {profile.specialties.map((item, idx) => (
                                <span key={idx}>{item}, </span>
                            ))}
                        </div>

                        <div className="text-sm  sm:text-lg text-slate-500 sm:hidden block">
                            {profile.education.map((item, idx) => (
                                <span key={idx}>{item}, </span>
                            ))}
                        </div>

                        <div className="text-lg sm:text-xl font-semibold text-slate-800">
                            {profile.experience.total} Experience
                        </div>

                        <Image
                            src={'https://www.practostatic.com/marketplace-api/doctor-profile/pcd_contextual_banner.png'}
                            height={0}
                            width={0}
                            sizes="100vw"
                            className="h-14 w-11/12 sm:w-1/2 -ml-1 sm:block hidden"
                            alt="practo"
                        />

                        <div className="hidden sm:flex sm:flex-col">
                            <div className="flex">
                                <FaCheckCircle className="text-green-500" />
                                <span className="text-lg">
                                    Medical Registration Verified
                                </span>

                                <div className="flex">
                                    <AiFillLike className="text-green-600" />
                                    <span className="text-lg">
                                        Medical Registration Verified
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* avatar */}
                    <div className="flex w-1/2 sm:w-28 sm:justify-start sm:items-start items-center justify-end sm:mr-5">
                        <div className="h-36 w-36 sm:h-24 sm:w-24">
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
                <div className="sm:hidden flex px-4 py-2 bg-white shadow-xl sticky top-0 z-10 gap-3 items-center">
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