import { BiCommentCheck } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscComment } from "react-icons/vsc";

export default function Recommended() {

    return (
        <div className="flex flex-col gap-5 p-4">

            <span className="text-slate-800 text-2xl font-bold">
                Highly Recommended For
            </span>

            <div className="flex gap-3">
                <div className="w-10">
                    <IoMdHeartEmpty className="text-slate-700 text-4xl" />
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold text-slate-700">Doctor Friendliness</span>
                    <span className="text-slate-600">91% patients find the doctor friendly and approachable</span>
                </div>
            </div>


            <div className="flex gap-3">
                <div className="w-10">
                    <VscComment className="text-slate-700 text-4xl" />
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold text-slate-700">Explanation Of Issue</span>
                    <span className="text-slate-500">88% patients recommends the doctor for in-depth explanation of there health issue</span>
                </div>
            </div>
        </div>
    )

}