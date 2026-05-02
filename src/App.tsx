import React, { useState } from 'react';
import Splash from './components/Splash';
import Onboarding from './components/Onboarding';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import CheckoutAddress from './components/CheckoutAddress';
import OrderDetails from './components/OrderDetails';
import Profile from './components/Profile';
import Wishlist from './components/Wishlist';
import MapLocation from './components/MapLocation';
import Offers from './components/Offers';
import ContactUs from './components/ContactUs';
import Chat from './components/Chat';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'onboarding' | 'login' | 'signup' | 'home' | 'product-details' | 'cart' | 'checkout-address' | 'order-details' | 'profile' | 'wishlist' | 'map-location' | 'offers' | 'contact-us'>('splash');
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
        <Home 
          onProductClick={handleProductClick} 
          onCartClick={() => setCurrentScreen('cart')}
          onProfileClick={() => setCurrentScreen('profile')}
        />
      )}

      {currentScreen === 'product-details' && selectedProduct && (
        <ProductDetails 
          product={selectedProduct} 
          onBack={() => setCurrentScreen('home')} 
          onCartClick={() => setCurrentScreen('cart')}
        />
      )}

      {currentScreen === 'cart' && (
        <Cart 
          onBack={() => setCurrentScreen('home')}
          onCheckout={() => setCurrentScreen('checkout-address')}
        />
      )}

      {currentScreen === 'checkout-address' && (
        <CheckoutAddress 
          onBack={() => setCurrentScreen('cart')}
          onNext={() => setCurrentScreen('order-details')}
          onAddNewAddress={() => setCurrentScreen('map-location')}
        />
      )}

      {currentScreen === 'map-location' && (
        <MapLocation 
          onNext={() => setCurrentScreen('checkout-address')}
        />
      )}

      {currentScreen === 'order-details' && (
        <OrderDetails 
          onBack={() => setCurrentScreen('home')}
          onHomeClick={() => setCurrentScreen('home')}
          onProfileClick={() => setCurrentScreen('profile')}
        />
      )}

      {currentScreen === 'profile' && (
        <Profile 
          onBack={() => setCurrentScreen('home')}
          onHomeClick={() => setCurrentScreen('home')}
          onLogout={() => setCurrentScreen('login')}
          onWishlistClick={() => setCurrentScreen('wishlist')}
          onOfferClick={() => setCurrentScreen('offers')}
          onContactUsClick={() => setCurrentScreen('contact-us')}
        />
      )}

      {currentScreen === 'wishlist' && (
        <Wishlist 
          onBack={() => setCurrentScreen('profile')}
          onProductClick={handleProductClick}
        />
      )}

      {currentScreen === 'offers' && (
        <Offers 
          onBack={() => setCurrentScreen('profile')}
        />
      )}

      {currentScreen === 'contact-us' && (
        <ContactUs 
          onBack={() => setCurrentScreen('profile')}
          onChatClick={() => setCurrentScreen('chat')}
        />
      )}

      {currentScreen === 'chat' && (
        <Chat 
          onBack={() => setCurrentScreen('contact-us')}
        />
      )}
    </main>
  );
}

export default App;
