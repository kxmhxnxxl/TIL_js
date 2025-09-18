// index.js
// 작업 HTML 동적인 요소가 무엇이 있는지? 알고리즘 계획
// 1. 변수 2. 초기값 설정 3. 이벤트, 함수 설정

// 동적 요소 계획하기
// 1. 상품이미지에 마우스 이벤트 시 큰상품 이미지 변경
// 2. 😄 저장하기 버튼 클릭 시 로그인 유무에 따라 다른 결과 실행
// 3. 리뷰 클릭 시 스크롤 이동(HTML에서도 가능)
// 4. 가격정보(i) 클릭 시 정보 팝업 출력/숨기기
// 5. 주문목록 초기 숨기기
// 6. 사이즈 select 초기 비활성화(색상 선택 시 활성화)
// 7. 색상 -> 사이즈 모든 선택 시 주문목록 출력(선택한 값이 출력, 주문금액 변경)
// 8. 주문목록 'x' 클릭 주문목록 삭제, 주문금액 초기화
// 9. 주문목록 + 클릭 시 재고수량까지 주문수량 + 주문금액 표시
// 10. 주문목록 - 클릭 시 주문수량 + 주문금액 감소(수량이 1이라면 경고창(팝업) 출력)
// 11. (상품 미선택 시) 장바구니, 바로구매 클릭 시 '상품을 선택하세요' 경고창(팝업) 출력
// 12. 😄 (상품 선택 시) 장바구니, 바로구매 클릭 시 로그인 유무에 따라 다른 페이지로 이동

// 1. 상품이미지에 마우스 이벤트 시 큰상품 이미지 변경
// 변수 -> 초기값 -> 이벤트, 함수
const thumnailA = document.querySelectorAll('.thumnail a')
const thumnailOverview = document.querySelector('.overview img')
console.log(thumnailA, thumnailOverview) // a*2, img

// 초기값(첫 번째 썸네일 a가 보이고 있단 뜻으로 테두리가 있음)
thumnailA[0].style.border = '2px solid #0aa5ff'

// 두 번째 썸네일에 마우스 올리면 큰 이미지를 두 번쨰 썸네일 이미지로 변경하기
// 콘솔 테스트 권장 1) 두 번째 썸네일 이미지 경로 출력하기
console.log(thumnailA[1].children[0].src) // <a><img src=""></a>
// 콘솔 테스트 권장 2) 큰 이미지 경로 출력하기
console.log(thumnailOverview.src)

// 이미지 자연스러운 scale 변경을 위한 transition 애니메이션 설정(초기값)
thumnailA[0].children[0].style.transition = 'transform 0.3s'
thumnailA[1].children[0].style.transition = 'transform 0.3s'

// 이벤트 함수 시작
thumnailA[0].addEventListener('mouseover',()=>{
    // 테두리 활성화/비활성화
    thumnailA[1].style.border = '0'
    thumnailA[0].style.border = '2px solid #0aa5ff'
    // 이미지 확대
    thumnailA[1].children[0].style.transform = 'scale(1)'
    thumnailA[0].children[0].style.transform = 'scale(1.2)'
    // 이미지 변경
    thumnailOverview.src = thumnailA[0].children[0].src
})
thumnailA[1].addEventListener('mouseover',()=>{
    thumnailA[0].style.border = '0'
    thumnailA[1].style.border = '2px solid #0aa5ff'
    // 이미지 확대
    thumnailA[0].children[0].style.transform = 'scale(1)'
    thumnailA[1].children[0].style.transform = 'scale(1.2)'
    // 이미지 변경
    thumnailOverview.src = thumnailA[1].children[0].src
})

// 로그인 정보 저장
// true == 로그인
// false == 로그아웃
localStorage.setItem('isLogin', 'true');

// 2. 😄 저장하기 버튼 클릭 시 로그인 유무에 따라 다른 결과 실행
const bookMark = document.querySelector('.product_info .scrap')
// 상태 가져오기 변수 생성
let loginStatus = '';
console.log(bookMark);

bookMark.addEventListener('click',()=>{
    loginStatus = localStorage.getItem('isLogin')
    if(loginStatus == 'false'){// 위변수 이용한 조건 분기
        // 로그아웃 시 logout.html 이동
        location.href = './login.html'
    }else {
        // 로그인 시 wish.html 이동
        location.href = './wish.html'
    }
})

// 3. 리뷰 클릭 시 스크롤 이동(HTML에서도 가능)
const reviewBtn = document.querySelectorAll('.review_link')
const reviewWrap = document.querySelector('.review_wrap')
const productInfoBtn = document.querySelector('.product_link')
const productWrap = document.querySelector('main > .product_info')
console.log(reviewBtn, reviewWrap, productInfoBtn, productWrap)


// 스크롤 이동 window 함수 scrollTo(x, y)
reviewBtn[0].addEventListener('click',(e)=>{e.preventDefault(); contentPstFunc(reviewWrap)})
reviewBtn[1].addEventListener('click',(e)=>{e.preventDefault(); contentPstFunc(reviewWrap)})
productInfoBtn.addEventListener('click',(e)=>{e.preventDefault(); contentPstFunc(productWrap)})

function contentPstFunc(target){
    return window.scrollTo(0, target.offsetTop)
    }
/* reviewBtn[0].addEventListener('click',(e)=>{
    e.preventDefault() // a 태그에만
    // 스크롤 이동 window 함수 scrollTo(x, y)
    console.log(reviewWrap.offsetTop) // 리뷰 위치의 위쪽 좌표값 확인
    window.scrollTo(0, reviewWrap.offsetTop)
})
reviewBtn[1].addEventListener('click',(e)=>{
    e.preventDefault() // a 태그에만
    // 스크롤 이동 window 함수 scrollTo(x, y)
    console.log(reviewWrap.offsetTop) // 리뷰 위치의 위쪽 좌표값 확인
    window.scrollTo(0, reviewWrap.offsetTop)
}) */

// 4. 가격정보(i) 클릭 시 정보 팝업 출력/숨기기
const priceInfoBtn = document.querySelector('.price_info .info_icon')
const priceInfo = document.querySelector('.price_info .info')
console.log(priceInfoBtn, priceInfo)

// 가격정보(i) 클릭 시 정보 팝업 출력
// 초기 : 숨김(false)
// 클릭 : 보이기(true) -> false -> true -> flase -> true...

let infoBoolean = false; // 초기 : 숨김(false)

priceInfoBtn.addEventListener('click',()=>{
    //infoBoolean의 상태를 클릭할 때마다 값(infoBoolean) 반전
    infoBoolean = !infoBoolean; // ★★★★★
    console.log(infoBoolean)
    if(infoBoolean){ // () 조건이 참일 때 자동실행
        priceInfo.style.display = 'block'
    }else{
        priceInfo.style.display = 'none'
    }
})

// 5. 주문목록 초기 숨기기 order_list
// 6. 사이즈 select 초기 비활성화(색상 선택 시 활성화) size_select
const orderList = document.querySelector('.order_list')
const sizeSelect = document.querySelector('#size_select')
const colorSelect = document.querySelector('#color_select')
console.log(orderList, sizeSelect, colorSelect)

/* readme에서 확인 */
orderList.style.display = 'none';
sizeSelect.disabled = true;

// 6-2. (색상 선택 시 활성화)
// 7. 색상 -> 사이즈 모든 선택 시(선택한 인덱스가 0이 아닌 것) - 콘솔 '선택완료'
// 주문목록 출력(선택한 값이 출력, 주문금액 변경)
colorSelect.addEventListener('change',()=>{
    if(colorSelect.selectedIndex != 0){
        sizeSelect.disabled = false; // 활성화
        // 사이즈 이벤트 작성위치
        sizeSelect.addEventListener('change',()=>{
            // 사이즈 옵션 인덱스 0이 아닌 것 선택 시 콘솔 선택완료
            if(sizeSelect.selectedIndex != 0){
                console.log('선택완료')
                orderList.style.display = 'block';
                // 선택한 옵션 안에 글자 가져오는 속성 text
                console.log(orderList.children[0].children[0])
                console.log(orderList.children[0].children[1])
                // 선택 옵션(color) 출력하기
                let orderColor = colorSelect.options[colorSelect.selectedIndex].text;
                let orderSize = sizeSelect.options[sizeSelect.selectedIndex].text;
                // let orderColorReplace = orderColor.replace() (찾는값, 변경값)
                // 정규표현식 시작과 끝 표시 /검사내용/
                // 괄호찾기 \찾는문자 \(.*\) 
                // 모든 내용 .*
                let orderColorReplace = orderColor.replace(/\(.*\)/,'')
                let orderSizeReplace = orderSize.replace(/\(.*\)/,'')
                orderList.children[0].children[0].textContent = orderColorReplace;
                orderList.children[0].children[1].textContent = orderSizeReplace;
                let totalPrice = document.querySelectorAll('.price em')
                // 주문금액 표시
                totalPrice[0].textContent = (productOptDB[0].price).toLocaleString('ko-kr')
                totalPrice[1].textContent = (productOptDB[0].price).toLocaleString('ko-kr')
                console.log(totalPrice.textContent)
            }
        })
    }else {
        sizeSelect.disabled = true; // 비활성화
    }
})

/* colorSelect.addEventListener('change',()=>{
    console.log(colorSelect.selectedIndex)
    console.log(colorSelect.options[0])
    // colorSelect.disabled = false;
    //색상 select에서 첫 번째 value=none에 해당하는 색상을 제외한 나머지 옵션이 선택되었을 때 사이즈 select 활성화하기
    if(colorSelect.selectedIndex != 0){ // 사용자가 선택한 options이 0이 아닌가
        sizeSelect.disabled = false; // 활성화
    }else { //사용자가 선택한 opt이 0일 때
        sizeSelect.disabled = true; // 비활성화
    }
}) */

// DB 불러오기 테스트
console.log(productOptDB[0].name) // 몽셸 패딩 하네스 올인원
console.log(productOptDB[0].color[0] + productOptDB[0].color[1]) // 블랙, 라지베리 // 값이 배열이라면 인덱스[] 필수

// DB -> HTML 적용
// 1. JS에서 HTML 함수로 생성 createElement()
const colorOpt1 = document.createElement('option')
const colorOpt2 = document.createElement('option')
const sizeOpt1 = document.createElement('option')
const sizeOpt2 = document.createElement('option')
const sizeOpt3 = document.createElement('option')
console.log(colorOpt1)
// 2. 위에서 생성한 함수에 DB 데이터 대입 innerHTML, textContent
colorOpt1.textContent = `${productOptDB[0].color[0]}(${productOptDB[0].price}원)` // 블랙(39900원)
colorOpt2.textContent = `${productOptDB[0].color[1]}(${productOptDB[0].price}원)`
sizeOpt1.textContent = `${productOptDB[0].size[0]}(${productOptDB[0].price}원)`
sizeOpt2.textContent = `${productOptDB[0].size[1]}(${productOptDB[0].price}원)`
sizeOpt3.textContent = `${productOptDB[0].size[2]}(${productOptDB[0].price}원)`
// 3. 위에서 만든 HTML을 실제 HTML의 마지막 자식 위치로 삽입
colorSelect.appendChild(colorOpt1) // appendChild 마지막 자식이라는 뜻
colorSelect.appendChild(colorOpt2)
sizeSelect.appendChild(sizeOpt1)
sizeSelect.appendChild(sizeOpt2)
sizeSelect.appendChild(sizeOpt3)
// *생성한 태그가 li면 ul or ol의 마지막 자식 위치로 삽입
// *생성한 태그가 option이면 select의 마지막 자식 위치로 삽입

// 8. 주문목록 'x' 클릭 주문목록 삭제, 주문금액 초기화
const closeBtn = document.querySelector('.order_list .close')

/* closeBtn.addEventListener('click',()=>{
    closeBtn.parentNode.style.display = 'none';
}) */
closeBtn.addEventListener('click',function(){
    this.parentNode.style.display = 'none';
    totalPrice.textContent = 0;
    colorSelect.selectedIndex = colorSelect.options[0]
    sizeSelect.selectedIndex = sizeSelect.options[0]
}) /* 에러난 거 확인하기 */