import React from 'react';
import { Sidebar } from './components/Sidebar';
import { DashboardCard } from './components/DashboardCard';
import { Chart } from './components/Chart';
import {
  Wallet,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  AlertCircle
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Financial Overview</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's your financial summary.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Total Cash Balance"
            value="SAR 284,500"
            icon={<Wallet className="w-6 h-6" />}
            trend={{ value: 12.5, isPositive: true }}
          />
          <DashboardCard
            title="Monthly Revenue"
            value="SAR 75,200"
            icon={<TrendingUp className="w-6 h-6" />}
            trend={{ value: 8.2, isPositive: true }}
          />
          <DashboardCard
            title="Accounts Receivable"
            value="SAR 42,800"
            icon={<ArrowUpRight className="w-6 h-6" />}
            trend={{ value: 5.1, isPositive: false }}
          />
          <DashboardCard
            title="Accounts Payable"
            value="SAR 28,500"
            icon={<ArrowDownRight className="w-6 h-6" />}
            trend={{ value: 3.2, isPositive: true }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Chart title="Revenue vs Expenses">
            <div className="text-gray-400 text-sm">Revenue and expense chart will be implemented here</div>
          </Chart>
          <Chart title="Cash Flow">
            <div className="text-gray-400 text-sm">Cash flow chart will be implemented here</div>
          </Chart>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Recent Customers</h3>
              <Users className="w-5 h-5 text-gray-600" />
            </div>
            <div className="space-y-4">
              {['Saudi Telecom', 'Aramco', 'SABIC'].map((customer, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{customer}</span>
                  <span className="text-sm font-medium text-gray-900">SAR {Math.floor(Math.random() * 10000)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Pending Invoices</h3>
              <AlertCircle className="w-5 h-5 text-gray-600" />
            </div>
            <div className="space-y-4">
              {['INV-2024-001', 'INV-2024-002', 'INV-2024-003'].map((invoice, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{invoice}</span>
                  <span className="text-sm font-medium text-gray-900">SAR {Math.floor(Math.random() * 5000)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
            </div>
            <div className="space-y-3">
              {['Create Invoice', 'Add Expense', 'View Reports'].map((action, index) => (
                <button
                  key={index}
                  className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;