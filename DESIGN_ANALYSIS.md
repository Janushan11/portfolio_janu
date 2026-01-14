# Design Analysis & Component Structure Proposal

## Extracted Information from PDF
- **Name**: Kalaikumar Janushan
- **Date of Birth**: 1994-01-26
- **Portfolio Type**: Personal Portfolio

## Component Tree

```
App
└── MainLayout
    ├── Navbar
    │   ├── Logo/Brand
    │   ├── Navigation Links (Desktop)
    │   └── Mobile Menu Toggle
    │
    ├── Page Content (Outlet)
    │   └── Home Page
    │       ├── Hero Section
    │       │   ├── Hero Content (Text)
    │       │   ├── Hero Image/Avatar
    │       │   ├── CTA Buttons
    │       │   └── Social Links
    │       │
    │       ├── About Section (Preview)
    │       │   ├── Section Title
    │       │   ├── About Text
    │       │   └── Skills Preview
    │       │
    │       ├── Projects Section (Preview)
    │       │   ├── Section Title
    │       │   └── Project Cards (Grid)
    │       │       └── ProjectCard
    │       │           ├── Project Image
    │       │           ├── Project Title
    │       │           ├── Project Description
    │       │           ├── Tech Tags
    │       │           └── Project Links
    │       │
    │       └── Contact Section (Preview)
    │           ├── Section Title
    │           └── Contact CTA
    │
    │   └── About Page
    │       ├── About Hero
    │       ├── Bio Section
    │       ├── Skills Section
    │       │   └── SkillCategory
    │       │       └── SkillItem
    │       ├── Experience Section
    │       │   └── ExperienceCard
    │       └── Education Section
    │
    │   └── Projects Page
    │       ├── Page Header
    │       └── Projects Grid
    │           └── ProjectCard (Detailed)
    │
    │   └── Contact Page
    │       ├── Contact Form
    │       │   ├── FormField
    │       │   └── SubmitButton
    │       └── Contact Info
    │
    └── Footer
        ├── Social Links
        ├── Quick Links
        └── Copyright
```

## Section Breakdown

### Home Page Sections
1. **Hero Section**
   - Full-width hero with introduction
   - Name, title, tagline
   - Primary CTA buttons
   - Profile image/avatar
   - Social media links

2. **About Preview Section**
   - Brief introduction
   - Key highlights
   - Link to full About page

3. **Projects Preview Section**
   - Featured projects (3-6 items)
   - Project cards in grid layout
   - Link to full Projects page

4. **Contact CTA Section**
   - Call-to-action to contact
   - Link to Contact page

### About Page Sections
1. **About Hero** - Introduction header
2. **Bio Section** - Detailed biography
3. **Skills Section** - Technical skills organized by category
4. **Experience Section** - Work experience timeline
5. **Education Section** - Educational background

### Projects Page Sections
1. **Page Header** - Title and description
2. **Projects Grid** - All projects in card layout
3. **Filter/Tags** (optional) - Filter by technology

### Contact Page Sections
1. **Contact Form** - Name, email, message fields
2. **Contact Info** - Email, social links, location

## Reusable UI Components

### Base Components
- **Button** - Primary, secondary, outline variants
- **Card** - Container for content blocks
- **Section** - Page section wrapper with consistent spacing
- **Container** - Max-width container for content
- **Heading** - Typography components (H1, H2, H3)
- **Text** - Typography components (Body, Lead, Small)

### Feature Components
- **ProjectCard** - Displays project information
- **SkillItem** - Individual skill display
- **ExperienceCard** - Work experience entry
- **FormField** - Input field with label
- **SocialLinks** - Social media icon links
- **SectionTitle** - Consistent section heading style

## Data Structure Proposal

### Profile Data (`data/profile.ts`)
```typescript
{
  name: string;
  title: string;
  tagline: string;
  bio: string;
  avatar: string;
  location: string;
  email: string;
  dateOfBirth: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email: string;
  }
}
```

### Skills Data (`data/skills.ts`)
```typescript
{
  categories: Array<{
    name: string;
    skills: Array<{
      name: string;
      level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
      icon?: string;
    }>
  }>
}
```

### Projects Data (`data/projects.ts`)
```typescript
{
  projects: Array<{
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
    date: string;
  }>
}
```

### Experience Data (`data/experience.ts`)
```typescript
{
  experiences: Array<{
    id: string;
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string | 'Present';
    description: string[];
    technologies: string[];
  }>
}
```

## Component Hierarchy Decisions

### Why This Structure?
1. **Sections Folder** - Large page sections that may be reused (Hero, About, Projects)
2. **Components/UI** - Small, reusable UI primitives (Button, Card, etc.)
3. **Components/Feature** - Domain-specific components (ProjectCard, SkillItem)
4. **Data Folder** - Centralized data source for easy content management
5. **Single Home Page** - All sections on home, with dedicated pages for details

### Data-Driven Approach
- All content comes from data files
- Components receive props, no hardcoded content
- Easy to swap mock data for CMS/API later
- Type-safe with TypeScript interfaces

## Responsive Breakpoints Strategy
- Mobile: < 640px (default)
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1280px

## Color System Strategy
- Primary: Brand color (to be defined from Figma)
- Secondary: Accent color
- Neutral: Grays for text and backgrounds
- Semantic: Success, Error, Warning (if needed)

