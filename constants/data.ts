import { MdSpaceDashboard } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GrTransaction } from 'react-icons/gr';
import { FaMoneyCheck } from 'react-icons/fa';
import { TbMessageReportFilled } from 'react-icons/tb';
import { FaHandsHelping } from 'react-icons/fa';
import { GiSteam } from 'react-icons/gi';
import { IoMdSettings } from 'react-icons/io';
import { IoIosPlayCircle } from 'react-icons/io';
import { MdOutlineLaptopChromebook } from 'react-icons/md';

export const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: MdSpaceDashboard,
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: FaUsers,
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: MdOutlineProductionQuantityLimits,
      },
      {
        title: 'Transactions',
        path: '/dashboard/transactions',
        icon: GrTransaction,
      },
    ],
  },
  {
    title: 'Analytics',
    list: [
      {
        title: 'Revenue',
        path: '/dashboard/revenue',
        icon: FaMoneyCheck,
      },
      {
        title: 'Reports',
        path: '/dashboard/reports',
        icon: TbMessageReportFilled,
      },
      {
        title: 'Teams',
        path: '/dashboard/teams',
        icon: GiSteam,
      },
    ],
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: IoMdSettings,
      },
      {
        title: 'Help',
        path: '/dashboard/help',
        icon: FaHandsHelping,
      },
    ],
  },
];

type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export const payments: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  // ...
];

export const usefulInfo = [
  {
    subject: '🔥Available Now',
    title: 'How to use the new version of the admin dashboard',
    subtitle: 'Take 4 minutes to learn',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corrupti autem alias quia! Beatae minus incidunt illum maxime! ',
    buttonText: 'Watch',
    buttonIcon: IoIosPlayCircle,
  },
  {
    subject: 'Coming Soon',
    title: 'New server actions are available, partial rendering is coming up!',
    subtitle: 'Boost your productivity',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corrupti autem alias quia! Beatae minus incidunt illum maxime! ',
    buttonText: 'Learn',
    buttonIcon: MdOutlineLaptopChromebook,
  },
];
