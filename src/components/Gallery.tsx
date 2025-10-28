import { Heart } from 'lucide-react';

const galleryItems = [
  { color: 'from-rose-300 to-pink-300', label: 'Francesinha Clássica' },
  { color: 'from-pink-400 to-rose-400', label: 'Nail Art Floral' },
  { color: 'from-rose-200 to-pink-200', label: 'Minimalista Chic' },
  { color: 'from-pink-300 to-rose-500', label: 'Glitter & Glamour' },
  { color: 'from-rose-400 to-pink-300', label: 'Degradê Romântico' },
  { color: 'from-pink-500 to-rose-300', label: 'Pedrarias Luxo' }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Galeria de Trabalhos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Alguns dos nossos designs favoritos criados com amor e dedicação
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`}></div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center p-4">
                  <Heart className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white font-semibold">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-4 font-medium">
              Quer ver mais do nosso trabalho?
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Siga no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
