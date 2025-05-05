"use client";
import Preloader from "./Preloader";
import { useState } from "react";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-b from-blue-900/95 to-blue-800/80 backdrop-blur-lg sticky top-0 z-50 shadow-2xl border-b border-blue-700/40">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 sm:py-3">
        <div className="flex items-center gap-2 sm:gap-4">
          <Image
            src="/food-delivery-logo.svg"
            alt="Logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full bg-white p-1 shadow-lg border-2 border-blue-500"
            priority
          />
          <span className="text-2xl font-extrabold text-white tracking-tight drop-shadow-xl font-sans">
            Food Delivery Jobs
          </span>
        </div>
        <div className="hidden md:flex gap-4 sm:gap-8 items-center">
          <a href="#despre" className="nav-link">
            Despre
          </a>
          <a href="#cumfunctioneaza" className="nav-link">
            Aplicația
          </a>
          <a href="#testimoniale" className="nav-link">
            Testimoniale
          </a>
          <a href="#faq" className="nav-link">
            FAQ
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button className="text-white p-2 rounded hover:bg-blue-700/20 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <style jsx>{`
        .nav-link {
          @apply text-gray-100 font-semibold text-lg px-2 py-1 rounded transition-colors duration-200 relative font-sans;
        }
        .nav-link:hover,
        .nav-link:focus {
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.08);
        }
        .nav-link::after {
          content: "";
          display: block;
          height: 2px;
          width: 0%;
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          border-radius: 2px;
          transition: width 0.3s;
        }
        .nav-link:hover::after,
        .nav-link:focus::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : (
        <>
          <Navbar />
          <BackgroundAnimation>
            <main className="container mx-auto px-2 sm:px-4 py-8 sm:py-16 flex flex-col items-center text-center animate-fade-in font-sans">
              {/* HERO SECTION */}
              <section className="w-full flex flex-col items-center justify-center gap-6 mb-12">
                <h1 className="text-4xl sm:text-6xl font-extrabold text-blue-900 dark:text-white drop-shadow-xl leading-tight max-w-3xl">
                  Livrăm bucurie. Recrutăm oameni pasionați!
                </h1>
                <p className="text-lg sm:text-2xl text-blue-800 dark:text-blue-100 max-w-xl">
                  Fii parte din cea mai dinamică echipă de food delivery.
                  Aplicația noastră modernă te ajută să livrezi rapid și
                  eficient.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="#recrutare"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full shadow transition text-lg"
                  >
                    Devino curier
                  </a>
                  <a
                    href="#despre"
                    className="bg-white hover:bg-blue-50 text-blue-700 font-bold px-8 py-3 rounded-full shadow border border-blue-200 transition text-lg"
                  >
                    Despre noi
                  </a>
                </div>
                <div className="flex flex-wrap gap-4 justify-center mt-6">
                  {/* Modern, relevant icons for hero section */}
                  {/* SVG icons remain unchanged for best performance */}
                </div>
              </section>
              {/* DESPRE NOI */}
              <section
                id="despre"
                className="w-full max-w-3xl bg-blue-50 dark:bg-slate-800 rounded-xl p-6 sm:p-10 shadow-lg mb-12 text-left"
              >
                <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-3">
                  Despre noi
                </h2>
                <p className="text-blue-900 dark:text-blue-100 text-lg mb-2">
                  Suntem o companie modernă de food delivery, cu o rețea extinsă
                  de curieri și clienți fericiți. Misiunea noastră este să
                  livrăm rapid, sigur și cu zâmbetul pe buze.
                </p>
                <ul className="list-disc pl-6 text-blue-900 dark:text-blue-100">
                  <li>Peste 1000 de curieri activi</li>
                  <li>Suport 24/7 și training gratuit</li>
                  <li>Tehnologie de ultimă generație</li>
                </ul>
              </section>
              {/* PREZENTARE APLICAȚIE */}
              <section id="cumfunctioneaza" className="w-full max-w-4xl mb-12">
                <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-6">
                  Cum funcționează aplicația?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg flex flex-col items-center">
                    <Image
                      src="/next.svg"
                      alt="Înscriere rapidă"
                      width={48}
                      height={48}
                      className="h-12 w-12 mb-3"
                    />
                    <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-2">
                      Înscrie-te
                    </h3>
                    <p className="text-blue-800 dark:text-blue-100">
                      Completezi formularul și primești acces la platformă.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg flex flex-col items-center">
                    <Image
                      src="/tech-logo.svg"
                      alt="Primești comenzi"
                      width={48}
                      height={48}
                      className="h-12 w-12 mb-3"
                    />
                    <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-2">
                      Primești comenzi
                    </h3>
                    <p className="text-blue-800 dark:text-blue-100">
                      Aplicația te notifică instant și vezi detalii despre
                      livrare.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg flex flex-col items-center">
                    <Image
                      src="/vercel.svg"
                      alt="Livrezi și câștigi"
                      width={48}
                      height={48}
                      className="h-12 w-12 mb-3"
                    />
                    <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-2">
                      Livrezi & câștigi
                    </h3>
                    <p className="text-blue-800 dark:text-blue-100">
                      Ajungi rapid la client, livrezi și primești plata direct
                      în cont.
                    </p>
                  </div>
                </div>
              </section>
              {/* BENEFICII */}
              <section
                id="beneficii"
                className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
              >
                <div className="bg-blue-100 dark:bg-slate-800 rounded-xl p-6 shadow-lg flex flex-col items-center">
                  {/* Lucide/heroicon: Clock */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-blue-500 mb-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-2">
                    Program flexibil
                  </h3>
                  <p className="text-blue-800 dark:text-blue-100">
                    Lucrezi când vrei, cât vrei. Ideal pentru studenți sau ca
                    job part-time.
                  </p>
                </div>
                <div className="bg-blue-100 dark:bg-slate-800 rounded-xl p-6 shadow-lg flex flex-col items-center">
                  {/* Lucide/heroicon: CurrencyEuro */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-green-500 mb-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 9a4 4 0 00-8 0v6a4 4 0 008 0V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 13h6"
                    />
                  </svg>
                  <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-2">
                    Venit atractiv
                  </h3>
                  <p className="text-blue-800 dark:text-blue-100">
                    Primești plata rapid, bonusuri de performanță și tips-uri de
                    la clienți.
                  </p>
                </div>
                <div className="bg-blue-100 dark:bg-slate-800 rounded-xl p-6 shadow-lg flex flex-col items-center">
                  {/* Lucide/heroicon: Users */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-purple-500 mb-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4V7a4 4 0 00-8 0v2m8 0a4 4 0 01-8 0"
                    />
                  </svg>
                  <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-2">
                    Echipă prietenoasă
                  </h3>
                  <p className="text-blue-800 dark:text-blue-100">
                    Suntem o comunitate unită, cu suport constant și training
                    gratuit.
                  </p>
                </div>
              </section>
              {/* PARTENERI */}
              <section id="parteneri" className="w-full max-w-4xl mb-12">
                <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-6">
                  Partenerii noștri
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-8">
                  <Image
                    src="/vercel.svg"
                    alt="Vercel"
                    width={40}
                    height={40}
                    className="h-10"
                  />
                  <Image
                    src="/tech-logo.svg"
                    alt="Tech"
                    width={40}
                    height={40}
                    className="h-10"
                  />
                  <Image
                    src="/next.svg"
                    alt="Next.js"
                    width={40}
                    height={40}
                    className="h-10"
                  />
                  <Image
                    src="/food-delivery-logo.svg"
                    alt="Food Delivery"
                    width={40}
                    height={40}
                    className="h-10"
                  />
                </div>
              </section>
              {/* BLOG / NOUTĂȚI */}
              <section id="blog" className="w-full max-w-4xl mb-12">
                <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-6">
                  Noutăți & Blog
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg flex flex-col items-start">
                    <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-2">
                      Cum să devii curier de succes
                    </h3>
                    <p className="text-blue-800 dark:text-blue-100 mb-2">
                      Află sfaturi utile pentru a-ți crește veniturile și a avea
                      clienți mulțumiți.
                    </p>
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Citește mai mult
                    </a>
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg flex flex-col items-start">
                    <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-2">
                      Top 5 beneficii ale jobului de livrator
                    </h3>
                    <p className="text-blue-800 dark:text-blue-100 mb-2">
                      Descoperă de ce tot mai mulți aleg să livreze cu noi.
                    </p>
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Citește mai mult
                    </a>
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg flex flex-col items-start">
                    <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-2">
                      Noutăți din aplicație
                    </h3>
                    <p className="text-blue-800 dark:text-blue-100 mb-2">
                      Vezi cele mai noi funcționalități și update-uri pentru
                      curieri și clienți.
                    </p>
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Citește mai mult
                    </a>
                  </div>
                </div>
              </section>
              {/* TESTIMONIALE */}
              <section id="testimoniale" className="w-full max-w-4xl mb-12">
                <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-6">
                  Ce spun curierii și clienții
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-blue-100 dark:bg-slate-700 rounded-xl p-6 shadow flex flex-col items-center">
                    <Image
                      src="/food-delivery-logo.svg"
                      alt="Curier 1"
                      width={56}
                      height={56}
                      className="w-14 h-14 mb-3 rounded-full bg-white p-2"
                    />
                    <p className="text-blue-900 dark:text-blue-100 italic mb-2">
                      “Programul flexibil m-a ajutat să câștig bani în timpul
                      facultății.”
                    </p>
                    <span className="text-blue-600 dark:text-blue-300 font-semibold">
                      Andrei, curier
                    </span>
                  </div>
                  <div className="bg-blue-100 dark:bg-slate-700 rounded-xl p-6 shadow flex flex-col items-center">
                    <Image
                      src="/globe.svg"
                      alt="Client 1"
                      width={56}
                      height={56}
                      className="w-14 h-14 mb-3 rounded-full bg-white p-2"
                    />
                    <p className="text-blue-900 dark:text-blue-100 italic mb-2">
                      “Livrare rapidă, mereu la timp și cu zâmbetul pe buze!”
                    </p>
                    <span className="text-blue-600 dark:text-blue-300 font-semibold">
                      Elena, clientă
                    </span>
                  </div>
                  <div className="bg-blue-100 dark:bg-slate-700 rounded-xl p-6 shadow flex flex-col items-center">
                    <Image
                      src="/vercel.svg"
                      alt="Curier 2"
                      width={56}
                      height={56}
                      className="w-14 h-14 mb-3 rounded-full bg-white p-2"
                    />
                    <p className="text-blue-900 dark:text-blue-100 italic mb-2">
                      “Plata rapidă și bonusuri atractive. O experiență
                      excelentă!”
                    </p>
                    <span className="text-blue-600 dark:text-blue-300 font-semibold">
                      Ionuț, curier
                    </span>
                  </div>
                  <div className="bg-blue-100 dark:bg-slate-700 rounded-xl p-6 shadow flex flex-col items-center">
                    <Image
                      src="/window.svg"
                      alt="Client 2"
                      width={56}
                      height={56}
                      className="w-14 h-14 mb-3 rounded-full bg-white p-2"
                    />
                    <p className="text-blue-900 dark:text-blue-100 italic mb-2">
                      “Comand mereu de la voi, totul e simplu și gustos!”
                    </p>
                    <span className="text-blue-600 dark:text-blue-300 font-semibold">
                      Mihai, client
                    </span>
                  </div>
                </div>
              </section>
              {/* FAQ */}
              <section id="faq" className="w-full max-w-3xl mb-12">
                <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-6">
                  Întrebări frecvente
                </h2>
                <div className="space-y-4 text-left">
                  <div className="bg-blue-50 dark:bg-slate-700 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 dark:text-white">
                      Ce condiții trebuie să îndeplinesc?
                    </h3>
                    <p className="text-blue-800 dark:text-blue-100">
                      Trebuie să ai minim 18 ani, permis de conducere (pentru
                      auto/scooter) sau bicicletă, și un smartphone.
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-slate-700 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 dark:text-white">
                      Cum se face plata?
                    </h3>
                    <p className="text-blue-800 dark:text-blue-100">
                      Plata se face săptămânal sau lunar, în funcție de
                      preferințe, direct în contul tău bancar.
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-slate-700 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 dark:text-white">
                      Este nevoie de experiență?
                    </h3>
                    <p className="text-blue-800 dark:text-blue-100">
                      Nu, oferim training gratuit pentru toți noii livratori.
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-slate-700 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 dark:text-white">
                      Cum pot deveni client?
                    </h3>
                    <p className="text-blue-800 dark:text-blue-100">
                      Descarci aplicația, plasezi comanda și primești mâncarea
                      rapid la ușă.
                    </p>
                  </div>
                </div>
              </section>
              {/* FORMULAR DE RECRUTARE */}
              <section
                id="recrutare"
                className="w-full max-w-lg bg-blue-50 dark:bg-slate-800 rounded-xl p-6 sm:p-8 shadow-lg mb-12"
              >
                <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">
                  Aplică pentru job
                </h2>
                <form className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Nume complet"
                    className="px-4 py-2 rounded bg-white dark:bg-slate-700 text-blue-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Telefon"
                    className="px-4 py-2 rounded bg-white dark:bg-slate-700 text-blue-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <textarea
                    placeholder="Mesaj (opțional)"
                    className="px-4 py-2 rounded bg-white dark:bg-slate-700 text-blue-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow transition mt-2"
                  >
                    Trimite aplicația
                  </button>
                </form>
              </section>
              {/* CONTACT & SOCIAL */}
              <section
                id="contact"
                className="w-full max-w-2xl mb-8 bg-blue-50 dark:bg-slate-800 rounded-xl p-6 sm:p-8 shadow-lg flex flex-col items-center"
              >
                <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">
                  Contact
                </h2>
                <div className="text-blue-900 dark:text-blue-100 mb-2 font-bold text-lg">
                  Emanuel Astalos
                </div>
                <div className="text-blue-900 dark:text-blue-100 mb-4 font-semibold text-lg">
                  0733 982 222
                </div>
                <div className="flex gap-4 mt-2">
                  {/* Modern social icons */}
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="hover:scale-110 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="hover:scale-110 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-pink-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.608 1.308 2.633 2.283 2.427 3.395 2.369 4.676 2.311 5.956 2.299 6.365 2.299 12s.012 6.044.07 7.324c.058 1.281.264 2.393 1.239 3.368.974.974 2.086 1.18 3.367 1.238C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.264 3.368-1.238.974-.974 1.18-2.086 1.238-3.367.058-1.28.07-1.689.07-7.324s-.012-6.044-.07-7.324c-.058-1.281-.264-2.393-1.238-3.368-.974-.974-2.086-1.18-3.367-1.238C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="hover:scale-110 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                    </svg>
                  </a>
                </div>
              </section>
            </main>
          </BackgroundAnimation>
        </>
      )}
    </>
  );
}
