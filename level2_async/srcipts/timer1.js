// timer1.js
// setInterval(콜백함수, 시간)

/* let num1 = 1;
const timer1 = setInterval(function(){
    console.log('timer test '+num1)
    if(num1 > 5) num1 = 0 // num1이 5보다 크면 1로 만들어라
    num1++
}, 1000) */ // 1초 간격으로 num1의 숫자가 1씩 증가한다
// 함수의 순서에 따라 값이 달라진다

/* const timer1 = setInterval(function(){
    num1++
    if(num1 > 5) num1 = 1
    console.log('timer test '+num1)
}, 1000) */
// 배너를 첫 번째처럼 출력하게 되면 두 번쨰에 나오는 배너가 숫자x2가 되어버리기 때문에 위와 같이 출력한다

// 0~6 반복 타이머
// 123456 0123456 0123456
/* let num = 0;
const timer2 = setInterval(function(){
    num++
    if(num > 6) num = 0
    console.log(num)
},1000)
 */

// 3~0 반복타이머
// 3210 3210 3210
/* let num = 3;
const timer = setInterval(function(){
    console.log(num)
    num--
    if(num < 0) num = 3
}, 500) */

// 이미지 슬라이드 타이머 활용
const gentleSlide = document.querySelectorAll('.gentle_wrap .gentle_slide_container1 .slide')
const gentleSlide2 = document.querySelectorAll('.gentle_wrap .gentle_slide_container2 .slide')
const gentleSlideCurrentNum = document.querySelector('.page_number .current')
const gentleSlideTotalNum = document.querySelector('.page_number .total')
let gentleNum = 0; //초기값
console.log(gentleSlide, gentleSlide2, gentleSlideCurrentNum, gentleSlideTotalNum);

// 슬라이드 총 번호 표시
gentleSlideTotalNum.textContent = gentleSlide.length;
gentleSlideCurrentNum.textContent = gentleNum+1


// 012345 현재 존재하는 슬라이드 인덱스
// 12345 012345 012345 ...(반복) : 진행해야 하는 인덱스 순서
/* let num = 1;
const timer = setInterval(function(){
    console.log(num)
    num++
    if(num > 5) num = 0
}, 1000) */

// 선생님이 하신 거(+유지보수)랑 위에서 내가 한 거랑 비교해보기
let gentleNum1 = 0; // 초기값
// gentleSlide 모든 슬라이드에 속성 변경 시 애니메이션 기능 적용 transition
for(let i of gentleSlide) i.style.transition = 'opacitiy 0.5s'

let gentleTimer = setInterval(function(){
    gentleNum1++
    if(gentleNum1 >= gentleSlide.length) gentleNum1 = 0
    /* console.log(gentleNum) */
    for(let i of gentleSlide) {
        i.style.visibility = 'hidden';
        i.style.opacity = '0';
    }
    gentleSlide[gentleNum1].style.visibility = 'visible'
    gentleSlide[gentleNum1].style.opacity = '1'
}, 3000)

// 43210 543210 543210(...반복) : 진행해야 하는 인덱스 순서
let gentleNum2 = gentleSlide2.length -1; // 초기값
let gentletimer2 = setInterval(function(){
    gentleNum2--
    if(gentleNum2 < 0) gentleNum2 = gentleSlide2.length -1
    console.log(gentleNum2)
    for(let i of gentleSlide2) i. style.display = 'none'
    gentleSlide2[gentleNum2].style.display = 'block'
},3000)