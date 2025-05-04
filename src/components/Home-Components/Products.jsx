import React from 'react';

const dummyProducts = [
  { id: 1, name: 'Product A', price: '100$', image: '/images/product-a.jpg' },
  { id: 2, name: 'Product B', price: '150$', image: '/images/product-b.jpg' },
  { id: 3, name: 'Product C', price: '200$', image: '/images/product-c.jpg' },
];

const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {dummyProducts.map((product) => (
        <div key={product.id} className="bg-white rounded-xl shadow hover:shadow-lg p-4 transition">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-3" />
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-500">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
