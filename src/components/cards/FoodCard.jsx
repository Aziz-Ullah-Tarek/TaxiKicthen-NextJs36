import React from 'react';

const FoodCard = ({ food }) => {
  const { title, foodImg, price, category } = food;

  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border border-slate-50 flex flex-col h-full">
      
      {/* Image & Badge Container */}
      <div className="relative h-64 w-full overflow-hidden p-4">
        <div className="absolute top-8 left-8 z-10">
          <span className="bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-sm">
            {category}
          </span>
        </div>
        <img
          src={foodImg}
          alt={title}
          className="w-full h-full object-cover rounded-[1.5rem] group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
      </div>

      {/* Content Section */}
      <div className="px-8 pb-8 pt-2 flex flex-col flex-grow">
        <div className="flex justify-between items-baseline mb-4">
          <h3 className="text-2xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors line-clamp-1">
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-2 mb-8">
          <span className="text-3xl font-black text-slate-900">${price}</span>
          <span className="text-slate-400 text-sm">/ order</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mt-auto">
          <button className="w-full bg-slate-900 hover:bg-amber-500 text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-slate-200 hover:shadow-amber-200 active:scale-95 flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            Add to Cart
          </button>
          
          <button className="w-full bg-white border-2 border-slate-100 hover:border-slate-900 text-slate-600 hover:text-slate-900 font-bold py-4 rounded-2xl transition-all duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;