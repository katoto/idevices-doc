---
nav: 组件
group:
  title: Tablets
  order: 2
---

# iPad Pro (2017)

Pure CSS Apple iPad Pro (2017), Apple iPad Pro (2017) in pure CSS

```tsx
import React from 'react';
import '../assets/css/_ipad-pro-2017.scss';

export default function () {
  return (
    <div>
      {/* html 主体 */}
      <div className="device device-ipad-pro-2017">
        <div className="device-frame">
          <img className="device-screen" src="/img/bg-05.jpg" loading="lazy" />
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
