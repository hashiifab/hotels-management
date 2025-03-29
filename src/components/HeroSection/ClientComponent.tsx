"use client";

import { FC } from "react";

import CountUpNumber from "../CountUpNumber/CountUpNumber";

type Props = {
  heading1: React.ReactNode;
  section2: React.ReactNode;
};

const ClientComponent: FC<Props> = (props) => {
  const { heading1, section2 } = props;

  return (
    <section className="flex flex-col md:flex-row px-4 items-center gap-12 container mx-auto py-10 md:py-20">
      <div className="flex-1 max-w-2xl">
        {heading1}

        <div className="grid grid-cols-3 gap-8 mt-16 bg-background-light dark:bg-background-dark p-8 rounded-2xl shadow-lg">
          <div className="flex gap-4 flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
            <p className="text-sm md:text-lg lg:text-xl text-center font-medium text-primary dark:text-secondary">
              Basic Room
            </p>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary dark:text-primary">
              <CountUpNumber duration={5000} endValue={50} />
            </div>
          </div>
          <div className="flex gap-4 flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
            <p className="text-sm md:text-lg lg:text-xl text-center font-medium text-primary dark:text-secondary">
              Luxury Room
            </p>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary dark:text-primary">
              <CountUpNumber duration={5000} endValue={120} />
            </div>
          </div>
          <div className="flex gap-4 flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
            <p className="text-sm md:text-lg lg:text-xl text-center font-medium text-primary dark:text-secondary">
              Suite
            </p>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary dark:text-primary">
              <CountUpNumber duration={5000} endValue={60} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">{section2}</div>
    </section>
  );
};

export default ClientComponent;
