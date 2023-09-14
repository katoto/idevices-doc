---
nav: 组件
group:
  title: Tablets
  order: 2
order: 6
---

# Surface Pro (2017)

Pure CSS Surface Pro (2017), Surface Pro (2017) in pure CSS

```tsx
import React from 'react';
import '../assets/css/_surface-pro-2017.scss';

export default function () {
  return (
    <div>
      {/* html 主体 */}
      <div className="device device-surface-pro-2017">
        <div className="device-frame">
          <img className="device-screen" src="/img/bg-09.jpg" loading="lazy" />
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
