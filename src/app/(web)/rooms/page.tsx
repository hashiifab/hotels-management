'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { getRooms } from '@/libs/apis';
import { Room } from '@/models/room';
import Search from '@/components/Search/Search';
import RoomCard from '@/components/RoomCard/RoomCard';

const Rooms = () => {
  const [roomTypeFilter, setRoomTypeFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('searchQuery');
    const roomType = searchParams.get('roomType');
    if (roomType) setRoomTypeFilter(roomType);
    if (query) setSearchQuery(query);
  }, [searchParams]);

  async function fetchData() {
    return getRooms();
  }

  const { data, error, isLoading } = useSWR('get/hotelRooms', fetchData);

  if (error) throw new Error('Cannot fetch data');
  if (typeof data === 'undefined' && !isLoading)
    throw new Error('Cannot fetch data');

  const filterRooms = (rooms: Room[]) => {
    return rooms.filter(room => {
      if (
        roomTypeFilter &&
        roomTypeFilter.toLowerCase() !== 'all' &&
        room.type.toLowerCase() !== roomTypeFilter.toLowerCase()
      ) {
        return false;
      }
      if (
        searchQuery &&
        !room.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  };

  const filteredRooms = filterRooms(data || []);

  return (
    <div className="container mx-auto pt-10 px-4 overflow-x-hidden">
      <Search
        roomTypeFilter={roomTypeFilter}
        searchQuery={searchQuery}
        setRoomTypeFilter={setRoomTypeFilter}
        setSearchQuery={setSearchQuery}
      />
      <div className="mt-16 p-4 bg-background-light dark:bg-background-dark rounded-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredRooms.map(room => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
