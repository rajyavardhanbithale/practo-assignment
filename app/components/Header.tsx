'use client'

import { Profile } from "@/types";
import Image from "next/image";
import { IoArrowBackSharp, IoShareSocial } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

export default function Header({ profile }: { profile: Profile }) {

    const { ref, inView, entry } = useInView();

    console.log({ inView, entry });


    return (
        <>
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
                <div className="flex w-1/2 justify-center">
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


            {/* sticky header */}
            <div className="flex px-4 py-2 bg-sky-50 sticky top-0 z-10 gap-3 items-center">

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

                <div className="">
                    <div className="text-base font-medium text-slate-800">
                        {profile.name}
                    </div>
                    <div className="text-base font-medium text-slate-800 -mt-2">
                        {profile.specialties[0]}
                    </div>
                </div>


                <span>
                    <IoShareSocial className="text-slate-800 text-xl"  />
                </span>

            </div>
        </>
    )
}