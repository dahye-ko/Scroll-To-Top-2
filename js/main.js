// 페이지 맨 위로 이동하는 함수
function scrollToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

// scrollToTop 요소 선택
const scrollToTopEl = document.querySelector(".scrollToTop");

window.addEventListener("scroll", function () {
  // 현재 스크롤 위치를 콘솔창에 출력해보세요
  //   console.log(window.scrollY);

  // 만약 스크롤 위치가 800 이상이라면,
  window.scrollY >= 800
    ? (scrollToTopEl.style.opacity = 1) // scrollToTop 버튼이 보이게 합니다
    : (scrollToTopEl.style.opacity = 0); // 아니라면 안보이게 합니다
});
