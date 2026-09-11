import React, { useEffect, useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { NAV, LOGO_HORIZONTAL, LOGO_CIRCULAR, INSTAGRAM_URL } from '@/data/site';
import { track } from '@/lib/track';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled ? 'bg-white/95 backdrop-blur border-b border-black/10' : 'bg-white/80 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[90rem] items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#inicio" className="flex items-center" aria-label="Desafio Superando Limites — início">
          <img src={LOGO_HORIZONTAL} alt="Desafio Superando Limites" className="hidden h-11 w-auto md:block" />
          <img src={LOGO_CIRCULAR} alt="Desafio Superando Limites" className="h-11 w-11 rounded-full object-cover md:hidden" />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium uppercase tracking-[0.14em] text-neutral-700 transition-colors hover:text-[#FF7900]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('click_instagram', { location: 'header' })}
            aria-label="Instagram do Desafio Superando Limites"
            className="grid h-12 w-12 place-items-center rounded-full text-neutral-800 transition-colors hover:text-[#FF7900]"
          >
            <Instagram className="h-5 w-5" strokeWidth={1.8} />
          </a>
          <a
            href="#inscricao"
            onClick={() => track('click_inscricao', { location: 'header' })}
            className="hidden min-h-[48px] items-center rounded-sm bg-[#FF7900] px-6 text-sm font-semibold uppercase tracking-wider text-white transition-transform hover:bg-[#e96d00] active:scale-[0.98] sm:inline-flex"
          >
            Inscreva-se
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="grid h-12 w-12 place-items-center rounded-sm text-neutral-900 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-white lg:hidden">
          <nav aria-label="Menu móvel" className="mx-auto flex max-w-[90rem] flex-col px-4 py-2 sm:px-6">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[48px] items-center border-b border-black/5 text-base font-medium uppercase tracking-wide text-neutral-800"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#inscricao"
              onClick={() => {
                setOpen(false);
                track('click_inscricao', { location: 'mobile_menu' });
              }}
              className="my-3 inline-flex min-h-[48px] items-center justify-center rounded-sm bg-[#FF7900] px-6 text-sm font-semibold uppercase tracking-wider text-white"
            >
              Inscreva-se
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
