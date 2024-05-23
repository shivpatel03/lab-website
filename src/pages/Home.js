import React, { useState, useEffect, useRef } from 'react';
import 'tailwindcss/tailwind.css';
// import 'alpinejs';

const Home = () => {
  const [cards, setCards] = useState([]);
  const scrollContainerRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  useEffect(() => {
    setCards([
      {
        id: 1,
        image: `https://source.unsplash.com/random/300x200?${encodeURIComponent('Cocktail')}`,
        title: 'Cocktail',
        description: 'Tropical mix of flavors, perfect for parties.',
        price: 8.99,
        link: 'https://lqrs.com'
      },
      {
        id: 2,
        image: `https://source.unsplash.com/random/300x200?${encodeURIComponent('Smoothie')}`,
        title: 'Smoothie',
        description: 'Refreshing blend of fruits and yogurt.',
        price: 5.49,
        link: 'https://lqrs.com'
      },
      {
        id: 3,
        image: `https://source.unsplash.com/random/300x200?${encodeURIComponent('Iced Coffee')}`,
        title: 'Iced Coffee',
        description: 'Cold brewed coffee with a hint of vanilla.',
        price: 4.99,
        link: 'https://lqrs.com'
      },
      {
        id: 4,
        image: `https://source.unsplash.com/random/300x200?${encodeURIComponent('Mojito')}`,
        title: 'Mojito',
        description: 'Classic Cuban cocktail with mint and lime.',
        price: 7.99,
        link: 'https://lqrs.com'
      },
      {
        id: 5,
        image: `https://source.unsplash.com/random/300x200?${encodeURIComponent('Matcha Latte')}`,
        title: 'Matcha Latte',
        description: 'Creamy green tea latte, rich in antioxidants.',
        price: 6.49,
        link: 'https://lqrs.com'
      },
      {
        id: 6,
        image: `https://source.unsplash.com/random/300x200?${encodeURIComponent('Fruit Punch')}`,
        title: 'Fruit Punch',
        description: 'Sweet and tangy punch, bursting with fruity flavors.',
        price: 3.99,
        link: 'https://lqrs.com'
      },
      {
        id: 7,
        image: `https://source.unsplash.com/random/300x200?${encodeURIComponent('Bubble Tea')}`,
        title: 'Bubble Tea',
        description: 'Chewy tapioca pearls in a sweet milk tea base.',
        price: 4.99,
        link: 'https://lqrs.com'
      }
    ]);

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - scrollContainerRef.current.offsetLeft;
      scrollLeft = scrollContainerRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX) * 1;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const container = scrollContainerRef.current;
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <footer className="fixed bottom-0 w-full bg-white shadow-lg">
      <div ref={scrollContainerRef} className="overflow-x-scroll scrollbar-hide mb-4 relative px-0.5" style={{ overflowY: 'hidden' }}>
        <div className="flex snap-x snap-mandatory gap-4" style={{ width: 'max-content' }}>
          {cards.map((card) => (
            <div key={card.id} className="flex-none w-64 snap-center">
              <div className="bg-white border-1 border border-gray-200 rounded-lg overflow-hidden mb-4 h-64">
                <img src={card.image} alt="" className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg leading-6 font-bold text-gray-900">{card.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{card.description}</p>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Home;
