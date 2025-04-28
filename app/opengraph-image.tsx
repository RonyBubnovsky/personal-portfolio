import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Rony B - Full Stack Developer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom, #000000, #111827)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px 80px',
        }}
      >
        <div style={{ 
          fontSize: '64px', 
          fontWeight: 'bold',
          marginBottom: '20px',
          background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
          backgroundClip: 'text',
          color: 'transparent',
        }}>
          Rony B
        </div>
        <div style={{ 
          fontSize: '36px',
          marginBottom: '40px',
          opacity: 0.9 
        }}>
          Full Stack Developer
        </div>
        <div style={{ 
          fontSize: '24px',
          marginTop: '10px',
          opacity: 0.7,
          display: 'flex',
          gap: '20px'
        }}>
          <span>React</span>
          <span>•</span>
          <span>Next.js</span>
          <span>•</span>
          <span>TypeScript</span>
          <span>•</span>
          <span>Node.js</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 