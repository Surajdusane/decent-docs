import os
import re

# Full documentation structure
docs_structure = {
    "1. Project Setup": [
        "Installing Node.js and npm",
        "Creating your first Next.js app",
        "Understanding folder structure in Next.js",
        "Setting up TypeScript",
        "Installing Tailwind CSS",
        "ESLint and Prettier setup for code formatting",
        "Git initialization and best practices",
        "Creating a reusable components folder",
        "Project aliases"
    ],
    "2. Frontend Development": [
        "Pages and routing system in Next.js",
        "Layouts and nested layouts",
        "Tailwind CSS basics and component styling",
        "Building responsive design",
        "Conditional rendering",
        "Forms",
        "UI libraries",
        "Animations"
    ],
    "3. API & Backend Routes": [
        "Understanding API routes in Next.js",
        "Creating custom API endpoints",
        "File structure for REST-style APIs",
        "Working with req and res in API routes",
        "Sending JSON data",
        "Connecting backend API with frontend components",
        "Adding error handling to APIs",
        "Caching API responses"
    ],
    "4. State Management": [
        "When to use state vs context vs Redux vs Zustand",
        "React useState, useEffect, useReducer",
        "Lifting state up and prop drilling",
        "Global state using React Context",
        "Using Zustand or Jotai for simple state management"
    ],
    "5. Authentication & Authorization": [
        "How auth works",
        "Adding user auth with Clerk, Auth.js, or Firebase",
        "Creating sign-up and login pages",
        "Protecting routes",
        "Middleware for route protection",
        "Role-based access",
        "Social login integration"
    ],
    "6. Database Integration": [
        "Choosing a database",
        "Using Prisma ORM for PostgreSQL",
        "Database schema design and migrations",
        "Connecting Prisma to Next.js",
        "Creating models and relations",
        "Writing queries",
        "Seeding test data",
        "Query optimization with indexes"
    ],
    "7. API Consumption & Data Fetching": [
        "Fetching data using fetch, axios, swr, react-query",
        "getServerSideProps, getStaticProps, getInitialProps",
        "ISR (Incremental Static Regeneration)",
        "Client-side vs server-side fetching",
        "Loading states and skeleton components",
        "Error boundaries and fallback UI",
        "Optimizing large API responses"
    ],
    "8. CRUD Operations": [
        "Building forms with validation",
        "Connecting forms to backend",
        "Updating records",
        "Deleting records with confirmation modals",
        "Pagination and infinite scrolling",
        "Form validation and user feedback"
    ],
    "9. Sending Emails / Notifications": [
        "Setting up email sending",
        "Designing email templates",
        "Trigger emails on sign-up, password reset, etc.",
        "Webhook handling",
        "Toast notifications"
    ],
    "10. Testing & Debugging": [
        "Debugging with Chrome DevTools",
        "Logging (client and server)",
        "Writing unit tests using Jest",
        "Integration tests with Playwright or Cypress",
        "Test coverage reports",
        "Error monitoring with Sentry"
    ],
    "11. Environment Variables & Configuration": [
        "Creating .env files",
        "Using process.env safely",
        "Protecting sensitive keys",
        "Environment-based config"
    ],
    "12. Deployment & Hosting": [
        "Deployment options",
        "One-click deploy with Vercel",
        "Environment variables in Vercel",
        "Custom domains and SSL setup",
        "Redirects and rewrites in Next.js",
        "Connecting to database in production"
    ],
    "13. Analytics & Monitoring": [
        "Setting up analytics",
        "Track button clicks and page views",
        "Custom events using gtag",
        "Monitoring errors"
    ],
    "14. Performance Optimization": [
        "Image optimization with next/image",
        "Code splitting and lazy loading",
        "Reducing bundle size",
        "Static site generation vs SSR vs ISR",
        "Avoiding unnecessary re-renders",
        "Optimizing API response time",
        "Using CDN effectively"
    ],
    "15. SEO & Meta Tags": [
        "Setting meta tags with next/head",
        "Open Graph and Twitter card meta tags",
        "Creating sitemaps and robots.txt",
        "Schema markup",
        "Lighthouse SEO audits"
    ],
    "16. Internationalization (i18n)": [
        "Setting up Next.js i18n config",
        "Translating strings",
        "Dynamic routing for different languages",
        "Using i18next or next-intl"
    ],
    "17. Version Control and Team Collaboration": [
        "Using Git and GitHub",
        "Branching strategy",
        "Creating and reviewing pull requests",
        "GitHub issues and project boards",
        "CI/CD basics using GitHub Actions"
    ],
    "18. Third-Party Integrations": [
        "Payment Integration",
        "File Uploads",
        "Google Maps, Calendars",
        "Social Login",
        "APIs like SendGrid, Notion API, or OpenAI"
    ],
    "19. Monorepo & Advanced Setup (Optional)": [
        "Using TurboRepo",
        "Sharing code between apps",
        "Organizing packages",
        "TypeScript project references"
    ],
    "20. Best Projects": [
        "Project with tRPC",
    ]
}

# Helper to create file name slugs
def slugify(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')

# Root folder name
base_path = "C:/Users/suraj/Desktop/Prjojects/r/content/docs/"

# Create folders and files
for topic, subtopics in docs_structure.items():
    folder_name = re.sub(r'^[0-9]+\. ', '', topic).lower().replace(' ', '-')
    folder_path = os.path.join(base_path, folder_name)
    os.makedirs(folder_path, exist_ok=True)

    for sub in subtopics:
        file_name = slugify(sub) + ".mdx"
        file_path = os.path.join(folder_path, file_name)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(f"""---
title: {sub}
description: coming soon
---

## coming soon
""")

print("✅ All folders and files created with titles only (no description).")
