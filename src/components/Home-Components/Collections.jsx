import React from "react";
import { Link } from "react-router-dom";
import mobilePic from "../../assets/img/shop01.png";
import watchPic from "../../assets/img/shop02.png";
import headphonesPic from "../../assets/img/shop03.png";
import accessoriesPic from "../../assets/img/shop05.png";
const collectionData = [
  {
    title: "Mobile Phones",
    subtitle: "Collection",
    image: mobilePic,
  },
  {
    title: "Smart Watches",
    subtitle: "Collection",
    image: watchPic,
  },
  {
    title: "Headphones & AirPods",
    subtitle: "Collection",
    image: headphonesPic,
  },
  {
    title: "Accessories & Chargers",
    subtitle: "Collection",
    image: accessoriesPic,
  },
];

function Collections() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collectionData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="h-48 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                  <br />
                  <span className="text-sm font-normal text-gray-600">
                    {item.subtitle}
                  </span>
                </h3>
                <Link
                  to="#"
                  className="inline-flex items-center mt-4 text-[var(--main-color)] hover:underline font-medium"
                >
                  Shop now <i className="fa fa-arrow-circle-right ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collections;
