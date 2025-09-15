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
linkCls[1].addEventListener('click',bgFunc)
function bgFunc(e){
    console.log(e);
    e.preventDefault();
    return sectionTag[1].style.backgroundColor = '#FF9A9A' 
}