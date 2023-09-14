---
nav: 组件
group:
  title: Accessories
  order: 5
order: 2
---

# Pro Display XDR

Apple Pro Display XDR. A new 32-inch Retina 6K display with extreme brightness, contrast, color accuracy, and HDR that transforms the way you work.

```tsx
import React from 'react';
import '../assets/css/_pro-display-xdr.scss';

export default function () {
  return (
    <div>
      {/* html 主体 */}
      <div className="device device-pro-display-xdr">
        <div className="device-frame">
          <img className="device-screen" src="/img/bg-08.jpg" loading="lazy" />
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
