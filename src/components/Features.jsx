import * as React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useTheme, alpha } from '@mui/material/styles';

/* ── ANIMATIONS ───────────────────────────────────────────── */
const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* ── STYLED COMPONENTS ────────────────────────────────────── */
const FeaturesSection = styled(Box)(({ theme }) => ({
  maxWidth: '1280px',
  margin: '0 auto',
  padding: theme.spacing(15, 6),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(10, 3.5),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(7.5, 2.5),
  },
}));

const SectionLabel = styled(Typography)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  fontSize: '11px',
  fontWeight: 500,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: theme.palette.primary.main,
  marginBottom: '32px',
  opacity: 0,
  animation: `${fadeUp} 0.7s ease 0.1s forwards`,
  '&::before': {
    content: '""',
    display: 'block',
    width: '32px',
    height: '1px',
    background: theme.palette.primary.main,
  },
}));

const SectionHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "'Syne', sans-serif",
  fontSize: 'clamp(42px, 6vw, 80px)',
  fontWeight: 800,
  color: '#ffffff',
  lineHeight: 1.0,
  letterSpacing: '-0.02em',
  maxWidth: '720px',
  marginBottom: '20px',
  opacity: 0,
  animation: `${fadeUp} 0.7s ease 0.2s forwards`,
}));

const SectionSub = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 300,
  color: '#ffffff',
  maxWidth: '480px',
  lineHeight: 1.7,
  marginBottom: '88px',
  opacity: 0,
  animation: `${fadeUp} 0.7s ease 0.3s forwards`,
}));

const FeaturesGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gap: '2px',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr 1fr',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

const FeatureCard = styled(Box)(({ theme, cardIndex }) => {
  const animationDelay = `${0.4 + cardIndex * 0.05}s`;
  const gridSpans = [7, 5, 4, 4, 4, 5, 7];
  const gridSpan = gridSpans[cardIndex] || 4;

  const cardBg = alpha(theme.palette.primary.main, 0.08);
  const cardHoverBg = alpha(theme.palette.primary.main, 0.15);

  return {
    position: 'relative',
    background: cardBg,
    padding: '44px 40px 52px',
    overflow: 'hidden',
    cursor: 'default',
    transition: 'background 0.4s ease, transform 0.4s ease',
    border: `1px solid ${theme.palette.divider}`,
    opacity: 0,
    animation: `${fadeUp} 0.65s ease ${animationDelay} forwards`,
    gridColumn: `span ${gridSpan}`,
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: '44px',
      width: '2px',
      height: 0,
      background: theme.palette.primary.main,
      transition: 'height 0.5s ease',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '-60px',
      right: '-60px',
      width: '200px',
      height: '200px',
      background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.15)} 0%, transparent 70%)`,
      opacity: 0,
      transition: 'opacity 0.5s ease',
    },
    '&:hover': {
      background: cardHoverBg,
      transform: 'translateY(-3px)',
      zIndex: 2,
      border: `1px solid ${theme.palette.primary.main}`,
      '&::before': {
        height: 'calc(100% - 88px)',
      },
      '&::after': {
        opacity: 1,
      },
      '& .card-icon': {
        borderColor: theme.palette.primary.main,
        background: alpha(theme.palette.primary.main, 0.15),
      },
      '& .card-tag': {
        background: alpha(theme.palette.primary.main, 0.15),
      },
    },
    [theme.breakpoints.down('md')]: {
      gridColumn: cardIndex === 0 || cardIndex === 6 ? 'span 2' : 'span 1',
    },
    [theme.breakpoints.down('sm')]: {
      gridColumn: 'span 1',
    },
  };
});

const CardNumber = styled(Typography)(({ theme }) => ({
  fontFamily: "'Syne', sans-serif",
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '0.15em',
  color: theme.palette.primary.main,
  marginBottom: '28px',
  display: 'block',
}));

const CardIcon = styled(Box)(({ theme }) => ({
  width: '48px',
  height: '48px',
  marginBottom: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
  borderRadius: '2px',
  transition: 'border-color 0.3s ease, background 0.3s ease',
  '& svg': {
    width: '22px',
    height: '22px',
    stroke: theme.palette.primary.main,
    fill: 'none',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Syne', sans-serif",
  fontSize: '22px',
  fontWeight: 700,
  color: theme.palette.text.primary,
  lineHeight: 1.2,
  marginBottom: '14px',
  letterSpacing: '-0.01em',
}));

const CardDesc = styled(Typography)(({ theme }) => ({
  fontSize: '14.5px',
  fontWeight: 300,
  color: '#ffffff',
  lineHeight: 1.75,
}));

const CardTags = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginTop: '28px',
}));

const Tag = styled(Box)(({ theme }) => ({
  fontSize: '10.5px',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  fontWeight: 500,
  color: '#ffffff',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  padding: '4px 10px',
  borderRadius: '2px',
  transition: 'background 0.3s ease',
}));

const BottomStrip = styled(Box)(({ theme }) => ({
  marginTop: '80px',
  paddingTop: '40px',
  borderTop: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  opacity: 0,
  animation: `${fadeUp} 0.7s ease 0.9s forwards`,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '24px',
    textAlign: 'center',
  },
}));

const StripQuote = styled(Typography)(({ theme }) => ({
  fontFamily: "'Syne', sans-serif",
  fontSize: '15px',
  fontWeight: 600,
  color: '#ffffff',
  letterSpacing: '0.02em',
}));

const CTAButton = styled(Button)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '12px',
  fontSize: '13px',
  fontWeight: 500,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'white',
  background: theme.palette.primary.main,
  padding: '14px 32px',
  borderRadius: '2px',
  transition: 'background 0.3s ease, gap 0.3s ease',
  '&:hover': {
    background: theme.palette.primary.dark,
    gap: '18px',
  },
  '& svg': {
    width: '14px',
    height: '14px',
    stroke: 'currentColor',
    fill: 'none',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
}));

/* ── SVG ICONS ────────────────────────────────────────────── */
const IconCustomSoftware = () => (
  <svg viewBox="0 0 24 24">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const IconSecurity = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconArchitecture = () => (
  <svg viewBox="0 0 24 24">
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);

const IconOwnership = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const IconCloud = () => (
  <svg viewBox="0 0 24 24">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const IconAgile = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M13 6h3a2 2 0 0 1 2 2v7" />
    <line x1="6" y1="9" x2="6" y2="21" />
  </svg>
);

const IconInnovation = () => (
  <svg viewBox="0 0 24 24">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const features = [
  {
    number: '01',
    icon: <IconCustomSoftware />,
    title: 'Custom Software,\nBuilt Around You',
    description:
      "We don't reskin templates and call it custom. Every product we build is architected around your specific workflows, team dynamics, and business logic — from the data layer up. If it doesn't fit like a tailored suit, it's not done.",
    tags: ['React / Next.js', 'Node.js', 'PostgreSQL', 'Full Stack'],
  },
  {
    number: '02',
    icon: <IconSecurity />,
    title: 'Security\nBy Default',
    description:
      "Security isn't bolted on at the end — it's embedded from the first line of code. Zero-trust infrastructure, AES-256 encryption, JWT auth, 2FA, RBAC, and full GDPR/HIPAA compliance readiness, baked into every build.",
    tags: ['OAuth 2.0', 'TLS 1.3', 'GDPR'],
  },
  {
    number: '03',
    icon: <IconArchitecture />,
    title: 'Architecture That Scales',
    description:
      'We design every system for 100x growth from day one — modular, horizontally scalable, and future-proof. What works at 100 users still works at 100,000, with no rebuilds required.',
    tags: ['Microservices', 'Docker / K8s'],
  },
  {
    number: '04',
    icon: <IconOwnership />,
    title: 'Radical Ownership & Accountability',
    description:
      "If it breaks, lags, or underperforms — it's on us. Our model is simple: we don't grow unless your business grows. Every sprint, every milestone, every KPI is tracked with full transparency and zero excuses.",
    tags: ['Outcome-Driven', 'Shared Risk'],
  },
  {
    number: '05',
    icon: <IconCloud />,
    title: 'Cloud Infrastructure & 99.99% Uptime',
    description:
      'Built on AWS with multi-AZ failover, Kubernetes orchestration, blue-green deployments, and auto-scaling. We monitor your stack around the clock — because downtime is not a trade-off we\'re willing to make.',
    tags: ['AWS', 'CloudFront CDN', 'Auto-Scale'],
  },
  {
    number: '06',
    icon: <IconAgile />,
    title: 'Agile Delivery with Purpose',
    description:
      'We follow a lean, adaptive SDLC — sprints mapped to real business outcomes, not just deliverables. From discovery workshops to CI/CD deployment pipelines, every phase is tight, documented, and client-visible.',
    tags: ['Scrum / Kanban', 'CI/CD', 'Sprint Reviews'],
  },
  {
    number: '07',
    icon: <IconInnovation />,
    title: 'Innovation-Led R&D — AI, Blockchain & Beyond',
    description:
      'We run dedicated weekly innovation sprints across all teams. From AI-assisted onboarding and predictive analytics to Web3 infrastructure and smart contracts — we prototype the future so our clients are always a move ahead of the market.',
    tags: ['AI / ML', 'Blockchain', 'Edge Computing', 'Web3'],
  },
];

export default function Features() {
  const theme = useTheme();

  return (
    <FeaturesSection sx={{ pt: { xs: 6, sm: 12 } }}>
      {/* Header */}
      <SectionLabel variant="body2">What We Offer</SectionLabel>
      <SectionHeading variant="h2">
        Built to <span style={{ color: theme.palette.primary.main }}>deliver</span>,<br />
        not to impress.
      </SectionHeading>
      <SectionSub variant="body1">
        Every capability we've built exists for one purpose — to move your business forward, measurably and relentlessly.
      </SectionSub>

      {/* Features Grid */}
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index} cardIndex={index}>
            <CardNumber>{feature.number}</CardNumber>
            <CardIcon className="card-icon">{feature.icon}</CardIcon>
            <CardTitle>{feature.title}</CardTitle>
            <CardDesc>{feature.description}</CardDesc>
            <CardTags>
              {feature.tags.map((tag, idx) => (
                <Tag key={idx} className="card-tag">{tag}</Tag>
              ))}
            </CardTags>
          </FeatureCard>
        ))}
      </FeaturesGrid>

      {/* Bottom Strip */}
      <BottomStrip>
        <StripQuote>
          Mission: <span style={{ color: theme.palette.primary.main }}>Addicted to excellence.</span> Software that works — every time.
        </StripQuote>
        <CTAButton variant="contained" endIcon={<ArrowRightIcon />}>
          Start a Project
        </CTAButton>
      </BottomStrip>
    </FeaturesSection>
  );
}
