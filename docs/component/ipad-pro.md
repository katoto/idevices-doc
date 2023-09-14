---
nav: 组件
group:
  title: Tablets
  order: 2
---

# iPad Pro

Modern tablet devices crafted in pure CSS

```tsx
import React from 'react';
import '../assets/css/_ipad-pro.scss';

export default function () {
  return (
    <div>
      {/* html 主体 */}
      <div className="device device-ipad-pro">
        <div className="device-frame">
          <img className="device-screen" src="/img/bg-01.jpg" loading="lazy" />
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
