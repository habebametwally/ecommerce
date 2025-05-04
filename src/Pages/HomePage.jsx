import React from 'react';
import Collections from '../components/Home-Components/Collections';
import Products from '../components/Home-Components/Products';
import NewProducts from '../components/Home-Components/NewProducts';
import TopSelling from '../components/Home-Components/TopSelling';
import HotDeals from '../components/Home-Components/HotDeals';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section (Navbar or Banner) */}
      <Navbar />

      {/* Collections */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <Collections />
        </div>
      </section>

      {/* New Products */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">منتجات جديدة</h2>
          <NewProducts />
        </div>
      </section>

      {/* Top Selling Products */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">الأكثر مبيعاً</h2>
          <TopSelling />
        </div>
      </section>

      {/* Hot Deals */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-6 text-red-600">عروض حارة 🔥</h2>
          <HotDeals />
        </div>
      </section>

      {/* General Products Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">كل المنتجات</h2>
          <Products />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
