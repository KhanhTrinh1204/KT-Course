import React from 'react';
import BioSection from '../components/BioSection';
import CoursesSection from '../components/CoursesSection';

const Home = () => {
  const courses = [
    {
      id: 1,
      title: 'Long-Term Study Abroad Course',
      tag: '#Du hoc sinh',
      duration: '2.5 years',
      image: './img/UJS_2020.jpg',
      author: 'チン バオ カン',
      period: '2019 - 2021',
      link: 'https://ujsli.jp/en/course01/',
      readMoreLink: 'https://ujsli.jp/en/'
    },
    {
      id: 2,
      title: 'JLPT Japanese-Language Proficiency Test',
      tag: '#JLPT',
      duration: '2 times',
      image: './img/JLPT.jpg',
      author: 'Khanh Trinh',
      period: '2020 & 2024',
      link: 'https://www.jlpt.jp/e/index.html',
      readMoreLink: 'https://www.jlpt.jp/e/index.html'
    },
    {
      id: 3,
      title: 'Elementary Japanese 1-A1/A2 (JPD113)',
      tag: '#FPT Hanoi',
      duration: 'Ses 3',
      image: './img/10.0JPD113.jpg',
      author: 'Khanh Trinh',
      period: 'FPTU Hanoi - Ses 3',
      link: 'https://drive.google.com/file/d/1rnrqzfusv7Uj84bchDsGXWcKW9vCrxsm/view?usp=sharing',
      readMoreLink: 'https://drive.google.com/file/d/1rnrqzfusv7Uj84bchDsGXWcKW9vCrxsm/view?usp=sharing'
    },
    {
      id: 4,
      title: 'Elementary Japanese 1-A1/A2 (JPD123)',
      tag: '#FPT Hanoi',
      duration: 'Ses 4',
      image: './img/10.0JPD123.jpg',
      author: 'Khanh Trinh',
      period: 'FPTU Hanoi - Ses 4',
      link: 'https://drive.google.com/file/d/1rnrqzfusv7Uj84bchDsGXWcKW9vCrxsm/view?usp=sharing',
      readMoreLink: 'https://drive.google.com/file/d/1rnrqzfusv7Uj84bchDsGXWcKW9vCrxsm/view?usp=sharing'
    },
    {
      id: 5,
      title: 'Elementary Japanese 1-A1/A2 (JPD133)',
      tag: '#FPT Hanoi',
      duration: 'Ses 5',
      image: './img/10.0JPD133.jpg',
      author: 'Khanh Trinh',
      period: 'FPTU Hanoi - Ses 5',
      link: 'https://drive.google.com/file/d/1rnrqzfusv7Uj84bchDsGXWcKW9vCrxsm/view?usp=sharing',
      readMoreLink: 'https://drive.google.com/file/d/1rnrqzfusv7Uj84bchDsGXWcKW9vCrxsm/view?usp=sharing'
    }
  ];

  const interests = [
    { name: 'Business', image: 'img/business.png' },
    { name: 'Nature', image: 'img/nature.png' },
    { name: 'Plant', image: 'img/plant.png' },
    { name: 'Interior', image: 'img/interior.png' },
    { name: 'Minimal', image: 'img/minimal.png' },
    { name: 'Animal', image: 'img/animal.png' },
    { name: 'Space', image: 'img/space.png' },
    { name: 'Food', image: 'img/food.png' },
    { name: 'Fashion', image: 'img/fashion.png' },
    { name: 'Lifestyle', image: 'img/lifestyle.png' },
    { name: 'Culture', image: 'img/culture.png' },
    { name: 'Travel', image: 'img/travel.png' }
  ];

  const videos = [
    {
      id: 1,
      title: 'An Easy Way to Learn How to Write Hiragana Correctly',
      label: 'How to write Hiragana',
      description: '"An Easy Way to Learn How to Write Correctly" is a simple and effective guide designed to help learners improve their writing skills.',
      image: 'img/6.png',
      link: 'https://www.youtube.com/watch?v=Cj-9s8f83iQ&t=4s',
      tags: ['#Khanh Trinh', '#Hiragana'],
      duration: '7 mins'
    },
    {
      id: 2,
      title: 'Guidelines on Proper Conduct During the Speaking Examination',
      label: 'TIPS Speaking',
      description: 'This guide provides essential recommendations for appropriate behavior and communication during the speaking examination.',
      image: 'img/speaking jpd.png',
      link: 'https://www.youtube.com/watch?v=CaviXZlh_9k',
      tags: ['#Demo', '#TiengNhatCoBan'],
      duration: '2 mins'
    },
    {
      id: 3,
      title: 'Guidelines for the FE Speaking Examination – Course Code: JPD113',
      label: 'Demo thi thu JPD113',
      description: 'My video provides detailed instructions and practical advice for students taking the FE Speaking Examination in the JPD113 course.',
      image: 'img/Thumbnail_JPD.png',
      link: 'https://www.youtube.com/watch?v=t2rItFzSjuM',
      tags: ['#JDP113', '#Demo FE Speaking'],
      duration: '2 mins'
    },
    {
      id: 4,
      title: 'A promotional video for my course',
      label: 'Advertisement',
      description: 'This promotional video provides an engaging overview of my course, highlighting key features, learning outcomes, and the unique benefits of enrolling.',
      image: 'img/download.jfif',
      link: 'https://www.youtube.com/shorts/DaslL2Hzx2o',
      tags: ['# JPD113', '# JPD123', '# JPD133'],
      duration: '1 mins'
    }
  ];

  const feedbacks = [
    { image: 'img/work-freelancer.png', title: 'Cóc vàng FPTU', subtitle: 'Ses 3', date: 'April 2024' },
    { image: 'img/work-freelancer2.png', title: 'TOPJ N5', subtitle: 'My first achievement', date: 'July 2024' },
    { image: 'img/work-freelancer3.png', title: 'My student got 9.9 JPD123', subtitle: 'Speaking 10.0', date: 'Fall 2024' },
    { image: 'img/work-freelancer4.png', title: 'My student got 10.0 JPD123', subtitle: 'Total 10.0', date: 'Srping 2025' },
    { image: 'img/work-freelancer5.png', title: 'Spring 2025, all students scored above 8.5.', subtitle: 'Min 8.6', date: 'Spring 2025' }
  ];

  const comments = [
    { text: 'Khóa tiếng nhật chất lượng nhất hòa lạc.U I A U U I A', author: 'HE197XXX', date: '01 April 2025' },
    { text: 'Không có Khánh thứ 2 ạ! Sẽ học anh đến hết kỳ 8 JS', author: 'HE187XXX', date: '01 April 2025' },
    { text: 'Cảm ơn anh đã giúp em trả nợ môn thành công mà lại còn được điểm cao', author: 'HE177XXX', date: '01 April 2025' }
  ];

  return (
    <main id="main">
      <BioSection />
      <CoursesSection />

      <div className="rightShawdowImg"></div>
      
      <div className="bigTitle container">
        <h2>Khanh Trinh info</h2>
        <p>Not showing off — just being me</p>
      </div>

      <section className="editorCard container flex">
        {courses.map(course => (
          <div key={course.id} className="edcard">
            <a href={course.link} target="_blank" rel="noopener noreferrer">
              <img src={course.image} alt={course.title} />
              <div className="edcardContent">
                <div className="edcardTime flex">
                  <h5>{course.tag}</h5>
                  <h5 className="flex">
                    <i className="fa-regular fa-clock"></i>
                    <span>{course.duration}</span>
                  </h5>
                </div>
                <h2>{course.title}</h2>
                <div className="edcard-designer flex">
                  <div className="designer flex">
                    <img src="./img/ava-wed.jpg" alt="avatar" />
                    <div className="author">
                      <h5>{course.author}</h5>
                      <span>{course.period}</span>
                    </div>
                  </div>
                  <a href={course.readMoreLink} className="readMore" target="_blank" rel="noopener noreferrer">
                    <span>Read more</span>
                  </a>
                </div>
              </div>
            </a>
          </div>
        ))}
        <div className="readMoreBtn flex">
          <a href="">Show more posts<i className="fa-solid fa-arrow-right"></i></a>
        </div>
      </section>

      <div className="leftShawdow"></div>
      
      <div className="contactbanner container flex">
        <img src="img/contactus.jpg" alt="Contact us" />
      </div>

      <div className="container bigTitle">
        <h2>My Interest</h2>
        <p>A part of me</p>
      </div>

      <div className="tegsec container flex">
        {interests.map((interest, index) => (
          <a key={index} href="/">
            <img src={interest.image} alt={interest.name} />
            {interest.name}
          </a>
        ))}
      </div>

      <div className="recentpostsec container flex">
        <div className="recent">
          <div className="bigTitle">
            <h2>Learn Japanese</h2>
            <p>My youtube channel</p>
          </div>
          {videos.map(video => (
            <div key={video.id} className="posts">
              <div className="post flex">
                <a href={video.link} target="_blank" rel="noopener noreferrer">
                  <img src={video.image} alt={video.title} />
                </a>
                <div className="postdetails">
                  <div className="postlabel">
                    <a href={video.link} target="_blank" rel="noopener noreferrer">
                      {video.label}
                    </a>
                  </div>
                  <h2>{video.title}</h2>
                  <p>{video.description}</p>
                  <div className="posttimeteg flex">
                    <div className="flex">
                      {video.tags.map((tag, idx) => (
                        <h5 key={idx}>{tag}</h5>
                      ))}
                    </div>
                    <h5 className="flex">
                      <i className="fa-regular fa-clock"></i>
                      <span>{video.duration}</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="postslider">
          <div className="popularposts">
            <div className="poptitle">
              <h3>Popular Feedbacks</h3>
            </div>
            <div className="populposts">
              {feedbacks.map((feedback, index) => (
                <div key={index} className="populpost flex">
                  <img src={feedback.image} alt={feedback.title} />
                  <div className="popupostde">
                    <h4>{feedback.title}</h4>
                    <div className="poputime flex">
                      <h5><span>{feedback.subtitle}</span></h5>
                      <p>▪</p>
                      <h5>{feedback.date}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="popularposts">
            <div className="poptitle">
              <h3>Last Comment</h3>
            </div>
            <div className="postcomments">
              {comments.map((comment, index) => (
                <div key={index} className="comment">
                  <p><span>"</span>{comment.text}<span>"</span></p>
                  <div className="authorcomment flex">
                    <img src="img/author.png" alt="author" />
                    <div className="authortimename">
                      <h5>{comment.author}</h5>
                      <span>{comment.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
