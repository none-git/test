
import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { MOCK_PROPERTIES } from '../constants';
import { Property } from '../types';

interface ListingPageProps {
  onSelectProperty: (property: Property) => void;
}

const ListingPage: React.FC<ListingPageProps> = ({ onSelectProperty }) => {
  const [priceRange, setPriceRange] = useState(50);
  const [activeBedrooms, setActiveBedrooms] = useState<string>('all');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-80 space-y-8 order-2 md:order-1">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-6 flex items-center justify-between">
              فیلترها
              <button className="text-blue-600 text-sm font-normal">پاک کردن</button>
            </h2>

            <div className="mb-8">
              <label className="block font-bold mb-4">محدوده قیمت</label>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>۸ م +</span>
                <span>۲ م</span>
              </div>
            </div>

            <div className="mb-8">
              <label className="block font-bold mb-4">تعداد اتاق خواب</label>
              <div className="grid grid-cols-4 gap-2">
                {['همه', '+۱', '+۲', '+۳'].map((opt) => (
                  <button 
                    key={opt}
                    onClick={() => setActiveBedrooms(opt)}
                    className={`py-2 text-sm rounded-lg border transition-all ${
                      activeBedrooms === opt ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-50 text-gray-600 border-gray-200'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block font-bold mb-4">نوع ملک</label>
              <div className="space-y-3">
                {['خانه ویلایی', 'آپارتمان', 'مجتمع مسکونی', 'خانه شهری'].map((type) => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block font-bold mb-4">امکانات رفاهی</label>
              <div className="space-y-3">
                {['استخر', 'پارکینگ', 'نمای دریا'].map((feat) => (
                  <label key={feat} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-blue-600" />
                    <span className="text-gray-700">{feat}</span>
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-black transition-colors">
              اعمال فیلترها
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 order-1 md:order-2">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">خانه رویایی خود را در تهران پیدا کنید</h1>
              <p className="text-gray-500 mt-1">مشاهده ۱۲۴ آگهی شامل آپارتمان، ویلا و خانه‌های مسکونی.</p>
            </div>
            
            <div className="flex items-center gap-4 bg-white p-2 rounded-xl shadow-sm border border-gray-100">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button className="p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg></button>
                <button className="bg-white shadow-sm p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg></button>
              </div>
              <select className="bg-transparent font-medium outline-none cursor-pointer">
                <option>جدیدترین آگهی‌ها</option>
                <option>ارزان‌ترین</option>
                <option>گران‌ترین</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_PROPERTIES.map(p => (
              <PropertyCard key={p.id} property={p} onClick={() => onSelectProperty(p)} />
            ))}
            {/* Adding more mock items for grid feel */}
            {MOCK_PROPERTIES.map(p => (
              <PropertyCard key={p.id + 'copy'} property={p} onClick={() => onSelectProperty(p)} />
            ))}
          </div>

          <div className="flex items-center justify-center mt-12 gap-2">
             <button className="w-10 h-10 flex items-center justify-center rounded-lg border hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
             <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold">۱</button>
             <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 border">۲</button>
             <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 border">۳</button>
             <span className="px-2">...</span>
             <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 border">۱۲</button>
             <button className="w-10 h-10 flex items-center justify-center rounded-lg border hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
