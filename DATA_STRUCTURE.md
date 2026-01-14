# Data Structure Documentation

## Overview

All portfolio content is centralized in the `/src/data` directory. This makes it easy to:
- Update content without touching component code
- Replace mock data with API calls or CMS data later
- Maintain consistency across the application
- Type-safe with TypeScript interfaces

## Data Files

### `profile.ts`
Contains personal information and social links.

**Structure:**
```typescript
{
  name: string;
  title: string;
  tagline: string;
  bio: string;
  shortBio: string;
  avatar: string;
  location: string;
  email: string;
  dateOfBirth: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email: string;
  };
}
```

**Usage:**
```typescript
import { profile } from '../data/profile';
// Use profile.name, profile.title, etc.
```

**Used in:**
- Home page (Hero section)
- App.tsx (Navbar and Footer)
- About page (bio section)

---

### `skills.ts`
Contains technical skills organized by category.

**Structure:**
```typescript
[
  {
    name: 'Frontend',
    skills: [
      {
        name: 'React',
        level: 'expert' | 'advanced' | 'intermediate' | 'beginner',
        icon?: string;
      }
    ]
  }
]
```

**Usage:**
```typescript
import { skills } from '../data/skills';
// skills is an array of SkillCategory
```

**Used in:**
- About page (skills section)

---

### `projects.ts`
Contains portfolio projects with details.

**Structure:**
```typescript
[
  {
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
  }
]
```

**Helper Functions:**
- `getFeaturedProjects()` - Returns only featured projects
- `getProjectById(id)` - Returns a specific project

**Usage:**
```typescript
import { projects, getFeaturedProjects } from '../data/projects';
// Use projects array or getFeaturedProjects() for homepage
```

**Used in:**
- Home page (projects preview)
- Projects page (all projects)

---

### `experience.ts`
Contains work experience and career history.

**Structure:**
```typescript
[
  {
    id: string;
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string | 'Present';
    description: string[];
    technologies: string[];
  }
]
```

**Usage:**
```typescript
import { experience } from '../data/experience';
// experience is an array of Experience
```

**Used in:**
- About page (experience section)

---

## How to Update Content

### Update Profile Information
Edit `src/data/profile.ts`:
```typescript
export const profile: Profile = {
  name: 'Your Name',
  title: 'Your Title',
  // ... update other fields
};
```

### Add a New Project
Edit `src/data/projects.ts`:
```typescript
export const projects: Project[] = [
  // ... existing projects
  {
    id: '7',
    title: 'New Project',
    description: 'Project description',
    // ... other fields
  },
];
```

### Update Skills
Edit `src/data/skills.ts`:
```typescript
export const skills: SkillCategory[] = [
  {
    name: 'New Category',
    skills: [
      { name: 'Skill Name', level: 'advanced' },
    ],
  },
];
```

### Add Work Experience
Edit `src/data/experience.ts`:
```typescript
export const experience: Experience[] = [
  // ... existing experience
  {
    id: '4',
    company: 'New Company',
    position: 'Position Title',
    // ... other fields
  },
];
```

## Replacing with Real Data

### Option 1: API Integration
1. Create API service files in `src/services/`
2. Replace imports:
```typescript
// Before
import { profile } from '../data/profile';

// After
import { fetchProfile } from '../services/api';
const profile = await fetchProfile();
```

### Option 2: CMS Integration
1. Install CMS SDK (e.g., Contentful, Sanity)
2. Create data fetching functions
3. Replace static imports with API calls

### Option 3: Environment Variables
For sensitive data (email, API keys):
1. Use `.env` file
2. Access via `import.meta.env.VITE_*`
3. Keep structure in data files, values from env

## Best Practices

1. **Keep Structure Consistent**: Maintain the same data structure even when switching to APIs
2. **Type Safety**: Always use TypeScript interfaces
3. **Default Values**: Provide sensible defaults for optional fields
4. **Validation**: Consider adding runtime validation (Zod, Yup)
5. **Version Control**: Keep data files in git, but consider `.env` for secrets

## Migration Path

When ready to move from mock data to real data:

1. **Phase 1**: Keep data files, add API service layer
2. **Phase 2**: Create data fetching hooks (useProfile, useProjects, etc.)
3. **Phase 3**: Replace direct imports with hooks
4. **Phase 4**: Add loading states and error handling
5. **Phase 5**: Remove mock data files (or keep as fallback)

This approach allows gradual migration without breaking changes.

