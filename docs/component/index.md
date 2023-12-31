---
nav:
  title: 源组件
group:
  title: Phone
order: 1
---

# iPhone 15

iPhone15 是一款性能强劲、功能全面、使用体验出色的智能手机。搭载的 A16 处理器使得处理能力和图形性能更强大，可轻松应对各种需求。同时，iPhone15 还支持 5G 网络、Wi-Fi 6 和蓝牙 5.0 等先进的通信技术，提供稳定高速的网络连接。此外，IP68 级别的防水防尘功能使得 iPhone15 可以在不同环境下安心使用。

iPhone 15 is a powerful, feature-packed, and exceptional smart phone experience. It is equipped with the A16 processor, which provides enhanced processing and graphics capabilities to easily handle various demands. Additionally, iPhone 15 supports advanced communication technologies like 5G networks, Wi-Fi 6, and Bluetooth 5.0, providing stable and high-speed network connectivity. Moreover, its IP68-rated waterproof and dustproof features ensure that iPhone 15 can be used confidently in different environments.

```tsx
import { Row, Slider, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import { IDevicesReact } from 'i-devices';
// import { IDevicesReact } from '../../src/index.ts';
import React, { useState } from 'react';

type ColorTypes = 'device-gold' | 'device-silver' | 'device-pink';

const ModelColorMap: { name: ColorTypes; bgColor: string }[] = [
  {
    name: 'device-gold',
    bgColor: '#e7d19e',
  },
  {
    name: 'device-silver',
    bgColor: '#c8cacb',
  },
  {
    name: 'device-pink',
    bgColor: '#ef72a5',
  },
];

export default function () {
  const [actColor, setActColor] = useState<ColorTypes>('device-pink');
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
          modelname="device-iphone-15"
          modelColor={actColor}
          scale={scale}
          usezoom={true}
        >
          <img
            slot="slot-screen"
            className="device-screen"
            src="/img/bg-iphone-15.jpeg"
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
      <IDevicesReact
        modelname="device-iphone-15"
        modelcolor="device-pink"
        modelbar={true}
        bartitle="demo标题"
      >
        <div slot="slot-screen">自定义内容</div>
      </IDevicesReact>
    </div>
  );
}
```
