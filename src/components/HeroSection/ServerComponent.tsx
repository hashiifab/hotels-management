import Image from 'next/image';

export const heading1 = (
  <div className='relative z-10'>
    <h1 className='font-heading mb-8 text-5xl md:text-6xl lg:text-7xl font-bold text-primary dark:text-secondary leading-tight'>
      Explore Our <span className='text-secondary dark:text-primary'>Exquisite</span> Hotel
    </h1>
    <p className='text-lg md:text-xl text-text-default dark:text-text-dark mb-12 max-w-2xl leading-relaxed'>
      Experience an Exquisite Hotel Immersed in Rich History and Timeless
      Elegance. Where luxury meets comfort in perfect harmony.
    </p>
    <button className='bg-primary hover:bg-secondary text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium text-lg'>
      Get Started
    </button>
  </div>
);

export const section2 = (
  <div className='md:grid hidden gap-8 grid-cols-1 relative'>
    <div className='rounded-2xl overflow-hidden h-64 shadow-xl transform hover:scale-105 transition-transform duration-300'>
      <Image
        src='/images/hero-1.jpeg'
        alt='Luxurious hotel lobby'
        width={600}
        height={400}
        className='img scale-animation object-cover w-full h-full'
      />
    </div>

    <div className='grid grid-cols-2 gap-8 h-64'>
      <div className='rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300'>
        <Image
          src='/images/hero-2.jpeg'
          alt='Elegant hotel room'
          width={400}
          height={400}
          className='img scale-animation object-cover w-full h-full'
        />
      </div>
      <div className='rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300'>
        <Image
          src='/images/hero-3.jpeg'
          alt='Stunning hotel view'
          width={400}
          height={400}
          className='img scale-animation object-cover w-full h-full'
        />
      </div>
    </div>
  </div>
);
