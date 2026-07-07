import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Courses from './components/Courses';
import About from './components/About';
import Store from './components/Store';
import Blog from './components/Blog';
import CourseDetail from './components/CourseDetail';
import Contact from './components/Contact';
import Reviews from './components/Reviews';

type PageType = 'home' | 'courses' | 'about' | 'store' | 'blog' | 'course-detail' | 'contact' | 'reviews';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // for dashboard layout mobile view

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
    setIsMobileMenuOpen(false);
    setIsSidebarOpen(false);
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageType);
  };

  const activePage = currentPage as PageType;

  // Determine if current page is a Dashboard view (Store and Blog have sidebar layouts)
  const isDashboardView = currentPage === 'store' || currentPage === 'blog';

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'courses':
        return <Courses onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'store':
        return <Store onNavigate={handleNavigate} />;
      case 'blog':
        return <Blog onNavigate={handleNavigate} />;
      case 'course-detail':
        return <CourseDetail onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      case 'reviews':
        return <Reviews onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface flex flex-col antialiased">
      
      {/* 1. Atelier Public Layout (Standard Top Nav Header + Footer) */}
      {!isDashboardView ? (
        <>
          {/* Header */}
          <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-outline-variant/30 h-20 flex items-center">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full flex justify-between items-center">
              
              {/* Logo */}
              <button
                onClick={() => handleNavigate('home')}
                className="font-display-lg text-[22px] tracking-widest text-primary font-bold bg-transparent border-none cursor-pointer flex items-center gap-1"
              >
                MODUZ<span className="text-secondary font-black">.</span>
              </button>

              {/* Desktop Nav Links */}
              <nav className="hidden lg:flex items-center gap-10 font-label-md text-label-md font-semibold text-primary">
                <button
                  onClick={() => handleNavigate('about')}
                  className={`hover:text-secondary transition-colors cursor-pointer bg-transparent border-none py-2 ${
                    activePage === 'about' ? 'text-secondary border-b-2 border-secondary' : 'text-primary'
                  }`}
                >
                  ABOUT
                </button>
                <button
                  onClick={() => handleNavigate('courses')}
                  className={`hover:text-secondary transition-colors cursor-pointer bg-transparent border-none py-2 ${
                    activePage === 'courses' || activePage === 'course-detail' ? 'text-secondary border-b-2 border-secondary' : 'text-primary'
                  }`}
                >
                  ACADEMY
                </button>
                <button
                  onClick={() => handleNavigate('blog')}
                  className={`hover:text-secondary transition-colors cursor-pointer bg-transparent border-none py-2 ${
                    activePage === 'blog' ? 'text-secondary border-b-2 border-secondary' : 'text-primary'
                  }`}
                >
                  INSIGHTS
                </button>
                <button
                  onClick={() => handleNavigate('reviews')}
                  className={`hover:text-secondary transition-colors cursor-pointer bg-transparent border-none py-2 ${
                    activePage === 'reviews' ? 'text-secondary border-b-2 border-secondary' : 'text-primary'
                  }`}
                >
                  REVIEWS
                </button>
                <button
                  onClick={() => handleNavigate('store')}
                  className={`hover:text-secondary transition-colors cursor-pointer bg-transparent border-none py-2 ${
                    activePage === 'store' ? 'text-secondary border-b-2 border-secondary' : 'text-primary'
                  }`}
                >
                  STORE
                </button>
              </nav>

              {/* Desktop CTA / Contact Button */}
              <div className="hidden lg:block">
                <button
                  onClick={() => handleNavigate('contact')}
                  className="px-6 py-3 bg-primary text-on-primary font-label-md text-label-md font-bold rounded hover:bg-secondary hover:text-white transition-all cursor-pointer text-white border-none"
                >
                  CONTACT
                </button>
              </div>

              {/* Mobile Burger Trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-primary hover:text-secondary cursor-pointer bg-transparent border-none"
              >
                <span className="material-symbols-outlined text-[28px]">
                  {isMobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </header>

          {/* Mobile Drawer Menu */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 top-20 z-40 bg-white border-t border-outline-variant/30 p-unit-lg flex flex-col justify-between animate-fade-in lg:hidden">
              <nav className="flex flex-col gap-6 text-xl font-bold text-primary">
                <button
                  onClick={() => handleNavigate('about')}
                  className="text-left py-2 border-b border-outline-variant/10 text-primary bg-transparent border-none cursor-pointer"
                >
                  ABOUT
                </button>
                <button
                  onClick={() => handleNavigate('courses')}
                  className="text-left py-2 border-b border-outline-variant/10 text-primary bg-transparent border-none cursor-pointer"
                >
                  ACADEMY
                </button>
                <button
                  onClick={() => handleNavigate('blog')}
                  className="text-left py-2 border-b border-outline-variant/10 text-primary bg-transparent border-none cursor-pointer"
                >
                  INSIGHTS / BLOG
                </button>
                <button
                  onClick={() => handleNavigate('reviews')}
                  className="text-left py-2 border-b border-outline-variant/10 text-primary bg-transparent border-none cursor-pointer"
                >
                  REVIEWS
                </button>
                <button
                  onClick={() => handleNavigate('store')}
                  className="text-left py-2 border-b border-outline-variant/10 text-primary bg-transparent border-none cursor-pointer"
                >
                  STORE
                </button>
                <button
                  onClick={() => handleNavigate('contact')}
                  className="text-left py-2 text-secondary bg-transparent border-none cursor-pointer"
                >
                  CONTACT US
                </button>
              </nav>
              <div className="space-y-4 border-t border-outline-variant/30 pt-6">
                <p className="text-xs text-on-surface-variant font-semibold">MODUZ Educational Atelier</p>
                <p className="text-[11px] text-on-surface-variant/70 leading-relaxed">
                  © 2026 MODUZ. All Rights Reserved. Human-Centric Pedagogy for Lifelong Learning.
                </p>
              </div>
            </div>
          )}

          {/* Main Content Area */}
          <div className="flex-grow">
            {renderCurrentPage()}
          </div>

          {/* Footer */}
          <footer className="bg-primary text-on-primary py-20 px-margin-mobile md:px-margin-desktop border-t border-outline-variant/10 text-white">
            <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-unit-xl">
              
              {/* Branding Block */}
              <div className="md:col-span-4 space-y-unit-md text-white">
                <h3 className="font-display-lg text-[24px] tracking-widest font-bold text-white">MODUZ</h3>
                <p className="font-body-sm text-white/70 max-w-sm leading-relaxed">
                  The Modern Atelier of Lifelong Learning. We design premium educational experiences that bridge the depth of human empathy with the precision of generative artificial intelligence.
                </p>
              </div>

              {/* Navigation Columns */}
              <div className="md:col-span-2 space-y-unit-sm">
                <h4 className="font-label-sm text-label-sm text-secondary font-bold tracking-widest uppercase text-yellow-600">
                  EXPLORE
                </h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li><button onClick={() => handleNavigate('about')} className="hover:text-secondary cursor-pointer bg-transparent border-none p-0 text-white/80">Our Vision</button></li>
                  <li><button onClick={() => handleNavigate('courses')} className="hover:text-secondary cursor-pointer bg-transparent border-none p-0 text-white/80">Academy Courses</button></li>
                  <li><button onClick={() => handleNavigate('reviews')} className="hover:text-secondary cursor-pointer bg-transparent border-none p-0 text-white/80">Student Reviews</button></li>
                  <li><button onClick={() => handleNavigate('store')} className="hover:text-secondary cursor-pointer bg-transparent border-none p-0 text-white/80">Digital Store</button></li>
                </ul>
              </div>

              <div className="md:col-span-2 space-y-unit-sm">
                <h4 className="font-label-sm text-label-sm text-secondary font-bold tracking-widest uppercase text-yellow-600">
                  RESOURCES
                </h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li><button onClick={() => handleNavigate('blog')} className="hover:text-secondary cursor-pointer bg-transparent border-none p-0 text-white/80">Insights Thesis</button></li>
                  <li><button onClick={() => handleNavigate('contact')} className="hover:text-secondary cursor-pointer bg-transparent border-none p-0 text-white/80">Partner pitch</button></li>
                  <li><a href="mailto:haeyoung78@gmail.com" className="hover:text-secondary text-white/80">Help Desk</a></li>
                </ul>
              </div>

              {/* Legal and compliance info */}
              <div className="md:col-span-4 space-y-unit-sm text-white/70">
                <h4 className="font-label-sm text-label-sm text-secondary font-bold tracking-widest uppercase text-yellow-600">
                  LEGAL
                </h4>
                <p className="text-xs leading-relaxed text-white/60">
                  상호명: (주)모두즈 아틀리에 | CPO: Sarah Han | 주소: 서울시 강남구 테헤란로 152 7층 | 대표전화: 02-1544-3000 | 이메일: haeyoung78@gmail.com
                </p>
                <p className="text-[11px] text-white/40 pt-4">
                  © 2026 MODUZ. All rights reserved. Pretendard Fallback typography is active.
                </p>
              </div>
            </div>
          </footer>
        </>
      ) : (
        
        /* 2. Atelier Dashboard Layout (Persistent Sidebar + Top search bar inside component) */
        <div className="flex flex-row min-h-screen relative">
          
          {/* Persistent Sidebar (Desktop) */}
          <aside className="hidden lg:flex flex-col justify-between w-64 bg-primary text-on-primary border-r border-outline-variant/10 shrink-0 p-unit-lg text-white">
            <div className="space-y-unit-xl">
              
              {/* Sidebar Header */}
              <div className="cursor-pointer" onClick={() => handleNavigate('home')}>
                <h3 className="font-display-lg text-[20px] tracking-widest text-white font-bold uppercase">
                  MODUZ
                </h3>
                <p className="text-[10px] text-white/50 tracking-widest font-mono uppercase">
                  Educational Atelier
                </p>
              </div>

              {/* Sidebar Links */}
              <nav className="flex flex-col gap-unit-md font-label-md text-label-md text-white/80">
                <button
                  onClick={() => handleNavigate('home')}
                  className="flex items-center gap-3 py-2 px-3 rounded hover:bg-white/10 hover:text-white transition-all cursor-pointer text-left bg-transparent border-none text-white/80 font-semibold"
                >
                  <span className="material-symbols-outlined text-[20px]">dashboard</span>
                  Dashboard Home
                </button>
                <button
                  onClick={() => handleNavigate('courses')}
                  className="flex items-center gap-3 py-2 px-3 rounded hover:bg-white/10 hover:text-white transition-all cursor-pointer text-left bg-transparent border-none text-white/80 font-semibold"
                >
                  <span className="material-symbols-outlined text-[20px]">school</span>
                  Academy Courses
                </button>
                <button
                  onClick={() => handleNavigate('store')}
                  className={`flex items-center gap-3 py-2 px-3 rounded transition-all cursor-pointer text-left bg-transparent border-none font-semibold ${
                    activePage === 'store' ? 'bg-secondary text-white' : 'hover:bg-white/10 hover:text-white text-white/80'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                  Digital Store
                </button>
                <button
                  onClick={() => handleNavigate('blog')}
                  className={`flex items-center gap-3 py-2 px-3 rounded transition-all cursor-pointer text-left bg-transparent border-none font-semibold ${
                    activePage === 'blog' ? 'bg-secondary text-white' : 'hover:bg-white/10 hover:text-white text-white/80'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">book</span>
                  Insights Blog
                </button>
                <button
                  onClick={() => handleNavigate('reviews')}
                  className="flex items-center gap-3 py-2 px-3 rounded hover:bg-white/10 hover:text-white transition-all cursor-pointer text-left bg-transparent border-none text-white/80 font-semibold"
                >
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  Learner Reviews
                </button>
                <button
                  onClick={() => handleNavigate('contact')}
                  className="flex items-center gap-3 py-2 px-3 rounded hover:bg-white/10 hover:text-white transition-all cursor-pointer text-left bg-transparent border-none text-white/80 font-semibold"
                >
                  <span className="material-symbols-outlined text-[20px]">contact_support</span>
                  Contact Inquiries
                </button>
              </nav>
            </div>

            {/* Sidebar bottom */}
            <div className="space-y-unit-md border-t border-white/10 pt-6">
              <button
                onClick={() => alert('CS Center is open. Email inquiries at haeyoung78@gmail.com')}
                className="flex items-center gap-3 text-xs text-white/60 hover:text-white bg-transparent border-none cursor-pointer w-full text-left"
              >
                <span className="material-symbols-outlined text-[16px]">help</span>
                Help Center
              </button>
              <button
                onClick={() => {
                  alert('로그아웃 되었습니다. 게스트 모드로 지속 탐색합니다.');
                  handleNavigate('home');
                }}
                className="flex items-center gap-3 text-xs text-secondary-container hover:text-secondary-fixed bg-transparent border-none cursor-pointer w-full text-left text-yellow-600"
              >
                <span className="material-symbols-outlined text-[16px]">logout</span>
                Logout
              </button>
            </div>
          </aside>

          {/* Mobile Sidebar Hamburger Toggle (for dashboard on mobile) */}
          <div className="lg:hidden fixed top-3 left-4 z-50">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-3 bg-primary text-white rounded-full flex items-center justify-center shadow-lg border-none cursor-pointer"
            >
              <span className="material-symbols-outlined">
                {isSidebarOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

          {/* Mobile Sidebar Slide-out Drawer */}
          {isSidebarOpen && (
            <div className="lg:hidden fixed inset-0 z-40 flex">
              <div className="w-64 bg-primary text-white p-unit-lg flex flex-col justify-between z-50">
                <div className="space-y-8 pt-10">
                  <div onClick={() => handleNavigate('home')}>
                    <h3 className="font-display-lg text-[18px] tracking-widest font-bold">MODUZ</h3>
                    <p className="text-[10px] text-white/50 tracking-wider">Educational Atelier</p>
                  </div>
                  <nav className="flex flex-col gap-4 font-label-md">
                    <button
                      onClick={() => handleNavigate('home')}
                      className="flex items-center gap-3 py-2 text-white/80 bg-transparent border-none text-left"
                    >
                      <span className="material-symbols-outlined">dashboard</span> Home
                    </button>
                    <button
                      onClick={() => handleNavigate('courses')}
                      className="flex items-center gap-3 py-2 text-white/80 bg-transparent border-none text-left"
                    >
                      <span className="material-symbols-outlined">school</span> Academy
                    </button>
                    <button
                      onClick={() => handleNavigate('store')}
                      className={`flex items-center gap-3 py-2 px-2 rounded bg-transparent border-none text-left ${activePage === 'store' ? 'text-secondary' : 'text-white/80'}`}
                    >
                      <span className="material-symbols-outlined">shopping_bag</span> Store
                    </button>
                    <button
                      onClick={() => handleNavigate('blog')}
                      className={`flex items-center gap-3 py-2 px-2 rounded bg-transparent border-none text-left ${activePage === 'blog' ? 'text-secondary' : 'text-white/80'}`}
                    >
                      <span className="material-symbols-outlined">book</span> Insights
                    </button>
                    <button
                      onClick={() => handleNavigate('reviews')}
                      className="flex items-center gap-3 py-2 text-white/80 bg-transparent border-none text-left"
                    >
                      <span className="material-symbols-outlined">star</span> Reviews
                    </button>
                  </nav>
                </div>
                <div className="border-t border-white/10 pt-4 text-xs text-white/60 space-y-2">
                  <button onClick={() => alert('CS Center is open.')} className="bg-transparent border-none text-white/60 text-left">Help Center</button>
                  <button onClick={() => handleNavigate('home')} className="bg-transparent border-none text-secondary block text-left text-yellow-600">Logout</button>
                </div>
              </div>
              <div className="flex-grow bg-black/50" onClick={() => setIsSidebarOpen(false)}></div>
            </div>
          )}

          {/* Main Content Area */}
          <div className="flex-grow lg:pl-64 min-h-screen">
            {renderCurrentPage()}
          </div>
        </div>
      )}
    </div>
  );
}
