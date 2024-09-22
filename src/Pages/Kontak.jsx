import React from "react";

const Kontak = () => {
  return (
    <div className="page-container flex flex-col items-center justify-center">
      {/* Info dan Pemesanan Section */}
      <div className="mb-6">
        <h2 className="text-lg font-bold">Info dan pemesanan:</h2>
        <ul className="mt-2 text-gray-700">
          <li>
            <span className="mr-2">📞</span>+62 813-4270-9321 (
            <a href="https://wa.me/6281342709321" className="text-red-500">
              WhatsApp
            </a>{" "}
            Order)
          </li>
          <li>
            <span className="mr-2">📧</span>
            <a href="mailto:business@akijofood.com" className="text-red-500">
              business@akijofood.com
            </a>
          </li>
        </ul>
      </div>

      {/* Media Sosial Section */}
      <div className="mb-6">
        <h2 className="text-lg font-bold">Media Sosial:</h2>
        <ul className="mt-2 space-y-1 text-gray-700">
          <li>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/akijo_food/"
              className="text-red-500"
            >
              @akijo_food
            </a>
          </li>

          <li>
            Facebook:{" "}
            <a
              href="https://www.facebook.com/profile.php?id=61561304294638"
              className="text-red-500"
            >
              AkijoFood
            </a>
          </li>
        </ul>
      </div>

      {/* Marketplace Section */}
    </div>
  );
};

export default Kontak;

{
  /* <div className="flex max-w-[400px] flex-col items-center justify-center gap-4 pt-32 text-justify text-slate-800 md:max-w-[600px] lg:max-w-[800px]">
  <ul className="">
    Info dan pemesanan:
    <li>+62 813-4270-9321 (Order via WhatsApp)</li>
    <li>business@akijofood.com</li>
  </ul>
  <ul className="">
    Media Sosial:
    <li>
      Instagram:{" "}
      <a href="https://www.instagram.com/akijo_food/">@akijo_food</a>
    </li>
    <li>
      Facebook:{" "}
      <a href="https://www.facebook.com/profile.php?id=61561304294638">
        AkijoFood
      </a>
    </li>
  </ul>
</div> */
}
