---
nav: 组件
group:
  title: Watches
  order: 2
order: 2
---

# Apple Watch Series 8

Apple Watch Series 8 features temperature sensing for insights into women’s health, Car Crash Detection, and sleep stages to understand your sleep.

```tsx
import React from 'react';
import '../assets/css/_apple-watch-s8.scss';

export default function () {
  return (
    <div>
      {/* html 主体 */}
      <div className="device device-apple-watch-s8">
        <div className="device-frame">
          <img
            className="device-screen"
            src="/img/bg-watch.jpg"
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
