//Add color to titles to avoid many id for each tag
const changeTagColor = () => {
    const languageName = [...document.querySelectorAll('.languageName h2')]

    languageName.forEach((currentTitle, index) =>{
        switch (index) {
            case 0:
                currentTitle.style.color = '#FF6520'
                break
            case 1:
                currentTitle.style.color = '#0074BE'
                break
            case 2:
                currentTitle.style.color = '#F8DC3E'
                break
            case 3:
                currentTitle.style.color = '#01DBFC'
                break
            case 4:
                currentTitle.style.color = '#FFC107'
                break
            case 5:
                currentTitle.style.color = '#00758F'
                break
        }
    })
}

//Dissapear Menu when scrolling down and Appear when scrolling up

const menu = document.querySelector('.menu');
var totalScroll = 0;

const moveMenu = () => {
    var currentScroll = window.scrollY

    if (totalScroll < currentScroll) {
        menu.style.transform = "translateY(-200px)"
    } else {
        menu.style.transform = 'translateY(0px)'
    }

    totalScroll = currentScroll
}

window.addEventListener('scroll', moveMenu)

//A simply effect that shine a card at a time

const cardSkills = document.querySelector('.cardSkills')
const card = document.querySelectorAll('.cardSkills .cards')

const effectShine = ()=>{
    card.forEach((card, index)=>{
        setTimeout(()=>{
            const prevSiblingCard = card.previousElementSibling

            effectMenager(card, prevSiblingCard)

            if(index === 5) setTimeout(()=>{
                card.classList.remove('shine')
                effectShine()
            }, 4000)
         
        }, index * 4000)
    })
}

const effectMenager = (currentCard, siblingCard)=>{
    currentCard.classList.add('shine')
    if(siblingCard !== null) siblingCard.classList.remove('shine')
}   

//Effect Typing

const textType = 'Olá, meu nome é André.'
let textWrong = 'Olá, meu nome é Ana.'
const textElement = document.querySelector('#textTyping')
const mainElement = document.querySelector('#mainContent')
var speedTyping = 100

const typingText = ()=>{
    textElement.innerHTML = ''

    for(let i=0; i<textWrong.length; i++){
        setTimeout(()=>{
            textElement.textContent += textWrong[i]

            if(i === textWrong.length-1){
                speedTyping = Math.floor(Math.random() * 100) + 200
                deleteName()
            }
        }, i * speedTyping)
    }
}

const deleteName = ()=>{
    for(let i=0; i<4; i++){
        setTimeout(()=>{
            textWrong = textWrong.substring(0, textWrong.length-1)
            textElement.textContent = textWrong

            if(i === 3) {
                speedTyping = Math.floor(Math.random() * 100) + 100
                correctName(textWrong.length)
            }

        }, i * speedTyping)
    }
}

const correctName = (num)=>{
    for(let i=num; i<textType.length; i++){
        setTimeout(()=>{
            textElement.textContent += textType[i]
        }, (i-num) * speedTyping)
    }
}

setTimeout(() => typingText(), 500)

//ProjectWindow

const projectsSites = {
    0: {
        image: 'assets/image/projectsThumb/e-commerce.png',
        title: 'E-Commerce',
        text: 'Esse projeto foi feito a partir de um site no SquareSpace com algumas modifições com JavaScript para deixar o site mais moderno. Sendo um dos meus primeiros projetos. O site está em aperfeiçoamento, link desativado.',
        link: '#',
        statistics: [193, 655, 276],
    },
    1: {
        image: 'assets/image/projectsThumb/landingpage.png',
        title: 'Landing Page',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, veritatis ut aliquam ea neque, maxime fuga iusto corporis officia velit libero quae unde maiores quasi magnam deserunt reprehenderit sint? Aliquid, molestiae? Dolorem reiciendis, quae earum repellat nemo labore nisi! Ipsam placeat vero, nulla mollitia odio laboriosam eum labore asperiores eveniet? O site está em aperfeiçoamento, link desativado.',
        link: '#',
        statistics: [193, 320, 56]
    },
    2: {
        image: 'assets/image/projectsThumb/memory-game.png',
        title: 'MemoryGame',
        text: 'Um simples jogo da memória com pontuação usando Javascript Puro. O sistema de pontuação consiste no tempo que alguém consegue terminar o jogo, sendo usado um LocalStorage para armazenar o player (só é possivel armazenar um player atualmente).',
        link: 'https://andresiboli.github.io/memory-game',
        statistics: [100, 271, 261]
    },
}

const projectWindow = document.querySelector('.projectOpenContainer')
const projects = document.querySelectorAll('.projectsGroups')

const appearDisplay = (e)=>{
    const myObj = projectsSites[e.id]

    const image = document.querySelector('.projectImage')
    const projectInfo = document.querySelector('.projectInfo')
    const projectDescription = document.querySelector('.projectDescription')
    const projectStatistic = document.querySelector('.projectStatistic')

    resetWindow(image, projectInfo, projectDescription, projectStatistic)

    const elementImg = createAnImage(myObj.image);
    const elementTitle = createTitle(myObj.title);
    const elementParagraph = createParagrath(myObj.text, myObj.link);
    const elementStatistic = createStatistic(...myObj.statistics);
    let [htmlElement, cssElement, jsElement] = elementStatistic;

    image.appendChild(elementImg)
    projectInfo.appendChild(elementTitle)
    projectStatistic.appendChild(htmlElement)
    projectStatistic.appendChild(cssElement)
    projectStatistic.appendChild(jsElement)
    projectDescription.appendChild(elementParagraph)
    projectWindow.style.display = 'flex'
}

const resetWindow = (image, projectInfo, projectDescription, projectStatistic) => {
    image.innerHTML = ''
    projectInfo.innerHTML = ''
    projectDescription.innerHTML = ''
    projectStatistic.innerHTML = ''
}

const createAnImage = (url) => {
    var elementImg = document.createElement('img')
    elementImg.src = url
    return elementImg
}

const createTitle = (title) => {
    var elementTitle = document.createElement('h1')
    elementTitle.textContent = title
    return elementTitle
}

const createParagrath = (text, url) => {
    var elementParagraph = document.createElement('p')
    var elementLink = document.createElement('a')
    elementParagraph.textContent = text
    elementLink.id = 'linkWindow'
    elementLink.setAttribute('href', url)
    elementLink.textContent = ' Clique aqui para acessar o site'
    elementParagraph.appendChild(elementLink)

    return elementParagraph
}

const createStatistic = (html, css, js) => {
    //O cálculo é baseado na quantidade de linhas
    let total = html + css + js
    let htmlPorcent = Math.round(html * 100 / total)
    let cssPorcent = Math.round(css * 100 / total)
    let jsPorcent = Math.round(js * 100 / total)

    const htmlElement = createElementStats('assets/image/Icons/html-5.png', htmlPorcent, '#FF6520')
    const cssElement = createElementStats('assets/image/Icons/css-3.png', cssPorcent, '#0074BE')
    const jsElement = createElementStats('assets/image/Icons/javascript.png', jsPorcent, '#F8DC3E')

    const arrayElement = new Array(htmlElement, cssElement, jsElement)

    return arrayElement
}

const createElementStats = (img, porcent, color) => {
    const statsContainer = document.createElement('div')
    const statsImgContainer = document.createElement('div')
    const statsImg = createAnImage(img)
    const statsLoadingContainer = document.createElement('div')
    const statsLoading = document.createElement('div')
    const statsLoadingPorcent = document.createElement('p')

    statsContainer.className = 'statsContainer'
    statsImg.className = 'statsImg'
    statsImgContainer.className = 'statsImgContainer'
    statsLoading.className = 'statsLoading'
    statsLoadingContainer.className = 'statsLoadingContainer'

    statsLoading.style.backgroundColor = `${color}`
    statsLoading.style.width = `${porcent}%`
    statsLoadingPorcent.innerHTML = `${porcent}%`

    statsImgContainer.appendChild(statsImg)
    statsLoadingContainer.appendChild(statsLoading)
    statsContainer.appendChild(statsImgContainer)
    statsContainer.appendChild(statsLoadingContainer)
    statsContainer.appendChild(statsLoadingPorcent)

    return statsContainer
}

const closeWindow = document.querySelector('.closeWindow')

closeWindow.addEventListener('click', () => {
    projectWindow.style.display = 'none'
})

//dateFooter

const footer = document.querySelector('.footer #date')

const footerDate = ()=>{
    const year = new Date().getFullYear()
    footer.textContent = year
}

//When the page loads

window.addEventListener('load', ()=>{
    changeTagColor();
    effectShine();
    footerDate();

    var elementIndex = 0
    projects.forEach(element => {
        element.id = elementIndex
        element.addEventListener('click', () => appearDisplay(element))
        elementIndex++
    });
})