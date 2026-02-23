import React, { useRef, useEffect } from 'react';

const CoursesSection = () => {
  const cardWrapperRef = useRef(null);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    const cardWrapper = cardWrapperRef.current;
    if (!cardWrapper) return;

    const handleScroll = () => {
      if (autoScrollRef.current) {
        clearTimeout(autoScrollRef.current);
      }

      const scrollLeft = cardWrapper.scrollLeft;
      const scrollWidth = cardWrapper.scrollWidth;
      const offsetWidth = cardWrapper.offsetWidth;

      if (scrollLeft === 0) {
        cardWrapper.classList.add('no-smooth');
        cardWrapper.scrollLeft = scrollWidth - (2 * offsetWidth);
        cardWrapper.classList.remove('no-smooth');
      } else if (scrollLeft === scrollWidth - offsetWidth) {
        cardWrapper.classList.add('no-smooth');
        cardWrapper.scrollLeft = offsetWidth;
        cardWrapper.classList.remove('no-smooth');
      }

      autoScrollRef.current = setTimeout(() => {
        cardWrapper.classList.remove('no-smooth');
        const widthToScroll = cardWrapper.children[0]?.offsetWidth || 0;
        cardWrapper.scrollLeft += widthToScroll;
      }, 3000);
    };

    cardWrapper.addEventListener('scroll', handleScroll);
    return () => {
      cardWrapper.removeEventListener('scroll', handleScroll);
      if (autoScrollRef.current) clearTimeout(autoScrollRef.current);
    };
  }, []);

  const handlePrevClick = () => {
    const cardWrapper = cardWrapperRef.current;
    if (cardWrapper) {
      const widthToScroll = cardWrapper.children[0]?.offsetWidth || 0;
      cardWrapper.scrollLeft -= widthToScroll;
    }
  };

  const handleNextClick = () => {
    const cardWrapper = cardWrapperRef.current;
    if (cardWrapper) {
      const widthToScroll = cardWrapper.children[0]?.offsetWidth || 0;
      cardWrapper.scrollLeft += widthToScroll;
    }
  };

  return (
    <section className="container hottopics flex">
      <div className="topics">
        <h3>Our Courses</h3>
        <p>Các khóa học hướng đến việc mang đến trải nghiệm tích cực và chất lượng tốt nhất cho mọi người !!!</p>
        <div className="lrbtn">
          <button className="leftbtn" onClick={handlePrevClick}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="rightbtn" onClick={handleNextClick}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="hotcards flex" ref={cardWrapperRef}>
        <div className="hcard">
          <a href="">
            <img src="img/JPD113.jpg" alt="" />
            <div className="hdetails">
              <div className="hdetail"></div>
            </div>
          </a>
        </div>
        <div className="hcard">
          <a href="/">
            <img src="img/JPD123.jpg" alt="" />
            <div className="hdetails">
              <div className="hdetail"></div>
            </div>
          </a>
        </div>
        <div className="hcard">
          <a href="/">
            <img src="img/JPD133.jpg" alt="" />
            <div className="hdetails">
              <div className="hdetail"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
