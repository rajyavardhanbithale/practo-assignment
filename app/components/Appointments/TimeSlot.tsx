'use client'
import { useState } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

interface Slot {
    day: string;
    slot: number;
    time: string[];
}

export default function TimeSlot() {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const slots: Slot[] = [
        {
            day: "Today",
            slot: 4,
            time: ["04:00 PM", "04:30 PM", "04:40 PM", "05:00 PM", "05:30 PM", "05:40 PM", "06:00 PM"]
        },
        {
            day: "Tomorrow",
            slot: 4,
            time: ["05:00 PM", "05:30 PM", "05:40 PM", "06:00 PM", "06:30 PM", "06:40 PM", "07:00 PM"]
        },
        {
            day: "30 Aug",
            slot: 4,
            time: ["03:00 PM", "03:30 PM", "03:40 PM", "04:00 PM"]
        },
    ];

    return (
        <div className="flex flex-col gap-5 pb-4 sm:max-w-[450px] max-w-sm">
            <div className="flex space-x-4 overflow-x-auto pb-2 sm:justify-center">
                <span className="hidden sm:flex items-center">
                    <RiArrowLeftSLine className="text-2xl" />
                </span>
                <div className="flex flex-nowrap">
                    {slots.map((slot, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            className={`flex-shrink-0 px-4 py-2 flex flex-col gap-1 text-center whitespace-nowrap cursor-pointer
                                ${selectedIndex === index ? 'border-sky-500 border-b-4' : 'bg-white text-slate-800'
                                }`}
                        >
                            <div className="flex gap-1 sm:text-base sm:flex-col">
                                <span className="font-semibold">
                                    {slot.day}
                                </span>
                                <span className="font-semibold text-green-600">
                                    {slot.slot} slots
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <span className="hidden sm:flex items-center">
                    <RiArrowRightSLine className="text-2xl" />
                </span>
            </div>
            <div className="flex flex-wrap gap-2">
                {slots[selectedIndex].time.map((time, index) => (
                    <div key={index} className="px-3 py-2 sm:py-1 text-center rounded-lg whitespace-nowrap cursor-pointer bg-sky-500 text-slate-50 sm:bg-white sm:text-sky-500 sm:border-2 sm:border-sky-500">
                        <span className="font-semibold sm:font-normal">
                            {time}
                        </span>
                    </div>
                ))}
            </div>
            <div className="sm:hidden text-sky-500 font-semibold text-sm w-full flex justify-center items-center">
                <span>
                    View All Slots
                </span>
            </div>
        </div>
    );
}
