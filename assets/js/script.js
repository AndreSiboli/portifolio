//Add color to titles to avoid many id for each tag
const changeTagColor = () => {
    const $nameLanguage = document.getElementsByClassName('languageName')

    for (var i = 0; i < $nameLanguage.length; i++) {
        const nameAtual = $nameLanguage[i].children[0]
        switch (i) {
            case 0:
                nameAtual.style.color = '#FF6520'
                break
            case 1:
                nameAtual.style.color = '#0074BE'
                break
            case 2:
                nameAtual.style.color = '#F8DC3E'
                break
            case 3:
                nameAtual.style.color = '#01DBFC'
                break
            case 4:
                nameAtual.style.color = '#FFC107'
                break
            case 5:
                nameAtual.style.color = '#00758F'
                break
        }
    }
}

changeTagColor();

//Dissapear Menu when scrolling down and Appear when scrolling up

const menu = document.querySelector('.menu');
var scrollTotal = 0;

const moveMenu = () => {
    var scrollAtual = window.scrollY

    if (scrollTotal < scrollAtual) {
        menu.style.transform = "translateY(-200px)"
    } else {
        menu.style.transform = 'translateY(0px)'
    }

    scrollTotal = scrollAtual
}

window.addEventListener('scroll', moveMenu)

//A simply effect that shine a card at a time

const cardSkills = document.querySelector('.cardSkills')
const card = document.querySelectorAll('.cardSkills .cards')
var contCard = 0;
var current = ''
var past = ''

const shineEffect = () => {
    let currentCard;
    let pastCard;

    if (0 <= contCard <= 5) {
        currentCard = card[contCard]
        if (contCard == 0) {
            pastCard = card[5]
        } else {
            pastCard = card[contCard - 1]
        }
    }

    contCard++

    if (contCard >= 6) {
        contCard = 0
    }

    current = currentCard
    past = pastCard
    styleCard(current, past, '#ffffff05')
    cardInEffect()
};

const styleCard = (actually, past, color) => {
    actually.style.filter = 'saturate(300%)'
    actually.style.backgroundColor = `${color}`
    past.style.filter = 'saturate(100%)'
    past.style.backgroundColor = 'transparent'
}

const cardInEffect = () => {
    if (current == '') {
        return
    }

    if (insideCard === false) {
        styleCard(current, past, '#ffffff05')
    } else {
        styleCard(current, past, '#12121A33')
    }
}

var time = setInterval(shineEffect, 4500)
var insideCard = false

cardSkills.addEventListener('mouseenter', () => {
    insideCard = true
    cardInEffect()
})

cardSkills.addEventListener('mouseleave', () => {
    insideCard = false
    cardInEffect()
})


//Typing

const textType = 'Olá, meu nome é André.'
const textElement = document.getElementById('textTyping')
const mainElement = document.getElementById('mainContent')
const socialMedia = document.getElementsByClassName('socialMedia')[0]
var index = 0;
var indexLetra = 0;
var speedTyping = 100

const typingText = () => {
    if (index >= 18 && index <= 19) {
        if (index == 18) {
            textElement.innerHTML += 'a'
        } else if (index == 19) {
            textElement.innerHTML += '.'
            speedTyping = 1000
            setTimeout(typingText, speedTyping)
            index++
            return
        }
    } else {
        if (indexLetra < textType.length) {
            if (index == 20) {
                textElement.innerHTML = 'Olá, meu nome é Ana'
                speedTyping = 500
            } else if (index == 21) {
                textElement.innerHTML = 'Olá, meu nome é An'
                speedTyping = 100
            } else {
                textElement.innerHTML += textType[indexLetra]
                indexLetra++
            }
        }
    }

    index++
    speedTyping = Math.floor(Math.random() * 100) + 100
    setTimeout(typingText, speedTyping)
}

setTimeout(() => typingText(), 500)

//ProjectWindow

const projectsSites = {
    Ecommerce: {
        image: 'assets/image/projectsThumb/e-commerce.png',
        title: 'E-Commerce',
        text: 'Esse projeto foi feito a partir de um site no SquareSpace com algumas modifições com JavaScript para deixar o site mais moderno. Sendo um dos meus primeiros projetos. O site está em aperfeiçoamento, link desativado.'
    },
    LandingPage: {
        image: 'assets/image/projectsThumb/landingpage.png',
        title: 'Landing Page',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, veritatis ut aliquam ea neque, maxime fuga iusto corporis officia velit libero quae unde maiores quasi magnam deserunt reprehenderit sint? Aliquid, molestiae? Dolorem reiciendis, quae earum repellat nemo labore nisi! Ipsam placeat vero, nulla mollitia odio laboriosam eum labore asperiores eveniet? O site está em aperfeiçoamento, link desativado.'
    },
    MemoryGame: {
        image: 'assets/image/projectsThumb/memory-game.png',
        title: 'MemoryGame',
        text: 'Um simples jogo da memória com pontuação usando Javascript Puro. O sistema de pontuação consiste no tempo que alguém consegue terminar o jogo, sendo usado um LocalStorage para armazenar o player (só é possivel armazenar um player atualemente).'
    }
}

const projectWindow = document.querySelector('.projectOpenContainer')
const projects = document.querySelectorAll('.projectsGroups')
var elementIndex = 0

const appearDisplay = (e) => {
    let elementImg;
    let elementTitle;
    let elementParagraph;
    let elementStatistic;
    let item = e.id;
    const image = document.querySelector('.projectImage')
    const projectInfo = document.querySelector('.projectInfo')
    const projectDescription = document.querySelector('.projectDescription')
    const projectStatistic = document.querySelector('.projectStatistic')

    resetWindow(image, projectInfo, projectDescription, projectStatistic)

    if (item === 'window0') {
        let [html, css, js] = [193, 655, 276];
        elementImg = createAnImage(projectsSites.Ecommerce.image);
        elementTitle = createTitle(projectsSites.Ecommerce.title);
        elementParagraph = createParagrath(projectsSites.Ecommerce.text, '#');
        elementStatistic = createStatistic(html, css, js);
    } else if (item === 'window1') {
        let [html, css, js] = [193, 320, 56]
        elementImg = createAnImage(projectsSites.LandingPage.image)
        elementTitle = createTitle(projectsSites.LandingPage.title)
        elementParagraph = createParagrath(projectsSites.LandingPage.text, '#')
        elementStatistic = createStatistic(html, css, js);
    } else if (item === 'window2') {
        let [html, css, js] = [100, 271, 261]
        elementImg = createAnImage(projectsSites.MemoryGame.image)
        elementTitle = createTitle(projectsSites.MemoryGame.title)
        elementParagraph = createParagrath(projectsSites.MemoryGame.text, 'https://andresiboli.github.io/memory-game')
        elementStatistic = createStatistic(html, css, js);
    } else {
        return
    }

    var [htmlElement, cssElement, jsElement] = elementStatistic

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

projects.forEach(element => {
    element.id = `window${elementIndex}`
    element.addEventListener('click', () => appearDisplay(element))
    elementIndex++
})

const closeWindow = document.querySelector('.closeWindow')

closeWindow.addEventListener('click', () => {
    projectWindow.style.display = 'none'
})