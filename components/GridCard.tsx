import { FC, useState } from "react";

import Image from "next/image";

import Link from "next/link";

type GridProps = {
  img?: string;

  className?: string;

  caption?: string;
};

const GridCard: FC<GridProps> = ({ img, className, caption }: GridProps) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      //   href={ pathname: "/search", query: {q: caption} }
      className={`relative transition-opacity ${className} ${
        hover ? "opacity-30" : "opacity-70"
      } `}
    >
      <Image src={img} className="absolute" layout="fill" objectFit="cover" />

      <div className="absolute z-10 top-0 bottom-0 h-full w-full left-0 right-0 backdrop-blur-md bg-gray-300/30">
        <h1 className="mt-6 ml-6 text-red-500 text-3xl leading-6 tracking-tight font-bold whitespace-nowrap">
          {caption}{" "}
        </h1>
      </div>
    </Link>
  );
};

export default GridCard;
