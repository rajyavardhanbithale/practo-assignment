export default function StickyBook() {
    return (
        <>
            <div className="w-full bg-slate-100 flex fixed bottom-0 px-3 py-2">
                <div className="w-1/2 flex flex-col">
                    <span className="font-semibold">Clinic appointment</span>
                    <span className="text-green-500 font-semibold">Available Today</span>
                </div>
                <div className="w-1/2 flex items-center justify-end">
                    <button className="text-slate-50 bg-sky-500 px-4 py-2.5 rounded-xl">
                        Book Clinic Visit
                    </button>
                </div>
            </div>
        </>
    )
}