import { Collaboration } from '../types/types';
import SMA from '../images/SMA.jpg'; 
import sanskruti from '../images/sanskruti.jpg'; 
import mihani from '../images/mihani.jpg'; 
import pjmens from '../images/pjmens.jpg'; 

export const collaborations: Collaboration[] = [
  {
    id: '1',
    brandName: 'mahalaxmialankar',
    logo: SMA,
    campaign: 'Shree Mahalaxmi Alankar',
    date: '2025-04-18',
    engagement: {
      impressions: 1104720,
      likes: 51700,
      comments: 346,
      shares: 1368
    },
    link: 'https://www.instagram.com/mahalaxmialankar'
  },
  {
    id: '2',
    brandName: 'sanskruti_selection',
    logo: sanskruti,
    campaign: 'Sanskruti Selection Nandura',
    date: '2025-04-13',
    engagement: {
      impressions: 694873,
      likes: 38806,
      comments: 742,
      shares: 547
    },
    link: 'https://www.instagram.com/sanskruti_selection'
  },
  {
    id: '3',
    brandName: 'mihanienterprises01',
    logo: mihani,
    campaign: 'MIHANI ENTERPRISES',
    date: '2025-03-22',
    engagement: {
      impressions: 780200,
      likes: 28000,
      comments: 980,
      shares: 2100
    },
    link: 'https://www.instagram.com/mihanienterprises01'
  },
  {
    id: '4',
    brandName: 'pj_mens_wear',
    logo: pjmens,
    campaign: 'The Perfect Mens Wear',
    date: '2025-01-18',
    engagement: {
      impressions: 1600000,
      likes: 30500,
      comments: 648,
      shares: 780
    },
    link: 'https://www.instagram.com/pj_mens_wear'
  }
];