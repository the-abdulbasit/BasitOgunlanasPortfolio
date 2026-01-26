const imgImage42 = "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351520/work18_ybkpxv.png";
const imgImage44 = "https://res.cloudinary.com/du2cyv70g/image/upload/v1769352081/work16_l5b920.png";
const imgImage46 = "https://res.cloudinary.com/du2cyv70g/image/upload/v1769352082/work10_xxwlrn.png";
import { forwardRef } from 'react';

interface WorkContainerProps {
  workImagesRef?: React.MutableRefObject<HTMLDivElement[]>;
}

function WorkContainer({ workImagesRef }: WorkContainerProps) {
  return (
    <div className="relative shrink-0 w-full" data-name="Work container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[8px] relative w-full">
          <div 
            ref={(el) => { if (el && workImagesRef) workImagesRef.current[0] = el; }}
            className="aspect-[2880/2048] relative shrink-0 w-full" 
            data-name="image 42"
          >
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage42} />
          </div>
          <div 
            ref={(el) => { if (el && workImagesRef) workImagesRef.current[1] = el; }}
            className="aspect-[2880/2048] relative shrink-0 w-full" 
            data-name="image 44"
          >
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage44} />
          </div>
          <div 
            ref={(el) => { if (el && workImagesRef) workImagesRef.current[2] = el; }}
            className="aspect-[2880/2048] relative shrink-0 w-full" 
            data-name="image 46"
          >
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage46} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorkSection({ workImagesRef }: WorkContainerProps) {
  return (
    <div className="content-stretch flex flex-col items-center justify-end py-[8px] relative size-full" data-name="Work section">
      <WorkContainer workImagesRef={workImagesRef} />
    </div>
  );
}
