import { AlertCircle, Clock, XCircle, Shield, Heart } from 'lucide-react';

const policies = [
  {
    icon: Clock,
    title: 'Agendamento',
    description: 'Reserve seu horário com pelo menos 24h de antecedência. Confirmação via WhatsApp ou Instagram.',
    color: 'from-rose-400 to-pink-400'
  },
  {
    icon: AlertCircle,
    title: 'Tolerância',
    description: '15 minutos de tolerância para atrasos. Após esse período, o horário pode ser reagendado.',
    color: 'from-pink-400 to-rose-400'
  },
  {
    icon: XCircle,
    title: 'Cancelamento',
    description: 'Cancelamentos devem ser feitos com no mínimo 12h de antecedência para evitar taxas.',
    color: 'from-rose-500 to-pink-500'
  },
  {
    icon: Shield,
    title: 'Higiene',
    description: 'Todos os materiais são esterilizados. Ambiente higienizado antes e após cada atendimento.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Heart,
    title: 'Cuidados',
    description: 'Siga as orientações pós-procedimento para garantir durabilidade e saúde das unhas.',
    color: 'from-rose-400 to-pink-500'
  }
];

export default function Policies() {
  return (
    <section id="policies" className="py-24 px-6 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Políticas do Studio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Para garantir o melhor atendimento e experiência, pedimos atenção às nossas políticas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {policies.map((policy, index) => {
            const Icon = policy.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${policy.color}`}></div>
                <div className="p-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${policy.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {policy.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {policy.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações Importantes</h3>
          <div className="space-y-4 text-gray-600">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
              <p><span className="font-semibold text-gray-900">Pagamento:</span> Aceitamos dinheiro, PIX, débito e crédito. Entrada de 50% para agendamentos de procedimentos acima de R$ 200.</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
              <p><span className="font-semibold text-gray-900">Manutenção:</span> Recomendamos retornos a cada 15-20 dias para manter suas unhas sempre perfeitas.</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</span>
              <p><span className="font-semibold text-gray-900">Alergias:</span> Informe qualquer alergia ou sensibilidade antes do procedimento para sua segurança.</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</span>
              <p><span className="font-semibold text-gray-900">Garantia:</span> Caso ocorra algum problema técnico em até 7 dias, realizamos o reparo sem custo adicional.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
