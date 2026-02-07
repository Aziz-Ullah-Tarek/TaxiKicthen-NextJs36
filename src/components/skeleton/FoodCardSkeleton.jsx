import React from 'react';

const FoodCardSkeleton = () => {
  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-50 flex flex-col h-full animate-pulse">
      
      {/* Image Placeholder */}
      <div className="p-4">
        <div className="relative h-64 w-full bg-slate-200 rounded-[1.5rem]">
            {/* Badge Placeholder */}
            <div className="absolute top-4 left-4 w-16 h-6 bg-slate-300 rounded-full"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-8 pb-8 pt-2 flex flex-col flex-grow">
        {/* Title Placeholder */}
        <div className="h-7 bg-slate-200 rounded-md w-3/4 mb-4"></div>

        {/* Price Placeholder */}
        <div className="flex items-center gap-2 mb-8">
          <div className="h-8 bg-slate-300 rounded-md w-20"></div>
          <div className="h-4 bg-slate-200 rounded-md w-12"></div>
        </div>

        {/* Buttons Placeholders */}
        <div className="flex flex-col gap-3 mt-auto">
          {/* Add to Cart Button */}
          <div className="w-full h-[56px] bg-slate-200 rounded-2xl"></div>
          
          {/* View Details Button */}
          <div className="w-full h-[56px] bg-slate-100 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;