export default function AcademicBreakPopUp() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[12px] w-[244px]" data-name="Academic break pop-up">
      <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.45] not-italic overflow-clip p-[12px] relative rounded-[inherit] w-full">
        <p className="css-4hzbpn font-['Inter',sans-serif] font-medium relative shrink-0 text-[#e5e5e5] text-[14px] w-full">Q3 2024 - Q4 2025</p>
        <div className="content-stretch flex flex-col font-['Inter',sans-serif] font-normal gap-[4px] items-start relative shrink-0 text-[14px] w-full">
          <p className="css-4hzbpn relative shrink-0 text-[#e5e5e5] w-full">M.Sc. Artificial Intelligence Technology</p>
          <p className="css-4hzbpn relative shrink-0 text-[#919191] w-full">Northumbria University, London.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#666666] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_2px_1px_rgba(255,255,255,0.02)]" />
    </div>
  );
}
