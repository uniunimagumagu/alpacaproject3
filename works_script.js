const adjustLayout = () => {
    const popupImg = document.querySelector('.popup-img');
    const windowHeight = window.innerHeight;
    const popupHeight = popupImg.offsetHeight;
    const marginTop = Math.max((windowHeight - popupHeight) / 2, 0);
  
    popupImg.style.top = `${marginTop}px`;
  };
  
  // ウィンドウのリサイズ時にレイアウト調整を実行
  window.addEventListener('resize', adjustLayout);
  
  // 初回表示時にレイアウト調整を実行
  window.addEventListener('DOMContentLoaded', adjustLayout);