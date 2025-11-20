import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IdentityCard from './components/IdentityCard';
import CyberNav from './components/CyberNav';
import GigHistory from './components/GigHistory';
import CyberwareTree from './components/CyberwareTree';
import Holocall from './components/Holocall';
import Sudoku from './components/Sudoku';
import Wordle from './components/Wordle';
import CyberBackground from './components/CyberBackground';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import { profileData } from './data/profile';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <IdentityCard profile={profileData} />
          </motion.div>
        );
      case 'experience':
        return (
          <motion.div
            key="experience"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="w-full pt-8 pb-32"
          >
            <GigHistory experience={profileData.experience} />
          </motion.div>
        );
      case 'skills':
        return (
          <motion.div
            key="skills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full pt-12 pb-32"
          >
            <CyberwareTree skills={profileData.skills} />
          </motion.div>
        );
      case 'games':
        return (
          <motion.div
            key="games"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-[1800px] mx-auto pt-12 pb-32 text-center"
          >
            <h2 className="text-5xl font-cyber text-cp-pink mb-4 text-shadow-glitch">FUNZONE</h2>
            <p className="text-xl font-mono text-cp-dim mb-12">Take a break and challenge yourself</p>
            <div className="grid md:grid-cols-2 gap-12 px-6">
              <div className="bg-cp-dark/50 backdrop-blur-md p-6 border border-cp-pink relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-cp-pink text-cp-black font-bold px-2 py-1 text-xs">NEW</div>
                <h3 className="text-3xl font-cyber text-cp-pink mb-4">SUDOKU</h3>
                <p className="text-cp-text mb-6 font-tech">Solve the classic 9x9 puzzle.</p>
                <Sudoku />
              </div>
              <div className="bg-cp-dark/50 backdrop-blur-md p-6 border border-cp-yellow relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-cp-yellow text-cp-black font-bold px-2 py-1 text-xs">NEW</div>
                <h3 className="text-3xl font-cyber text-cp-yellow mb-4">WORDLE</h3>
                <p className="text-cp-text mb-6 font-tech">Guess the 5-letter word in 6 tries.</p>
                <Wordle />
              </div>
            </div>
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="w-full pt-12 pb-32"
          >
            <Holocall contact={profileData.contact} />
          </motion.div>
        );
      case 'certifications':
        return (
          <motion.div
            key="certifications"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full pt-8 pb-32"
          >
            <Certifications certifications={profileData.certifications} />
          </motion.div>
        );
      case 'achievements':
        return (
          <motion.div
            key="achievements"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full pt-8 pb-32"
          >
            <Achievements
              publications={profileData.publications}
              awards={profileData.awards}
              projects={profileData.projects}
              volunteerWork={profileData.volunteerWork}
            />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-cp-bg text-cp-text overflow-hidden relative font-tech selection:bg-cp-pink selection:text-white">
      {/* Cyberpunk Animated Background */}
      <CyberBackground />

      {/* Scanline Overlay */}
      <div className="scanlines fixed inset-0 pointer-events-none z-50 opacity-30"></div>

      {/* Background Grid */}
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0"></div>

      {/* Main Content Area */}
      <main className="h-screen overflow-y-auto overflow-x-hidden scrollbar-hide relative z-10">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>

      {/* Cyber Navigation HUD */}
      <CyberNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
