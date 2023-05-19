"use strict";
//当初は適当な位置に浮かび上がってくるだけのものだったがページサイズを変更すると表示がバグるので常にページの表示サイズを監視することで再計算させて表示を正しくした。
const popupImg = document.querySelector('.popup-img');
let bottomPosition = 0; // 初期の表示位置

function calculatePopupPosition() {
  const windowHeight = window.innerHeight; // ウィンドウの高さを取得
  const popupHeight = popupImg.offsetHeight; // ポップアップの高さを取得

  bottomPosition = -popupHeight +windowHeight; // ポップアップの下端がウィンドウの下端に合う位置を計算。これがすごい。
  popupImg.style.bottom = `${bottomPosition-50}px`; // ポップアップの位置を設定.いまはタイトルにかぶらないように5０だけどこの数字で調整できる。
}

function handleWindowResize() {
  calculatePopupPosition();
}

// ウィンドウのリサイズイベントを監視
window.addEventListener('resize', handleWindowResize);

// 初期表示位置を計算
calculatePopupPosition();

// 表示アニメーション
setTimeout(() => {
  popupImg.style.opacity = '1';
}, 2000);
