import Image from "next/image";
import { ArrowBack, ArrowForward } from "@/";
import { FC, useState, useEffect } from "react";

type CarouselProps = {
  images: string[];
  title: string;
};

const Carousel: FC<CarouselProps> = ({ images, title }: CarouselProps) => {
  const [imgIndex, setImgIndex] = useState(0);

  const [batch, setBatch] = useState(2);

  const [magnify, setMagnify] = useState(false);

  const batchSize = 5;

  const startIndex = (batch - 1) * batchSize;

  const endIndex = (startIndex + batchSize) % images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (imgIndex + 1) % images.length;

      setImgIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [imgIndex]);

  return (
    <div className="grid lg:grid-cols-5 lg:grid-rows-5 relative h-full w-full">
      <div className="hidden lg:block lg:col-span-1 lg:row-span-full space-y-2">
        {images.length > 5 &&
          images
            .slice(0, 5)
            .map((img, index) => (
              <Image
                key={index}
                src={img}
                onClick={() => setImgIndex(index)}
                onMouseEnter={() => setMagnify(true)}
                onMouseLeave={() => setMagnify(false)}
                className={`w-full h-⅕ rounded-2xl ${
                  magnify &&
                  "hover:absolute hover:scale-150 hover:duration-250 hover:translate hover:transform hover:ease-out left-0"
                } ${index === imgIndex && "border border-red-500"} `}
                width={40}
                height={40}
                alt={`${title}+ " " + ${index}`}
                layout="responsive"
                objectFit="contain"
              />
            ))}
      </div>

      <div className="lg:col-span-4 lg:row-span-4 overflow-hidden object-contain relative">
        <Image
          src={images[imgIndex]}
          className="w-full h-full"
          alt={`${title}+ " " + "currentImage"`}
          layout="fill"
          objectFit="cover"
        />

        <div className="hidden hover:absolute h-full w-full top-0 bottom-0 bg-transparent items-center justify-between px-4">
          {imgIndex > 0 && (
            <button
              type="submit"
              onClick={() => setImgIndex(imgIndex - 1)}
              className="flex rounded-full text-center items-center justify-center shadow-lg h-6 w-6 hover:bg-red-500"
            >
              <ArrowBack className="text-gray-500 font-semibold text-lg" />
            </button>
          )}

          {imgIndex < images.length && (
            <button
              type="submit"
              onClick={() => setImgIndex((imgIndex + 1) % images.length)}
              className="flex rounded-full text-center items-center justify-center shadow-lg h-6 w-6 hover:bg-red-500"
            >
              <ArrowForward className="text-gray-500 font-semibold text-lg" />
            </button>
          )}
        </div>
      </div>

      <div className="hidden lg:block lg:col-span-4 lg:grid-cols-6 lg:row-span-1 space-x-2">
        <div
          className={`lg:col-span-5  gap-x-2 overflow-x-auto flex ${
            images.length - endIndex < batchSize && "lg:col-span-full"
          } `}
        >
          {images.length > 5 &&
            images
              .slice(startIndex, endIndex)
              .map((img, index) => (
                <Image
                  key={index}
                  onClick={() => setImgIndex(index)}
                  onMouseEnter={() => setMagnify(true)}
                  onMouseLeave={() => setMagnify(false)}
                  src={img}
                  className={`w-full rounded-2xl h-⅕ ${
                    magnify &&
                    "hover:absolute hover:scale-150 hover:duration-250 hover:translate hover:transform hover:ease-out bottom-0"
                  } ${index === imgIndex && "border border-red-500"} `}
                  width={40}
                  height={40}
                  alt={`${title}+ " " + ${index}`}
                  layout="responsive"
                  objectFit="contain"
                />
              ))}
        </div>

        {images.length - endIndex > batchSize && (
          <div
            onClick={() => setBatch(batch + 1)}
            className="lg:col-span-1 rounded-2xl bg-white text-center items-center justify-center font-semibold text-gray-500 w-16 h-16"
          >
            +{images.length - endIndex} more
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
