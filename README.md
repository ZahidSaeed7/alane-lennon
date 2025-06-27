# Rick and Morty Character Viewer

A React application that allows users to browse and search through characters from the Rick and Morty universe using the [Rick and Morty API](https://rickandmortyapi.com/).

## Features

- **Character List**: Browse all characters with pagination
- **Search**: Search characters by name
- **Character Details**: View detailed information about each character
- **Responsive Design**: Built with React Bootstrap for mobile-friendly experience
- **URL State Management**: Search terms and page numbers persist in URL
- **Episode Links**: Click on episode badges to view episode details
- **Theme Toggle**: Switch between light and dark mode, with theme state managed by Redux
- **Error Handling**: Graceful error boundaries and user-friendly error messages
- **Performance**: Route-based code splitting and image lazy loading

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Redux Toolkit** for state management
- **React Redux** for connecting Redux to React
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
├── common/
│   ├── reducers/           # Redux slices (characters, characterDetail, theme, root reducer)
│   ├── hooks/              # Custom Redux hooks (useAppSelector, useAppDispatch)
│   └── store/              # Redux store setup
├── components/
│   └── AppHeader/          # App header and navigation
├── pages/
│   ├── Home/               # Home page with character list
│   ├── CharacterDetail/    # Character detail page
│   └── NotFound/           # 404 page
├── types/
│   └── character.types.ts  # TypeScript interfaces
└── utils/
    └── pagination.ts       # Pagination utility functions
```

## State Management (Redux)

- **Redux Toolkit** is used for all app state, including characters, character details, and theme.
- The Redux store is set up in `src/common/store/store.ts` and provided at the root of the app.
- Slices are defined in `src/common/reducers/`:
  - `characters.reducer.ts` for the character list
  - `characterDetail.reducer.ts` for the selected character
  - `theme.reducer.ts` for theme (light/dark)
- The root reducer is combined in `src/common/reducers/index.ts`.
- Use the custom hooks from `src/common/hooks/useReduxHooks.ts`:
  - `useAppSelector` for typed state selection
  - `useAppDispatch` for typed dispatch

## Theme Management

- Theme state (light/dark) is managed in Redux (`theme.reducer.ts`).
- The current theme is applied to the app root and `document.body` using a `useEffect` in `App.tsx`.
- The Bootstrap `data-bs-theme` attribute and body class are updated automatically when the theme changes.
- The theme can be toggled from the UI, and persists across navigation.

## Error Handling

- The app uses an `ErrorBoundary` component to catch and display errors in the React component tree.
- API and network errors are shown as user-friendly alerts.

## Performance

- Route-based code splitting with `React.lazy` and `Suspense` for main pages.
- Character images use native lazy loading.
- Bundle size is optimized with Vite and dynamic imports.

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

### Theme Management
- Toggle between light and dark mode
- Theme state is managed by Redux and applied globally
- Bootstrap and custom styles update automatically



