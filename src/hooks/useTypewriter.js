import { useState, useEffect } from 'react';

export const useTypewriter = (names, typeSpeed = 150, typeBack = 50, typeDelay = 3000) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    
    const type = () => {
      const fullText = names[index];
      
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      let speed = typeSpeed;
      if (isDeleting) {
        speed /= 2;
      }

      if (!isDeleting && text === fullText) {
        speed = typeDelay;
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((index + 1) % names.length);
      }

      timeout = setTimeout(type, speed);
    };

    timeout = setTimeout(type, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, names, typeSpeed, typeBack, typeDelay]);

  return text;
};
