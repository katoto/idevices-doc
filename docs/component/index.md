---
nav:
  title: 源组件
group:
  title: Phone
order: 1
---

# iPhone 14 Pro

iPhone 14 Pro，苹果的旗舰手机。A16 芯片提供强大处理能力，iOS 16 操作系统带来智能体验。出色的摄影能力，4800 万像素主摄+1200 万像素超广角+1200 万像素长焦。ProMotion 技术的超视网膜 XDR 显示屏，流畅细腻。集强大性能、优秀摄影和精彩显示于一身，带来卓越手机体验。

iPhone 14 Pro is Apple's flagship smartphone. The A16 chip provides powerful processing capability, while the iOS 16 operating system offers an intelligent experience. With outstanding photography capabilities, it features a 48MP main camera, a 12MP ultra-wide-angle lens, and a 12MP telephoto lens. The ProMotion technology on the ultra-high-definition XDR display ensures smooth and detailed visuals. Combining impressive performance, excellent photography, and stunning display, the iPhone 14 Pro delivers an exceptional mobile experience.

```tsx
import { Row, Slider, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import { IDevicesReact } from 'i-devices';
import React, { useState } from 'react';

type ColorTypes =
  | 'device-gold'
  | 'device-purple'
  | 'device-silver'
  | 'device-black';

const ModelColorMap: { name: ColorTypes; bgColor: string }[] = [
  {
    name: 'device-gold',
    bgColor: '#342C3F',
  },
  {
    name: 'device-purple',
    bgColor: '#e2e3e4',
  },
  {
    name: 'device-silver',
    bgColor: '#76726F',
  },
  {
    name: 'device-black',
    bgColor: '#F6EEDB',
  },
];

export default function () {
  const [actColor, setActColor] = useState<ColorTypes>('device-silver');
  const [scale, setScale] = useState<number>(0.9);
  const dotStyle: React.CSSProperties = {
    background: '#eee',
    border: '2px solid rgba(0,0,0,.1)',
    borderRadius: '50%',
    display: 'inline-block',
    height: '1rem',
    margin: '0 0.2rem',
    width: '1rem',
    cursor: 'pointer',
  };
  const sliderStyle: React.CSSProperties = {
    maxWidth: '330px',
    margin: '20px auto',
  };

  const formatter = (value?: number) => `scale: ${(value || 10) / 100}`;

  return (
    <div>
      {/* 颜色 & 滑动条 */}
      <div>
        <Row justify="center">
          {ModelColorMap.map((modelItem) => {
            return (
              <Tooltip title={modelItem.name}>
                <div
                  style={{
                    ...dotStyle,
                    background: modelItem.bgColor,
                    transform:
                      actColor === modelItem.name ? 'scale(1.25)' : 'scale(1)',
                    boxShadow:
                      actColor === modelItem.name
                        ? 'inset 0 0 0 1.5px #f7f7f9'
                        : '',
                  }}
                  onClick={() => {
                    setActColor(modelItem.name);
                  }}
                ></div>
              </Tooltip>
            );
          })}
        </Row>
        <div style={sliderStyle}>
          <Slider
            min={20}
            max={110}
            defaultValue={scale * 100}
            tooltip={{ formatter }}
            onChange={(value) => {
              setScale((value || 10) / 100);
            }}
          />
        </div>
      </div>

      <Row justify="center">
        {/* html 设备主体 */}
        <IDevicesReact
          modelname="device-iphone-14-pro"
          modelColor={actColor}
          scale={scale}
          usezoom={true}
        >
          <img
            slot="slot-screen"
            className="device-screen"
            src="/img/bg-iphone-14-pro.jpg"
            loading="lazy"
          />
        </IDevicesReact>
      </Row>
    </div>
  );
}
```

i-devices 组件使用，一键复制

```tsx
import { IDevicesReact } from 'i-devices';
import React from 'react';

export default function () {
  return (
    <div style={{ width: '350px', margin: '0 auto' }}>
      <IDevicesReact modelbar={true} bartitle="demo标题">
        <div slot="slot-screen">自定义内容</div>
      </IDevicesReact>
    </div>
  );
}
```

“源码”展示，如果你不想安装依赖，也可以一键复制以下代码，直接到业务上使用，0 依赖～

```tsx
import React from 'react';
import '../assets/css/_iphone-14-pro.scss';

export default function () {
  return (
    <div>
      {/* html 主体 */}
      <div className="device device-iphone-14-pro">
        <div className="device-frame">
          <img className="device-screen" src="/img/bg-03.jpg" loading="lazy" />
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

<br />
