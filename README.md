# Rick and Morty Character Viewer

A React application that allows users to browse and search through characters from the Rick and Morty universe using the [Rick and Morty API](https://rickandmortyapi.com/).

## Features

- **Character List**: Browse all characters with pagination
- **Search**: Search characters by name
- **Character Details**: View detailed information about each character
- **Responsive Design**: Built with React Bootstrap for mobile-friendly experience
- **URL State Management**: Search terms and page numbers persist in URL
- **Episode Links**: Click on episode badges to view episode details

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Bootstrap** for UI components
- **React Router** for navigation
- **Axios Hooks** for API requests
- **Rick and Morty API** for data

## Prerequisites

- Node.js (tested with v24.3.0)
- npm

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd alane-lennon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   └── CharacterList/     # Character list component
├── pages/
│   ├── Home/             # Home page with character list
│   └── CharacterDetail/  # Character detail page
├── types/
│   └── character.types.ts # TypeScript interfaces
└── utils/
    └── pagination.ts     # Pagination utility functions
```

## API Integration

The application uses the Rick and Morty API:
- **Base URL**: `https://rickandmortyapi.com/api/`
- **Endpoints**:
  - `character` - Get all characters (supports pagination and search)
  - `character/:id` - Get specific character details

## Features in Detail

### Character List Page
- Displays characters in a responsive grid
- Pagination with smart page number display
- Search functionality with URL persistence
- Loading and error states
- Total character count display

### Character Detail Page
- Complete character information display
- Status badges with color coding
- Episode links that open in new tabs
- Responsive layout with Bootstrap cards

### URL State Management
- Page numbers persist in URL (`?page=3`)
- Search terms persist in URL (`?name=rick`)
- Combined parameters work together (`?name=rick&page=2`)
- Browser back/forward navigation support

