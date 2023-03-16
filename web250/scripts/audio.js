var audioContext = new window.AudioContext(),
    oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.value = 400;
    oscillator.start();


var oscilloscope = new Oscilloscope('#last', audioContext);


oscillator.connect(oscilloscope.analyserNode);

oscilloscope.audioContext = "./"


oscilloscope.start();

console.log("seems to be working")