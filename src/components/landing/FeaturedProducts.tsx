import ProductCard from "../Card/ProductCard";

const products = [
  { 
    id: 1, 
    name: "Sakarias Armchair", 
    price: 1740000, 
    category: "Chair", 
    image: "/chair1.png" 
  },
  { 
    id: 2,
    name: "Sakarias Armchair", 
    price: 1740000, 
    category: "Chair", 
    image: "/chair1.png" 
  },
  { 
    id: 3, 
    name: "Sakarias Armchair", 
    price: 1740000, 
    category: "Chair", 
    image: "/chair1.png" 
  },
  { 
    id: 4, 
    name: "Sakarias Armchair", 
    price: 1740000, 
    category: "Chair", 
    image: "/chair1.png" 
  },
];

export default function FeaturedProducts() {
  return (
    <section className="w-full mx-auto px-4 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center w-full mb-12">
          <h2 className="text-2xl font-bold text-zinc-900 tracking-[0.1em] uppercase">
            ОНЦЛОХ БҮТЭЭГДЭХҮҮН
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}