# Design Guidelines: X-Drive Driving School Website

## Design Approach

**Selected Approach**: Reference-Based with Service Business Focus

Drawing inspiration from successful local service businesses and educational platforms that build trust and drive conversions. Key references include modern driving school websites, local service providers, and educational platforms that balance professionalism with approachability.

**Core Principles**:
- Trust and credibility through clean, professional presentation
- Clear conversion pathways with prominent CTAs
- Mobile-first responsive design
- Romanian language optimization with proper typography

## Typography System

**Font Selection**: 
- Primary: Inter or Poppins (Google Fonts) - modern, highly legible sans-serif
- Accent: Montserrat for headings - bold, confident presence

**Hierarchy**:
- Hero Headline: 3xl-5xl (mobile-desktop), font-bold, tracking-tight
- Section Headings: 2xl-4xl, font-bold
- Subsections: xl-2xl, font-semibold
- Body Text: base-lg, font-normal, leading-relaxed
- Buttons/CTAs: base-lg, font-semibold, uppercase tracking-wide
- Navigation: base, font-medium
- Footer/Small Text: sm, font-normal

## Layout System

**Spacing Primitives**: Consistent use of Tailwind units **2, 4, 6, 8, 12, 16, 20** for all spacing

**Container Strategy**:
- Full-width sections: `w-full` with inner `max-w-7xl mx-auto px-4 md:px-8`
- Content sections: `max-w-6xl mx-auto`
- Text-heavy content: `max-w-4xl mx-auto`

**Vertical Rhythm**:
- Section padding: `py-12 md:py-20 lg:py-24`
- Component spacing: `space-y-8 md:space-y-12`
- Card padding: `p-6 md:p-8`

**Grid Systems**:
- Hero: Single column, centered content
- Courses: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Features/Benefits: `grid-cols-1 md:grid-cols-2 gap-8`
- Pricing: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Footer: `grid-cols-1 md:grid-cols-4 gap-8`

## Component Library

### Navigation
**Fixed Header**: Sticky navigation with blur backdrop
- Logo (left), Navigation links (center), CTA button (right)
- Mobile: Hamburger menu with slide-in drawer
- Height: `h-16 md:h-20`
- Links spacing: `space-x-8`

### Hero Section (Acasă)
**Full-height impactful hero**: `min-h-screen` with driving school cars image
- Overlay gradient for text readability
- Centered content with slogan
- Primary CTA: "Înscrie-te Acum" (large, prominent)
- Secondary info: Trust indicators (years of experience, success rate)
- Scroll indicator at bottom

### About Section (Despre Noi)
**Two-column layout** on desktop, stacked on mobile
- Left: Compelling text about school, mission, values
- Right: Grid of instructor photos or facility images (2x2)
- Trust badges: Certified instructors, modern fleet, high pass rate
- Spacing: `gap-12 md:gap-16`

### Courses Section (Cursuri)
**Card-based layout**: Three course types in responsive grid
Each card includes:
- Icon or small image at top
- Course title (Categoria B, Ore Suplimentare, Curs Teoretic)
- Bullet points of what's included
- Duration and key details
- "Află Mai Multe" link
- Card styling: Rounded corners `rounded-xl`, subtle elevation

### Pricing Section (Tarife)
**Pricing card grid**: 2-3 package options
Each card contains:
- Package name
- Price (large, prominent typography)
- Feature list with checkmarks
- "Alege Pachetul" CTA button
- Recommended badge for featured package
- Card variations: Border accent for featured package

### Social Proof Section
**Testimonials carousel or grid**:
- 2-3 student testimonials
- Photo, name, rating stars
- Quote from student
- Rotation or static grid layout

### Contact Section (Contact)
**Split layout** on desktop:
- Left (60%): Contact form with fields:
  - Nume, Email, Telefon, Mesaj
  - Submit button: "Trimite Mesajul"
  - Form validation indicators
- Right (40%): Contact information card:
  - Address (Chiajna, București)
  - Phone number (clickable tel: link)
  - Email (clickable mailto: link)
  - Social media icons
  - Business hours
- Below split: Embedded Google Maps (full-width, `h-96`)

### Call-to-Action Sections
**Repeated throughout**: Strategic CTA placements
- After hero
- After courses section
- Before footer
- Format: Centered heading + subtext + prominent button
- Background: Contrasting section for visual break

### Footer
**Comprehensive multi-column footer**:
- Column 1: Logo + brief tagline
- Column 2: Quick links (Acasă, Despre, Cursuri, Tarife, Contact)
- Column 3: Contact info summary
- Column 4: Social media links + Newsletter signup
- Bottom bar: Copyright, Privacy policy, Terms
- Spacing: `py-12 md:py-16`

## Component Specifications

### Buttons
**Primary CTA**: Large, rounded `rounded-full`, padding `px-8 py-4`
**Secondary**: Medium, rounded `rounded-lg`, padding `px-6 py-3`
**Text Links**: Underline on hover, smooth transition

### Cards
- Rounded corners: `rounded-xl`
- Padding: `p-6 md:p-8`
- Subtle shadow or border
- Hover effect: Gentle lift `hover:scale-105` transition

### Forms
- Input fields: `rounded-lg`, padding `px-4 py-3`, border focus state
- Labels: Above inputs, `font-medium`, `mb-2`
- Error states: Border indication + message below field
- Success states: Checkmark indication

## Images

### Hero Image
**Large, high-quality photograph**:
- Driving school cars (preferably with X-Drive branding)
- Professional setting (training lot or street)
- Warm, welcoming atmosphere
- Image placement: Full background with overlay
- Optimized for mobile and desktop viewing

### Instructor/Team Photos
- Professional headshots or candid teaching moments
- 2-4 images in About section
- Square or portrait orientation
- Consistent styling across all photos

### Course Icons/Images
- Small illustrative images or icons for each course type
- Consistent style (line icons or filled illustrations)
- Placed at top of course cards

### Facility/Fleet Images
- Modern cars used for training
- Classroom facilities
- Training areas
- Used throughout site for visual interest

### Social Proof Images
- Student testimonial photos
- Success story images
- Graduation/certificate moments

## Responsive Breakpoints

**Mobile-first approach**:
- Base: 0-639px (mobile)
- sm: 640px+ (large mobile)
- md: 768px+ (tablet)
- lg: 1024px+ (desktop)
- xl: 1280px+ (large desktop)

**Mobile Optimizations**:
- Hamburger navigation below md breakpoint
- Single column layouts on mobile
- Touch-friendly button sizes (min `h-12`)
- Reduced padding/margins on mobile
- Stacked form layouts
- Simplified hero content on mobile

## Animations

**Minimal, purposeful motion**:
- Smooth page transitions: `transition-all duration-300`
- Button hover states: Gentle scale or background shift
- Card hover: Subtle lift effect
- Scroll-triggered fade-ins for sections (optional, subtle)
- Form input focus states
- Mobile menu slide-in animation

**Performance**: Keep animations lightweight, use CSS transforms over position changes