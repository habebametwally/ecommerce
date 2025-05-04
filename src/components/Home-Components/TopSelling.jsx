import React from 'react';

const topSelling = [
  { id: 6, name: 'Top Product A', price: '180$', image: '/images/top-a.jpg' },
  { id: 7, name: 'Top Product B', price: '210$', image: '/images/top-b.jpg' },
];

const TopSelling = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {topSelling.map((item) => (
        <div key={item.id} className="bg-white rounded-xl shadow p-4 hover:shadow-xl transition">
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-3" />
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600">{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default TopSelling;
