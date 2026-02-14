import React, { createContext, useState, useCallback } from 'react';

export const PageTransitionContext = createContext();

export function PageTransitionProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const startTransition = useCallback(() => {
    setIsLoading(true);
    // Auto-hide loading after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransitionContext.Provider value={{ isLoading, startTransition }}>
      {children}
    </PageTransitionContext.Provider>
  );
}

export function usePageTransition() {
  const context = React.useContext(PageTransitionContext);
  if (!context) {
    throw new Error('usePageTransition must be used within PageTransitionProvider');
  }
  return context;
}
