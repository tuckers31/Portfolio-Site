const button = document.querySelector('button');

function getRandColor() {
    const rgbColorArr = []

    for (let i = 0; i < 3; i++) {
        rgbColorArr.push(Math.floor(Math.random() * 256));
    }

    return rgbColorArr;
};

function changeColor() {
    const newColor = getRandColor()
    button.style.backgroundColor = `rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`
}

button.addEventListener('click', changeColor);