const $carousel = document.querySelector('.carouselContainer')
const $carouselImages = document.querySelectorAll('.carouselGroups')
const $carouselCore = document.querySelector('.carouselCore')

var direction = 0;
var changeTime = 0;

const width = $carouselImages[0].offsetWidth;
//$carouselCore.style.minWidth = `${window.innerWidth-width}px`

const changePhoto = (index)=>{
    changeTime = 0
    direction += index

    if(direction > ($carouselImages.length-1)/2){
        direction = 0
    }else if(direction < 0){
        direction = ($carouselImages.length-1)/2
    }
    
    if(window.innerWidth>950){
        $carousel.style.transform = `translateX(${-direction*950}px)`
    }else{
        $carousel.style.transform = `translateX(${-direction*window.innerWidth}px)`
        console.log(window.innerWidth)
    }
}

const animationChange = ()=>{
    changeTime++

    if(changeTime >= 400){
        changePhoto(1)
    }
    
    window.requestAnimationFrame(animationChange)
}

const loadingCarousel = ()=> {
    const buttonPrev = document.getElementById('btnPrev')
    const buttonForw = document.getElementById('btnForw')

    buttonPrev.addEventListener('click', ()=>{changePhoto(-1)})
    buttonForw.addEventListener('click', ()=>{changePhoto(1)})

    //animationChange()
}

document.body.addEventListener('dragstart', (e)=>{
    console.log(e.clientX)
})

window.addEventListener('load', loadingCarousel)