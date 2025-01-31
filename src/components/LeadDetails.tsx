import { Calendar, Car, DollarSign, Mail, Phone } from 'lucide-react';
import { Lead } from '../types';

interface LeadDetailsProps {
  lead: Lead;
  onStatusChange: (status: Lead['status']) => void;
  onSaveNotes: (notes: string) => void;
}

export default function LeadDetails({ lead, onStatusChange, onSaveNotes }: LeadDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-2xl font-bold">
          {lead.firstName} {lead.lastName}
        </h2>
        <select
          value={lead.status}
          onChange={(e) => onStatusChange(e.target.value as Lead['status'])}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="interested">Interested</option>
          <option value="not_interested">Not Interested</option>
          <option value="qualified">Qualified</option>
          <option value="converted">Converted</option>
          <option value="lost">Lost</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-2 text-gray-500" />
            <span>{lead.phone}</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-2 text-gray-500" />
            <span>{lead.email}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-gray-500" />
            <span>{new Date(lead.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <Car className="w-5 h-5 mr-2 text-gray-500" />
            <span>{lead.interestedVehicle || 'Not specified'}</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="w-5 h-5 mr-2 text-gray-500" />
            <span>{lead.budget ? `$${lead.budget.toLocaleString()}` : 'Not specified'}</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Notes</h3>
        <textarea
          className="w-full h-32 p-3 border rounded-lg"
          value={lead.notes}
          onChange={(e) => onSaveNotes(e.target.value)}
          placeholder="Add notes about this lead..."
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Activity Timeline</h3>
        <div className="border rounded-lg p-4">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">
                  Last contacted on {lead.lastContactDate || 'Never'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}