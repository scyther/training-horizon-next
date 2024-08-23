import Image from "next/image";
const categories = [
  { name: "Education", image: "/img/p1.svg" },
  { name: "Sports", image: "/img/p2.svg" },
  { name: "Dance", image: "/img/p3.svg" },
  { name: "Music", image: "/img/p4.svg"},
  { name: "Boxing", image: "/img/p5.svg"},
  { name: "Cycling", image: "/img/p6.svg" },
  { name: "Gymnastics", image: "/img/p7.svg" },
  { name: "Athletics", image: "/img/p8.svg"},
  { name: "Swimming", image: "/img/p9.svg" },
  { name: "Martial Arts", image: "/img/p10.svg" },

  // Add the rest of the categories here...
];

const Categories = () => {
  return (
    <section className="py-2">
      <div className="flex justify-between items-center px-4 pb-8">
      <h2 className="  text-2xl font-bold ">Our Top Categories</h2>
        <button className="text-blue-400 text-xl hover:underline">View all</button>
      </div>
      <div className="px-2 sm:px-20 grid grid-cols-2  md:grid-cols-5 gap-4 0  ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="text-center p-4 border rounded-xl shadow-lg  hover:shadow-2xl"
          >
            <Image
              src={category.image}
              alt={category.name}
              width={28}
              height={36}
              className="w-28 h-36 mx-auto mb-4 "

            />
            <h3 className="font-medium">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
