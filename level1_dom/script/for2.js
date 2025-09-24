// 중첩 for
// ul*2>li*5
// <ul></ul> <li></li> (x)
// <ul><li></li></ul> (o)
let ul = '';
let li = '';
for(let i=0; i<2; i++){
    /* ul = '<ul>' */
    li = ''; // 초기화
    for(let j=0; j<5; j++){
        li += `<li>menu${j+1}</li>`
    }
    ul += `<ul>${li}</ul>`
}
console.log(ul)

// 고객 리뷰 초기 상태
// 상품문의 클릭 시 문의내용 보이기
// 고객리뷰 클릭 시 리뷰내용 보이기
const tabTitle = document.querySelectorAll('.title a')
const tabContent = document.querySelectorAll('.contents .con')
console.log(tabContent, tabTitle)

tabContent[1].style.display = 'none'

/* tabTitle[0].addEventListener('click',()=>{
    contentDisplayHide()
    tabContent[0].style.display = 'block'
})
tabTitle[1].addEventListener('click',()=>{
    contentDisplayHide()
    tabContent[1].style.display = 'block'
}) */

/* for(let i of tabTitle){ // 객체정보만 가지고 있어서 인덱스 연결이 불가능
    i.addEventListener('click',()=>{
        contentDisplayHide()
        console.log(i)
        // tabContent[0].style.display = 'block'
    })
} */
// 객체정보와 서로 다른 객체를 연결한 인덱스정보
// 매개변수 순서대로 객체 -> 인덱스 -> 배열정보(이름설정 자유)
tabTitle.forEach(function(obj, ind, arr){
    console.log(obj, ind, arr.length) // 모든 정보 출력
    obj.addEventListener('click',()=>{
        contentDisplayHide()
        console.log(ind) // 클릭한 인덱스 정보만 출력
        tabContent[ind].style.display = 'block';
        titleDesignReset();
        obj.style.backgroundColor = 'yellow';
        obj.style.color = 'red';
        obj.style.height = '300px';
        obj.style.border = '1px solid #000';
    })
})

// 반복적으로 들어가는 none을 한 번에 묶어주는 식
function contentDisplayHide(){
    /* tabContent[0].style.display = 'none'
    tabContent[1].style.display = 'none' */
    for(let i of tabContent) i.style.display = 'none'
}
function titleDesignReset(){
    for(let i of tabTitle) {
        i.style.backgroundColor = 'none'
        i.style.color = 'none'
        i.style.height = 'max-content'
        i.style.borderColor = 'yellow'
        // 추가 reset 디자인 속성들 작성
}}