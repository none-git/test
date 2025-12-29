
import React from 'react';
import { MOCK_PROPERTIES } from '../constants';

const ProfilePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Navigation Sidebar */}
        <aside className="w-full lg:w-72">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
             <div className="p-4 bg-blue-50 flex items-center gap-3 text-blue-600 font-bold border-r-4 border-blue-600">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
               اطلاعات شخصی
             </div>
             <div className="p-4 hover:bg-gray-50 flex items-center gap-3 text-gray-600 font-medium cursor-pointer transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
               املاک ذخیره شده
             </div>
             <div className="p-4 hover:bg-gray-50 flex items-center gap-3 text-gray-600 font-medium cursor-pointer transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               تاریخچه بازدید
             </div>
             <div className="p-4 hover:bg-gray-50 flex items-center gap-3 text-gray-600 font-medium cursor-pointer transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
               تنظیمات
             </div>
             <div className="border-t mt-4 p-4 hover:text-red-600 flex items-center gap-3 text-gray-500 font-medium cursor-pointer transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
               خروج از حساب
             </div>
          </div>
        </aside>

        {/* Profile Content */}
        <div className="flex-1 space-y-8">
          
          {/* Header Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <img src="https://picsum.photos/id/177/200/200" className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover" alt="User" />
              <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full shadow-lg border-2 border-white"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg></button>
            </div>
            <div className="text-center md:text-right flex-1">
              <h1 className="text-3xl font-bold mb-1">علی رضایی</h1>
              <p className="text-gray-500 mb-6">مدیریت اطلاعات شخصی و تنظیمات حساب کاربری.</p>
              
              <div className="max-w-md bg-gray-50 rounded-xl p-4">
                 <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold">تکمیل پروفایل</span>
                    <span className="text-blue-600 text-sm font-bold">۸۵٪</span>
                 </div>
                 <div className="w-full bg-gray-200 rounded-full h-2">
                   <div className="bg-blue-600 h-2 rounded-full w-[85%]"></div>
                 </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Info Form */}
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
               <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold">اطلاعات شخصی</h2>
                  <button className="text-blue-600 font-medium">ویرایش</button>
               </div>
               <form className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-500">نام</label>
                     <input type="text" defaultValue="علی" className="w-full bg-gray-50 border rounded-xl p-3 outline-none focus:border-blue-500" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-500">نام خانوادگی</label>
                     <input type="text" defaultValue="رضایی" className="w-full bg-gray-50 border rounded-xl p-3 outline-none focus:border-blue-500" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-500">شماره همراه</label>
                     <input type="tel" dir="ltr" defaultValue="+۹۸ (۹۱۲) ۱۲۳-۴۵۶۷" className="w-full bg-gray-50 border rounded-xl p-3 outline-none focus:border-blue-500 text-right" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-500">آدرس ایمیل</label>
                     <input type="email" dir="ltr" defaultValue="ali.rezaei@example.com" className="w-full bg-gray-50 border rounded-xl p-3 outline-none focus:border-blue-500 text-right" />
                   </div>
                 </div>
                 <div className="flex items-center gap-4 pt-4 border-t">
                    <button type="button" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">ذخیره تغییرات</button>
                    <button type="button" className="text-gray-500 font-bold hover:text-gray-700">لغو</button>
                 </div>
               </form>
            </div>

            {/* Side Column - Activity & Settings */}
            <div className="space-y-8">
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold mb-6">فعالیت‌های اخیر</h2>
                  <div className="space-y-6 relative before:absolute before:right-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
                    <div className="relative pr-8">
                       <div className="absolute right-0 top-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
                       <p className="text-xs text-gray-400">امروز، ۱۰:۳۰ صبح</p>
                       <p className="text-sm font-bold">بازدید رزرو شده: خیابان کاج ۷۸۹</p>
                       <p className="text-xs text-blue-600">مشاور: سارا اسمیت</p>
                    </div>
                    <div className="relative pr-8">
                       <div className="absolute right-0 top-1 w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>
                       <p className="text-xs text-gray-400">دیروز</p>
                       <p className="text-sm font-bold">ملک ذخیره شده: خیابان افرا ۱۲۳</p>
                    </div>
                  </div>
                  <button className="w-full mt-8 border py-3 rounded-xl text-sm font-bold hover:bg-gray-50">مشاهده تاریخچه کامل</button>
               </div>

               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold mb-6">تنظیمات و ترجیحات</h2>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                       <div>
                         <p className="text-sm font-bold">اعلان‌های ایمیل</p>
                         <p className="text-xs text-gray-500">دریافت آگهی‌های جدید</p>
                       </div>
                       <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer"><div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
                    </div>
                    <div className="flex items-center justify-between">
                       <div>
                         <p className="text-sm font-bold">هشدار پیامکی</p>
                         <p className="text-xs text-gray-500">یادآوری قرارهای ملاقات</p>
                       </div>
                       <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t">
                       <p className="text-sm font-bold">حالت شب</p>
                       <button className="p-2 bg-gray-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg></button>
                    </div>
                  </div>
               </div>
            </div>

          </div>

          {/* Saved Properties */}
          <div className="pt-8 border-t">
             <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">املاک ذخیره شده (۱۲)</h2>
                <button className="text-blue-600 font-bold hover:underline">مشاهده همه</button>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {MOCK_PROPERTIES.slice(0, 3).map(p => (
                 <div key={p.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm relative">
                    <img src={p.image} className="w-full h-48 object-cover" alt={p.title} />
                    <button className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></button>
                    <div className="p-4 text-right">
                       <h3 className="text-lg font-bold text-blue-600">{p.price}</h3>
                       <p className="text-sm font-bold mb-2">{p.title}</p>
                       <div className="flex justify-end gap-3 text-xs text-gray-500">
                          <span>{p.area} متر</span>
                          <span>{p.baths} حمام</span>
                          <span>{p.beds} خواب</span>
                       </div>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
