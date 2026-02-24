import React from 'react';
import { Link } from 'react-router-dom';

const Pages = () => {
  const pages = [
    {
      id: 1,
      title: 'JPD113 - Elementary Japanese 1',
      description: 'Môn tiếng Nhật cơ bản đầu tiên, học chữ cái và ngữ pháp nhập môn',
      icon: '📚',
      link: '/pages/jpd113',
      color: '#667eea'
    },
    {
      id: 2,
      title: 'JPD123 - Elementary Japanese 2',
      description: 'Tiếp nối JPD113, mở rộng ngữ pháp và từ vựng',
      icon: '📖',
      link: '/pages/jpd123',
      color: '#764ba2'
    },
    {
      id: 3,
      title: 'JPD133 - Elementary Japanese 3',
      description: 'Hoàn thiện kiến thức tiếng Nhật sơ cấp',
      icon: '📝',
      link: '/pages/jpd133',
      color: '#f093fb'
    },
    {
      id: 4,
      title: 'JLPT Preparation',
      description: 'Tài liệu và tips ôn thi JLPT N5, N4',
      icon: '🎯',
      link: '/pages/jlpt',
      color: '#4facfe'
    },
    {
      id: 5,
      title: 'Speaking Practice',
      description: 'Luyện tập kỹ năng nói và phát âm',
      icon: '🗣️',
      link: '/pages/speaking',
      color: '#43e97b'
    },
    {
      id: 6,
      title: 'Grammar Guide',
      description: 'Tổng hợp ngữ pháp tiếng Nhật từ cơ bản đến nâng cao',
      icon: '📋',
      link: '/pages/grammar',
      color: '#fa709a'
    },
    {
      id: 7,
      title: 'Vocabulary Lists',
      description: 'Danh sách từ vựng theo chủ đề và cấp độ',
      icon: '📚',
      link: '/pages/vocabulary',
      color: '#fee140'
    },
    {
      id: 8,
      title: 'Study Resources',
      description: 'Tài liệu học tập, sách, video hữu ích',
      icon: '📦',
      link: '/pages/resources',
      color: '#30cfd0'
    },
    {
      id: 9,
      title: 'Student Feedback',
      description: 'Phản hồi và thành tích của học viên',
      icon: '⭐',
      link: '/pages/feedback',
      color: '#a8edea'
    }
  ];

  return (
    <main id="main">
      <div className="container" style={{ padding: '80px 20px' }}>
        <div className="bigTitle">
          <h2>Pages</h2>
          <p>Explore all course materials and resources</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px',
          marginTop: '50px'
        }}>
          {pages.map(page => (
            <Link
              key={page.id}
              to={page.link}
              style={{
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <div 
                style={{
                  background: 'white',
                  borderRadius: '15px',
                  padding: '30px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px'
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
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  background: `linear-gradient(135deg, ${page.color}, ${page.color}dd)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '30px'
                }}>
                  {page.icon}
                </div>
                <h3 style={{ 
                  fontSize: '20px',
                  color: '#333',
                  margin: 0
                }}>
                  {page.title}
                </h3>
                <p style={{ 
                  color: '#666', 
                  lineHeight: '1.6',
                  margin: 0,
                  flex: 1
                }}>
                  {page.description}
                </p>
                <div style={{
                  color: page.color,
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  View details
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Pages;
