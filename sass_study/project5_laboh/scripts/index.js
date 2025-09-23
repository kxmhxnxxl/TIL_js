// 1. plusBtn minusBtn 누르면 각각 수량 증감
// 2. 수량에 따라 totalPrice의 가격 증감
// 3. 수량에 따라 totalOrderNum의 수량 증감
// 4. 최대수량(30) 최소수량(1) 팝업창 띄우기
// 5. thumnailImg 누르면 넘어가는 이미지 +애니에이션
// 6. 버튼을 누르면 넘어가는 이미지
// 7. 이미지를 드래그하면 다음으로 넘어가는 애니메이션

const orderNum = document.querySelector('#order_number')
const plusBtn = document.querySelector('#plus_btn')
const minusBtn = document.querySelector('#minus_btn')
console.log(orderNum, plusBtn, minusBtn)

plusBtn.addEventListener('click',plusFunc)
minusBtn.addEventListener('click',minusFunc)
/* orderNum.value = 1; */

function plusBtn(){
    console.log(typeof(orderNum.value), typeof(count))
    orderNum.value = ++count
    let 
}
