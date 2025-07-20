# NFT Marketplace Project

A modern, responsive NFT marketplace frontend implementation showcasing digital art collections and creator profiles.

## About this project

This project is a lightweight, performance-optimized NFT marketplace template built with pure HTML5, CSS3, and vanilla JavaScript. The design is inspired by a [Figma community template](https://www.figma.com/design/4vWGnA8EyaQamCEIYOV3qu/NFTMarketplace--Community-?node-id=1-288&t=0h4yACDnEC4IQGK1-0), with thoughtful UI/UX improvements implemented to enhance usability and aesthetic appeal.

### Key Features:

- Responsive design that works across all device sizes
- Optimized asset loading with WebP image format
- Custom font implementation for unique typography
- CSS Grid and Flexbox for modern layouts

### Performance

The implementation achieves excellent performance metrics as verified by [PageSpeed Insights](https://pagespeed.web.dev/analysis/https-marketplace-landing-page-netlify-app/t1iayg0qem?form_factor=desktop):

#### Mobile Performance:

![pagespeed numbers for mobile](/images/pagespeed-score-mobile.png)

#### Desktop Performance:

![pagespeed numbers for desktop](/images/pagespeed-score-desktop.png)

## Installation Instructions

### Prerequisites

- Git
- Node.js (for package management and development tools)

### Clone the Repository

```sh
git clone https://github.com/uabdirasul/marketplace.git
cd marketplace
```

### Install Dependencies

```sh
npm install
```

This will install all required dependencies listed in the `package.json` file, including:

- `live-server` for local development
- `postcss`, `autoprefixer`, and `cssnano` for CSS processing

### Project Setup

Before running the project, you need to build the CSS files:

```sh
npm run prod
```

This will process the `styles/style.css` file using PostCSS with the configuration from `postcss.config.js`, generating optimized CSS in the `dist` directory.

## Running the Project

### Development Mode

To start a local development server:

```sh
npm start
```

This will start the website on `http://localhost:3000`.

### CSS Development with Auto-Reloading

For continuous CSS development with automatic rebuilding:

```sh
npm run dev:watch
```

## Project Structure

- `index.html` - Main HTML file for the NFT marketplace
- `styles/style.css` - CSS styles for the project
- `scripts/index.js` - JavaScript for interactive elements
- `fonts` - Web fonts used in the project
- `images` - Image assets for the marketplace

## Browser Support

This project is configured to support:

- Last 4 versions of major browsers
- iOS 8+
- Safari 8+
- Chrome 21+
- Firefox 28+
- IE 10+
