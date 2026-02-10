import imgBottomGradient from "figma:asset/a94a0d0c9f07f2f8242a0a39140baa0bb20ed7a6.png";
import AboutSection from "./AboutSection";
import WorkSection from "./WorkSection";
import Frame24 from "./Frame24";
import { useState, useEffect, useRef } from 'react';
import { WorkNavigation } from '../components/WorkNavigation';

function AboutContainer() {
  return (
    <div className="h-[1024px] relative shrink-0 w-full" data-name="About Container">
      <div className="flex flex-col items-center justify-end size-full">
        <AboutSection />
      </div>
    </div>
  );
}

function BottomGradient() {
  return (
    <div className="fixed bottom-0 h-[64px] left-0 w-full pointer-events-none z-10" data-name="Bottom Gradient">
      <img alt="" className="absolute backdrop-blur-[3px] inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBottomGradient} />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[40px] items-start leading-[1.45] max-w-[512px] not-italic relative shrink-0 text-[#f5f5f5] text-[16px] w-full" data-name="Content">
      <p className="css-4hzbpn relative shrink-0 w-full">{`Works above are from personal projects and commercial work for Sphera, GoBe, Xpress Payments & others.`}</p>
      <p className="css-4hzbpn relative shrink-0 w-full">hello@basito.work</p>
    </div>
  );
}

function InnerContainer() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Inner container">
      <div className="flex flex-col items-center justify-start size-full">
        <div className="content-stretch flex flex-col items-center justify-start px-[32px] relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function OuterContainer() {
  return (
    <div className="h-[632px] relative shrink-0 w-full" data-name="Outer container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pt-[120px] pb-[96px] px-[96px] relative size-full">
          <InnerContainer />
        </div>
      </div>
    </div>
  );
}

export default function PortfolioWebVersion() {
  const [showNavigation, setShowNavigation] = useState(false);
  const [showScrollDownPrompt, setShowScrollDownPrompt] = useState(true);
  const [navigationDirection, setNavigationDirection] = useState<'up' | 'down'>('down');
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);
  const workSectionRef = useRef<HTMLDivElement>(null);
  const workImagesRef = useRef<HTMLDivElement[]>([]);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!workSectionRef.current) return;

      const rect = workSectionRef.current.getBoundingClientRect();
      const isInWorkSection = rect.top < window.innerHeight && rect.bottom > 0;

      setShowNavigation(isInWorkSection);
      
      // Hide scroll down prompt when we reach the work section
      if (rect.top < window.innerHeight * 0.8) {
        setShowScrollDownPrompt(false);
      } else {
        setShowScrollDownPrompt(true);
      }

      // Determine scroll direction
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setNavigationDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setNavigationDirection('up');
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (direction: 'up' | 'down') => {
    const totalWorks = 3;
    let nextIndex = currentWorkIndex;

    if (direction === 'down') {
      nextIndex = Math.min(currentWorkIndex + 1, totalWorks - 1);
    } else {
      nextIndex = Math.max(currentWorkIndex - 1, 0);
    }

    if (nextIndex !== currentWorkIndex && workImagesRef.current[nextIndex]) {
      workImagesRef.current[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
      setCurrentWorkIndex(nextIndex);
    }
  };

  return (
    <div className="bg-[#050505] flex flex-col items-start relative w-full" data-name="Portfolio (Web version)">
      <AboutContainer />
      <div ref={workSectionRef} className="w-full">
        <WorkSection workImagesRef={workImagesRef} />
      </div>
      <OuterContainer />
      
      {/* Scroll down to explore - positioned 20px above gradient */}
      {showScrollDownPrompt && (
        <div className="fixed bottom-[84px] left-0 right-0 z-10 flex justify-center pointer-events-none">
          <Frame24 />
        </div>
      )}
      
      <BottomGradient />
      
      {showNavigation && (
        <div className="fixed bottom-[96px] right-[32px] z-20 pointer-events-auto">
          <WorkNavigation onNavigate={handleNavigate} direction={navigationDirection} />
        </div>
      )}
    </div>
  );
}