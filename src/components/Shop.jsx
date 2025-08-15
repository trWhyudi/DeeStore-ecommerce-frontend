import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import Product from './Product';

const Shop = () => {
  const { products } = useContext(ProductContext);

  const filterProducts = products.filter((item) =>
    item.category === "men's clothing" || item.category === "women's clothing"
  );

  return (
    <section id='shop' className='max-padd-container py-16 sm:py-20 bg-white'>
      {/* Title */}
      <div className='text-center mb-12'>
        <h3 className='h3 font-bold'>
          Produk <span className="text-secondary">Kami</span>
        </h3>
        <hr className='h-[2px] mx-auto mt-4 w-3/4 sm:w-1/2 max-w-96 bg-gradient-to-r from-transparent via-black to-transparent border-none rounded' />
      </div>

      {/* Grid Produk */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
        {filterProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
