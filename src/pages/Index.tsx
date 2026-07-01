import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const HERO_BG =
  'https://cdn.poehali.dev/projects/206d289d-1dc0-4741-8374-6dcf1e17ae08/files/76707d66-ee73-4b33-8136-d133b4b59d26.jpg';

const NAV = [
  { label: 'Главная', href: '#hero' },
  { label: 'Услуги', href: '#services' },
  { label: 'Калькулятор', href: '#calc' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'О нас', href: '#about' },
  { label: 'Блог', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
];

const ADDONS = [
  { id: 'nakrutka', title: 'Накрутка поведенческих факторов', price: 10000, icon: 'MousePointerClick' },
  { id: 'direct', title: 'Контекстная реклама Директ', price: 10000, icon: 'Megaphone' },
  { id: 'ai', title: 'ИИ-оптимизация контента', price: 10000, icon: 'Sparkles' },
  { id: 'social', title: 'Социальные сигналы', price: 10000, icon: 'ThumbsUp' },
  { id: 'design', title: 'Доработки дизайнером', price: 10000, icon: 'Palette' },
  { id: 'call', title: 'Коллтрекинг', price: 10000, icon: 'PhoneCall' },
  { id: 'smm', title: 'Ведение группы ВК и соцсетей', price: 10000, icon: 'Users' },
  { id: 'texts', title: '+10 SEO-текстов для сайта', price: 10000, icon: 'FileText' },
  { id: 'top1', title: 'Масштабная накрутка ПФ для ТОП-1', price: 20000, icon: 'Trophy' },
];

const BASE_PRICE = 20000;

const BASE_INCLUDES = [
  'Подготовка семантического ядра',
  'SEO-аудит — по 200 показателям',
  'ТЗ программисту на 5–7 пунктов',
  '3 текста для сайта ежемесячно',
  'Покупка 3 вечных ссылок на бирже Miralinks',
  'Покупка 300 лайков / репостов в группу ВК или аналог',
  '2 часа SEO-консультаций',
  '30 посетителей сайта ежедневно',
];

const SERVICES = [
  { icon: 'Search', title: 'SEO-аудит', text: 'Полный технический и контентный анализ сайта с планом роста.' },
  { icon: 'TrendingUp', title: 'Продвижение в ТОП', text: 'Комплексная работа над позициями в Яндекс и Google.' },
  { icon: 'Link2', title: 'Ссылочный профиль', text: 'Наращивание качественной ссылочной массы без рисков.' },
  { icon: 'BarChart3', title: 'Аналитика', text: 'Прозрачные отчёты по позициям, трафику и заявкам.' },
];

const PORTFOLIO = [
  { name: 'Интернет-магазин техники', metric: '+340%', label: 'органический трафик' },
  { name: 'Юридическая компания', metric: 'ТОП-3', label: '87 ключевых запросов' },
  { name: 'Производство мебели', metric: '×5', label: 'рост числа заявок' },
];

const BLOG = [
  { tag: 'SEO', title: 'Как попасть в ТОП-10 за 3 месяца', date: '24 июня 2026' },
  { tag: 'Аналитика', title: 'Поведенческие факторы в 2026', date: '18 июня 2026' },
  { tag: 'Кейсы', title: 'Продвижение интернет-магазина', date: '9 июня 2026' },
];

const FAQ = [
  { q: 'Сколько времени занимает выход в ТОП?', a: 'В среднем первые результаты видны через 1–2 месяца, устойчивый ТОП — через 3–6 месяцев в зависимости от конкуренции ниши.' },
  { q: 'Даёте ли вы гарантии?', a: 'Мы фиксируем KPI по росту позиций и трафика в договоре и предоставляем прозрачную еженедельную отчётность.' },
  { q: 'Что входит в базовый пакет за 20 000 ₽?', a: 'Технический аудит, оптимизация структуры и мета-тегов, работа с семантикой, базовая внутренняя перелинковка и ежемесячные отчёты.' },
  { q: 'Можно ли отказаться от доп.услуг позже?', a: 'Да, состав пакета гибкий — вы подключаете и отключаете услуги в любой момент.' },
];

const Index = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const addonsTotal = ADDONS.filter((a) => selected.includes(a.id)).reduce((s, a) => s + a.price, 0);
  const total = BASE_PRICE + addonsTotal;
  const fmt = (n: number) => n.toLocaleString('ru-RU') + ' ₽';

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <div className="gold-gradient flex h-9 w-9 items-center justify-center rounded-md">
              <Icon name="Rocket" size={20} className="text-[hsl(218_40%_10%)]" />
            </div>
            <span className="font-display text-xl font-bold tracking-wide">ТОП<span className="text-gold">РОСТ</span></span>
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-muted-foreground transition-colors hover:text-gold">
                {n.label}
              </a>
            ))}
          </nav>
          <Button asChild className="gold-gradient font-semibold text-[hsl(218_40%_10%)] hover:opacity-90">
            <a href="#calc">Рассчитать</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative flex min-h-screen items-center pt-16">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        </div>
        <div className="container relative z-10 py-24">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm text-gold">
              <Icon name="ShieldCheck" size={16} /> Профессиональное SEO-агентство
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Комплекс услуг по <span className="text-gold">продвижению</span> вашего сайта в ТОП
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Выводим сайты в лидеры поисковой выдачи. Прозрачная аналитика, измеримый результат и гибкие пакеты под вашу нишу.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild size="lg" className="gold-gradient font-semibold text-[hsl(218_40%_10%)] hover:opacity-90">
                <a href="#calc"><Icon name="Calculator" size={18} className="mr-2" /> Рассчитать стоимость</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border hover:bg-secondary">
                <a href="#services">Наши услуги</a>
              </Button>
            </div>
            <div className="mt-14 grid max-w-lg grid-cols-3 gap-6">
              {[['12+', 'лет опыта'], ['640+', 'проектов'], ['94%', 'в ТОП-10']].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-4xl font-bold text-gold">{v}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="container">
          <div className="mb-14 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">Услуги</span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Полный цикл продвижения</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <div key={s.title} className="hover-scale rounded-lg border border-border bg-card p-7">
                <div className="gold-gradient flex h-12 w-12 items-center justify-center rounded-md">
                  <Icon name={s.icon} size={24} className="text-[hsl(218_40%_10%)]" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calc" className="grid-lines border-y border-border py-24">
        <div className="container">
          <div className="mb-14 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">Калькулятор</span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Рассчитайте стоимость продвижения</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Базовый пакет включён по умолчанию. Добавляйте нужные услуги — итог считается мгновенно.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            <div>
              <div className="mb-4 rounded-lg border border-primary/50 bg-primary/10 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="gold-gradient flex h-11 w-11 items-center justify-center rounded-md">
                      <Icon name="Package" size={22} className="text-[hsl(218_40%_10%)]" />
                    </div>
                    <div>
                      <div className="font-display text-lg font-semibold">Базовое продвижение</div>
                      <div className="text-sm text-muted-foreground">Обязательный пакет — основа продвижения</div>
                    </div>
                  </div>
                  <div className="font-display text-xl font-bold text-gold">{fmt(BASE_PRICE)}</div>
                </div>
                <div className="mt-5 border-t border-primary/20 pt-5">
                  <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold">
                    Комплекс работ по продвижению сайта в ТОП
                  </div>
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {BASE_INCLUDES.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm">
                        <Icon name="Check" size={16} className="mt-0.5 shrink-0 text-gold" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {ADDONS.map((a) => {
                  const active = selected.includes(a.id);
                  return (
                    <button
                      key={a.id}
                      onClick={() => toggle(a.id)}
                      className={`flex items-center gap-4 rounded-lg border p-4 text-left transition-all ${
                        active
                          ? 'border-primary bg-primary/10 ring-1 ring-primary'
                          : 'border-border bg-card hover:border-primary/50'
                      }`}
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${
                          active ? 'gold-gradient text-[hsl(218_40%_10%)]' : 'bg-secondary text-gold'
                        }`}
                      >
                        <Icon name={a.icon} size={20} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium leading-snug">{a.title}</div>
                        <div className="text-sm text-muted-foreground">{fmt(a.price)}</div>
                      </div>
                      <Icon
                        name={active ? 'CheckCircle2' : 'Circle'}
                        size={22}
                        className={active ? 'text-gold' : 'text-muted-foreground'}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SUMMARY */}
            <div className="lg:sticky lg:top-24 h-fit rounded-lg border border-border bg-card p-7">
              <h3 className="font-display text-2xl font-bold">Ваш пакет</h3>
              <div className="mt-6 space-y-3 border-b border-border pb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Базовое продвижение</span>
                  <span className="font-medium">{fmt(BASE_PRICE)}</span>
                </div>
                {ADDONS.filter((a) => selected.includes(a.id)).map((a) => (
                  <div key={a.id} className="flex justify-between">
                    <span className="text-muted-foreground">{a.title}</span>
                    <span className="font-medium">{fmt(a.price)}</span>
                  </div>
                ))}
                {selected.length === 0 && (
                  <div className="text-muted-foreground">Доп.услуги не выбраны</div>
                )}
              </div>
              <div className="mt-6 flex items-end justify-between">
                <span className="text-muted-foreground">Итого в месяц</span>
                <span className="font-display text-4xl font-bold text-gold">{fmt(total)}</span>
              </div>
              <Button className="mt-7 w-full gold-gradient font-semibold text-[hsl(218_40%_10%)] hover:opacity-90" size="lg">
                <Icon name="Send" size={18} className="mr-2" /> Оставить заявку
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Менеджер свяжется с вами в течение 15 минут
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24">
        <div className="container">
          <div className="mb-14 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">Портфолио</span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Результаты наших клиентов</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PORTFOLIO.map((p) => (
              <div key={p.name} className="hover-scale rounded-lg border border-border bg-card p-8 text-center">
                <div className="font-display text-5xl font-bold text-gold">{p.metric}</div>
                <div className="mt-2 text-sm text-muted-foreground">{p.label}</div>
                <div className="mt-5 border-t border-border pt-5 font-display text-lg font-semibold">{p.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-y border-border bg-secondary/30 py-24">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">О нас</span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Агентство, которому доверяют</h2>
            <p className="mt-5 text-muted-foreground">
              С 2014 года мы помогаем бизнесу занимать лидирующие позиции в поиске. Наша команда — сертифицированные
              SEO-специалисты, аналитики и контент-маркетологи. Мы работаем прозрачно, отчитываемся по каждому шагу и
              отвечаем за результат.
            </p>
            <div className="mt-8 space-y-4">
              {[
                'Индивидуальная стратегия под вашу нишу',
                'Прозрачная еженедельная отчётность',
                'Фиксация KPI в договоре',
              ].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-gold" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[['640+', 'проектов'], ['12+', 'лет на рынке'], ['24', 'специалиста'], ['94%', 'выход в ТОП-10']].map(
              ([v, l]) => (
                <div key={l} className="rounded-lg border border-border bg-card p-8 text-center">
                  <div className="font-display text-4xl font-bold text-gold">{v}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{l}</div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-24">
        <div className="container">
          <div className="mb-14 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">Блог</span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Полезные материалы</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {BLOG.map((b) => (
              <article key={b.title} className="hover-scale group cursor-pointer rounded-lg border border-border bg-card p-7">
                <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-gold">
                  {b.tag}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold group-hover:text-gold">{b.title}</h3>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} /> {b.date}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-y border-border bg-secondary/30 py-24">
        <div className="container max-w-3xl">
          <div className="mb-14 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">FAQ</span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Частые вопросы</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-lg border border-border bg-card px-5">
                <AccordionTrigger className="text-left font-display text-lg hover:text-gold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">Контакты</span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Обсудим ваш проект</h2>
            <p className="mt-5 text-muted-foreground">
              Оставьте заявку — проведём бесплатный экспресс-аудит и предложим стратегию продвижения.
            </p>
            <div className="mt-8 space-y-5">
              {[
                { icon: 'Phone', label: '+7 (495) 000-00-00' },
                { icon: 'Mail', label: 'hello@toprost.ru' },
                { icon: 'MapPin', label: 'Москва, ул. Пресненская наб., 12' },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-gold">
                    <Icon name={c.icon} size={20} />
                  </div>
                  <span>{c.label}</span>
                </div>
              ))}
            </div>
          </div>
          <form className="rounded-lg border border-border bg-card p-7" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <input placeholder="Ваше имя" className="w-full rounded-md border border-border bg-secondary/50 px-4 py-3 text-sm outline-none focus:border-primary" />
              <input placeholder="Телефон" className="w-full rounded-md border border-border bg-secondary/50 px-4 py-3 text-sm outline-none focus:border-primary" />
              <input placeholder="Адрес сайта" className="w-full rounded-md border border-border bg-secondary/50 px-4 py-3 text-sm outline-none focus:border-primary" />
              <textarea placeholder="Комментарий" rows={4} className="w-full resize-none rounded-md border border-border bg-secondary/50 px-4 py-3 text-sm outline-none focus:border-primary" />
            </div>
            <Button className="mt-5 w-full gold-gradient font-semibold text-[hsl(218_40%_10%)] hover:opacity-90" size="lg">
              Отправить заявку
            </Button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-secondary/40 py-10">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="gold-gradient flex h-8 w-8 items-center justify-center rounded-md">
              <Icon name="Rocket" size={18} className="text-[hsl(218_40%_10%)]" />
            </div>
            <span className="font-display text-lg font-bold">ТОП<span className="text-gold">РОСТ</span></span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 ТОПРОСТ. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;