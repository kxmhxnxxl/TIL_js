const inputTag = document.querySelectorAll('input')
const buttonTag = document.querySelectorAll('button')
console.log(inputTag, buttonTag)
console.log(inputTag[0], buttonTag[0])
console.log(inputTag[1], buttonTag[1])
console.log(inputTag.length, buttonTag.length)

const searchInput = document.querySelector('input[type=search]')
const searchBtn = document.querySelector('#s')
const shopNumInput = document.querySelector('input#num')
const shopCartBtn = document.querySelector('#cart')
console.log(searchInput, searchBtn, shopNumInput, shopCartBtn) // querySelectorAll이 아니므로 [인덱스] 사용금지
/* const searchInput = document.querySelector('section:first-child input')
const searchInput = document.querySelector('#s')
const searchInput = document.querySelector('input[name*=s]') */
/* 태그 속성★, 함수 테스트*/
console.log(searchInput.type, searchInput.placeholder) // 속성 읽기
console.log() // 속성을 변경하려면 콘솔 안? 밖? // 밖
// searchInput.placeholder() //함수일 때
searchInput.placeholder = "" // 속성일 때
/* let checkValue = ''; */ // 빈 값 초기화
let checkValue = searchInput.value; // 속성 읽기(input의 값을 읽는다)
searchInput.value = '인기검색어 : HTML'; // value 값 변경
checkValue = searchInput.value; // 변경값 변수 담기
console.log(checkValue) // 출력 확인

console.log(shopNumInput.type)
console.log(shopNumInput.name)
console.log(shopNumInput.value+1) // 문자 + 숫자 = 문자
console.log(typeof(shopNumInput.value)) //string

checkValue = Number(shopNumInput.value) + 1 // 문자 + 숫자 문제 해결방법
console.log(`주문수량 : ${checkValue}`)

shopNumInput.style.backgroundColor = '#d9d9d9'
searchBtn.style.width = '250px'
searchBtn.style.height = '20px'
searchBtn.style.backgroundColor = '#830072'
shopCartBtn.style.width = '100px'
shopCartBtn.style.height = '30px'
shopCartBtn.style.backgroundColor = '#f0d'
shopCartBtn.style.color = '#fff'

// 이벤트 활용 콜백함수 호출
// 이벤트 문법
// 객체.addEventListener('이벤트종류', 콜백함수)
const orderBtn = document.querySelector('#order')
console.log(orderBtn);

// 주문 버튼 클릭 시 '상품을 선택하세요' 경고창 출력
// 이벤트 뒤 함수 작성 방식 : 콜백함수호출(추천)or익명함수
/* orderBtn.addEventListener('click',function(){
    alert('상품을 선택하세요')
}) */
/* orderBtn.addEventListener('click',orderFunc)
function orderFunc(){
    return alert('상품을 선택하세요')
} */

// 주문하기 클릭 시 '장바구니에 담으세요'
// 장바구니 클릭 시 '상품을 담으세요'
// 콜백함수 1개만 활용 각각 DOM 에빈트 클릭 시 다른 메세지 출력하기
orderBtn.addEventListener('click',orderFunc_v2('상품을'))

// 이벤트 뒤 콜백함수는 함수 그 자체를 호출하는 개념으로 결과값만 받고 수정값은 따로 전달하지 않는다.
/* orderBtn.addEventListener('click',function(){
    orderFunc('장바구니에')
}) */

// 매개변수의 수정이 필요한 콜백함수는 이벤트 뒤 익명함수 또는 화살표함수 추가 제작으로 수정 가능한 함수로 재작성하는 게 일반적인 방법이다.
/* orderBtn.addEventListener('click',()=>{
    orderFunc('장바구니에')
}) */
/* function orderFunc(data){
    return alert(data+' 담으세요')
} */
function orderFunc_v2(data){
    return function(){ /* 클로저(closure) */
        // 내부 함수는 외부 함수의 매개변수를 기억한다.
        alert(data+' 담으세요')
    }
}

// 아이디, 비밀번호 중복확인 클릭 시
// 아이디가 중복되었습니다.
// 비밀번호가 중복되었습니다.
// 1. 제어 DOM 대상 변수 등록
const idOverlapBtn = document.querySelector('#id')
const pwOverlapBtn = document.querySelector('#pw')
console.log(idOverlapBtn, pwOverlapBtn)
// 2. "클릭 시" 이벤트 콜백함수 제작
idOverlapBtn.addEventListener('click',()=>{overlapFunc('아이디')})
pwOverlapBtn.addEventListener('click',()=>{overlapFunc_v2('비밀번호')})
// 3. 실행 메세지가 통일된 특징에 맞춰서 콜백함수 1개 제작
/* function overlapFunc(){
    return alert('아이디가 중복되었습니다.')
} */
function overlapFunc(msg){
    return alert(msg+'가 중복되었습니다.')
}
function overlapFunc_v2(msg){
    return alert(msg+'가 중복되었습니다.')
}
// 3-1. 콜백함수 내에 함수호출 시 다른 내용이 있으면 매개변수 제작
// 4. 3번 콜백함수를 2번 이벤트에서 호출

// 이벤트 콜백함수 연습
// Q1. textarea 값을 아무거나 입력했을 때 콘솔창에 '50자 이산 입력하세요' 출력
// Q2. textarea를 활성화했을 때 테두리 빨강색
// Q3. textarea를 비활성화했을 때 테두리 회색
const reviewText = document.querySelector('textarea#review')
console.log(reviewText)
reviewText.addEventListener('keydown',lengthFunc)
reviewText.addEventListener('focus',()=>{borderFunc('#f00')})
reviewText.addEventListener('blur',()=>{borderFunc('#aaa')})
function lengthFunc(){return console.log('50자 이상 입력하세요')}
function borderFunc(color){
    return reviewText.style.border = `1px solid ${color}`
}
borderFunc('#aaa') // 초기값
reviewText.style.outline = 'none' /* 활성화 시 검은테두리 제거 */

// 배경버튼 클릭 시 부모 article 배경색 변경하기
const articleTag = document.querySelector('article')
/* const bgBtn = document.querySelectorAll('') */
const bgBtn = document.querySelectorAll('button[class*=bg')
const bgP = document.querySelector('p')
console.log(bgBtn, articleTag, bgP)
/* bgP.textContent = '현재<br>배경색상 : #eee' */ // 객체 속성 연습하기
articleTag.style.width = '430px'
articleTag.style.height = '90vh'
articleTag.style.backgroundColor = '#eee'
// bgBtn.addEventListener('mouseover',콜백함수) (X)
bgBtn[0].addEventListener('mouseover',bgChangeFunc('#ffc'))
bgBtn[1].addEventListener('mouseover',bgChangeFunc('#0cf'))
bgBtn[2].addEventListener('mouseover',bgChangeFunc('#f0e'))
function bgChangeFunc(color){
    return function(){
        articleTag.style.backgroundColor = color;
        bgP.textContent = `현재 배경색상 : ${color}`
    }
}