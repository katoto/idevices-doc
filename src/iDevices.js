import {css, html, LitElement} from 'lit';
import {styleMap} from 'lit/directives/style-map.js';

/**
 * modelname 模型名称
 * modelcolor 模型颜色
 * scale 模型缩放
 * modelbar iphone bar 电池、电量那些
 * bartitle tabbar 标题
 * usezoom boolean 使用zoom 进行压缩
 */
export class IDevices extends LitElement {
  static properties = {
    modelname: {type: String},
    modelcolor: { type: String },
    scale: {type: Number},
    modelbar: {type: Boolean},
    bartitle: {type: String},
    usezoom: {type: Boolean}
  };

  static styles = css`
  .device,
  .device::before,
  .device::after,
  .device *,
  .device *::before,
  .device *::after {
    box-sizing: border-box;
    display: block;
  }

  .device img {
    object-fit: cover;
    position: release;
  }

  .device {
    position: relative;
    // transform: scale(1);
    z-index: 1;
    transform-origin: top center;
  }

  .device .device-frame {
    z-index: 1;
  }

  .device .device-screen {
    // background-color: #000;
    background-color: #fff;
    background-position: center center;
    background-size: cover;
    object-fit: cover;
    position: relative;
    overflow: hidden;
  }

  .device-iphone-15 {
    height: 868px;
    width: 428px;
  }

  .device-iphone-15 .device-frame {
    background: #010101;
    border: 1px solid #1b1721;
    border-radius: 68px;
    box-shadow: inset 0 0 4px 2px #c0b7cd, inset 0 0 0 6px #342c3f;
    height: 868px;
    padding: 19px;
    width: 428px;
  }

  .device-iphone-15 .device-screen {
    border-radius: 49px;
    height: 830px;
    width: 390px;
  }

  .device-iphone-15 .device-stripe::after,
  .device-iphone-15 .device-stripe::before {
    border: solid rgba(1, 1, 1, .25);
    border-width: 0 7px;
    content: "";
    height: 7px;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 9;
  }

  .device-iphone-15 .device-stripe::after {
    top: 85px;
  }

  .device-iphone-15 .device-stripe::before {
    bottom: 85px;
  }

  .device-iphone-15 .device-header {
    background: #010101;
    border-radius: 20px;
    height: 35px;
    left: 50%;
    margin-left: -60px;
    position: absolute;
    top: 29px;
    width: 120px;
  }

  .device-iphone-15 .device-sensors::after,
  .device-iphone-15 .device-sensors::before {
    content: "";
    position: absolute;
  }

  .device-iphone-15 .device-sensors::after {
    background: #010101;
    border-radius: 17px;
    height: 33px;
    left: 50%;
    margin-left: -60px;
    top: 30px;
    width: 74px;
  }

  .device-iphone-15 .device-sensors::before {
    background: radial-gradient(farthest-corner at 20% 20%, #6074bf 0, transparent 40%), radial-gradient(farthest-corner at 80% 80%, #513785 0, #24555e 20%, transparent 50%);
    border-radius: 50%;
    box-shadow: 0 0 1px 1px rgba(255, 255, 255, .05);
    height: 9px;
    left: 50%;
    margin-left: 36px;
    top: 42px;
    width: 9px;
  }

  .device-iphone-15 .device-btns {
    background: #1b1721;
    border-radius: 2px;
    height: 32px;
    left: -2px;
    position: absolute;
    top: 115px;
    width: 3px;
  }

  .device-iphone-15 .device-btns::after,
  .device-iphone-15 .device-btns::before {
    background: #1b1721;
    border-radius: 2px;
    content: "";
    height: 62px;
    left: 0;
    position: absolute;
    width: 3px;
  }

  .device-iphone-15 .device-btns::after {
    top: 60px;
  }

  .device-iphone-15 .device-btns::before {
    top: 140px;
  }

  .device-iphone-15 .device-power {
    background: #1b1721;
    border-radius: 2px;
    height: 100px;
    position: absolute;
    right: -2px;
    top: 200px;
    width: 3px;
  }

  .device-iphone-15 .device-home::after,
  .device-iphone-15 .device-home::before {
    border: solid rgba(1, 1, 1, .25);
    border-width: 6px 0;
    content: "";
    height: 6px;
    position: absolute;
    width: 6px;
    z-index: 9;
  }

  .device-iphone-15 .device-home::after {
    right: 86px;
    top: 0;
  }

  .device-iphone-15 .device-home::before {
    bottom: 0;
    left: 86px;
  }

  .device-iphone-15.device-silver .device-frame {
    border-color: #c8cacb;
    box-shadow: inset 0 0 4px 2px white, inset 0 0 0 6px #e2e3e4;
  }

  .device-iphone-15.device-silver .device-btns {
    background: #c8cacb;
  }

  .device-iphone-15.device-silver .device-btns::after,
  .device-iphone-15.device-silver .device-btns::before {
    background: #c8cacb;
  }

  .device-iphone-15.device-silver .device-power {
    background: #c8cacb;
  }

  .device-iphone-15.device-gold .device-frame {
    border-color: #e7d19e;
    box-shadow: inset 0 0 4px 2px white, inset 0 0 0 6px #d2ab4c;
  }

  .device-iphone-15.device-gold .device-btns {
    background: #e7d19e;
  }

  .device-iphone-15.device-gold .device-btns::after,
  .device-iphone-15.device-gold .device-btns::before {
    background: #e7d19e;
  }

  .device-iphone-15.device-gold .device-power {
    background: #e7d19e;
  }

  .device-iphone-15.device-pink .device-frame {
    border-color: #ef72a5;
    box-shadow: inset 0 0 4px 2px white, inset 0 0 0 6px rgb(244 74 144);
  }

  .device-iphone-15.device-pink .device-btns {
    background: #ef72a5;
  }

  .device-iphone-15.device-pink .device-btns::after,
  .device-iphone-15.device-pink .device-btns::before {
    background: #ef72a5;
  }

  .device-iphone-15.device-pink .device-power {
    background: #ef72a5;
  }


  .device-iphone-14-pro {
    height: 868px;
    width: 428px;
  }

  .device-iphone-14-pro .device-frame {
    background: #010101;
    border: 1px solid #1b1721;
    border-radius: 68px;
    box-shadow: inset 0 0 4px 2px #c0b7cd, inset 0 0 0 6px #342c3f;
    height: 868px;
    padding: 19px;
    width: 428px;
  }

  .device-iphone-14-pro .device-screen {
    border-radius: 49px;
    height: 830px;
    width: 390px;
  }

  .device-iphone-14-pro .device-stripe::after,
  .device-iphone-14-pro .device-stripe::before {
    border: solid rgba(1, 1, 1, .25);
    border-width: 0 7px;
    content: "";
    height: 7px;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 9;
  }

  .device-iphone-14-pro .device-stripe::after {
    top: 85px;
  }

  .device-iphone-14-pro .device-stripe::before {
    bottom: 85px;
  }

  .device-iphone-14-pro .device-header {
    background: #010101;
    border-radius: 20px;
    height: 35px;
    left: 50%;
    margin-left: -60px;
    position: absolute;
    top: 29px;
    width: 120px;
  }

  .device-iphone-14-pro .device-sensors::after,
  .device-iphone-14-pro .device-sensors::before {
    content: "";
    position: absolute;
  }

  .device-iphone-14-pro .device-sensors::after {
    background: #010101;
    border-radius: 17px;
    height: 33px;
    left: 50%;
    margin-left: -60px;
    top: 30px;
    width: 74px;
  }

  .device-iphone-14-pro .device-sensors::before {
    background: radial-gradient(farthest-corner at 20% 20%, #6074bf 0, transparent 40%), radial-gradient(farthest-corner at 80% 80%, #513785 0, #24555e 20%, transparent 50%);
    border-radius: 50%;
    box-shadow: 0 0 1px 1px rgba(255, 255, 255, .05);
    height: 9px;
    left: 50%;
    margin-left: 36px;
    top: 42px;
    width: 9px;
  }

  .device-iphone-14-pro .device-btns {
    background: #1b1721;
    border-radius: 2px;
    height: 32px;
    left: -2px;
    position: absolute;
    top: 115px;
    width: 3px;
  }

  .device-iphone-14-pro .device-btns::after,
  .device-iphone-14-pro .device-btns::before {
    background: #1b1721;
    border-radius: 2px;
    content: "";
    height: 62px;
    left: 0;
    position: absolute;
    width: 3px;
  }

  .device-iphone-14-pro .device-btns::after {
    top: 60px;
  }

  .device-iphone-14-pro .device-btns::before {
    top: 140px;
  }

  .device-iphone-14-pro .device-power {
    background: #1b1721;
    border-radius: 2px;
    height: 100px;
    position: absolute;
    right: -2px;
    top: 200px;
    width: 3px;
  }

  .device-iphone-14-pro .device-home::after,
  .device-iphone-14-pro .device-home::before {
    border: solid rgba(1, 1, 1, .25);
    border-width: 6px 0;
    content: "";
    height: 6px;
    position: absolute;
    width: 6px;
    z-index: 9;
  }

  .device-iphone-14-pro .device-home::after {
    right: 86px;
    top: 0;
  }

  .device-iphone-14-pro .device-home::before {
    bottom: 0;
    left: 86px;
  }

  .device-iphone-14-pro.device-silver .device-frame {
    border-color: #c8cacb;
    box-shadow: inset 0 0 4px 2px white, inset 0 0 0 6px #e2e3e4;
  }

  .device-iphone-14-pro.device-silver .device-btns {
    background: #c8cacb;
  }

  .device-iphone-14-pro.device-silver .device-btns::after,
  .device-iphone-14-pro.device-silver .device-btns::before {
    background: #c8cacb;
  }

  .device-iphone-14-pro.device-silver .device-power {
    background: #c8cacb;
  }

  .device-iphone-14-pro.device-black .device-frame {
    border-color: #5c5956;
    box-shadow: inset 0 0 4px 2px white, inset 0 0 0 6px #76726f;
  }

  .device-iphone-14-pro.device-black .device-btns {
    background: #5c5956;
  }

  .device-iphone-14-pro.device-black .device-btns::after,
  .device-iphone-14-pro.device-black .device-btns::before {
    background: #5c5956;
  }

  .device-iphone-14-pro.device-black .device-power {
    background: #5c5956;
  }

  .device-iphone-14-pro.device-gold .device-frame {
    border-color: #e7d19e;
    box-shadow: inset 0 0 4px 2px white, inset 0 0 0 6px #d2ab4c;
  }

  .device-iphone-14-pro.device-gold .device-btns {
    background: #e7d19e;
  }

  .device-iphone-14-pro.device-gold .device-btns::after,
  .device-iphone-14-pro.device-gold .device-btns::before {
    background: #e7d19e;
  }

  .device-iphone-14-pro.device-gold .device-power {
    background: #e7d19e;
  }

  .device-iphone-14 {
    height: 868px;
    width: 428px;
  }

  .device-iphone-14 .device-frame {
    background: #010101;
    border: 1px solid #101315;
    border-radius: 68px;
    box-shadow: inset 0 0 4px 2px #b0b8c0, inset 0 0 0 6px #272c31;
    height: 868px;
    padding: 19px;
    width: 428px;
  }

  .device-iphone-14 .device-screen {
    border-radius: 49px;
    height: 830px;
    width: 390px;
  }

  .device-iphone-14 .device-stripe::after,
  .device-iphone-14 .device-stripe::before {
    border: solid rgba(1, 1, 1, .25);
    border-width: 0 7px;
    content: "";
    height: 7px;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 9;
  }

  .device-iphone-14 .device-stripe::after {
    top: 85px;
  }

  .device-iphone-14 .device-stripe::before {
    bottom: 85px;
  }

  .device-iphone-14 .device-header {
    background: #010101;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    height: 30px;
    left: 50%;
    margin-left: -80px;
    position: absolute;
    top: 20px;
    width: 160px;
  }

  .device-iphone-14 .device-header::after,
  .device-iphone-14 .device-header::before {
    content: "";
    height: 10px;
    position: absolute;
    top: 0;
    width: 10px;
  }

  .device-iphone-14 .device-header::after {
    background: radial-gradient(circle at bottom left, transparent 0, transparent 75%, #010101 75%, #010101 100%);
    left: -10px;
  }

  .device-iphone-14 .device-header::before {
    background: radial-gradient(circle at bottom right, transparent 0, transparent 75%, #010101 75%, #010101 100%);
    right: -10px;
  }

  .device-iphone-14 .device-sensors::after,
  .device-iphone-14 .device-sensors::before {
    content: "";
    position: absolute;
  }

  .device-iphone-14 .device-sensors::after {
    background: #151515;
    border: 1px solid #010101;
    border-radius: 4px;
    box-shadow: 0 0 4px #151515;
    height: 7px;
    left: 50%;
    margin-left: -35px;
    top: 8px;
    width: 70px;
  }

  .device-iphone-14 .device-sensors::before {
    background: radial-gradient(farthest-corner at 20% 20%, #6074bf 0, transparent 40%), radial-gradient(farthest-corner at 80% 80%, #513785 0, #24555e 20%, transparent 50%);
    border-radius: 50%;
    box-shadow: 0 0 1px 1px rgba(255, 255, 255, .05);
    height: 9px;
    left: 50%;
    margin-left: -60px;
    top: 26px;
    width: 9px;
  }

  .device-iphone-14 .device-btns {
    background: #101315;
    border-radius: 2px;
    height: 32px;
    left: -2px;
    position: absolute;
    top: 115px;
    width: 3px;
  }

  .device-iphone-14 .device-btns::after,
  .device-iphone-14 .device-btns::before {
    background: #101315;
    border-radius: 2px;
    content: "";
    height: 62px;
    left: 0;
    position: absolute;
    width: 3px;
  }

  .device-iphone-14 .device-btns::after {
    top: 60px;
  }

  .device-iphone-14 .device-btns::before {
    top: 140px;
  }

  .device-iphone-14 .device-power {
    background: #101315;
    border-radius: 2px;
    height: 100px;
    position: absolute;
    right: -2px;
    top: 200px;
    width: 3px;
  }

  .device-iphone-14 .device-home::after,
  .device-iphone-14 .device-home::before {
    border: solid rgba(1, 1, 1, .25);
    border-width: 6px 0;
    content: "";
    height: 6px;
    position: absolute;
    width: 6px;
    z-index: 9;
  }

  .device-iphone-14 .device-home::after {
    right: 86px;
    top: 0;
  }

  .device-iphone-14 .device-home::before {
    bottom: 0;
    left: 86px;
  }

  .device-iphone-14.device-purple .device-frame {
    border-color: #af9bbf;
    box-shadow: inset 0 0 4px 2px white, inset 0 0 0 6px #c8bad3;
  }

  .device-iphone-14.device-purple .device-btns {
    background: #af9bbf;
  }

  .device-iphone-14.device-purple .device-btns::after,
  .device-iphone-14.device-purple .device-btns::before {
    background: #af9bbf;
  }

  .device-iphone-14.device-purple .device-power {
    background: #af9bbf;
  }

  .device-iphone-14.device-starlight .device-frame {
    border-color: #bdb4aa;
    box-shadow: inset 0 0 4px 2px white, inset 0 0 0 6px #d3cdc7;
  }

  .device-iphone-14.device-starlight .device-btns {
    background: #bdb4aa;
  }

  .device-iphone-14.device-starlight .device-btns::after,
  .device-iphone-14.device-starlight .device-btns::before {
    background: #bdb4aa;
  }

  .device-iphone-14.device-starlight .device-power {
    background: #bdb4aa;
  }

  .device-iphone-14.device-red .device-frame {
    border-color: #d11813;
    box-shadow: inset 0 0 4px 2px white, inset 0 0 0 6px #ec302b;
  }

  .device-iphone-14.device-red .device-btns {
    background: #d11813;
  }

  .device-iphone-14.device-red .device-btns::after,
  .device-iphone-14.device-red .device-btns::before {
    background: #d11813;
  }

  .device-iphone-14.device-red .device-power {
    background: #d11813;
  }

  .device-iphone-14.device-blue .device-frame {
    border-color: #7992aa;
    box-shadow: inset 0 0 4px 2px white, inset 0 0 0 6px #98abbe;
  }

  .device-iphone-14.device-blue .device-btns {
    background: #7992aa;
  }

  .device-iphone-14.device-blue .device-btns::after,
  .device-iphone-14.device-blue .device-btns::before {
    background: #7992aa;
  }

  .device-iphone-14.device-blue .device-power {
    background: #7992aa;
  }

  .device-iphone-x {
    height: 868px;
    width: 428px;
  }

  .device-iphone-x .device-frame {
    background: #222;
    border-radius: 68px;
    box-shadow: inset 0 0 2px 2px #c8cacb, inset 0 0 0 7px #e2e3e4;
    height: 868px;
    padding: 28px;
    width: 428px;
  }

  .device-iphone-x .device-screen {
    border-radius: 40px;
    height: 812px;
    width: 375px;
  }

  .device-iphone-x .device-stripe::after,
  .device-iphone-x .device-stripe::before {
    border: solid rgba(1, 1, 1, .25);
    border-width: 0 7px;
    content: "";
    height: 7px;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 9;
  }

  .device-iphone-x .device-stripe::after {
    top: 85px;
  }

  .device-iphone-x .device-stripe::before {
    bottom: 85px;
  }

  .device-iphone-x .device-header {
    background: #222;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    height: 30px;
    left: 50%;
    margin-left: -102px;
    position: absolute;
    top: 28px;
    width: 204px;
  }

  .device-iphone-x .device-header::after,
  .device-iphone-x .device-header::before {
    content: "";
    height: 10px;
    position: absolute;
    top: 0;
    width: 10px;
  }

  .device-iphone-x .device-header::after {
    background: radial-gradient(circle at bottom left, transparent 0, transparent 75%, #222 75%, #222 100%);
    left: -10px;
  }

  .device-iphone-x .device-header::before {
    background: radial-gradient(circle at bottom right, transparent 0, transparent 75%, #222 75%, #222 100%);
    right: -10px;
  }

  .device-iphone-x .device-sensors::after,
  .device-iphone-x .device-sensors::before {
    content: "";
    position: absolute;
  }

  .device-iphone-x .device-sensors::after {
    background: #333;
    border-radius: 3px;
    height: 6px;
    left: 50%;
    margin-left: -25px;
    top: 32px;
    width: 50px;
  }

  .device-iphone-x .device-sensors::before {
    background: radial-gradient(farthest-corner at 20% 20%, #6074bf 0, transparent 40%), radial-gradient(farthest-corner at 80% 80%, #513785 0, #24555e 20%, transparent 50%);
    border-radius: 50%;
    box-shadow: 0 0 1px 1px rgba(255, 255, 255, .05);
    height: 10px;
    left: 50%;
    margin-left: 42px;
    top: 30px;
    width: 10px;
  }

  .device-iphone-x .device-btns {
    background: #c8cacb;
    height: 32px;
    left: -3px;
    position: absolute;
    top: 115px;
    width: 3px;
  }

  .device-iphone-x .device-btns::after,
  .device-iphone-x .device-btns::before {
    background: #c8cacb;
    content: "";
    height: 62px;
    left: 0;
    position: absolute;
    width: 3px;
  }

  .device-iphone-x .device-btns::after {
    top: 60px;
  }

  .device-iphone-x .device-btns::before {
    top: 140px;
  }

  .device-iphone-x .device-power {
    background: #c8cacb;
    height: 100px;
    position: absolute;
    right: -3px;
    top: 200px;
    width: 3px;
  }

  .device-iphone-8 {
    height: 871px;
    width: 419px;
  }

  .device-iphone-8 .device-frame {
    background: #fff;
    border-radius: 68px;
    box-shadow: inset 0 0 0 2px #c8cacb, inset 0 0 0 7px #e2e3e4;
    height: 871px;
    padding: 102px 22px;
    width: 419px;
  }

  .device-iphone-8 .device-screen {
    border: 2px solid #222;
    border-radius: 4px;
    height: 667px;
    width: 375px;
  }

  .device-iphone-8 .device-stripe::after,
  .device-iphone-8 .device-stripe::before {
    border: solid rgba(51, 51, 51, .15);
    border-width: 0 7px;
    content: "";
    height: 6px;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 9;
  }

  .device-iphone-8 .device-stripe::after {
    top: 68px;
  }

  .device-iphone-8 .device-stripe::before {
    bottom: 68px;
  }

  .device-iphone-8 .device-home {
    border: 2px solid #c8cacb;
    border-radius: 50%;
    bottom: 25px;
    height: 58px;
    left: 50%;
    margin-left: -29px;
    position: absolute;
    width: 58px;
  }

  .device-iphone-8 .device-sensors {
    background: #666;
    border-radius: 3px;
    height: 6px;
    left: 50%;
    margin-left: -38px;
    position: absolute;
    top: 52px;
    width: 76px;
  }

  .device-iphone-8 .device-sensors::after,
  .device-iphone-8 .device-sensors::before {
    background: #666;
    border-radius: 50%;
    content: "";
    position: absolute;
  }

  .device-iphone-8 .device-sensors::after {
    height: 10px;
    left: 50%;
    margin-left: -5px;
    top: -25px;
    width: 10px;
  }

  .device-iphone-8 .device-sensors::before {
    height: 12px;
    left: -42px;
    margin-top: -6px;
    top: 50%;
    width: 12px;
  }

  .device-iphone-8 .device-btns {
    background: #c8cacb;
    height: 30px;
    left: -3px;
    position: absolute;
    top: 102px;
    width: 3px;
  }

  .device-iphone-8 .device-btns::after,
  .device-iphone-8 .device-btns::before {
    background: #c8cacb;
    content: "";
    height: 56px;
    left: 0;
    position: absolute;
    width: 3px;
  }

  .device-iphone-8 .device-btns::after {
    top: 62px;
  }

  .device-iphone-8 .device-btns::before {
    top: 132px;
  }

  .device-iphone-8 .device-power {
    background: #c8cacb;
    height: 80px;
    position: absolute;
    right: -2px;
    top: 160px;
    width: 3px;
  }

  .device-iphone-8.device-gold .device-frame {
    box-shadow: inset 0 0 0 2px #e4b08a, inset 0 0 0 7px #f7e8dd;
  }

  .device-iphone-8.device-gold .device-home {
    border-color: #e4b08a;
  }

  .device-iphone-8.device-gold .device-btns,
  .device-iphone-8.device-gold .device-btns::after,
  .device-iphone-8.device-gold .device-btns::before {
    background: #e4b08a;
  }

  .device-iphone-8.device-gold .device-power {
    background: #e4b08a;
  }

  .device-iphone-8.device-spacegray .device-frame {
    background: #222;
    box-shadow: inset 0 0 0 2px #74747a, inset 0 0 0 7px #9b9ba0;
  }

  .device-iphone-8.device-spacegray .device-stripe::after,
  .device-iphone-8.device-spacegray .device-stripe::before {
    border-color: rgba(204, 204, 204, .35);
  }

  .device-iphone-8.device-spacegray .device-btns,
  .device-iphone-8.device-spacegray .device-btns::after,
  .device-iphone-8.device-spacegray .device-btns::before {
    background: #74747a;
  }

  .device-the-iphone {
    height: 610px;
    width: 320px;
  }

  .device-the-iphone .device-frame {
    background: #010101;
    border: 1px solid darkgray;
    border-radius: 56px;
    box-shadow: inset 0 0 4px 3px #010101, inset 0 0 2px 13px #f5f5f5;
    height: 610px;
    padding: 100px 22px;
    width: 320px;
  }

  .device-the-iphone .device-frame::before {
    border: 8px solid #010101;
    border-left-width: 2px;
    border-radius: 48px;
    border-right-width: 2px;
    box-shadow: inset 0 0 8px 2px #010101;
    content: "";
    height: 594px;
    left: 2px;
    position: absolute;
    top: 9px;
    width: 316px;
  }

  .device-the-iphone .device-frame::after {
    border: 4px solid gainsboro;
    border-radius: 38px;
    content: "";
    height: 590px;
    left: 13px;
    position: absolute;
    top: 11px;
    width: 294px;
  }

  .device-the-iphone .device-screen {
    border: 2px solid #272727;
    border-radius: 4px;
    height: 410px;
    width: 276px;
  }

  .device-the-iphone .device-sensors::before {
    background: linear-gradient(to bottom, #272727 50%, rgba(220, 220, 220, .25) 50%, darkgray);
    border-radius: 5px;
    content: "";
    height: 10px;
    left: 50%;
    margin-left: -28px;
    position: absolute;
    top: 52px;
    width: 56px;
  }

  .device-the-iphone .device-sensors::after {
    background: #272727;
    border: 1px solid #010101;
    border-radius: 3px;
    content: "";
    height: 6px;
    left: 50%;
    margin-left: -26px;
    position: absolute;
    top: 54px;
    width: 52px;
  }

  .device-the-iphone .device-btns {
    background: dimgray;
    border-radius: 2px 0 0 2px;
    height: 30px;
    left: -2px;
    position: absolute;
    top: 60px;
    width: 2px;
  }

  .device-the-iphone .device-btns::after,
  .device-the-iphone .device-btns::before {
    background: dimgray;
    content: "";
    height: 56px;
    left: 0;
    position: absolute;
    width: 2px;
  }

  .device-the-iphone .device-btns::after {
    border-radius: 2px 0 0 50%;
    top: 50px;
  }

  .device-the-iphone .device-btns::before {
    border-radius: 50% 0 0 2px;
    top: 131px;
  }

  .device-the-iphone .device-home {
    background: radial-gradient(circle at top center, #010101 70%, rgba(220, 220, 220, .25) 70%, darkgray);
    border: 1px solid #292929;
    border-radius: 50%;
    bottom: 28px;
    height: 56px;
    left: 50%;
    margin-left: -28px;
    position: absolute;
    width: 56px;
  }

  .device-the-iphone .device-home::before {
    border: 1px solid gainsboro;
    border-radius: 4px;
    content: "";
    height: 20px;
    left: 17px;
    position: absolute;
    top: 17px;
    width: 20px;
  }

  .device-the-iphone .device-power {
    background: dimgray;
    border-radius: 2px 2px 0 0;
    height: 2px;
    position: absolute;
    right: 52px;
    top: -2px;
    width: 52px;
  }

  .device-google-pixel-6-pro {
    height: 862px;
    width: 404px;
  }

  .device-google-pixel-6-pro .device-frame {
    background: #121212;
    border-radius: 28px;
    box-shadow: inset 0 0 12px #8d8d86, inset 0 7px 0 3px #fdfdfc, inset 0 -6px 0 3px #fdfdfc;
    height: 862px;
    margin: 0 2px;
    padding: 20px 12px 26px 12px;
    width: 400px;
  }

  .device-google-pixel-6-pro .device-screen {
    border-radius: 27px;
    height: 816px;
    width: 376px;
  }

  .device-google-pixel-6-pro .device-header {
    background: linear-gradient(to bottom, #8d8d86 0, #cbcbc8 30%, #cbcbc8 100%);
    height: 10px;
    left: 50%;
    margin-left: -147px;
    position: absolute;
    top: 0;
    width: 294px;
  }

  .device-google-pixel-6-pro .device-stripe::after {
    background: linear-gradient(to top, #121212, #666661);
    border-radius: 50px 50px 0 0;
    bottom: 0;
    content: "";
    height: 2px;
    left: 50%;
    margin-left: -22px;
    position: absolute;
    width: 44px;
  }

  .device-google-pixel-6-pro .device-stripe::before {
    background: #cbcbc8;
    bottom: 0;
    content: "";
    height: 9px;
    left: 50%;
    margin-left: 40px;
    position: absolute;
    width: 11px;
  }

  .device-google-pixel-6-pro .device-sensors {
    background: #121212;
    border-radius: 50%;
    height: 22px;
    left: 50%;
    margin-left: -11px;
    margin-top: -11px;
    position: absolute;
    top: 39px;
    width: 22px;
  }

  .device-google-pixel-6-pro .device-sensors::after,
  .device-google-pixel-6-pro .device-sensors::before {
    content: "";
    position: absolute;
  }

  .device-google-pixel-6-pro .device-sensors::after {
    background: linear-gradient(to bottom, #121212, #666661);
    border-radius: 0 0 50px 50px;
    height: 4px;
    left: 50%;
    margin-left: -103px;
    top: -18px;
    width: 206px;
  }

  .device-google-pixel-6-pro .device-sensors::before {
    background: radial-gradient(farthest-corner at 20% 20%, #6074bf 0, transparent 40%), radial-gradient(farthest-corner at 80% 80%, #513785 0, #24555e 20%, transparent 50%);
    border-radius: 50%;
    box-shadow: 0 0 1px 1px rgba(255, 255, 255, .05);
    height: 8px;
    left: 7px;
    top: 7px;
    width: 8px;
  }

  .device-google-pixel-6-pro .device-btns {
    background: #b2b2ae;
    height: 102px;
    position: absolute;
    right: 0;
    top: 306px;
    width: 3px;
  }

  .device-google-pixel-6-pro .device-power {
    background: #b2b2ae;
    height: 58px;
    position: absolute;
    right: 0;
    top: 194px;
    width: 3px;
  }

  .device-google-pixel-6-pro.device-gold .device-frame {
    box-shadow: inset 0 0 12px #ff962e, inset 0 7px 0 3px white, inset 0 -6px 0 3px white;
  }

  .device-google-pixel-6-pro.device-gold .device-header {
    background: linear-gradient(to bottom, #ff962e 0, #ffd6ad 30%, #ffd6ad 100%);
  }

  .device-google-pixel-6-pro.device-gold .device-stripe::after {
    background: linear-gradient(to top, #121212, #e07000);
  }

  .device-google-pixel-6-pro.device-gold .device-stripe::before {
    background: #ffd6ad;
  }

  .device-google-pixel-6-pro.device-gold .device-btns {
    background: #ffbd7a;
  }

  .device-google-pixel-6-pro.device-gold .device-power {
    background: #ffbd7a;
  }

  .device-google-pixel-6-pro.device-black .device-frame {
    box-shadow: inset 0 0 12px black, inset 0 7px 0 3px #646668, inset 0 -6px 0 3px #646668;
  }

  .device-google-pixel-6-pro.device-black .device-header {
    background: linear-gradient(to bottom, black 0, #323334 30%, #323334 100%);
  }

  .device-google-pixel-6-pro.device-black .device-stripe::after {
    background: linear-gradient(to top, #121212, black);
  }

  .device-google-pixel-6-pro.device-black .device-stripe::before {
    background: #323334;
  }

  .device-google-pixel-6-pro.device-black .device-btns {
    background: #191a1a;
  }

  .device-google-pixel-6-pro.device-black .device-power {
    background: #191a1a;
  }

  .device-google-pixel-2-xl {
    height: 832px;
    width: 404px;
  }

  .device-google-pixel-2-xl .device-frame {
    background: #121212;
    border-radius: 36px;
    box-shadow: inset 0 0 0 2px #cfcfcf, inset 0 0 0 7px #9c9c9c;
    height: 832px;
    padding: 56px 22px;
    width: 404px;
  }

  .device-google-pixel-2-xl .device-screen {
    border-radius: 27px;
    height: 720px;
    width: 360px;
  }

  .device-google-pixel-2-xl .device-header {
    height: 832px;
    left: 50%;
    margin-left: -150px;
    position: absolute;
    top: 0;
    width: 300px;
  }

  .device-google-pixel-2-xl .device-header::after,
  .device-google-pixel-2-xl .device-header::before {
    background: #333;
    border-radius: 3px;
    content: "";
    height: 6px;
    left: 50%;
    margin-left: -73px;
    margin-top: -3px;
    position: absolute;
    width: 146px;
  }

  .device-google-pixel-2-xl .device-header::after {
    top: 24px;
  }

  .device-google-pixel-2-xl .device-header::before {
    bottom: 28px;
  }

  .device-google-pixel-2-xl .device-sensors {
    background: #333;
    border-radius: 7px;
    height: 14px;
    left: 54px;
    margin-top: -7px;
    position: absolute;
    top: 36px;
    width: 14px;
  }

  .device-google-pixel-2-xl .device-btns {
    background: #cfcfcf;
    height: 102px;
    position: absolute;
    right: -3px;
    top: 306px;
    width: 3px;
  }

  .device-google-pixel-2-xl .device-power {
    background: #cfcfcf;
    height: 58px;
    position: absolute;
    right: -3px;
    top: 194px;
    width: 3px;
  }

  .device-google-pixel {
    height: 744px;
    width: 360px;
  }

  .device-google-pixel .device-frame {
    background: #f7f7f8;
    border-radius: 54px;
    box-shadow: inset 0 0 0 2px #c8cacb, inset 0 0 0 6px #e2e3e4, inset 0 0 0 10px white;
    height: 744px;
    padding: 82px 18px 86px 18px;
    width: 360px;
  }

  .device-google-pixel .device-screen {
    border: 2px solid #222;
    border-radius: 2px;
    height: 576px;
    width: 324px;
  }

  .device-google-pixel .device-stripe {
    border-top: 6px solid rgba(51, 51, 51, .15);
    bottom: 0;
    left: 254px;
    position: absolute;
    top: 0;
    width: 8px;
  }

  .device-google-pixel .device-stripe::after,
  .device-google-pixel .device-stripe::before {
    border: solid rgba(51, 51, 51, .15);
    border-width: 0 6px;
    content: "";
    height: 10px;
    left: -254px;
    position: absolute;
    width: 360px;
    z-index: 9;
  }

  .device-google-pixel .device-stripe::after {
    top: 60px;
  }

  .device-google-pixel .device-stripe::before {
    bottom: 46px;
  }

  .device-google-pixel .device-sensors {
    background: #ddd;
    border-radius: 2.5px;
    height: 5px;
    left: 50%;
    margin-left: -39px;
    margin-top: -2.5px;
    position: absolute;
    top: 41px;
    width: 78px;
  }

  .device-google-pixel .device-sensors::after,
  .device-google-pixel .device-sensors::before {
    background: #333;
    border-radius: 6px;
    content: "";
    position: absolute;
  }

  .device-google-pixel .device-sensors::after {
    height: 12px;
    left: 50%;
    margin-left: -14px;
    top: 21.5px;
    width: 28px;
  }

  .device-google-pixel .device-sensors::before {
    height: 10px;
    left: -81px;
    margin-top: -5px;
    top: 50%;
    width: 10px;
  }

  .device-google-pixel .device-btns {
    background: #c8cacb;
    height: 102px;
    position: absolute;
    right: -2px;
    top: 298px;
    width: 3px;
  }

  .device-google-pixel .device-power {
    background: #c8cacb;
    height: 50px;
    position: absolute;
    right: -2px;
    top: 184px;
    width: 3px;
  }

  .device-google-pixel.device-black .device-frame {
    background: #211d1c;
    box-shadow: inset 0 0 0 2px #363635, inset 0 0 0 6px #6a6967, inset 0 0 0 10px #3d3533;
  }

  .device-google-pixel.device-black .device-stripe,
  .device-google-pixel.device-black .device-stripe::after,
  .device-google-pixel.device-black .device-stripe::before {
    border-color: rgba(13, 13, 13, .35);
  }

  .device-google-pixel.device-black .device-sensors {
    background: #444;
  }

  .device-google-pixel.device-black .device-sensors::after {
    background: #0d0d0d;
  }

  .device-google-pixel.device-black .device-btns,
  .device-google-pixel.device-black .device-btns::after,
  .device-google-pixel.device-black .device-btns::before {
    background: #363635;
  }

  .device-google-pixel.device-black .device-power {
    background: #363635;
  }

  .device-google-pixel.device-blue .device-frame {
    box-shadow: inset 0 0 0 2px #2a5aff, inset 0 0 0 6px #7695ff, inset 0 0 0 10px white;
  }

  .device-google-pixel.device-blue .device-btns,
  .device-google-pixel.device-blue .device-btns::after,
  .device-google-pixel.device-blue .device-btns::before {
    background: #2a5aff;
  }

  .device-google-pixel.device-blue .device-power {
    background: #2a5aff;
  }

  .device-galaxy-s8 {
    height: 828px;
    width: 380px;
  }

  .device-galaxy-s8 .device-frame {
    background: #222;
    border: solid #cfcfcf;
    border-radius: 55px;
    border-width: 5px 0;
    box-shadow: inset 0 0 0 2px #9c9c9c;
    height: 828px;
    padding: 48px 10px 40px 10px;
    width: 380px;
  }

  .device-galaxy-s8 .device-screen {
    border: 2px solid #222;
    border-radius: 34px;
    height: 740px;
    width: 360px;
  }

  .device-galaxy-s8 .device-stripe::after,
  .device-galaxy-s8 .device-stripe::before {
    border: solid rgba(51, 51, 51, .15);
    border-width: 5px 0;
    content: "";
    height: 828px;
    position: absolute;
    top: 0;
    width: 6px;
    z-index: 9;
  }

  .device-galaxy-s8 .device-stripe::after {
    left: 48px;
  }

  .device-galaxy-s8 .device-stripe::before {
    right: 48px;
  }

  .device-galaxy-s8 .device-sensors {
    background: #666;
    border-radius: 3px;
    height: 6px;
    left: 50%;
    margin-left: -24px;
    margin-top: -3px;
    position: absolute;
    top: 32px;
    width: 48px;
  }

  .device-galaxy-s8 .device-sensors::after,
  .device-galaxy-s8 .device-sensors::before {
    background: #666;
    border-radius: 50%;
    content: "";
    position: absolute;
    top: 50%;
  }

  .device-galaxy-s8 .device-sensors::after {
    box-shadow: -192px 0 #333, -174px 0 #333, -240px 0 #333;
    height: 8px;
    margin-top: -4px;
    right: -90px;
    width: 8px;
  }

  .device-galaxy-s8 .device-sensors::before {
    box-shadow: 186px 0 #666;
    height: 12px;
    left: -90px;
    margin-top: -6px;
    width: 12px;
  }

  .device-galaxy-s8 .device-btns {
    background: #9c9c9c;
    border-radius: 3px 0 0 3px;
    height: 116px;
    left: -3px;
    position: absolute;
    top: 144px;
    width: 3px;
  }

  .device-galaxy-s8 .device-btns::after {
    background: #9c9c9c;
    border-radius: 3px 0 0 3px;
    content: "";
    height: 54px;
    left: 0;
    position: absolute;
    top: 164px;
    width: 3px;
  }

  .device-galaxy-s8 .device-power {
    background: #9c9c9c;
    border-radius: 0 3px 3px 0;
    height: 54px;
    position: absolute;
    right: -3px;
    top: 260px;
    width: 3px;
  }

  .device-galaxy-s8.device-blue .device-frame {
    border-color: #a3c5e8;
    box-shadow: inset 0 0 0 2px #5192d4;
  }

  .device-galaxy-s8.device-blue .device-stripe::after,
  .device-galaxy-s8.device-blue .device-stripe::before {
    border-color: rgba(255, 255, 255, .35);
  }

  .device-galaxy-s8.device-blue .device-btns,
  .device-galaxy-s8.device-blue .device-btns::after {
    background: #5192d4;
  }

  .device-galaxy-s8.device-blue .device-power {
    background: #5192d4;
  }

  .device-macbook-pro {
    height: 434px;
    width: 740px;
  }

  .device-macbook-pro .device-frame {
    background: #0d0d0d;
    border-radius: 20px;
    box-shadow: inset 0 0 0 2px #c8cacb;
    height: 418px;
    margin: 0 auto;
    padding: 9px 9px 23px 9px;
    position: relative;
    width: 618px;
  }

  .device-macbook-pro .device-frame::after {
    background: linear-gradient(to bottom, #272727, #0d0d0d);
    border-radius: 0 0 20px 20px;
    bottom: 2px;
    content: "";
    height: 24px;
    left: 2px;
    position: absolute;
    width: 614px;
  }

  .device-macbook-pro .device-header {
    background: #0d0d0d;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    height: 12px;
    left: 50%;
    margin-left: -32px;
    position: absolute;
    top: 11px;
    width: 64px;
    z-index: 2;
  }

  .device-macbook-pro .device-header::after,
  .device-macbook-pro .device-header::before {
    content: "";
    height: 4px;
    position: absolute;
    top: 0;
    width: 4px;
  }

  .device-macbook-pro .device-header::after {
    background: radial-gradient(circle at bottom left, transparent 0, transparent 75%, #0d0d0d 75%, #0d0d0d 100%);
    left: -4px;
  }

  .device-macbook-pro .device-header::before {
    background: radial-gradient(circle at bottom right, transparent 0, transparent 75%, #0d0d0d 75%, #0d0d0d 100%);
    right: -4px;
  }

  .device-macbook-pro .device-screen {
    border: 2px solid #121212;
    border-radius: 10px 10px 0 0;
    height: 375px;
    width: 600px;
  }

  .device-macbook-pro .device-power {
    background: radial-gradient(circle at center, #e2e3e4 85%, #c8cacb 100%);
    border: solid #a0a3a7;
    border-radius: 2px 2px 12px 12px;
    border-width: 1px 2px 0 2px;
    box-shadow: inset 0 -2px 8px 0 #6c7074;
    height: 24px;
    margin-top: -10px;
    position: relative;
    width: 740px;
    z-index: 9;
  }

  .device-macbook-pro .device-power::after {
    background: #e2e3e4;
    border-radius: 0 0 10px 10px;
    box-shadow: inset 0 0 4px 2px #babdbf;
    content: "";
    height: 10px;
    left: 50%;
    margin-left: -60px;
    position: absolute;
    top: 0;
    width: 120px;
  }

  .device-macbook-pro .device-power::before {
    background: transparent;
    border-radius: 0 0 3px 3px;
    bottom: -2px;
    box-shadow: -300px 0 #272727, 300px 0 #272727;
    content: "";
    height: 2px;
    left: 50%;
    margin-left: -20px;
    position: absolute;
    width: 40px;
  }

  .device-macbook-pro.device-spacegray .device-frame {
    box-shadow: inset 0 0 0 2px #767a7d;
  }

  .device-macbook-pro.device-spacegray .device-power {
    background: radial-gradient(circle at center, #83878a 85%, #767a7d 100%);
    border-color: #454749;
    box-shadow: inset 0 -2px 8px 0 #202121;
  }

  .device-macbook-pro.device-spacegray .device-power::after {
    background: #b7babc;
    box-shadow: inset 0 0 4px 2px #6a6d70;
  }

  .device-macbook-pro-2018 {
    height: 444px;
    width: 740px;
  }

  .device-macbook-pro-2018 .device-frame {
    background: #0d0d0d;
    border-radius: 20px;
    box-shadow: inset 0 0 0 2px #c8cacb;
    height: 428px;
    margin: 0 auto;
    padding: 29px 19px 39px 19px;
    position: relative;
    width: 614px;
  }

  .device-macbook-pro-2018 .device-frame::after {
    background: #272727;
    border-radius: 0 0 20px 20px;
    bottom: 2px;
    content: "";
    height: 26px;
    left: 2px;
    position: absolute;
    width: 610px;
  }

  .device-macbook-pro-2018 .device-frame::before {
    bottom: 10px;
    color: #c8cacb;
    content: "MacBook Pro";
    font-size: 12px;
    height: 16px;
    left: 50%;
    line-height: 16px;
    margin-left: -100px;
    position: absolute;
    text-align: center;
    width: 200px;
    z-index: 1;
  }

  .device-macbook-pro-2018 .device-screen {
    border: 2px solid #121212;
    border-radius: 2px;
    height: 360px;
    width: 576px;
  }

  .device-macbook-pro-2018 .device-power {
    background: #e2e3e4;
    border: solid #d5d6d8;
    border-radius: 2px 2px 0 0;
    border-width: 2px 4px 0 4px;
    height: 14px;
    margin-top: -10px;
    position: relative;
    width: 740px;
    z-index: 9;
  }

  .device-macbook-pro-2018 .device-power::after,
  .device-macbook-pro-2018 .device-power::before {
    content: "";
    position: absolute;
  }

  .device-macbook-pro-2018 .device-power::after {
    background: #d5d6d8;
    border-radius: 0 0 10px 10px;
    box-shadow: inset 0 0 4px 2px #babdbf;
    height: 10px;
    left: 50%;
    margin-left: -60px;
    top: -2px;
    width: 120px;
  }

  .device-macbook-pro-2018 .device-power::before {
    background: #a0a3a7;
    border-radius: 0 0 180px 180px/ 0 0 12px 12px;
    box-shadow: inset 0 -2px 6px 0 #474a4d;
    height: 12px;
    left: -4px;
    margin: 0 auto;
    top: 10px;
    width: 740px;
  }

  .device-macbook-pro-2018.device-spacegray .device-frame {
    box-shadow: inset 0 0 0 2px #767a7d;
  }

  .device-macbook-pro-2018.device-spacegray .device-power {
    background: #909496;
    border-color: #767a7d;
  }

  .device-macbook-pro-2018.device-spacegray .device-power::after {
    background: #83878a;
    box-shadow: inset 0 0 4px 2px #6a6d70;
  }

  .device-macbook-pro-2018.device-spacegray .device-power::before {
    background: #515456;
    box-shadow: inset 0 -2px 6px 0 black;
  }

  .device-macbook {
    height: 432px;
    width: 740px;
  }

  .device-macbook .device-frame {
    background: #0d0d0d;
    border-radius: 20px;
    box-shadow: inset 0 0 0 2px #c8cacb;
    height: 428px;
    margin: 0 auto;
    padding: 29px 19px 39px 19px;
    position: relative;
    width: 614px;
  }

  .device-macbook .device-frame::after {
    background: #272727;
    border-radius: 0 0 20px 20px;
    bottom: 2px;
    content: "";
    height: 26px;
    left: 2px;
    position: absolute;
    width: 610px;
  }

  .device-macbook .device-frame::before {
    bottom: 10px;
    color: #c8cacb;
    content: "MacBook";
    font-size: 12px;
    height: 16px;
    left: 50%;
    line-height: 16px;
    margin-left: -100px;
    position: absolute;
    text-align: center;
    width: 200px;
    z-index: 1;
  }

  .device-macbook .device-screen {
    border: 2px solid #121212;
    border-radius: 2px;
    height: 360px;
    width: 576px;
  }

  .device-macbook .device-power {
    background: #e2e3e4;
    border: solid #d5d6d8;
    border-radius: 2px 2px 0 0;
    border-width: 0 4px;
    height: 4px;
    margin-top: -10px;
    position: relative;
    width: 740px;
    z-index: 9;
  }

  .device-macbook .device-power::after,
  .device-macbook .device-power::before {
    content: "";
    position: absolute;
  }

  .device-macbook .device-power::after {
    background: radial-gradient(circle at center, #e2e3e4 0, #e2e3e4 85%, #a0a3a7 100%);
    border: solid #adb0b3;
    border-width: 0 2px;
    height: 4px;
    left: 50%;
    margin-left: -60px;
    width: 120px;
  }

  .device-macbook .device-power::before {
    background: #a0a3a7;
    border-radius: 0 0 180px 180px/ 0 0 10px 10px;
    box-shadow: inset 0 -2px 6px 0 #474a4d;
    height: 10px;
    left: -4px;
    margin: 0 auto;
    top: 4px;
    width: 740px;
  }

  .device-macbook.device-gold .device-frame {
    box-shadow: inset 0 0 0 2px #edccb4;
  }

  .device-macbook.device-gold .device-power {
    background: #f7e8dd;
    border-color: #edccb4;
  }

  .device-macbook.device-gold .device-power::after {
    background: radial-gradient(circle at center, #f7e8dd 0, #f7e8dd 85%, #dfa276 100%);
    border-color: #e4b08a;
  }

  .device-macbook.device-gold .device-power::before {
    background: #edccb4;
    box-shadow: inset 0 -2px 6px 0 #83491f;
  }

  .device-macbook.device-rosegold .device-frame {
    box-shadow: inset 0 0 0 2px #f6a69a;
  }

  .device-macbook.device-rosegold .device-power {
    background: #facfc9;
    border-color: #f6a69a;
  }

  .device-macbook.device-rosegold .device-power::after {
    background: radial-gradient(circle at center, #facfc9 0, #facfc9 85%, #ef6754 100%);
    border-color: #f6a69a;
  }

  .device-macbook.device-rosegold .device-power::before {
    background: #f6a69a;
    box-shadow: inset 0 -2px 6px 0 #851b0c;
  }

  .device-macbook.device-spacegray .device-frame {
    box-shadow: inset 0 0 0 2px #767a7d;
  }

  .device-macbook.device-spacegray .device-power {
    background: #909496;
    border-color: #767a7d;
  }

  .device-macbook.device-spacegray .device-power::after {
    background: radial-gradient(circle at center, #909496 0, #909496 85%, #515456 100%);
    border-color: #5d6163;
  }

  .device-macbook.device-spacegray .device-power::before {
    background: #515456;
    box-shadow: inset 0 -2px 6px 0 black;
  }

  .device-imac {
    height: 540px;
    width: 640px;
  }

  .device-imac .device-frame {
    background: #edeef0;
    border-radius: 18px;
    box-shadow: inset 0 0 0 1px #d4d5d7;
    height: 440px;
    padding: 16px 16px 80px 16px;
    position: relative;
    width: 640px;
  }

  .device-imac .device-frame::after {
    background: #d4d5d7;
    border-radius: 0 0 18px 18px;
    bottom: 1px;
    box-shadow: inset 0 0 18px 0 #c7c8cb;
    content: "";
    height: 63px;
    left: 1px;
    position: absolute;
    width: 638px;
  }

  .device-imac .device-frame::before {
    background: #050505;
    border-radius: 50%;
    content: "";
    height: 6px;
    left: 50%;
    margin-left: -3px;
    position: absolute;
    text-align: center;
    top: 6px;
    width: 6px;
    z-index: 9;
  }

  .device-imac .device-screen {
    border: 2px solid #121212;
    border-radius: 2px;
    height: 342px;
    width: 608px;
  }

  .device-imac .device-power::after {
    background: radial-gradient(circle at center, #d4d5d7 85%, #9fa1a6 100%);
    border-top: 1px solid #d4d5d7;
    content: "";
    height: 6px;
    margin: 0 auto;
    position: relative;
    width: 152px;
  }

  .device-imac .device-power::before {
    background: linear-gradient(to bottom, #9fa1a6 0, #c7c8cb 40%, #c7c8cb 85%, white 90%, #6b6e74 100%);
    content: "";
    height: 92px;
    margin: 0 auto;
    position: relative;
    width: 152px;
  }

  .device-imac .device-home {
    background: transparent;
    border-radius: 0 0 3px 3px;
    bottom: 0;
    box-shadow: -61px 0 #d4d5d7, 61px 0 #d4d5d7;
    height: 2px;
    left: 50%;
    margin-left: -15px;
    position: absolute;
    width: 30px;
  }

  .device-imac.device-blue .device-frame {
    box-shadow: inset 0 0 0 2px #b4c7da;
  }

  .device-imac.device-blue .device-frame::after {
    background: #b4c7da;
    box-shadow: inset 0 0 18px 0 #a3bad2;
  }

  .device-imac.device-blue .device-power::after {
    background: radial-gradient(circle at center, #b4c7da 85%, #7094b8 100%);
    border-top-color: #b4c7da;
  }

  .device-imac.device-blue .device-power::before {
    background: linear-gradient(to bottom, #7094b8 0, #a3bad2 40%, #a3bad2 85%, white 90%, #406182 100%);
  }

  .device-imac.device-blue .device-home {
    box-shadow: -61px 0 #b4c7da, 61px 0 #b4c7da;
  }

  .device-imac.device-green .device-frame {
    box-shadow: inset 0 0 0 2px #bbd0c8;
  }

  .device-imac.device-green .device-frame::after {
    background: #bbd0c8;
    box-shadow: inset 0 0 18px 0 #acc6bc;
  }

  .device-imac.device-green .device-power::after {
    background: radial-gradient(circle at center, #bbd0c8 85%, #7fa697 100%);
    border-top-color: #bbd0c8;
  }

  .device-imac.device-green .device-power::before {
    background: linear-gradient(to bottom, #7fa697 0, #acc6bc 40%, #acc6bc 85%, white 90%, #4e7164 100%);
  }

  .device-imac.device-green .device-home {
    box-shadow: -61px 0 #bbd0c8, 61px 0 #bbd0c8;
  }

  .device-imac.device-pink .device-frame {
    box-shadow: inset 0 0 0 2px #edccc6;
  }

  .device-imac.device-pink .device-frame::after {
    background: #edccc6;
    box-shadow: inset 0 0 18px 0 #e7bbb3;
  }

  .device-imac.device-pink .device-power::after {
    background: radial-gradient(circle at center, #edccc6 85%, #d58778 100%);
    border-top-color: #edccc6;
  }

  .device-imac.device-pink .device-power::before {
    background: linear-gradient(to bottom, #d58778 0, #e7bbb3 40%, #e7bbb3 85%, white 90%, #b04a37 100%);
  }

  .device-imac.device-pink .device-home {
    box-shadow: -61px 0 #edccc6, 61px 0 #edccc6;
  }

  .device-imac.device-yellow .device-frame {
    box-shadow: inset 0 0 0 2px #f4d595;
  }

  .device-imac.device-yellow .device-frame::after {
    background: #f4d595;
    box-shadow: inset 0 0 18px 0 #f2cc7e;
  }

  .device-imac.device-yellow .device-power::after {
    background: radial-gradient(circle at center, #f4d595 85%, #eab039 100%);
    border-top-color: #f4d595;
  }

  .device-imac.device-yellow .device-power::before {
    background: linear-gradient(to bottom, #eab039 0, #f2cc7e 40%, #f2cc7e 85%, white 90%, #ab7912 100%);
  }

  .device-imac.device-yellow .device-home {
    box-shadow: -61px 0 #f4d595, 61px 0 #f4d595;
  }

  .device-imac.device-orange .device-frame {
    box-shadow: inset 0 0 0 2px #e9b5a0;
  }

  .device-imac.device-orange .device-frame::after {
    background: #e9b5a0;
    box-shadow: inset 0 0 18px 0 #e4a58b;
  }

  .device-imac.device-orange .device-power::after {
    background: radial-gradient(circle at center, #e9b5a0 85%, #d6744d 100%);
    border-top-color: #e9b5a0;
  }

  .device-imac.device-orange .device-power::before {
    background: linear-gradient(to bottom, #d6744d 0, #e4a58b 40%, #e4a58b 85%, white 90%, #994524 100%);
  }

  .device-imac.device-orange .device-home {
    box-shadow: -61px 0 #e9b5a0, 61px 0 #e9b5a0;
  }

  .device-imac.device-purple .device-frame {
    box-shadow: inset 0 0 0 2px #c4c4e5;
  }

  .device-imac.device-purple .device-frame::after {
    background: #c4c4e5;
    box-shadow: inset 0 0 18px 0 #b2b2dd;
  }

  .device-imac.device-purple .device-power::after {
    background: radial-gradient(circle at center, #c4c4e5 85%, #7d7dc6 100%);
    border-top-color: #c4c4e5;
  }

  .device-imac.device-purple .device-power::before {
    background: linear-gradient(to bottom, #7d7dc6 0, #b2b2dd 40%, #b2b2dd 85%, white 90%, #449 100%);
  }

  .device-imac.device-purple .device-home {
    box-shadow: -61px 0 #c4c4e5, 61px 0 #c4c4e5;
  }

  .device-imac-pro {
    height: 484px;
    width: 624px;
  }

  .device-imac-pro .device-frame {
    background: #0d0d0d;
    border-radius: 18px;
    box-shadow: inset 0 0 0 2px #080808;
    height: 428px;
    padding: 24px 24px 80px 24px;
    position: relative;
    width: 624px;
  }

  .device-imac-pro .device-frame::after {
    background: #2f2e33;
    border-radius: 0 0 18px 18px;
    bottom: 2px;
    content: "";
    height: 54px;
    left: 2px;
    position: absolute;
    width: 620px;
  }

  .device-imac-pro .device-frame::before {
    bottom: 15px;
    color: #0d0d0d;
    content: "";
    font-size: 24px;
    height: 24px;
    left: 50%;
    line-height: 24px;
    margin-left: -100px;
    position: absolute;
    text-align: center;
    width: 200px;
    z-index: 9;
  }

  .device-imac-pro .device-screen {
    border: 2px solid #121212;
    border-radius: 2px;
    height: 324px;
    width: 576px;
  }

  .device-imac-pro .device-power::after,
  .device-imac-pro .device-power::before {
    content: "";
  }

  .device-imac-pro .device-power::after {
    background: #222225;
    border-radius: 2px;
    height: 6px;
    margin: 0 auto;
    position: relative;
    width: 180px;
  }

  .device-imac-pro .device-power::before {
    border: solid transparent;
    border-bottom-color: #333;
    border-width: 0 8px 50px 8px;
    height: 50px;
    margin: 0 auto;
    position: relative;
    width: 130px;
  }

  .device-surface-book {
    height: 424px;
    width: 728px;
  }

  .device-surface-book .device-frame {
    background: #0d0d0d;
    border-radius: 12px;
    box-shadow: inset 0 0 0 2px #c8c8c8;
    height: 408px;
    margin: 0 auto;
    padding: 24px 22px;
    position: relative;
    width: 584px;
  }

  .device-surface-book .device-screen {
    border: 2px solid #121212;
    border-radius: 2px;
    height: 360px;
    width: 540px;
  }

  .device-surface-book .device-btns::after,
  .device-surface-book .device-btns::before {
    background: #c8c8c8;
    content: "";
    height: 2px;
    position: absolute;
    top: -2px;
  }

  .device-surface-book .device-btns::after {
    left: 122px;
    width: 20px;
  }

  .device-surface-book .device-btns::before {
    left: 168px;
    width: 44px;
  }

  .device-surface-book .device-power {
    background: linear-gradient(to bottom, #eee, #c8c8c8);
    border: solid #c8c8c8;
    border-radius: 2px;
    border-width: 0 2px;
    height: 16px;
    margin-top: 4px;
    position: relative;
    width: 728px;
  }

  .device-surface-book .device-power::after,
  .device-surface-book .device-power::before {
    content: "";
    position: absolute;
  }

  .device-surface-book .device-power::after {
    background: radial-gradient(circle at center, #eee 0, #eee 95%, #a2a2a2 100%);
    border-radius: 0 0 6px 6px;
    height: 8px;
    left: 50%;
    margin-left: -125px;
    top: 0;
    width: 250px;
    z-index: 1;
  }

  .device-surface-book .device-power::before {
    background: linear-gradient(to bottom, #eee, #c8c8c8);
    border-radius: 2px 2px 0 0;
    bottom: 16px;
    height: 8px;
    left: 50%;
    margin-left: -292px;
    width: 584px;
  }

  .device-surface-studio {
    height: 506px;
    width: 640px;
  }

  .device-surface-studio .device-frame {
    background: #0d0d0d;
    border-radius: 10px;
    box-shadow: inset 0 0 0 2px black;
    height: 440px;
    padding: 20px;
    width: 640px;
  }

  .device-surface-studio .device-screen {
    border: 2px solid #121212;
    border-radius: 2px;
    height: 400px;
    width: 600px;
  }

  .device-surface-studio .device-stripe {
    background: #444;
    border-radius: 0 0 2px 2px;
    bottom: 0;
    height: 4px;
    left: 50%;
    margin-left: -117px;
    position: absolute;
    width: 234px;
  }

  .device-surface-studio .device-stripe::after,
  .device-surface-studio .device-stripe::before {
    content: "";
    left: 50%;
    position: absolute;
    top: -75px;
  }

  .device-surface-studio .device-stripe::after {
    border: 1px solid #e2e3e4;
    border-radius: 0 0 18px 18px;
    border-top: 0;
    box-shadow: inset 0 0 4px 1px #c8cacb, inset 0 0 4px 2px #e2e3e4, inset 0 0 0 8px #c8cacb;
    height: 60px;
    margin-left: -140px;
    width: 280px;
    z-index: -1;
  }

  .device-surface-studio .device-stripe::before {
    border: 15px solid #e2e3e4;
    border-radius: 0 0 8px 8px;
    border-top: 0;
    height: 70px;
    margin-left: -150px;
    width: 300px;
    z-index: -2;
  }

  .device-surface-studio .device-power {
    background: radial-gradient(circle at center, #e2e3e4 85%, #c8cacb 100%);
    border-radius: 0 0 2px 2px;
    height: 32px;
    margin: 30px auto 0 auto;
    position: relative;
    width: 250px;
  }

  .device-surface-studio .device-power::after {
    background: #babdbf;
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    top: 4px;
    width: 250px;
  }

  .device-ipad-pro {
    height: 778px;
    width: 560px;
  }

  .device-ipad-pro .device-frame {
    background: #0d0d0d;
    border-radius: 36px;
    box-shadow: inset 0 0 0 1px #babdbf, inset 0 0 1px 3px #e2e3e4;
    height: 778px;
    padding: 27px;
    width: 560px;
  }

  .device-ipad-pro .device-screen {
    border: 2px solid #121212;
    border-radius: 11px;
    height: 724px;
    width: 506px;
  }

  .device-ipad-pro .device-btns::after,
  .device-ipad-pro .device-btns::before {
    background: #babdbf;
    content: "";
    position: absolute;
  }

  .device-ipad-pro .device-btns::after {
    height: 2px;
    right: 40px;
    top: -2px;
    width: 36px;
  }

  .device-ipad-pro .device-btns::before {
    box-shadow: 0 37px #babdbf;
    height: 32px;
    right: -2px;
    top: 63px;
    width: 2px;
  }

  .device-ipad-pro .device-sensors::after,
  .device-ipad-pro .device-sensors::before {
    content: "";
    position: absolute;
  }

  .device-ipad-pro .device-sensors::after {
    background: #1a1a1a;
    border-radius: 17px;
    box-shadow: -20px 0 #1a1a1a, 70px 0 #1a1a1a;
    height: 10px;
    left: 50%;
    margin-left: -30px;
    top: 12px;
    width: 10px;
  }

  .device-ipad-pro .device-sensors::before {
    background: radial-gradient(farthest-corner at 20% 20%, #6074bf 0, transparent 40%), radial-gradient(farthest-corner at 80% 80%, #513785 0, #24555e 20%, transparent 50%);
    border-radius: 50%;
    box-shadow: 0 0 1px 1px rgba(255, 255, 255, .05);
    height: 6px;
    left: 50%;
    margin-left: -3px;
    top: 14px;
    width: 6px;
  }

  .device-ipad-pro.device-spacegray .device-frame {
    box-shadow: inset 0 0 0 1px #6a6d70, inset 0 0 1px 3px #83878a;
  }

  .device-ipad-pro.device-spacegray .device-btns::after,
  .device-ipad-pro.device-spacegray .device-btns::before {
    background: #6a6d70;
  }

  .device-ipad-pro.device-spacegray .device-btns::before {
    box-shadow: 0 37px #6a6d70;
  }

  .device-ipad-pro-2017 {
    height: 804px;
    width: 560px;
  }

  .device-ipad-pro-2017 .device-frame {
    background: #fff;
    border-radius: 38px;
    box-shadow: inset 0 0 0 2px #c8cacb, inset 0 0 0 6px #e2e3e4;
    height: 804px;
    padding: 62px 25px;
    width: 560px;
  }

  .device-ipad-pro-2017 .device-screen {
    border: 2px solid #222;
    border-radius: 2px;
    height: 680px;
    width: 510px;
  }

  .device-ipad-pro-2017 .device-home {
    border: 2px solid #c8cacb;
    border-radius: 50%;
    bottom: 17px;
    height: 34px;
    left: 50%;
    margin-left: -17px;
    position: absolute;
    width: 34px;
  }

  .device-ipad-pro-2017 .device-sensors {
    background: #666;
    border-radius: 50%;
    height: 10px;
    left: 50%;
    margin-left: -5px;
    margin-top: -5px;
    position: absolute;
    top: 34px;
    width: 10px;
  }

  .device-ipad-pro-2017.device-gold .device-frame {
    box-shadow: inset 0 0 0 2px #e4b08a, inset 0 0 0 6px #f7e8dd;
  }

  .device-ipad-pro-2017.device-gold .device-header {
    border-color: #e4b08a;
  }

  .device-ipad-pro-2017.device-rosegold .device-frame {
    box-shadow: inset 0 0 0 2px #f6a69a, inset 0 0 0 6px #facfc9;
  }

  .device-ipad-pro-2017.device-rosegold .device-home {
    border-color: #f6a69a;
  }

  .device-ipad-pro-2017.device-spacegray .device-frame {
    background: #222;
    box-shadow: inset 0 0 0 2px #818187, inset 0 0 0 6px #9b9ba0;
  }

  .device-ipad-pro-2017.device-spacegray .device-home {
    border-color: #818187;
  }

  .device-surface-pro-2017 {
    height: 394px;
    width: 561px;
  }

  .device-surface-pro-2017 .device-frame {
    background: #0d0d0d;
    border-radius: 10px;
    box-shadow: inset 0 0 0 2px #c8c8c8;
    height: 394px;
    margin: 0 auto;
    padding: 26px 24px;
    width: 561px;
  }

  .device-surface-pro-2017 .device-screen {
    border: 2px solid #121212;
    border-radius: 2px;
    height: 342px;
    width: 513px;
  }

  .device-surface-pro-2017 .device-btns::after,
  .device-surface-pro-2017 .device-btns::before {
    background: #c8c8c8;
    content: "";
    height: 2px;
    position: absolute;
    top: -2px;
  }

  .device-surface-pro-2017 .device-btns::after {
    left: 48px;
    width: 26px;
  }

  .device-surface-pro-2017 .device-btns::before {
    left: 94px;
    width: 48px;
  }

  .device-surface-pro-2017 .device-sensors {
    background: #333;
    border-radius: 50%;
    height: 6px;
    left: 50%;
    margin-left: -3px;
    margin-top: -3px;
    position: absolute;
    top: 14px;
    width: 6px;
  }

  .device-apple-watch-ultra {
    height: 380px;
    width: 360px;
  }

  .device-apple-watch-ultra .device-frame {
    background: #0d0d0d;
    border-radius: 92px;
    box-shadow: inset 0 0 12px 1px rgba(13, 13, 13, .75), inset 0 0 0 6px #d6ccc2, inset 0 0 0 12px #d6ccc2;
    height: 380px;
    margin: 0 20px;
    padding: 38px;
    position: relative;
    width: 320px;
  }

  .device-apple-watch-ultra .device-frame::before {
    border: 1px solid #f5f2f0;
    border-radius: 80px;
    box-shadow: 0 0 6px rgba(13, 13, 13, .2), inset 0 0 4px 1px #f5f2f0, inset 0 0 0 10px #d6ccc2;
    content: "";
    height: 356px;
    left: 12px;
    position: absolute;
    top: 12px;
    width: 296px;
  }

  .device-apple-watch-ultra .device-screen {
    border: 2px solid #121212;
    border-radius: 62px;
    height: 304px;
    width: 244px;
  }

  .device-apple-watch-ultra .device-header {
    background: radial-gradient(circle at center, #d6ccc2 50%, #ebe6e1 85%, #a38c76 100%);
    border-radius: 4px 4px 4px 4px / 8px 4px 4px 8px;
    box-shadow: inset 0 0 16px 1px rgba(13, 13, 13, .5), -8px 0 4px rgba(13, 13, 13, .2), inset 4px 0 4px rgba(13, 13, 13, .2);
    height: 214px;
    margin-top: -107px;
    position: absolute;
    right: 4px;
    top: 50%;
    width: 18px;
    z-index: 1;
  }

  .device-apple-watch-ultra .device-header::before {
    border-radius: 8px 4px 4px 8px / 32px 4px 4px 32px;
    box-shadow: -10px 0 8px rgba(13, 13, 13, .2);
    content: "";
    height: 194px;
    margin-top: -97px;
    position: absolute;
    right: 8px;
    top: 50%;
    width: 12px;
  }

  .device-apple-watch-ultra .device-btns {
    background: #d6ccc2;
    border-left: 1px solid #4c4033;
    border-radius: 8px 6px 6px 8px / 20px 6px 6px 20px;
    box-shadow: inset 8px 0 8px 0 #5c4d3e, inset -2px 0 6px #a38c76;
    height: 72px;
    position: absolute;
    right: 1px;
    top: 108px;
    width: 24px;
    z-index: 9;
  }

  .device-apple-watch-ultra .device-btns::after {
    background: #d6ccc2;
    border-radius: 2px 4px 4px 2px / 20px 8px 8px 20px;
    box-shadow: inset -2px 0 2px 0 #6b5948, inset -6px 0 18px #a38c76;
    content: "";
    height: 78px;
    position: absolute;
    right: 0;
    top: -4px;
    width: 6px;
  }

  .device-apple-watch-ultra .device-btns::before {
    background: #d6ccc2;
    border-radius: 20%;
    box-shadow: 0 -30px rgba(163, 140, 118, .5), 0 -27px #d6ccc2, 0 -25px #89735c, 0 -21px rgba(163, 140, 118, .5), 0 -18px #d6ccc2, 0 -16px #89735c, 0 -12px rgba(163, 140, 118, .5), 0 -9px #d6ccc2, 0 -7px #89735c, 0 -3px rgba(163, 140, 118, .5), 0 0 #d6ccc2, 0 2px #89735c, 0 6px rgba(163, 140, 118, .5), 0 9px #d6ccc2, 0 11px #89735c, 0 15px rgba(163, 140, 118, .5), 0 18px #d6ccc2, 0 20px #89735c, 0 24px rgba(163, 140, 118, .5), 0 27px #d6ccc2, 0 29px #89735c;
    content: "";
    height: 3px;
    margin-top: -2px;
    position: absolute;
    right: 2px;
    top: 50%;
    width: 16px;
    z-index: 9;
  }

  .device-apple-watch-ultra .device-stripe {
    background: #e0d9d1;
    border-radius: 2px 8px 8px 2px;
    box-shadow: 0 14px 0 #d6ccc2, 0 28px 0 #d6ccc2;
    height: 10px;
    left: 19px;
    position: absolute;
    top: 98px;
    width: 4px;
    z-index: 1;
  }

  .device-apple-watch-ultra .device-power {
    background: #d6ccc2;
    border-radius: 2px 4px 4px 2px / 2px 8px 8px 2px;
    box-shadow: inset 0 0 2px 1px #a38c76;
    height: 72px;
    position: absolute;
    right: 1px;
    top: 212px;
    width: 4px;
  }

  .device-apple-watch-ultra .device-home {
    background: #f18f42;
    border: 1px solid #a7500c;
    border-radius: 2px 4px 4px 2px / 2px 8px 8px 2px;
    box-shadow: inset 0 0 1px 1px #ef812a;
    height: 106px;
    left: 19px;
    position: absolute;
    top: 162px;
    width: 4px;
    z-index: 1;
  }

  .device-apple-watch-s8 {
    height: 380px;
    width: 360px;
  }

  .device-apple-watch-s8 .device-frame {
    background: #0d0d0d;
    border-radius: 92px;
    box-shadow: inset 0 0 24px 1px #0d0d0d, inset 0 0 0 12px #606c78;
    height: 380px;
    margin: 0 20px;
    padding: 28px 26px;
    position: relative;
    width: 320px;
  }

  .device-apple-watch-s8 .device-frame::before {
    border: 1px solid #0d0d0d;
    border-radius: 80px;
    box-shadow: 0 0 12px rgba(255, 255, 255, .5), inset 0 0 12px 2px rgba(255, 255, 255, .75);
    content: "";
    height: 356px;
    left: 12px;
    position: absolute;
    top: 12px;
    width: 298px;
  }

  .device-apple-watch-s8 .device-screen {
    border: 2px solid #121212;
    border-radius: 62px;
    height: 324px;
    width: 268px;
  }

  .device-apple-watch-s8 .device-btns {
    background: #606c78;
    border-left: 1px solid black;
    border-radius: 8px 6px 6px 8px / 20px 6px 6px 20px;
    box-shadow: inset 8px 0 8px 0 #1c1f23, inset -2px 0 6px #272c31, -4px 0 8px rgba(13, 13, 13, .25);
    height: 72px;
    position: absolute;
    right: 10px;
    top: 108px;
    width: 18px;
    z-index: 9;
  }

  .device-apple-watch-s8 .device-btns::after {
    background: #272c31;
    border-radius: 2px 4px 4px 2px / 20px 8px 8px 20px;
    box-shadow: inset -2px 0 2px 0 black, inset -6px 0 18px #272c31;
    content: "";
    height: 72px;
    position: absolute;
    right: 0;
    top: 0;
    width: 6px;
  }

  .device-apple-watch-s8 .device-btns::before {
    background: #272c31;
    border-radius: 20%;
    box-shadow: 0 -30px rgba(62, 70, 77, .75), 0 -27px #272c31, 0 -25px black, 0 -21px rgba(62, 70, 77, .75), 0 -18px #272c31, 0 -16px black, 0 -12px rgba(62, 70, 77, .75), 0 -9px #272c31, 0 -7px black, 0 -3px rgba(62, 70, 77, .75), 0 0 #272c31, 0 2px black, 0 6px rgba(62, 70, 77, .75), 0 9px #272c31, 0 11px black, 0 15px rgba(62, 70, 77, .75), 0 18px #272c31, 0 20px black, 0 24px rgba(62, 70, 77, .75), 0 27px #272c31, 0 29px black;
    content: "";
    height: 3px;
    margin-top: -2px;
    position: absolute;
    right: 2px;
    top: 50%;
    width: 10px;
    z-index: 9;
  }

  .device-apple-watch-s8 .device-power {
    background: #272c31;
    border-radius: 2px 4px 4px 2px / 2px 8px 8px 2px;
    box-shadow: inset 0 0 2px 1px #101315;
    height: 72px;
    position: absolute;
    right: 18px;
    top: 212px;
    width: 4px;
  }

  .device-homepod {
    height: 395px;
    width: 320px;
  }

  .device-homepod .device-frame {
    background: linear-gradient(to right, #36373a 0, #8d8f95 25%, #1d1e20 60%, #111112 90%, #1d1e20 100%);
    border-radius: 80px;
    box-shadow: inset 0 0 0 2px #36373a, inset 0 0 40px 1px #1d1e20, inset 0 12px 40px 1px white, inset 0 -24px 40px 1px black;
    height: 385px;
    margin: 5px auto;
    overflow: hidden;
    position: relative;
    width: 320px;
  }

  .device-homepod .device-stripe {
    background: repeating-linear-gradient(45deg, rgba(141, 143, 149, .35) 0, rgba(141, 143, 149, .35) 2px, transparent 2px, transparent 6px), repeating-linear-gradient(135deg, rgba(141, 143, 149, .35) 0, rgba(141, 143, 149, .35) 2px, transparent 2px, transparent 6px), repeating-linear-gradient(45deg, transparent 0, transparent 2px, rgba(29, 30, 32, .35) 2px, rgba(29, 30, 32, .35) 4px, transparent 4px, transparent 6px), repeating-linear-gradient(135deg, transparent 0, transparent 2px, rgba(29, 30, 32, .35) 2px, rgba(29, 30, 32, .35) 4px, transparent 4px, transparent 6px);
    border-radius: 80px;
    box-shadow: inset 0 0 0 2px #36373a, inset 0 0 40px 1px #1d1e20, inset 0 12px 24px 1px #9b9ca1, inset 0 -12px 24px 1px #050505;
    height: 385px;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 5px;
    width: 320px;
    z-index: 9;
  }

  .device-homepod .device-stripe::before {
    top: 0;
    transform: translateY(-34%) perspective(500px) rotateX(51deg);
  }

  .device-homepod .device-stripe::after {
    bottom: 0;
    transform: translateY(34%) perspective(500px) rotateX(-51deg);
  }

  .device-homepod .device-home::before,
  .device-homepod .device-home::after {
    background: #36373a;
    content: "";
    left: 50%;
    position: absolute;
  }

  .device-homepod .device-home::before {
    border-radius: 50% 50% 8px 8px;
    height: 10px;
    margin-left: -85px;
    top: 0;
    width: 170px;
  }

  .device-homepod .device-home::after {
    border-radius: 0 0 10% 10% / 0 0 8px 8px;
    bottom: 0;
    box-shadow: inset 0 0 4px 0 #111112;
    height: 5px;
    margin-left: -85px;
    width: 170px;
  }

  .device-pro-display-xdr {
    height: 475px;
    width: 640px;
  }

  .device-pro-display-xdr .device-frame {
    background: #151515;
    border-radius: 4px;
    box-shadow: inset 0 0 2px #d4d5d7;
    height: 368px;
    padding: 8px;
    position: relative;
    width: 640px;
  }

  .device-pro-display-xdr .device-frame::before {
    background: #050505;
    border-radius: 50%;
    content: "";
    height: 6px;
    left: 50%;
    margin-left: -3px;
    position: absolute;
    text-align: center;
    top: 6px;
    width: 6px;
    z-index: 9;
  }

  .device-pro-display-xdr .device-screen {
    border: 2px solid #121212;
    border-radius: 2px;
    height: 352px;
    width: 624px;
  }

  .device-pro-display-xdr .device-power::after {
    background: radial-gradient(circle at center, #d4d5d7 85%, #9fa1a6 100%);
    border-top: 1px solid #d4d5d7;
    content: "";
    height: 6px;
    margin: 0 auto;
    position: relative;
    width: 152px;
  }

  .device-pro-display-xdr .device-power::before {
    background: linear-gradient(to bottom, #9fa1a6 0, #c7c8cb 40%, #c7c8cb 85%, white 90%, #6b6e74 100%);
    content: "";
    height: 102px;
    margin: 0 auto;
    position: relative;
    width: 152px;
  }

  .device-pro-display-xdr .device-home {
    background: transparent;
    border-radius: 0 0 3px 3px;
    bottom: -2px;
    box-shadow: -61px 0 #6b6e74, 61px 0 #6b6e74;
    height: 1px;
    left: 50%;
    margin-left: -15px;
    position: absolute;
    width: 30px;
  }

  .device-tabbar {
    height: 88px;
    transform-origin: 0px 0px;
    background: url(https://static.huolala.cn/image/a7722837bc6cd9f59cbd7906c2f2bf18a3aedc5a.png) 0% 0% / 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    line-height: 34px;
  }

    `;

  constructor() {
    super();
    this.modelname = 'device-iphone-14-pro';
    this.modelcolor = '';
    this.scale = 0.8;
    this.modelbar = false;
    this.bartitle = '标题';
    this.usezoom = false
  }

  render() {
    const styles = {
      transform: !this.usezoom ? `scale(${this.scale})` : 'none',
      zoom: this.usezoom ? this.scale : 'normal',
    };

    return html`<div>
    <div class="device ${this.modelname} ${this.modelcolor}" style=${styleMap(styles)}>
      <div class="device-frame">
        <div class="device-screen">
          ${
            this.modelbar ? html`<div class="device-tabbar">
            ${this.bartitle || ''}
          </div>` : ''
          }
          <slot name=slot-screen>
            <img class="device-screen" src="https://ops-img-static.huolala.cn/imgs/2023/16878571741229491098335.jpg" loading="lazy" />
          </slot>
        </div>
      </div>
      <div class="device-stripe"></div>
      <div class="device-header"></div>
      <div class="device-sensors"></div>
      <div class="device-btns"></div>
      <div class="device-power"></div>
      <div class="device-home"></div>
    </div>
  </div>`;
  }
}

if(!customElements.get('i-devices')) {
  customElements.define('i-devices', IDevices);
}
