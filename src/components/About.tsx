import { Heart, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre o Studio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Paixão por detalhes, arte nas unhas
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Com anos de experiência em nail design, nosso studio é especializado em criar designs únicos
              que refletem a personalidade de cada cliente. Cada unha é tratada como uma pequena tela,
              onde a criatividade encontra a perfeição técnica.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Utilizamos apenas produtos de alta qualidade, priorizando a saúde das suas unhas enquanto
              criamos looks incríveis que duram. Nosso compromisso é fazer você se sentir confiante e
              especial a cada visita.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-rose-200 to-pink-200 rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <Heart className="w-24 h-24 text-rose-500 mx-auto mb-4" />
                  <p className="text-2xl font-semibold text-gray-800">Feito com amor e dedicação</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <Award className="w-8 h-8 text-rose-500" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Profissionalismo</h4>
            <p className="text-gray-600">Certificações e treinamentos constantes para oferecer o melhor</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <Heart className="w-8 h-8 text-rose-500" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Cuidado</h4>
            <p className="text-gray-600">Higienização rigorosa e materiais esterilizados em cada atendimento</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <Users className="w-8 h-8 text-rose-500" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Atendimento</h4>
            <p className="text-gray-600">Personalizado e exclusivo, focado em sua satisfação</p>
          </div>
        </div>
      </div>
    </section>
  );
}
