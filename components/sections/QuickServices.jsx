import Image from "next/image";

export default function QuickServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Заголовок */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900">Наши услуги</h2>
          <p className="text-gray-600 text-lg mt-3 max-w-2xl mx-auto">
            Основные направления, в которых мы работаем. Честно, качественно и с
            гарантией.
          </p>
        </div>

        {/* Сетка услуг */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* 1 — Шиномонтаж */}
          <div className="p-6 bg-gray-50 hover:bg-white transition shadow-sm hover:shadow-xl rounded-xl border border-gray-200">
            <Image
              src="/icons/wheel.png"
              alt="Шиномонтаж"
              width={500}
              height={500}
              className="w-100 h-100 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Шиномонтаж
            </h3>
            <p className="text-gray-600 text-sm">
              Замена шин, ремонт проколов, балансировка, подготовка к сезону.
            </p>
          </div>

          {/* 2 — Кузовной ремонт */}
          <div className="p-6 bg-gray-50 hover:bg-white transition shadow-sm hover:shadow-xl rounded-xl border border-gray-200">
            <Image
              src="/icons/body.png"
              alt="Кузовной ремонт"
              width={500}
              height={500}
              className="w-100 h-100 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Кузовной ремонт
            </h3>
            <p className="text-gray-600 text-sm">
              Восстановление кузова, устранение вмятин и дефектов любой
              сложности.
            </p>
          </div>

          {/* 3 — Покраска */}
          <div className="p-6 bg-gray-50 hover:bg-white transition shadow-sm hover:shadow-xl rounded-xl border border-gray-200">
            <Image
              src="/icons/painting.png"
              alt="Покраска"
              width={500}
              height={500}
              className="w-100 h-100 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Покраска
            </h3>
            <p className="text-gray-600 text-sm">
              Локальная и полная покраска, подбор цвета, восстановление
              покрытия.
            </p>
          </div>

          {/* 4 — Детейлинг */}
          <div className="p-6 bg-gray-50 hover:bg-white transition shadow-sm hover:shadow-xl rounded-xl border border-gray-200">
            <Image
              src="/icons/detailing.png"
              alt="Детейлинг"
              width={500}
              height={500}
              className="w-100 h-100 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Детейлинг
            </h3>
            <p className="text-gray-600 text-sm">
              Полировка кузова, химчистка салона, восстановление блеска и
              защиты.
            </p>
          </div>

          {/* 5 — Техническое обслуживание */}
          <div className="p-6 bg-gray-50 hover:bg-white transition shadow-sm hover:shadow-xl rounded-xl border border-gray-200">
            <Image
              src="/icons/technical.png"
              alt="Техническое обслуживание"
              width={500}
              height={500}
              className="w-100 h-100 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Техническое обслуживание
            </h3>
            <p className="text-gray-600 text-sm">
              Плановое ТО, замена фильтров, жидкостей, свечей, диагностика
              узлов.
            </p>
          </div>

          {/* 6 — Электрика */}
          <div className="p-6 bg-gray-50 hover:bg-white transition shadow-sm hover:shadow-xl rounded-xl border border-gray-200">
            <Image
              src="/icons/electric.png"
              alt="Электрика"
              width={500}
              height={500}
              className="w-100 h-100 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Электрика
            </h3>
            <p className="text-gray-600 text-sm">
              Ремонт проводки, замена генератора, стартера, диагностика
              электроники.
            </p>
          </div>

          {/* 7 — Ремонт */}
          <div className="p-6 bg-gray-50 hover:bg-white transition shadow-sm hover:shadow-xl rounded-xl border border-gray-200">
            <Image
              src="/icons/repair.png"
              alt="Ремонт"
              width={500}
              height={500}
              className="w-100 h-100 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ремонт</h3>
            <p className="text-gray-600 text-sm">
              Комплексный ремонт ходовой, тормозов, двигателя и трансмиссии.
            </p>
          </div>

          {/* 8 — Восстановление после ДТП */}
          <div className="p-6 bg-gray-50 hover:bg-white transition shadow-sm hover:shadow-xl rounded-xl border border-gray-200">
            <Image
              src="/icons/restoration.png"
              alt="Восстановление после ДТП"
              width={500}
              height={500}
              className="w-100 h-100 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Восстановление после ДТП
            </h3>
            <p className="text-gray-600 text-sm">
              Полная реконструкция автомобиля после аварии, от геометрии до
              покраски.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
