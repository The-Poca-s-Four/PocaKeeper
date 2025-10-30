import React from "react";

function ChannelCard(props) {
  return (
    <div style={{
      backgroundColor: '#1f2937',
      borderRadius: '20px',
      padding: '30px',
      width: '400px',
      color: 'white',
      boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
      border: '1px solid #374151'
    }}>
      {/* Header with big icon and title */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '25px'
      }}>
        <div style={{
          backgroundColor: '#10b981',
          borderRadius: '12px',
          padding: '8px',
          fontSize: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '48px',
          height: '48px'
        }}>
          {props.iconBig}
        </div>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          margin: '0',
          color: 'white'
        }}>
          {props.title}
        </h2>
      </div>
      
      {/* List of content items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {props.contents && props.contents.map((item, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px'
          }}>
            <div style={{
              backgroundColor: '#10b981',
              borderRadius: '50%',
              padding: '4px',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '20px',
              height: '20px',
              marginTop: '2px',
              flexShrink: 0
            }}>
              {item.iconSmall || '✓'}
            </div>
            <div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                margin: '0 0 6px 0',
                color: 'white'
              }}>
                {item.subtitle}
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#9ca3af',
                margin: '0',
                lineHeight: '1.5'
              }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChannelCard;
