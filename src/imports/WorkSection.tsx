import { forwardRef } from 'react';

const workImages = [
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351343/work7_q1lm3r.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351520/work8_dvwyfv.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351513/work9_mhakcz.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351394/work1_lbz40f.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351399/work2_ye0ifj.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351344/work3_c8tu93.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351416/work12_guovwx.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351381/work13_c5npch.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351305/work4_u3ewyz.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351304/work5_hsvycw.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351309/work6_mc87n0.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351353/work14_jfuzps.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769352082/work10_xxwlrn.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769352081/work16_l5b920.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351500/work19_iq5rgc.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351441/work20_yct5nc.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351482/work24_gtthil.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351509/work26_jnjbiz.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351439/work25_ih71jw.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351463/work23_klkqug.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351317/work29_wxw1ea.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351511/work21_g5qgu3.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351439/work22_wyiy8h.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351407/work15_icavar.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351404/work11_a3h5ir.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351520/work18_ybkpxv.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351367/work17_ewqo4j.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351344/work28_i2vksu.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351514/work27_ekui3j.png",
  "https://res.cloudinary.com/du2cyv70g/image/upload/v1769351478/work30_athvhz.png",
];

interface WorkContainerProps {
  workImagesRef?: React.MutableRefObject<HTMLDivElement[]>;
}

function WorkContainer({ workImagesRef }: WorkContainerProps) {
  return (
    <div className="relative shrink-0 w-full" data-name="Work container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[8px] relative w-full">
          {workImages.map((imageUrl, index) => (
            <div 
              key={index}
              ref={(el) => { if (el && workImagesRef) workImagesRef.current[index] = el; }}
              className="aspect-[2880/2048] relative shrink-0 w-full" 
              data-name={`image-${index + 1}`}
            >
              <img 
                alt={`Work ${index + 1}`} 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
                src={imageUrl} 
              />
            </div>
          ))}
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
