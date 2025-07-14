# UpSpeech Website

A modern, responsive landing page for UpSpeech - an AI-powered continuous care solution that helps people who stutter build fluency and confidence, one day at a time.

## About UpSpeech

UpSpeech is a revolutionary platform designed to bridge the gap between speech therapy sessions. It provides:

- **Continuous Support**: Smart, daily training companion that helps patients maintain consistency in their practice
- **Progress Tracking**: Automated reports and data dashboards for therapists to track patient progress
- **Real-time Insights**: Visibility into practice consistency and quality between sessions
- **Personalized Care**: Adaptive practice plans based on patient performance and variability
- **Enhanced Engagement**: Higher patient motivation through gamification and emotional nudges
- **Improved Accessibility**: Extending care beyond geographic and economic limits

## Project Overview

This landing page was initially developed using Lovable and has been enhanced with custom improvements. It's built with:

- React + TypeScript
- Vite for bundling and development
- TailwindCSS for styling
- Shadcn/ui for UI components
- Bun as the JavaScript runtime

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Bun (latest version)

### Local Development

1. Clone the repository:

```bash
git clone <repository-url>
cd upspeech-website
```

2. Install dependencies:

```bash
bun install
```

3. Start the development server:

```bash
bun dev
```

The site will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
bun run build
```

The built files will be in the `dist` directory.

To preview the production build locally:

```bash
bun run preview
```

## Project Structure

```
src/
├── components/     # React components
│   ├── ui/        # Shadcn/ui components
│   └── ...        # Page sections
├── hooks/         # Custom React hooks
├── lib/          # Utility functions
└── pages/        # Page components
```

### Key Components

- `HeroSection`: Main landing section with interactive elements
- `ProblemSection`: Highlights key challenges in speech therapy
- `SolutionSection`: Showcases UpSpeech's features and benefits
- `CTASection`: Call-to-action for waitlist registration
- `DifferentiationSection`: Competitive advantages
- `FAQSection`: Frequently asked questions
- `TestimonialsSection`: Social proof and trust indicators

## Compliance and Security

The platform is built with healthcare compliance in mind:

- HIPAA Compliant
- GDPR Compliant
- ISO 27001 Certified

## Development Notes

- Use consistent styling with the defined color palette (calm-navy, calm-lavender, calm-charcoal, calm-light)
- Maintain responsive design across all breakpoints
- Follow the established component patterns for new additions
- Ensure accessibility standards are met
