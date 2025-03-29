'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, FC } from 'react';

type Props = {
  roomTypeFilter: string;
  searchQuery: string;
  setRoomTypeFilter: (value: string) => void;
  setSearchQuery: (value: string) => void;
};

const Search: FC<Props> = ({
  roomTypeFilter,
  searchQuery,
  setRoomTypeFilter,
  setSearchQuery,
}) => {
  const router = useRouter();

  const handleRoomTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRoomTypeFilter(event.target.value);
  };

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = () => {
    router.push(`/rooms?roomType=${roomTypeFilter}&searchQuery=${searchQuery}`);
  };

  return (
    <section className="bg-tertiary-light dark:bg-gray-800 px-6 py-8 rounded-lg shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row gap-6 items-center justify-between">
        <div className="w-full sm:w-1/3">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Room Type
          </label>
          <div className="relative">
            <select
              value={roomTypeFilter}
              onChange={handleRoomTypeChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            >
              <option value="All">All</option>
              <option value="Basic">Basic</option>
              <option value="Luxury">Luxury</option>
              <option value="Suite">Suite</option>
            </select>
          </div>
        </div>

        <div className="w-full sm:w-1/3">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Search
          </label>
          <input
            type="search"
            id="search"
            placeholder="Search..."
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>

        <div className="w-full sm:w-auto">
          <button
            type="button"
            onClick={handleFilterClick}
            className="w-full sm:w-auto bg-primary hover:bg-secondary text-white font-semibold px-6 py-3 rounded-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;
