import { LayoutDashboard, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {

  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
     


       

    


    <div className="w-64 bg-gray-900 h-screen fixed left-0 top-0 text-white p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">HSR MOTORS</h1>
        <h3></h3>
        
      </div>

      <nav className="space-y-2">
        <Link
          to="/dashboard"
          className={`flex items-center space-x-3 p-3 rounded-lg ${isActive('/dashboard') ? 'bg-blue-600' : 'hover:bg-gray-800'
            }`}
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </Link>

        <Link
          to="/leads"
          className={`flex items-center space-x-3 p-3 rounded-lg ${isActive('/leads') ? 'bg-blue-600' : 'hover:bg-gray-800'
            }`}
        >
          <Users size={20} />
          <span>Leads</span>
        </Link>

       
      </nav>


    


    </div>

   

  
  );
}