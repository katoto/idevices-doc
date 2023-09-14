---
nav: 组件
group:
  title: Phone
  order: 0
order: 8
---

# Google Pixel

Google Pixel 6 搭载 Google Tensor 八核处理器；后置摄像头为 5000 万像素镜头+1200 万像素超广角镜头，支持 OIS 光学防抖功能，前置摄像头为 800 万像素；搭载 4614 毫安时不可拆卸电池。
Google Pixel, the most advanced Pixel Camera ever.

```tsx
import { Row, Slider, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import '../assets/css/_google-pixel.scss';

type ColorTypes = 'device-silver' | 'device-black' | 'device-blue';

export default function () {
  const [actColor, setActColor] = useState<ColorTypes>('device-black');
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
          <Tooltip title="device-silver">
            <div
              style={{
                ...dotStyle,
                background: '#e2e3e4',
                transform:
                  actColor === 'device-silver' ? 'scale(1.25)' : 'scale(1)',
                boxShadow:
                  actColor === 'device-silver'
                    ? 'inset 0 0 0 1.5px #f7f7f9'
                    : '',
              }}
              onClick={() => {
                setActColor('device-silver');
              }}
            ></div>
          </Tooltip>
          <Tooltip title="device-black">
            <div
              style={{
                ...dotStyle,
                background: '#6a6967',
                transform:
                  actColor === 'device-black' ? 'scale(1.25)' : 'scale(1)',
                boxShadow:
                  actColor === 'device-black'
                    ? 'inset 0 0 0 1.5px #f7f7f9'
                    : '',
              }}
              onClick={() => {
                setActColor('device-black');
              }}
            ></div>
          </Tooltip>

          <Tooltip title="device-blue">
            <div
              style={{
                ...dotStyle,
                background: '#7695ff',
                transform:
                  actColor === 'device-blue' ? 'scale(1.25)' : 'scale(1)',
                boxShadow:
                  actColor === 'device-blue' ? 'inset 0 0 0 1.5px #f7f7f9' : '',
              }}
              onClick={() => {
                setActColor('device-blue');
              }}
            ></div>
          </Tooltip>
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

      {/* html 设备主体 */}
      <div
        className={`device device-google-pixel ${actColor}`}
        style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
      >
        <div className="device-frame">
          <img className="device-screen" src="/img/bg-06.jpg" loading="lazy" />
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

Simple Google Pixel Demo， Easy to copy

```tsx
import React from 'react';
import '../assets/css/_google-pixel.scss';

export default function () {
  return (
    <div>
      {/* html 主体 */}
      <div className="device device-google-pixel">
        <div className="device-frame">
          <img className="device-screen" src="/img/bg-06.jpg" loading="lazy" />
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
