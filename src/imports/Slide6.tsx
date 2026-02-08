import imgImage10Jpeg from "figma:asset/5a425fcbf85158b90033fd079f9d39461d8cedd3.png";
import imgImage11Png from "figma:asset/4dd720d87aecdf8305b2588b0f4490facd4d93be.png";

export default function Slide() {
  return (
    <div className="bg-white relative size-full" data-name="Slide 6">
      <div className="absolute h-[180px] left-[-2.14px] top-0 w-[1924.28px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1925 180">
          <path d="M0 0H1924.28V180H0V0Z" fill="var(--fill-0, #4F4F4F)" fillOpacity="0.9" id="Rectangle 4" />
        </svg>
      </div>
      <div className="absolute h-[40.341px] left-[1839px] top-[1025.96px] w-[71.309px]" data-name="Slide Number Placeholder 3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 41">
          <path d="M0 0H71.3094V40.3413H0V0Z" fill="var(--fill-0, black)" id="Slide Number Placeholder 3" />
        </svg>
      </div>
      <div className="absolute left-[119.14px] size-[854.809px] top-[191.32px]" data-name="image10.jpeg">
        <img alt="" className="block max-w-none size-full" height="854.809" src={imgImage10Jpeg} width="854.809" />
      </div>
      <div className="absolute h-[658.286px] left-[1018.59px] top-[367.67px] w-[793.745px]" data-name="image11.png">
        <img alt="" className="block max-w-none size-full" height="658.286" src={imgImage11Png} width="793.745" />
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0.9] left-[515.05px] not-italic text-[0px] text-black text-white top-[91.9px] translate-y-[-50%] w-[1345.21px]">
        <p className="mb-0 text-[72px]">Color Palette</p>
        <p className="text-[48px]">Some thoughts</p>
      </div>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[1130.74px] not-italic text-[20px] text-black top-[214.93px] w-[729.515px]">
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[30px]">
            <span className="leading-none">I asked AI to play on some variations of color palette directions that fit the style I think we want which is strong, confident, baseline colors with bold—but controlled—accent pops.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-none text-[20px]">&nbsp;</span>
          </li>
          <li className="ms-[30px]">
            <span className="leading-none">Use as you see fit</span>
          </li>
        </ul>
        <p className="leading-none">&nbsp;</p>
      </div>
    </div>
  );
}