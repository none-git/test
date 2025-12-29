
import React, { useState } from 'react';
import { Page, Property } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import ListingPage from './pages/ListingPage';
import DetailPage from './pages/DetailPage';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/AuthPage';
import VirtualTourPage from './pages/VirtualTourPage';
import { MOCK_PROPERTIES } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.LISTING);
  const [selectedProperty, setSelectedProperty] = useState<Property>(MOCK_PROPERTIES[0]);

  const navigateTo = (page: Page, property?: Property) => {
    if (property) setSelectedProperty(property);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.LISTING:
        return <ListingPage onSelectProperty={(p) => navigateTo(Page.DETAIL, p)} />;
      case Page.DETAIL:
        return (
          <DetailPage 
            property={selectedProperty} 
            onGoToTour={() => navigateTo(Page.VIRTUAL_TOUR)} 
          />
        );
      case Page.PROFILE:
        return <ProfilePage />;
      case Page.AUTH:
        return <AuthPage onLogin={() => navigateTo(Page.PROFILE)} />;
      case Page.VIRTUAL_TOUR:
        return <VirtualTourPage property={selectedProperty} onBack={() => navigateTo(Page.DETAIL)} />;
      default:
        return <ListingPage onSelectProperty={(p) => navigateTo(Page.DETAIL, p)} />;
    }
  };

  // Virtual tour is full screen, so we hide header/footer
  const isFullScreen = currentPage === Page.VIRTUAL_TOUR;

  return (
    <div className="flex flex-col min-h-screen">
      {!isFullScreen && <Header navigateTo={navigateTo} currentPage={currentPage} />}
      <main className={`flex-grow ${isFullScreen ? '' : 'pt-4'}`}>
        {renderPage()}
      </main>
      {!isFullScreen && <Footer />}
    </div>
  );
};

export default App;
