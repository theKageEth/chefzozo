"use client";
import useStore from "@/utils/store";

import DessertCard from "@/components/DessertCard";

const menuItems = [
  {
    title: "Hala Kashkash",
    description: "A delicious dessert with layers of cream and crunch.",
    imageUrl: "/food/kash.jpg",
    price: "£25",
  },
  {
    title: "Cinnamon Balls",
    description:
      "Freshly baked cinnamon, coated with a special sweet sauce and Nutella chocolate.",
    imageUrl: "/food/cina.jpg",
    price: "£25",
  },
  {
    title: "Kunafa",
    description:
      "Crunchy, buttery dessert made with shredded pastry layers enclosing a creamy soft milk pudding.",
    imageUrl: "/food/kun.jpg",
    price: "£20",
  },
];

const DessertPage = () => {
  const { isChecked } = useStore();
  const theme = isChecked ? "dark" : "light";
  return (
    <div
      data-theme={theme}
      className="flex flex-col min-h-screen w-screen mt-16 pt-10"
    >
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="flex flex-wrap justify-center gap-6">
          {menuItems.map((item, index) => (
            <DessertCard
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              price={item.price}
            />
          ))}
        </div>
      </main>
      <div className="bg-green-700 text-white text-xl font-semibold text-center p-4">
        Contact me on Instagram for orders
      </div>
    </div>
  );
};

export default DessertPage;
