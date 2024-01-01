# 23/12/18~ 시작
----
## 12/18 페이지 조사
## 12/19 메인페이지 레이아웃 계획, 반응형 계획짜기 완료
* 자료조사 - 자료 다운로드, 사이트 전체 캡쳐, 이미지 파일명 수정
* 메인페이지 html 작성 시작
### [오늘의 의문]
* 462행 483행 버튼으로 넣어야 하는지 a로 넣고 JS로 기능 추가해도 되는지 -> 다른 페이지로 가면 a 아니면 버튼이라는 사실을 갑자기 깨달음
* 510행 overflow로 처리해야 하는지 -> OO/ 제목 넘치는 부분이 있으면 태그로 넣자~
* 유효성 검사 완료
------
------
## 12/20 메인페이지 html 제작
* 1차 완료/ 모바일 팝업 안보임 이슈로 이 부분만 추후 제작예정
* 27행 이름 고민중..
### 선생님 피드백 
1. 메인에 h1~3 더 넣기/ 의미없는 p가 너무 많음
2. 상단 팝업에 선택되는 부분 잘 확인하고 a 추가
3. 클래스이름 바꾸기 snb -> lnb_depth1,2 이런 식으루
4. form 태그는 검색창만 감싸도록 구조 변경/ 폼에 다른 친구들까지 다 넣지 말자
* 유효성 검사 완료
-------
--------
## 12/21
* 선생님 피드백 수정 -> 검사받을 예정
### 선생님 피드백 2
1. all-pop을 a가 아니라 div로 묶기
2. 44열 모바일 div 묶기
3. header-top,center,btm 이름 바꾸기
4. 메뉴에서 중메뉴를 바로 ul로 시작하지 말고 event box랑 형제인 div로 만들기
5. 68행 <img> 빠짐
6. _search_open div 한번 더 묶어주기  
* 유효성 검사 완료
--------
-------
## 12/22
* 선생님 피드백 수정 -> 검사받을 예정 2
* 유효성 검사 완료
---
### 선생님 피드백 3(-> 커밋 참고) 수정 내역
1. 27행 class -> id로 수정
2. 32행 .m_coupon 묶어주는 div 필요(배경이 필요하기 때문) -> div.m_coupon_bg 생성
    p태그 -> h2태그로 변경
3. .head_top -> .header_top 변경/ top,center,btm 다 변경함~
4. h1 로고 이미지에 alt 추가
5. search h1+p 묶는 div 생성함
6. form~p 묶는 div 생성함
7. .bnr 안에 있는 li들 클래스 없앰
8. main 2,3행 박스들 p에 클래스 부여
9. box3 전면수정 / .top, .btm 묶어주는 div 생성/ 넘어가는 버튼 <a>로 처리/ 슬라이드되는 상품 여러개 형제로 만들고 하나의 div로 한번 더 묶음
10. 푸터 2행 ul>li>p+ul>li에서 dl>dt+dd->a로 수정
11. 푸터 3행 address 영역 수정
---
### [오늘의 의문]
* 80행 div 맞는지.. 배경 보이는 부분 어떻게 처리해야 하는지 정확히 이해하기. -> 맞음

### ⭐기능 수정해야 할 부분
* 메인페이지 main>.box_type3>.contents>.type3_num 옆으로 상품 넘기면 실제로 번호 바뀌도록 수정 
* 맨 위로 가기 버튼 만들기
* 반응형 기존보다 더 자연스럽게 만들기
* 메뉴에 마우스 올리면 밑줄 생기는 부분 더 자연스럽게 해볼까?
---
### 선생님 피드백 4 수정
1. box3 1/10 p에 각각 클래스 부여
2. 푸터 2행 div>dl>dt+dd>a로 수정
=> 통과!!!
---
* 노가다 시작.. 이미지, 내용 넣기
* main -> 반복되는 상품 태그 넣음
### [해야 하는 거]
* 모바일 팝업 로고이미지 안보임 -> 모바일 버전에서 이미지 다운 다시 해야할듯?
* box3 570행 고치는중.. 수정끝나면 다 적용하기.
---
## 12/23
* 상품 이미지 이름 재수정, 이미지 넣기 / 이미지 태그 아닌 백그라운드로 넣어야 하는 부분 태그 수정
* box3 태그 수정 후 변경 완료.
### [오늘의 의문]
1. 집 컴퓨터에서 이미지 미리보기 불가, 몇 개는 나오고 몇 개는 안 나옴.
---
## 12/24
* 533행 box1 태그 수정 후 전체 변경 완료
---
## 12/25
* 이미지 파일 넣기
* 헤더, 푸터 common css 선택자 작성완료
* 이미지 미리보기 불가 해결 못함..
-----
## 12/26
* 메인 css 선택자 작성 중 선택자 이름 좀더 포괄적이게 변경
* css 레이아웃 시작
* 잘못한 부분 아까워하지 말고 빨리 빼버리기.
### [오늘의 의문] 
1. 구글폰트에 'campton', 'Apple SD Gothic Neo' 글꼴이 없어 당황스러움. -> da-font에서 다운로드 후 font-face로 연결하여 해결했지만 굵기 조절 안 되어 당황스러움. 
2. font-awesome i 태그로는 가능하나 유니코드로 적용 안됨.. 이유 알아내기.
3. nav depth1,2 선택자가 이상함, display:none 적용했을 때 일부는 없어지고 일부는 남아있음. -> 남아있는 메뉴들 클래스 이름 오타 있었음, 수정.
4. 메인 1열 배너들 사이 공백 생김 왜?
5. 헤더 1행 개인메뉴 스프라이트 적용시 크기 조절 불가, 메뉴 이름과 나란히 배치 불가 -> 가상선택자로 a::before에 넣음, 해결. (가상선택자 사용 시 content 빼먹지 말기.)
6. box타입 3 슬라이드 묶음 display:none 적용불가.. 왜?
-> 선택자 다시 확인 예정
7. box타입 1 상품 이미지에 크기 적용 불가.. 왜?????
8. header 2행 검색 버튼 안보임 -> display:block 적용하자 해결됨. a태그 크기 인식되도록 항상 체크하자.
--------
## [main 스타일가이드]
1. font-family: 'campton','Apple SD Gothic Neo', NanumBarunGothic, '나눔바른고딕', Malgun Gothic, '맑은 고딕', dotum, sans-serif;
2. color : 글씨 #000000, #ffffff  / 강조글씨 #ff4800
보더 라인 #d4d4d4 / 박스 1 좋아요 숫자 #5d5d5d / 헤더 2행 #a0a0a0
푸터 보더라인 ##e4e4e4
3. font-size: 헤더 2행 2.5rem, 헤더 3행 1rem/ 상단 15% 팝업 0.75rem
메인 박스 제목 1.375rem, 내용 0.938rem / 
박스1 상품정보 0.688rem / 박스 3 숫자 전체 1.875rem, 숫자 현재 2.813rem 
메인 아래 more 버튼 0.75rem
푸터 전화번호 0.938rem / 영업시간 0.75rem / 링크 0.938rem
fnb 제목 0.813rem, 내용 0.75rem
법률 링크 0.75rem adress내용 0.625rem
------
# 12/28 
## [오늘의 의문]
* 박스 3 옆으로 넘어가는 버튼, 숫자 표시는 grid로 레이아웃 잡아야 하는지 -> 움직이지 않고 고정된 부분으로 position으로 설정하기.
----
# 12/30
### 메인페이지 html, css 완성
* 반응형 완성해야 함 (~1/1)
----
# 12/31
## best. html 시작~
## [best 스타일가이드]
* 폰트 사이즈 : aside 제목- 23px 내용 - 16px 
오른쪽 영역 상단 큰제목 - 34px, 카테고리 14px, 필터 13px
상품 개별 브랜드 - 11px, 이름 12px, 할인전가격 11px, 가격 14px, 좋아요/리뷰 11px
* 폰트 컬러 : 사이드메뉴, 필터 연한글씨 #5D5D5D
아이템 할인전가격 - #c4c4c4 할인 퍼센트 - #ff4800 
쿠폰/무료배송 글씨 #1d1d1d 배경 #f4f4f4