import { useState, useEffect, useRef } from 'react';
import svgPaths from "../imports/svg-5m71n9h2rr";

function DownArrowDefault() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="mingcute:down-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p15cf7600} fill="var(--fill-0, #F5F5F5)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function DownArrowPressed() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="mingcute:down-line-pressed">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <path d="M18 12L12 18L6 12M18 18L12 24L6 18" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function UpArrowDefault() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="mingcute:up-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p15cf7600} fill="var(--fill-0, #F5F5F5)" fillRule="evenodd" id="Vector_2" transform="rotate(180 12 12)" />
        </g>
      </svg>
    </div>
  );
}

function UpArrowPressed() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="mingcute:up-line-pressed">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <path d="M6 12L12 6L18 12M6 6L12 0L18 6" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

interface WorkNavigationProps {
  onNavigate: (direction: 'up' | 'down') => void;
  direction: 'up' | 'down';
}

export function WorkNavigation({ onNavigate, direction }: WorkNavigationProps) {
  const [isPressed, setIsPressed] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isHeldRef = useRef(false);

  const handleMouseDown = () => {
    setIsPressed(true);
    isHeldRef.current = true;
    
    // Immediate single scroll
    onNavigate(direction);
    
    // Start continuous scroll after 500ms delay
    intervalRef.current = setTimeout(() => {
      if (isHeldRef.current) {
        intervalRef.current = setInterval(() => {
          if (isHeldRef.current) {
            onNavigate(direction);
          }
        }, 300);
      }
    }, 500);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    isHeldRef.current = false;
    if (intervalRef.current) {
      clearInterval(intervalRef.current as NodeJS.Timeout);
      clearTimeout(intervalRef.current as unknown as NodeJS.Timeout);
      intervalRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsPressed(false);
    isHeldRef.current = false;
    if (intervalRef.current) {
      clearInterval(intervalRef.current as NodeJS.Timeout);
      clearTimeout(intervalRef.current as unknown as NodeJS.Timeout);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
        clearTimeout(intervalRef.current as unknown as NodeJS.Timeout);
      }
    };
  }, []);

  return (
    <button
      className="bg-[#0a0a0a] relative rounded-[26px] size-[52px] cursor-pointer transition-opacity hover:opacity-80"
      data-name="Navigation"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      type="button"
      aria-label={`Navigate ${direction}`}
    >
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[14px] relative rounded-[inherit] size-full">
        {direction === 'down' ? (
          isPressed ? <DownArrowPressed /> : <DownArrowDefault />
        ) : (
          isPressed ? <UpArrowPressed /> : <UpArrowDefault />
        )}
      </div>
      <div 
        aria-hidden="true" 
        className="absolute border-[#1a1a1a] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[26px] shadow-[0px_0px_2px_1px_rgba(255,255,255,0.02)]" 
      />
    </button>
  );
}
