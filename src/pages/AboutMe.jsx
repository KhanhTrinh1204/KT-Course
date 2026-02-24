import { useState } from 'react';

const AboutMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Mình sẽ phản hồi sớm nhất có thể.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main id="main">
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 20px 60px',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative circles */}
        <div style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          opacity: '0.1',
          top: '-100px',
          left: '-100px'
        }}></div>
        <div style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #f093fb, #f5576c)',
          opacity: '0.1',
          bottom: '-50px',
          right: '-50px'
        }}></div>

        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Left side - Image */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '400px'
            }}>
              {/* Background circle */}
              <div style={{
                position: 'absolute',
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 0
              }}></div>
              
              {/* Profile image placeholder */}
              <div style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                aspectRatio: '1',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '8px solid white',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '120px'
              }}>
                👨‍🏫
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h1 style={{
              fontSize: '48px',
              fontWeight: '700',
              marginBottom: '10px',
              color: '#2d3748'
            }}>
              Hello, I'm <span style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Khánh Trịnh</span>
            </h1>
            
            <h2 style={{
              fontSize: '28px',
              color: '#667eea',
              marginBottom: '30px',
              fontWeight: '500'
            }}>
              Japanese Language Instructor
            </h2>

            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#4a5568',
              marginBottom: '20px'
            }}>
              Giảng viên tiếng Nhật tại <strong>FPT University Hanoi</strong> với niềm đam mê 
              giảng dạy và chia sẻ kiến thức. Đã đạt chứng chỉ <strong>JLPT N2</strong> và 
              đang học <strong>Business Japanese</strong> cùng chuẩn bị thi <strong>N1</strong>.
            </p>

            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#4a5568',
              marginBottom: '30px'
            }}>
              Du học sinh Nhật Bản (2019-2021) tại UJS Language Institute. 
              Giảng dạy các môn JPD113, JPD123, JPD133 và tạo nội dung học tiếng Nhật trên YouTube.
            </p>

            <a 
              href="#contact"
              style={{
                display: 'inline-block',
                padding: '15px 40px',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                borderRadius: '50px',
                fontSize: '18px',
                fontWeight: '600',
                textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                marginBottom: '30px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.4)';
              }}
            >
              GET IN TOUCH
            </a>

            <div style={{ marginTop: '30px' }}>
              <p style={{ 
                fontSize: '16px', 
                color: '#718096',
                marginBottom: '15px'
              }}>
                facebook.com/kaytee1204
              </p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <a 
                  href="https://www.facebook.com/kaytee1204/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#667eea',
                    fontSize: '24px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a 
                  href="#youtube" 
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ff0000',
                    fontSize: '24px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a 
                  href="#instagram" 
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#E1306C',
                    fontSize: '24px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a 
                  href="#linkedin" 
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0077b5',
                    fontSize: '24px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Skills Section */}
      <section style={{ padding: '80px 20px', background: 'white' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            <div style={{
              padding: '40px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              borderRadius: '20px',
              color: 'white',
              boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>🎓</div>
              <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Trình độ</h3>
              <ul style={{ lineHeight: '2', listStyle: 'none', padding: 0 }}>
                <li>✅ JLPT N2 Certified</li>
                <li>📚 Business Japanese</li>
                <li>🎯 Preparing for N1</li>
              </ul>
            </div>

            <div style={{
              padding: '40px',
              background: 'linear-gradient(135deg, #f093fb, #f5576c)',
              borderRadius: '20px',
              color: 'white',
              boxShadow: '0 10px 30px rgba(240, 147, 251, 0.3)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>👨‍🏫</div>
              <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Giảng dạy</h3>
              <ul style={{ lineHeight: '2', listStyle: 'none', padding: 0 }}>
                <li>📖 JPD113, JPD123, JPD133</li>
                <li>🏫 FPT University Hanoi</li>
                <li>🎥 YouTube Content Creator</li>
              </ul>
            </div>

            <div style={{
              padding: '40px',
              background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
              borderRadius: '20px',
              color: 'white',
              boxShadow: '0 10px 30px rgba(79, 172, 254, 0.3)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>🏆</div>
              <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Thành tích</h3>
              <ul style={{ lineHeight: '2', listStyle: 'none', padding: 0 }}>
                <li>🥇 Students: 9.9-10.0</li>
                <li>📈 Spring 2025: 8.5+</li>
                <li>🏅 Best Course in Hòa Lạc</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '80px 20px', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: '700', color: '#2d3748', marginBottom: '15px' }}>
              📞 Get In Touch
            </h2>
            <p style={{ fontSize: '18px', color: '#718096' }}>
              Feel free to contact me for Japanese learning support
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {/* Contact Form */}
            <div style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ marginBottom: '30px', fontSize: '28px', color: '#2d3748' }}>Send Message</h3>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#4a5568' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '10px',
                      fontSize: '16px',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#4a5568' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '10px',
                      fontSize: '16px',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#4a5568' }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '10px',
                      fontSize: '16px',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#4a5568' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '14px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '10px',
                      fontSize: '16px',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                      resize: 'vertical'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '18px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    boxShadow: '0 5px 20px rgba(102, 126, 234, 0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 5px 20px rgba(102, 126, 234, 0.4)';
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                marginBottom: '30px'
              }}>
                <h3 style={{ marginBottom: '30px', fontSize: '28px', color: '#2d3748' }}>Contact Info</h3>
                
                <div style={{ marginBottom: '25px' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '20px'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '28px'
                    }}>
                      <i className="fa-brands fa-facebook"></i>
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '5px', fontSize: '18px', color: '#2d3748' }}>Facebook</h4>
                      <a 
                        href="https://www.facebook.com/kaytee1204/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#667eea', textDecoration: 'none', fontSize: '16px' }}
                      >
                        facebook.com/kaytee1204
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '20px'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #ff0000, #cc0000)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '28px'
                    }}>
                      <i className="fa-brands fa-youtube"></i>
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '5px', fontSize: '18px', color: '#2d3748' }}>YouTube</h4>
                      <p style={{ margin: 0, color: '#718096', fontSize: '16px' }}>Learn Japanese Channel</p>
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '20px'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #ff6b00, #ff8c00)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '28px'
                    }}>
                      <i className="fa-solid fa-school"></i>
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '5px', fontSize: '18px', color: '#2d3748' }}>University</h4>
                      <p style={{ margin: 0, color: '#718096', fontSize: '16px' }}>FPT University Hanoi</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '20px'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #00a67e, #00c896)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '28px'
                    }}>
                      <i className="fa-solid fa-video"></i>
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '5px', fontSize: '18px', color: '#2d3748' }}>Live Courses</h4>
                      <p style={{ margin: 0, color: '#718096', fontSize: '16px' }}>Google Meet: JPD113, JPD123, JPD133</p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                borderRadius: '20px',
                padding: '35px',
                color: 'white',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)'
              }}>
                <h3 style={{ marginBottom: '15px', fontSize: '24px' }}>Office Hours</h3>
                <p style={{ marginBottom: '10px', fontSize: '16px' }}>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p style={{ fontSize: '16px' }}>Response time: Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
