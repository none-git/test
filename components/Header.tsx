
import React from 'react';
import { Page } from '../types';

interface HeaderProps {
  navigateTo: (page: Page) => void;
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ navigateTo, currentPage }) => {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => navigateTo(Page.LISTING)}
          >
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="text-xl font-bold text-blue-900 hidden md:block">استیت‌ویو</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
            <button onClick={() => navigateTo(Page.LISTING)} className={`hover:text-blue-600 ${currentPage === Page.LISTING ? 'text-blue-600' : ''}`}>خرید</button>
            <button className="hover:text-blue-600">اجاره</button>
            <button className="hover:text-blue-600">فروش</button>
            <button className="hover:text-blue-600">مشاوران</button>
          </nav>
        </div>

        <div className="flex-1 max-w-md mx-8 hidden lg:block">
          <div className="relative">
            <input 
              type="text" 
              placeholder="جستجو بر اساس نام محله، شهر، کد پستی..." 
              className="w-full bg-gray-100 rounded-full py-2 px-10 border border-transparent focus:border-blue-500 focus:bg-white transition-all outline-none text-sm"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 h-5 absolute right-3 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigateTo(Page.AUTH)}
            className="text-gray-600 hover:text-blue-600 font-medium hidden sm:block"
          >
            ورود / ثبت‌نام
          </button>
          <button 
            onClick={() => navigateTo(Page.PROFILE)}
            className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold hover:bg-blue-700 transition-colors text-sm"
          >
            ثبت آگهی
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer md:hidden" onClick={() => navigateTo(Page.PROFILE)}>
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
