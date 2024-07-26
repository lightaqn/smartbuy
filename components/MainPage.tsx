import { FC } from "react";

import Link from "next/link";
import { GridCard } from "@/components";

type Props = {};

const MainPage = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-4 grid-rows-3 grid-flow-row-dense gap-4 h-[50vh]">
        <GridCard caption="" img="" className="row-span-full col-span-1" />

        <GridCard caption="" img="" className="row-span-full col-span-2" />

        <GridCard caption="" img="" className="row-span-1" />

        <GridCard caption="" img="" className="row-span-2" />
      </div>
      //carousel
      <div className="flex h-[50vh] overflow-x-scroll">
        {/* <Image className="h-full" alt="" height={} width={} /> */}
      </div>
      <div className="grid grid-cols-4 grid-flow-row-dense grid-rows-4 h-[50vh]">
        <GridCard caption="" img="" className="row-span-full col-span-2" />

        <GridCard caption="" img="" className="row-span-2 col-span-2" />

        <GridCard caption="" img="" className="row-span-2 col-span-1" />

        <GridCard caption="" img="" className="row-span-2 col-span-1" />
      </div>
    </div>
  );
};

export default MainPage;
