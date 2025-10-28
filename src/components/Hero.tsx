import { Sparkles, Instagram } from 'lucide-react';

export default function Hero() {
  return (

    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-rose-50 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight">
          Beleza nas
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">
            pontas dos dedos
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transforme suas unhas em obras de arte com designs exclusivos e atendimento personalizado
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#services"
            className="group px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Ver Procedimentos
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-white text-gray-800 rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Instagram className="w-5 h-5 group-hover:text-pink-500 transition-colors" />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
