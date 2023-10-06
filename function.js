// khoi tao cac thong so
let btn1 = document.querySelector('#btn1');
let img1 = document.querySelector('#call');
let btn2 = document.querySelector('#btn2');
let audio;
var sourceHTML = window.location.href;

btn1.addEventListener('click', () => {
    img1.src = 'image/chay_2.png'; 
    playSound('image/chuong.mp3');
    if (btn1 && sourceHTML.includes("pKhach.html")) {
        firebase.database().ref("PhongKhach").child("thietbi").update({baochay: 1});
    }
    if (btn1 && sourceHTML.includes("pBep.html")) {
        firebase.database().ref("PhongBep").child("thietbi").update({baochay: 1});
    }
    if (btn1 && sourceHTML.includes("pNgu.html")) {
        firebase.database().ref("PhongNgu").child("thietbi").update({baochay: 1});
    }
    if (btn1 && sourceHTML.includes("pKho.html")) {
        firebase.database().ref("PhongKho").child("thietbi").update({baochay: 1});
    }
});
btn2.addEventListener('click', ()=>{
    img1.src = 'image/chay_1.png';
    stopSound();
    if (btn1 && sourceHTML.includes("pKhach.html")) {
        firebase.database().ref("PhongKhach").child("thietbi").update({baochay: 0});
    }
    if (btn1 && sourceHTML.includes("pBep.html")) {
        firebase.database().ref("PhongBep").child("thietbi").update({baochay: 0});
    }
    if (btn1 && sourceHTML.includes("pNgu.html")) {
        firebase.database().ref("PhongNgu").child("thietbi").update({baochay: 0});
    }
    if (btn1 && sourceHTML.includes("pKho.html")) {
        firebase.database().ref("PhongKho").child("thietbi").update({baochay: 0});
    }
})

// khoi tao cac thong so
let btn3 = document.querySelector('#btn3');
let img2 = document.querySelector('#led');
let btn4 = document.querySelector('#btn4');
// functions nut bam
btn3.addEventListener('click', ()=>{
    img2.src = 'image/turn_on.png';
    if (btn1 && sourceHTML.includes("pKhach.html")) {
        firebase.database().ref("PhongKhach").child("thietbi").update({maylanh: 1});
    }
    if (btn1 && sourceHTML.includes("pBep.html")) {
        firebase.database().ref("PhongBep").child("thietbi").update({maylanh: 1});
    }
    if (btn1 && sourceHTML.includes("pNgu.html")) {
        firebase.database().ref("PhongNgu").child("thietbi").update({maylanh: 1});
    }
    if (btn1 && sourceHTML.includes("pKho.html")) {
        firebase.database().ref("PhongKho").child("thietbi").update({maylanh: 1});
    } 
})

btn4.addEventListener('click', ()=>{
    img2.src = 'image/turn_off.png';
    if (btn1 && sourceHTML.includes("pKhach.html")) {
        firebase.database().ref("PhongKhach").child("thietbi").update({maylanh: 0});
    }
    if (btn1 && sourceHTML.includes("pBep.html")) {
        firebase.database().ref("PhongBep").child("thietbi").update({maylanh: 0});
    }
    if (btn1 && sourceHTML.includes("pNgu.html")) {
        firebase.database().ref("PhongNgu").child("thietbi").update({maylanh: 0});
    }
    if (btn1 && sourceHTML.includes("pKho.html")) {
        firebase.database().ref("PhongKho").child("thietbi").update({maylanh: 0});
    } 

})


// khoi tao cac thong s
let btn5 = document.querySelector('#btn5');
let img3 = document.querySelector('#loc');
let btn6 = document.querySelector('#btn6');

// functions nut bam
btn5.addEventListener('click', ()=>{
    img3.src = 'image/loc_2.png' ;
    if (btn1 && sourceHTML.includes("pKhach.html")) {
        firebase.database().ref("PhongKhach").child("thietbi").update({loc: 1});
    }
    if (btn1 && sourceHTML.includes("pBep.html")) {
        firebase.database().ref("PhongBep").child("thietbi").update({loc: 1});
    }
    if (btn1 && sourceHTML.includes("pNgu.html")) {
        firebase.database().ref("PhongNgu").child("thietbi").update({loc: 1});
    }
    if (btn1 && sourceHTML.includes("pKho.html")) {
        firebase.database().ref("PhongKho").child("thietbi").update({loc: 1});
    } 

})
btn6.addEventListener('click', ()=>{
    img3.src = 'image/loc_1.png';
    if (btn1 && sourceHTML.includes("pKhach.html")) {
        firebase.database().ref("PhongKhach").child("thietbi").update({loc: 0});
    }
    if (btn1 && sourceHTML.includes("pBep.html")) {
        firebase.database().ref("PhongBep").child("thietbi").update({loc: 0});
    }
    if (btn1 && sourceHTML.includes("pNgu.html")) {
        firebase.database().ref("PhongNgu").child("thietbi").update({loc: 0});
    }
    if (btn1 && sourceHTML.includes("pKho.html")) {
        firebase.database().ref("PhongKho").child("thietbi").update({loc: 0});
    } 

})

function checkSmokeLevel() {
    let rooms = ["PhongKhach", "PhongNgu", "PhongBep", "PhongKho"];
    
    rooms.forEach(function(room) {
        let smokeRef = firebase.database().ref(room).child('Khoi');
        let temperatureRef = firebase.database().ref(room).child('Nhietdo');

        smokeRef.once('value')
            .then(function(smokeSnapshot) {
                let smokeValue = smokeSnapshot.val();
                
                temperatureRef.once('value')
                    .then(function(temperatureSnapshot) {
                        let temperatureValue = temperatureSnapshot.val();
                        
                        if (smokeValue > 30 || temperatureValue > 40) {
                            btn1.click();
                        }
                    });
            });
    });
}

setInterval(checkSmokeLevel, 1000);

function playSound(soundPath) {
    audio = new Audio(soundPath);
    audio.play();
}

function stopSound() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}
