console.log(Math);
console.log(Math.PI);
// Math.floor, round, random
let num1 = Math.floor(3.7)
console.log(num1) // 3
num1 = Math.floor(3.2) // 소수점 버리고 정수 출력
console.log(num1) // 3
console.log('----------------')
let num2 = Math.round(3.7)
console.log(num2) // 4
num2 = Math.round(3.2) // 소수점 자리수에 따라 반올림
console.log(num2) // 3
console.log('----------------')
let num3 = Math.random()
console.log(num3)
num3 = Math.random() * 5;
console.log(num3)
num3 = Math.floor(Math.random() * 10) + 1; // 1~10 사이의 랜덤한 숫자
console.log(num3)
console.log('----------------')
// 10%, 20%, 30%, 40%, 50% 랜덤출력
const couponDB = ['10%', '20%', '30%', '40%', '50%'] // 세부적으로 나눈다면 {} 사용
const couponBtn = document.querySelector('#coupon')

// 버튼 클릭 시 쿠폰 5개 중 1개가 랜덤하게 alert() 출력메세지 실행
couponBtn.addEventListener('click',()=>{
    let randomNum = Math.floor(Math.random() * 5)
    alert(couponDB[randomNum])
})

// 화면에 접속했을 때 광고 2개가 랜덤 표시
const adDB = [{
    name:'아이돌 잡지', // alt
    src:'https://i.pinimg.com/736x/08/d0/57/08d0577d06c1e348bff9523a9f649fc0.jpg',
    link:'https://naver.com'
},{
    name:'시리얼 광고',
    src:'https://i.pinimg.com/1200x/22/b8/f6/22b8f63aa77e1113782be16fa2e00f0f.jpg',
    link:'https://google.com'
}]
window.addEventListener('load',()=>{ // 'load' = 검색하면
    // 광고 변수
    const adSection = document.querySelector('.ad')
    const adRandom = Math.floor(Math.random() * 2)
    // 랜덤으로 광고 보이기'
    adSection.children[0].href = adDB[adRandom].link
    adSection.children[0].children[0].src = adDB[adRandom].src
    adSection.children[0].children[0].alt = adDB[adRandom].alt
})

// 더치페이 계산기
// 계산하기 클릭 시 총 금액과 인원 수에 따라 계산 결과 출력하기
// 금액이 소수점일 경우 소수점 값에 따라 반올림하기
const priceWon = document.querySelector('#price')
const personNum = document.querySelector('#person')
const totalBtn = document.querySelector('#total_btn')
const totalPrice = document.querySelector('.result em')
// - 나 + 같은 경우엔 number 함수를 붙여야 되지만 * 나 / 같은 경우엔 사용하지 않는다.

totalBtn.addEventListener('click',()=>{
    const num = priceWon.value / personNum.value
    const price = Math.round(num)
    totalPrice.children[0].textContent = price.toLocaleString('ko-kr')
})

// DB 다시 확인하기 ★★★★★
const shopDB = [{
    shop:'쿠팡',
    id:'하루견과',
    price:1000,
},{
    shop:'네이버 스마트스토어',
    id:'하루견과',
    price:2000,
},{
    shop:'마켓컬리',
    id:'하루견과',
    price:3000,
}]

// 변수
const minPriceBtn = document.querySelector('#min_price_btn')
const minPriceP = document.querySelector('.min_price')
const priceUl = document.querySelector('#list')

const pp = [1000, 2000, 3000, 4000] // test
// 클릭 이벤트
minPriceBtn.addEventListener('click',()=>{
    // 1. 쇼핑몰, 상품명, 가격을 가지고 있는 배열에서 가격만 추출하기
    // for문, map문
    const priceMap = shopDB.map(i => i.price)
    console.log(priceMap)
    // 2. 추출한 가격에서 최저가 찾기
    console.log('최저가 : ', Math.min(...priceMap))

    const minPrice = Math.min(...priceMap)
    /* minPriceP.textContent = '최저가 : '+minPrice */
    minPriceP.textContent = `최저가 : ${minPrice}`
    // 스프레드 연산자(...배열명) 여러 배열값을 한 번에 처리하는 배열처리법
    /* console.log(Math.min(...pp)) */ // 최저가
    /* console.log(Math.max(...pp)) */ // 최고가

})
// 쇼핑몰별 최고가
window.addEventListener('load',()=>{
    const shopSort = [...shopDB].sort((a, b) => b.price - a.price)
    console.log(shopSort)
    for(let i of shopSort){

        // 잡으려는 태그가 dl일 경우
        const dt = document.createElement('dt') // <dt></dt>
        dt.textContent = i.shop;
        listDl.appendChild(dt)
        const dd = document.createElement('dd') // <dd></dd>
        dd.textContent = i.id;
        listDl.appendChild(dd)
    }
})
console.log('----------------')
const shopDB2 = [{
    shop:'쿠팡',
    name:'고구마',
    price:5000,
    delivery:2500
},{
    shop:'이마트몰',
    name:'고구마',
    price:2900,
    delivery:0
},{
    shop:'네이버',
    id:'고구마',
    price:4000,
    delivery:1000
}]

const lowBtn = document.querySelector('#price_btn')
const freeBtn = document.querySelector('#delivery_btn')
const resultOne = document.querySelector('.result1')
const resultTwo = document.querySelector('.result2')
const shopListUl = document.querySelector('#shop_list')

// 최저가 찾기 버튼 클릭 시 최저가 표시
lowBtn.addEventListener('click',()=>{
    // 최저가 JS
    const min = shopDB2.map(i => i.price)
    resultOne.textContent = `최저가 : ${Math.min(...min)}원`
    /* resultOne.textContent = '최저가 '+Math.min(...min) + '원' */

    // 최저가 -> 최저가 오름차순 정렬하기 JS
    // 매개변수 순서를 이용한 오름차순 (계산속성 기준) a.price - b.price
    // 매개변수 순서를 이용한 내림차순 (계산속성 기준) b.price - a.price
    const sort = [...shopDB2].sort((a, b) => a.price - b.price) // for문에서는 i, j를 많이 쓰는 것처럼 a, b를 많이 쓴다(정해진 건 아니고 관용)
    console.log(sort)

    // 반복문 for 이용 위 sort li 생성 후 ul에 최종 삽입하기
    // for~in, for`of, forEach
    for(let i of sort){
        const li = document.createElement('li')
        /* li.textContent = i.shop */
        li.innerHTML = `<a href=#">${i.shop}</a>` // 태그를 추가한다면 innerHTML 사용!
        li.innerHTML += `<span>${i.price}원</span>`
        li.innerHTML += `<em>${i.delivery}원</em>`
        console.log(li, i.shop)
        shopListUl.appendChild(li)
        // createElement로 생성한 JS 태그는 appendChild 함수로 대입한다.(innerHTML 사용 안 됨)
    }
})
// 배송비 무료 버튼 클릭 시 배송비 가격 표시
freeBtn.addEventListener('click',()=>{
    const delivery = shopDB2.map(i => i.delivery)
    resultTwo.textContent = `배송비 : ${Math.min(...delivery)}원`
    /* resultTwo.textContent = '배송비 : '+Math.min(...delivery)+ '원' */
})
