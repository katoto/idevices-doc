---
hero:
  title: i Devices
  description: i Devices 旨在通过纯CSS代码实现手机、电脑等各类设备样式效果
  actions:
    - text: 快速了解
      link: /guide
    - text: Github
      icon: github
      link: /
features:
  - title: 多设备
    icon: https://api.iconify.design/logos:randomcolor.svg
    tag: devices
    description: 提供多种设备样式，像iPhone系列、MacBook、Apple Watch。
  - title: 跨框架
    icon: https://api.iconify.design/fluent:accessibility-checkmark-20-regular.svg
    tag: manual
    description: 完全基于纯CSS，vue\react\原生均可使用，超易用。
  - title: '灵活可定制'
    emoji: 🚀
    tag: custom
    description: 内容区域支持自定义，满足个性化需求。
---

```tsx
import { Divider } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';

export default () => (
  <div style={{ width: '710px', margin: '0 auto' }}>
    <Divider orientation="left">业务赋能安利 🧱</Divider>
    <img width="700" src="/img/example_old.png" />
    <br />
    <br />
    <img width="700" src="/img/example_new.png" />
  </div>
);
```

更多使用方式，详见设备详情和使用 API

<br />
<br />
<br />
