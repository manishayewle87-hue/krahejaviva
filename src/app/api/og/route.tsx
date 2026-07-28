import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Fallback title
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Luxury NA Plots in West Pune';

    // Optional category (e.g., Blog, Investment Guide)
    const category = searchParams.get('category') ?? 'K Raheja Corp Viva';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#122A23',
            backgroundImage: 'radial-gradient(circle at 50% 120%, #C5A059 0%, #122A23 70%)',
            padding: '60px',
            color: '#FAF8F5',
            fontFamily: 'sans-serif',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: '#C5A059', textTransform: 'uppercase', letterSpacing: '2px' }}>
              {category}
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* Fallback to simple text if logo URL is problematic in edge runtime, but Vercel OG supports external images */}
              <div style={{ fontSize: 40, fontWeight: 800, color: '#FAF8F5', borderBottom: '4px solid #C5A059' }}>
                VIVA
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '80%' }}>
            <div
              style={{
                fontSize: 72,
                fontWeight: 800,
                lineHeight: 1.1,
                textShadow: '0 4px 10px rgba(0,0,0,0.5)',
              }}
            >
              {title}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
            <div style={{ fontSize: 28, fontWeight: 500, opacity: 0.8 }}>
              krahejacorpviva.com
            </div>
            <div style={{ fontSize: 24, fontWeight: 600, color: '#C5A059', padding: '12px 24px', border: '2px solid #C5A059', borderRadius: '12px' }}>
              MahaRERA Approved
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.error(e);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
