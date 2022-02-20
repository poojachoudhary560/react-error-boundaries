import React from 'react';
import './style.css';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  return (
    <div>
      <ErrorBoundary>
        <Hero heroName="Spiderman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </div>
  );
}
