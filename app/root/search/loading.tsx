export default function Loading() {
  return (
    <div className="p-15">
      <div className="mb-2 h-12 w-3/4 ">
        <span className="animate-bounce w-12 h-full"></span>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mx-auto">
          {/* {Array.fill(8).map((i, _) => 
    
    ( */}
          <div
            // key={i}
            className="w-[300px] h-[400px] animate-pulse bg-gray-300/30 backdrop-blur-lg shadow-md"
          />
          ){/* )} */}
        </div>
      </div>
    </div>
  );
}
