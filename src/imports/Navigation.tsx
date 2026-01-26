import svgPaths from "./svg-5m71n9h2rr";

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

export default function Navigation() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[26px] size-full" data-name="Navigation">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[14px] relative rounded-[inherit] size-full">
        <MingcuteDownLine />
      </div>
      <div aria-hidden="true" className="absolute border-[#1a1a1a] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[26px] shadow-[0px_0px_2px_1px_rgba(255,255,255,0.02)]" />
    </div>
  );
}