"use client";
import useStore from "@/utils/store";
import FoodCard from "@/components/FoodCard";

const menuItems = [
  {
    title: "Dolma",
    description:
      "Delicious homemade Iraqi Dolma with fresh ingredients and a savory filling.",
    imageUrl: "/food/1.jpg",
    price: "£38",
  },
  {
    title: "Chicken Bukhari Rice",
    description: "Flavorful chicken with aromatic spices and tender meat.",
    imageUrl: "/food/2.jpg",
    price: "£25",
  },
  {
    title: "Mutabbaq Fish",
    description:
      "Freshly fried fish over rice with a rich blend of savory spices.",
    imageUrl: "/food/3.jpg",
    price: "£17",
  },
  {
    title: "Mutabbaq Prawns",
    description:
      "Fresh fried prawns over rice with a rich blend of savory spices.",
    imageUrl: "/food/4.jpg",
    price: "£29",
  },
  {
    title: "Chicken Potato Balls",
    description: "Smooth and creamy chicken potato balls, medium size tray.",
    imageUrl: "/food/5.jpg",
    price: "£26",
  },
  {
    title: "Stuffed Grape Leaves",
    description:
      "Tender grape leaves stuffed with rice and minced meat and spices.",
    imageUrl: "/food/8.jpg",
    price: "£25",
  },
  {
    title: "Chicken Rolls",
    description: "Creamy chicken rolls topped with cheese in a tray.",
    imageUrl: "/food/6.jpg",
    price: "£26",
  },
  {
    title: "Musakhan Rolls",
    description:
      "Chicken mixed with caramelized onions, cooked in extra virgin olive oil and sumac spice, then wrapped into rolls.",
    imageUrl: "/food/7.jpg",
    price: "£20",
  },
  {
    title: "Mansaf",
    description:
      "Tender pieces of lamb, fluffy rice, and a tangy-jameed-based yogurt sauce.",
    imageUrl: "/food/9.jpg",
    price: "£35",
  },
  {
    title: "Kabsa Meat",
    description:
      "Tender lamb meat pieces and flavorful Kabsa rice with spices and fresh herbs.",
    imageUrl: "/food/10.jpg",
    price: "£29",
  },
  {
    title: "Kabsa Chicken",
    description:
      "Tender full chicken and flavorful Kabsa rice with spices and fresh herbs.",
    imageUrl: "/food/14.jpg",
    price: "£25",
  },

  {
    title: "Meat Bechamel Pasta Bake",
    description:
      "Creamy, delicious and cheesy pasta baked in bechamel sauce with minced meat topped with cheese.",
    imageUrl: "/food/11.jpg",
    price: "£38",
  },
  {
    title: "Moussaka",
    description:
      "Middle Eastern dish with layers of tomatoes, eggplants, and meat slow cooked with tomato sauce and spices.",
    imageUrl: "/food/12.jpg",
    price: "£29",
  },
  {
    title: "Vegetable Bechamel Pasta Bake",
    description:
      "Creamy, delicious and cheesy pasta baked in bechamel sauce with vegetables topped with cheese.",
    imageUrl: "/food/13.jpg",
    price: "£26",
  },
];

const MenuPage = () => {
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
            <FoodCard
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

export default MenuPage;
