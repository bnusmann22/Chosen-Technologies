# 🤝 Chosen Technologies - Collaboration Guide

**Welcome to the team!** This guide will help you get started with contributing to the Chosen Technologies website.

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Development Workflow](#development-workflow)
6. [Code Conventions](#code-conventions)
7. [Component Architecture](#component-architecture)
8. [Making Changes](#making-changes)
9. [Theming & Styling](#theming--styling)
10. [Testing](#testing)
11. [Deployment](#deployment)
12. [Common Tasks](#common-tasks)
13. [Troubleshooting](#troubleshooting)
14. [Resources & Documentation](#resources--documentation)

---

## 🎯 Project Overview

**Chosen Technologies** is a modern marketing website built with React and Material-UI. The site showcases software solutions and includes multiple pages for features, team information, pricing, testimonials, and more.

### Key Features
- 🎨 **Dark Mode First** - Currently defaults to dark mode with light mode support planned
- ⚡ **Smooth Animations** - Page transitions and scroll effects using Lenis
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- 🧭 **Multi-Page Navigation** - React Router with 15+ pages
- 🎭 **Material-UI Components** - Consistent design system

---

## 🛠️ Tech Stack

### Core Technologies
- **React 18+** - UI framework
- **Vite** - Build tool and dev server
- **React Router v7** - Client-side routing
- **Material-UI (MUI) v6+** - Component library
- **Emotion** - CSS-in-JS styling

### Key Dependencies
- `@mui/material` - Core MUI components
- `@mui/icons-material` - Icon library
- `react-router-dom` - Navigation
- `lenis` - Smooth scrolling
- `ogl` - WebGL graphics library

### Development Tools
- **Node.js** - Runtime environment
- **npm/yarn** - Package management
- **Maven** - Java build (for backend if applicable)

---

## 📁 Project Structure

```
Chosen-Technologies/
├── public/                     # Static assets
├── src/
│   ├── App.jsx                # Main app component with routing
│   ├── main.jsx               # Application entry point
│   ├── Assets/                # Images, logos, media files
│   ├── components/            # Reusable UI components
│   │   ├── AppAppBar.jsx      # Navigation bar
│   │   ├── Hero.jsx           # Hero section
│   │   ├── Features.jsx       # Features display
│   │   ├── Pricing.jsx        # Pricing cards
│   │   ├── Footer.jsx         # Site footer
│   │   ├── FAQ.jsx            # FAQ accordion
│   │   ├── Team.jsx           # Team member cards
│   │   ├── Testimonials.jsx   # Customer testimonials
│   │   └── ...                # Other components
│   ├── pages/                 # Page components
│   │   ├── Home.jsx           # Landing page
│   │   ├── About.jsx          # About page
│   │   ├── Features.jsx       # Features page
│   │   ├── Pricing.jsx        # Pricing page
│   │   ├── Contact.jsx        # Contact page
│   │   └── ...                # Other pages
│   ├── context/               # React context providers
│   │   └── PageTransitionContext.jsx  # Page transition state
│   └── theme/                 # Theme configuration
│       ├── AppTheme.jsx       # Main theme provider
│       ├── themePrimitives.js # Color palette & design tokens
│       ├── ColorModeSelect.jsx        # Theme switcher
│       ├── ColorModeIconDropdown.jsx  # Theme dropdown
│       └── customizations/    # Component style overrides
│           ├── dataDisplay.js
│           ├── feedback.js
│           ├── inputs.jsx
│           ├── navigation.jsx
│           └── surfaces.js
├── index.html                 # HTML entry point
├── package.json               # Dependencies & scripts
├── vite.config.js            # Vite configuration
├── vercel.json               # Vercel deployment config
└── README.md                 # Project documentation
```

### Directory Purposes

- **`src/components/`** - Reusable components used across multiple pages
- **`src/pages/`** - Full page components corresponding to routes
- **`src/theme/`** - All styling and theming logic
- **`src/context/`** - Global state management using React Context
- **`src/Assets/`** - Static files like images and media

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Git** - For version control
- **Code Editor** - VS Code recommended

### Initial Setup

1. **Clone the repository** (if not already done)
   ```bash
   git clone git@github.com:bnusmann22/Chosen-Technologies.git
   cd Chosen-Technologies
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173` (default Vite port)
   - The site should load with hot-reload enabled

### Verify Installation

After running `npm run dev`, you should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

If you see this, you're ready to start developing! 🎉

---

## 🔄 Development Workflow

### Branch Strategy

1. **Main Branch** (`main` or `master`)
   - Production-ready code only
   - Always stable and deployable

2. **Feature Branches**
   - Create a new branch for each feature/fix
   - Naming convention: `feature/feature-name` or `fix/bug-name`
   
   ```bash
   # Create and switch to new branch
   git checkout -b feature/add-testimonials-section
   ```

3. **Working on Your Branch**
   ```bash
   # Make changes to files
   # Stage changes
   git add .
   
   # Commit with descriptive message
   git commit -m "Add testimonials section with carousel"
   
   # Push to remote
   git push origin feature/add-testimonials-section
   ```

### Pull Request Process

1. **Before Creating PR**
   - Test your changes locally
   - Ensure the build works: `npm run build`
   - Check for console errors
   - Test on different screen sizes

2. **Create Pull Request**
   - Write descriptive PR title
   - Explain what changes were made and why
   - Include screenshots for UI changes
   - Reference any related issues

3. **Code Review**
   - Wait for team member review
   - Address feedback and make requested changes
   - Push updates to the same branch

4. **Merge**
   - Once approved, merge to main branch
   - Delete feature branch after merge

### Daily Development Routine

```bash
# 1. Pull latest changes from main
git checkout main
git pull origin main

# 2. Create/switch to your feature branch
git checkout -b feature/my-new-feature

# 3. Start dev server
npm run dev

# 4. Make changes and test

# 5. Commit and push
git add .
git commit -m "Descriptive message"
git push origin feature/my-new-feature
```

---

## 📐 Code Conventions

### General Principles
- Write clean, readable code
- Use meaningful variable and function names
- Comment complex logic
- Keep components small and focused
- Follow DRY (Don't Repeat Yourself)

### JavaScript/JSX Style

**Component Structure:**
```jsx
// 1. Imports
import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// 2. Styled components
const StyledContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
}));

// 3. Main component
export default function MyComponent({ title, description }) {
  // 3a. Hooks
  const [state, setState] = React.useState(false);
  
  // 3b. Event handlers
  const handleClick = () => {
    setState(!state);
  };
  
  // 3c. Render
  return (
    <StyledContainer>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
    </StyledContainer>
  );
}
```

**Naming Conventions:**
- **Components**: PascalCase (`MyComponent.jsx`)
- **Files**: PascalCase for components, camelCase for utilities
- **Functions**: camelCase (`handleSubmit`, `fetchData`)
- **Constants**: UPPER_SNAKE_CASE (`API_URL`, `MAX_ITEMS`)
- **Styled components**: Prefix with `Styled` (`StyledButton`, `StyledContainer`)

**Import Order:**
1. React and React-related
2. Third-party libraries
3. MUI components
4. Local components
5. Context and hooks
6. Utils and helpers
7. Styles and assets

### Component Guidelines

**Props:**
- Always destructure props
- Use PropTypes or TypeScript for type checking (if added)
- Provide default values where appropriate

```jsx
export default function MyComponent({ 
  title = 'Default Title', 
  variant = 'primary',
  onClose 
}) {
  // Component logic
}
```

**State Management:**
- Use `useState` for local component state
- Use Context API for global state (see `PageTransitionContext`)
- Keep state as local as possible

**Event Handlers:**
- Prefix with `handle` (`handleClick`, `handleSubmit`)
- Define inside component, not inline (except for simple cases)

---

## 🏗️ Component Architecture

### Component Types

**1. Page Components** (`src/pages/`)
- Full-page layouts
- Compose multiple smaller components
- Handle page-specific data and logic
- Wrapped in `PageContainer` for consistent layout

```jsx
// Example: src/pages/About.jsx
import * as React from 'react';
import PageContainer from '../components/PageContainer';
import Hero from '../components/Hero';
import Features from '../components/Features';

export default function AboutPage() {
  return (
    <PageContainer>
      <Hero 
        title="About Chosen Technologies"
        subtitle="Our story and mission"
      />
      <Features />
    </PageContainer>
  );
}
```

**2. Reusable Components** (`src/components/`)
- Self-contained, focused functionality
- Accept props for customization
- Can be used across multiple pages

```jsx
// Example: components/FeatureCard.jsx
export default function FeatureCard({ icon, title, description }) {
  return (
    <Card>
      <CardContent>
        {icon}
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
}
```

**3. Layout Components**
- `AppAppBar` - Navigation bar (appears on all pages)
- `Footer` - Site footer (appears on all pages)
- `PageContainer` - Wrapper for page content
- `PageTransitionOverlay` - Handles page transitions

### Key Components Reference

| Component | Purpose | Location |
|-----------|---------|----------|
| `AppAppBar` | Navigation bar with links | `src/components/AppAppBar.jsx` |
| `Hero` | Main hero section | `src/components/Hero.jsx` |
| `Features` | Feature showcase grid | `src/components/Features.jsx` |
| `Pricing` | Pricing cards/tables | `src/components/Pricing.jsx` |
| `Testimonials` | Customer testimonials | `src/components/Testimonials.jsx` |
| `Team` | Team member profiles | `src/components/Team.jsx` |
| `FAQ` | Accordion FAQ section | `src/components/FAQ.jsx` |
| `Footer` | Site footer with links | `src/components/Footer.jsx` |
| `CTA` | Call-to-action sections | `src/components/CTA.jsx` |

---

## ✏️ Making Changes

### Adding a New Page

**Step 1: Create the page component**
```bash
# Create new file
touch src/pages/NewPage.jsx
```

```jsx
// src/pages/NewPage.jsx
import * as React from 'react';
import PageContainer from '../components/PageContainer';
import { Typography, Box } from '@mui/material';

export default function NewPage() {
  return (
    <PageContainer>
      <Box sx={{ py: 8 }}>
        <Typography variant="h2">New Page</Typography>
        <Typography variant="body1">
          Content goes here...
        </Typography>
      </Box>
    </PageContainer>
  );
}
```

**Step 2: Add route in App.jsx**
```jsx
// src/App.jsx
import NewPage from './pages/NewPage'; // Add import

// Inside <Routes>
<Route path="/new-page" element={<NewPage />} />
```

**Step 3: Add navigation link (optional)**
```jsx
// In src/components/AppAppBar.jsx
// Add to the navigation items array
{ label: 'New Page', path: '/new-page' }
```

### Modifying Existing Components

**Example: Updating the Hero Section**

1. **Locate the component**: `src/components/Hero.jsx`
2. **Make your changes**:
   ```jsx
   // Change text content
   <Typography variant="h1">
     New Hero Title
   </Typography>
   ```
3. **Test in browser** - Changes appear immediately with hot reload
4. **Commit changes**:
   ```bash
   git add src/components/Hero.jsx
   git commit -m "Update hero section title"
   ```

### Adding New Components

**Step 1: Create component file**
```jsx
// src/components/NewComponent.jsx
import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
}));

export default function NewComponent({ title, children }) {
  return (
    <StyledBox>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      {children}
    </StyledBox>
  );
}
```

**Step 2: Import and use in a page**
```jsx
// src/pages/SomePage.jsx
import NewComponent from '../components/NewComponent';

export default function SomePage() {
  return (
    <PageContainer>
      <NewComponent title="My New Section">
        <p>Content here</p>
      </NewComponent>
    </PageContainer>
  );
}
```

### Updating Content

**Simple Text Changes:**
- Navigate to the relevant component or page
- Find the `<Typography>` or text content
- Update the text directly
- Save and check in browser

**Image Changes:**
1. Add new image to `src/Assets/`
2. Import in component:
   ```jsx
   import myImage from '../Assets/my-image.png';
   ```
3. Use in component:
   ```jsx
   <img src={myImage} alt="Description" />
   ```

---

## 🎨 Theming & Styling

### Theme System Overview

The project uses **Material-UI's theming system** with custom color palettes and design tokens.

### Theme Files

1. **`src/theme/AppTheme.jsx`** - Main theme provider
2. **`src/theme/themePrimitives.js`** - Color definitions and design tokens
3. **`src/theme/customizations/`** - Component-specific style overrides

### Color Mode (Light/Dark)

**Current Status**: The site currently defaults to dark mode. Light mode support is being implemented.

**How It Works:**
- Theme mode stored in localStorage
- Users can toggle via ColorModeSelect component
- Theme values automatically adjust based on mode

### Styling Approaches

**1. MUI System Props (Recommended for simple styles)**
```jsx
<Box 
  sx={{ 
    padding: 3,
    backgroundColor: 'background.paper',
    borderRadius: 2 
  }}
/>
```

**2. Styled Components (For complex/reusable styles)**
```jsx
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    boxShadow: theme.shadows[8],
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
}));
```

**3. Theme Customizations (For global overrides)**
```jsx
// src/theme/customizations/surfaces.js
export const surfacesCustomizations = {
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.spacing(2),
        boxShadow: theme.shadows[2],
      }),
    },
  },
};
```

### Using Theme Values

```jsx
import { useTheme } from '@mui/material/styles';

function MyComponent() {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        color: theme.palette.primary.main,
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
      }}
    />
  );
}
```

### Responsive Design

Use MUI's breakpoint system:

```jsx
<Box
  sx={{
    padding: { xs: 2, sm: 3, md: 4 },  // xs: mobile, sm: tablet, md: desktop
    fontSize: { xs: '14px', md: '16px' },
  }}
/>
```

Breakpoint values:
- `xs` - Extra small (mobile): 0px+
- `sm` - Small (tablet): 600px+
- `md` - Medium (small desktop): 900px+
- `lg` - Large (desktop): 1200px+
- `xl` - Extra large: 1536px+

### Common Theme Values

```jsx
// Colors
theme.palette.primary.main
theme.palette.secondary.main
theme.palette.background.default
theme.palette.background.paper
theme.palette.text.primary
theme.palette.text.secondary

// Spacing (multiples of 8px)
theme.spacing(1)  // 8px
theme.spacing(2)  // 16px
theme.spacing(3)  // 24px

// Shadows
theme.shadows[1]  // Subtle
theme.shadows[4]  // Medium
theme.shadows[8]  // Strong

// Typography
theme.typography.h1
theme.typography.body1
theme.typography.fontFamily
```

---

## 🧪 Testing

### Manual Testing Checklist

Before submitting changes, verify:

**Functionality:**
- [ ] All features work as expected
- [ ] Navigation links work correctly
- [ ] Forms submit properly (if applicable)
- [ ] No console errors in browser DevTools

**Responsive Design:**
- [ ] Mobile view (< 600px)
- [ ] Tablet view (600px - 900px)
- [ ] Desktop view (> 900px)
- [ ] Test on actual devices if possible

**Cross-Browser:**
- [ ] Chrome
- [ ] Firefox
- [ ] Safari (macOS/iOS)
- [ ] Edge

**Performance:**
- [ ] Pages load reasonably fast
- [ ] No layout shift during loading
- [ ] Animations are smooth

**Accessibility:**
- [ ] Keyboard navigation works
- [ ] Proper heading hierarchy
- [ ] Alt text on images
- [ ] Sufficient color contrast

### Testing Commands

```bash
# Run in development mode
npm run dev

# Build for production (checks for build errors)
npm run build

# Preview production build locally
npm run preview

# Run Maven tests (if applicable for backend)
mvn test
```

### Browser DevTools

**Useful shortcuts:**
- `F12` - Open DevTools
- `Ctrl + Shift + M` - Toggle device toolbar (responsive mode)
- `Ctrl + Shift + C` - Inspect element

**Check for:**
- Console errors (red messages)
- Network issues (failed requests)
- Performance problems (slow loading)

---

## 🚀 Deployment

### Vercel Deployment (Configured)

The project is configured for deployment on Vercel (see `vercel.json`).

**Automatic Deployment:**
- Main branch deploys automatically to production
- Pull requests create preview deployments

**Manual Deployment:**
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Deploy to production:
   ```bash
   vercel --prod
   ```

### Build Process

```bash
# Build for production
npm run build

# Output goes to dist/ folder
# Contains optimized HTML, CSS, JS
```

### Pre-Deployment Checklist

- [ ] All changes committed and pushed
- [ ] Build completes without errors
- [ ] Test production build locally (`npm run preview`)
- [ ] No console errors
- [ ] All pages accessible
- [ ] Assets loading correctly

---

## 📝 Common Tasks

### 1. Changing Navigation Menu Items

**File**: `src/components/AppAppBar.jsx`

Look for navigation items array and modify:
```jsx
const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'Features', path: '/features' },
  { label: 'Pricing', path: '/pricing' },
  // Add/modify items here
];
```

### 2. Updating Footer Links

**File**: `src/components/Footer.jsx`

Modify the link sections in the footer component.

### 3. Changing Color Scheme

**File**: `src/theme/themePrimitives.js`

Modify color definitions:
```jsx
export const brand = {
  50: '#F0F7FF',
  100: '#yourColor',
  // ... other shades
};
```

### 4. Adding a New Icon

```bash
# Material-UI has 2000+ icons available
```

Usage:
```jsx
import HomeIcon from '@mui/icons-material/Home';

<HomeIcon />
```

Browse icons: [MUI Icons](https://mui.com/material-ui/material-icons/)

### 5. Modifying Page Transitions

**File**: `src/context/PageTransitionContext.jsx`

Adjust transition timing and styles.

### 6. Adding Custom Fonts

1. Add font files to `src/Assets/fonts/` (or use Google Fonts)
2. Update `src/theme/themePrimitives.js`:
   ```jsx
   export const typography = {
     fontFamily: '"Your Font", "Roboto", sans-serif',
   };
   ```

### 7. Environment Variables

Create `.env` file in root:
```
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Chosen Technologies
```

Access in code:
```jsx
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 🔧 Troubleshooting

### Common Issues and Solutions

**Problem: Dev server won't start**
```bash
# Solution: Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

**Problem: Changes not appearing in browser**
- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Clear browser cache
- Restart dev server

**Problem: Build fails**
```bash
# Check for errors in the console output
# Common issues:
# - Missing imports
# - Syntax errors
# - Unused variables (warnings treated as errors)

# Fix issues and rebuild
npm run build
```

**Problem: Styling not working**
- Check if component is wrapped in `AppTheme`
- Verify sx prop syntax
- Check theme file for correct values
- Inspect element in DevTools to see applied styles

**Problem: Route not working**
- Verify route added to `App.jsx`
- Check path matches exactly (case-sensitive)
- Ensure component is imported correctly

**Problem: Component not rendering**
- Check browser console for errors
- Verify all imports are correct
- Check component is exported correctly (`export default`)
- Verify props are passed correctly

### Getting Help

1. **Check Documentation**:
   - [React Docs](https://react.dev/)
   - [Material-UI Docs](https://mui.com/)
   - [Vite Docs](https://vitejs.dev/)

2. **Search Project Files**:
   - Look for similar examples in existing components
   - Check how other pages/components solve similar problems

3. **Ask the Team**:
   - Create a GitHub issue
   - Ask in team chat/Slack
   - Request code review

4. **Debug Tools**:
   - Use `console.log()` to debug values
   - Use React DevTools browser extension
   - Check Network tab for API issues

---

## 📚 Resources & Documentation

### Official Documentation

- **React**: https://react.dev/
- **Material-UI**: https://mui.com/material-ui/
- **React Router**: https://reactrouter.com/
- **Vite**: https://vitejs.dev/
- **Emotion (Styling)**: https://emotion.sh/

### Useful Guides

- **Material-UI Templates**: https://mui.com/material-ui/getting-started/templates/
- **React Hooks**: https://react.dev/reference/react
- **CSS-in-JS with Emotion**: https://emotion.sh/docs/introduction

### Project-Specific Documentation

- **LIGHT_MODE_IMPLEMENTATION_GUIDE.md** - Detailed guide for implementing light mode support
- **README.md** - Project overview and basic information

### Design Resources

- **MUI Components**: https://mui.com/material-ui/all-components/
- **MUI Icons**: https://mui.com/material-ui/material-icons/
- **Color Palette Tool**: https://mui.com/material-ui/customization/color/

### Code Examples

Look at existing components for patterns:
- **Simple page**: `src/pages/About.jsx`
- **Complex page**: `src/pages/Home.jsx`
- **Reusable component**: `src/components/Features.jsx`
- **Styled component**: `src/components/Hero.jsx`
- **Theme usage**: `src/theme/AppTheme.jsx`

---

## 🎓 Best Practices Summary

### Do's ✅
- Write descriptive commit messages
- Test changes on multiple screen sizes
- Keep components small and focused
- Use MUI components when possible
- Comment complex logic
- Follow existing code patterns
- Ask for help when stuck

### Don'ts ❌
- Commit directly to main branch
- Push without testing locally
- Ignore console warnings/errors
- Create overly large components
- Hardcode values that should be in theme
- Copy-paste large code blocks without understanding
- Leave debugging code (console.logs) in production

---

## 🤝 Team Collaboration Tips

1. **Communicate Early**: 
   - If you're unsure about an approach, ask before implementing
   - Share your progress in team updates

2. **Code Reviews**:
   - Be constructive and respectful
   - Ask questions to understand intent
   - Suggest improvements, don't demand changes

3. **Documentation**:
   - Update this guide if you find gaps
   - Document complex features you add
   - Add comments for tricky code

4. **Stay Consistent**:
   - Follow the established patterns
   - Match the existing code style
   - Use the same naming conventions

5. **Be Proactive**:
   - Update dependencies when needed
   - Fix bugs you encounter
   - Improve code quality incrementally

---

## 📧 Contact & Support

**Project Maintainer**: [Add name/email]
**Team Chat**: [Add Slack/Teams link]
**Issue Tracker**: [Add GitHub issues link]

---

## 🎉 Welcome Aboard!

You're now ready to start contributing to Chosen Technologies! Remember:
- Start small and build confidence
- Don't be afraid to ask questions
- Learn from existing code
- Test thoroughly before submitting
- Have fun building! 🚀

Happy coding! 💻✨