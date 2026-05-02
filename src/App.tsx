import React, { useState, useEffect } from 'react';
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
import CaseStudy from './components/CaseStudy';
import DesktopNav from './components/DesktopNav';
import DesktopHome from './components/DesktopHome';
import DesktopPage from './components/DesktopPage';
import DesktopShop from './components/DesktopShop';
import DesktopProductDetails from './components/DesktopProductDetails';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'onboarding' | 'login' | 'signup' | 'home' | 'page' | 'product-details' | 'cart' | 'checkout-address' | 'order-details' | 'profile' | 'wishlist' | 'map-location' | 'offers' | 'contact-us' | 'case-study' | 'shop' | 'blog'>('splash');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setCurrentScreen('product-details');
  };

  // Screens that should show the desktop nav
  const authenticatedScreens = ['home', 'page', 'product-details', 'cart', 'checkout-address', 'order-details', 'profile', 'wishlist', 'offers', 'contact-us', 'chat', 'shop', 'blog'];
  const showDesktopNav = isDesktop && authenticatedScreens.includes(currentScreen);

  // Screens that need scrolling
  const scrollableScreens = ['case-study', 'home', 'page', 'shop', 'blog', 'contact-us', 'profile', 'wishlist', 'cart', 'product-details'];
  const needsScroll = isDesktop && scrollableScreens.includes(currentScreen);

  return (
    <main className={`w-full ${needsScroll || currentScreen === 'case-study' ? 'min-h-screen overflow-auto' : 'h-screen overflow-hidden'} bg-black font-sans text-champagne selection:bg-gold-light selection:text-black`}>

      {/* Desktop Navigation Bar — only on authenticated desktop screens */}
      {showDesktopNav && (
        <DesktopNav
          currentPage={currentScreen}
          onNavigate={(page) => setCurrentScreen(page as any)}
          onProfileClick={() => setCurrentScreen('profile')}
          onWishlistClick={() => setCurrentScreen('wishlist')}
          onCartClick={() => setCurrentScreen('cart')}
        />
      )}

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
        <>
          {/* Mobile Home */}
          <div className="md:hidden w-full h-full">
            <Home 
              onProductClick={handleProductClick} 
              onCartClick={() => setCurrentScreen('cart')}
              onProfileClick={() => setCurrentScreen('profile')}
            />
          </div>
          {/* Desktop Home */}
          <div className="hidden md:block">
            <DesktopHome 
              onProductClick={handleProductClick}
              onShopClick={() => setCurrentScreen('shop')}
            />
          </div>
        </>
      )}

      {currentScreen === 'page' && (
        <DesktopPage />
      )}

      {currentScreen === 'shop' && (
        <>
          {/* Placeholder for Mobile Shop if it exists, otherwise it just renders DesktopShop */}
          <div className="hidden md:block">
            <DesktopShop onProductClick={handleProductClick} />
          </div>
        </>
      )}

      {currentScreen === 'product-details' && selectedProduct && (
        <>
          <div className="md:hidden w-full h-full">
            <ProductDetails 
              product={selectedProduct} 
              onBack={() => setCurrentScreen('shop')} 
              onAddToCart={(product, quantity, priceDetails) => {
                console.log('Added to cart:', product.name, quantity, priceDetails);
              }}
            />
          </div>
          <div className="hidden md:block">
            <DesktopProductDetails 
              product={selectedProduct} 
              onBack={() => setCurrentScreen('shop')}
              onContinue={() => setCurrentScreen('shop')}
            />
          </div>
        </>
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

      {currentScreen === 'case-study' && (
        <CaseStudy 
          onBack={() => setCurrentScreen('profile')}
        />
      )}
    </main>
  );
}

export default App;
