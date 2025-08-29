import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Eder Barrios - FullStack Software Developer'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          fontSize: 32,
          fontWeight: 600,
          color: '#fff',
          fontFamily: 'monospace',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            border: '2px solid #00ff41',
            borderRadius: '12px',
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: '#00ff41',
              marginBottom: '20px',
            }}
          >
            Eder Barrios
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#00ff41',
              marginBottom: '20px',
            }}
          >
            FullStack Software Developer
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#ccc',
              display: 'flex',
              gap: '20px',
            }}
          >
            <span>PHP</span>
            <span>•</span>
            <span>React</span>
            <span>•</span>
            <span>Laravel</span>
            <span>•</span>
            <span>TypeScript</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}