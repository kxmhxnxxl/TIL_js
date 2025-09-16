## 콜백함수 정리
### 매개변수없는 콜백함수 호출
* `DOM.addEventListener('이벤트', 콜백함수)`
* `function 콜백함수(){return 반복실행 }`

### 매개변수가 있는 콜백함수 호출
* `DOM.addEventListener('이벤트', ()=>{ 콜백함수(매개변수) })`
* `DOM.addEventListener('이벤트', function(){ 콜백함수(매개변수) })`
* `function 콜백함수(매개변수){ return 반복실행 }`

### 매개변수가 있는 콜백함수 호출(클로저 활용)
* `DOM.addEventListener('이벤트', 콜백함수(매개변수))`
* `function 콜백함수(매개변수){ return function(){ 반복실행 }}`
---------
## 로컬스토리지 활용 자바스크립트
* 활용 예 : 로그인 유/무에 따라 다르게 나오는 장바구니/구매페이지/카페/메일 등
* 로컬스토리지 : 브라우저에 데이터를 영구적으로 저장하는 방법
* 로컬스토리지 종류 : localStorage, sessionStorage
### localStorage
* 페이지를 새로고침하거나 브라우저를 닫아도 데이터 유지
* `localStorage.setItem('속성','값')`
* `localStorage.setItem('속성')`
### sessionStorage
* 브라우저가 닫히면 데이터 자동 삭제
* `sessionStorage.setItem('속성','값')`
* `sessionStorage.setItem('속성')`