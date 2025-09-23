// 반복문 for.js
// for(초기변수선언; 조건식; 증감식){조건이 참일 때 반복실행문}
// for문의 초기변수로 자주 사용하는 변수명 : i, j, k, m, n
for(let i=1; i<6; i++){console.log('반복')}
console.log('---------------')

// 5~10 반복문 5678910
for(let i=5; i<=10; i++){console.log(i)}
console.log('---------------')

// 5~0 반복문 543210
for(let i=5; i>=0; i--){console.log(i)}
console.log('---------------')

// 초기값 0 시작
// 출력형태) JS 1일차, JS 2일차, JS 3일차
for(let i=0; i<3; i++){console.log(`JS ${i+1}일차`)}
// 초기값을 0으로 설정해놨기 때문에 0일차부터 시작, 해결방법은 변수값에 숫자를 더하는 것
console.log('---------------')
for(let i=0; i<3; i++){console.log(`JS ${i++}일차`)}
console.log('---------------')
// '+N'이 아닌 '++'로 하게 된다면 증감연산자가 반복으로 들어가기 때문에 0일차(참), 2일차(참)로 뜸(조건이 3보다 작기 때문에 3이상은 거짓으로 처리되어 보이지 않게 됨)
for(let i=0; i<3; i++){console.log(`JS ${i+=1}일차`)}
console.log('---------------')
// 조건이 거짓이 돤 경우 // 2번째에서 나온 결과값(0일차와 2일차)에 '+=1'로 1씩 대입되어 결과는 1일차와 3일차가 됨

// 2단 구구단 2*1~2*9
const dan2 = document.querySelector('.dan2')
for(let i=1; i<10; i++){
    dan2.innerHTML += `<li>2*${i}=${2*i}</li>`
}

// querySelectorAll 함수로 선택한 DOM 변수 for문
// 배열 인덱스 for문
const array = ['photoshop', 'illustrator', 'figma', 'html', 'css']
// 위 배열 이용 반복문으로 콘솔에 array값 모두 출력하기
/* console.log(array[0])
console.log(array[1])
console.log(array[2]) */

/* for(let i=0; i<3; i++){
    console.log(array[i])
} */

for(let i=0; i<array.length; i++){
    console.log(array[i])
} // i가 array의 length보다 작을 때까지의 의미로 유지보수 향상

// 역순
for(let i=array.length-1; i>=0; i--){
    console.log(array[i])
}
console.log('---------------')
const flower = [{
    name:'장미',
    month:1,
},{
    name:'개나리',
    month:2,
},{
    name:'수선화',
    month:3,
}]
// 출력예) 1월 탄생화 장미, 2월 탄생화 개나리, 3월 탄생화 수선화
/* console.log(`${flower[0].month}월 탄생화 ${flower[0].name}`)
console.log(`${flower[1].month}월 탄생화 ${flower[1].name}`)
console.log(`${flower[2].month}월 탄생화 ${flower[2].name}`) */

for(let i=0; i<flower.length; i++){
    console.log(`${flower[i].month}월 탄생화 ${flower[i].name}`)
}
console.log('반복문과 조건문---------------')
// 1~10 반복출력(홀수)
// 변수%2 == 1 // % == 나눗셈 연산자
for(let i=1; i<11; i++){
    if(i%2 == 1){console.log(i)}
}
console.log('---------------')
// 5~20까지 짝수만 출력
for(let i=5; i<21; i++){
    if(i%2 == 0){console.log(i)}
}
console.log('---------------')
// 0~10까지 역순으로 홀수만 출력
for(let i=10; i>=0; i--){
    if(i%2){console.log(i)}
    // if(i%2 == 1){console.log(i)}
}

console.log('---------------')
const dan2Li = dan2.querySelectorAll('li')
console.log(dan2Li);

// 홀수 li 노란 배경, 짝수 li 파란 배경
/* dan2Li[0].style.backgroundColor = 'blue'
dan2Li[1].style.backgroundColor = 'yellow' */

/* for(let i=0; i<dan2Li.length; i++){
    if(i%2){dan2Li[i].style.backgroundColor = 'yellow'}
    else {dan2Li[i].style.backgroundColor = 'blue'}
} */

// 홀수 li w50 h20 bg노랑 color빨강
// 짝수 li w50 h20 bg파랑 color노랑
// 객체.classList.add(클래스명)
// 객체.classList.remove(클래스명)
// css or sass 클래스를 미리 준비하고 js 동적결과에 따라 적용
for(let i=0; i<dan2Li.length; i++){
    dan2Li[i].classList.add('size') /* 0~9 공통 */
    if(i%2 == 0){dan2Li[i].classList.add('color_even') /* 조건(짝) */
    }else {dan2Li[i].classList.add('color_add')} /* 조건(홀) */
}
console.log('---------------')
// while문(반복횟수가 정해지지 않고 특정 조건이 참인 동안 반복실행)
// 활용예) 사용자로부터 올바른 입력값을 받을 때까지 반복
// 활용예) 웹서비스 및 게임 등에서 계속 실행되어야 하는 프로그램
// while(조건){조건이 참일 때 반복실행}

/* let htmlQ = prompt('a태그는 가로, 세로 크기를 가질 수 없다. ox 중 하나를 입력하세요.') */ // x
// 정답을 맞출 때까지 무한 반복질문
/* while(htmlQ != 'x'){
    htmlQ = prompt('a태그는 가로, 세로 크기를 가질 수 없다. ox 중 하나를 입력하세요.')
}
alert('정답입니다') */

/* let cssQ = prompt('ox퀴즈 : align-item은 grid에 쓸 수 없다') // x
while(){} */

while(true){
    const qa = prompt('자바스크립트는 동적언어이다(O/X)')
    // 잘못된 답안 조건문
    if(qa !== 'o' && qa !== 'x'){
        alert('잘못된 입력입니다. O, X만 입력해주세요.')
        continue;
        /* break; */ // while 강제종료
    }
    // 정답, 오답 세트
    if(qa === 'o'){
        alert('정답입니다'); break;
    }else {
        alert('오답입니다'); break;
    }
}
// while문 종료 위치(break 만날 시 나오는 위치)
alert('퀴즈종료') // 오답, 정답, 잘못된 답 어느 것을 써도 마지막에 퀴즈종료 팝업 발생

for(let i=1; i<=10; i++){
    continue;
    console.log(i)
}
console.log('---------------')
// 2~9단까지 구구단 만들기
const dan99 = document.querySelector('.dan99')
let li99 = ''
for(let i=2; i<10; i++){ // 1단 for 시작
    for(let j=1; j<10; j++){ // 2단 for 시작
        li99 += `<li>${i}x${j}=${i*j}</li>`
    } // 2단 for 종료(2단 for가 모두 반복 후 1단 다시 시작)
    dan99.innerHTML = li99;
}// 1단 for 종료
console.log('---------------')
// for ~ in (ES6)
const cat = {
    color:['흰색','검은색','노란색'],
    age:2,
    name:'삼색이',
}
/* console.log(cat.color)
console.log(cat.age)
console.log(cat.name) */
for(let i in cat){
    console.log(i, cat[i])
}

const menuA = document.querySelectorAll('.menu a')
for(let i in menuA){
    console.log(i)
}
console.log('---------------')
for(let i of menuA){
    console.log(i)
    i.style.color = 'red'
    i.addEventListener('click',()=>{
        console.log(i)
    })
} // 기능뿐 아니라 style도 한 번에 변경 가능

