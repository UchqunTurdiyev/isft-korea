import React from 'react'
import img1 from '../../public/01-2.jpeg'
import img2 from '../../public/02-2.jpeg'
import img3 from '../../public/03-2.jpeg'
import gal from '../../public/0001.jpeg'
import gal3 from '../../public/0003.jpeg'
import acc from '../../public/acc.jpg'
// import gal4 from '../../public/t1.JPG'
// import gal5 from '../../public/t2.JPG'
import Image from 'next/image'

export default function About() {
  return (
    <>
    <div className='w-full grid xl:grid-cols-3 grid-cols-2  md:gap-4 gap-2 pt-8 '> 
        <Image src={img1} alt="ISFT" layout='fit' className='object-cover'/>
        <Image src={img2} alt="ISFT" layout='fit' className='object-cover'/>
        <Image src={img3} alt="ISFT" layout='fit' className='object-cover'/>
        <Image src={acc} alt="ISFT" layout='fit' className='object-cover'/>
     
    </div>

    {/* FAQ Section */}
 <section className="py-10 my-6 bg-white shadow-md text-black px-3">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="md:text-2xl text-lg font-bold text-center text-black">❓ Tez-tez So‘raladigan Savollar</h2>
          <div className="space-y-4">
            <details className="border p-4 rounded-lg">
              <summary className="cursor-pointer font-semibold text-black">❓ Diplom Oliy ta’lim vazirligi tomonidan tan olinadimi?</summary>
              <p className="mt-2 text-black"> ✅ Bizda xalqaro akkreditatsiya mavjud – diplom O‘zbekistonda ham, xorijda ham amal qiladi. <br />
              🎓 Biz HEMIS tizimi orqali ishlaymiz — bu Oliy ta’lim vazirligining rasmiy axborot tizimi bo‘lib, barcha institutlar aynan shu tizimga biriktirilgan. <br /> Diplomni institut emas, Oliy ta’lim vazirligi rasmiy tarzda taqdim etadi..</p>
            </details>
            <details className="border p-4 rounded-lg">
              <summary className="cursor-pointer font-semibold text-black/800">❓ Ish topish imkoni bormi?</summary>
              <p className="mt-2 text-black">✅ Bitiruvchilarimiz banklar, IT kompaniyalari va xalqaro tashkilotlarda faoliyat yuritmoqda.
              Xususan, Samarqand viloyati Soliq qo‘mitasi bilan rasmiy shartnomamiz mavjud bo‘lib, talabalarimiz amaliyot o‘tashadi va ishga qabul qilish uchun rezerv ro‘yxatiga kiritiladi.</p>
            </details> 
              <details className="border p-4 rounded-lg">
              <summary className="cursor-pointer font-semibold text-black/800">Qanday hujjatlar talab qilinadi?</summary>
              <ul className='text-black/800'>
              <li className="mt-2 text-black">🔸 Pasport nusxasi 3 dona</li>
              <li className="mt-2 text-black">🔸 Diplom yoki atestat (ilovasi bilan birga) asil nusxasi</li>
              <li className="mt-2 text-black">🔸 Institut bilan tuzilgan shartnoma</li>
              <li className="mt-2 text-black">🔸 Konvert A4 1 dona</li>
              <li className="mt-2 text-black">🔸 Papka (дело) 1 dona</li>
              <li className="mt-2 text-black">🔸 3x4 rasm 6 dona</li>
              <li className="mt-2 text-black">🔸 Til bilish sertifikati nusxasi, asli ko’rsatilgan holda (agar bo’lsa)</li>
              <li className="mt-2 text-black">🔸 Familiya o’zgargan bo’lsa, FHDYO dan ma’lumotnoma</li>
              </ul>
            </details>
            <details className="border p-4 rounded-lg">
              <summary className="cursor-pointer font-semibold text-black/800">Grant imkoniyatlari bormi?</summary>
              <p className="mt-2 text-black/800">Ha, IELTS va SAT sertifikati bor talabalar uchun grantlar mavjud.</p>
            </details>
          </div>
        </div>
      </section>

    {/* Gallery ---------------- */}
    <h1 className='text-2xl  pb-2 border-b-2 border-red-600'>Ijtimoiy faoliyat</h1>
    <div className="w-full grid grid-cols-2 gap-2 my-4">
    <Image src={gal} alt="ISFT" layout='fit' className='object-cover'/>
    <Image src={gal3} alt="ISFT" layout='fit' className='object-cover'/>
    {/* <Image src="/t1.JPG" alt="ISFT" width={600} height={400} className="object-cover" /> */}
    {/* <Image src="/t2.JPG" alt="ISFT" width={600} height={400} className="object-cover" /> */}
    </div>

    </>
  )
}


const aboutData = [
  {id:1, title: 'Англиядаги', desc: 'Norwich Institute for Language Education (NILE)'},
  {id:2, title: 'Malayziya', desc: 'UCSI Universiteti '},
  {id:3, title: 'Malayziya', desc: 'Universiti Putra Malaysia (UPM)'},
  {id:4, title: 'Malayziya', desc: 'Universiti Malaysia Sarawak (UNIMAS)'},
  {id:5, title: 'Malayziya', desc: 'Universiti Pendidikan Sultan Idris (UPSI)'},
  {id:6, title: 'Xitoy', desc: 'Sias University'},
  {id:7, title: 'Turkiya', desc: 'Istanbul Aydın Universiteti'},
  {id:8, title: 'Turkiya', desc: 'Istanbul Medipol Universiteti'},
  {id:9, title: 'Turkiya', desc: 'Alanya Universitesi'},
  {id:10, title: 'Qozog‘istondagi', desc: 'AlmaU Universitesi'},
  {id:11, title: 'Belarusiyadagi', desc: 'Polotsk Davlat Universiteti'},
  {id:12, title: 'Pokistondagi', desc: 'Superior Universiteti'},
  {id:13, title: 'Latviya', desc: 'Riga Aviation University (Menegment fakulteti bilan)'},
  {id:14, title: 'Chexiya', desc: 'High School Teachers European Society va Prague Institute of Management and TechnologyRiga Aviation University (Menegment fakulteti bilan)'},
]