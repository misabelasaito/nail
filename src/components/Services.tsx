import { Clock, Sparkles, Palette, Gem, Star, Brush } from 'lucide-react';

const services = [
  {
    icon: Brush,
    name: 'Manicure Completa',
    description: 'Cuidados completos com cutícula, formato e esmaltação impecável',
    duration: '60 min',
    price: 'R$ 80',
    gradient: 'from-rose-400 to-pink-400'
  },
  {
    icon: Sparkles,
    name: 'Alongamento em Gel',
    description: 'Unhas longas e naturais com gel de alta qualidade e durabilidade',
    duration: '90 min',
    price: 'R$ 150',
    gradient: 'from-pink-400 to-rose-400'
  },
  {
    icon: Palette,
    name: 'Nail Art',
    description: 'Designs personalizados e exclusivos criados especialmente para você',
    duration: '90 min',
    price: 'A partir de R$ 120',
    gradient: 'from-rose-500 to-pink-500'
  },
  {
    icon: Gem,
    name: 'Aplicação de Pedrarias',
    description: 'Brilho e sofisticação com pedrarias e acessórios de luxo',
    duration: '30 min',
    price: 'R$ 50',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: Star,
    name: 'Blindagem',
    description: 'Tratamento fortificante que protege e fortalece as unhas',
    duration: '45 min',
    price: 'R$ 90',
    gradient: 'from-rose-400 to-pink-500'
  },
  {
    icon: Sparkles,
    name: 'Manutenção',
    description: 'Retoques e cuidados para manter suas unhas sempre perfeitas',
    duration: '60 min',
    price: 'R$ 100',
    gradient: 'from-pink-400 to-rose-500'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Catálogo de Procedimentos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Serviços especializados para deixar suas unhas sempre impecáveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.name}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{service.duration}</span>
                    </div>
                    <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">
                      {service.price}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8">
            <p className="text-gray-600 mb-4">
              <span className="font-semibold text-gray-900">Dica:</span> Agende com antecedência para garantir seu horário preferido
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Agendar Horário
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
