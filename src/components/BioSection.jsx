import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const BioSection = () => {
  const typedText = useTypewriter(['Khanh Trinh', 'Kaytee', 'チン　バオ　カン']);

  return (
    <section className="biosec container flex">
      <div className="bio">
        <h4>皆さん、こんにちは !</h4>
        <h1>
          私は
          <div>
            <span className="multi-text">{typedText}</span>
            <span className="blink"></span>
          </div>
        </h1>
        <p style={{ fontFamily: "'Segoe UI', 'Roboto', 'Tahoma', sans-serif" }}>
          Chào mừng mọi người đến với khóa học tiếng Nhật của mình! Đây là một cơ hội tuyệt vời để chúng ta
          cùng nhau khám phá và học hỏi về ngôn ngữ và văn hóa của đất nước mặt trời mọc.
          <br /><br />
          Trong khóa học này, chúng ta sẽ bắt đầu từ những kiến thức cơ bản như bảng chữ cái Hiragana và
          Katakana, cách phát âm, và các cấu trúc câu đơn giản. Chúng ta sẽ tiến xa hơn để nắm vững từ vựng,
          ngữ pháp và kỹ năng nghe, nói, đọc và viết tiếng Nhật.
          <br /><br />
          Khóa học của mình không chỉ giới hạn ở những kiến thức cơ bản của môn Nhật ở trường, mà còn cung cấp
          nền tảng vững chắc để các bạn có thể tiếp tục học các cấp độ cao hơn, như N4 N3 và những trình độ nâng cao
          sau này!
        </p>
        <div className="bio-follow">
          <div className="follow">
            <h4>Like and Follow me.</h4>
          </div>
        </div>
      </div>
      <div className="bioimg">
        <img src="img/nam_preview_rev_1.png" alt="" />
        <div className="pattern-1"><img src="svg/pattern-1.svg" alt="" /></div>
        <div className="pattern-2"><img src="svg/pattern-2.svg" alt="" /></div>
        <div className="pattern-3"><img src="svg/pattern-3.svg" alt="" /></div>
        <div className="pattern-4"><img src="svg/pattern-4.svg" alt="" /></div>
      </div>
    </section>
  );
};

export default BioSection;
