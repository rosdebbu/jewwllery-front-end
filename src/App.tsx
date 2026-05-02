import React, { useState } from 'react';
import Splash from './components/Splash';
import Onboarding from './components/Onboarding';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'onboarding' | 'login' | 'signup' | 'home' | 'product-details'>('splash');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setCurrentScreen('product-details');
  };

  return (
    <main className="w-full h-screen bg-black overflow-hidden font-sans text-champagne selection:bg-gold-light selection:text-black">
      {currentScreen === 'splash' && (
        <Splash onComplete={() => setCurrentScreen('onboarding')} />
      )}
      
      {currentScreen === 'onboarding' && (
        <Onboarding onNext={() => setCurrentScreen('login')} />
      )}

      {currentScreen === 'login' && (
        <Login 
          onSignupClick={() => setCurrentScreen('signup')} 
          onLogin={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'signup' && (
        <Signup 
          onLoginClick={() => setCurrentScreen('login')} 
          onSignup={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'home' && (
        <Home onProductClick={handleProductClick} />
      )}

      {currentScreen === 'product-details' && selectedProduct && (
        <ProductDetails 
          product={selectedProduct} 
          onBack={() => setCurrentScreen('home')} 
        />
      )}
    </main>
  );
}

export default App;
