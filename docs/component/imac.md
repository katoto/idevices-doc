---
nav: 组件
group:
  title: Computers
  order: 1
order: 2
---

# iMac

The new, strikingly thin 24-inch iMac with M1 chip comes with configurable memory, storage, and more. Available in 7 colors.

```tsx
import { Row, Slider, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import '../assets/css/_imac.scss';

type ColorTypes =
  | 'device-silver'
  | 'device-blue'
  | 'device-green'
  | 'device-pink'
  | 'device-yellow'
  | 'device-orange'
  | 'device-purple';

export default function () {
  const [actColor, setActColor] = useState<ColorTypes>('device-green');
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
                background: '#D4D5D7',
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
          <Tooltip title="device-blue">
            <div
              style={{
                ...dotStyle,
                background: '#ABBDD0',
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
          <Tooltip title="device-green">
            <div
              style={{
                ...dotStyle,
                background: '#BBD0C8',
                transform:
                  actColor === 'device-green' ? 'scale(1.25)' : 'scale(1)',
                boxShadow:
                  actColor === 'device-green'
                    ? 'inset 0 0 0 1.5px #f7f7f9'
                    : '',
              }}
              onClick={() => {
                setActColor('device-green');
              }}
            ></div>
          </Tooltip>
          <Tooltip title="device-pink">
            <div
              style={{
                ...dotStyle,
                background: '#EDCCC6',
                transform:
                  actColor === 'device-pink' ? 'scale(1.25)' : 'scale(1)',
                boxShadow:
                  actColor === 'device-pink' ? 'inset 0 0 0 1.5px #f7f7f9' : '',
              }}
              onClick={() => {
                setActColor('device-pink');
              }}
            ></div>
          </Tooltip>
          <Tooltip title="device-yellow">
            <div
              style={{
                ...dotStyle,
                background: '#F4D595',
                transform:
                  actColor === 'device-yellow' ? 'scale(1.25)' : 'scale(1)',
                boxShadow:
                  actColor === 'device-yellow'
                    ? 'inset 0 0 0 1.5px #f7f7f9'
                    : '',
              }}
              onClick={() => {
                setActColor('device-yellow');
              }}
            ></div>
          </Tooltip>
          <Tooltip title="device-orange">
            <div
              style={{
                ...dotStyle,
                background: '#E9B5A0',
                transform:
                  actColor === 'device-orange' ? 'scale(1.25)' : 'scale(1)',
                boxShadow:
                  actColor === 'device-orange'
                    ? 'inset 0 0 0 1.5px #f7f7f9'
                    : '',
              }}
              onClick={() => {
                setActColor('device-orange');
              }}
            ></div>
          </Tooltip>
          <Tooltip title="device-purple">
            <div
              style={{
                ...dotStyle,
                background: '#C4C4E5',
                transform:
                  actColor === 'device-purple' ? 'scale(1.25)' : 'scale(1)',
                boxShadow:
                  actColor === 'device-purple'
                    ? 'inset 0 0 0 1.5px #f7f7f9'
                    : '',
              }}
              onClick={() => {
                setActColor('device-purple');
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
        className={`device device-imac ${actColor}`}
        style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
      >
        <div className="device-frame">
          <img className="device-screen" src="/img/bg-08.jpg" loading="lazy" />
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

Simple iMac Demo， Easy to copy

```tsx
import React from 'react';
import '../assets/css/_imac.scss';

export default function () {
  return (
    <div>
      {/* html 主体 */}
      <div className="device device-imac">
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
