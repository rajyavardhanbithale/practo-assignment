'use client'

import { useState } from 'react';

interface Slot {
    day: string;
    slot: number;
    time: string[];
}

export default function TimeSlot() {
    const [selectedIndex, setSelectedIndex] = useState<number>(1);

    const slots: Slot[] = [
        {
            day: "Today",
            slot: 4,
            time: ["04:00 PM", "04:30 PM", "04:40 PM", "05:00 PM"]
        },
        {
            day: "Tomorrow",
            slot: 4,
            time: ["05:00 PM", "05:30 PM", "05:40 PM", "06:00 PM"]
        },
        {
            day: "30 Aug",
            slot: 4,
            time: ["03:00 PM", "03:30 PM", "03:40 PM", "03:00 PM"]
        },
    ];

    return (
        <div className="overflow-x-auto flex flex-col gap-5 pb-4">
            <div className="flex space-x-4 min-w-max">
                {slots.map((slot, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                        className={`min-w-max flex px-4 py-2 flex-col gap-1 text-center whitespace-nowrap cursor-pointer
                             ${selectedIndex === index ? 'border-sky-500 border-b-4' : 'bg-white text-slate-800'
                            }`}
                    >
                        <div className="flex gap-1">
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

            <div className="flex gap-2">
                {slots[selectedIndex].time.map((time, index) => (
                    <div key={index} className="flex px-3 py-2 flex-col gap-1 text-center rounded-lg whitespace-nowrap cursor-pointer bg-sky-500 text-slate-50">
                        <span className="font-semibold">
                            {time}
                        </span>
                    </div>
                ))}
            </div>

            <div className="text-sky-500 font-semibold text-sm w-full flex justify-center items-center">
                <span>
                    View All Slots
                </span>
            </div>
        </div>
    );
}