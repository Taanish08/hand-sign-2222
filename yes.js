

Webcam.set({
    width: 350,
    height: 350,
    image_format:'png',
    image_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function img_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'"/>'
    })
}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_oteeP5Hn/model.json',modelloaded);

function modelloaded() {
console.log("model has loaded👍");
}