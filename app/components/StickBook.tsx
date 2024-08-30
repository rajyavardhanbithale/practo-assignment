export default function StickyBook() {
    return (
        <>
            <div className="w-full flex bg-white fixed bottom-0 px-3 py-2 sm:hidden sm:shadow-none rounded-2xl">

                <div className="w-1/2 flex flex-col">
                    <span className="font-medium">Clinic appointment</span>
                    <span className="text-green-500 font-medium">Available Today</span>
                </div>

                <div className="w-1/2 flex items-center justify-end">
                    <button className="text-slate-50 font-medium bg-sky-500 px-4 py-2.5 rounded-xl">
                        Book Clinic Visit
                    </button>
                </div>

            </div>
        </>
    )
}