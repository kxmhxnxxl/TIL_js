// dom2.js
// 1. 변수 section*2, a*2, btn*2(동적대상 체크 후 변수생성)
const sectionTag = document.querySelectorAll('section')
const linkCls = document.querySelectorAll('section .link')
const btnCls = document.querySelectorAll('section .btn')
console.log(btnCls, btnCls[0], btnCls.length, linkCls, linkCls[1], linkCls.length, sectionTag, sectionTag[0], sectionTag.length)

// 2. 이벤트와 함수, 속성
// 초기값(즉시실행) // All일 경우 인덱스([0] 붙이지 않으면 에러남)
sectionTag[0].style.backgroundColor = '#ff0'
sectionTag[1].style.backgroundColor = '#0cf'

// 이벤트, 콜백함수 추가 생성
// a2 클릭 시 section[1] 배경색 변경
// a태그에 클릭, 터치 이벤트 적용 시 href 속성 때문에 스크롤이 위로 올라가는 문제 발생 -> a의 기본속성 기능 해제 prevrentDefault()
// 콜백함수
/* linkCls[1].addEventListener('click',bgFunc)
function bgFunc(e){
    console.log(e);
    e.preventDefault();
    return sectionTag[1].style.backgroundColor = '#FF9A9A' 
} */
// 익명함수
/* linkCls[1].addEventListener('click',function(event){
    console.log(event)
    event.preventDefault();
    sectionTag[1].style.backgroundColor = '#FF9A9A'
}) */
// 화살표함수
linkCls[1].addEventListener('click',(e)=>{
    e.preventDefault();
    sectionTag[1].style.backgroundColor = '#FF9A9A'
})
linkCls[0].addEventListener('click',(e)=>{
    e.preventDefault();
    sectionTag[0].style.backgroundColor = '#39C24D'
})
// a, button(type=button)
// button 이용 js 진행 시 특정 페이지 이동이 필요할 때 location.href를 사용한다 ((예)로그인 성공 시 메인페이지로 이동)
/* btnCls[0].addEventListener('click',()=>{
    window.location.href = '../sass_study/project2/index.html'
})
btnCls[1].addEventListener('click',()=>{
    window.location.href = './dom1.html'
}) */
btnCls[0].addEventListener('click',sassProjectFunc('project1')) // project1/index
btnCls[1].addEventListener('click',sassProjectFunc('project2')) // project2/index
function sassProjectFunc(src){
    return function(){
        location.href = `../sass_study/${src}/index.html` // window 생략 가능
    }
}

// 쇼핑몰 수량 변수
const inputNum = document.querySelector('#num')
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
const priceWon = document.querySelector('#numFrm .price em')
let count = 1; // 수량 초기값 변수
let price = 12900;
console.log(inputNum, plusBtn, minusBtn)
// 수량이 1로 시작해서 + 클릭하면 수량 증가, - 클릭하면 수량 감소
// 1개당 가격 12,900원
// 초기값
inputNum.value = count;
priceWon.textContent = price.toLocaleString('kr-ko'); // 여기서만 일시적으로 문자로 변환&콤마
/* price = price.toLocaleString('ko-kr'); */ // price를 문자로 변환
// 이벤트, 함수
// + 클릭하면 수량 증가
plusBtn.addEventListener('click',plusFunc)
minusBtn.addEventListener('click',minusFunc)
priceWon.addEventListener('click',priceFunc)
function plusFunc(){
    console.log(typeof(inputNum.value), typeof(count))
    /* return inputNum.value = Number(inputNum.value) +count; */
    // 1 증감연산자 ++ --
    inputNum.value = ++count
    let totalPrice = price * count
    return priceWon.textContent = totalPrice.toLocaleString('ko-kr')
    /* return priceWon.textContent = (price * count).toLocaleString('ko-kr') */
}
function minusFunc(){
    inputNum.value = --count
    let totalPrice = price * count
    return priceWon.textContent = totalPrice.toLocaleString('ko-kr')
}