import React from 'react';

function Home() {
  return (
    <div 
      style={{
        backgroundImage: "url('img.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '590px',
        '@media (max-width: 768px)': {
          height: '400px',
        }
      }}
    >
    </div>
  );
}

export default Home;
