// boolean.js
// 거짓으로 평가되는 값
// false, null, undefined, NaN, 0, ""
// 위 제외 모든 값 참으로 평가됨 [], {} 포함
let a = ""
console.log(Boolean(a))
a = []
console.log(Boolean(a))
// 비교연산자
// == 일치연산, ==데이터 타입까지 일치
let b = 10;
let c = "10";
let result = b == c; // 값만 비교 => true
console.log(result)
result = b === c; // 값 + 데이터 타입 비교 => false
b += 5; // 10 -> 15
console.log(result) 
result = b != c;
console.log(result); // 값만 비교 => true(같으면 거짓)
result = b !== c;
console.log(result); // 값 + 데이터 타입 비교 => true
c = 2; // b 15, c 2
result = b < c;
console.log(result) // false
result = b > c;
console.log(result) // true
result = b >= c;
console.log(result) // true
result = b <= c;
console.log(result) // false
console.log('-------------')
// 논리연산자 &&, ||, !
console.log("A" && null) // null
console.log("A" && "B") // B
console.log(0 && "B") // 0
console.log(0 || "B") // B
console.log("A" || "B") // A
console.log("" || {}) // 빈 문자열과 빈 객체 // {}
console.log(!"a") // true와 false로만 표기됨 // false 참이므로 표기는 거짓
let d;
result = !d; // true
console.log(result);
let e = [] // t
result = !e; // t->f
e += ['사과']
console.log(result); // false
// --------------
console.log('조건문------')
// if(조건식){조건식이 참일 때 실행문
let x = []
let y = 0
if(x){console.log('x는 참이다');} // 실행
if(y){console.log('y는 참이다');}
if(x != true){console.log('x는 참이다2');} // 실행
if(x && y){console.log('x, y는 참이다1');} // 실행
if(x || y){console.log('x만 참이다');} // 실행
x = 7;
y = 2;
if(x>y && x==y){alert('참일 때 실행되는 문구1')}
// if(x>y || x==y){alert('참일 때 실행되는 문구2')} // 팝업 때문에 닫아둠
if(!x){console.log('참일 때 실행되는 문구3');}
if(y || !x){console.log('참일 때 실행되는 문구4');} // 실행
if(!y && x){console.log('참일 때 실행되는 문구5');}

// 에버랜드 놀이기구 탑승조건 확인 JS
// 나이 입력 후 버튼 클릭 시 10살 이하면 '탑승불가' 메세지 출력
const ageInput = document.querySelector('.everland #age')
const ageBtn = document.querySelector('.everland #age_btn')
const ageResult = document.querySelector('.everland .result')
console.log(ageBtn, ageInput, ageResult)

// console.log(ageInput.value)
// 이벤트 함수 밖에 작성하는 건 초기값 확인용
// 나이 입력 후 버튼 클릭 시 콘솔에 입력한 나이값 표시
// *버튼 클릭 시 특정동작(입력한 나이값 가져오기)이 일어나야 한다
ageBtn.addEventListener('click',()=>{
    console.log(ageInput.value)
    // ageInput 변수의 value 값이 숫자 10 이하면(조건문)
    // age Result 변수에 '탑승불가' 문자 데이터 출력(조건문 참일 때)
    // if(조건식){조건식 결과가 참일 때 실행결과}
    // if(ageInput 변수의 value 값이 숫자 10 이하){'탑승불가' 문자 데이터}
    if(ageInput.value <= 10){
        ageResult.textContent = '탑승불가';
       /*  ageInput.value = "" */ // 입력값이 부정일 때 입력값 초기화
        ageInputReset() // 유지보수용
    }
    // 10살보다 크면 '탑승가능' 메세지 출력
    if(ageInput.value >= 10){
        ageResult.textContent = '탑승가능'
        /*  ageInput.value = "" */
        ageInputReset()
    }
    // 값 입력 안 하고 클릭 시 '값을 입력하세요' 메세지 출력
    if(ageInput.value == ""){
        ageResult.textContent = '값을 입력하세요'
    }
})

function ageInputReset(){
    return ageInput.value = "";
}

// 인쇄 알고리즘
// 인쇄하기 버튼 클릭 시 '인쇄하시겠습니까?' 물어보고 확인 누르면 인쇄창 실행
const printBtn = document.querySelector('#print_btn')
console.log(printBtn)

printBtn.addEventListener('click',printFunc)
function printFunc(){
    let confirmResult = confirm('인쇄하시겠습니까?') // confirm 확인 취소 팝업창
    console.log(confirmResult)
    if(confirmResult){print()}
    return // 함수를 끝내겠다는 종료 의미 // 밑으로 함수를 작성해도 적용 X
}

console.log('------------')
// 참과 거짓에 따른 결과출력 조건문
// if(조건식){참일 때 실행}else{거짓일 때 실행}
// 관리자 로그인
// 관리자(admin) 로그인 사용자 아이디 admin일 경우 '관리자님 어서오세요' 아니면 '관리자페이지 접근불가'
/* const userId = prompt('아이디')
if(userId == 'admin'){
    alert('관리자님 어서오세요')
}else{
    alert('관리자페이지 접근불가')
} */
/* const userId = prompt('아이디')
if(userId != 'admin'){
    alert('관리자페이지 접근불가')
}else{
    alert('관리자님 어서오세요')
} */
// 팝업 차단용 주석

// 로그인 조건문
// 아이디(미입력) 비밀번호(입력) 로그인 클릭 시 - 아이디 입력 경고 메세지 출력
// 아이디(입력) 비밀번호(미입력) 로그인 클릭 시 - 비번 입력 경고 메세지 출력
// 아이디(입력) 비밀번호 (입력) 로그인 클릭 시 - (맞는 정보 기준) index.html 이동
// 아이디(입력) 비밀번호 (입력) 로그인 클릭 시 - (틀린 정보 기준) 정보 오류 메세지 출력
const userId = document.querySelector('#user_id')
const userPw = document.querySelector('#user_pw')
const loginBtn = document.querySelector('#login_btn')
const loginErrorMsg = document.querySelector('#loginFrm .error') // class로 작성 시 부모 입력 권장

console.log(userId, userPw, loginBtn, loginErrorMsg)

// 회원정보 저장 DB
// 관리자 이름 : 봄, 나이 : 30
// 일반회원 이름 : 여름, 나이 : 20
const userDB = [{// userDB[배열]객체
    name:'봄',
    age:30,
    pst:'관리자',
    id:'admin',
    pw:'admin1234',
},{
    name:'여름',
    age:20,
    pst:'일반회원',
    id:'summer',
    pw:'summer1234',
}]

console.log(userDB[0].id) // 위 회원정보 변수의 id 확인 테스트

loginBtn.addEventListener('click',()=>{
    // 아이디 미입력 기준 에러 메세지 출력
    if(userId.value == ""){
        loginErrorMsg.textContent = '아이디를 입력하세요'
    }else if(userPw.value == ""){
        // 비번 미입력 기준 에러 메세지 출력
        loginErrorMsg.innerHTML = '비밀번호를<br>입력하세요'
        // if의 조건이 거짓이고 else if 조건이 참일 때 실행
        // html의 요소를 넣고 싶을 때는 innerHTML을 사용
    }else if(userId.value == userDB[0].id){
        // 입력한 id, pw가 관리자의 저장된 id, pw와 동일 시 index 이동
        if(userPw.value == userDB[0].pw){
            /* location.href = '../index.html'; */
            /* isLogin = true; */
            /* console.log('로그인 성공', isLogin) */
            // ★ 로컬 환경에서 확인 가능한 브라우저 데이터 저장법
            localStorage.setItem('isLogin2','true')
            console.log('성공') // 확인용
            // localStorage.setItem('속성','값')
            // localStorage.getItem('','')
        }
    }else {// 모든 조건이 거짓일 때(입력 id, pw 저장된 정보와 다를 때)
        loginErrorMsg.textContent = '아이디 또는 비밀번호가 잘못되었습니다. 다시 한 번 확인해주세요'
    }
    // 위에 else를 사용하게 되면 비번 상관없이 아이디가 입력됐을 때의 의(if 조건의 거짓)
})

// boolean_common.js 변수 확인
console.log(isLogin)