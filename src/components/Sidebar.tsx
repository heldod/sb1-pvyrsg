import React from 'react';
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Users,
  ShoppingCart,
  BarChart2,
  FileBarChart,
  PiggyBank,
  Settings
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: BookOpen, label: 'Chart of Accounts' },
  { icon: FileText, label: 'E-Invoicing' },
  { icon: Users, label: 'Accounts Receivable' },
  { icon: ShoppingCart, label: 'Accounts Payable' },
  { icon: BarChart2, label: 'Revenue & Expense' },
  { icon: FileBarChart, label: 'Financial Reports' },
  { icon: PiggyBank, label: 'Budget Management' },
  { icon: Settings, label: 'Settings' }
];

export function Sidebar() {
  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-200">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900">AccountPro</h1>
      </div>
      <nav className="mt-6">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 ${
              item.active ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span className="text-sm font-medium">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}