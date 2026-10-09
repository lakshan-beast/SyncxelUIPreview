// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   FaHeart,
//   FaRegCopyright,
//   FaCaretRight,
//   FaCoffee,
//   FaWhatsapp,
//   FaEnvelope,
// } from "react-icons/fa";
// import { IoMdMail } from "react-icons/io";
// import { SiGithub } from "react-icons/si";
// import { HiOutlineSparkles, HiOutlineArrowUpRight } from "react-icons/hi2";

// // --- Framer Motion Variants ---
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative bg-slate-950 pt-12 pb-6 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden rounded-t-3xl w-full text-slate-100">
//       <motion.div
//         className="max-w-7xl w-full mx-auto space-y-16 relative z-10"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.1 }}>
//         {/* 1. TOP CTA BOX */}
//         <motion.div
//           variants={itemVariants}
//           className="relative rounded-3xl p-0.5 overflow-hidden group max-w-5xl mx-auto">
//           <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,#ffffff_0%,#475569_50%,#ffffff_100%)] opacity-20 animate-[spin_6s_linear_infinite] group-hover:opacity-75 transition-opacity" />

//           <div className="relative rounded-[calc(1.5rem-1px)] bg-slate-950/80 backdrop-blur-xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 z-10">
//             <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] pointer-events-none" />
//             <div className="absolute -left-20 -top-20 w-60 h-60 bg-slate-500/10 rounded-full blur-[90px] pointer-events-none" />

//             <div className="space-y-3 max-w-xl text-center md:text-left z-10">
//               <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold shadow-xs">
//                 <HiOutlineSparkles className="w-5 h-5 animate-pulse text-white" />
//                 <span>Let's Build Something Great</span>
//               </div>

//               <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
//                 Ready to elevate your{" "}
//                 <span className="bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-transparent">
//                   digital experience?
//                 </span>
//               </h2>

//               <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-baloo">
//                 Explore our production-ready UI components or hire us to build
//                 your custom web product with precision.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row md:flex-col items-center gap-3 w-full md:w-auto z-10 font-baloo">
//               <a
//                 href="#hire"
//                 className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-sm transition-all shadow-md hover:scale-[1.02] flex items-center justify-center space-x-2 group/btn active:scale-95">
//                 <span>Start a Project</span>
//                 <HiOutlineArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
//               </a>

//               <a
//                 href="https://buymeacoffee.com/lakshansandeepa"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="w-full sm:w-auto md:w-full text-center px-5 py-3.5 rounded-xl bg-[#FFDD00] hover:bg-amber-400 text-amber-950 font-bold text-sm transition-all shadow-md hover:scale-[1.02] flex items-center justify-center space-x-2 active:scale-95">
//                 <FaCoffee className="w-5 h-5 text-amber-950" />
//                 <span>Buy Me a Coffee</span>
//               </a>
//             </div>
//           </div>
//         </motion.div>

//         {/* 2. MAIN FOOTER GRID (Brand Info + Link Columns) */}
//         <motion.div
//           variants={itemVariants}
//           className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-6">
//           {/* Brand Column */}
//           <div className="lg:col-span-5 space-y-4">
//             <Link
//               to="/"
//               className="flex items-center space-x-3 cursor-pointer group w-fit">
//               <div className="flex flex-col">
//                 <div className="flex items-center">
//                   <span className="text-2xl md:text-3xl font-black font-baloo uppercase text-white leading-none">
//                     Sync
//                   </span>
//                   <span className="text-2xl md:text-3xl font-black font-baloo uppercase bg-white text-slate-950 px-2 ml-1 rounded-md border border-white/20 shadow-xs leading-none">
//                     Xel
//                   </span>
//                 </div>
//                 <span className="text-[10px] font-baloo tracking-widest text-slate-400 uppercase mt-0.5">
//                   UI MATRIX V2.0
//                 </span>
//               </div>

//               <span className="px-2.5 py-0.5 text-[9px] font-extrabold text-white bg-white/10 border border-white/20 rounded-full tracking-wider uppercase">
//                 Beta
//               </span>
//             </Link>

//             <p className="text-xs sm:text-sm text-slate-400 max-w-lg leading-tight font-baloo">
//               Crafting production-ready UI components, design systems, and
//               custom web applications for developers and startups globally.
//             </p>

//             {/* Social Icons */}
//             <div className="flex items-center space-x-2 pt-2">
//               <a
//                 href="mailto:syncxelofficial@gmail.com"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all shadow-xs"
//                 title="Email">
//                 <FaEnvelope className="w-5 h-5" />
//               </a>
//               <a
//                 href="https://github.com/lakshan-beast/SyncXel"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all shadow-xs"
//                 title="GitHub Profile">
//                 <SiGithub className="w-5 h-5" />
//               </a>
//               <a
//                 href="https://wa.me/+94707046840"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all shadow-xs"
//                 title="Whatsapp Business Chat">
//                 <FaWhatsapp className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div>
//           {/* Links Columns Grid */}
//           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 font-baloo px-6">
//             {/* 1. Agency & Services */}
//             <div className="flex flex-col space-y-5">
//               <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white font-mono">
//                 agency
//               </h4>
//               <ul className="space-y-1 pl-1 text-xs sm:text-sm text-slate-400 flex flex-col">
//                 <li>
//                   <a
//                     href="/#features"
//                     className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                     <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                     Platform Features
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/#services"
//                     className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                     <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                     Custom Web Apps
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/#how-it-works"
//                     className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                     <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                     Our Workflow
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/#team"
//                     className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                     <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                     Hire Engineers
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/#contact-section"
//                     className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                     <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                     Contact Us
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* 2. Governance & Legal */}
//             <div className="flex flex-col space-y-5">
//               <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white font-mono">
//                 governance
//               </h4>
//               <ul className="space-y-1 pl-1 text-xs sm:text-sm text-slate-400 flex flex-col">
//                 <li>
//                   <Link
//                     to="/components"
//                     className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                     <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                     UI Matrix Core
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/docs"
//                     className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                     <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                     Documentation
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/legal"
//                     className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                     <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                     Privacy & Terms
//                   </Link>
//                 </li>
//                 <li>
//                   <a
//                     href="https://github.com/lakshan-beast/SyncXel"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                     <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                     Open Source Hub
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/#faq"
//                     className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                     <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                     FAQ / Help
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* 3. Tech Stack & Resources (External Links) */}
//             <div className="flex flex-col space-y-5">
//               <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white font-mono">
//                 tech stack
//               </h4>
//               <ul className="space-y-1 pl-1 text-xs sm:text-sm text-slate-400 flex flex-col">
//                 <li>
//                   <a
//                     href="https://react.dev"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                     <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                     React.js Docs
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://tailwindcss.com"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                     <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                     Tailwind CSS
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://www.framer.com/motion/"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                     <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                     Framer Motion
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://vite.dev"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                     <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                     Vite Engine
//                   </a>
//                 </li>
//                 <a
//                   href="https://vercel.com"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="hover:text-white transition-colors flex items-center gap-1.5 group">
//                   <FaCaretRight className="text-slate-500 transition-transform group-hover:translate-x-0.5 shrink-0" />
//                   Vercel Cloud
//                 </a>
//               </ul>
//             </div>
//           </div>
//         </motion.div>

//         {/* 3. BOTTOM COPYRIGHT BAR */}
//         <motion.div
//           variants={itemVariants}
//           className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4 font-baloo">
//           <p className="flex items-center flex-wrap justify-center gap-1 text-center">
//             <span>Copyright</span>
//             <FaRegCopyright className="w-3 h-3 inline mx-0.5" />
//             <span>{currentYear}</span>
//             <span className="font-semibold text-white">
//               SyncXel Web Solutions.
//             </span>
//             <span>All rights reserved.</span>
//           </p>

//           <div className="flex items-center gap-4">
//             <Link to="/legal" className="hover:text-white transition-colors">
//               Privacy & Terms
//             </Link>
//             <span className="text-slate-600">•</span>
//             <a
//               href="mailto:syncxelofficial@gmail.com"
//               className="hover:text-white flex items-center gap-1.5 transition-colors">
//               <IoMdMail className="w-3.5 h-3.5" />
//               <span>syncxelofficial@gmail.com</span>
//             </a>
//           </div>

//           {/* Sri Lanka Flag Badge */}
//           <div className="flex items-center space-x-1.5 bg-slate-900 px-3.5 py-1.5 rounded-full border border-white/10 text-slate-300">
//             <span>Handcrafted with</span>
//             <FaHeart className="w-3 h-3 text-slate-400 inline" />
//             <span>in</span>
//             <span className="inline-flex items-center gap-1.5 font-semibold text-white">
//               <img
//                 src="https://flagcdn.com/24x18/lk.png"
//                 alt="Sri Lanka Flag"
//                 className="w-4 h-3 object-cover rounded-xs shadow-xs"
//               />
//               <span>Sri Lanka</span>
//             </span>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Giant Typography at Bottom
//       {/* Giant Typography at Bottom (Clean name with top-to-bottom fade) */}
//       <div
//         className="w-full text-center font-baloo font-[950] text-[15vw] leading-none mt-5 pointer-events-none relative -bottom-4 lg:-bottom-8 z-10 uppercase tracking-tighter select-none"
//         style={{
//           backgroundImage: `
//       linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.01) 80%)
//     `,
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}>
//         Sync
//         <span className="ml-4 lg:ml-12 tracking-wide">Xel.</span>
//       </div>
//     </footer>
//   );
// }




import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaRegCopyright,
  FaCaretRight,
  FaCoffee,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiGithub } from "react-icons/si";
import { HiOutlineSparkles, HiOutlineArrowUpRight } from "react-icons/hi2";

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden rounded-t-3xl w-full text-slate-100 font-baloo">
      <motion.div
        className="max-w-7xl w-full mx-auto space-y-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}>
        
        {/* 1. TOP CTA BOX */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-3xl p-0.5 overflow-hidden group max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,#ffffff_0%,#475569_50%,#ffffff_100%)] opacity-20 animate-[spin_6s_linear_infinite] group-hover:opacity-75 transition-opacity" />

          <div className="relative rounded-[calc(1.5rem-1px)] bg-slate-950/85 backdrop-blur-xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 z-10">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-60 h-60 bg-slate-500/10 rounded-full blur-[90px] pointer-events-none" />

            <div className="space-y-3 max-w-xl text-center md:text-left z-10">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold shadow-xs">
                <HiOutlineSparkles className="w-4 h-4 animate-pulse text-white" />
                <span>Let's Build Something Great</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Ready to elevate your{" "}
                <span className="bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-transparent">
                  digital experience?
                </span>
              </h2>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Explore our production-ready UI components or hire us to build
                your custom web product with precision.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col items-center gap-3 w-full md:w-auto z-10">
              <a
                href="#hire"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-sm transition-all shadow-md hover:scale-[1.02] flex items-center justify-center space-x-2 group/btn active:scale-95">
                <span>Start a Project</span>
                <HiOutlineArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>

              <a
                href="https://buymeacoffee.com/lakshansandeepa"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto md:w-full text-center px-5 py-3.5 rounded-xl bg-[#FFDD00] hover:bg-amber-400 text-amber-950 font-bold text-sm transition-all shadow-md hover:scale-[1.02] flex items-center justify-center space-x-2 active:scale-95">
                <FaCoffee className="w-4 h-4 text-amber-950" />
                <span>Buy Me a Coffee</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* 2. MAIN FOOTER GRID (Brand Info + Link Columns in a unified 12-col grid) */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6 items-start">
          
          {/* Brand Column (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-3 cursor-pointer group w-fit">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-2xl md:text-3xl font-black uppercase text-white leading-none">
                    Sync
                  </span>
                  <span className="text-2xl md:text-3xl font-black uppercase bg-white text-slate-950 px-2 ml-1 rounded-md border border-white/20 shadow-xs leading-none">
                    Xel
                  </span>
                </div>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase mt-1 font-mono">
                  UI MATRIX V2.0
                </span>
              </div>

              <span className="px-2.5 py-0.5 text-[9px] font-extrabold text-white bg-white/10 border border-white/20 rounded-full tracking-wider uppercase">
                Beta
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-lg leading-relaxed">
              Crafting production-ready UI components, design systems, and
              custom web applications for developers and startups globally.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-2.5 pt-2">
              <a
                href="mailto:syncxelofficial@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all shadow-xs"
                title="Email">
                <FaEnvelope className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/lakshan-beast/SyncXel"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all shadow-xs"
                title="GitHub Profile">
                <SiGithub className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/+94707046840"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all shadow-xs"
                title="Whatsapp Business Chat">
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns Grid (Span 7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* 1. Agency & Services */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white font-mono">
                agency
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400 flex flex-col">
                <li>
                  <a href="/#features" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-600 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Platform Features
                  </a>
                </li>
                <li>
                  <a href="/#services" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-600 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Custom Web Apps
                  </a>
                </li>
                <li>
                  <a href="/#how-it-works" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-600 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Our Workflow
                  </a>
                </li>
                <li>
                  <a href="/#team" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-600 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Hire Engineers
                  </a>
                </li>
                <li>
                  <a href="/#contact-section" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-600 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* 2. Governance & Legal */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white font-mono">
                governance
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400 flex flex-col">
                <li>
                  <Link to="/components" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-600 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    UI Matrix Core
                  </Link>
                </li>
                <li>
                  <Link to="/docs" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-600 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/legal" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-600 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Privacy & Terms
                  </Link>
                </li>
                <li>
                  <a href="https://github.com/lakshan-beast/SyncXel" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-600 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Open Source Hub
                  </a>
                </li>
                <li>
                  <a href="/#faq" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-600 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    FAQ / Help
                  </a>
                </li>
              </ul>
            </div>

            {/* 3. Tech Stack & Resources (Fixed invalid <a> tag list nesting) */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white font-mono">
                tech stack
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400 flex flex-col">
                <li>
                  <a href="https://react.dev" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-600 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    React.js Docs
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-600 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Tailwind CSS
                  </a>
                </li>
                <li>
                  <a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-600 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Framer Motion
                  </a>
                </li>
                <li>
                  <a href="https://vite.dev" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-600 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Vite Engine
                  </a>
                </li>
                <li>
                  <a href="https://vercel.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <FaCaretRight className="text-slate-600 transition-transform group-hover:translate-x-0.5 shrink-0" />
                    Vercel Cloud
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </motion.div>

        {/* 3. BOTTOM COPYRIGHT BAR */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          
          <p className="flex items-center flex-wrap justify-center gap-1 text-center">
            <span>Copyright</span>
            <FaRegCopyright className="w-3 h-3 inline mx-0.5" />
            <span>{currentYear}</span>
            <span className="font-semibold text-white">
              SyncXel Web Solutions.
            </span>
            <span>All rights reserved.</span>
          </p>

          <div className="flex items-center gap-4">
            <Link to="/legal" className="hover:text-white transition-colors">
              Privacy & Terms
            </Link>
            <span className="text-slate-600">•</span>
            <a
              href="mailto:syncxelofficial@gmail.com"
              className="hover:text-white flex items-center gap-1.5 transition-colors">
              <IoMdMail className="w-3.5 h-3.5" />
              <span>syncxelofficial@gmail.com</span>
            </a>
          </div>

          {/* Sri Lanka Flag Badge */}
          <div className="flex items-center space-x-1.5 bg-slate-900 px-3.5 py-1.5 rounded-full border border-white/10 text-slate-300 shadow-sm">
            <span>Handcrafted with</span>
            <FaHeart className="w-3 h-3 text-red-500 inline" />
            <span>in</span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-white">
              <img
                src="https://flagcdn.com/24x18/lk.png"
                alt="Sri Lanka Flag"
                className="w-4 h-3 object-cover rounded-[2px] shadow-xs"
              />
              <span>Sri Lanka</span>
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Giant Typography at Bottom */}
      <div
        className="w-full text-center font-[950] text-[15vw] leading-none mt-5 pointer-events-none relative -bottom-4 lg:-bottom-8 z-10 uppercase tracking-tighter select-none"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.01) 85%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
        Sync
        <span className="ml-4 lg:ml-12 tracking-wide">Xel.</span>
      </div>
    </footer>
  );
}