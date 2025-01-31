import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LeadDetails from './components/LeadDetails';
import LeadList from './components/LeadList';
import Sidebar from './components/Sidebar';
import { Lead } from './types';


const mockLeads: Lead[] = [
  {
    id: '1',
    firstName: '  Shankar',
    lastName: 'Gardi',
    email: 'shankargardi@gmail.com',
    phone: '9967812525',
    source: 'website',
    status: 'new',
    notes: 'Interested in SUVs',
    assignedTo: 'sales1',
    createdAt: '30/01/2025',
    updatedAt: '30/01/2025',
    interestedVehicle: 'SUV',
    budget: 35000,
    lastContactDate: '30/01/2025',
  },
  {
    id: '2',
    firstName: 'Manav',
    lastName: 'Bobade',
    email: 'manavbb@example.com',
    phone: '9747482384',
    source: 'website',
    status: 'new',
    notes: 'Interested in Sedans',
    assignedTo: 'sales1',
    createdAt: '29/01/2025',
    updatedAt: '29/01/2025',
    interestedVehicle: 'Sedan',
    budget: 59000,
    lastContactDate: '29/01/2025',
  },
  {
    id: '3',
    firstName: 'Rajesh',
    lastName: 'Kumar',
    email: 'rajeshkumar@example.com',
    phone: '8374732745',
    source: 'website',
    status: 'new',
    notes: 'Interested in XUVs',
    assignedTo: 'sales1',
    createdAt: '27/01/2025',
    updatedAt: '27/01/2025',
    interestedVehicle: 'XUVs',
    budget: 350000,
    lastContactDate: '27/01/2025',
  }

];

function App() {
  const [leads, setLeads] = React.useState<Lead[]>(mockLeads);

  const handleStatusChange = (leadId: string, newStatus: Lead['status']) => {
    setLeads(leads.map(lead =>
      lead.id === leadId
        ? { ...lead, status: newStatus, updatedAt: new Date().toISOString() }
        : lead
    ));
  };

  const handleSaveNotes = (leadId: string, notes: string) => {
    setLeads(leads.map(lead =>
      lead.id === leadId
        ? { ...lead, notes, updatedAt: new Date().toISOString() }
        : lead
    ));
  };

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 ml-64 p-8">
          <Routes>
            <Route path="/dashboard" element={<Dashboard leads={leads} />} />
            <Route path="/leads" element={<LeadList leads={leads} />} />
            <Route
              path="/leads/:id"
              element={
                <LeadDetails
                  lead={leads[0]}
                  onStatusChange={(status) => handleStatusChange(leads[0].id, status)}
                  onSaveNotes={(notes) => handleSaveNotes(leads[0].id, notes)}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;