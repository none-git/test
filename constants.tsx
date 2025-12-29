
import React from 'react';
import { Property } from './types';

export const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'خانه مدرن ۱۲۳۴ خیابان بلورد',
    price: '۱,۲۵۰,۰۰۰ دلار',
    priceNum: 1250000,
    location: 'سان‌فرانسیسکو، کالیفرنیا',
    beds: 4,
    baths: 3,
    area: 2500,
    image: 'https://picsum.photos/id/10/800/600',
    type: 'ویلا',
    tags: ['جدید', 'تخفیف'],
    description: 'شاهکاری مدرن و خیره‌کننده در قلب منطقه میشن. این جواهر معماری دارای اتاق نشیمن با مفهوم باز و پنجره‌های کف تا سقف است...'
  },
  {
    id: '2',
    title: 'ویلا لوکس با باغ',
    price: '۸,۲۵۰,۰۰۰,۰۰۰ تومان',
    priceNum: 8250000000,
    location: 'نیاوران، خیابان بوستان',
    beds: 5,
    baths: 3.5,
    area: 320,
    image: 'https://picsum.photos/id/20/800/600',
    type: 'ویلا',
    tags: ['ویژه']
  },
  {
    id: '3',
    title: 'آپارتمان لافت در مرکز شهر',
    price: '۵,۵۰۰,۰۰۰,۰۰۰ تومان',
    priceNum: 5500000000,
    location: 'سعادت‌آباد، میدان کاج',
    beds: 2,
    baths: 2,
    area: 160,
    image: 'https://picsum.photos/id/30/800/600',
    type: 'آپارتمان',
    tags: ['بازدید آزاد']
  },
  {
    id: '4',
    title: 'خانه خانوادگی مدرن',
    price: '۴,۵۰۰,۰۰۰,۰۰۰ تومان',
    priceNum: 4500000000,
    location: 'زعفرانیه، خیابان اصلی',
    beds: 3,
    baths: 2,
    area: 180,
    image: 'https://picsum.photos/id/40/800/600',
    type: 'خانه',
    tags: ['تور مجازی']
  }
];
