import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import AppHeader from './components/AppHeader/AppHeader.tsx';
import { useAppSelector } from './common/hooks/useReduxHooks';
import { Theme } from './common/reducers/theme.reducer';
import appStyles from './App.module.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const HomePage = lazy(() => import('./pages/Home/Home'));
const CharacterDetailPage = lazy(() => import('./pages/CharacterDetail/CharacterDetail.tsx'));
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFound'));

function App() {
  const theme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(theme === Theme.Light ? 'theme-light' : 'theme-dark');
  }, [theme]);
  
  return (
    <ErrorBoundary>
      <div data-bs-theme={theme}>
        <BrowserRouter>
          <AppHeader />
          <Suspense fallback={<div className={appStyles.suspenseLoader}>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/character/:id" element={<CharacterDetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </ErrorBoundary>
  );
}

export default App;
