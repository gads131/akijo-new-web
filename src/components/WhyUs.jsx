import { FaCheck } from "react-icons/fa";

function WhyUs() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h2 className="flex justify-center text-base font-bold uppercase text-slate-900 lg:text-3xl">
          Mengapa Kami ?
        </h2>
        <div className="mt-1 h-1 w-1/5 max-w-xs items-center justify-center bg-red-400 object-center"></div>

        {/* LIST */}

        <ul className="mt-8 flex flex-col gap-8">
          <li className="flex items-center gap-4">
            <div className="flex h-[20px] w-[20px] items-center justify-center  rounded-full bg-rose-500 p-1 lg:h-[40px] lg:w-[40px] lg:p-2">
              <FaCheck className="text-yellow-200" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-md font-bold lg:text-xl">Harga Terjangkau</h3>
              <p className="text-xs text-slate-600  md:text-base">
                Mulai dari{" "}
                <span className="bg-gradient-to-b from-red-500 to-red-800 bg-clip-text text-transparent">
                  1jt Rupiah
                </span>
                . Anda sudah bisa order layanan paket Booth Bakso Ba' Akijo
                untuk 50 s/d 60 kepala
              </p>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <div className="flex h-[20px] w-[20px] items-center justify-center  rounded-full bg-rose-500 p-1 lg:h-[40px] lg:w-[40px]  lg:p-2">
              <FaCheck className="text-yellow-200" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-md font-bold lg:text-xl">Kualitas Terbaik</h3>
              <p className="text-xs text-slate-600  md:text-base">
                Bahan baku, bumbu, dan cara pengolahan adalah yang{" "}
                <span className="bg-gradient-to-b from-red-500 to-red-800 bg-clip-text text-transparent">
                  Terbaik
                </span>
              </p>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <div className="flex h-[20px] w-[20px] items-center justify-center  rounded-full bg-rose-500 p-1 lg:h-[40px] lg:w-[40px]  lg:p-2">
              <FaCheck className="text-yellow-200" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-md font-bold lg:text-xl">
                Cocok Di berbagai Acara maupun Event
              </h3>
              <p className="text-xs text-slate-600 md:text-base">
                Ramaikan Acara Ulang Tahun, Pesta Perkawinan, Ibadah, dan
                Event-event lainnya. Dengan Gerobak{" "}
                <span className="bg-gradient-to-b from-red-500 to-red-800 bg-clip-text text-transparent">
                  Estetik AKIJO
                </span>
              </p>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <div className="flex h-[20px] w-[20px] items-center justify-center  rounded-full bg-rose-500 p-1 lg:h-[40px] lg:w-[40px]  lg:p-2">
              <FaCheck className="text-yellow-200" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-md font-bold lg:text-xl">Praktis</h3>
              <p className="text-xs text-slate-600  md:text-base">
                Alat Makan, dan Meja kami siapkan Anda tak perlu{" "}
                <span className="bg-gradient-to-b from-red-500 to-red-800 bg-clip-text text-transparent">
                  Repot
                </span>{" "}
                lagi
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default WhyUs;
