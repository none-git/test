
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-12 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-blue-900">استیت‌ویو</span>
             </div>
             <p className="text-gray-500 leading-relaxed">
               استیت‌ویو پلتفرم جامع شما برای یافتن ملک رویایی، با استفاده از جدیدترین تکنولوژی‌های تور مجازی و مدیریت هوشمند آگهی‌ها.
             </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">شرکت</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">درباره ما</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">فرصت‌های شغلی</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">تماس با ما</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">اخبار و وبلاگ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">پشتیبانی</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">مرکز راهنما</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">سوالات متداول</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">حریم خصوصی</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">شرایط استفاده</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">دنبال کنید</h4>
            <div className="flex gap-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                 </div>
               ))}
            </div>
            <div className="mt-8 bg-blue-50 p-4 rounded-xl border border-blue-100">
               <p className="text-sm font-bold text-blue-800 mb-2">اشتراک در خبرنامه</p>
               <div className="flex">
                  <input type="email" placeholder="ایمیل شما" className="flex-1 bg-white border border-blue-200 rounded-r-lg px-4 py-2 text-sm outline-none" />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-l-lg font-bold text-sm">تایید</button>
               </div>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
           <p>© ۱۴۰۳ تمام حقوق برای استیت‌ویو محفوظ است.</p>
           <div className="flex gap-8">
              <a href="#" className="hover:text-gray-600">قوانین و مقررات</a>
              <a href="#" className="hover:text-gray-600">امنیت</a>
              <a href="#" className="hover:text-gray-600">نقشه سایت</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
