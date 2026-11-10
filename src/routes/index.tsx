import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Car, Truck, Bus, Tractor, Phone, Menu, X, ChevronLeft, ChevronRight,
  MapPin, Instagram, CreditCard, QrCode, Wallet, Send, Wrench,
} from "lucide-react";
import hero from "@/assets/hero-guincho.jpg";
import logo from "@/assets/logo.png";
import g2 from "@/assets/galeria-2.jpg";
import g3 from "@/assets/galeria-3.jpg";
import g4 from "@/assets/galeria-4.jpg";
import g5 from "@/assets/galeria-5.jpg";
import g6 from "@/assets/galeria-6.jpg";

const WHATS = "555194999477";
const TEL = "tel:+555194999477";
const PHONE_LABEL = "+555194999477";
const waLink = (msg?: string) =>
  `https://wa.me/${WHATS}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;

const LOGO: string = logo;

// Para trocar/adicionar fotos da galeria, edite esta lista.
const GALLERY = [
  { src: hero, alt: "Guincho plataforma transportando carro na rodovia" },
  { src: g2, alt: "Guincho transportando van ao entardecer" },
  { src: g3, alt: "Transporte de miniescavadeira em caminhão plataforma" },
  { src: g4, alt: "Carro antigo transportado em caminhão plataforma" },
  { src: g5, alt: "Quadriciclo preso com cintas na plataforma do guincho" },
  { src: g6, alt: "Catamarã transportado em caminhão plataforma" },
];

const NAV = [
  ["Início", "#inicio"],
  ["Serviços", "#servicos"],
  ["Galeria", "#galeria"],
  ["Área de atendimento", "#atendimento"],
  ["Contato", "#contato"],
] as const;

const SERVICES = [
  { icon: Car, title: "Guincho para carros", text: "Remoção e transporte de veículos de passeio com segurança." },
  { icon: Truck, title: "Guincho para utilitários", text: "Transporte de picapes e utilitários leves." },
  { icon: Bus, title: "Guincho para vans", text: "Plataforma preparada para vans e veículos maiores." },
  { icon: Tractor, title: "Transporte de máquinas", text: "Deslocamento de máquinas com cuidado e planejamento." },
  { icon: Wrench, title: "Equipamentos", text: "Transporte de equipamentos" },
];

const CITIES = ["Novo Hamburgo", "Campo Bom", "Estância Velha", "Sapiranga", "Vale do Sinos", "Grande Porto Alegre"];

const PAYMENTS = [
  { icon: QrCode, label: "PIX" },
  { icon: Wallet, label: "Cartão de débito" },
  { icon: CreditCard, label: "Cartão de crédito" },
];

const TITLE = "Evandro Guincho | Guincho 24 Horas em Novo Hamburgo e Região";
const DESC =
  "Guincho 24 horas para carros, utilitários, vans, máquinas e equipamentos em Novo Hamburgo, Campo Bom, Estância Velha, Sapiranga, Vale do Sinos e Grande Porto Alegre.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "Evandro Guincho" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Evandro Guincho",
          description: DESC,
          telephone: `+${WHATS}`,
          areaServed: CITIES.map((name) => ({ "@type": "Place", name })),
          serviceType: [
            "Guincho 24 horas",
            "Remoção e transporte de veículos",
            "Transporte de máquinas e equipamentos",
          ],
          openingHours: "Mo-Su 00:00-23:59",
          sameAs: ["https://instagram.com/evandroguincho"],
        },
      },
    ],
  }),
  component: Index,
});

function WhatsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.96-3.48-.23-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43a9.4 9.4 0 0 1 9.43 9.44c0 5.2-4.24 9.43-9.44 9.43m8.03-17.46A11.27 11.27 0 0 0 12.04.72C5.78.72.68 5.82.68 12.08c0 2 .52 3.95 1.52 5.67L.58 23.64l6.03-1.58a11.33 11.33 0 0 0 5.43 1.38c6.26 0 11.36-5.1 11.36-11.36 0-3.03-1.18-5.89-3.33-8.03" />
    </svg>
  );
}

function Logo() {
  if (LOGO) {
    return (
      <span className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight">
        <img src={LOGO} alt="Evandro Guincho" className="h-16 w-16 object-contain" />
        <span className="text-foreground">
          EVANDRO <span className="text-primary">GUINCHO</span>
        </span>
      </span>
    );
  }
  return (
    <span className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
        <Truck className="h-5 w-5" />
      </span>
      <span className="text-foreground">
        EVANDRO <span className="text-primary">GUINCHO</span>
      </span>
    </span>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const btn = "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
const btnPrimary = `${btn} bg-primary text-primary-foreground shadow-red hover:-translate-y-0.5 hover:brightness-110`;
const btnLight = `${btn} bg-background text-foreground hover:-translate-y-0.5 hover:bg-secondary`;

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-background/90 shadow-soft backdrop-blur-md" : "bg-background/70 backdrop-blur-sm"}`}>
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 py-2">
        <a href="#inicio" aria-label="Evandro Guincho - início"><Logo /></a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">{l}</a>
          ))}
          <a href="#contato" className={`${btnPrimary} py-2.5`}>Solicitar Guincho</a>
        </nav>
        <button className="grid h-11 w-11 place-items-center rounded-lg lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <nav className="flex flex-col gap-1 px-5 pb-5" aria-label="Menu móvel">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-medium hover:bg-secondary">{l}</a>
          ))}
          <a href="#contato" onClick={() => setOpen(false)} className={`${btnPrimary} mt-2`}>Solicitar Guincho</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[92vh] items-center overflow-hidden">
      <img src={hero} alt="Caminhão guincho transportando um carro na rodovia" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover object-[70%_center]" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pt-24 pb-16">
        <div className="max-w-2xl reveal">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-bold tracking-widest text-primary-foreground">GUINCHO 24 HORAS</span>
          <h1 className="text-4xl font-extrabold leading-[1.08] text-background sm:text-5xl lg:text-6xl">
            PRECISOU DE GUINCHO? <span className="text-primary">PODE CONTAR COM A GENTE!</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-background/85 sm:text-lg">
            Atendimento para carros, utilitários, vans, máquinas e equipamentos. Conte com a Evandro Guincho para transportar seu veículo com segurança e cuidado.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={waLink("Olá! Gostaria de solicitar um serviço de guincho.")} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
              <WhatsIcon className="h-5 w-5" /> SOLICITAR GUINCHO PELO WHATSAPP
            </a>
            <a href={TEL} className={btnLight}><Phone className="h-4 w-4" /> LIGAR AGORA</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="reveal mb-12 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
    </div>
  );
}

function Services() {
  return (
    <section id="servicos" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Serviços" title="SOLUÇÕES EM TRANSPORTE E GUINCHO" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, text }, i) => (
            <article key={title} style={{ transitionDelay: `${i * 70}ms` }} className="reveal group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (d: number) => {
    const el = ref.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    el.scrollBy({ left: d * ((card?.offsetWidth ?? 400) + 20), behavior: "smooth" });
  };
  return (
    <section id="galeria" className="bg-muted py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Galeria" title="NOSSO TRABALHO NA PRÁTICA" />
        <div className="reveal relative">
          <div ref={ref} className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth">
            {GALLERY.map((g) => (
              <figure key={g.alt} className="group w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl shadow-soft sm:w-[48%] lg:w-[calc(33.333%-14px)]">
                <img src={g.src} alt={g.alt} loading="lazy" width={1200} height={912} className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </figure>
            ))}
          </div>
          <button onClick={() => scroll(-1)} aria-label="Foto anterior" className="absolute top-1/2 left-2 grid sm:-left-3 h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-background/95 shadow-lift transition hover:bg-primary hover:text-primary-foreground sm:h-12 sm:w-12">
            <ChevronLeft />
          </button>
          <button onClick={() => scroll(1)} aria-label="Próxima foto" className="absolute top-1/2 right-2 grid sm:-right-3 h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-background/95 shadow-lift transition hover:bg-primary hover:text-primary-foreground sm:h-12 sm:w-12">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function Area() {
  return (
    <section id="atendimento" className="py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1fr_1.4fr]">
        <div className="reveal">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Área de atendimento</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">ATENDEMOS NOVO HAMBURGO E REGIÃO</h2>
          <ul className="mt-8 grid grid-cols-2 gap-3">
            {CITIES.map((c) => (
              <li key={c} className="flex items-center gap-2 text-sm font-medium">
                <MapPin className="h-4 w-4 shrink-0 text-primary" /> {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal overflow-hidden rounded-2xl border border-border shadow-soft">
          <iframe
            title="Mapa da região de atendimento: Novo Hamburgo, Vale do Sinos e Grande Porto Alegre"
            src="https://maps.google.com/maps?q=Novo%20Hamburgo%20RS&z=10&output=embed"
            className="h-[380px] w-full sm:h-[440px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Payments() {
  return (
    <section className="border-y border-border py-12">
      <div className="reveal mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 md:flex-row">
        <h2 className="text-xl font-bold">FACILIDADE NA HORA DE PAGAR</h2>
        <ul className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {PAYMENTS.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2.5 text-sm font-medium">
              <Icon className="h-5 w-5 text-primary" /> {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const VEHICLES = ["Carro", "Utilitário", "Van", "Máquina", "Outro"];
type FormState = { nome: string; telefone: string; cidade: string; veiculo: string; descricao: string };
const EMPTY: FormState = { nome: "", telefone: "", cidade: "", veiculo: "", descricao: "" };

export function buildWhatsMessage(f: FormState) {
  return [
    "Olá! Gostaria de solicitar um serviço de guincho. Seguem meus dados:",
    "",
    `*Nome:* ${f.nome.trim()}`,
    `*Telefone:* ${f.telefone.trim()}`,
    `*Cidade do veículo:* ${f.cidade.trim()}`,
    `*Tipo de veículo:* ${f.veiculo}`,
    `*Necessidade:* ${f.descricao.trim() || "-"}`,
  ].join("\n");
}

function ContactForm() {
  const [f, setF] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const set = (k: keyof FormState) => (e: { target: { value: string } }) => {
    setF({ ...f, [k]: e.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: undefined });
  };
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const er: typeof errors = {};
    if (f.nome.trim().length < 2) er.nome = "Informe seu nome";
    if (f.telefone.replace(/\D/g, "").length < 10) er.telefone = "Informe um telefone válido com DDD";
    if (f.cidade.trim().length < 2) er.cidade = "Informe a cidade";
    if (!f.veiculo) er.veiculo = "Selecione o tipo de veículo";
    setErrors(er);
    if (Object.keys(er).length) return;
    window.open(waLink(buildWhatsMessage(f)), "_blank", "noopener,noreferrer");
  };
  const field = (k: keyof FormState) =>
    `w-full rounded-xl border bg-background px-4 py-3.5 text-base outline-none transition-all duration-200 focus:border-primary focus:ring-4 focus:ring-primary/10 ${errors[k] ? "border-destructive" : "border-input"}`;
  const Err = ({ k }: { k: keyof FormState }) => (errors[k] ? <p className="mt-1.5 text-xs text-destructive">{errors[k]}</p> : null);
  return (
    <section id="contato" className="bg-muted py-24 pb-32 sm:pb-24">
      <div className="mx-auto max-w-2xl px-5">
        <SectionTitle eyebrow="Contato" title="SOLICITE SEU GUINCHO" />
        <p className="reveal -mt-8 mb-10 text-center text-muted-foreground">Orçamento rápido pelo WhatsApp — atendimento 24 horas.</p>
        <p className="-mt-6 mb-10 text-center"><a href="https://instagram.com/evandroguincho" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"><Instagram className="h-4 w-4" /> Siga @evandroguincho</a></p>
        <form onSubmit={submit} noValidate className="reveal grid gap-5 rounded-2xl bg-card p-6 shadow-lift sm:grid-cols-2 sm:p-10">
          <div>
            <label htmlFor="nome" className="mb-2 block text-sm font-semibold">Nome</label>
            <input id="nome" value={f.nome} onChange={set("nome")} className={field("nome")} autoComplete="name" maxLength={80} />
            <Err k="nome" />
          </div>
          <div>
            <label htmlFor="telefone" className="mb-2 block text-sm font-semibold">Telefone</label>
            <input id="telefone" type="tel" inputMode="tel" value={f.telefone} onChange={set("telefone")} className={field("telefone")} autoComplete="tel" placeholder="(51) 90000-0000" maxLength={20} />
            <Err k="telefone" />
          </div>
          <div>
            <label htmlFor="cidade" className="mb-2 block text-sm font-semibold">Cidade onde está o veículo</label>
            <input id="cidade" value={f.cidade} onChange={set("cidade")} className={field("cidade")} maxLength={80} />
            <Err k="cidade" />
          </div>
          <div>
            <label htmlFor="veiculo" className="mb-2 block text-sm font-semibold">Tipo de veículo</label>
            <select id="veiculo" value={f.veiculo} onChange={set("veiculo")} className={field("veiculo")}>
              <option value="">Selecione</option>
              {VEHICLES.map((v) => <option key={v}>{v}</option>)}
            </select>
            <Err k="veiculo" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="descricao" className="mb-2 block text-sm font-semibold">Descrição da necessidade</label>
            <textarea id="descricao" rows={4} value={f.descricao} onChange={set("descricao")} className={`${field("descricao")} resize-none`} maxLength={600} />
          </div>
          <button type="submit" className={`${btnPrimary} sm:col-span-2 py-4`}>
            <Send className="h-4 w-4" /> ENVIAR SOLICITAÇÃO PELO WHATSAPP
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground py-8 pb-24 text-sm text-background/70 sm:pb-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          {/* Logo PNG: defina LOGO no topo do arquivo */}
          {LOGO && <img src={LOGO} alt="" className="h-10 w-auto" />}
          <div>
            <p className="font-display text-base font-extrabold text-background">EVANDRO <span className="text-primary">GUINCHO</span></p>
            <p className="text-xs">Guincho 24 horas e transporte de carros, utilitários, vans, máquinas e equipamentos.</p>
          </div>
        </div>
        <div className="text-xs leading-relaxed md:text-right">
          <p>Novo Hamburgo, Vale do Sinos e Grande Porto Alegre · PIX, débito e crédito</p>
          <p>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-background">WhatsApp</a>
            {" · "}
            <a href={TEL} className="hover:text-background">{PHONE_LABEL}</a>
          </p>
          <a href="https://instagram.com/evandroguincho" target="_blank" rel="noopener noreferrer" aria-label="Instagram @evandroguincho" className="mt-2 inline-flex items-center gap-1.5 font-semibold text-background transition-colors hover:text-primary">
            <Instagram className="h-4 w-4" /> @evandroguincho
          </a>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-6xl border-t border-background/10 px-5 pt-4 text-xs">
        © {new Date().getFullYear()} Evandro Guincho. Todos os direitos reservados.
      </p>
    </footer>
  );
}

function FloatingButtons() {
  const base = "group fixed bottom-5 z-40 grid h-14 w-14 place-items-center rounded-full shadow-lift transition-transform duration-300 hover:scale-110 animate-pop-in";
  const tip = "pointer-events-none absolute bottom-full mb-3 whitespace-nowrap rounded-lg bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100";
  return (
    <>
      <a href={TEL} aria-label="Ligar agora" className={`${base} left-5 bg-primary text-primary-foreground`}>
        <Phone className="h-6 w-6" />
        <span className={`${tip} left-0`}>Ligar agora</span>
      </a>
      <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Fale pelo WhatsApp" className={`${base} right-5 bg-whatsapp text-whatsapp-foreground`}>
        <WhatsIcon className="h-7 w-7" />
        <span className={`${tip} right-0`}>Fale pelo WhatsApp</span>
      </a>
    </>
  );
}

function Index() {
  useReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Area />
        <Payments />
        <ContactForm />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
