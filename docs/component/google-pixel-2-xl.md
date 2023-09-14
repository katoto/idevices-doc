---
nav: 组件
group:
  title: Phone
  order: 0
order: 7
---

# Google Pixel 2 XL

The Pixel 2 and Pixel 2 XL are a pair of Android smartphones designed, developed, and marketed by Google as part of the Google Pixel product line.

```tsx
import React from 'react';
import '../assets/css/_google-pixel-2-xl.scss';

export default function () {
  return (
    <div>
      {/* html 主体 */}
      <div className="device device-google-pixel-2-xl">
        <div className="device-frame">
          <img className="device-screen" src="/img/bg-06.jpg" loading="lazy" />
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
