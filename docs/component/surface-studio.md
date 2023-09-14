---
nav: 组件
group:
  title: Computers
  order: 1
order: 7
---

# Surface Studio

Pure CSS Surface Studio, Surface Studio in pure CSS

```tsx
import React from 'react';
import '../assets/css/_surface-studio.scss';

export default function () {
  return (
    <div>
      {/* html 主体 */}
      <div className="device device-surface-studio">
        <div className="device-frame">
          <img className="device-screen" src="/img/bg-11.jpg" loading="lazy" />
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
