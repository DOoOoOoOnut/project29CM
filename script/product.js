// 버튼 누르면 사진 옆으로 넘어가게 하기 + 페이지네이션
const main_img = document.querySelectorAll('.left_photo .photo img')
const main_btn_prev = document.querySelector('.left_photo .btn_wrap .prev')
const main_btn_next = document.querySelector('.left_photo .btn_wrap .next')
console.log(main_img,main_btn_prev,main_btn_next)

// 이미지 초기설정
main_img[0].classList.add('current')

main_btn_next.addEventListener('click',function(){
    console.log('.')
})
main_btn_prev.addEventListener('click',function(){
    console.log('.')
})