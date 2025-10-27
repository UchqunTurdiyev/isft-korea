'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function FormPage() {
  const [ism, setIsm] = useState('');
  const [familya, setFamilya] = useState('');
  const [telefon, setTelefon] = useState('');
  const [xato, setXato] = useState('');
  const [yuborildi, setYuborildi] = useState(false);
  const [btn, setBtn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (btn) return;
  
    if (!ism || !familya || !telefon) {
      setXato('❌ Barcha maydonlarni to‘ldiring!');
      return;
    }
  
    if (ism.trim().length < 3) {
      setXato('❌ Ism kamida 3 ta harfdan iborat bo‘lishi kerak!');
      return;
    }
  
    if (familya.trim().length < 3) {
      setXato('❌ Familya kamida 3 ta harfdan iborat bo‘lishi kerak!');
      return;
    }
  
    const onlyNumbers = /^\d+$/;
    if (!onlyNumbers.test(telefon)) {
      setXato('❌ Telefon faqat raqamlardan iborat bo‘lishi kerak!');
      return;
    }
  
    if (telefon.length < 7) {
      setXato('❌ Telefon raqami kamida 7 ta belgidan iborat bo‘lishi kerak!');
      return;
    }
  
    setBtn(true);
    setXato('');
  
    try {
      const telegramToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
      const telegramChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
  
      const telegramRes = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: `📥 Yangi ro‘yxatdan o‘tuvchi:\n\n👤 Ism: ${ism}\n👪 Familya: ${familya}\n📱 Telefon: ${telefon}`,
        }),
      });
  
      const telegramData = await telegramRes.json();
  
      if (telegramData.ok) {
        setYuborildi(true);
        setIsm('');
        setFamilya('');
        setTelefon('');
        window.location.href = 'https://www.instagram.com/sotuv_mutaxassisi/';
      } else {
        console.error('Telegram API xatosi:', telegramData);
        setXato('❌ Telegramga yuborishda xatolik bo‘ldi.');
        setBtn(false);
      }
    } catch (err) {
      console.error('Telegram yuborishda xato:', err);
      setXato('❌ Internet bilan bog‘liq muammo.');
      setBtn(false);
    }
  };
   

  return (
    <div className='w-full' id='gptForms'>
      <h1 className='text-2xl my-4 pb-2 border-b-2 border-red-600 px-20 text-center'>
      Sotuv kursida alo darajada tahsil olib, so‘ngra ish bilan ta’minlanishga nima deysiz?
      </h1>
      <form
        onSubmit={handleSubmit}
        className='lg:w-md w-full flex gap-3 justify-center mx-auto items-center flex-col'
      >
        <h2 className='py-2 text-md'>📝 Ro‘yxatdan o‘tish</h2>
        <input
          type='text'
          placeholder='Ismingiz'
          value={ism}
          onChange={(e) => setIsm(e.target.value)}
          className='w-full px-2 h-12 border border-yellow-400 rounded-md'
        />
        <input
          type='text'
          placeholder='Familyangiz'
          value={familya}
          onChange={(e) => setFamilya(e.target.value)}
          className='w-full px-2 h-12 border border-yellow-400 rounded-md'
        />
        <input
          type='number'
          placeholder='Telefon raqam'
          value={telefon}
          onChange={(e) => setTelefon(e.target.value)}
          className='w-full px-2 h-12 border border-yellow-400 rounded-md'
        />

        <button
          type='submit'
          className='w-full cursor-pointer text-white bg-yellow-500 rounded-md w-60 h-10 hover:bg-yellow-600'
          disabled={btn}
        >
          Yuborish
        </button>
      </form>

      {xato && <p style={{ color: 'red' }}>{xato}</p>}
      {yuborildi && <p style={{ color: 'green' }}>✅ Muvaffaqiyatli yuborildi!</p>}
    </div>
  );
}
