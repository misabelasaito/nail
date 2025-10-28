import { MapPin, Phone, Mail, Instagram, Clock, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold">Nail Studio</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transformando unhas em obras de arte desde 2020. Sua beleza é nossa paixão.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Instagram className="w-5 h-5" />
              Siga no Instagram
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-rose-400" />
              Horário de Funcionamento
            </h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex justify-between">
                <span>Segunda a Sexta</span>
                <span className="font-semibold text-white">14:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado</span>
                <span className="font-semibold text-white">09:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo</span>
                <span className="font-semibold text-rose-400">Fechado</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-sm text-gray-400">
                <span className="text-rose-400 font-semibold">Atenção:</span> Atendemos apenas com hora marcada
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <a
                href="tel:+5511999999999"
                className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-rose-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Telefone / WhatsApp</p>
                  <p className="font-semibold">(14)99849-2425 </p>
                </div>
              </a>

              <a
                href="mailto:contato@nailstudio.com"
                className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-rose-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">E-mail</p>
                  <p className="font-semibold">contato@nailstudio.com</p>
                </div>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-rose-500 group-hover:to-pink-500 transition-all">
                  <Instagram className="w-5 h-5 text-rose-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Instagram</p>
                  <p className="font-semibold">@mariaisabela_designer</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3 text-gray-400">
              <MapPin className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white mb-1">Localização</p>
                <p className="text-sm">Rua Jose Pedro De Oliveira Campos, 429 - Jardim Beija-Flor</p>
                <p className="text-sm">Itapeva, SP - CEP 18401-480</p>
              </div>
            </div>

            <div className="text-center md:text-right text-gray-400 text-sm">
              <p>© 2024 Nail Studio</p>
              <p className="mt-1">Feito por Maria Isabela com <Heart className="w-4 h-4 inline text-rose-400" /> e dedicação</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
