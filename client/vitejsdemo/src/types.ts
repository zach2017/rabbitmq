export interface User {
  username: string;
  password: string;
  role: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export interface AuthContextType {
  authState: AuthState;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export interface DashboardStats {
  title: string;
  value: string;
  icon: any;
  color: string;
}

export interface Order {
  id: string;
  customer: string;
  amount: string;
  status: string;
  date: string;
}

export interface Product {
  name: string;
  sales: number;
  revenue: string;
}

export interface DashboardData {
  stats: DashboardStats[];
  recentOrders: Order[];
  topProducts: Product[];
}

export interface FAQItem {
  question: string;
  answer: string;
}