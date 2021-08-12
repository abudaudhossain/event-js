function makeRed() {
    document.body.style.backgroundColor = 'red';
}

const makeGreen = document.getElementById('make-green');
makeGreen.onclick = getMakeGreen;

function getMakeGreen() {
    document.body.style.backgroundColor = 'green';
}

const makeBlue = document.getElementById('make-blue');
makeBlue.onclick = function () {
    document.body.style.backgroundColor = 'blue';
}

const makeBlueViolet = document.getElementById('make-blue-violet');
makeBlueViolet.addEventListener('click', getBlueViolet)
function getBlueViolet() {
    document.body.style.backgroundColor = 'BlueViolet';
}

const makeHotPink = document.getElementById('make-hot-pink');
        makeHotPink.addEventListener('click', function() {
            document.body.style.backgroundColor = 'HotPink';
        })