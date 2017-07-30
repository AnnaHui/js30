const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play()
        })
        .catch(err => {
            console.error(`OH, no !!!`, err)
        })
};


function paintToCanvas() {
    const { videoWidth: width, videoHeight: height } = video;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);

        // take the pixels out
        let pixels = ctx.getImageData(0, 0, width, height);

        //mess with them
        // pixels = redEffect(pixels);
        pixels = regSplit(pixels);
        // pixels = greenScreen(pixels);
        // ctx.globalAlpha = .1;

        //put them back
        ctx.putImageData(pixels, 0, 0);

    }, 16)
}

function takePhoto() {
    snap.currentTime = 0;
    snap.play();

    //take the data out of the canvas
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;

    //download = 動作, handsome = 名稱
    link.setAttribute('download', 'capture');
    link.innerHTML = `<img src="${data}" alt="capture">`
    // link.textContent = 'download Image';
    strip.insertBefore(link, strip.firstChild);

}

function redEffect(pixels) {
    for (var i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 100; //red
        pixels.data[i + 1] = pixels.data[i + 1] - 50; //green
        pixels.data[i + 2] = pixels.data[i + 2] * .5; //blue
    };
    return pixels;
}

function regSplit(pixels) {
    for (var i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0]; //red
        pixels.data[i + 100] = pixels.data[i + 1]; //green
        pixels.data[i - 150] = pixels.data[i + 2]; //blue
    };
    return pixels;
}

// function greenScreen(pixels) {
//     const levels = {};

//     document.querySelectorAll('.rgb input').forEach((input) => {
//         levels[input.name] = input.value;
//     });

//     for (i = 0; i < pixels.data.length; i = i + 4) {
//         red = pixels.data[i + 0];
//         green = pixels.data[i + 1];
//         blue = pixels.data[i + 2];
//         alpha = pixels.data[i + 3];

//         if (red >= levels.rmin
//             && green >= levels.gmin
//             && blue >= levels.bmin
//             && red <= levels.rmax
//             && green <= levels.gmax
//             && blue <= levels.bmax) {
//             // take it out!
//             pixels.data[i + 3] = 0;
//         }
//     }

//     return pixels;
// }

getVideo();

video.addEventListener('canplay', paintToCanvas)
