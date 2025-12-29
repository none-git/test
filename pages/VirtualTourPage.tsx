
import React from 'react';
import { Property } from '../types';

interface VirtualTourPageProps {
  property: Property;
  onBack: () => void;
}

const VirtualTourPage: React.FC<VirtualTourPageProps> = ({ property, onBack }) => {
  return (
    <div className="fixed inset-0 bg-black z-[100] flex flex-col">
      {/* HUD Header */}
      <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-10 bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </button>
          <div>
             <h2 className="text-white font-bold text-xl">{property.title}</h2>
             <p className="text-gray-300 text-sm">{property.price} • {property.beds} خواب • {property.baths} حمام</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
           <div className="bg-white/20 backdrop-blur rounded-xl p-2 flex items-center gap-4">
              <select className="bg-transparent text-white font-bold outline-none cursor-pointer text-sm">
                 <option className="text-black">پذیرایی</option>
                 <option className="text-black">آشپزخانه</option>
                 <option className="text-black">اتاق اصلی</option>
              </select>
              <div className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center text-white">
                 🏠
              </div>
           </div>
           <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-xl hover:bg-blue-700 transition-all">رزرو بازدید</button>
        </div>
      </div>

      {/* Main View Area */}
      <div className="flex-1 relative cursor-move">
         <img src="https://picsum.photos/id/123/1920/1080" className="w-full h-full object-cover opacity-80" alt="360 View" />
         
         {/* Interactivity Markers */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border-2 border-white animate-pulse">
               <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
         </div>

         {/* Navigation Hotspots */}
         <button className="absolute left-[30%] top-[60%] w-12 h-12 bg-white/40 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white transition-all hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
         </button>
         <button className="absolute right-[35%] top-[55%] w-12 h-12 bg-white/40 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white transition-all hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
         </button>

         {/* Floorplan Overlay */}
         <div className="absolute top-24 left-6 w-64 h-64 bg-white/90 backdrop-blur rounded-2xl shadow-2xl overflow-hidden border border-white/40 p-1 flex flex-col">
            <div className="flex-1 bg-gray-100 rounded-xl relative p-4">
               <div className="w-full h-full border-2 border-gray-300 border-dashed rounded-lg flex items-center justify-center opacity-40">
                  <div className="w-4/5 h-4/5 border-2 border-gray-400 rounded"></div>
               </div>
               <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg animate-ping"></div>
               <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-blue-600/40 opacity-50"></div>
            </div>
            <div className="p-3 text-center text-xs font-bold text-gray-500 flex justify-between">
               <span>طبقه اول</span>
               <button className="text-blue-600">بزرگنمایی</button>
            </div>
         </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6">
         <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-2xl hover:scale-105 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
            شروع حالت واقعیت مجازی
         </button>
         
         <div className="bg-white/20 backdrop-blur rounded-2xl p-2 flex items-center gap-2 border border-white/20 shadow-2xl">
            <button className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/20 rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg></button>
            <button className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/20 rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg></button>
            <div className="w-px h-6 bg-white/20 mx-2"></div>
            <button className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/20 rounded-xl text-2xl">+</button>
            <button className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/20 rounded-xl text-2xl">−</button>
         </div>
      </div>
    </div>
  );
};

export default VirtualTourPage;
