import { useState, useEffect, useRef } from 'react';
import svgPaths from "../imports/svg-5m71n9h2rr";

function MingcuteDownLine() {
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

function MingcuteUpLine() {
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

interface WorkNavigationProps {
  onNavigate: (direction: 'up' | 'down') => void;
  direction: 'up' | 'down';
}

export function WorkNavigation({ onNavigate, direction }: WorkNavigationProps) {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseDown = () => {
    // Immediate single scroll
    onNavigate(direction);
    
    // Start continuous scroll after a brief delay
    intervalRef.current = setInterval(() => {
      onNavigate(direction);
    }, 800);
  };

  const handleMouseUp = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
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
      onClick={(e) => e.preventDefault()} // Prevent default click since we handle it in mousedown
    >
      <div className="content-stretch flex flex-col items-start overflow-clip p-[14px] relative rounded-[inherit] size-full">
        {direction === 'down' ? <MingcuteDownLine /> : <MingcuteUpLine />}
      </div>
      <div aria-hidden="true" className="absolute border-[#1a1a1a] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[26px] shadow-[0px_0px_2px_1px_rgba(255,255,255,0.02)]" />
    </button>
  );
}
