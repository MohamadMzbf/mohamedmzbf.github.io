import React from "react";
import { TypeAnimation } from "react-type-animation";

const Typewriter = ({ text, delay, infinite }) => {
  /*   const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex < text.length ) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
    } else if (infinite) { // ADD THIS CHECK
        setCurrentIndex(0);
        setCurrentText('');
      }
  
      return () => clearTimeout(timeout);
    
  }, [currentIndex, delay, text]); */

  return (
    <>
      {/* <span style={{ color: 'whitesmoke' }}>{currentText}</span> */}

      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Software Engineer",
          2000, // wait 1s before replacing "Mice" with "Hamsters"
          "Full Stack Developer",
          1000,
          "Laravel Developer",
          1000,
          "React js Enthusiast",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{
          fontSize: "2em",
          display: "inline-block",
          color: "whitesmoke",
        }}
        repeat={Infinity}
      />
    </>
  );
};

export default Typewriter;
