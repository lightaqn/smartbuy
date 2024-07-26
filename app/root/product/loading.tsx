function Loading() {
  return (
    <div className="p-6 lg:p-10 flex flex-col">
      <div className="h-[50vh] grid lg:grid-cols-2">
        <div className="lg:col-span-1 grid lg:grid-cols-5 lg:grid-rows-5  h-full w-full">
          <div className="hidden lg:block lg:col-span-1 lg:row-span-full space-y-2">
            {Array.fill(5).map((_, i) => (
              <div
                key={i}
                className="w-full h-¼ rounded-2xl
    
    animate-pulse bg-gray-300/30 backdrop-blur-lg shadow-md"
              />
            ))}
          </div>

          <div className="lg:col-span-4 lg:row-span-4 overflow-hidden object-contain">
            <div className="w-full h-full animate-pulse bg-gray-300/30 backdrop-blur-lg shadow-md" />
          </div>

          <div className="hidden lg:block lg:col-span-4 lg:grid-cols-6 lg:row-span-1 space-x-2">
            <div className="lg:col-span-5  gap-x-2 overflow-x-auto flex flex-wrap ">
              {Array.fill(5).map((_, i) => (
                <div
                  key={i}
                  className="h-full w-¼ rounded-2xl
    
    animate-pulse bg-gray-300/30 backdrop-blur-lg shadow-md"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 w-full space-y-5">
          <div
            className="h-8 w-full animate-pulse bg-gray-300/30 backdrop-blur-lg shadow-md
    
    "
          />

          <div className="space-x-4 flex flex-wrap overflow-hidden">
            {Array.fill(4).map((_, i) => (
              <div
                key={i}
                className="w-12 h-6 rounded-full ring-4 ring-gray-500  shadow-md bg-gray-300/30 animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 mx-6">
        <div className="w-full h-[100px] animate-pulse shadow-lg rounded-2xl" />

        <div className="h-6 w-12 animate-pulse bg-gray-100" />

        <div className="h-12 w-16 animate-pulse bg-gray-100" />

        <div className="h-12 w-22 animate-pulse bg-gray-100" />

        <hr className="w-full mx-6 bg-gray-200" />

        <div className="h-12 w-22 animate-pulse bg-gray-100" />
      </div>
    </div>
  );
}

export default Loading;
