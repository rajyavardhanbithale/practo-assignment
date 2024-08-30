import { Profile } from "@/types";
import { RiHome8Line } from "react-icons/ri";
import TimeSlot from "./TimeSlot";
import { useProfile } from "../ContextProvider";

export default function Appointment() {
    const { profile } = useProfile() || {};
    // const profile = null
    return (
        <>
            {profile && (
                <div className="shadow-md rounded-2xl">
                    <div
                        className="w-11/12 flex flex-row py-2 bg-sky-200/80 mx-auto shadow-lg rounded-t-xl justify-between">
                        <div className="flex p-2 gap-1 item-center">
                            <span className="bg-sky-500 p-1 rounded-full">
                                <RiHome8Line className=" text-white" />
                            </span>

                            <span className="text-slate-900 text-sm font-semibold mt-0.5">
                                Clinic Appointment
                            </span>
                        </div>

                        <div className="flex p-2 gap-1 mx-2 items-end">
                            <span className="text-sm font-semibold">
                                &#8377; {profile.fees} fees
                            </span>
                        </div>
                    </div>

                    <div
                        className="w-11/12 flex flex-row py-2 bg-white mx-auto justify-between">

                        <div className="flex flex-col p-2 gap-1">
                            <p className="text-slate-900 font-semibold">
                                {profile.clinicInfo.name}
                            </p>

                            <p className="text-slate-700 font-normal text-sm">
                                {profile.clinicInfo.location}
                            </p>

                            <p className="text-slate-700 font-normal text-sm">
                                Max. {profile.clinicInfo.waitingTime} wait + Verified Details
                            </p>

                            <div className="flex gap-1">
                                <p className={`${profile.clinicInfo.isOpen ? "text-green-500" : "text-red-500"} font-normal text-sm`}>
                                    {profile.clinicInfo.isOpen ? "Open" : "Closed"}
                                </p>

                                <p className="text-slate-700 font-normal text-sm">
                                    •
                                </p>

                                <p className="text-slate-700 font-medium text-sm">
                                    Updated {profile.clinicInfo.lastUpdate}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="w-11/12 flex flex-row bg-white mx-auto justify-between">
                        <TimeSlot />
                    </div>
                </div>
            )}

            {!profile && (
                <div className="h-72 bg-slate-200 animate-pulse w-11/12 rounded-2xl mx-auto"></div>
            )}
        </>
    )
}