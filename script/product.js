// 버튼 누르면 사진 옆으로 넘어가게 하기 + 페이지네이션
const top_img = document.querySelectorAll('.left_photo .photo img')
const top_btn_prev = document.querySelector('.left_photo .btn_wrap .prev')
const top_btn_next = document.querySelector('.left_photo .btn_wrap .next')
console.log(top_btn_next,top_btn_prev,top_img)

// 이미지 초기설정
top_img[0].classList.add('current')
// 버튼 누르면 사진이 다음으로 바뀜
// 사진이 바뀌면 인덱스에 맞는 페이지네이션에 active 들어감
// + 페이지네이션 누르면 사진 바뀜
// 사진이 맨 처음 혹은 맨 끝이면 버튼 디자인 비활성화됨
// 함수 활용해서 만들어보기
top_btn_next.addEventListener('click',function(){
    
})
top_btn_prev.addEventListener('click',function(){
    console.log('.')
})

// 하트 눌리는거 구현

// 구매 가능 가격 옆 물음표 호버 시 안내창

// 가격 누르면 아래로 상세안내 나옴
// 체크박스 디자인해야함

// 카드사별 할부 혜택 안내 버튼 누르면 팝업 + 배경 어두워짐
// 사라질 때 위로 슬라이드되며 없어짐

// 상품설명 더보기 버튼 누르면 이미지 길어짐
// 접기 누르면 다시 짧아짐

// 아래 상품들 버튼 누르면 그 방향으로 슬라이드됨
// 현재페이지도 변함
// 추가) 마지막 페이지에서 다음 누르면 다시 처음으로 돌아가도록
// 사진 누르면 포토리뷰 팝업
// 팝업 내부에 포토리뷰 전체 넘어가는 부분
// 다음글로 넘어가는 버튼
// 현재 보이는 글의 사진이 위쪽 넘어가는 부분에서 활성화되어있음. 자동으로 넘어감.

// 리뷰 전체 리스트에서 사진이 있는 이미지 누르면 사진 커지면서 아래로 내려감
// 맨 아래 페이지네이션 제작

//QNA에서 탭 누르면 그에 맞는 페이지 보임
// 글 누르면 아래로 펴지며 내용 보임
// 맨 아래 페이지네이션 제작

// 아래 페이지 넘어가는 부분 반복