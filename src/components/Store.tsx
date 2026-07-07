import React, { useState, useMemo } from 'react';

interface StoreProps {
  onNavigate: (page: string) => void;
}

interface Product {
  id: string;
  category: 'notion' | 'prompt' | 'voucher';
  title: string;
  price: number;
  priceFormatted: string;
  description: string;
  imgUrl: string;
  mostPopular?: boolean;
  features?: string[];
  premiumGift?: boolean;
}

export default function Store({ onNavigate }: StoreProps) {
  const [activeTag, setActiveTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCartSuccess, setShowCartSuccess] = useState(false);

  // Products dataset matching HTML 4
  const products: Product[] = [
    {
      id: 'p1',
      category: 'notion',
      title: 'Atelier OS: Complete Academic Notion Template',
      price: 45000,
      priceFormatted: '₩45,000',
      description: 'The ultimate organizational framework for lifelong learners. Includes course trackers, citation managers, and an integrated active recall flashcard system.',
      imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8qNpQyLibWrTftIon9dZ2irjvtoiyfA1asR2lEM4it39P28wFH-vXxmPpUo3r6NIeDQLSN772P0fEM9UkFqwb5dsNuspkfNoxAgrlhmDxkEMBQq9V3m-gyNDQKmT42nKwWeeZ4kpPWiQsJtfvft0_gNYh630U5iYjTYQVMqJqRNAOJVLys1og-yEnIRUI4anqvwV5zOktD3ewl6bZGhwXLl7HoHKJa8cZY-YIIyTJ4yjbgAwwUq6ly6F2mfurR6UWvRrDKaOfgQ4',
      mostPopular: true,
      features: ['12+ Database Architectures', 'Dark/Light Mode Optimized']
    },
    {
      id: 'p2',
      category: 'prompt',
      title: 'AI Prompting for Academics',
      price: 18500,
      priceFormatted: '₩18,500',
      description: 'A 50-page guidebook on leveraging LLMs for research, structural editing, and complex data synthesis without losing academic integrity.',
      imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBR0Nroo8SnTZ-EQkFW2J1LE5mzZrxtmi5R6dx552cJeqraeTVqaqG2jdNjN1YYuLX55nNSbaNcBmH8rn7nQ43BLWimjXiui1JtIqtt_PDzoFQcRxaS_fdl-NohOfzlJhKzo4vDYwQPGi7Lhbnu2fkdvcZ_EZS8E1M2IkhFhCNkC9PEne2NOUuRRjx4xczyCfpMI5w7aoe6Srb7WsUSZSDTaZ5_VYeYOoP1XILS9p63-QvnC204uagFHDuBcrhFNZxt1gXVB769IMI'
    },
    {
      id: 'p3',
      category: 'voucher',
      title: 'Full Access Course Voucher',
      price: 120000,
      priceFormatted: '₩120,000',
      description: 'Redeemable for any masterclass in the MODUZ catalog. Perfect for professional development or gifting to a colleague.',
      imgUrl: '',
      premiumGift: true
    },
    {
      id: 'p4',
      category: 'notion',
      title: 'Deep Work Planner 2.0',
      price: 29000,
      priceFormatted: '₩29,000',
      description: "A focused Notion system designed around Cal Newport's Deep Work methodology. Includes time-blocking and distraction metrics.",
      imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJkcE53SCcbaFVKnBd9Jis3WkELC30IBrKzbAzF2KxUNacRlFQz-0MmG3KOW7LDOJp3bo8YZq2oXs6hAaHG5-2nY_eWCDk_X-ogNM2GLn37t04qiQ4_nZ6OL9nLqU0Wj-BuP2GidSOzS4k5ySXo6fr89YvkPuXNH4jJBIQni5cyGyYuWNEsP1V_6PZ37ZCxYpcvXqEGt5hS5mlkfpN8Yz2eC07ywMBC-YCA1obo8WmThvQ8JTpGVAZynN2qGrpsFAtIm7E3eyY144'
    },
    {
      id: 'p5',
      category: 'prompt',
      title: 'Visual Prompting Handbook',
      price: 22000,
      priceFormatted: '₩22,000',
      description: 'Mastering Midjourney and DALL-E for creating high-end educational visuals and brand assets. Includes 100+ copy-paste prompts.',
      imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBabd7upqqul0hueD5iembIpmf7ocalErdcdQQ-Vm2tIrAMaZIe7mowZdw9Kq3WdO7oiRGabCnn_40RDXQhaHRVpIOt6XeYUh8esD5W9Cfir7xYFq4czKE6u46rSZUnA-S4HYPBMAN0Jp52WyFOro5WFccUP1aE7olUOhuAToMlZRU12XRmJ4B6KAtxPEL4L7Gi1XRd1iNhxK72y0EttoqBg47hDOb7S6GQJEP0EMqIe2Fg7oJfLDrC9q_-RpncCPM3tf8nUzS--o4'
    }
  ];

  // Filtering products based on category tag and search query
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchTag =
        activeTag === 'all' ||
        (activeTag === 'notion' && product.category === 'notion') ||
        (activeTag === 'prompt' && product.category === 'prompt') ||
        (activeTag === 'voucher' && product.category === 'voucher');

      const matchSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchTag && matchSearch;
    });
  }, [activeTag, searchQuery]);

  const handleBuyNow = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleConfirmPurchase = () => {
    setSelectedProduct(null);
    setShowCartSuccess(true);
    setTimeout(() => {
      setShowCartSuccess(false);
    }, 2500);
  };

  return (
    <div id="store-layout" className="bg-surface text-on-surface min-h-screen">
      {/* Search Header for dashboard layout */}
      <div className="fixed top-0 right-0 left-0 lg:left-64 h-16 bg-surface flex justify-between items-center px-unit-lg border-b border-outline-variant z-40">
        <div className="flex items-center gap-unit-md">
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-on-surface-variant pointer-events-none">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full text-label-md focus:outline-none focus:border-secondary transition-colors w-64 md:w-80 text-on-surface"
              placeholder="Search resources..."
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 inset-y-0 flex items-center text-xs text-on-surface-variant hover:text-primary bg-transparent border-none cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center gap-unit-md">
          <button className="p-2 text-on-surface-variant hover:text-secondary transition-colors cursor-pointer bg-transparent border-none">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="p-2 text-on-surface-variant hover:text-secondary transition-colors cursor-pointer bg-transparent border-none">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden ml-unit-sm border border-outline-variant bg-surface-container-high hidden md:block">
            <img
              className="w-full h-full object-cover"
              alt="User Avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrOEmvoovkJ_-GiowAJwUEf15E2Z7ZL7cGgEoD17X5Escq8JrMutprkzP5QXJrXNSaXsdSAL2JwpkUt8QDT_drwLitbWxRMhbZZxZ8qqu5ZMT2RDqmJvV1i_S6bmFw9vWTJ4QI_8r5_2nBmpxhsNXVhoogFQdTbCgtWS6LI47RFvjIQA5K4jBp8R3yfWmN2ZTpa0orzJx3GDXShOjOsGHfWaRe6lL-a9kmXSjBquqxPCfdlxpXUktL-oJccDoH6akJEDTkRdW-6d8"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="pt-24 pb-20 px-unit-lg lg:px-margin-desktop max-w-container-max mx-auto min-h-screen">
        
        {/* Toast Alert Success */}
        {showCartSuccess && (
          <div className="fixed top-20 right-6 z-50 bg-[#4caf50] text-white px-6 py-3 rounded-lg shadow-xl flex items-center gap-2 animate-bounce">
            <span className="material-symbols-outlined">check_circle</span>
            <span className="font-label-md">주문 및 다운로드 링크가 이메일로 전송되었습니다!</span>
          </div>
        )}

        {/* Hero / Store Header */}
        <section className="mb-unit-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-unit-lg">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 mb-unit-md bg-secondary-container/20 text-secondary font-label-sm text-label-sm rounded-full tracking-wider font-semibold">
                THE REPOSITORY
              </span>
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-unit-sm leading-tight text-primary">
                Curated Tools for the Modern Mind.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Premium digital assets, course vouchers, and knowledge frameworks designed for high-performance learning and professional precision.
              </p>
            </div>
          </div>
        </section>

        {/* Store Filters / Tags */}
        <div className="flex flex-wrap gap-unit-sm mb-unit-xl">
          <button
            onClick={() => setActiveTag('all')}
            className={`px-unit-lg py-2 rounded-full font-label-md text-label-md cursor-pointer transition-all ${
              activeTag === 'all'
                ? 'bg-primary text-on-primary text-white font-semibold'
                : 'bg-surface-container-low border border-outline-variant text-on-surface-variant hover:border-secondary'
            }`}
          >
            All Resources
          </button>
          <button
            onClick={() => setActiveTag('notion')}
            className={`px-unit-lg py-2 rounded-full font-label-md text-label-md cursor-pointer transition-all ${
              activeTag === 'notion'
                ? 'bg-primary text-on-primary text-white font-semibold'
                : 'bg-surface-container-low border border-outline-variant text-on-surface-variant hover:border-secondary'
            }`}
          >
            Notion Templates
          </button>
          <button
            onClick={() => setActiveTag('prompt')}
            className={`px-unit-lg py-2 rounded-full font-label-md text-label-md cursor-pointer transition-all ${
              activeTag === 'prompt'
                ? 'bg-primary text-on-primary text-white font-semibold'
                : 'bg-surface-container-low border border-outline-variant text-on-surface-variant hover:border-secondary'
            }`}
          >
            Prompt Guides
          </button>
          <button
            onClick={() => setActiveTag('voucher')}
            className={`px-unit-lg py-2 rounded-full font-label-md text-label-md cursor-pointer transition-all ${
              activeTag === 'voucher'
                ? 'bg-primary text-on-primary text-white font-semibold'
                : 'bg-surface-container-low border border-outline-variant text-on-surface-variant hover:border-secondary'
            }`}
          >
            Course Vouchers
          </button>
        </div>

        {/* Empty state when search or filters return nothing */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 border border-outline-variant/30 rounded-xl bg-white space-y-4">
            <span className="material-symbols-outlined text-6xl text-outline-variant">info</span>
            <p className="font-body-lg text-on-surface-variant">검색 결과에 맞는 리소스가 없습니다.</p>
            <button
              onClick={() => {
                setActiveTag('all');
                setSearchQuery('');
              }}
              className="px-6 py-2 bg-primary text-on-primary text-white font-label-md hover:bg-secondary cursor-pointer"
            >
              필터 초기화
            </button>
          </div>
        )}

        {/* Bento Grid Layout for Store Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter mb-unit-xl">
          {filteredProducts.map((product) => {
            // Check if it is a featured product (Notion OS)
            if (product.mostPopular) {
              return (
                <div key={product.id} className="md:col-span-2 group">
                  <div className="bg-white border border-outline-variant rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 relative overflow-hidden h-64 md:h-auto">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt={product.title}
                        src={product.imgUrl}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-secondary text-on-secondary text-white px-3 py-1 font-label-sm text-label-sm rounded-full">
                          MOST POPULAR
                        </span>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 p-unit-lg flex flex-col justify-between bg-white text-on-surface">
                      <div>
                        <div className="flex justify-between items-start mb-unit-sm gap-2">
                          <h3 className="font-headline-lg text-headline-lg font-bold">{product.title}</h3>
                          <p className="font-headline-md text-headline-md font-bold text-secondary whitespace-nowrap">
                            {product.priceFormatted}
                          </p>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-unit-lg leading-relaxed">
                          {product.description}
                        </p>
                        {product.features && (
                          <ul className="space-y-2 mb-unit-lg">
                            {product.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-unit-sm font-label-md text-label-md text-on-surface">
                                <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>{' '}
                                {feature}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <button
                        onClick={() => handleBuyNow(product)}
                        className="w-full bg-primary text-on-primary py-4 rounded-lg font-bold hover:bg-gold transition-colors flex justify-center items-center gap-2 cursor-pointer text-white border-none"
                      >
                        Buy Now
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            }

            // Normal Card Layout
            return (
              <div key={product.id} className="group">
                <div className="bg-white border border-outline-variant rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    {product.premiumGift ? (
                      <div className="h-56 relative overflow-hidden bg-primary flex items-center justify-center p-unit-xl">
                        <div className="border-2 border-secondary/30 w-full h-full rounded flex items-center justify-center">
                          <span className="text-secondary font-display-lg text-display-lg-mobile opacity-50">MODUZ</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-unit-lg">
                          <p className="text-white font-label-md text-label-md uppercase tracking-widest">Premium Gift</p>
                        </div>
                      </div>
                    ) : (
                      <div className="h-56 relative overflow-hidden">
                        <img
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          alt={product.title}
                          src={product.imgUrl}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                    <div className="p-unit-lg">
                      <div className="flex justify-between items-center mb-unit-sm gap-2">
                        <h3 className="font-headline-md text-headline-md font-bold leading-snug">{product.title}</h3>
                        <p className="font-body-lg text-body-lg font-bold text-secondary whitespace-nowrap">
                          {product.priceFormatted}
                        </p>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-unit-lg pt-0">
                    <button
                      onClick={() => handleBuyNow(product)}
                      className="w-full border border-primary text-primary py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition-all cursor-pointer bg-transparent"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Path / CTA Section */}
        <section className="mb-unit-xl">
          <div className="bg-surface-container-low rounded-xl p-unit-xl relative overflow-hidden border border-outline-variant">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[300px] leading-none select-none text-primary">
                auto_awesome
              </span>
            </div>
            <div className="max-w-xl relative z-10">
              <h2 className="font-headline-lg text-headline-lg mb-unit-md font-bold">Build Your Own Atelier.</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-unit-lg leading-relaxed">
                Bundle any 3 items and receive an automatic 20% discount. Elevate your productivity with our integrated ecosystems.
              </p>
              <div className="flex gap-unit-md">
                <button
                  onClick={() => alert('묶음 할인 구매 기능은 데모 버전에서 비활성화되어 있습니다.')}
                  className="bg-primary text-on-primary px-unit-lg py-3 rounded-lg font-bold hover:bg-gold transition-colors cursor-pointer text-white border-none"
                >
                  Start Bundling
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="border border-primary text-primary px-unit-lg py-3 rounded-lg font-bold hover:bg-white transition-colors cursor-pointer bg-transparent"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Block */}
        <section className="max-w-3xl mx-auto py-unit-xl">
          <div className="quote-accent pl-unit-lg">
            <p className="font-headline-lg text-headline-lg italic text-primary leading-relaxed">
              "The quality of our tools dictates the clarity of our thoughts. We don't just sell templates; we provide the architecture for your intellectual legacy."
            </p>
            <cite className="block mt-unit-md font-label-md text-label-md text-on-surface-variant not-italic font-semibold">
              — Dr. Elias Vance, Founder of MODUZ
            </cite>
          </div>
        </section>
      </div>

      {/* Buy Overlay Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white border border-outline-variant rounded-xl p-unit-lg md:p-unit-xl max-w-md w-full shadow-2xl space-y-6 relative text-on-surface">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-primary hover:text-secondary material-symbols-outlined cursor-pointer bg-transparent border-none"
            >
              close
            </button>
            <div className="space-y-2">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold block">
                ORDER SECURELY
              </span>
              <h3 className="font-headline-md text-headline-md font-bold text-primary">구매 요청 확인</h3>
            </div>
            <div className="border border-outline-variant/30 rounded-lg p-unit-md bg-surface-container-low space-y-2">
              <p className="font-label-md text-primary font-bold">{selectedProduct.title}</p>
              <p className="font-body-md text-secondary font-semibold">{selectedProduct.priceFormatted}</p>
              <p className="text-xs text-on-surface-variant/80">본 결제는 실제 금액이 청구되지 않는 데모 결제입니다.</p>
            </div>
            <div className="space-y-2">
              <label className="text-xs text-primary font-bold uppercase block">전송받을 이메일 주소</label>
              <input
                type="email"
                defaultValue="haeyoung78@gmail.com"
                className="w-full bg-[#F8F8F6] border border-outline-variant rounded p-2 text-sm text-on-surface"
                placeholder="example@moduz.com"
                required
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedProduct(null)}
                className="w-1/2 py-3 border border-outline-variant rounded-lg hover:bg-surface-container-low font-bold cursor-pointer bg-transparent"
              >
                취소
              </button>
              <button
                onClick={handleConfirmPurchase}
                className="w-1/2 py-3 bg-primary text-on-primary font-bold rounded-lg hover:bg-secondary cursor-pointer text-white border-none"
              >
                주문 전송
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
