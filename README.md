# Portfolio Redesign

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and TypeScript.

## Features

- Responsive design that works on all devices
- Dark/light mode toggle with theme persistence
- Animated sections on scroll
- Contact form
- Project showcase

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/portfolio-redesign.git
cd portfolio-redesign
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages.

### Automatic Deployment (GitHub Actions)

1. Push your changes to the main branch
2. GitHub Actions will automatically build and deploy the site
3. Your site will be available at `https://your-username.github.io/portfolio-redesign`

### Manual Deployment

If you prefer to deploy manually:

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Customization

- Update `portfolio-redesign/src/app/page.tsx` with your own content
- Replace images in the `public` directory with your own
- Modify colors and styling in `portfolio-redesign/src/app/globals.css`
- Configure site metadata in `portfolio-redesign/src/app/layout.tsx`

## License

This project is open source and available under the [MIT License](LICENSE).
