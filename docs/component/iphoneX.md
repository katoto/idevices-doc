---
nav: 组件
group:
  title: Phone
  order: 0
order: 3
---

# Phone X

iPhone X 是苹果公司在 2017 年推出的一款全面屏智能手机，具备创新的设计、Face ID 面部识别、强大的 A11 Bionic 芯片和双摄系统等功能。

iPhone X is a bezel-less smartphone launched by Apple in 2017, featuring innovative design, Face ID facial recognition, powerful A11 Bionic chip, and a dual-camera system.

```tsx
import { IDevicesReact } from 'i-devices';
import React from 'react';

export default function () {
  return (
    <div style={{ width: '350px', margin: '0 auto' }}>
      <IDevicesReact modelName="device-iphone-x" scale="0.9"></IDevicesReact>
    </div>
  );
}
```

“源码”展示，如果你不想安装依赖，也可以一键复制以下代码，直接到业务上使用。

```tsx
import React from 'react';
import '../assets/css/_iphone-x.scss';

export default function () {
  return (
    <div>
      {/* html 主体 */}
      <div className="device device-iphone-x">
        <div className="device-frame">
          <video className="device-screen" muted autoPlay loop>
            <source src="/video/bg-01.mp4" type="video/mp4" />
          </video>
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
