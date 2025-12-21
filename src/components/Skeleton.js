import React from "react";

const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
);

export const SectionSkeleton = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
    <Skeleton className="h-12 w-3/4 max-w-md mx-auto" />
    <div className="space-y-4">
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-6 w-11/12" />
      <Skeleton className="h-6 w-10/12" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Skeleton className="h-[300px] w-full rounded-2xl" />
      <Skeleton className="h-[300px] w-full rounded-2xl" />
    </div>
  </div>
);

export const HeroSkeleton = () => (
  <div className="relative w-full h-[60vh] md:h-[80vh] bg-gray-300 animate-pulse overflow-hidden rounded-xl mb-12 flex items-center justify-center">
    <div className="space-y-6 w-full max-w-4xl px-6 text-center">
      <Skeleton className="h-16 w-3/4 mx-auto bg-gray-400/30" />
      <Skeleton className="h-8 w-1/2 mx-auto bg-gray-400/30" />
    </div>
  </div>
);

export default Skeleton;
