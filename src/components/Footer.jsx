import React, { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    const yearElement = document.getElementById('newYear');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }, []);

  return (
    <footer className="footer container">
      <div className="footersec flex">
        <div className="ftlogo">
          <div className="logo flex">
            <i className="fa-brands fa-napster"></i>
            <h4>KAYTEE</h4>
          </div>
          <p>
            Hello, I am Khánh Trịnh. I am currently a third-year student at FPT University in Hanoi.
            I offer live courses via Google Meet: JPD113 - JPD123 - JPD133.
            I sincerely hope for your support and that we can embark on this journey together.
            Thank you very much for your time and consideration.
          </p>
          <h4>Address</h4>
          <p>FPT University Campus Hanoi</p>
          <p>Viet Nam</p>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <div className="categoriess flex">
            <div className="cate">
              <ul>
                <li>Lesson1</li>
                <li>Lesson2</li>
                <li>Lesson3</li>
                <li>Lesson4</li>
                <li>Lesson5</li>
                <li>Lesson6</li>
              </ul>
            </div>
            <div className="cate">
              <ul>
                <li>Lesson7</li>
                <li>Lesson8</li>
                <li>Lesson9</li>
                <li>Lesson10</li>
                <li>Lesson11</li>
                <li>Learn More</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="newletters" id="subemail">
          <h3>Newletter</h3>
          <p>
            Sharing information about myself and the courses I am teaching is truly a great opportunity to
            connect with others. I hope you will find valuable insights in my courses and join me in
            experiencing exciting things. Thank you all for taking the time to read and support!
          </p>
          <form className="flex">
            <div className="inputemail flex">
              <i className="fa-solid fa-user"></i>
              <input type="email" placeholder="Your email" />
            </div>
            <div className="inputemail flex">
              <i className="fa-regular fa-envelope"></i>
              <input type="email" placeholder="Email address" />
            </div>
          </form>
          <button className="buttonbtn">Subscribe</button>
        </div>
      </div>
      <div className="us flex">
        <div className="copyright">
          <p>&copy; <span id="newYear"></span> Created by <span>Khánh Trịnh</span></p>
        </div>
        <div className="social flex">
          <div className="flex">
            <i className="fa-brands fa-twitter"></i>
            <p>Twitter</p>
          </div>
          <div className="flex">
            <i className="fa-brands fa-facebook"></i>
            <p>Facebook</p>
          </div>
          <div className="flex">
            <i className="fa-brands fa-instagram"></i>
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
