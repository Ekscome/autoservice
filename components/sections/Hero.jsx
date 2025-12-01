import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Верхняя карточка */}
        <div className="bg-white shadow-xl rounded-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* левый текст */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Профессиональный автосервис <br /> в вашем городе
            </h1>

            <p className="text-lg text-gray-600 mt-6 max-w-xl">
              Ремонт, диагностика и техобслуживание автомобилей — быстро,
              качественно и по честной цене.
            </p>

            <a
              href="#services"
              className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition"
            >
              Записаться
            </a>
          </div>

          {/* правый большой блок с машиной */}
          <div className="flex items-center justify-center md:justify-end">
            <div className="relative w-full h-[280px] md:h-[380px] lg:h-[460px]">
              <Image
                width={2000}
                height={2000}
                src="/hero.png"
                alt="Автомобиль"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Нижняя панель
        <div className="bg-white shadow-lg rounded-xl mt-6 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/icons/engine.svg" className="w-6 h-6" />
            <span className="text-gray-700 font-semibold">Диагностика</span>
          </div>

          <div className="flex items-center gap-3">
            <img src="/icons/tools.svg" className="w-6 h-6" />
            <span className="text-gray-700 font-semibold">Ремонт</span>
          </div>

          <div className="flex items-center gap-3">
            <img src="/icons/oil.svg" className="w-6 h-6" />
            <span className="text-gray-700 font-semibold">Замена масла</span>
          </div>

          <a
            href="#services"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            Записаться
          </a>
        </div> */}
      </div>
    </section>
  );
}
