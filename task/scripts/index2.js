const resultFlower = document.querySelector('.result_flower')
const shareBtn = document.querySelector('#share_btn')
const resultBtn = document.querySelector('#result')
const year = document.querySelector('.year')
const month = document.querySelector('.month')
const day = document.querySelector('.day')
const flowerImg = document.querySelector('.flower img')

// 초기 세팅 : 결과 숨기기, 공유버튼 숨기기
resultFlower.style.display = 'none'
shareBtn.style.display = 'none'

// '만나기' 버튼 클릭 시 입력한 년/월/일 중 '월' 인식해서 해당 값과 동일한 탄생화 배열 출력하기
resultBtn.addEventListener('click',()=>{
    const ymd = year.value && month.value && day.value
    ymd ? flowerFunc() : alert('생년월일을 모두 입력해주세요.');
    function flowerFunc(){
        if(month.value > 0 && month.value < 13){ // 1~12 범위값 확인
            const userMonth = month.value; // 사용자 입력값 변수 저장
            const resultFlowerName = birthday_flower[userMonth-1].flower
            const resultFlowerLang = birthday_flower[userMonth-1].content
            const resultFlowerSrc = birthday_flower[userMonth-1].src
            resultFlower.style.display = 'block'
            shareBtn.style.display = 'block'
            resultBtn.style.display = 'none'
            resultFlower.children[0].children[0].textContent = resultFlowerName
            resultFlower.children[1].children[0].textContent = resultFlowerLang
            flowerImg.src = resultFlowerSrc
        }else {
            alert('1월~12월 중에서 입력해주세요.')
        }
    }
})