const IptPlayerQtt = document.getElementById('players')
const SecAllPlayers = document.getElementById('all-players')
const gameFullName = document.getElementById('game-full-name')
const gameName = document.getElementById('game-name')

const gameNames = ['Ligretto', 'Livretto', 'Negresco']

document.getElementById('new-game').addEventListener('click', e => {
    e.preventDefault()
    const qttPlayers = parseInt(IptPlayerQtt.value)

    if(!isNaN(qttPlayers) && qttPlayers > 0){
        SecAllPlayers.innerText = ''
        createPlayers(qttPlayers)
    } 
})

setInterval(() => {
    gameFullName.classList.add('hide')
    triggerNameChange()
}, 4000)

const triggerNameChange = () => {

    const rndInt = Math.floor(Math.random() * 3)

    console.log(rndInt)
    setTimeout(() => {
        gameName.innerText = gameNames[rndInt] + '???'
    }, 350)

    setTimeout(() => {
        gameFullName.classList.remove('hide')
    }, 800)
}

const createPlayers = qttPlayers => {
    for(let i = 0; i < qttPlayers; i++){
        const gameContainer = createContainer()

        const IptPlayerName = createPlayerName(i)

        const SpnPontos = createPointsHolder()

        const IptPointsModifier = createPointsModifier()

        const plusBtn = createModifyPointsBtn(SpnPontos, IptPointsModifier, true)

        const minusBtn = createModifyPointsBtn(SpnPontos, IptPointsModifier, false)

        const pointsContainer = createBtnModifierContainer()

        pointsContainer.appendChild(plusBtn)

        pointsContainer.appendChild(minusBtn)

        gameContainer.appendChild(IptPlayerName)

        gameContainer.appendChild(SpnPontos)

        gameContainer.appendChild(IptPointsModifier)

        gameContainer.appendChild(pointsContainer)

        SecAllPlayers.appendChild(gameContainer)
    }
}

const createBtnModifierContainer = () => {
    const container = document.createElement('div')

    container.classList.add('points-container')

    return container
}

const createContainer = () => {
    const container = document.createElement('div')
    container.classList.add('game-container')
    container.classList.add('window')
    
    return container
}

const createModifyPointsBtn = (spanPointsHolder, pointModifier, add) => {
    const btn = document.createElement('button')

    if(add)
        btn.innerText = '+'
    else 
        btn.innerText = '-'

    btn.addEventListener('click', () => {
        const playerPoints = parseInt(spanPointsHolder.innerText)
        const modifyPoints = parseInt(pointModifier.value)

        if (isNaN(playerPoints) || isNaN(modifyPoints)){
            alert('pointos inválidos!')
            return
        }
        if (add)
            spanPointsHolder.innerText = (playerPoints + modifyPoints)
        else 
            spanPointsHolder.innerText = (playerPoints - modifyPoints)
    })

    return btn
}

const createPlayerName = index => {
    const playerName = document.createElement('input')

    playerName.classList.add('single-player-name')

    playerName.value = 'Jogador' + (index + 1)

    return playerName
}

const createPointsHolder = () => {
    const spnPoints = document.createElement('span')
    spnPoints.innerText = 0

    return spnPoints
}

const createPointsModifier = () => {
    const pointsModifier = document.createElement('input')

    pointsModifier.setAttribute('placeholder', 'pontos')
    pointsModifier.setAttribute('type', 'number')

    pointsModifier.setAttribute('step', '10')

    return pointsModifier
}