import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import CodeGoalPopUp from "./CodeGoalPopUp";
import AcademicBreakPopUp from "./AcademicBreakPopUp";

function NameTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center not-italic relative shrink-0" data-name="Name & Title">
      <p className="font-['Inter',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-2xl sm:text-3xl text-white tracking-[-0.72px]">Basit Ogunlana</p>
      <p className="font-['Inter',sans-serif] font-medium leading-[1.45] relative shrink-0 text-[#f5f5f5] text-[16px]">
        <span>Product Designer, </span>
        <span className="text-[#707070]">currently building GreshFi</span>
      </p>
    </div>
  );
}

function About() {
  const [showPopup, setShowPopup] = useState(false);
  const [showAcademicBreakPopup, setShowAcademicBreakPopup] = useState(false);

  return (
    <div className="content-stretch flex flex-col font-['Inter',sans-serif] font-normal gap-[20px] items-start not-italic relative shrink-0 text-[#f5f5f5] text-[16px] w-full" data-name="About">
      <p className="leading-[1.45] relative shrink-0 w-full">Designers often say the best designs are subtle — I believe they are not just subtle, rather they engage the user's curiosity and impress.</p>
      <div className="leading-[1.45] relative shrink-0 w-full">
        <span>I enjoy being in the middle of what it takes to achieve that. From initial sketches to shipped digital products, I craft intuitive user experiences through design and </span>
        <span 
          className="decoration-dotted text-[#707070] underline relative inline-block cursor-default"
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
        >
          code
          <AnimatePresence>
            {showPopup && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  opacity: { duration: 0.21, ease: "easeOut" },
                  scale: { duration: 0.21, ease: "easeOut" },
                  y: { duration: 0.21, ease: "easeOut" }
                }}
                className="absolute bottom-full left-0 mb-[3px] z-20"
              >
                <CodeGoalPopUp />
              </motion.div>
            )}
          </AnimatePresence>
        </span>
        <span>.</span>
      </div>
      <p className="leading-[1.45] relative shrink-0 w-full">This site is a collection of works where I have helped make the digital world feel a little more exceptional.</p>
      <p className="leading-[1.45] relative shrink-0 w-full">
        <span>I have had the pleasure of working with the brilliant teams at Sphera, Xpress Payments, GoBe, and now? I'm looking for my next challenge after an </span>
        <span 
          className="decoration-dotted text-[#707070] underline relative inline-block cursor-default"
          onMouseEnter={() => setShowAcademicBreakPopup(true)}
          onMouseLeave={() => setShowAcademicBreakPopup(false)}
        >
          academic break
          <AnimatePresence>
            {showAcademicBreakPopup && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  opacity: { duration: 0.21, ease: "easeOut" },
                  scale: { duration: 0.21, ease: "easeOut" },
                  y: { duration: 0.21, ease: "easeOut" }
                }}
                className="absolute bottom-full left-0 mb-[3px] z-20"
              >
                <AcademicBreakPopUp />
              </motion.div>
            )}
          </AnimatePresence>
        </span>
        <span>. </span>
      </p>
      <p className="leading-[1.45] relative shrink-0 w-full">Want to connect? You can send an email or reach out on X if you'd like to chat over a cup of coffee sometime.</p>
    </div>
  );
}

function Email() {
  return (
    <a 
      href="mailto:hello@basito.work" 
      className="text-[#f5f5f5] decoration-dotted font-['Inter',sans-serif] font-medium text-[16px] underline hover:decoration-solid"
    >
      Email
    </a>
  );
}

function X() {
  return (
    <a 
      href="https://twitter.com/theabdulbasit_" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-[#f5f5f5] decoration-dotted font-['Inter',sans-serif] font-medium text-[16px] underline hover:decoration-solid"
    >
      X
    </a>
  );
}

function LinkedIn() {
  return (
    <a 
      href="https://linkedin.com/in/basit-ogunlana-156821205" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-[#f5f5f5] decoration-dotted font-['Inter',sans-serif] font-medium text-[16px] underline hover:decoration-solid"
    >
      LinkedIn
    </a>
  );
}

function Contacts() {
  return (
    <div className="flex gap-[24px] items-center relative shrink-0" data-name="Contacts">
      <Email />
      <X />
      <LinkedIn />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[512px] relative shrink-0 w-full" data-name="Text container">
      <NameTitle />
      <About />
      <Contacts />
    </div>
  );
}

export default function AboutSection() {
  return (
    <div className="content-stretch flex flex-col items-center justify-bottom pb-[96px] pt-[160px] px-[32px] relative size-full" data-name="About section">
      <TextContainer />
    </div>
  );
}
