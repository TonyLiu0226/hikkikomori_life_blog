import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample image data
const images = [
  { id: 1, src: "/img/docusaurus-social-card.jpg", alt: "Sample image 1", description:"docusaurus headline"},
  { id: 2, src: "/img/logo.JPG", alt: "Sample image 2", description:"Two pieces of seaweed on the table at Lord Beaverbrook High School on July 9, 2019, used as marketing material to get Tanish to eat more seaweed." },
  { id: 3, src: "/img/docusaurus.png", alt: "Sample image 3", description:"docusaurus logo" },
];

export default function PhotoGallery() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const navigateImage = (direction) => {
        setCurrentImageIndex(prevIndex => {
            if (direction === 'next') {
                return (prevIndex + 1) % images.length;
            } else {
                return ((prevIndex - 1) + images.length) % images.length;
            }
        });
    };

    return (
        <div
            className="w-full bg-white rounded-lg shadow-md p-6 cursor-pointer
                       transition-all duration-300 ease-in-out
                       hover:scale-105 hover:bg-purple-50
                       border border-gray-200"
        >
            {/* Image Gallery */}
            <div className="relative mb-4">
              <div className="aspect-w-16 aspect-h-9 mb-2">
                <img
                  src={`${images[currentImageIndex].src}`}
                  alt={`image ${currentImageIndex + 1}`}
                  className="rounded-lg object-contain w-full max-h-96"
                />
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                  className="p-2 rounded-full hover:bg-green-700 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>

                <span className="text-sm text-gray-600">
                  {currentImageIndex + 1} / {images.length}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                  className="p-2 rounded-full hover:bg-green-700 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              </div>
            </div>

            <p className="text-gray-600 text-center leading-relaxed">
                {images[currentImageIndex].description}
            </p>
        </div>
    );
}
