import React from 'react';

interface ChartProps {
  title: string;
  children: React.ReactNode;
}

export function Chart({ title, children }: ChartProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="h-[300px] flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}