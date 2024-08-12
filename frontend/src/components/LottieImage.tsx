import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import CEO from "../assets/CEO.json";
import CTO from "../assets/CTO.json";
import COO from "../assets/COO.json"; 

interface LottieImagesProps {
  startIndex?: number; 
  duration?: number; 
  founderImage: string; 
}

const LottieImages = ({ startIndex = 0, duration, founderImage }: LottieImagesProps) => {
  const lottieFiles = [CEO, CTO, COO];
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        console.log('Animation stopped after duration');
      }, duration);

      return () => clearTimeout(timer); 
    }
  }, [duration]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
      style={{ position: "relative", display: "inline-block" }} 
    >
      <Lottie 
        animationData={lottieFiles[startIndex]} 
        loop={!isHovered} 
        autoplay={true} 
        style={{ width: "256px", height: "288px" }} 
      />
      {isHovered && (
        <img
          src={founderImage} 
          alt="Founder"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "256px", 
            height: "288px", 
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      )}
    </div>
  );
};

export default LottieImages;
