const htmlValidationLink = document.getElementById("html-validation")
const cssValidationLink = document.getElementById("css-validation")

htmlValidationLink.href = "https://validator.w3.org/nu/?doc=" + window.location.href;
cssValidationLink.href = "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href;


window.addEventListener("load", () => {
  const canvas = document.getElementById('canvas-1')
  const ctx = canvas.getContext('2d')
  const animal = document.getElementById('snail')

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  class Bar{
    constructor(x, y, width, height, color, index){
      this.x = x
      this.y = y
      this.width = width
      this.height = height
      this.color = color
      this.index = index
    }
    update(micInput){
      const sound = micInput * 1000
      if (sound > this.height){
        this.height = sound
      } else {
        this.height -= this.height *0.03
      }
      
    }
    draw(context, volume){
      context.strokeStyle = this.color
      context.lineWidth = this.width
      context.save()
      context.rotate(this.index *0.043)
      context.beginPath()
      // context.moveTo(0.1, this.y)
      // context.lineTo(this.x, this.y, this.height)
      context.bezierCurveTo(this.x/2, this.y/2, this.height * -0.5 - 150, 
        this.height + 50, this.x, this.y)
      context.stroke()
      context.restore()
      
      
    }
  }

  class Microphone{
    constructor(fftSize){
      this.initialized = false 
      navigator.mediaDevices.getUserMedia({audio: true}).then(function(stream){
        this.audioContext = new AudioContext()
        this.microphone = this.audioContext.createMediaStreamSource(stream)
        this.analyzer = this.audioContext.createAnalyser();
        this.analyzer.fftSize = fftSize
        const bufferLength = this.analyzer.frequencyBinCount
        this.dataArray = new Uint8Array(bufferLength)
        this.microphone.connect(this.analyzer)
        this.initialized = true
      }.bind(this)).catch(function(error){
        console.error(error)
      })
    }
    // async init(fftSize){
    //   try {
    //     const navi = await navigator.mediaDevices.getUserMedia({audio: true})
      
        
    //   } catch (error) {
        
    //   }   
    // }
    getSamples(){
      this.analyzer.getByteTimeDomainData(this.dataArray)
      let normSamples = [...this.dataArray].map(e => e/128-1)
      return normSamples
    }
    getVolume(){
      this.analyzer.getByteTimeDomainData(this.dataArray)
      let normSamples = [...this.dataArray].map(e => e/128-1)
      let sum = 0
      for(let i =0; i< normSamples.length; i++){
        sum += normSamples[i] * normSamples[i]
      }
      let volume = Math.sqrt(sum / normSamples.length)
      return volume
    }
  }
  const fftSize = 512
  const microphone = new Microphone(fftSize)
  let bars = []
  let barWidth = canvas.width/(fftSize/2)
  const createBars = function(){
    for (let i = 0; i < (fftSize/2); i++){
      bars.push(new Bar(0, i * 0.9,1 , 50, 'red', i))
    }
  }
  createBars()


  function animate(){
    if (microphone.initialized === true){
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const samples = microphone.getSamples()
      ctx.save()
      ctx.translate(canvas.width/2 - 70, canvas.height/2 + 90)
      bars.forEach(function(bar, i){
        bar.update(samples[i])
        bar.draw(ctx, 1)
      })
      ctx.restore()
    }
    

    requestAnimationFrame(animate)
  }
  animate()
})

