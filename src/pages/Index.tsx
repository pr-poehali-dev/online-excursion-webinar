import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/82a11448-fa67-4a8c-b3cb-a47fba001dd3/files/20a058ac-ade0-4765-bccd-99cde1430dfb.jpg';

const TARGET = new Date('2026-07-04T13:00:00+03:00');

const useCountdown = () => {
  const [diff, setDiff] = useState(TARGET.getTime() - Date.now());
  useEffect(() => {
    const t = setInterval(() => setDiff(TARGET.getTime() - Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const clamp = Math.max(diff, 0);
  return {
    days: Math.floor(clamp / 86400000),
    hours: Math.floor((clamp / 3600000) % 24),
    minutes: Math.floor((clamp / 60000) % 60),
    seconds: Math.floor((clamp / 1000) % 60),
  };
};

const nav = [
  { id: 'hero', label: 'Главная' },
  { id: 'program', label: 'Программа' },
  { id: 'benefits', label: 'Преимущества' },
  { id: 'faq', label: 'Вопросы' },
  { id: 'register', label: 'Контакты' },
];

const Index = () => {
  const { days, hours, minutes, seconds } = useCountdown();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const time = [
    { v: days, l: 'дней' },
    { v: hours, l: 'часов' },
    { v: minutes, l: 'минут' },
    { v: seconds, l: 'секунд' },
  ];

  return (
    <div className="min-h-screen font-sans overflow-x-hidden relative" style={{ background: '#141414', color: '#FFFFFF' }}>
      <div className="pointer-events-none fixed inset-0 bg-noise opacity-60 z-0" />

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ background: 'rgba(20,20,20,0.85)', borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="container flex items-center justify-between h-16">
          <span className="font-display text-xl md:text-2xl font-bold tracking-wide uppercase">
            Марина <span style={{ color: '#DD0C26' }}>Велес</span>
          </span>
          <nav className="hidden md:flex items-center gap-8 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {nav.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="hover:text-white transition-colors tracking-wide uppercase text-xs">
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('register')} className="btn-red rounded-none font-bold tracking-widest uppercase text-xs px-6">
            Записаться
          </Button>
        </div>
      </header>

      <main className="relative z-10">
        {/* HERO */}
        <section id="hero" className="container pt-16 md:pt-24 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* text */}
            <div className="text-center lg:text-left">
              <div className="animate-fade-up inline-block text-xs font-bold uppercase tracking-[0.3em] mb-6 px-4 py-2" style={{ color: '#FAF143', border: '1px solid rgba(250,241,67,0.35)' }}>
                4 июля &nbsp;·&nbsp; 13:00 МСК &nbsp;·&nbsp; Бесплатно
              </div>

              <h1 className="animate-fade-up font-display text-4xl md:text-6xl font-bold leading-[1.05] uppercase" style={{ animationDelay: '0.1s', opacity: 0 }}>
                Экскурсия на первый учебный{' '}
                <span style={{ color: '#DD0C26' }}>онлайн-вебинар</span>{' '}
                5 потока
              </h1>

              <p className="animate-fade-up mt-6 text-base md:text-lg leading-relaxed font-light" style={{ animationDelay: '0.2s', opacity: 0, color: 'rgba(255,255,255,0.7)' }}>
                2 часа внутри 5 потока программы «Сексуальные получают ВСЁ!» (СПВ).
                Смотрите, как Марина Велес работает с участницами, и решайте — это ваше или нет.
              </p>

              <div className="animate-fade-up mt-10" style={{ animationDelay: '0.3s', opacity: 0 }}>
                <Button onClick={() => scrollTo('register')} className="btn-red rounded-none font-bold uppercase tracking-[0.2em] px-10 py-7 h-auto text-sm">
                  👉 Записаться на экскурсию
                </Button>
              </div>
            </div>

            {/* portrait */}
            <div className="animate-fade-up relative" style={{ animationDelay: '0.15s', opacity: 0 }}>
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-3" style={{ border: '1px solid rgba(221,12,38,0.4)' }} />
                <div className="absolute -inset-6" style={{ border: '1px solid rgba(221,12,38,0.15)' }} />
                <img src={HERO_IMG} alt="Марина Велес" className="relative w-full object-cover" style={{ aspectRatio: '4/5' }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #141414 0%, transparent 40%)' }} />
              </div>
            </div>
          </div>

          {/* countdown */}
          <div className="animate-fade-up mt-20 flex flex-wrap justify-center gap-3 md:gap-5" style={{ animationDelay: '0.4s', opacity: 0 }}>
            {time.map((t, i) => (
              <div key={t.l}>
                <div className="w-20 md:w-28 py-4 md:py-5 text-center dim-border" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <div className="font-display text-4xl md:text-5xl font-bold tabular-nums" style={{ color: '#DD0C26' }}>
                    {String(t.v).padStart(2, '0')}
                  </div>
                  <div className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.25em]" style={{ color: 'rgba(255,255,255,0.45)' }}>{t.l}</div>
                </div>
                {i < time.length - 1 && (
                  <div className="hidden md:flex items-center justify-center h-full mt-[-48px] mx-[-8px] text-2xl font-bold relative z-10" style={{ color: 'rgba(255,255,255,0.2)' }}>:</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* divider */}
        <div className="container"><div className="red-line" /></div>

        {/* PROGRAM */}
        <section id="program" className="container py-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#DD0C26' }}>Программа</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">
              ЗА 2 ЧАСА ВЫ:
            </h2>
            <p className="mt-4 font-light" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Мы не будем рассказывать «как в обучении всё классно». Мы просто покажем!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              'Увидите, как проходит первый онлайн-вебинар «Вопрос-Ответ» вживую',
              'Посмотрите, как Марина Велес отвечает на вопросы участниц (задать свой вопрос нельзя)',
              'Поймёте, близок ли вам такой подход, формат, манера и подача',
              'Почувствуете атмосферу и энергию группы',
              'Решите для себя: хотите ли вы пройти всю программу',
            ].map((t, i) => (
              <div key={i} className="flex gap-4 p-6 dim-border" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <span className="text-xl shrink-0">✔️</span>
                <span style={{ color: 'rgba(255,255,255,0.85)' }} className="font-light">{t}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ДЛЯ КОГО */}
        <section style={{ background: 'rgba(221,12,38,0.06)', borderTop: '1px solid rgba(221,12,38,0.2)', borderBottom: '1px solid rgba(221,12,38,0.2)' }}>
          <div className="container py-24">
            <div className="text-center mb-14">
              <div className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#DD0C26' }}>Для кого</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">
                Эта экскурсия для вас
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { emoji: '🔥', t: 'Вы думали о программе СПВ или другом обучении в Школе, но сомневались' },
                { emoji: '🔥', t: 'Хотите увидеть, как работает эксперт, до того как оплачивать' },
                { emoji: '🔥', t: 'Хотите просто посмотреть и принять осознанное решение' },
              ].map((c, i) => (
                <div key={i} className="p-8 text-center red-border" style={{ background: 'rgba(20,20,20,0.8)' }}>
                  <div className="text-4xl mb-5">{c.emoji}</div>
                  <p className="font-light" style={{ color: 'rgba(255,255,255,0.8)' }}>{c.t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className="container py-24 text-center">
          <div className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#DD0C26' }}>Преимущества</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-5">
            Почему стоит посмотреть
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)' }} className="mb-14 font-light">
            Это не просто лекция. Это экскурсия внутрь программы.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { big: '6–8 ч', t: 'Обычно вводный вебинар идёт столько времени' },
              { big: '2 часа', t: 'Вы получите бесплатно — заглянуть в программу до покупки', accent: true },
              { big: '0 ₽', t: 'Абсолютно бесплатно. Только ваш интерес и решение' },
            ].map((c, i) => (
              <div key={i} className="p-10 dim-border" style={{ background: c.accent ? 'rgba(221,12,38,0.1)' : 'rgba(255,255,255,0.03)', border: c.accent ? '1px solid rgba(221,12,38,0.4)' : undefined }}>
                <div className="font-display text-6xl font-bold" style={{ color: c.accent ? '#DD0C26' : '#FAF143' }}>{c.big}</div>
                <p className="mt-4 font-light" style={{ color: 'rgba(255,255,255,0.65)' }}>{c.t}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 max-w-3xl mx-auto p-10 dim-border text-left" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <h3 className="font-display text-3xl font-bold uppercase text-center mb-8">Что дальше после экскурсии</h3>
            {[
              'Продолжить с нами и пойти на 5 поток СПВ в этом году',
              'Или просто поблагодарить за опыт. Это тоже прекрасно!',
            ].map((t, i) => (
              <div key={i} className="flex gap-4 items-center py-3" style={{ borderBottom: i === 0 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                <span style={{ color: '#DD0C26' }} className="text-lg shrink-0">🔹</span>
                <span className="font-light text-lg" style={{ color: 'rgba(255,255,255,0.85)' }}>{t}</span>
              </div>
            ))}
          </div>
        </section>

        {/* REGISTER */}
        <section id="register" style={{ background: 'rgba(221,12,38,0.06)', borderTop: '1px solid rgba(221,12,38,0.2)' }}>
          <div className="container py-24">
            <div className="mx-auto max-w-2xl">
              <div className="text-center mb-10">
                <div className="inline-block text-xs font-bold uppercase tracking-[0.3em] px-4 py-2 mb-6" style={{ color: '#FAF143', border: '1px solid rgba(250,241,67,0.35)' }}>
                  ⏰ 4 июля, 13:00 МСК
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">
                  2 часа <span style={{ color: '#DD0C26' }}>бесплатно</span>
                </h2>
              </div>

              <div className="p-8 md:p-10 dim-border" style={{ background: 'rgba(20,20,20,0.9)' }}>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <Input placeholder="Имя" className="h-14 rounded-none text-base" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff' }} />
                  <Input type="email" placeholder="E-mail" className="h-14 rounded-none text-base" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff' }} />
                  <Input type="tel" placeholder="Телефон" className="h-14 rounded-none text-base" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff' }} />
                  <Button type="submit" className="btn-red w-full h-14 rounded-none text-sm font-bold uppercase tracking-[0.2em]">
                    Записаться на экскурсию
                  </Button>
                </form>
                <p className="mt-6 text-center text-sm font-light" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Регистрируйтесь, чтобы попасть на вебинар «Вопрос-Ответ» из программы СПВ.
                  Посмотрите, как работает Марина Велес и как проходит обучение.
                </p>
              </div>

              <div className="mt-6 p-6" style={{ border: '1px solid rgba(221,12,38,0.4)', background: 'rgba(221,12,38,0.07)' }}>
                <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-sm mb-4" style={{ color: '#FAF143' }}>
                  <Icon name="TriangleAlert" size={18} /> Важно
                </div>
                <ul className="space-y-3 text-sm font-light" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  <li className="flex gap-3">
                    <Icon name="X" size={16} className="shrink-0 mt-0.5" style={{ color: '#DD0C26' } as React.CSSProperties} />
                    Запись предоставлена не будет — экскурсия проходит вживую
                  </li>
                  <li className="flex gap-3">
                    <Icon name="X" size={16} className="shrink-0 mt-0.5" style={{ color: '#DD0C26' } as React.CSSProperties} />
                    Вы не сможете задать свой вопрос, разбираются только вопросы учениц
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Users" size={16} className="shrink-0 mt-0.5" style={{ color: '#FAF143' } as React.CSSProperties} />
                    Количество мест ограничено техническими возможностями платформы
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="container py-24">
          <div className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#DD0C26' }}>Q & A</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">
              Вопросы и ответы
            </h2>
          </div>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto space-y-3">
            {[
              { q: 'Это правда бесплатно?', a: 'Да, абсолютно. Вы получаете 2 часа внутри программы без оплаты — это возможность заглянуть в обучение до покупки.' },
              { q: 'Смогу ли я задать свой вопрос?', a: 'Нет. В рамках экскурсии разбираются только вопросы участниц программы. Вы наблюдаете за форматом «Вопрос-Ответ».' },
              { q: 'Будет ли запись?', a: 'Запись не предоставляется. Экскурсия проходит вживую, в формате реального онлайн-вебинара.' },
              { q: 'Что будет после экскурсии?', a: 'У вас будет выбор: продолжить и пойти на 5 поток СПВ в этом году — или просто поблагодарить за опыт. Только ваш интерес и решение.' },
            ].map((f, i) => (
              <AccordionItem key={i} value={String(i)} className="px-6" style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}>
                <AccordionTrigger className="text-left hover:no-underline font-normal text-white">{f.q}</AccordionTrigger>
                <AccordionContent style={{ color: 'rgba(255,255,255,0.65)' }} className="font-light">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      <footer className="relative z-10 py-12 text-center text-sm" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}>
        <p className="font-display text-2xl font-bold uppercase" style={{ color: 'rgba(255,255,255,0.8)' }}>Марина <span style={{ color: '#DD0C26' }}>Велес</span></p>
        <p className="mt-3 font-light tracking-wide">© 2026 · Программа «Сексуальные получают ВСЁ!»</p>
      </footer>
    </div>
  );
};

export default Index;
