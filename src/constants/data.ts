import FashionShop from '../assets/svg/fashion-shop.svg';
import SalesConsulting from '../assets/svg/sales-consulting.svg';
import ShoppingBag from '../assets/svg/shopping-bag.svg';

import FacebookIcon from '../assets/svg/facebook.svg';
import GoogleIcon from '../assets/svg/google.svg';
import AppleIcon from '../assets/svg/apple.svg';

import Banner from '../assets/svg/banner.svg';

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
];

export const banners = [
  { id: '1', Icon: Banner },
  { id: '2', Icon: Banner },
  { id: '3', Icon: Banner },
];
