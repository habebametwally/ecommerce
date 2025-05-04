import React from 'react';
import product1 from '../../assets/img/product0.png'
import product2 from '../../assets/img/product01.png'
const newProducts = [
  { id: 4, name: 'New Product 1', price: '120$', image: product1 },
  { id: 5, name: 'New Product 2', price: '140$', image: product2 },
];

const NewProducts = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {newProducts.map((product) => (
        <div key={product.id} className="w-full sm:w-64 bg-white rounded-xl shadow p-4">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-3" />
          <h3 className="text-md font-semibold">{product.name}</h3>
          <p className="text-gray-500">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default NewProducts;
