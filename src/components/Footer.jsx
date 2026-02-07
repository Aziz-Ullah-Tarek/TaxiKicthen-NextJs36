import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-black text-slate-900 tracking-tighter mb-4">
              TAXI<span className="text-amber-500">KITCHEN</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Bringing gourmet flavors straight to your doorstep with speed and elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-widest">Menu</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Breakfast</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Main Course</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Desserts</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Beverages</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-widest">Join the Club</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-amber-500 transition-all"
              />
              <button className="mt-3 w-full bg-slate-900 text-white text-xs font-bold py-3 rounded-xl hover:bg-amber-500 transition-all">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-50 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">
            © {currentYear} Taxi Kitchen. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors uppercase text-[10px] font-bold tracking-widest">Instagram</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors uppercase text-[10px] font-bold tracking-widest">Twitter</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors uppercase text-[10px] font-bold tracking-widest">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;