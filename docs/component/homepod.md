---
nav: 组件
group:
  title: Accessories
  order: 5
order: 1
---

# HomePod

Modern accessories crafted in pure CSS.
Pure CSS Apple HomePod, Apple HomePod in pure CSS.

```tsx
import React from 'react';
import '../assets/css/_homepod.scss';

export default function () {
  return (
    <div>
      {/* html 主体 */}
      <div className="device device-homepod">
        <div className="device-frame"> </div>
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
