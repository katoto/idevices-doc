---
nav: 组件
group:
  title: Watches
  order: 2
order: 1
---

# Apple Watch Ultra

Apple Watch Ultra. Rugged and capable, with precision dual-frequency GPS, up to 36-hour battery life, and three bands for athletes of all kinds.

```tsx
import React from 'react';
import '../assets/css/_apple-watch-ultra.scss';

export default function () {
  return (
    <div>
      {/* html 主体 */}
      <div className="device device-apple-watch-ultra">
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
