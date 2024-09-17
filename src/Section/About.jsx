import Layanan from "../components/Layanan";
import WhyUs from "../components/WhyUs";
import Gallery from "../components/Gallery";

function About() {
  return (
    <>
      <div className=" flex flex-col gap-24 bg-neutral-100 p-8 pb-32  ">
        {/* --------------------------------------------------- */}
        <div className=" flex items-center justify-center">
          <div className=" rounded-md bg-zinc-700 md:w-3/4">
            <h2 className="md:judul px-8 py-4 text-center text-3xl font-bold text-slate-200 xl:mb-2">
              Welcome to AKIJO
            </h2>
            <p className="font-montserrat mb-16 items-center px-4 text-center text-xl tracking-wider text-slate-200 md:px-16 md:leading-loose lg:text-2xl">
              AkijoFood melayani pesanan untuk berbagai acara & pesta, dari
              Ibadah sampai pesta perkawinan, dan event atau kegiatan lainnya.
              Ramaikan acara/event anda dengan gerobak bakso AKIJO . <br />{" "}
              <br /> Kami juga menyediakan makanan frozen siap saji seperti
              Bakso babi, daging babi slice (pork slice), siomay, dan ayam
              goreng/bakar.
            </p>
          </div>
        </div>
        <Layanan />
        <WhyUs />
        <Gallery />
      </div>
    </>
  );
}

export default About;
