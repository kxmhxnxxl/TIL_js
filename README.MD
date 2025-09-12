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