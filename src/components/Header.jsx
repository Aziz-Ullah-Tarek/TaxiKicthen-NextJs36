import React from 'react';

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4  bg-red-700">
       <h2 className="text-2xl font-black text-slate-900 tracking-tighter mb-4">
              TAXI<span className="text-amber-500">KITCHEN</span>
            </h2>
        <div className="flex gap-4">
          <a href="/">Home</a>
          <a href="/food">Foods</a>
          <a href="/review">Reviews</a>
          <a href="/about">About</a>
        </div>
      </header>
    );
};

export default Header;