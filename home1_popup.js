"use strict";
//当初は適当な位置に浮かび上がってくるだけのものだったがページサイズを変更すると表示がバグるので常にページの表示サイズを監視することで再計算させて表示を正しくした。
const popupImg = document.querySelector('.popup-img');
window.addEventListener('load', function() {
  var image = document.querySelector('.fade-in-image');
  image.classList.add('loaded');
});