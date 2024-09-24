import type { Metadata } from 'next';
import React from 'react';
import Sidebar from '../ui/dashboard/Sidebar';
import Navbar from '../ui/dashboard/Navbar';
import Footer from '../ui/dashboard/Footer';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-4 grid gap-3 grid-cols-[320px,_1fr]">
      <Sidebar />
      <div className="p-2 space-y-6">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
