import * as React from 'react';

interface EmailProps {
  fullName: string;
  contactNumber: string;
  location: string;
  service: string;
  description: string;
}

export const MintrixDispatchEmail: React.FC<Readonly<EmailProps>> = ({
  fullName, contactNumber, location, service, description
}) => (
  <div style={{ fontFamily: 'Helvetica, sans-serif', backgroundColor: '#1A1A1A', color: '#F4F1ED', padding: '40px' }}>
    <div style={{ border: '1px solid #D1AB43', padding: '30px', backgroundColor: '#141414' }}>
      <h1 style={{ color: '#D1AB43', fontSize: '24px', textTransform: 'uppercase', fontStyle: 'italic', margin: '0 0 20px 0' }}>
        Priority Dispatch Briefing
      </h1>
      
      <div style={{ borderLeft: '4px solid #D1AB43', paddingLeft: '20px', marginBottom: '30px' }}>
        <p style={{ margin: '5px 0', fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '2px' }}>Client Intel</p>
        <p style={{ margin: '0', fontSize: '18px', fontWeight: 'bold' }}>{fullName}</p>
        <p style={{ margin: '5px 0', fontSize: '16px', color: '#D1AB43' }}>{contactNumber}</p>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tr>
          <td style={{ padding: '10px 0', borderBottom: '1px solid #333' }}>
            <span style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase' }}>Sector</span><br/>
            <strong>{location}</strong>
          </td>
          <td style={{ padding: '10px 0', borderBottom: '1px solid #333' }}>
            <span style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase' }}>Vertical</span><br/>
            <strong>{service}</strong>
          </td>
        </tr>
      </table>

      <div style={{ marginTop: '30px' }}>
        <p style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase', marginBottom: '10px' }}>Technical Description</p>
        <p style={{ fontSize: '14px', lineHeight: '1.6', backgroundColor: '#1A1A1A', padding: '15px' }}>
          {description || "No specific technical details provided."}
        </p>
      </div>

      <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #333', textAlign: 'center' }}>
        <p style={{ fontSize: '10px', color: '#D1AB43', textTransform: 'uppercase', letterSpacing: '3px' }}>
          Mintrix Maintenance // 90m Arrival Guarantee
        </p>
      </div>
    </div>
  </div>
);