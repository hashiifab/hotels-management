import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Room } from '@/models/room';

type Props = {
  room: Room;
};

const RoomCard: FC<Props> = ({ room }) => {
  const { coverImage, name, price, type, description, slug, isBooked } = room;

  return (
    <div className="rounded-xl w-full max-w-xs mx-auto overflow-hidden bg-white shadow-lg transition-transform transform hover:scale-105">
      <div className="relative h-60">
        <Image
          src={coverImage.url}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <span className="text-xl font-bold text-primary">${price}</span>
        </div>
        <p className="text-sm text-gray-500 mb-3 capitalize">{type} Room</p>
        <p className="text-gray-700 mb-6">
          {description.length > 100 ? description.slice(0, 100) + '...' : description}
        </p>
        <Link
          href={`/rooms/${slug.current}`}
          className={`block text-center w-full py-3 rounded-lg font-bold transition-colors duration-300 ${
            isBooked ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-secondary'
          } text-white`}
        >
          {isBooked ? 'BOOKED' : 'BOOK NOW'}
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
