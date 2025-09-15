const imgMenu = document.querySelectorAll('.menu .left a')
console.log(imgMenu)

// this 키워드 사용 시(유지보수O)
// this 장점! 속성을 바꿔야 할 때 this의 객체만 바꾸면 된다
imgMenu[0].addEventListener('click',function(){iconChange(this, 'like')})
imgMenu[1].addEventListener('click',function(){iconChange(this, 'comment')})
imgMenu[2].addEventListener('click',function(){iconChange(this, 'paper')})
function iconChange(target, name){
    return target.children[0].src = `./images/${name}_on.png`
}
// 아래와 동일하지만 유지보수를 위한 정리
/* imgMenu[0].addEventListener('click',iconChange(0, 'like'))
imgMenu[1].addEventListener('click',iconChange(1, 'comment'))
imgMenu[2].addEventListener('click',iconChange(2, 'paper'))
function iconChange(index, name){
    return function(e){
        e.preventDefault()
        imgMenu[index].children[0].src = `./images/${name}_on.png`
    }
} */
// 그저 나열했을 때(이것도 적용이 되긴 함)
/* imgMenu[0].addEventListener('click',(e)=>{
    e.preventDefault()
    imgMenu[0].children[0].src = './images/like_on.png'
})
imgMenu[0].addEventListener('click',(e)=>{
    e.preventDefault()
    imgMenu[1].children[1].src = './images/comment_on.png'
}) */
// this 키워드 사용 시(유지보수X)
/* imgMenu[0].addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(this)
    this.children[0].src = './images/like_on.png'
}) */

// 사진 클릭 시 스피커 모양 보이기(+애니메이션)
const instaPhoto = document.querySelector('main > .photo');
const volumeIcon = document.querySelector('#popup');
console.log(instaPhoto, volumeIcon)

volumeIcon.style.transition = 'opacity 1s'

/* instaPhoto.addEventListener('click',()=>{ // 클릭 한 번
    volumeIcon.style.opacity = 1;
}) */
instaPhoto.addEventListener('dblclick',()=>{ // 더블클릭 시 이벤트 발생
    volumeIcon.style.opacity = 1;
})
instaPhoto.addEventListener('mouseout',()=>{ // 범위 외로 커서 이동 시 사라지는 이벤트 발생
    volumeIcon.style.opacity = 0;
})