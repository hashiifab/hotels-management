import Image from 'next/image';

const Gallery = () => {
  return (
    <div className="container mx-auto py-14">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <Image
            src="/images/hero-1.jpeg"
            alt="Gallery Image 1"
            width={600}
            height={600}
            className="object-cover w-full h-48"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <Image
            src="/images/hero-2.jpeg"
            alt="Gallery Image 2"
            width={600}
            height={600}
            className="object-cover w-full h-48"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <Image
            src="/images/hero-3.jpeg"
            alt="Gallery Image 3"
            width={600}
            height={600}
            className="object-cover w-full h-48"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <Image
            src="/images/hero-1.jpeg"
            alt="Gallery Image 4"
            width={600}
            height={600}
            className="object-cover w-full h-48"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <Image
            src="/images/hero-2.jpeg"
            alt="Gallery Image 5"
            width={600}
            height={600}
            className="object-cover w-full h-48"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <Image
            src="/images/hero-3.jpeg"
            alt="Gallery Image 6"
            width={600}
            height={600}
            className="object-cover w-full h-48"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <Image
            src="/images/hero-2.jpeg"
            alt="Gallery Image 5"
            width={600}
            height={600}
            className="object-cover w-full h-48"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <Image
            src="/images/hero-3.jpeg"
            alt="Gallery Image 6"
            width={600}
            height={600}
            className="object-cover w-full h-48"
          />
        </div>
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default Gallery;
