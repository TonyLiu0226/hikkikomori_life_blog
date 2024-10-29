import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample image data
const images = [
  { id: 1, src: "/img/2023-demonware-prank.png", alt: "Sample image 1", description:"Using n8n to send a fake email to a friend regarding a job interview"},
  { id: 2, src: "/img/logo.JPG", alt: "Sample image 2", description:"Two pieces of seaweed on the table at Lord Beaverbrook High School on July 9, 2019, used as marketing material to get Tanish to eat more seaweed." },
  { id: 3, src: "/img/seaweed1.png", alt: "Sample image 3", description:"Tanish reacting to the seaweed on the table at Lord Beaverbrook High School on July 9, 2019." },
  { id: 4, src: "/img/july6-1.png", alt: "Sample image 4", description:"Major fight on the discord group chat on July 6, 2019." },
  { id: 5, src: "/img/july6-2.png", alt: "Sample image 5", description:"Major fight on the discord group chat on July 6, 2019." },
  { id: 6, src: "/img/july11-1.png", alt: "Sample image 6", description:"Tanish reacting to his friend getting blocked on all social media platforms on July 11, 2019." },
  { id: 7, src: "/img/july11-2.png", alt: "Sample image 7", description:"Tanish reacting to his friend getting blocked on all social media platforms on July 11, 2019." },
  { id: 8, src: "/img/beerprank1.png", alt: "Sample image 8", description:"Tanish reacting to his friend giving him a cocktail of soy sauce, blueberry syrup, coca-cola, and honey disguised as 'high quality chinese beer'." },
  { id: 9, src: "/img/beerprank2.png", alt: "Sample image 9", description:"Tanish reacting to his friend giving him a cocktail of soy sauce, blueberry syrup, coca-cola, and honey disguised as 'high quality chinese beer'." },
  { id: 10, src: "/img/beerprank3.png", alt: "Sample image 10", description:"Tanish reacting to his friend giving him a cocktail of soy sauce, blueberry syrup, coca-cola, and honey disguised as 'high quality chinese beer'." },
  { id: 11, src: "/img/beerprank4.png", alt: "Sample image 11", description:"Tanish reacting to his friend giving him a cocktail of soy sauce, blueberry syrup, coca-cola, and honey disguised as 'high quality chinese beer'." },
  { id: 12, src: "/img/image0-5.jpg", alt: "Sample image 12", description:"Alex giving Tanish some relationship advice after an incident during English Class where Tanish whispered something inappropriate." },
  { id: 13, src: "/img/image0-6.jpg", alt: "Sample image 13", description:"Alex giving Tanish some relationship advice after an incident during English Class where Tanish whispered something inappropriate." },
  { id: 14, src: "/img/image0-4.jpg", alt: "Sample image 14", description:"Mandatory health inspection at Henry Wise Wood High School on September 2019." },
  { id: 15, src: "/img/tanishweaboo0.jpg", alt: "Sample image 15", description:"Alex roasting Tanish for dressing like a weeb and giving tips to improve his appearance." },
  { id: 16, src: "/img/tanishweaboo1.jpg", alt: "Sample image 16", description:"Alex roasting Tanish for dressing like a weeb and giving tips to improve his appearance." },
  { id: 17, src: "/img/tanishweaboo2.jpg", alt: "Sample image 17", description:"Alex roasting Tanish for dressing like a weeb and giving tips to improve his appearance." },
  { id: 18, src: "/img/tanishweaboo3.jpg", alt: "Sample image 18", description:"Alex roasting Tanish for dressing like a weeb and giving tips to improve his appearance." },
  { id: 19, src: "/img/tanishweaboo4.jpg", alt: "Sample image 19", description:"Alex roasting Tanish for dressing like a weeb and giving tips to improve his appearance." },
  { id: 20, src: "/img/tanishweaboo5.jpg", alt: "Sample image 20", description:"Alex roasting Tanish for dressing like a weeb and giving tips to improve his appearance." },
  { id: 21, src: "/img/memeoof1.png", alt: "Sample image 21", description:"" },
  { id: 22, src: "/img/memeoof2.png", alt: "Sample image 22", description:"" },
  { id: 23, src: "/img/09-10-1.png", alt: "Sample image 23", description:"Alex still could not move on from the incident over the summer, despite the new school year already being underway." },
  { id: 24, src: "/img/09-10-2.png", alt: "Sample image 24", description:"Alex still could not move on from the incident over the summer, despite the new school year already being underway." },
  { id: 25, src: "/img/arch30.png", alt: "Sample image 25", description:"Architecture 30 was not a fun class with such a strict professor." },
  { id: 26, src: "/img/robotics1.png", alt: "Sample image 26", description:"Ahh, robotics club... Where we learn to attach motors onto sticks." },
  { id: 27, src: "/img/robotics2.png", alt: "Sample image 27", description:"Ahh, robotics club... Where we learn to attach motors onto sticks." },
  { id: 28, src: "/img/alextanishforeshadowing.png", alt: "Sample image 28", description:"A preview of a heated argument between Alex and Tanish on November 26, 2019 that ultimately ended in their friendship being torn apart." },
  { id: 29, src: "/img/alextanishfight1.png", alt: "Sample image 29", description:"A heated argument between Alex and Tanish on November 26, 2019 that ultimately ended in their friendship being torn apart." },
  { id: 30, src: "/img/alextanishfight2.png", alt: "Sample image 30", description:"A heated argument between Alex and Tanish on November 26, 2019 that ultimately ended in their friendship being torn apart." },
  { id: 31, src: "/img/alextanishfight3.png", alt: "Sample image 31", description:"A heated argument between Alex and Tanish on November 26, 2019 that ultimately ended in their friendship being torn apart." },
  { id: 32, src: "/img/alextanishfight4.png", alt: "Sample image 32", description:"A heated argument between Alex and Tanish on November 26, 2019 that ultimately ended in their friendship being torn apart." },
  { id: 33, src: "/img/alextanishfight5.png", alt: "Sample image 33", description:"A heated argument between Alex and Tanish on November 26, 2019 that ultimately ended in their friendship being torn apart." },
  { id: 34, src: "/img/alextanishfight6.png", alt: "Sample image 34", description:"A heated argument between Alex and Tanish on November 26, 2019 that ultimately ended in their friendship being torn apart." },
  { id: 35, src: "/img/alextanishfight7.png", alt: "Sample image 35", description:"A heated argument between Alex and Tanish on November 26, 2019 that ultimately ended in their friendship being torn apart." },
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
                  className="rounded-lg object-contain w-full max-h-96 md:max-h-screen"
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
