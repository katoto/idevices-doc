---
nav: 组件
group:
  title: Computers
  order: 1
order: 3
---

# MacBook

The MacBook with Retina display (marketed as "The new MacBook") is a line of portable Macintosh computers announced in a special event on March 9, 2015 by Apple Inc. It was superseded by the 3rd-generation MacBook Air in October 2018.

```tsx
import { Row, Slider, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import '../assets/css/_macbook.scss';

type ColorTypes =
  | 'device-silver'
  | 'device-gold'
  | 'device-rosegold'
  | 'device-spacegray';

export default function () {
  const [actColor, setActColor] = useState<ColorTypes>('device-spacegray');
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
          <Tooltip title="device-gold">
            <div
              style={{
                ...dotStyle,
                background: '#f7e8dd',
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
          <Tooltip title="device-rosegold">
            <div
              style={{
                ...dotStyle,
                background: '#facfc9',
                transform:
                  actColor === 'device-rosegold' ? 'scale(1.25)' : 'scale(1)',
                boxShadow:
                  actColor === 'device-rosegold'
                    ? 'inset 0 0 0 1.5px #f7f7f9'
                    : '',
              }}
              onClick={() => {
                setActColor('device-rosegold');
              }}
            ></div>
          </Tooltip>
          <Tooltip title="device-spacegray">
            <div
              style={{
                ...dotStyle,
                background: '#83878a',
                transform:
                  actColor === 'device-spacegray' ? 'scale(1.25)' : 'scale(1)',
                boxShadow:
                  actColor === 'device-spacegray'
                    ? 'inset 0 0 0 1.5px #f7f7f9'
                    : '',
              }}
              onClick={() => {
                setActColor('device-spacegray');
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
        className={`device device-macbook ${actColor}`}
        style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
      >
        <div className="device-frame">
          <img className="device-screen" src="/img/bg-07.jpg" loading="lazy" />
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

Simple MacBook Demo， Easy to copy

```tsx
import React from 'react';
import '../assets/css/_macbook.scss';

export default function () {
  return (
    <div>
      {/* html 主体 */}
      <div className="device device-macbook">
        <div className="device-frame">
          <img className="device-screen" src="/img/bg-10.jpg" loading="lazy" />
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
