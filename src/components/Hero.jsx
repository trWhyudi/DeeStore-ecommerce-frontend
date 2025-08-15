import { PiArrowUpRightBold, PiBagBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id='home' className='max-padd-container lg:h-screen md:h-auto sm:h-auto h-[70vh] lg:bg-hero bg-cover bg-center bg-no-repeat max-lg:bg-none sm:pb-40'>
      <div className="relative max-w-[777px] top-40">
        <h2 className='h1 capitalize max-w-[611px] max-md:text-center'>Tingkatkan style anda dengan trend fashion dari <span className='bg-secondary rounded-full px-2 text-white'>DeeStore</span></h2>
        <div className='flex gap-x-10 max-md:flex-col-reverse mt-28 max-md:mt-0 max-md:text-center max-md:items-center max-md:gap-y-4'>
          <Link to = {''} className='bg-tertiary p-2 text-white pl-5 rounded-full flexCenter gap-x-2 inline-flex w-full max-w-60'>
            Produk Terbaru
            <PiBagBold className='bg-white text-tertiary rounded-full text-4xl p-2.5 hover:bg-secondary hover:text-white duration-300'/>
            <PiArrowUpRightBold className='bg-white text-tertiary rounded-full text-4xl p-2.5 hover:bg-secondary hover:text-white duration-300' />
          </Link>
          <p className='my-2'>DeeStore adalah destinasi fashion online yang menghadirkan berbagai pilihan pakaian dan aksesoris bergaya terkini untuk pria dan wanita. Kami menjual produk berkualitas dengan harga dan kualitas terbaik</p>
        </div>
      </div>
    </section>
  )
}

export default Hero