import React from 'react';

const hotDeals = [
  { id: 8, name: 'Hot Deal 1', oldPrice: '250$', newPrice: '190$', image: '/images/hot-1.jpg' },
  { id: 9, name: 'Hot Deal 2', oldPrice: '300$', newPrice: '220$', image: '/images/hot-2.jpg' },
];

const HotDeals = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {hotDeals.map((deal) => (
        <div key={deal.id} className="bg-white rounded-xl shadow-lg p-4 border-l-4 border-red-500">
          <img src={deal.image} alt={deal.name} className="w-full h-48 object-cover rounded mb-3" />
          <h3 className="text-lg font-semibold">{deal.name}</h3>
          <p className="text-red-600 font-bold">{deal.newPrice} <span className="line-through text-gray-400 ml-2">{deal.oldPrice}</span></p>
        </div>
      ))}
    </div>
  );
};

export default HotDeals;
