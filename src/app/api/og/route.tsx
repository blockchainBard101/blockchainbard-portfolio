import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    
    const title = searchParams.get('title') || 'BlockchainBard'
    const subtitle = searchParams.get('subtitle') || 'A. J. George | AI, Backend & Smart Contract Developer'
    
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
            backgroundColor: '#0a0a0a',
            backgroundImage: 'linear-gradient(45deg, #1e1e1e 0%, #2d2d2d 100%)',
          }}
        >
          {/* Background Pattern */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)',
              opacity: 0.1,
            }}
          />
          
          {/* Main Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '60px',
              textAlign: 'center',
              maxWidth: '1200px',
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                backgroundColor: '#3b82f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '40px',
                fontSize: '48px',
              }}
            >
              🤓
            </div>
            
            {/* Title */}
            <div
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '20px',
                lineHeight: 1.1,
                textAlign: 'center',
              }}
            >
              {title}
            </div>
            
            {/* Subtitle */}
            <div
              style={{
                fontSize: '32px',
                color: '#a1a1aa',
                marginBottom: '40px',
                textAlign: 'center',
                lineHeight: 1.3,
              }}
            >
              {subtitle}
            </div>
            
            {/* Tags */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                justifyContent: 'center',
                marginBottom: '40px',
              }}
            >
              {['Sui', 'Smart Contracts', 'DeFi', 'AI', 'DevRel'].map((tag) => (
                <div
                  key={tag}
                  style={{
                    backgroundColor: '#1f2937',
                    color: '#ffffff',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '20px',
                    border: '1px solid #374151',
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
            
            {/* Footer */}
            <div
              style={{
                fontSize: '24px',
                color: '#6b7280',
                textAlign: 'center',
              }}
            >
              Building on Sui. Shipping tools, docs, and dApps.
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
