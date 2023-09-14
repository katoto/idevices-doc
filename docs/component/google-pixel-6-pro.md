---
nav: 组件
group:
  title: Phone
  order: 0
order: 6
---

# Google Pixel 6 Pro

谷歌 Pixel 6 Pro 是谷歌旗下 Pixel 系列手机之一, 谷歌 Pixel 6 Pro 将增加一颗 4800 万像素的 4 倍长焦镜头，前置摄像头升级为 1200 万像素。
Pixel 6 Pro, the most advanced Pixel Camera ever.

```tsx
import { Row, Slider, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import '../assets/css/_google-pixel-6-pro.scss';

type ColorTypes = 'device-white' | 'device-gold' | 'device-black';

export default function () {
  const [actColor, setActColor] = useState<ColorTypes>('device-white');
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
          <Tooltip title="device-white">
            <div
              style={{
                ...dotStyle,
                background: '#CBCBC8',
                transform:
                  actColor === 'device-white' ? 'scale(1.25)' : 'scale(1)',
                boxShadow:
                  actColor === 'device-white'
                    ? 'inset 0 0 0 1.5px #f7f7f9'
                    : '',
              }}
              onClick={() => {
                setActColor('device-white');
              }}
            ></div>
          </Tooltip>
          <Tooltip title="device-gold">
            <div
              style={{
                ...dotStyle,
                background: '#FFD6AD',
                transform:
                  actColor === 'device-gold' ? 'scale(1.25)' : 'scale(1)',
                boxShadow:
                  actColor === 'device-gold' ? 'inset 0 0 0 1.5px #f7f7f9' : '',
              }}
              onClick={() => {
                setActColor('device-gold');
              }}
            ></div>
          </Tooltip>

          <Tooltip title="device-black">
            <div
              style={{
                ...dotStyle,
                background: '#323334',
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
        className={`device device-google-pixel-6-pro ${actColor}`}
        style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
      >
        <div className="device-frame">
          <img
            className="device-screen"
            src="/img/bg-pixel-6.jpg"
            loading="lazy"
          />
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

Simple Google Pixel 6 Pro Demo， Easy to copy

```tsx
import React from 'react';
import '../assets/css/_google-pixel-6-pro.scss';

export default function () {
  return (
    <div>
      {/* html 主体 */}
      <div className="device device-google-pixel-6-pro">
        <div className="device-frame">
          <img
            className="device-screen"
            src="/img/bg-pixel-6.jpg"
            loading="lazy"
          />
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
