import FashionShop from '../assets/svg/fashion-shop.svg';
import SalesConsulting from '../assets/svg/sales-consulting.svg';
import ShoppingBag from '../assets/svg/shopping-bag.svg';

import FacebookIcon from '../assets/svg/facebook.svg';
import GoogleIcon from '../assets/svg/google.svg';
import AppleIcon from '../assets/svg/apple.svg';

import Banner from '../assets/svg/banner.svg';

import Kurta from '../assets/svg/women-printed-kurta.svg';
import SportsShoe from '../assets/svg/sports-shoe.svg';
import HairBrush from '../assets/svg/hair-brush.svg';
import Watch from '../assets/svg/watch.svg';

import PilotWatch from '../assets/svg/pilot-watch.svg';
import Sneakers from '../assets/svg/sneakers.svg';
import Handbag from '../assets/svg/womens-handbag.svg';
import Sandal from '../assets/svg/womens-sandal.svg';
import Lipstick from '../assets/svg/lipstick.svg';


export const onboardingData = [
  {
    title: 'Choose Products',
    description:
      'Discover top deals, new arrivals, and bestsellers all in one place.',
    Icon: FashionShop,
  },
  {
    title: 'Make Payment',
    description: 'Complete your purchase easily with trusted payment options.',
    Icon: SalesConsulting,
  },
  {
    title: 'Get Your Order',
    description: 'We deliver what you love — quickly and safely.',
    Icon: ShoppingBag,
  },
];

export const socialMediaIcons = [
  { Icon: GoogleIcon },
  { Icon: AppleIcon },
  { Icon: FacebookIcon },
];

export const categoryList = [
  { id: '1', title: 'Beauty', image: require('../assets/images/beauty.jpg') },
  {
    id: '2',
    title: 'Fashion',
    image: require('../assets/images/fashion.jpeg'),
  },
  {
    id: '3',
    title: 'Kids',
    image: require('../assets/images/kids-dress.jpeg'),
  },
  { id: '4', title: 'Mens', image: require('../assets/images/men-dress.jpg') },
  {
    id: '5',
    title: 'Womens',
    image: require('../assets/images/women-dress.jpg'),
  },
  {
    id: '6',
    title: 'Gifts',
    image: require('../assets/images/gifts.jpg'),
  },
];

export const banners = [
  { id: '1', Icon: Banner },
  { id: '2', Icon: Banner },
  { id: '3', Icon: Banner },
];

export const products = [
  {
    id: '1',
    title: 'Women Printed Kurta',
    image: Kurta,
    description: 'Neque porro quisquam est qui dolorem ipsum quia',
    price: '₹1500',
    oldPrice: '₹2499',
    discount: '40% off',
    avgRating: 4.3,
    reviews: 54297,
  },
  {
    id: '2',
    title: 'HRX by Hrithik Roshan',
    image: SportsShoe,
    description: 'Neque porro quisquam est qui dolorem ipsum quia',
    price: '₹2499',
    oldPrice: '₹4999',
    discount: '50% off',
    avgRating: 4.8,
    reviews: 75320,
  },
  {
    id: '3',
    title: 'Philips Hair Brush',
    image: HairBrush,
    description: 'Neque porro quisquam est qui dolorem ipsum quia',
    price: '₹999',
    oldPrice: '₹1999',
    discount: '50% off',
    avgRating: 4.7,
    reviews: 2957,
  },
  {
    id: '4',
    title: 'Titan Men Watch',
    image: Watch,
    description: 'Neque porro quisquam est qui dolorem ipsum quia',
    price: '₹1999',
    oldPrice: '₹3999',
    discount: '50% off',
    avgRating: 4.5,
    reviews: 30570,
  },
  {
    id: '5',
    title: 'Women Printed Kurta',
    image: Kurta,
    description: 'Neque porro quisquam est qui dolorem ipsum quia',
    price: '₹1500',
    oldPrice: '₹2499',
    discount: '40% off',
    avgRating: 4.3,
    reviews: 54297,
  },
];

export const trendingProducts = [
  {
    id: '1',
    Icon: PilotWatch,
    title: 'IWC Schaffhausen 2021 Pilot\'s Watch "SIHH 2019" 44mm',
    price: '₹650',
    oldPrice: '₹1599',
    discount: '60% off',
  },
  {
    id: '2',
    Icon: Sneakers,
    title: 'Labbin White Sneakers For Men and Female',
    price: '₹650',
    oldPrice: '₹1250',
    discount: '70% off',
  },
  {
    id: '3',
    Icon: Handbag,
    title: "Mammon Women's Handbag (Set of 3, Beige)",
    price: '₹750',
    oldPrice: '₹1999',
    discount: '60% off',
  },
  {
    id: '4',
    Icon: Sandal,
    title: 'Do Bhai Women Wedges Sandal (Butterfly)',
    price: '₹750',
    oldPrice: '₹1499',
    discount: '50% off',
  },
  {
    id: '5',
    Icon: Lipstick,
    title: 'Lakme Enrich Matte Lipstick - Shade RM1(4.7gm)',
    price: '₹950',
    oldPrice: '₹1990',
    discount: '60% off',
  },
];
