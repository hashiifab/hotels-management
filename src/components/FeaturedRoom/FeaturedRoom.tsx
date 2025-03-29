'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Room } from '@/models/room';

type Props = {
  featuredRoom: Room;
};

const FeaturedRoom: FC<Props> = ({ featuredRoom }) => {
  // We avoid mutating the original array by slicing a copy
  const additionalImages = featuredRoom.images.slice(1, 3);

  return (
    <section className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-12">
      {/* Image Section */}
      <div className="flex flex-col md:grid md:grid-cols-1 gap-6 w-full md:w-1/2">
        <div className="rounded-2xl overflow-hidden h-60 md:h-80 shadow-lg transform transition-transform duration-300 hover:scale-105">
          <Image
            src={featuredRoom.coverImage.url}
            alt={featuredRoom.name}
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {additionalImages.map(image => (
            <div key={image._key} className="rounded-2xl overflow-hidden h-40 shadow-md transform transition-transform duration-300 hover:scale-105">
              <Image
                src={image.url}
                alt={`Image ${image._key}`}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-primary dark:text-secondary">
          Featured Room
        </h3>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-lg leading-relaxed">
          {featuredRoom.description}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex flex-col items-center">
              <p className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-300">
                Start From
              </p>
              <p className="font-bold text-xl md:text-2xl lg:text-3xl text-secondary dark:text-primary">
                $ {featuredRoom.price}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-300">
                Discount
              </p>
              <p className="font-bold text-xl md:text-2xl lg:text-3xl text-secondary dark:text-primary">
                $ {featuredRoom.discount}
              </p>
            </div>
          </div>
          <Link
            href={`/rooms/${featuredRoom.slug.current}`}
            className="border border-secondary px-5 py-3 rounded-2xl font-bold text-base md:text-lg hover:bg-secondary hover:text-white transition-colors duration-300"
          >
            More Details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRoom;
