---
nav: 组件
group:
  title: Phone
  order: 0
order: 5
---

# iPhone

iPhone is a globally renowned smartphone series introduced by Apple, known for its exceptional design, impressive performance, and rich features. It incorporates advanced technologies such as biometric recognition, augmented reality, and intelligent assistants, along with high-quality camera capabilities and premium audio experience. iPhone seamlessly integrates with the Apple ecosystem, providing regular operating system updates and long-term support. Additionally, iPhone emphasizes security, environmental consciousness, and diverse product choices, delivering a comprehensive smartphone experience to users.

iPhone 是苹果公司推出的一款全球知名的智能手机系列，以其卓越的设计、出色的性能和丰富的功能而著称。它采用先进的技术，如生物识别、增强现实和智能助理，配备高质量的摄像功能和优质音频体验。iPhone 与苹果生态系统紧密结合，提供稳定的操作系统更新和长期支持。同时，iPhone 还注重安全性、环保意识和多样化的产品选择，为用户带来全面的智能手机体验。

```tsx
import React from 'react';
import '../assets/css/_iphone.scss';

export default function () {
  return (
    <div>
      {/* html 主体 */}
      <div className="device device-the-iphone">
        <div className="device-frame">
          <img
            className="device-screen"
            src="/img/bg-iphone.jpg"
            loading="lazy"
          />
        </div>
        <div className="device-stripe"></div>
        <div className="device-header"></div>
        <div className="device-sensors"></div>
        <div className="device-btns"></div>
        <div className="device-power"></div>
        <div className="device-home"></div>
      </div>
    </div>
  );
}
```
