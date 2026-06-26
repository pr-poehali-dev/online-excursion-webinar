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
    <div className="min-h-screen bg-[#140b1e] text-white font-sans overflow-x-hidden relative">
      {/* atmosphere */}
      <div className="pointer-events-none fixed inset-0 bg-noise opacity-60 z-0" />
      <div className="pointer-events-none fixed -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-[#ff3d77]/25 blur-[140px] animate-glow z-0" />
      <div className="pointer-events-none fixed top-1/3 -right-52 w-[44rem] h-[44rem] rounded-full bg-[#ff7a4d]/20 blur-[150px] animate-glow z-0" style={{ animationDelay: '2s' }} />

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#140b1e]/70 border-b border-white/5">
        <div className="container flex items-center justify-between h-16">
          <span className="font-display text-2xl font-bold tracking-tight">
            Марина <span className="text-gradient">Велес</span>
          </span>
          <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
            {nav.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="hover:text-white transition-colors">
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('register')} className="btn-gradient text-white rounded-full font-semibold">
            Записаться
          </Button>
        </div>
      </header>

      <main className="relative z-10">
        {/* HERO */}
        <section id="hero" className="container pt-20 pb-24 text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[#ff7a4d]/40 bg-[#ff7a4d]/10 px-5 py-2 text-sm font-semibold text-[#ffb088]">
            <Icon name="Calendar" size={16} />
            4 ИЮЛЯ В 13:00 МСК · БЕСПЛАТНО
          </div>

          <h1 className="animate-fade-up mt-8 font-display text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl mx-auto" style={{ animationDelay: '0.1s', opacity: 0 }}>
            Экскурсия на первый учебный <span className="text-gradient">онлайн-вебинар</span> 5 потока
          </h1>

          <p className="animate-fade-up mt-7 text-lg md:text-xl text-white/70 max-w-2xl mx-auto" style={{ animationDelay: '0.2s', opacity: 0 }}>
            2 часа внутри 5 потока программы «Сексуальные получают ВСЁ!» (СПВ).
            Смотрите, как Марина Велес работает с участницами, и решайте — это ваше или нет.
          </p>

          {/* countdown */}
          <div className="animate-fade-up mt-12 flex justify-center gap-3 md:gap-5" style={{ animationDelay: '0.3s', opacity: 0 }}>
            {time.map((t) => (
              <div key={t.l} className="w-20 md:w-28 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md py-4 md:py-6">
                <div className="font-display text-4xl md:text-6xl font-bold text-gradient tabular-nums">
                  {String(t.v).padStart(2, '0')}
                </div>
                <div className="mt-1 text-xs md:text-sm uppercase tracking-wider text-white/50">{t.l}</div>
              </div>
            ))}
          </div>

          <Button
            onClick={() => scrollTo('register')}
            className="animate-fade-up btn-gradient text-white rounded-full text-lg font-bold px-10 py-7 mt-12 h-auto"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            👉 Записаться на экскурсию
          </Button>
        </section>

        {/* PROGRAM — что вас ждёт */}
        <section id="program" className="container py-24">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Что вас ждёт <span className="text-gradient">за 2 часа</span>
            </h2>
            <p className="mt-5 text-white/70 text-lg">
              Мы не будем рассказывать «как в обучении всё классно». Мы просто покажем!
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              'Увидите, как проходит первый онлайн-вебинар «Вопрос-Ответ» вживую',
              'Посмотрите, как Марина Велес отвечает на вопросы участниц (в рамках экскурсии задать свой вопрос нельзя)',
              'Поймёте, близок ли вам такой подход, формат, манера и подача',
              'Почувствуете атмосферу и энергию группы',
              'Решите для себя: хотите ли вы пройти всю программу',
            ].map((t, i) => (
              <div key={i} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#ff7a4d]/40 transition-colors">
                <Icon name="Check" size={22} className="shrink-0 mt-0.5 text-[#ff8a5c]" />
                <span className="text-white/85">{t}</span>
              </div>
            ))}
          </div>
        </section>

        {/* КОМУ ПОДОЙДЁТ */}
        <section className="container py-24">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#ff3d77]/10 to-[#ff7a4d]/5 p-10 md:p-16 max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center">
              Кому эта экскурсия <span className="text-gradient">подойдёт</span>
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                { icon: 'Sparkles', t: 'Вы думали о программе СПВ или другом обучении в Школе, но сомневались' },
                { icon: 'Eye', t: 'Хотите увидеть, как работает эксперт, до того как оплачивать' },
                { icon: 'Heart', t: 'Хотите просто посмотреть и принять осознанное решение' },
              ].map((c, i) => (
                <div key={i} className="text-center">
                  <div className="mx-auto w-14 h-14 rounded-2xl btn-gradient flex items-center justify-center">
                    <Icon name={c.icon} size={26} className="text-white" />
                  </div>
                  <p className="mt-5 text-white/85">{c.t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS — почему стоит посмотреть */}
        <section id="benefits" className="container py-24 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Почему <span className="text-gradient">стоит посмотреть</span>
          </h2>
          <p className="mt-5 text-white/70 text-lg max-w-2xl mx-auto">
            Это не просто лекция. Это экскурсия внутрь программы.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { big: '6–8 ч', t: 'Обычно вводный вебинар идёт столько времени' },
              { big: '2 часа', t: 'Вы получите бесплатно — заглянуть в программу до покупки' },
              { big: '0 ₽', t: 'Абсолютно бесплатно. Только ваш интерес и решение' },
            ].map((c, i) => (
              <div key={i} className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
                <div className="font-display text-6xl font-bold text-gradient">{c.big}</div>
                <p className="mt-4 text-white/75">{c.t}</p>
              </div>
            ))}
          </div>

          {/* что дальше */}
          <div className="mt-16 max-w-3xl mx-auto rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-left">
            <h3 className="font-display text-3xl font-bold text-center mb-8">Что дальше после экскурсии</h3>
            {[
              'Продолжить с нами и пойти на 5 поток СПВ в этом году',
              'Или просто поблагодарить за опыт. Это тоже прекрасно!',
            ].map((t, i) => (
              <div key={i} className="flex gap-4 items-center py-3">
                <Icon name="ArrowRight" size={20} className="text-[#ff8a5c] shrink-0" />
                <span className="text-white/85 text-lg">{t}</span>
              </div>
            ))}
          </div>
        </section>

        {/* REGISTER + CONTACTS */}
        <section id="register" className="container py-24">
          <div className="mx-auto max-w-2xl rounded-3xl border border-[#ff7a4d]/30 bg-gradient-to-b from-[#ff3d77]/10 to-transparent p-8 md:p-12">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-[#ffb088] font-semibold">
                <Icon name="Clock" size={18} /> 4 ИЮЛЯ, 13:00 МСК
              </div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
                2 часа <span className="text-gradient">бесплатно</span>
              </h2>
            </div>

            <form className="mt-10 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Имя" className="h-14 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/40 text-base" />
              <Input type="email" placeholder="E-mail" className="h-14 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/40 text-base" />
              <Input type="tel" placeholder="Телефон" className="h-14 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/40 text-base" />
              <Button type="submit" className="btn-gradient w-full h-14 rounded-xl text-lg font-bold text-white">
                Записаться на экскурсию
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-white/55">
              Регистрируйтесь, чтобы попасть на вебинар «Вопрос-Ответ» из программы СПВ.
              Посмотрите, как работает Марина Велес и как проходит обучение.
            </p>
          </div>

          {/* важно */}
          <div className="mx-auto max-w-2xl mt-8 rounded-2xl border border-[#ff3d77]/30 bg-[#ff3d77]/10 p-6">
            <div className="flex items-center gap-2 font-semibold text-[#ffb088] mb-4">
              <Icon name="TriangleAlert" size={20} /> Важно
            </div>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex gap-3"><Icon name="X" size={18} className="text-[#ff5a8c] shrink-0" /> Запись предоставлена не будет — экскурсия проходит вживую</li>
              <li className="flex gap-3"><Icon name="X" size={18} className="text-[#ff5a8c] shrink-0" /> Вы не сможете задать свой вопрос, разбираются только вопросы учениц</li>
              <li className="flex gap-3"><Icon name="Users" size={18} className="text-[#ff8a5c] shrink-0" /> Количество мест ограничено техническими возможностями платформы</li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="container py-24">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-12">
            Вопросы <span className="text-gradient">и ответы</span>
          </h2>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto space-y-3">
            {[
              { q: 'Это правда бесплатно?', a: 'Да, абсолютно. Вы получаете 2 часа внутри программы без оплаты — это возможность заглянуть в обучение до покупки.' },
              { q: 'Смогу ли я задать свой вопрос?', a: 'Нет. В рамках экскурсии разбираются только вопросы участниц программы. Вы наблюдаете за форматом «Вопрос-Ответ».' },
              { q: 'Будет ли запись?', a: 'Запись не предоставляется. Экскурсия проходит вживую, в формате реального онлайн-вебинара.' },
              { q: 'Что будет после экскурсии?', a: 'У вас будет выбор: продолжить и пойти на 5 поток СПВ в этом году — или просто поблагодарить за опыт. Только ваш интерес и решение.' },
            ].map((f, i) => (
              <AccordionItem key={i} value={String(i)} className="rounded-2xl border border-white/10 bg-white/[0.03] px-6">
                <AccordionTrigger className="text-left text-white hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-white/70">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-10 text-center text-white/40 text-sm">
        <p className="font-display text-xl text-white/70">Марина Велес · Программа СПВ</p>
        <p className="mt-2">© 2026 · «Сексуальные получают ВСЁ!»</p>
      </footer>
    </div>
  );
};

export default Index;
