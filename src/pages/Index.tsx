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

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-3 text-[#c9a25a] text-xs md:text-sm tracking-[0.35em] uppercase font-medium">
    <span className="w-8 gold-line" />
    {children}
    <span className="w-8 gold-line" />
  </div>
);

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
    <div className="min-h-screen bg-[#0a0805] text-[#f5efe6] font-sans overflow-x-hidden relative">
      <div className="pointer-events-none fixed inset-0 bg-noise opacity-50 z-0" />
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] rounded-full bg-[#c9a25a]/10 blur-[160px] z-0" />

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0805]/80 border-b border-[#c9a25a]/15">
        <div className="container flex items-center justify-between h-16">
          <span className="font-display text-xl md:text-2xl tracking-wide">
            Марина <span className="text-gold italic">Велес</span>
          </span>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#f5efe6]/60">
            {nav.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="hover:text-[#e8c879] transition-colors tracking-wide">
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('register')} className="btn-gold rounded-none font-semibold tracking-wide uppercase text-xs">
            Записаться
          </Button>
        </div>
      </header>

      <main className="relative z-10">
        {/* HERO */}
        <section id="hero" className="container pt-16 md:pt-24 pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="animate-fade-up flex lg:justify-start justify-center">
                <Eyebrow>4 июля · 13:00 МСК · Бесплатно</Eyebrow>
              </div>

              <h1 className="animate-fade-up mt-8 font-display text-4xl md:text-6xl font-semibold leading-[1.08]" style={{ animationDelay: '0.1s', opacity: 0 }}>
                Экскурсия на первый учебный <span className="text-gold italic">онлайн-вебинар</span> 5 потока
              </h1>

              <p className="animate-fade-up mt-7 text-base md:text-lg text-[#f5efe6]/65 max-w-xl lg:mx-0 mx-auto font-light leading-relaxed" style={{ animationDelay: '0.2s', opacity: 0 }}>
                2 часа внутри 5 потока программы «Сексуальные получают ВСЁ!» (СПВ).
                Смотрите, как Марина Велес работает с участницами, и решайте — это ваше или нет.
              </p>

              <div className="animate-fade-up mt-10" style={{ animationDelay: '0.3s', opacity: 0 }}>
                <Button onClick={() => scrollTo('register')} className="btn-gold rounded-none text-sm font-semibold uppercase tracking-[0.2em] px-10 py-7 h-auto">
                  Записаться на экскурсию
                </Button>
              </div>
            </div>

            {/* portrait */}
            <div className="animate-fade-up relative" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-4 border border-[#c9a25a]/30" />
                <img src={HERO_IMG} alt="Марина Велес" className="relative w-full object-cover grayscale-[15%]" style={{ aspectRatio: '4/5' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0805] via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* countdown */}
          <div className="animate-fade-up mt-20 flex flex-wrap justify-center gap-4 md:gap-6" style={{ animationDelay: '0.4s', opacity: 0 }}>
            {time.map((t) => (
              <div key={t.l} className="gold-border w-20 md:w-28 py-4 md:py-6 text-center">
                <div className="font-display text-3xl md:text-5xl font-semibold text-gold tabular-nums">
                  {String(t.v).padStart(2, '0')}
                </div>
                <div className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#f5efe6]/45">{t.l}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="container"><div className="gold-line" /></div>

        {/* PROGRAM */}
        <section id="program" className="container py-24">
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>За 2 часа</Eyebrow>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-semibold">
              Что вас <span className="text-gold italic">ждёт</span>
            </h2>
            <p className="mt-5 text-[#f5efe6]/60 text-lg font-light">
              Мы не будем рассказывать «как в обучении всё классно». Мы просто покажем!
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-px bg-[#c9a25a]/15 max-w-4xl mx-auto gold-border">
            {[
              'Увидите, как проходит первый онлайн-вебинар «Вопрос-Ответ» вживую',
              'Посмотрите, как Марина Велес отвечает на вопросы участниц (задать свой вопрос в рамках экскурсии нельзя)',
              'Поймёте, близок ли вам такой подход, формат, манера и подача',
              'Почувствуете атмосферу и энергию группы',
              'Решите для себя: хотите ли вы пройти всю программу',
            ].map((t, i) => (
              <div key={i} className="flex gap-4 bg-[#0a0805] p-7 hover:bg-[#100c06] transition-colors">
                <Icon name="Plus" size={20} className="shrink-0 mt-0.5 text-[#c9a25a]" />
                <span className="text-[#f5efe6]/80 font-light">{t}</span>
              </div>
            ))}
          </div>
        </section>

        {/* КОМУ ПОДОЙДЁТ */}
        <section className="container py-24">
          <div className="text-center mb-14">
            <Eyebrow>Для кого</Eyebrow>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-semibold">
              Кому экскурсия <span className="text-gold italic">подойдёт</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: 'Sparkles', t: 'Вы думали о программе СПВ или другом обучении в Школе, но сомневались' },
              { icon: 'Eye', t: 'Хотите увидеть, как работает эксперт, до того как оплачивать' },
              { icon: 'Heart', t: 'Хотите просто посмотреть и принять осознанное решение' },
            ].map((c, i) => (
              <div key={i} className="gold-border p-9 text-center">
                <div className="mx-auto w-14 h-14 border border-[#c9a25a]/40 flex items-center justify-center">
                  <Icon name={c.icon} size={24} className="text-[#e8c879]" />
                </div>
                <p className="mt-6 text-[#f5efe6]/80 font-light">{c.t}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className="container py-24 text-center">
          <Eyebrow>Почему стоит</Eyebrow>
          <h2 className="mt-6 font-display text-4xl md:text-5xl font-semibold">
            Это экскурсия <span className="text-gold italic">внутрь программы</span>
          </h2>

          <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { big: '6–8 ч', t: 'Обычно вводный вебинар идёт столько времени' },
              { big: '2 часа', t: 'Вы получите бесплатно — заглянуть в программу до покупки' },
              { big: '0 ₽', t: 'Абсолютно бесплатно. Только ваш интерес и решение' },
            ].map((c, i) => (
              <div key={i} className="gold-border p-10">
                <div className="font-display text-6xl font-semibold text-gold">{c.big}</div>
                <p className="mt-4 text-[#f5efe6]/65 font-light">{c.t}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto gold-border p-10 text-left">
            <h3 className="font-display text-3xl font-semibold text-center mb-8">Что дальше после экскурсии</h3>
            {[
              'Продолжить с нами и пойти на 5 поток СПВ в этом году',
              'Или просто поблагодарить за опыт. Это тоже прекрасно!',
            ].map((t, i) => (
              <div key={i} className="flex gap-4 items-center py-3">
                <Icon name="ArrowRight" size={20} className="text-[#c9a25a] shrink-0" />
                <span className="text-[#f5efe6]/80 text-lg font-light">{t}</span>
              </div>
            ))}
          </div>
        </section>

        {/* REGISTER */}
        <section id="register" className="container py-24">
          <div className="mx-auto max-w-2xl gold-border p-8 md:p-12">
            <div className="text-center">
              <Eyebrow>4 июля · 13:00 МСК</Eyebrow>
              <h2 className="mt-6 font-display text-4xl md:text-5xl font-semibold">
                2 часа <span className="text-gold italic">бесплатно</span>
              </h2>
            </div>

            <form className="mt-10 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Имя" className="h-14 rounded-none bg-[#100c06] border-[#c9a25a]/25 text-[#f5efe6] placeholder:text-[#f5efe6]/35 text-base focus-visible:ring-[#c9a25a]/40" />
              <Input type="email" placeholder="E-mail" className="h-14 rounded-none bg-[#100c06] border-[#c9a25a]/25 text-[#f5efe6] placeholder:text-[#f5efe6]/35 text-base focus-visible:ring-[#c9a25a]/40" />
              <Input type="tel" placeholder="Телефон" className="h-14 rounded-none bg-[#100c06] border-[#c9a25a]/25 text-[#f5efe6] placeholder:text-[#f5efe6]/35 text-base focus-visible:ring-[#c9a25a]/40" />
              <Button type="submit" className="btn-gold w-full h-14 rounded-none text-sm font-semibold uppercase tracking-[0.2em]">
                Записаться на экскурсию
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-[#f5efe6]/50 font-light leading-relaxed">
              Регистрируйтесь, чтобы попасть на вебинар «Вопрос-Ответ» из программы СПВ.
              Посмотрите, как работает Марина Велес и как проходит обучение.
            </p>
          </div>

          <div className="mx-auto max-w-2xl mt-8 border border-[#c9a25a]/25 bg-[#100c06] p-6">
            <div className="flex items-center gap-2 font-medium text-[#e8c879] mb-4 tracking-wide uppercase text-sm">
              <Icon name="TriangleAlert" size={18} /> Важно
            </div>
            <ul className="space-y-3 text-[#f5efe6]/70 text-sm font-light">
              <li className="flex gap-3"><Icon name="Minus" size={18} className="text-[#c9a25a] shrink-0" /> Запись предоставлена не будет — экскурсия проходит вживую</li>
              <li className="flex gap-3"><Icon name="Minus" size={18} className="text-[#c9a25a] shrink-0" /> Вы не сможете задать свой вопрос, разбираются только вопросы учениц</li>
              <li className="flex gap-3"><Icon name="Minus" size={18} className="text-[#c9a25a] shrink-0" /> Количество мест ограничено техническими возможностями платформы</li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="container py-24">
          <div className="text-center mb-12">
            <Eyebrow>Q & A</Eyebrow>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-semibold">
              Вопросы <span className="text-gold italic">и ответы</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto space-y-3">
            {[
              { q: 'Это правда бесплатно?', a: 'Да, абсолютно. Вы получаете 2 часа внутри программы без оплаты — это возможность заглянуть в обучение до покупки.' },
              { q: 'Смогу ли я задать свой вопрос?', a: 'Нет. В рамках экскурсии разбираются только вопросы участниц программы. Вы наблюдаете за форматом «Вопрос-Ответ».' },
              { q: 'Будет ли запись?', a: 'Запись не предоставляется. Экскурсия проходит вживую, в формате реального онлайн-вебинара.' },
              { q: 'Что будет после экскурсии?', a: 'У вас будет выбор: продолжить и пойти на 5 поток СПВ в этом году — или просто поблагодарить за опыт. Только ваш интерес и решение.' },
            ].map((f, i) => (
              <AccordionItem key={i} value={String(i)} className="border border-[#c9a25a]/20 bg-[#100c06] px-6">
                <AccordionTrigger className="text-left text-[#f5efe6] hover:no-underline font-normal">{f.q}</AccordionTrigger>
                <AccordionContent className="text-[#f5efe6]/65 font-light">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[#c9a25a]/15 py-12 text-center text-[#f5efe6]/40 text-sm">
        <p className="font-display text-2xl text-[#f5efe6]/80 italic">Марина Велес</p>
        <p className="mt-3 tracking-wide font-light">© 2026 · Программа «Сексуальные получают ВСЁ!»</p>
      </footer>
    </div>
  );
};

export default Index;
