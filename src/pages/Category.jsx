import React from 'react';

const Category = () => {
  const categories = [
    {
      id: 1,
      name: 'Hiragana',
      description: 'Học bảng chữ cái Hiragana cơ bản',
      icon: 'あ',
      color: '#667eea',
      lessons: 46
    },
    {
      id: 2,
      name: 'Katakana',
      description: 'Học bảng chữ cái Katakana',
      icon: 'ア',
      color: '#764ba2',
      lessons: 46
    },
    {
      id: 3,
      name: 'Kanji',
      description: 'Học chữ Hán cơ bản',
      icon: '漢',
      color: '#f093fb',
      lessons: 80
    },
    {
      id: 4,
      name: 'Grammar',
      description: 'Ngữ pháp tiếng Nhật cơ bản',
      icon: '文',
      color: '#4facfe',
      lessons: 50
    },
    {
      id: 5,
      name: 'Vocabulary',
      description: 'Từ vựng theo chủ đề',
      icon: '語',
      color: '#43e97b',
      lessons: 100
    },
    {
      id: 6,
      name: 'Speaking',
      description: 'Luyện nói và phát âm',
      icon: '話',
      color: '#fa709a',
      lessons: 30
    },
    {
      id: 7,
      name: 'Listening',
      description: 'Luyện nghe hiểu',
      icon: '聞',
      color: '#fee140',
      lessons: 40
    },
    {
      id: 8,
      name: 'Reading',
      description: 'Luyện đọc hiểu',
      icon: '読',
      color: '#30cfd0',
      lessons: 35
    },
    {
      id: 9,
      name: 'Writing',
      description: 'Luyện viết câu và đoạn văn',
      icon: '書',
      color: '#a8edea',
      lessons: 25
    },
    {
      id: 10,
      name: 'JLPT N5',
      description: 'Ôn thi JLPT N5',
      icon: 'N5',
      color: '#ff6b6b',
      lessons: 60
    },
    {
      id: 11,
      name: 'JLPT N4',
      description: 'Ôn thi JLPT N4',
      icon: 'N4',
      color: '#ee5a6f',
      lessons: 70
    },
    {
      id: 12,
      name: 'Culture',
      description: 'Văn hóa Nhật Bản',
      icon: '🎌',
      color: '#c471ed',
      lessons: 20
    }
  ];

  return (
    <main id="main">
      <div className="container" style={{ padding: '80px 20px' }}>
        <div className="bigTitle">
          <h2>Categories</h2>
          <p>Explore Japanese learning topics</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '30px',
          marginTop: '50px'
        }}>
          {categories.map(category => (
            <div 
              key={category.id}
              style={{
                background: 'white',
                borderRadius: '15px',
                padding: '30px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: `3px solid ${category.color}20`
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
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                color: 'white',
                fontWeight: 'bold',
                marginBottom: '20px'
              }}>
                {category.icon}
              </div>
              <h3 style={{ 
                fontSize: '24px', 
                marginBottom: '10px',
                color: '#333'
              }}>
                {category.name}
              </h3>
              <p style={{ 
                color: '#666', 
                lineHeight: '1.6',
                marginBottom: '15px'
              }}>
                {category.description}
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: category.color,
                fontWeight: '600'
              }}>
                <i className="fa-solid fa-book"></i>
                <span>{category.lessons} lessons</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Category;
