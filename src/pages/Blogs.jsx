import React from 'react';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: 'Cách học Hiragana hiệu quả trong 1 tuần',
      excerpt: 'Chia sẻ phương pháp học thuộc bảng Hiragana nhanh chóng và không bao giờ quên...',
      image: 'img/6.png',
      date: '15 Feb 2025',
      category: 'Learning Tips',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Tips Speaking JPD - Đạt điểm tối đa',
      excerpt: 'Những bí quyết để đạt điểm cao trong phần thi Speaking của các môn JPD...',
      image: 'img/speaking jpd.png',
      date: '10 Feb 2025',
      category: 'Exam Tips',
      readTime: '7 min'
    },
    {
      id: 3,
      title: 'Kinh nghiệm thi JLPT N5 - N4',
      excerpt: 'Chia sẻ kinh nghiệm và chiến lược ôn tập để vượt qua kỳ thi JLPT...',
      image: 'img/JLPT.jpg',
      date: '05 Feb 2025',
      category: 'JLPT',
      readTime: '10 min'
    },
    {
      id: 4,
      title: 'Ngữ pháp tiếng Nhật cơ bản - Phần 1',
      excerpt: 'Tổng hợp các mẫu ngữ pháp cơ bản nhất cho người mới bắt đầu học tiếng Nhật...',
      image: 'img/Thumbnail_JPD.png',
      date: '01 Feb 2025',
      category: 'Grammar',
      readTime: '8 min'
    },
    {
      id: 5,
      title: 'Du học Nhật Bản - Những điều cần biết',
      excerpt: 'Kinh nghiệm du học Nhật Bản và những điều bạn nên chuẩn bị trước khi đi...',
      image: 'img/UJS_2020.jpg',
      date: '28 Jan 2025',
      category: 'Study Abroad',
      readTime: '12 min'
    },
    {
      id: 6,
      title: 'Từ vựng tiếng Nhật theo chủ đề',
      excerpt: 'Học từ vựng hiệu quả bằng cách phân loại theo chủ đề thường gặp...',
      image: 'img/download.jfif',
      date: '25 Jan 2025',
      category: 'Vocabulary',
      readTime: '6 min'
    }
  ];

  return (
    <main id="main">
      <div className="container" style={{ padding: '80px 20px' }}>
        <div className="bigTitle">
          <h2>Blogs</h2>
          <p>Tips, experiences and knowledge about Japanese learning</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '30px',
          marginTop: '50px'
        }}>
          {blogs.map(blog => (
            <article 
              key={blog.id}
              style={{
                background: 'white',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{ 
                height: '200px', 
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  {blog.category}
                </div>
              </div>
              <div style={{ padding: '25px' }}>
                <div style={{ 
                  display: 'flex', 
                  gap: '15px', 
                  marginBottom: '15px',
                  fontSize: '14px',
                  color: '#999'
                }}>
                  <span>
                    <i className="fa-regular fa-calendar" style={{ marginRight: '5px' }}></i>
                    {blog.date}
                  </span>
                  <span>
                    <i className="fa-regular fa-clock" style={{ marginRight: '5px' }}></i>
                    {blog.readTime}
                  </span>
                </div>
                <h3 style={{ 
                  fontSize: '20px', 
                  marginBottom: '15px',
                  color: '#333',
                  lineHeight: '1.4'
                }}>
                  {blog.title}
                </h3>
                <p style={{ 
                  color: '#666', 
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  {blog.excerpt}
                </p>
                <a 
                  href="#"
                  style={{
                    color: '#667eea',
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  Read more
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blogs;
