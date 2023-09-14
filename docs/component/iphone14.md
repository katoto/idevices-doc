---
nav: 组件
group:
  title: Phone
  order: 0
order: 2
---

# iPhone 14

iPhone 14 Pro 是苹果公司于 2022 年 9 月 8 日发布的手机，提供深空黑色、银色、金色和暗紫色四种颜色。它搭载 A16 仿生芯片和预装 iOS 16 操作系统。配备前置 1200 万像素镜头，后置 4800 万像素主镜头、1200 万像素超广角镜头和 1200 万像素长焦镜头。手机采用支持 ProMotion 技术的超视网膜 XDR 显示屏，电池不可拆卸。

The iPhone 14 Pro is a smartphone released by Apple on September 8, 2022. It is available in four colors: Deep Space Black, Silver, Gold, and Dark Purple. It features the A16 Bionic chip and comes with the iOS 16 operating system pre-installed. The phone has a 12-megapixel front camera and a rear camera setup consisting of a 48-megapixel main lens, a 12-megapixel ultra-wide-angle lens, and a 12-megapixel telephoto lens. The iPhone 14 Pro is equipped with a Retina XDR display that supports ProMotion technology and has a non-removable battery.

```tsx
import { Row, Slider, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import { IDevicesReact } from 'i-devices';
import React, { useState } from 'react';

type ColorTypes =
  | 'device-midnight'
  | 'device-purple'
  | 'device-starlight'
  | 'device-red'
  | 'device-blue';

const ModelColorMap: { name: ColorTypes; bgColor: string }[] = [
  {
    name: 'device-midnight',
    bgColor: '#c8bad3',
  },
  {
    name: 'device-purple',
    bgColor: '#2B2F33',
  },
  {
    name: 'device-starlight',
    bgColor: '#D3CDC7',
  },
  {
    name: 'device-red',
    bgColor: '#EC302B',
  },
  {
    name: 'device-blue',
    bgColor: '#98ABBE',
  },
];

export default function () {
  const [actColor, setActColor] = useState<ColorTypes>('device-red');
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

      <Row justify="center">
        {/* html 设备主体 */}
        <IDevicesReact
          modelName="device-iphone-14"
          modelColor={actColor}
          scale={scale}
        >
          <img
            slot="slot-screen"
            className="device-screen"
            src="/img/bg-iphone-14.jpg"
            loading="lazy"
          />
        </IDevicesReact>
      </Row>
    </div>
  );
}
```

“源码”展示，如果你不想安装依赖，也可以一键复制以下代码，直接到业务上使用。

```tsx
import React from 'react';
import '../assets/css/_iphone-14.scss';

export default function () {
  return (
    <div>
      {/* html 主体 */}
      <div className="device device-iphone-14">
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
