const fizzContainer = document.getElementById('fizzresult')
let addFizOnce = false

document.getElementById('fizzCalculate').addEventListener('click', ()=> {
  fizzContainer.innerText = ""
  const maxNum = parseInt(document.getElementById('numbers').value)
  const fiz = parseInt(document.getElementById('fizznum').value)
  const buz = parseInt(document.getElementById('buzznum').value)
  const bang = parseInt(document.getElementById('bangnum').value)

  if (!isNaN(maxNum) || !isNaN(fiz) || !isNaN(buz) || !isNaN(bang)){
    for(let i = 1; i<=maxNum; i++){
      let phrase = "";
      if(i % fiz === 0) phrase = document.getElementById('fizzkey').value
      if(i % buz === 0) phrase += document.getElementById('buzzkey').value
      if(i % bang === 0) phrase += document.getElementById('bangkey').value
      if(phrase.length === 0) phrase = i
      createLabel(phrase)
    }
  }
  if(!addFizOnce){
    fizzContainer.classList.add('showFizz')
    addFizOnce = true
  }
  
})

const createLabel = value => {
  const elem = document.createElement('strong')
  elem.innerText = value;
  fizzContainer.appendChild(elem)
}