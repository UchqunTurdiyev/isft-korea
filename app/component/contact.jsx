export default function SotuvKursi() {
  const topics = [
    'Kirish: Sotuv nima va uning turlari',
    'Sotuvni nimadan boshlaymiz?',
    'Online sotuv texnikasi',
    'Mijozga to’g’ri savol berish, SPIN texnikasi',
    'Etirozlar bilan ishlash texnikalari',
    'Sifatli servis ko’rsatish',
    'Mijoz tipografiyasi',
    'Sotuv psixologiyasi'
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary-700">
        Sotuv kursi
      </h1>

      <p className="text-center mb-8 max-w-2xl mx-auto text-lg">
        Samarqand shahridagi tadbirkorlar bilan hamkorlikda, biz ular uchun
        professional sotuv xodimlarini tayyorlaymiz. Kurs davomida siz
        sotuvning nazariyasi va amaliyotini, mijoz bilan ishlash texnikalarini
        va psixologiyani chuqur o‘rganasiz.
      </p>

      <section className="max-w-3xl mx-auto space-y-3">
        {topics.map((topic) => (
          <div
            key={topic}
            className="p-4 border rounded-xl hover:shadow-sm transition"
          >
            <h2 className="text-lg font-semibold text-primary-700">{topic}</h2>
          </div>
        ))}
      </section>

      <div className="mt-12 text-center">
        <p className="text-lg font-medium">
          Kurs yakunida siz haqiqiy kompaniyalarda ish boshlash imkoniyatiga ega
          bo‘lasiz.
        </p>
        <p className="mt-2 text-gray-600">
          Bizning jamoamiz Samarqanddagi tadbirkorlar bilan rasmiy shartnomalar
          asosida ishlaydi.
        </p>
        <a
          href="tel:+998555187070"
          className="inline-block mt-6 px-6 py-3 rounded-xl bg-primary-600 text-white hover:bg-primary-700"
        >
          Bog‘lanish: +998 55 518 70 70
        </a>
      </div>
    </main>
  );
}
