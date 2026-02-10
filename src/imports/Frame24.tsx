import svgPaths from "./svg-0fqsv81rlq";

function IconParkOutlineDoubleDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon-park-outline:double-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon-park-outline:double-down">
          <path d={svgPaths.p1f185c00} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative size-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#4c4c4c] text-[14px]">Scroll down to explore</p>
      <IconParkOutlineDoubleDown />
    </div>
  );
}
