'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import React from 'react'
import { title } from 'process';
import FormPage from './component/gptForm';

export default function HeroPage () {

  const bullets = [
    'Sotuvning turlari va asoslari',
    'Mijoz turlari va ishlash yo‘llari',
    'Sotuvni nimadan boshlash — ehtiyoj/qiymat',
    'Servis va mijoz tajribasi (CX)',
    'Sotuv voronkasi (funnel) tuzish',
    'Tana tili va ta’sirchan nutq',
    'E’tirozlar bilan ishlash texnikalari'
  ];

  const items = [
    { q: 'Kurs davomiyligi qancha?', a: '4 hafta. Har hafta 3 ta dars: nazariya + amaliy mashg‘ulotlar + savol‑javob.' },
    { q: 'Ishga joylashishda yordam bormi?', a: 'Ha. HR‑intervyu tayyorgarligi, resume, hamkorlar bazasiga ulashamiz.' },
    { q: 'Onlayn qatnashsa bo‘ladimi?', a: 'Gibrid format: offline/online. Dars yozuvlari shaxsiy kabinetda saqlanadi.' }
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="container-x flex items-center justify-between h-16">
        <Link href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-primary-600 grid place-items-center text-white font-bold">SK</div>
          <span className="font-semibold">Sotuv Kursi</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:text-primary-700">Afzalliklar</a>
          <a href="#program" className="hover:text-primary-700">Dastur</a>
          <a href="#pricing" className="hover:text-primary-700">Narx</a>
          <a href="#faq" className="hover:text-primary-700">Savollar</a>
        </nav>
        <a href="#lead" className="inline-flex items-center rounded-xl2 px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 transition-shadow shadow-soft">Ro‘yxatdan o‘ting</a>
      </div>
    </header>

    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-50 via-white to-white" />
      <div className="container-x py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-xs text-primary-700">1 oyda amaliy natija • Ishga yo‘naltirish</div>
          <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Sotuvda kuchli bo‘ling —
            <span className="block text-primary-700">professional kurs bilan</span>
          </h1>
          <p className="mt-4 text-gray-700 text-base md:text-lg">
            Mijoz psixologiyasi, e’tirozlar bilan ishlash, voronka va ta’sirchan nutq. Ustozlar — 10+ yillik tajriba.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#lead" className="inline-flex items-center justify-center rounded-xl2 px-5 py-3 bg-primary-600 text-white hover:bg-primary-700 shadow-soft">Bugunoq yoziling</a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl2 px-5 py-3 border border-gray-200 hover:border-gray-300">Dastur bilan tanishing</a>
          </div>
          <div className="mt-6 text-sm text-gray-600">Telefon: <a className="underline" href="tel:+998555187070">+998 55 518 70 70</a></div>
        </div>
        <div className="relative px-3 md:px-0">{/* ikki chetida joy qolsin (mobile padding) */}
          <div className="rounded-3xl shadow-soft overflow-hidden border bg-paper">
            <Image
              src=""
              alt="Sotuv kursi — hero vizual"
              width={1280}
              height={960}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-primary-600 text-white shadow-soft p-4">
            <p className="text-sm font-semibold">Bitiruvchilarning 87% — ishga joylashgan</p>
            <p className="text-xs opacity-90">Kurs yakunida HR-intervyu va portfolio</p>
          </div>
        </div>
      </div>
    </section>

    <FormPage />
 
    <section id="program" className="py-16 md:py-24">
      <div className="container-x grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">1 oylik dastur</h2>
          <p className="mt-2 text-gray-700">Har hafta nazariya + amaliy mashg‘ulotlar, real vazifalar va feedback.</p>
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1 h-5 w-5 rounded-full bg-primary-600 text-white text-xs grid place-items-center">✓</span>
                <span className="text-sm md:text-base">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border shadow-soft p-6 bg-paper">
          <h3 className="text-lg font-semibold">Ustozlar haqida</h3>
          <p className="mt-2 text-sm text-gray-700">10 yildan ortiq tajribaga ega, yirik kompaniyalar bilan ishlagan trenerlar. Har darsda amaliy kays va role‑play.</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border p-4">
              <div className="relative h-28 w-full rounded-xl overflow-hidden bg-gray-100">
                <Image src="" alt="Ustoz 1" fill className="object-cover" />
              </div>
              <p className="mt-3 font-medium">Ustoz 1</p>
              <p className="text-xs text-gray-500">B2B/B2C sotuv, 12 yil</p>
            </div>
            <div className="rounded-2xl border p-4">
              <div className="relative h-28 w-full rounded-xl overflow-hidden bg-gray-100">
                <Image src="" alt="Ustoz 2" fill className="object-cover" />
              </div>
              <p className="mt-3 font-medium">Ustoz 2</p>
              <p className="text-xs text-gray-500">Call‑center/Sales Ops, 10 yil</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container-x">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Narx va imkoniyatlar</h2>
        <p className="text-center text-gray-600 mt-2">Hamyonbop to‘lov, qulay grafik, bonus materiallar</p>
        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border bg-paper p-6 shadow-soft">
            <p className="text-sm font-semibold text-primary-700">START</p>
            <p className="mt-2 text-3xl font-extrabold">1 290 000 so‘m</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• Darslar (4 hafta)</li>
              <li>• Materiallar va skriptlar</li>
              <li>• Yakuniy test</li>
            </ul>
            <a href="#lead" className="mt-6 inline-flex w-full justify-center rounded-xl2 px-5 py-3 bg-primary-600 text-white hover:bg-primary-700">Tanlash</a>
          </div>
          <div className="rounded-2xl border-2 border-primary-600 bg-paper p-6 shadow-soft">
            <p className="text-sm font-semibold text-primary-700">PRO</p>
            <p className="mt-2 text-3xl font-extrabold">1 990 000 so‘m</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• Barchasi + mentorlik (1 oy)</li>
              <li>• HR‑intervyu tayyorgarligi</li>
              <li>• Portfolio kayslar</li>
            </ul>
            <a href="#lead" className="mt-6 inline-flex w-full justify-center rounded-xl2 px-5 py-3 bg-primary-600 text-white hover:bg-primary-700">Eng mashhur</a>
          </div>
          <div className="rounded-2xl border bg-paper p-6 shadow-soft">
            <p className="text-sm font-semibold text-primary-700">TEAM</p>
            <p className="mt-2 text-3xl font-extrabold">Kelishuv asosida</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• Kompaniya uchun in‑house trening</li>
              <li>• KPI asosida dastur</li>
              <li>• Maxsus skriptlar</li>
            </ul>
            <a href="#lead" className="mt-6 inline-flex w-full justify-center rounded-xl2 px-5 py-3 border border-gray-200 hover:border-gray-300">Bog‘lanish</a>
          </div>
        </div>
      </div>
    </section>

    <section id="faq" className="py-16 md:py-24">
      <div className="container-x max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Ko‘p so‘raladigan savollar</h2>
        <div className="mt-8 space-y-4">
          {items.map((it, i) => (
            <div key={it.q} className="rounded-2xl border bg-paper shadow-soft">
              <button
                className="w-full text-left p-5 flex items-center justify-between"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-medium">{it.q}</span>
                <span className="text-xl">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <div className="px-5 pb-5 pt-0 text-sm text-gray-700">{it.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-white">
      <div className="container-x">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Kurs lavhalari</h2>
        <p className="text-center text-gray-600 mt-2">Rasmlar Pinterest/Google orqali link bilan joylandi</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden border shadow-soft px-3 md:px-0">{/* ikki cheti bo'sh */}
            <Image src="" alt="Dars jarayoni" width={800} height={600} className="w-full h-auto object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden border shadow-soft px-3 md:px-0">
            <Image src="" alt="Role‑play" width={800} height={600} className="w-full h-auto object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden border shadow-soft px-3 md:px-0">
            <Image src="" alt="Sertifikat topshirish" width={800} height={600} className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
    <footer className="py-10 border-t">
      <div className="container-x flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Sotuv Kursi. Barcha huquqlar himoyalangan.</p>
        <div className="flex items-center gap-4 text-sm">
          <a className="hover:text-primary-700" href="tel:+998555187070">Telefon</a>
          <a className="hover:text-primary-700" href="mailto:info@example.com">Email</a>
          <a className="hover:text-primary-700" href="#">Maxfiylik</a>
        </div>
      </div>
    </footer>
 
    </div>
  )
}

