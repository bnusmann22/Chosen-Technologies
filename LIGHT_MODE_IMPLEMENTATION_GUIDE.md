# 🌈 Chosen Technologies - Light Mode Implementation Guide

**Project**: Chosen Technologies Marketing Website  
**Framework**: React + Material-UI (MUI)  
**Styling System**: Emotion (CSS-in-JS) with MUI CSS Variables  
**Current Status**: Dark Mode Forced ✨  
**Task**: Implement Light Mode Support 💡

---

## 📋 Table of Contents

1. [Project Architecture Overview](#architecture)
2. [Color Scheme Deep Dive](#color-scheme)
3. [Theming System Explained](#theming-system)
4. [How Light/Dark Mode Works](#how-it-works)
5. [Component-by-Component Implementation](#components)
6. [Pages Implementation](#pages)
7. [Testing Checklist](#testing)
8. [Common Patterns & Examples](#patterns)
9. [Troubleshooting](#troubleshooting)

---

## 🏗️ Project Architecture Overview {#architecture}

### Technology Stack
- **React Framework**: React 18+
- **UI Library**: Material-UI v6+ (with CSS Variables support)
- **Styling**: Emotion (@emotion/react, @emotion/styled)
- **Routing**: React Router v7+
- **Theme Management**: MUI ThemeProvider with CSS Variables

### Key Files
```
src/
├── theme/
│   ├── AppTheme.jsx                 ← Main theme wrapper (Entry point for light mode)
│   ├── themePrimitives.js          ← Color definitions & palette config
│   └── customizations/
│       ├── surfaces.js              ← Cards, papers, containers
│       ├── inputs.jsx               ← Buttons, inputs, forms
│       ├── dataDisplay.js           ← Lists, chips, tables
│       ├── feedback.js              ← Alerts, dialogs, snackbars
│       └── navigation.jsx           ← Appbar, menu, navigation
├── components/                      ← Reusable components
├── pages/                           ← Full page layouts
└── context/
    └── PageTransitionContext.jsx    ← Global state (NOT theme-related)
```

---

## 🎨 Color Scheme Deep Dive {#color-scheme}

### Primary Color Palette

#### Brand Blue (Primary)
Used for CTAs, primary actions, and accents
```javascript
// HSL Color Space (Hue, Saturation, Lightness)
{
  50: 'hsl(210, 100%, 95%)',    // Very light
  100: 'hsl(210, 100%, 92%)',   // Light
  200: 'hsl(210, 100%, 80%)',   // Light Medium
  300: 'hsl(210, 100%, 65%)',   // Medium Light
  400: 'hsl(210, 98%, 48%)',    // PRIMARY - Main brand color
  500: 'hsl(210, 98%, 42%)',    // Darker shade
  600: 'hsl(210, 98%, 55%)',    // Alternative shade
  700: 'hsl(210, 100%, 35%)',   // Dark
  800: 'hsl(210, 100%, 16%)',   // Very Dark
  900: 'hsl(210, 100%, 21%)',   // Darkest
}
```

#### Gray Neutrals (Text, Backgrounds, Borders)
```javascript
{
  50: 'hsl(220, 35%, 97%)',     // Almost white (light mode background)
  100: 'hsl(220, 30%, 94%)',    // Off-white
  200: 'hsl(220, 20%, 88%)',    // Light gray (light mode borders)
  300: 'hsl(220, 20%, 80%)',    // Light-medium gray
  400: 'hsl(220, 20%, 65%)',    // Medium gray
  500: 'hsl(220, 20%, 42%)',    // Medium-dark gray
  600: 'hsl(220, 20%, 35%)',    // Dark gray
  700: 'hsl(220, 20%, 25%)',    // Darker gray
  800: 'hsl(220, 30%, 6%)',     // Very dark (dark mode background)
  900: 'hsl(220, 35%, 3%)',     // Darkest (dark mode deep)
}
```

#### Semantic Colors
```javascript
Success:  hsl(120, ...) // Green
Warning:  hsl(45, ...)  // Orange
Error:    hsl(0, ...)   // Red
Info:     hsl(210, ...) // Blue variants
```

### Light vs Dark Mode Breakdown

#### 🌅 Light Mode Colors

| Element | Color | HSL | Token |
|---------|-------|-----|-------|
| Background (Page) | Off-white | hsl(0, 0%, 99%) | `palette.background.default` |
| Background (Paper/Card) | Light gray | hsl(220, 35%, 97%) | `palette.background.paper` |
| Text (Primary) | Very Dark Gray | hsl(220, 30%, 6%) | `palette.text.primary` |
| Text (Secondary) | Medium Gray | hsl(220, 20%, 35%) | `palette.text.secondary` |
| Borders | Light Gray | hsl(220, 20%, 80%) | `palette.divider` |
| Shadows | Soft Dark | rgba(0,0,0,0.07) | Custom shadow |

#### 🌙 Dark Mode Colors

| Element | Color | HSL | Token |
|---------|-------|-----|-------|
| Background (Page) | Almost Black | hsl(220, 35%, 3%) | `palette.background.default` |
| Background (Paper/Card) | Very Dark Blue | hsl(220, 30%, 7%) | `palette.background.paper` |
| Text (Primary) | White | hsl(0, 0%, 100%) | `palette.text.primary` |
| Text (Secondary) | Light Gray | hsl(220, 20%, 42%) | `palette.text.secondary` |
| Borders | Dark Gray | hsl(220, 20%, 25%) | `palette.divider` |
| Shadows | Heavy Dark | rgba(0,0,0,0.7) | Custom shadow |

---

## 🎭 Theming System Explained {#theming-system}

### How MUI CSS Variables Work

MUI uses **CSS custom properties** (variables) to switch themes without re-rendering:

```javascript
// In themePrimitives.js - Variables are defined here
cssVariables: {
  colorSchemeSelector: 'data-mui-color-scheme',  // HTML attribute for switching
  cssVarPrefix: 'template',                       // Prefix: --template-*
}

// In HTML, the attribute controls the theme:
// Light mode:  <html data-mui-color-scheme="light">
// Dark mode:   <html data-mui-color-scheme="dark">
```

### Current Setup (Forced Dark Mode)

In [AppTheme.jsx](src/theme/AppTheme.jsx):
```jsx
React.useEffect(() => {
  // 🔴 This line FORCES dark mode
  document.documentElement.setAttribute('data-mui-color-scheme', 'dark');
}, []);
```

---

## 🔄 How Light/Dark Mode Works {#how-it-works}

### Step 1: Theme Definition (themePrimitives.js)

Two **complete** color schemes are defined:

```javascript
export const colorSchemes = {
  light: {
    palette: {
      primary: { light: brand[200], main: brand[400], dark: brand[700] },
      background: { default: 'hsl(0, 0%, 99%)', paper: 'hsl(220, 35%, 97%)' },
      text: { primary: gray[800], secondary: gray[600] },
      // ... all semantic colors for light mode
    }
  },
  dark: {
    palette: {
      primary: { light: brand[300], main: brand[400], dark: brand[700] },
      background: { default: gray[900], paper: 'hsl(220, 30%, 7%)' },
      text: { primary: 'hsl(0, 0%, 100%)', secondary: gray[400] },
      // ... all semantic colors for dark mode
    }
  }
}
```

### Step 2: Theme Application (AppTheme.jsx)

```jsx
const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-mui-color-scheme',  // Watches this HTML attribute
    cssVarPrefix: 'template',
  },
  colorSchemes,  // light and dark palettes
  // ... typography, shadows, components customizations
})
```

### Step 3: Component Usage

All style values use **CSS variables** with theme intent:

```jsx
// Instead of hard-coded colors:
backgroundColor: '#ffffff'

// Use theme tokens:
backgroundColor: theme.palette.background.paper
// OR with applyStyles for explicit light/dark handling:
...theme.applyStyles('dark', { backgroundColor: gray[800] })
```

### Step 4: Switching Modes (What You Need to Implement)

```javascript
// To toggle to light mode:
document.documentElement.setAttribute('data-mui-color-scheme', 'light');

// To toggle to dark mode:
document.documentElement.setAttribute('data-mui-color-scheme', 'dark');

// To toggle between modes:
const toggleMode = () => {
  const current = document.documentElement.getAttribute('data-mui-color-scheme');
  const newMode = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-mui-color-scheme', newMode);
}
```

---

## 🧩 Component-by-Component Implementation {#components}

### Key Pattern: `theme.applyStyles()`

This is the **universal pattern** for mode-specific styling across ALL components:

```jsx
// Example from Features.jsx
const FeatureCard = styled(Box)(({ theme }) => ({
  // Light mode styles (default)
  backgroundColor: alpha(theme.palette.primary.main, 0.08),
  borderColor: theme.palette.divider,
  
  // Dark mode overrides
  ...theme.applyStyles('dark', {
    backgroundColor: alpha(theme.palette.primary.main, 0.12),
    borderColor: theme.palette.divider,
  }),
}));
```

---

### Component Inventory

#### 1️⃣ **Hero.jsx** - Landing Hero Section

**Current Dark Mode Colors:**
- Background: Radial gradient from `hsl(210, 100%, 16%)` to transparent
- Text: White
- Image border: `gray[700]`
- Box shadow: `0 0 24px 12px hsla(210, 100%, 25%, 0.2)`

**Light Mode Implementation:**
```jsx
// Replace dark gradient with light gradient
backgroundImage:
  'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',

// Update styled component
...theme.applyStyles('light', {
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  borderColor: theme.palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  // Use different light mode background image
  backgroundImage: `url(${templateImageUrl}/static/screenshots/material-ui/getting-started/templates/dashboard.jpg)`,
})
```

**Checklist:**
- [ ] Update radial gradient colors
- [ ] Check image backgrounds
- [ ] Verify button contrast
- [ ] Test shadow visibility
- [ ] Ensure text is readable

---

#### 2️⃣ **Features.jsx** - Feature Cards Grid

**Key Elements:**
- Section heading: Hard-coded `#ffffff` (white) - **MUST CHANGE**
- Feature cards: Semi-transparent primary color background
- Grid gaps: Should adapt
- Animations: Same in both modes

**Light Mode Implementation:**
```jsx
// SectionHeading - Change from hardcoded white
const SectionHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,  // Will be dark gray in light mode
  ...theme.applyStyles('dark', {
    color: '#ffffff',  // Keep white in dark mode
  }),
}));

// SectionSub text
const SectionSub = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  ...theme.applyStyles('dark', {
    color: '#ffffff',
  }),
}));

// FeatureCard backgrounds
const FeatureCard = styled(Box)(({ theme }) => ({
  // Light mode
  backgroundColor: alpha(theme.palette.primary.main, 0.06),
  borderColor: theme.palette.divider,
  ...theme.applyStyles('dark', {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    borderColor: alpha(theme.palette.primary.main, 0.3),
  }),
}));
```

**Checklist:**
- [ ] Find all hard-coded `#ffffff` and replace with theme tokens
- [ ] Adjust card background opacity for light mode
- [ ] Update border colors
- [ ] Test card hover states
- [ ] Verify icon colors on cards
- [ ] Check readability of all text

---

#### 3️⃣ **Testimonials.jsx** - User Testimonials

**Elements:**
- Testimonial cards
- User avatars
- Quote marks (icons)
- Rating stars

**Light Mode Pattern:**
```jsx
const TestimonialCard = styled(Card)(({ theme }) => ({
  // Light mode defaults
  backgroundColor: theme.palette.background.paper,
  borderColor: theme.palette.divider,
  
  ...theme.applyStyles('dark', {
    backgroundColor: alpha(gray[800], 0.5),
    borderColor: alpha(brand[400], 0.3),
  }),
}));
```

**Checklist:**
- [ ] Card backgrounds use `palette.background.paper`
- [ ] Borders use `palette.divider`
- [ ] Icons use `palette.text.primary` or `palette.text.secondary`
- [ ] Avatar components auto-scale (MUI handles this)
- [ ] Star ratings visible in both modes

---

#### 4️⃣ **Highlights.jsx** - Product Highlights

**Pattern:** Image cards with overlays

**Light Mode Consideration:**
- Overlays might need opacity adjustment
- Image visibility on light background
- Text contrast on images

```jsx
const HighlightCard = styled(Card)(({ theme }) => ({
  ...theme.applyStyles('light', {
    backgroundColor: theme.palette.background.paper,
    // Adjust overlay opacity for light mode
    '&::before': {
      background: 'rgba(0, 0, 0, 0.3)',  // Less dark overlay on light
    },
  }),
  ...theme.applyStyles('dark', {
    backgroundColor: alpha(gray[800], 0.6),
    '&::before': {
      background: 'rgba(0, 0, 0, 0.6)',
    },
  }),
}));
```

**Checklist:**
- [ ] Image overlays readable on light background
- [ ] Text contrast meets WCAG standards
- [ ] Shadows/borders visible
- [ ] Hover effects clear in both modes

---

#### 5️⃣ **Pricing.jsx** - Pricing Cards & Tables

**Elements:**
- Card containers
- Price display
- Feature lists
- Call-to-action buttons
- Highlighted/recommended badge

**Light Mode:**
```jsx
const PricingCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderColor: theme.palette.divider,
  
  ...theme.applyStyles('light', {
    // Recommended card might need highlight
    '&.recommended': {
      backgroundColor: alpha(theme.palette.primary.main, 0.04),
      borderColor: theme.palette.primary.light,
    },
  }),
  ...theme.applyStyles('dark', {
    '&.recommended': {
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
      borderColor: theme.palette.primary.main,
    },
  }),
}));
```

**Checklist:**
- [ ] Card backgrounds
- [ ] Table borders
- [ ] Price currency symbol color
- [ ] Feature checkmarks/crosses color
- [ ] Button color contrast
- [ ] Recommended card highlighting

---

#### 6️⃣ **Team.jsx** - Team Members Grid

**Elements:**
- Team member cards
- Avatar images
- Name/role text
- Social links

**Light Mode:**
```jsx
const TeamMemberCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.04),
    ...theme.applyStyles('dark', {
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
    }),
  },
}));
```

**Checklist:**
- [ ] Card hover states
- [ ] Text readability
- [ ] Social icon colors
- [ ] Avatar contrast
- [ ] Name/title color hierarchy

---

#### 7️⃣ **FAQ.jsx** - Accordion Component

**Elements:**
- Accordion headers
- Expanded/collapsed states
- Content text
- Icons/indicators

**Light Mode Configuration:**

MUI Accordion customization is in [surfaces.js](src/theme/customizations/surfaces.js):

```javascript
MuiAccordion: {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.background.default,
      borderColor: theme.palette.divider,
      ...theme.applyStyles('light', {
        '&:hover': {
          backgroundColor: alpha(theme.palette.action.hover, 0.3),
        },
      }),
      ...theme.applyStyles('dark', {
        '&:hover': {
          backgroundColor: alpha(gray[800], 0.4),
        },
      }),
    }),
  },
}
```

**Checklist:**
- [ ] Header background contrast
- [ ] Expansion icon color
- [ ] Content area background
- [ ] Hover state visibility
- [ ] Divider visibility
- [ ] Text color & readability

---

### General Component Strategy

**For EVERY component, follow this checklist:**

1. **Identify hard-coded colors** - Search for hex codes like `#ffffff`, `#000000`
2. **Replace with theme tokens** - Use `theme.palette.*` instead
3. **Add mode-specific overrides** - Wrap dark mode styles in `theme.applyStyles('dark', {...})`
4. **Test contrast** - Ensure text is readable in both light and dark modes
5. **Check hover/focus states** - Buttons and interactive elements need visible states in both modes
6. **Verify shadows** - Shadows should adapt (lighter on light, darker on dark)
7. **Test responsiveness** - Light/dark mode changes shouldn't break layouts

---

## 📄 Pages Implementation {#pages}

### Pages Directory Structure
```
pages/
├── Home.jsx              ← Composition of all hero/features/etc
├── Features.jsx          ← Features details page
├── Pricing.jsx           ← Full pricing page
├── Team.jsx              ← Team members page
├── Testimonials.jsx      ← Customer testimonials
├── Highlights.jsx        ← Product highlights
├── FAQ.jsx               ← FAQ page
├── Blog.jsx              ← Blog listing
├── SuccessStories.jsx    ← Case studies
├── About.jsx             ← About company
├── Mission.jsx           ← Mission statement
├── Pioneers.jsx          ← Pioneer profiles
├── Careers.jsx           ← Careers page
├── Contact.jsx           ← Contact form
├── Privacy.jsx           ← Privacy policy
└── Terms.jsx             ← Terms of service
```

### Pages Implementation Approach

**Pages are compositions of components** - they generally don't need major changes IF components are properly themed. However, some pages have custom styling:

**Example: Contact.jsx**
```jsx
const ContactSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  
  ...theme.applyStyles('light', {
    // Light mode specific adjustments if needed
  }),
  ...theme.applyStyles('dark', {
    // Dark mode specific adjustments
  }),
}));
```

**Checklist for all pages:**
- [ ] Replace component children (components handle their own theming)
- [ ] Check section backgrounds
- [ ] Verify text colors
- [ ] Test form inputs (handled by inputs customization)
- [ ] Check divider colors
- [ ] Verify footer appearance

---

## 🧪 Testing Checklist {#testing}

### Phase 1: Enable Light Mode (Unlock Feature)

**In [AppTheme.jsx](src/theme/AppTheme.jsx), modify:**

```jsx
// CHANGE FROM:
React.useEffect(() => {
  document.documentElement.setAttribute('data-mui-color-scheme', 'dark');
}, []);

// CHANGE TO (allow both modes):
// Remove the hard-coded dark mode, let user choose or use browser preference
React.useEffect(() => {
  // Try to get user preference from localStorage or system
  const stored = localStorage.getItem('theme-mode');
  const preferred = stored || 'light';  // or detect system preference
  document.documentElement.setAttribute('data-mui-color-scheme', preferred);
}, []);
```

### Phase 2: Visual Testing

#### Light Mode Verification

**Hero Section:**
- [ ] Background gradient is light blue → transparent
- [ ] Text is dark and readable
- [ ] Screenshot images visible
- [ ] Buttons have sufficient contrast
- [ ] Cards have clear borders

**Features Section:**
- [ ] Section titles are dark
- [ ] Feature cards are light with subtle borders
- [ ] Icons are visible
- [ ] Hover effects work

**Color Palette Check:**
```
✅ Page background: Almost white (hsl(0, 0%, 99%))
✅ Card/paper background: Light gray (hsl(220, 35%, 97%))
✅ Text primary: Dark gray (hsl(220, 30%, 6%))
✅ Text secondary: Medium gray (hsl(220, 20%, 35%))
✅ Borders: Light gray (hsl(220, 20%, 80%))
✅ Primary accents: Brand blue (hsl(210, 98%, 48%))
```

#### Dark Mode Verification

**Should still work perfectly:**
```
✅ Page background: Almost black (hsl(220, 35%, 3%))
✅ Card/paper background: Very dark blue (hsl(220, 30%, 7%))
✅ Text primary: White (hsl(0, 0%, 100%))
✅ Text secondary: Light gray (hsl(220, 20%, 42%))
✅ Borders: Dark gray (hsl(220, 20%, 25%))
✅ Primary accents: Brand blue (hsl(210, 98%, 48%))
```

### Phase 3: Component Testing

Test these interactions in BOTH light and dark modes:

**Buttons:**
- [ ] Primary button text readable
- [ ] Hover state visible
- [ ] Active/pressed state visible
- [ ] Disabled buttons obvious

**Form Inputs:**
- [ ] Input fields have visible borders
- [ ] Placeholder text visible
- [ ] Focus ring visible (blue outline)
- [ ] Error states visible
- [ ] Success states visible

**Navigation:**
- [ ] AppBar content visible
- [ ] Links understandable
- [ ] Current page indicator clear
- [ ] Mobile menu works

**Cards:**
- [ ] Shadows visible (but not overwhelming)
- [ ] Content readable
- [ ] Hover effects clear
- [ ] Borders visible

**Typography:**
- [ ] All heading levels readable
- [ ] Body text comfortable
- [ ] Captions/small text legible
- [ ] Links have contrast

### Phase 4: Accessibility Testing

**Light Mode:**
- [ ] Contrast ratio at least 4.5:1 for normal text (WCAG AA)
- [ ] Contrast ratio at least 3:1 for large text (18pt+)
- [ ] Headings distinguishable from body text
- [ ] Interactive elements have focus indicators

**Dark Mode:**
- [ ] Same contrast requirements met
- [ ] No eye strain from too-bright elements
- [ ] Shadows aren't lost

### Phase 5: Cross-Browser Testing

Even though it's CSS variables (broad support):
- [ ] Chrome/Edge: ✅
- [ ] Firefox: ✅
- [ ] Safari: ✅
- [ ] Mobile browsers: ✅

---

## 💡 Common Patterns & Examples {#patterns}

### Pattern 1: Hard-coded Color → Theme Token

**❌ WRONG:**
```jsx
const Box = styled('div')({
  backgroundColor: '#ffffff',
  color: '#000000',
});
```

**✅ CORRECT:**
```jsx
const Box = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
}));
```

---

### Pattern 2: Dark Mode Only Styles

**For elements that look different in light/dark:**

```jsx
const Card = styled(MuiCard)(({ theme }) => ({
  // Light mode (default)
  backgroundColor: theme.palette.background.paper,     // hsl(220, 35%, 97%)
  borderColor: theme.palette.divider,                   // hsl(220, 20%, 80%)
  boxShadow: theme.shadows[1],
  
  // Dark mode overrides
  ...theme.applyStyles('dark', {
    backgroundColor: 'hsl(220, 30%, 7%)',
    borderColor: alpha(theme.palette.primary.main, 0.3),
    boxShadow: theme.shadows[1],  // Already accounts for mode
  }),
}));
```

---

### Pattern 3: Gradient Backgrounds

**Light Mode Gradients:**
```jsx
const GradientBox = styled(Box)(({ theme }) => ({
  backgroundImage: 'linear-gradient(135deg, hsl(210, 100%, 95%), hsl(210, 100%, 85%))',
  ...theme.applyStyles('dark', {
    backgroundImage: 'linear-gradient(135deg, hsl(210, 100%, 16%), hsl(210, 100%, 10%))',
  }),
}));
```

---

### Pattern 4: Hover States with Mode Awareness

```jsx
const InteractiveButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  transition: 'all 200ms ease',
  
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
  
  ...theme.applyStyles('dark', {
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.15),
    },
  }),
}));
```

---

### Pattern 5: Images with Dark Mode Alternatives

```jsx
const StyledImage = styled('img')(({ theme }) => ({
  // Same image in light and dark? No problem
  width: '100%',
  borderRadius: theme.shape.borderRadius,
  
  ...theme.applyStyles('dark', {
    // Or use different images for each mode
    content: 'url(/images/screenshot-dark.png)',
  }),
}));
```

---

### Pattern 6: Alpha/Transparency Handling

```jsx
// Using alpha() function properly
import { alpha } from '@mui/material/styles';

const SemiTransparent = styled(Box)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.08),  // 8% opacity
  
  ...theme.applyStyles('dark', {
    backgroundColor: alpha(theme.palette.primary.main, 0.12),  // Slightly more visible in dark
  }),
}));
```

---

## 🔧 Troubleshooting {#troubleshooting}

### Issue 1: Text Invisible in Light Mode

**Symptom:** Text can't be read on light background in light mode

**Solution:**
```jsx
// ❌ Wrong - always uses light color
color: '#ffffff'

// ✅ Correct - uses theme colors
color: theme.palette.text.primary
```

### Issue 2: Borders Disappear in Light Mode

**Symptom:** Dividers and borders invisible on light background

**Solution:**
```jsx
// ❌ Wrong - hard-coded dark border
borderColor: '#333333'

// ✅ Correct
borderColor: theme.palette.divider
```

### Issue 3: Cards Blend Into Background

**Symptom:** Light cards invisible on light background

**Solution:**
```jsx
// ✅ Use different colors with proper contrast
backgroundColor: theme.palette.background.paper,    // Lighter shade than default
borderColor: theme.palette.divider,                  // Subtle border for separation
boxShadow: theme.shadows[1],                        // Subtle shadow
```

### Issue 4: Images Too Dark/Bright

**Symptom:** Screenshot images have poor visibility in one mode

**Solution:**
```jsx
// ✅ Use overlays or mode-specific images
...theme.applyStyles('light', {
  backgroundImage: 'url(/dashboard-light.jpg)',
}),
...theme.applyStyles('dark', {
  backgroundImage: 'url(/dashboard-dark.jpg)',
}),
```

### Issue 5: Shadows Invisible in Light Mode

**Symptom:** Depth/elevation lost in light mode

**Solution:**
```jsx
// ✅ Shadows already mode-aware, but you can adjust:
boxShadow: theme.shadows[2],  // Automatically lighter in light mode

// Or custom:
...theme.applyStyles('light', {
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
}),
...theme.applyStyles('dark', {
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
}),
```

### Issue 6: Color Scheme Not Switching

**Symptom:** Mode toggle doesn't update UI

**Check:**
1. Is the HTML attribute being set?
   ```javascript
   console.log(document.documentElement.getAttribute('data-mui-color-scheme'));
   ```
2. Does theme exist in component?
   ```jsx
   const { theme } = useTheme();
   ```
3. Is component wrapped in `ThemeProvider`? (It should be in App.jsx)

---

## 📋 Implementation Checklist

### Stage 1: Setup ✅
- [ ] Understand color palette (colorSchemes in themePrimitives.js)
- [ ] Review AppTheme.jsx current setup
- [ ] Review Material-UI theming docs

### Stage 2: Remove Dark Mode Lock
- [ ] Remove hard-coded `document.documentElement.setAttribute('data-mui-color-scheme', 'dark')` from AppTheme.jsx
- [ ] Replace with mode detection logic (localStorage or system preference)

### Stage 3: Component Updates (Priority Order)

**High Priority (User-facing):**
- [ ] Hero.jsx - Landing section
- [ ] Features.jsx - Feature cards
- [ ] Navigation components (AppAppBar.jsx)
- [ ] Footer.jsx
- [ ] Buttons (inputs customization)

**Medium Priority:**
- [ ] Pricing.jsx
- [ ] Testimonials.jsx
- [ ] Team.jsx
- [ ] Highlights.jsx
- [ ] Forms (Contact.jsx)

**Lower Priority:**
- [ ] Blog.jsx
- [ ] SuccessStories.jsx
- [ ] About.jsx / Mission.jsx
- [ ] FAQ.jsx
- [ ] Policy pages (Privacy, Terms)

### Stage 4: Testing
- [ ] Test light mode visually
- [ ] Test dark mode (ensure nothing broke)
- [ ] Check all interactive elements
- [ ] Accessibility audit
- [ ] Cross-browser testing

### Stage 5: Polish
- [ ] Theme toggle UI (if needed)
- [ ] Save user preference
- [ ] System preference detection
- [ ] Performance optimization
- [ ] Final visual review

---

## 🎯 Quick Reference

### Most Important Color Tokens

```javascript
// ALWAYS use these instead of hard-coded colors:

// Backgrounds
theme.palette.background.default    // Page background
theme.palette.background.paper      // Cards, panels

// Text
theme.palette.text.primary          // Main text
theme.palette.text.secondary        // Secondary text (help text, etc)
theme.palette.text.disabled         // Disabled text

// Semantic Colors
theme.palette.primary.main          // Primary brand color
theme.palette.error.main            // Error/danger
theme.palette.warning.main          // Warnings
theme.palette.success.main          // Success
theme.palette.info.main             // Information

// Utilities
theme.palette.divider               // Borders, dividers
theme.palette.action.hover          // Hover backgrounds
theme.palette.action.selected       // Selected backgrounds
theme.palette.grey[*]               // Gray scale (50-900)
```

### Mode-Specific Styling Template

```jsx
const StyledComponent = styled(BaseComponent)(({ theme }) => ({
  // Default style (applied to both light and dark initially)
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
  
  // Dark mode specific overrides
  ...theme.applyStyles('dark', {
    // Values that differ in dark mode
    backgroundColor: 'hsl(220, 30%, 7%)',
    borderColor: alpha(theme.palette.primary.main, 0.3),
  }),
}));
```

---

## 📚 Bonus: File References

### Configuration Files
- **[src/theme/AppTheme.jsx](src/theme/AppTheme.jsx)** - Theme provider, entry point
- **[src/theme/themePrimitives.js](src/theme/themePrimitives.js)** - Color definitions
- **[src/theme/customizations/](src/theme/customizations/)** - MUI component overrides

### Component Examples
- **[src/components/Hero.jsx](src/components/Hero.jsx)** - Good example of styled components
- **[src/components/Features.jsx](src/components/Features.jsx)** - Complex grid layout
- **[src/theme/customizations/surfaces.js](src/theme/customizations/surfaces.js)** - Card styling

### Pages to Reference
- **[src/pages/Home.jsx](src/pages/Home.jsx)** - Main page structure
- **[src/pages/Pricing.jsx](src/pages/Pricing.jsx)** - Table layouts (if exists)

---

## ✨ Final Notes

1. **All components inherit theming automatically** - if you update themePrimitives.js, changes ripple through
2. **Dark mode is already defined** - light mode is the missing piece
3. **CSS Variables handle the magic** - HTML attribute toggling is all you need
4. **Testing is key** - text readability is the main consideration in light mode
5. **Consistency matters** - follow the patterns you see in existing code

---

**Good luck! This is an excellent opportunity to make the site more accessible to users who prefer light mode. 🚀**
