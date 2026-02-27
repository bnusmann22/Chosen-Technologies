import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// helper to grab every image in the Assets folder via Vite's glob import
function importAllImages() {
  /*
    Vite provides `import.meta.glob` which returns an object mapping
    filenames to modules. When `eager: true` is passed the modules are
    imported immediately and the value is usually the URL of the asset.
    We normalize to a simple array of strings so the component can map over
    them.
  */
  const modules = import.meta.glob('../Assets/*.{png,jpg,jpeg,svg}', { eager: true });
  return Object.values(modules).map((m) => (typeof m === 'string' ? m : m.default || m));
}

// pattern used in the Tailwind example; we just reuse it here
const spanPattern = [
  { cols: 2, rows: 2 },
  { cols: 1, rows: 1 },
  { cols: 1, rows: 1 },
  { cols: 2, rows: 1 },
  { cols: 1, rows: 2 },
  { cols: 1, rows: 1 },
  { cols: 2, rows: 1 },
  { cols: 1, rows: 1 },
  { cols: 2, rows: 1 },
];

export function BentoGrid() {
  const images = importAllImages();

  return (
    <Box component="section" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            component="h2"
            variant="h4"
            sx={{ color: 'text.primary', fontWeight: 'bold' }}
          >
            Pioneers
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            gridAutoRows: '180px',
            gap: 2,
          }}
        >
          {images.map((src, idx) => {
            const span = spanPattern[idx] || { cols: 1, rows: 1 };
            return (
              <Box
                key={idx}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 2,
                  gridColumn: `span ${span.cols}`,
                  gridRow: `span ${span.rows}`,
                  '&:hover img': { filter: 'grayscale(0)' },
                }}
              >
                <Box
                  component="img"
                  src={src}
                  alt={`asset-${idx}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'filter 0.3s',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    bgcolor: 'rgba(0,0,0,0)',
                    transition: 'background-color 0.3s',
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.4)' },
                  }}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

// default export for convenience
export default BentoGrid;
