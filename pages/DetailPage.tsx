
import React from 'react';
import { Property } from '../types';
import { MOCK_PROPERTIES } from '../constants';
import PropertyCard from '../components/PropertyCard';

interface DetailPageProps {
  property: Property;
  onGoToTour: () => void;
}

const DetailPage: React.FC<DetailPageProps> = ({ property, onGoToTour }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <span>خانه</span>
        <span>/</span>
        <span>کالیفرنیا</span>
        <span>/</span>
        <span>سان‌فرانسیسکو</span>
        <span>/</span>
        <span className="text-gray-900 font-medium">{property.title}</span>
      </nav>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[500px] mb-8">
        <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl">
          <img src={property.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Main" />
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">تایید شده</div>
          <button 
            onClick={onGoToTour}
            className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-6 py-2 rounded-full font-bold shadow-lg hover:bg-white transition-all flex items-center gap-2"
          >
             تور مجازی سه‌بعدی
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>
        <div className="rounded-2xl overflow-hidden"><img src="https://picsum.photos/id/11/400/300" className="w-full h-full object-cover" alt="Interior 1" /></div>
        <div className="rounded-2xl overflow-hidden"><img src="https://picsum.photos/id/12/400/300" className="w-full h-full object-cover" alt="Interior 2" /></div>
        <div className="rounded-2xl overflow-hidden relative">
          <img src="https://picsum.photos/id/13/400/300" className="w-full h-full object-cover" alt="Interior 3" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/60 transition-all">
            <span className="text-white font-bold">مشاهده همه عکس‌ها</span>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden"><img src="https://picsum.photos/id/14/400/300" className="w-full h-full object-cover" alt="Interior 4" /></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">برای فروش</span>
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">بازدید عمومی: شنبه، ۴-۱ عصر</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{property.title}</h1>
          <p className="text-gray-500 text-lg mb-8">{property.location}</p>

          <div className="flex flex-wrap items-center gap-12 py-6 border-y mb-8">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{property.beds}</span>
              <span className="text-gray-500 text-sm">خواب</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{property.baths}</span>
              <span className="text-gray-500 text-sm">حمام</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{property.area.toLocaleString()}</span>
              <span className="text-gray-500 text-sm">فوت مربع</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">۲۰۱۸</span>
              <span className="text-gray-500 text-sm">ساخت</span>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">درباره این خانه</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {property.description || 'شاهکاری مدرن و خیره‌کننده در قلب منطقه میشن. این جواهر معماری دارای اتاق نشیمن با مفهوم باز و پنجره‌های کف تا سقف است که فضا را غرق در نور طبیعی می‌کند. آشپزخانه مجهز با برندهای لوکس و جزیره مرمری بزرگ است که برای پذیرایی عالی است.'}
            </p>
            <button className="text-blue-600 font-bold hover:underline">بیشتر بخوانید</button>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">امکانات و ویژگی‌ها</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: 'کولر گازی مرکزی', icon: '❄️' },
                { label: 'پارکینگ ۲ خودرو', icon: '🚗' },
                { label: 'استخر شنا', icon: '🏊' },
                { label: 'خشک‌شویی داخل واحد', icon: '🧺' },
                { label: 'شومینه', icon: '🔥' },
                { label: 'ماشین ظرفشویی', icon: '🍽️' },
              ].map(amenity => (
                <div key={amenity.label} className="bg-white p-4 rounded-xl border flex items-center gap-3">
                  <span className="text-2xl">{amenity.icon}</span>
                  <span className="font-medium text-gray-700">{amenity.label}</span>
                </div>
              ))}
            </div>
            <button className="mt-8 border border-gray-300 px-8 py-3 rounded-xl font-bold hover:bg-gray-50">مشاهده همه ویژگی‌ها</button>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">موقعیت مکانی</h2>
            <div className="w-full h-80 bg-gray-200 rounded-2xl relative overflow-hidden">
               <img src="https://picsum.photos/id/100/1200/400" className="w-full h-full object-cover" alt="Map Placeholder" />
               <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                 <div className="bg-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-ping"></div>
                    <span className="font-bold">San Francisco</span>
                 </div>
               </div>
               <button className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg font-bold shadow-md flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  کاوش منطقه
               </button>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-gray-600"><span className="text-blue-600">🎓</span> دبستان جفرسون (۰.۳ مایل)</div>
              <div className="flex items-center gap-2 text-gray-600"><span className="text-blue-600">🚌</span> ایستگاه اتوبوس ۲۴ (۰.۱ مایل)</div>
            </div>
          </section>
        </div>

        {/* Sidebar Sticky Card */}
        <aside className="w-full lg:w-96">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 sticky top-28">
            <div className="mb-8">
              <p className="text-gray-500 font-medium">قیمت لیست</p>
              <h3 className="text-4xl font-bold text-gray-900">{property.price}</h3>
              <p className="text-green-600 text-sm font-bold mt-1">قسط تخمینی: ۶,۴۵۰ دلار/ماه</p>
            </div>

            <div className="flex flex-col gap-3 mb-8">
              <button className="bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                هماهنگی بازدید
              </button>
              <button className="border-2 border-blue-100 text-blue-600 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                تماس با مشاور
              </button>
            </div>

            <div className="flex items-center gap-4 mb-8">
               <img src="https://picsum.photos/id/64/100/100" className="w-16 h-16 rounded-full object-cover" alt="Agent" />
               <div>
                  <h4 className="font-bold text-lg">سارا جنکینز</h4>
                  <p className="text-gray-500 text-sm">مشاور ملک - استیت‌ویو برتر</p>
               </div>
            </div>

            <form className="space-y-4">
               <input type="text" placeholder="نام" className="w-full bg-gray-50 border rounded-xl py-3 px-4 outline-none focus:border-blue-500" />
               <input type="tel" placeholder="تلفن" className="w-full bg-gray-50 border rounded-xl py-3 px-4 outline-none focus:border-blue-500" />
               <input type="email" placeholder="ایمیل" className="w-full bg-gray-50 border rounded-xl py-3 px-4 outline-none focus:border-blue-500" />
               <textarea placeholder="من به ملک ۱۲۳۴ خیابان بلورد علاقه‌مندم..." className="w-full bg-gray-50 border rounded-xl py-3 px-4 h-32 outline-none focus:border-blue-500"></textarea>
               <button className="text-gray-500 text-xs text-center w-full">با ارسال پیام، با شرایط ما موافقت می‌کنید.</button>
            </form>

            <div className="mt-8 p-4 bg-blue-50 rounded-xl flex items-center gap-4">
              <div className="text-3xl">🏦</div>
              <div>
                <p className="font-bold text-sm">دریافت پیش‌تأییدیه وام</p>
                <p className="text-gray-500 text-xs">ببینید توان خرید چه خانه‌ای را دارید.</p>
                <button className="text-blue-600 text-xs font-bold hover:underline mt-1">شروع محاسبه ←</button>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Recommended Section */}
      <section className="mt-24 border-t pt-12">
        <div className="flex items-center justify-between mb-8">
           <h2 className="text-3xl font-bold">خانه‌های مشابه که شاید بپسندید</h2>
           <button className="text-blue-600 font-bold hover:underline">مشاهده همه موارد مشابه</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PROPERTIES.slice(1, 4).map(p => (
            <PropertyCard key={p.id} property={p} onClick={() => {}} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
