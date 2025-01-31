import { ArrowRight, Calendar, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Lead } from '../types';

interface LeadListProps {
  leads: Lead[];
}

const statusColors = {
  new: 'bg-blue-100 text-blue-800',
  contacted: 'bg-yellow-100 text-yellow-800',
  interested: 'bg-green-100 text-green-800',
  not_interested: 'bg-red-100 text-red-800',
  qualified: 'bg-purple-100 text-purple-800',
  converted: 'bg-emerald-100 text-emerald-800',
  lost: 'bg-gray-100 text-gray-800',
};

export default function LeadList({ leads }: LeadListProps) {
  return (
    <div className="grid gap-4">
      {leads.map((lead) => (
        <div key={lead.id} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">
                {lead.firstName} {lead.lastName}
              </h3>
              <div className="mt-2 space-y-1">
                <div className="flex items-center text-gray-600">
                  <Phone size={16} className="mr-2" />
                  {lead.phone}
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail size={16} className="mr-2" />
                  {lead.email}
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar size={16} className="mr-2" />
                  {new Date(lead.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end space-y-2">
              <span className={`px-3 py-1 rounded-full text-sm ${statusColors[lead.status]}`}>
                {lead.status.replace('_', ' ').toUpperCase()}
              </span>
              <Link
                to={`/leads/${lead.id}`}
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                View Details
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}