
import React, { useState } from 'react';

interface AuthPageProps {
  onLogin: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin }) => {
  const [tab, setTab] = useState<'login' | 'register'>('login');

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Form Side */}
        <div className="flex-1 p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">خوش آمدید</h1>
            <p className="text-gray-500">دسترسی به آگهی‌های اختصاصی و تورهای مجازی.</p>
          </div>

          <div className="flex border-b mb-8">
            <button 
              onClick={() => setTab('login')}
              className={`flex-1 py-4 font-bold text-lg transition-all border-b-2 ${tab === 'login' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400'}`}
            >
              ورود
            </button>
            <button 
              onClick={() => setTab('register')}
              className={`flex-1 py-4 font-bold text-lg transition-all border-b-2 ${tab === 'register' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400'}`}
            >
              ثبت نام
            </button>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">ایمیل یا نام کاربری</label>
              <input 
                type="text" 
                placeholder="name@example.com" 
                className="w-full bg-gray-50 border rounded-2xl py-4 px-6 outline-none focus:border-blue-500 text-left" 
                dir="ltr"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-gray-700">رمز عبور</label>
                <button type="button" className="text-blue-600 text-xs font-bold">رمز عبور را فراموش کرده‌اید؟</button>
              </div>
              <div className="relative">
                <input 
                  type="password" 
                  placeholder="رمز عبور خود را وارد کنید" 
                  className="w-full bg-gray-50 border rounded-2xl py-4 px-6 outline-none focus:border-blue-500" 
                />
                <button type="button" className="absolute left-6 top-4.5 text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg></button>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all"
            >
              ورود به حساب
            </button>

            <div className="relative flex items-center justify-center py-4">
               <div className="flex-grow border-t border-gray-100"></div>
               <span className="flex-shrink mx-4 text-gray-400 text-sm">یا ورود با</span>
               <div className="flex-grow border-t border-gray-100"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <button type="button" className="flex items-center justify-center gap-3 border py-3 rounded-2xl hover:bg-gray-50 font-medium">
                  <span className="text-red-500 font-bold">G</span> Google
               </button>
               <button type="button" className="flex items-center justify-center gap-3 border py-3 rounded-2xl hover:bg-gray-50 font-medium">
                  <span className="text-blue-600 font-bold">f</span> Facebook
               </button>
            </div>

            <p className="text-center text-gray-500 text-sm">
               حساب کاربری ندارید؟ <button onClick={() => setTab('register')} className="text-blue-600 font-bold underline">ایجاد حساب کاربری</button>
            </p>
          </form>
        </div>

        {/* Right Image Side */}
        <div className="hidden md:block md:w-1/2 relative">
          <img src="https://picsum.photos/id/102/800/1200" className="w-full h-full object-cover" alt="Interior" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-12 text-white">
             <h2 className="text-3xl font-bold mb-4">خانه رویایی خود را پیدا کنید</h2>
             <p className="text-gray-300 leading-relaxed">
               به هزاران نفری بپیوندید که خانه ایده‌آل خود را با EstateView پیدا کردند.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
