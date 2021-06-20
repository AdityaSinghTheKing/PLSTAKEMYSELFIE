var SpeechRecognition = window.webkitSpeechRecognition
var Recognition = new SpeechRecognition()
function start() {
    document.getElementById("textbox").innerHTML = ""
    Recognition.start()
}
Recognition.onresult = function (event) {
    console.log(event)
    var content = event.results[0][0].transcript
    document.getElementById("textbox").innerHTML = content
    console.log(content)
    if (content == "Take my selfie") {
        console.log("takingselfie")
        speak()
    }
}
function speak() {
    var synth = window.speechsynthesis
    speak_data = "Taking your selfie in 5 seconds"
    var utterthis = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterthis);
    Webcam.attach(camera)
    setTimeout(function () {
        snapshot()
        save()

    }, 5000)

}
camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 350,
    image_format: 'jpg',
    jpg_quality: 90,

})

