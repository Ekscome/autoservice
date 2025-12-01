export default function Advantages() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Заголовок */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Наши преимущества
          </h2>
          <p className="text-gray-600 text-lg mt-3 max-w-2xl mx-auto">
            Мы создаём сервис, которому доверяют — качество, прозрачность и
            честные цены.
          </p>
        </div>

        {/* Сетка преимуществ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Карточка 1 */}
          <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-200 text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <img src="/icons/quality.svg" className="w-9 h-9" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Гарантия качества
            </h3>
            <p className="text-gray-600 text-sm">
              Используем сертифицированное оборудование, даём гарантию на
              работы.
            </p>
          </div>

          {/* Карточка 2 */}
          <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-200 text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <img src="/icons/time.svg" className="w-9 h-9" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Быстрые сроки
            </h3>
            <p className="text-gray-600 text-sm">
              Чётко соблюдаем сроки и уведомляем о каждом этапе ремонта.
            </p>
          </div>

          {/* Карточка 3 */}
          <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-200 text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <img src="/icons/price.svg" className="w-9 h-9" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Честные цены
            </h3>
            <p className="text-gray-600 text-sm">
              Прозрачный расчёт стоимости без скрытых платежей и навязанных
              услуг.
            </p>
          </div>

          {/* Карточка 4 */}
          <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-200 text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <img src="/icons/team.svg" className="w-9 h-9" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Опытная команда
            </h3>
            <p className="text-gray-600 text-sm">
              Мастера с большим опытом работы и узкой специализацией.
            </p>
          </div>

          {/* Карточка 5 */}
          <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-200 text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <img src="/icons/diagnostic.svg" className="w-9 h-9" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Современная диагностика
            </h3>
            <p className="text-gray-600 text-sm">
              Компьютерная диагностика и оборудование нового поколения.
            </p>
          </div>

          {/* Карточка 6 */}
          <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-200 text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <img src="/icons/support.svg" className="w-9 h-9" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Поддержка клиентов
            </h3>
            <p className="text-gray-600 text-sm">
              Консультации, помощь с подбором деталей и сопровождение ремонта.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
