import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight, Instagram, MessageCircle, Plus, Minus, MapPin, Copy, Check } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import SiteHeader from '@/components/SiteHeader';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { NAV, PROOF, STEPS, GOALS, COMMUNITY_PHOTOS, TESTIMONIALS, PLANS, FAQ, INSTAGRAM_URL, WHATSAPP_URL, LOGO_CIRCULAR, LOGO_HERO, LOGO_UFT, LOGO_SEDUC, LOGO_FAPTO, AWARD_PHOTO } from '@/data/site';
import { track } from '@/lib/track';
const HERO_IMG = 'https://horizons-cdn.hostinger.com/f3d80360-0baa-4fb1-ac34-88b79a22b86b/9deab1bc9d6de35359fa1bf4e26665fd.png';
const ABOUT_IMG = 'https://images.hostinger.com/4d38b2b9-bc9f-4090-b3ec-732a82cf6940.png';
const SHOE_IMG = 'https://images.hostinger.com/9f0f8bd6-303e-4bcd-8951-2a95f3b1f662.png';
const PIX_KEY = '63 99207 2064';
function SectionLabel({
  children,
  dark
}) {
  return <p className={`mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] ${dark ? 'text-[#FF9C3D]' : 'text-[#FF7900]'}`}>
      <span className="h-px w-8 bg-current" aria-hidden="true" />
      {children}
    </p>;
}
export default function HomePage() {
  const [tab, setTab] = useState('run');
  const [plan, setPlan] = useState(null);
  const [faqOpen, setFaqOpen] = useState(0);
  const [pixCopied, setPixCopied] = useState(false);

  const handleCopyPix = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(PIX_KEY);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = PIX_KEY;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        const copied = document.execCommand('copy');
        document.body.removeChild(textarea);
        if (!copied) throw new Error('Não foi possível copiar o PIX.');
      }
      setPixCopied(true);
      window.setTimeout(() => setPixCopied(false), 2500);
    } catch {
      setPixCopied(false);
    }
  };

  return <div className="min-h-screen bg-white">
      <Helmet>
        <title>Desafio Superando Limites | Corrida, Caminhada e Ciclismo</title>
        <meta name="description" content="Escolha sua meta mensal, registre no Strava e conquiste sua medalha." />
        <html lang="pt-BR" />
      </Helmet>

      <SiteHeader />

      {/* HERO */}
      <section id="inicio" className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden bg-[#171717] pt-[68px]">
        <img src={HERO_IMG} alt="Corredor em treino de rua ao pôr do sol no cerrado brasileiro" className="absolute inset-0 h-full w-full object-cover object-center opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/70 to-[#171717]/20" aria-hidden="true" />
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-70" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden="true">
          <path d="M-20 640 C 220 560, 300 400, 560 420 S 900 300, 1240 180" fill="none" stroke="#FF7900" strokeWidth="3" strokeDasharray="14 12" />
          <circle cx="560" cy="420" r="9" fill="#FF7900" />
          <circle cx="1050" cy="235" r="9" fill="#FF7900" />
        </svg>

        <div className="relative mx-auto w-full max-w-[80rem] px-4 pb-16 pt-24 sm:px-6 sm:pb-24">
          <Reveal y={18}>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#FF9C3D] sm:text-xs">
              Bike • Caminhada • Corrida
            </p>
          </Reveal>
          <Reveal delay={0.08} y={22}>
            <h1 className="max-w-[16ch] text-[3.1rem] font-black text-white sm:text-[5.2rem] lg:text-[6.5rem]">
              Transforme desafios em{' '}
              <span className="relative inline-block">
                conquistas
                <span className="absolute -bottom-1 left-0 h-[6px] w-full -rotate-1 bg-[#FF7900]" aria-hidden="true" />
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-[52ch] text-base leading-relaxed text-white/80 sm:text-lg">Escolha sua modalidade, defina uma meta mensal, registre no aplicativo e&nbsp;<br />supere seus limites conosco!</p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#inscricao" onClick={() => track('click_inscricao', {
              location: 'hero'
            })} className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm bg-[#FF7900] px-8 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-[#e96d00] active:scale-[0.98]">
                Quero participar <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </a>
              <a href="#como-funciona" className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-white/40 px-8 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white/10">
                Como funciona
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-black/10 bg-[#FF7900] py-3">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {Array.from({
          length: 2
        }).map((_, i) => <div key={i} className="flex gap-10" aria-hidden={i === 1}>
              {['Corrida', 'Caminhada', 'Ciclismo', 'Medalha em casa', 'Meta mensal', 'Strava'].map(w => <span key={w} className="display text-2xl font-bold tracking-wide text-white sm:text-3xl">
                    {w} <span className="text-white/60">/</span>
                  </span>)}
            </div>)}
        </div>
      </div>

      {/* PROOF */}
      <section className="bg-[#F5F3EE] py-20 sm:py-28">
        <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
          <Reveal>
            <h2 className="max-w-[18ch] text-[2.6rem] font-extrabold text-[#171717] sm:text-6xl">
              Mais de{' '}
              <span className="text-[#FF7900]">
                <CountUp value={15000} suffix="" />
              </span>{' '}
              participações em todo o Brasil
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden bg-black/10 sm:grid-cols-3">
            {PROOF.map((item, i) => <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full bg-[#F5F3EE] p-7 sm:p-8">
                  <span className="display text-5xl font-black text-[#FF7900]/30">0{i + 1}</span>
                  <h3 className="mt-4 text-2xl font-bold text-[#171717]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.text}</p>
                </div>
              </Reveal>)}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-[80rem] items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <Reveal>
            <div>
              <SectionLabel>Sobre o desafio</SectionLabel>
              <h2 className="text-[2.6rem] font-extrabold text-[#171717] sm:text-6xl">
                Muito mais que cumprir quilômetros
              </h2>
              <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-neutral-700 sm:text-base">
                <p>O Desafio Superando Limites nasceu em 2020 para unir três coisas simples: uma meta pessoal, atividade física constante e o apoio de gente que está trilhando o mesmo caminho. Não importa se você corre 5 km ou pedala 500 — o que conta é o compromisso que você assume com você mesmo.</p>
                <p>
                  A cada mês uma equipe acompanha as atividades pelo aplicativo, divulga os resultados
                  semanalmente e estimula cada participante a evoluir a própria meta. Quem completa
                  recebe a medalha em casa — o símbolo de um limite que deixou de existir.
                </p>
              </div>
              <div className="mt-9 flex flex-wrap gap-8 border-t border-black/10 pt-7">
                <div>
                  <p className="display text-4xl font-black text-[#171717]">
                    <CountUp value={30} suffix=" dias" />
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-neutral-500">De desafio</p>
                </div>
                <div>
                  <p className="display text-4xl font-black text-[#171717]">
                    <CountUp value={3} /> modalidades
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-neutral-500">Você escolhe</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} y={30}>
            <div className="relative">
              <img src={ABOUT_IMG} alt="Medalhas do desafio ao lado de tênis de corrida e celular com rota de GPS" loading="lazy" className="aspect-[4/3] w-full rounded-sm object-cover" />
              <img src={SHOE_IMG} alt="Tênis de corrida em movimento sobre o asfalto molhado" loading="lazy" className="absolute -bottom-8 -left-4 hidden h-40 w-40 rounded-sm border-4 border-white object-cover sm:block" />
              <span className="absolute -right-3 -top-3 h-16 w-16 border-4 border-[#FF7900]" aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW */}
      <section id="como-funciona" className="bg-[#171717] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
          <Reveal>
            <SectionLabel dark>Como funciona</SectionLabel>
            <h2 className="max-w-[20ch] text-[2.6rem] font-extrabold sm:text-6xl">
              Cinco passos entre a decisão e a medalha
            </h2>
          </Reveal>
          <ol className="mt-14 space-y-0">
            {STEPS.map((s, i) => <Reveal key={s.n} delay={i * 0.06}>
                <li className="group grid grid-cols-[auto_1fr] items-start gap-5 border-t border-white/15 py-7 transition-colors hover:bg-white/[0.04] sm:grid-cols-[7rem_1fr_1fr] sm:gap-8 sm:py-9">
                  <span className="display text-4xl font-black text-[#FF7900] sm:text-6xl">{s.n}</span>
                  <h3 className="text-2xl font-bold sm:text-4xl">{s.title}</h3>
                  <p className="col-span-2 text-sm leading-relaxed text-white/60 sm:col-span-1 sm:text-base">
                    {s.text}
                  </p>
                </li>
              </Reveal>)}
          </ol>
        </div>
      </section>

      {/* GOALS */}
      <section id="metas" className="bg-[#F5F3EE] py-20 sm:py-28">
        <div className="mx-auto max-w-[72rem] px-4 sm:px-6">
          <Reveal>
            <SectionLabel>Metas</SectionLabel>
            <h2 className="text-[2.6rem] font-extrabold text-[#171717] sm:text-6xl">Escolha sua meta</h2>
            <p className="mt-4 max-w-[54ch] text-[15px] leading-relaxed text-neutral-600">
              Distâncias pensadas para todos os níveis. Comece onde der conta e suba de meta a cada mês.
            </p>
          </Reveal>

          <div role="tablist" aria-label="Modalidades" className="mt-10 inline-flex rounded-sm border border-black/10 bg-white p-1">
            {Object.entries(GOALS).map(([key, g]) => <button key={key} role="tab" type="button" aria-selected={tab === key} onClick={() => setTab(key)} className={`min-h-[48px] rounded-sm px-5 text-xs font-semibold uppercase tracking-widest transition-colors sm:px-8 sm:text-sm ${tab === key ? 'bg-[#FF7900] text-white' : 'text-neutral-600 hover:text-[#171717]'}`}>
                {g.label}
              </button>)}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {GOALS[tab].items.map((km, i) => <Reveal key={`${tab}-${km}`} delay={i * 0.03} y={14}>
                <div className="group relative flex min-h-[112px] flex-col justify-between border border-black/10 bg-white p-5 transition-colors hover:border-[#FF7900]">
                  <MapPin className="h-4 w-4 text-[#FF7900]" strokeWidth={2} />
                  <p className="display text-4xl font-black text-[#171717] sm:text-5xl">{km}</p>
                </div>
              </Reveal>)}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="comunidade" className="py-20 sm:py-28">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <SectionLabel>Comunidade</SectionLabel>
                <h2 className="max-w-[16ch] text-[2.6rem] font-extrabold text-[#171717] sm:text-6xl">
                  Uma comunidade que avança junta
                </h2>
              </div>
              <div className="shrink-0 border-l-4 border-[#FF7900] pl-5">
                <p className="display text-5xl font-black text-[#171717] sm:text-6xl">
                  <CountUp value={15000} suffix="+" />
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Participações em&nbsp;<br />todo o brasil.</p>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] md:grid-cols-4 md:grid-flow-row-dense">
            {COMMUNITY_PHOTOS.map((p, i) => <Reveal key={p.src} delay={i % 4 * 0.05} className={p.span}>
                <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full rounded-sm object-cover transition-transform duration-300 hover:scale-[1.02]" />
              </Reveal>)}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#171717] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
          <Reveal>
            <SectionLabel dark>Depoimentos</SectionLabel>
            <h2 className="text-[2.6rem] font-extrabold sm:text-6xl">Quem participa, supera</h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => <Reveal key={t.name} delay={i * 0.08}>
                <figure className="border-t-2 border-[#FF7900] pt-6">
                  <blockquote className="text-lg leading-relaxed text-white/85">“{t.text}”</blockquote>
                  <figcaption className="mt-6">
                    <p className="display text-2xl font-bold">{t.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#FF9C3D]">{t.role}</p>
                  </figcaption>
                </figure>
              </Reveal>)}
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section id="inscricao" className="bg-[#F5F3EE] py-20 sm:py-28">
        <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
          <Reveal>
            <SectionLabel>Inscrição</SectionLabel>
            <h2 className="text-[2.6rem] font-extrabold text-[#171717] sm:text-6xl">
              Escolha como participar
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {PLANS.map((p, i) => <Reveal key={p.id} delay={i * 0.06}>
                <div className={`flex h-full flex-col justify-between border p-7 sm:p-8 ${p.featured ? 'border-[#FF7900] bg-[#171717] text-white' : 'border-black/10 bg-white text-[#171717]'}`} style={p.accentColor && !p.featured ? { borderColor: p.accentColor } : {}}>
                  <div>
                    {p.featured && <span className="mb-4 inline-block bg-[#FF7900] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                        Mais escolhido
                      </span>}
                    {p.logo && <div className="mb-5 inline-flex items-center justify-center bg-white p-3">
                        <img src={p.logo} alt={p.logoAlt} loading="lazy" className="h-32 w-auto object-contain" />
                      </div>}
                    <h3 className="text-3xl font-bold sm:text-4xl">{p.title}</h3>
                    <p className={`mt-2 text-sm ${p.featured ? 'text-white/60' : 'text-neutral-600'}`}>
                      {p.summary}
                    </p>
                    {p.id !== 'publico' && p.id !== 'dupla' && <p className={`display mt-6 font-black ${p.price.length > 12 ? 'text-3xl sm:text-4xl' : 'text-5xl'}`} style={p.accentColor ? { color: p.accentColor } : { color: '#FF7900' }}>
                      {p.price}
                    </p>}
                  </div>
                  <button type="button" onClick={() => {
                setPlan(p);
                track('open_inscricao_modal', {
                  plan: p.id
                });
              }} className="mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm px-6 text-sm font-semibold uppercase tracking-wider text-white transition-all active:scale-[0.98]" style={p.accentColor ? { backgroundColor: p.accentColor } : { backgroundColor: '#FF7900' }} onMouseEnter={(e) => { e.target.style.opacity = '0.9'; }} onMouseLeave={(e) => { e.target.style.opacity = '1'; }}>
                    Quero esta opção <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                  </button>
                </div>
              </Reveal>)}
          </div>

          <div className="mt-10 flex flex-col gap-6 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF7900]">PIX do desafio</p>
              <p className="display mt-2 text-3xl font-black tracking-wide text-[#171717] sm:text-4xl">{PIX_KEY}</p>
              <p className="mt-2 text-sm text-neutral-600">Copie o número e cole diretamente no aplicativo do seu banco.</p>
            </div>
            <button
              type="button"
              onClick={handleCopyPix}
              aria-live="polite"
              className={`inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-sm px-6 text-sm font-semibold uppercase tracking-wider text-white transition-all active:scale-[0.98] ${pixCopied ? 'bg-[#238636]' : 'bg-[#171717] hover:bg-[#303030]'}`}
            >
              {pixCopied ? <Check className="h-4 w-4" strokeWidth={2.4} /> : <Copy className="h-4 w-4" strokeWidth={2.1} />}
              {pixCopied ? 'PIX copiado' : 'Copiar PIX'}
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[56rem] px-4 sm:px-6">
          <Reveal>
            <SectionLabel>Dúvidas</SectionLabel>
            <h2 className="text-[2.6rem] font-extrabold text-[#171717] sm:text-6xl">Perguntas frequentes</h2>
          </Reveal>
          <div className="mt-10 border-t border-black/10">
            {FAQ.map((item, i) => {
            const isOpen = faqOpen === i;
            return <div key={item.q} className="border-b border-black/10">
                  <h3>
                    <button type="button" onClick={() => setFaqOpen(isOpen ? -1 : i)} aria-expanded={isOpen} className="flex min-h-[64px] w-full items-center justify-between gap-6 py-5 text-left">
                      <span className="text-xl font-bold text-[#171717] sm:text-2xl">{item.q}</span>
                      {isOpen ? <Minus className="h-5 w-5 shrink-0 text-[#FF7900]" /> : <Plus className="h-5 w-5 shrink-0 text-[#FF7900]" />}
                    </button>
                  </h3>
                  {isOpen && <p className="pb-6 pr-10 text-[15px] leading-relaxed text-neutral-600">{item.a}</p>}
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* AWARD */}
      <section id="premio" className="bg-[#F5F3EE] py-20 sm:py-28">
        <div className="mx-auto grid max-w-[80rem] items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <Reveal y={26}>
            <div className="relative">
              <img src={AWARD_PHOTO} alt="Prêmio de Mérito Técnico 2024 recebido pelo Projeto Superando Limites da UFT" loading="lazy" className="aspect-[4/3] w-full rounded-sm object-cover" />
              <span className="absolute -bottom-3 -right-3 hidden h-20 w-20 border-4 border-[#FF7900] sm:block" aria-hidden="true" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <SectionLabel>Reconhecimento</SectionLabel>
              <h2 className="text-[2.4rem] font-extrabold text-[#171717] sm:text-5xl">
                Prêmio de Mérito Técnico 2024
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-neutral-700 sm:text-base">
                O Projeto Superando Limites, da Universidade Federal do Tocantins (UFT), foi agraciado
                com o Prêmio de Mérito Técnico em 2024, em reconhecimento à sua relevância e aos
                resultados alcançados na promoção da saúde e da qualidade de vida dos servidores da
                instituição. A iniciativa destacou-se por desenvolver ações que incentivam a prática
                regular de atividades físicas, a adoção de hábitos saudáveis e o fortalecimento do
                bem-estar físico, mental e social da comunidade universitária, consolidando-se como
                uma referência entre os projetos institucionais voltados à valorização e ao cuidado
                com os servidores.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#FF7900] py-24 text-center sm:py-32">
        <div className="route-line absolute inset-x-0 top-0 h-1 opacity-40" aria-hidden="true" />
        <div className="mx-auto max-w-[56rem] px-4 sm:px-6">
          <Reveal>
            <h2 className="text-[2.6rem] font-black leading-[0.95] text-white sm:text-7xl">
              O próximo limite é aquele que você decide superar.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a href="#inscricao" onClick={() => track('click_inscricao', {
            location: 'cta_final'
          })} className="mt-10 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm bg-[#171717] px-10 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-black active:scale-[0.98]">
              Escolher meu desafio <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="parceiros" className="border-t border-black/10 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
          <Reveal>
            <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
              Parceiros
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-14">
              <img src={LOGO_UFT} alt="Universidade Federal do Tocantins" loading="lazy" className="h-20 w-auto max-w-[180px] object-contain opacity-80 transition-opacity hover:opacity-100" />
              <img src={LOGO_SEDUC} alt="Secretaria da Educação do Tocantins" loading="lazy" className="h-20 w-auto max-w-[180px] object-contain opacity-80 transition-opacity hover:opacity-100" />
              <img src={LOGO_FAPTO} alt="FAPTO" loading="lazy" className="h-20 w-auto max-w-[180px] object-contain opacity-80 transition-opacity hover:opacity-100" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#171717] py-14 text-white">
        <div className="mx-auto flex max-w-[80rem] flex-col gap-10 px-4 sm:px-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <img src={LOGO_CIRCULAR} alt="Desafio Superando Limites" className="h-16 w-16 rounded-full object-cover" />
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Desafio Superando Limites — bike, caminhada e corrida. Metas mensais, acompanhamento pelo
              Strava e medalha entregue em todo o Brasil.
            </p>
          </div>

          <nav aria-label="Rodapé" className="flex flex-col gap-3">
            {NAV.map(item => <a key={item.href} href={item.href} className="text-sm uppercase tracking-widest text-white/70 transition-colors hover:text-[#FF7900]">
                {item.label}
              </a>)}
          </nav>

          <div className="flex flex-col gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => track('click_whatsapp', {
            location: 'footer'
          })} className="inline-flex min-h-[48px] items-center gap-3 text-sm text-white/80 transition-colors hover:text-[#FF7900]">
              <MessageCircle className="h-5 w-5" strokeWidth={1.8} /> WhatsApp (63) 99207-2064
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" onClick={() => track('click_instagram', {
            location: 'footer'
          })} className="inline-flex min-h-[48px] items-center gap-3 text-sm text-white/80 transition-colors hover:text-[#FF7900]">
              <Instagram className="h-5 w-5" strokeWidth={1.8} /> @superandolimites_br
            </a>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[80rem] border-t border-white/10 px-4 pt-6 text-xs text-white/40 sm:px-6">
          © {new Date().getFullYear()} Desafio Superando Limites. Todos os direitos reservados.
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => track('click_whatsapp', {
      location: 'floating'
    })} aria-label="Falar no WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 active:scale-95">
        <MessageCircle className="h-7 w-7" strokeWidth={1.8} />
      </a>

      {/* MODAL */}
      <Dialog open={!!plan} onOpenChange={o => !o && setPlan(null)}>
        <DialogContent className="max-w-md rounded-sm border-black/10 bg-white p-7">
          <DialogHeader>
            <DialogTitle className="text-left text-3xl font-bold uppercase text-[#171717]">
              {plan?.title}
            </DialogTitle>
            <DialogDescription className="pt-3 text-left text-[15px] leading-relaxed text-neutral-600">
              {plan?.modal}
            </DialogDescription>
          </DialogHeader>
          <p className="display mt-2 text-4xl font-black text-[#FF7900]">{plan?.price}</p>
          <a href={plan?.url} target="_blank" rel="noopener noreferrer" onClick={() => track('click_form_inscricao', {
          plan: plan?.id
        })} className="mt-4 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-sm bg-[#FF7900] px-6 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-[#e96d00] active:scale-[0.98]">
            Continuar para o formulário <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
          </a>
        </DialogContent>
      </Dialog>
    </div>;
}