import {
  People as PeopleIcon,
  ShoppingCart as ShoppingCartIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';
import { User, DashboardData, FAQItem } from './types';

// Static user data
export const USERS: User[] = [
  { username: 'user01', password: 'password', role: 'user' },
  { username: 'admin', password: 'adminpassword', role: 'admin' }
];

// Sample dashboard data
export const getDashboardData = (): DashboardData => ({
  stats: [
    { title: 'Total Users', value: '2,431', icon: PeopleIcon, color: '#1976d2' },
    { title: 'Orders', value: '1,234', icon: ShoppingCartIcon, color: '#388e3c' },
    { title: 'Revenue', value: '$45,678', icon: TrendingUpIcon, color: '#f57c00' },
    { title: 'Growth', value: '+12%', icon: TrendingUpIcon, color: '#7b1fa2' }
  ],
  recentOrders: [
    { id: 'ORD-001', customer: 'John Doe', amount: '$299.99', status: 'Completed', date: '2024-01-15' },
    { id: 'ORD-002', customer: 'Jane Smith', amount: '$149.50', status: 'Pending', date: '2024-01-14' },
    { id: 'ORD-003', customer: 'Bob Johnson', amount: '$89.99', status: 'Shipped', date: '2024-01-13' },
    { id: 'ORD-004', customer: 'Alice Brown', amount: '$199.99', status: 'Completed', date: '2024-01-12' }
  ],
  topProducts: [
    { name: 'Wireless Headphones', sales: 245, revenue: '$12,250' },
    { name: 'Smart Watch', sales: 189, revenue: '$18,900' },
    { name: 'Laptop Stand', sales: 156, revenue: '$4,680' },
    { name: 'USB Cable', sales: 98, revenue: '$980' }
  ]
});

// FAQ data
export const faqData: FAQItem[] = [
  {
    question: 'How do I create an account?',
    answer: 'You can create an account by clicking the "Sign Up" button and filling out the registration form with your details.'
  },
  {
    question: 'How do I reset my password?',
    answer: 'Click on "Forgot Password" on the login page and follow the instructions sent to your email address.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for premium accounts.'
  },
  {
    question: 'How can I contact customer support?',
    answer: 'You can reach our customer support team via email at support@example.com or through the contact form on our website.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we use industry-standard encryption and security measures to protect your personal information and data.'
  }
];