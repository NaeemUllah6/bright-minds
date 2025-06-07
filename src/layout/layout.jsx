import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Sidebar from '../ui/sidebar';
import Header from '../ui/header';

const Layout = () => {
    const { isLoading } = useAuth()
    const [showSidebar, setShowSidebar] = useState(false)

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        )
    }

    return (
        <div className="min-h-screen">
            {/* Sidebar */}
            <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

            {/* Main Content */}
            <main className="ml-0 md:ml-[250px] min-h-screen">
                {/* Header */}
                <Header setShowSidebar={setShowSidebar} />

                {/* Page Content */}
                <div className="p-4 md:p-6 lg:p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;
