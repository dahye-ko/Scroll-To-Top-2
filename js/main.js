// class 이름이 scrollToTop인 요소 선택자
const $scrollToTop = document.querySelector(".scrollToTop");

// scrollToTop 요소에 클릭 이벤트가 발생하면,
// 페이지 상단으로 smooth하게 이동
$scrollToTop.addEventListener("click", function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// 윈도우에 스크롤 이벤트가 발생하면,
// 스크롤 위치에 따라 scrollToTop 요소의 투명도 변경
window.addEventListener("scroll", function () {
  // 현재 스크롤 위치를 콘솔창에 출력해보세요
  //   console.log(window.scrollY);

  // 만약 스크롤 위치가 700 이상이라면,
  window.scrollY >= 700
    ? ($scrollToTop.style.opacity = 1) // scrollToTop 버튼이 보이게 합니다
    : ($scrollToTop.style.opacity = 0); // 아니라면 안보이게 합니다
});
