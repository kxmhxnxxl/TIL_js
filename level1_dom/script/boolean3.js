// 상/하/좌/우 버튼 클릭 시 캐릭터 10px 이동
const moveBtn = document.querySelectorAll('#control .btn')
const character = document.querySelector('#map img')
console.log(moveBtn, character);
let num = 0;

// 상
moveBtn[0].addEventListener('click',()=>{
    num += 10; // 증감(++)으로 쓴다면 10번을 써야함
    console.log(num)
    character.style.transform = `rotate(90deg) translateX(-${num}px)` // 변수를 쓰지 않고 10px로 쓰면 고정값으로 들어가기에 초기값에서 10px만 이동함
})
// 하

// 좌

// 우


// input 입력창에 영어로 이동방향 작성하고 Enter 누르면 캐릭터 10px 이동
// 이동방향) left, right, top, bottom
const controlInput = document.querySelector('#control #txt');
console.log(controlInput)
// * if(left){}else if(right){}else if(top){}else if(bottom){}else{오답}
controlInput.addEventListener('keyup',(e)=>{
    if(e.key == 'Enter'){
        const inputVal = controlInput.value;
        if(inputVal == 'left' || inputVal == 'right' || inputVal == 'top' || inputVal == 'bottom'){
            console.log(`${inputVal} 이동`)
            controlInput.value = ''; // 값을 쓰고 enter를 치면 빈문자열로 나타나게 하는
        }else {
            console.log('오답')
        }
        /* if(controlInput.value === 'left'){console.log('왼쪽 이동')}
        else if(controlInput.value === 'right'){console.log('오른쪽 이동')}
        else if(controlInput.value === 'top'){console.log('위쪽 이동')}
        else if(controlInput.value === 'bottom'){console.log('아래쪽 이동')}
        else {console.log('오답')} */
    }
})

// 학점에 따라 A~F등급 나오는 프로그래밍
// 100~90 A
// 89~80 B
// 79~70 C
// 69~60 D
// 59 이하 F
/* const score = prompt('학점을 입력하세요') */
const score = 90; // 프롬프트가 계속 떠서 넣어둔 임시 값
// 논리연산 0~100 범위값 조건식
// 추가 조건식 100~90 A
if(score >=0 && score <= 100){
    if(score >=90){console.log('A')}
    else if(score >=80){console.log('B')}
    else if(score >=70){console.log('C')}
    else if(score >=60){console.log('D')}
    else {console.log('F')}
}else{
    console.log('0~100 값만 입력해주세요')
}

// switch ~ case
// 쇼핑몰 검색창에 사용자가 입력한 값 조건확인
// 딸기 -> 1000원
// 사과 -> 2000원
// 딸기, 사과가 아니면 -> 판매상품이 아닙니다.

/* const fruit = prompt('검색어를 입력하세요') */
const fruit = '사과';
console.log(fruit);

switch(fruit){
    case '딸기':console.log('1000원'); break; // break; = 강제종료
    case '사과':console.log('2000원'); break;
    default : console.log('판매상품이 아닙니다.') // default 다음은 break(강제종료)를 쓸 필요 X
}

/* if(fruit == '딸기'){console.log('1000원')
else if(fruit == '사과'){console.log('2000원')}
} */

// 전화 단축키
/* const phoneNumber = prompt('단축키 입력') */
const phoneNumber = '1';
// 1 누르면 엄마
// 2 누르면 아빠
// 다른 숫자는 "해당 단축키가 없습니다."
switch(phoneNumber){
    case '1':console.log('엄마'); break;
    case '2':console.log('아빠'); break;
    default :console.log('해당 단축키가 없습니다.')
}

// 쇼핑몰 수량 +가격 알고리즘
// -버튼 클릭 시 수량감소+가격감소(1일 때 - 누르면 경고)
const minusBtn = document.querySelector('#minus')
const plusBtn = document.querySelector('#plus')
const numberInput = document.querySelector('#num')
const priceP = document.querySelector('p.price') // p의 class가 price일 때 // css에서도 사용가능
console.log(minusBtn, plusBtn, numberInput, priceP)
let numVal = 5;
let originalPrice = 900;
let stock = 10; //재고

numberInput.value = numVal; // 초기값 대입
priceP.textContent = `${numVal*originalPrice}원` // 초기값(가격)

minusBtn.addEventListener('click',()=>{ // - 클릭 시 실행함수는
    numVal == 1 ? console.log('최소 구매 수량') : numVal--;
    /* if(numVal == 1){console.log('최소 구매 수량')}
    else {numVal--;} */
    // numVal 값이 1과 같으면 오류출력, 1이 아니면 감소
    numFunc()
})
plusBtn.addEventListener('click',()=>{
    numVal < stock ? numVal++ : console.log('최대 구매 수량');
    numFunc()
})

// 자주 쓰는 값이 있을 땐 꼭 따로 뺴놓기(유지보수)
function numFunc(){
    numberInput.value = numVal; // 초기값 대입
    priceP.textContent = `${numVal*originalPrice}원` // 초기값(가격)
}