---
nav: 组件
group:
  title: Phone
  order: 0
order: 4
---

# iPhone 8

iPhone 8 是一款外观精美、功能强大的智能手机，配备 4.7 英寸 Retina 显示屏、A11 Bionic 芯片，拥有出色的摄像功能，并支持无线充电。它采用 iOS 操作系统，提供流畅的用户体验，同时具备防水功能和 Touch ID 指纹识别。

iPhone 8 is a sleek and powerful smartphone featuring a 4.7-inch Retina display, A11 Bionic chip, impressive camera capabilities, and support for wireless charging. It offers a seamless user experience with its iOS operating system and incorporates features like water resistance and Touch ID fingerprint recognition.

```tsx
import { Row, Slider, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import { IDevicesReact } from 'i-devices';
import React, { useState } from 'react';

type ColorTypes = 'device-silver' | 'device-gold' | 'device-spacegray';

const ModelColorMap: { name: ColorTypes; bgColor: string }[] = [
  {
    name: 'device-silver',
    bgColor: '#e2e3e4',
  },
  {
    name: 'device-gold',
    bgColor: '#f7e8dd',
  },
  {
    name: 'device-spacegray',
    bgColor: '#9b9ba0',
  },
];

export default function () {
  const [actColor, setActColor] = useState<ColorTypes>('device-gold');
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
          modelName="device-iphone-8"
          modelColor={actColor}
          scale={scale}
        ></IDevicesReact>
      </Row>
    </div>
  );
}
```

“源码”展示，如果你不想安装依赖，也可以一键复制以下代码，直接到业务上使用。
Simple iPhone 8 Demo， Easy to copy

```tsx
import React from 'react';
import '../assets/css/_iphone-8.scss';

export default function () {
  return (
    <div>
      {/* html 主体 */}
      <div className="device device-iphone-8">
        <div className="device-frame">
          <img className="device-screen" src="/img/bg-01.jpg" loading="lazy" />
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
