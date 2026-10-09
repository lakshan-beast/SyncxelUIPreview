import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ChevronDown, 
  Sparkles, 
  HelpCircle, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Globe,
  Crown,
  Gem,
  Compass
} from 'lucide-react';

const FAQ_CATEGORIES = [
  { id: 'all', label: 'All Protocols', icon: Compass },
  { id: 'bespoke', label: 'Bespoke Atelier', icon: Crown },
  { id: 'craftsmanship', label: 'Craftsmanship & Materials', icon: Gem },
  { id: 'concierge', label: 'Private Concierge', icon: ShieldCheck },
  { id: 'delivery', label: 'Global Secure Delivery', icon: Globe }
];

const FAQ_DATA = [
  {
    id: 1,
    category: 'bespoke',
    question: 'What is the private consultation protocol for bespoke commissions?',
    answer: 'Every bespoke creation begins with a private digital or in-person consultation at one of our global salons or via secure encrypted video link. Our master artisans collaborate directly with you to define silhouettes, rare archival finishes, and personal monograms, followed by digital 3D tactile rendering prior to physical atelier work.',
    timeframe: '48-hour response window',
    tag: 'Atelier Exclusive'
  },
  {
    id: 2,
    category: 'craftsmanship',
    question: 'How are certified conflict-free rare gems and sustainable precious metals sourced?',
    answer: 'We adhere to uncompromising 2026 ethical luxury standards. All precious metals are 100% certified recycled or ethically mined under strict artisan welfare pacts. Our rare diamonds and colored gemstones possess immutable blockchain provenance certificates, detailing exact provenance from mine to master cutter.',
    timeframe: 'Full traceability report included',
    tag: 'Sustainable Luxury'
  },
  {
    id: 3,
    category: 'concierge',
    question: 'What tier of personalized service does the 24/7 Private Concierge provide?',
    answer: 'Your dedicated Private Client Director handles all requests ranging from emergency structural restorations and seasonal vault storage to private viewings, international estate deliveries, and personalized valet packaging. Communication is established via your preferred encrypted channel.',
    timeframe: 'Immediate priority routing',
    tag: 'VIP Service'
  },
  {
    id: 4,
    category: 'delivery',
    question: 'How is white-glove global secure delivery executed for high-value acquisitions?',
    answer: 'All deliveries are executed via armored climate-controlled courier services accompanied by dual armed security escorts for pieces exceeding premium thresholds. Items arrive in temperature-stabilized obsidian presentation trunks with tamper-evident biometric seals.',
    timeframe: 'Scheduled exact-hour delivery',
    tag: 'Secure Transit'
  },
  {
    id: 5,
    category: 'bespoke',
    question: 'Can archival pieces from previous decades be recommissioned or restored?',
    answer: 'Our heritage restoration department maintains original master blueprints dating back over fifty years. We accept select archival pieces for generational restoration, ultrasonic rejuvenation, and structural reinforcement performed by our senior guild masters.',
    timeframe: '6 to 12 weeks evaluation',
    tag: 'Heritage Care'
  },
  {
    id: 6,
    category: 'craftsmanship',
    question: 'What is the standard lead time for bespoke handcrafted commissions?',
    answer: 'Due to the rigorous hand-polishing, multi-stage metallurgical casting, and meticulous hand-setting of stones, standard bespoke commissions require between 8 to 16 weeks. Expedited royal tier service is available upon special executive clearance.',
    timeframe: '8-16 weeks standard',
    tag: 'Timeframe'
  }
];

export default function LuxuryFAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState(0); // First item open by default for immediate elegance

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#E5E5E5] font-sans selection:bg-[#E5C588]/30 selection:text-[#F3E5AB] relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      
      {}
      {/* Ambient Luxury Glow Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#E5C588]/10 via-[#C5A059]/5 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#3B2F1F]/20 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-[#E5C588]/20 backdrop-blur-md shadow-[0_0_20px_rgba(229,197,136,0.05)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E5C588]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#F3E5AB] font-medium">
              Maison d'Élite &bull; 2026 Protocol
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white font-serif"
          >
            Frequently Inquired <span className="italic font-normal bg-gradient-to-r from-[#F3E5AB] via-[#E5C588] to-[#C5A059] bg-clip-text text-transparent">Protocols</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto font-light tracking-wide"
          >
            Explore our curated compendium of atelier guidelines, secure logistics, and bespoke client services.
          </motion.p>
        </div>

        {}
        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mb-8"
        >
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-[#E5C588]/60" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search protocols, bespoke services, or delivery details..."
            className="w-full bg-[#121212]/80 border border-white/10 focus:border-[#E5C588]/50 rounded-2xl py-4 pl-12 pr-4 text-sm sm:text-base text-white placeholder-neutral-500 backdrop-blur-xl outline-none transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.4)] focus:shadow-[0_0_25px_rgba(229,197,136,0.15)]"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-4 flex items-center text-xs uppercase tracking-widest text-neutral-400 hover:text-[#E5C588] transition-colors"
            >
              Clear
            </button>
          )}
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {FAQ_CATEGORIES.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm tracking-wider whitespace-nowrap transition-all duration-300 border ${
                  isActive
                    ? 'bg-gradient-to-r from-[#E5C588]/20 to-[#C5A059]/10 border-[#E5C588]/60 text-[#F3E5AB] shadow-[0_0_15px_rgba(229,197,136,0.2)]'
                    : 'bg-[#121212]/40 border-white/5 text-neutral-400 hover:text-white hover:border-white/15 backdrop-blur-md'
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#E5C588]' : 'text-neutral-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {}
        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-[#121212]/50 border border-white/10 rounded-2xl backdrop-blur-xl"
            >
              <HelpCircle className="w-10 h-10 text-neutral-600 mx-auto mb-4" />
              <h3 className="text-lg font-serif text-white mb-2">No Matching Protocols Found</h3>
              <p className="text-sm text-neutral-400 max-w-sm mx-auto">
                We could not find any protocols matching your search criteria. Please adjust your query or contact your Private Concierge.
              </p>
            </motion.div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`group rounded-2xl border transition-all duration-500 backdrop-blur-xl overflow-hidden ${
                    isOpen 
                      ? 'bg-[#141414]/90 border-[#E5C588]/40 shadow-[0_10px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(229,197,136,0.08)]' 
                      : 'bg-[#121212]/60 border-white/10 hover:border-white/20 hover:bg-[#121212]/90'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                      <span className={`text-xs font-mono tracking-widest transition-colors duration-300 ${isOpen ? 'text-[#E5C588]' : 'text-neutral-600'}`}>
                        0{index + 1}
                      </span>
                      <h3 className={`text-base sm:text-lg font-light tracking-wide transition-colors duration-300 truncate sm:whitespace-normal ${
                        isOpen ? 'text-[#F3E5AB] font-medium' : 'text-neutral-200 group-hover:text-white'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="hidden md:inline-block text-[11px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-400">
                        {faq.tag}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors duration-300 ${
                          isOpen ? 'bg-[#E5C588]/15 border-[#E5C588]/40 text-[#E5C588]' : 'bg-white/[0.02] border-white/10 text-neutral-400 group-hover:border-white/30 group-hover:text-white'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: 'auto', 
                          opacity: 1,
                          transition: { height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }, opacity: { duration: 0.25, delay: 0.1 } }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: { height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }, opacity: { duration: 0.2 } }
                        }}
                      >
                        <div className="px-6 sm:px-8 pb-6 sm:pb-7 pt-2 border-t border-white/5 space-y-4">
                          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed tracking-wide">
                            {faq.answer}
                          </p>
                          <div className="flex items-center justify-between pt-3 border-t border-white/[0.04] text-xs text-neutral-400">
                            <div className="flex items-center gap-1.5 text-[#E5C588]/90 font-medium">
                              <Clock className="w-3.5 h-3.5" />
                              <span>{faq.timeframe}</span>
                            </div>
                            <span className="md:hidden uppercase tracking-wider text-[10px] text-neutral-500">
                              {faq.tag}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>

        {}
        {/* Minimalist Help Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#141414] via-[#1a1712] to-[#141414] border border-[#E5C588]/20 backdrop-blur-2xl relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        >
          {/* Subtle Corner Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#E5C588]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E5C588] font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Dedicated Assistance</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-white font-light">
                Need bespoke assistance or private clearance?
              </h3>
              <p className="text-sm text-neutral-400 font-light max-w-lg">
                Our private client directors are available around the clock to cater to your specific high-value inquiries.
              </p>
            </div>

            <button 
              onClick={() => alert('Connecting to your assigned Private Client Director...')}
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#F3E5AB] via-[#E5C588] to-[#C5A059] text-black font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(229,197,136,0.4)] shrink-0 active:scale-95"
            >
              <span>Contact Concierge</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>

        {/* Footer info */}
        <div className="mt-12 text-center text-xs text-neutral-600 font-mono tracking-widest">
          MAISON D'ÉLITE &bull; LUXURY PROTOCOL COMPENDIUM &bull; 2026-2027 EDITION
        </div>

      </div>
    </div>
  );
}