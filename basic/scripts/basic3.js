//키오스크 주문 출력(배열 활용법)
function kiosk_array(hotice, name, num){
    const type = ['따뜻한', '차가운']
    const menu = ['카페라떼', '아메리카노', '녹차라떼']
    console.log(`${type[hotice]} ${menu[name]} ${num}잔 주문 완료되었습니다.`)
    // 출력예시) 따뜻한 카페라떼 2잔 주문 완료되었습니다.
}
kiosk_array(0, 0, 2)
kiosk_array(1, 1, 1)
kiosk_array(0, 2, 2)
kiosk_array(1, 1, 1)


//키오스크 주문 출력(객체 활용법)
function kiosk_obj(hotice, name, num=1){
    const coffeeMenu = {
        type:['따뜻한','차가운'],
        menu:['카페라떼','아메리카노','녹차라떼'],
    }
    // 출력예시) 따뜻한 카페라떼 2잔 주문 완료되었습니다.
    // console.log(`${coffeeMenu.속성[값]}`)
    console.log(`${coffeeMenu.type[hotice]} ${coffeeMenu.menu[name]} ${num}잔 주문 완료되었습니다.`)
}
kiosk_obj(0, 0, 2)
kiosk_obj(1, 1)
kiosk_obj(0, 2, 2)
kiosk_obj(1, 2)

console.log('---------------리턴')
function plusFunc1(n1, n2){
    let calc = `${n1} * ${n2} = ${n1*n2}, `
    calc += `${n1} + ${n2} = ${n1+n2}`
    /* 문제1) 곱하기가 아닌 더하기만 나오는 문제 */
    // 대입연산자(=) 이전 변수 값을 제거하고 새로운 값 대입
    // 이전 변수 값을 유지하고 새로운 값 추가 대입 연산자는? 복합대입
    // calc = calc + `계산식`
    // calc += `계산식`
    return calc
}
/* function plusFunc2(n1, n2){
    alert(`${n1} + ${n2} = ${n1+n2}`)
} */
console.log(plusFunc1(1, 2))
/* alert(plusFunc1(2, 4)) */

// 구구단 함수(2~9단까지)
// 출력예시) 변수 x 변수 = 결과
function dan99Func(dan){
    let dan99Total ='';
    dan99Total += `${dan} X 1 = ${dan*1}, `
    dan99Total += `${dan} X 2 = ${dan*2}, `
    dan99Total += `${dan} X 3 = ${dan*3}, `
    dan99Total += `${dan} X 4 = ${dan*4}, `
    dan99Total += `${dan} X 5 = ${dan*5}, `
    dan99Total += `${dan} X 6 = ${dan*6}, `
    dan99Total += `${dan} X 7 = ${dan*7}, `
    dan99Total += `${dan} X 8 = ${dan*8}, `
    dan99Total += `${dan} X 9 = ${dan*9}`
    return dan99Total
    // return 아래 작성된 식은 실행되지 않음
}
console.log(dan99Func(7))
// alert(dan99Func(5))
// prompt(dan99Func(2))

// 할인율 계산기
// KB국민카드 5% 할인적용가 ?원
// 현대카드 10% 할인적용가 ?원
// 삼성카드 20% 할인적용가 ?원

// 할인율 계산법 (100-5(할인율(%))) / 100 = 0.95
// 판매가 * 0.95
function cardFunc(cardType, discount){
    const card = ['국민카드','현대카드','삼성카드'] // 카드사정보
    const price = 1051000; // 원가
    const calc = (100 - discount) / 100; // 할인율 계산
    const totalPrice = price * calc; // 할인가 계산
    const result = `${card[cardType]} ${discount}% 할인적용가 ${totalPrice.toLocaleString('ko-kr')}원`; // 출력 결과
    return result // 반환결과
}
// 현대카드 10% 할인적용가 ?원
console.log(cardFunc(0, 5))
console.log(cardFunc(1, 10))
console.log(cardFunc(2, 20))

// 익명함수
// 변수 내 function 키워드를 지정해 생성하는 함수

// 일반함수와 익명함수의 차이
function hello1(user){
    return alert('hello '+user)
}
/* hello1('hanull') */

const hello2 = function(user){
    return alert('hello '+user)
}
/* hello2('kim') */

// 익명함수 + 화살표함수(ES6)
// 변수키워드 변수명 대입연산자 (매개변수) 화살표 {실행}
const hello3 = (user) => {
    return console.log('hello '+user)
}
hello3('lee');