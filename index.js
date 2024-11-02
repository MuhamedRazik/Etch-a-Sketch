const container = document.querySelector('.container');
const customGrid = document.getElementById('grid-size');
const borderBtn = document.getElementById('border-btn');

// color change//
const blackBtn = document.getElementById('black');
const redBtn = document.getElementById('red');
const blueBtn = document.getElementById('blue');
const greenBtn = document.getElementById('green');

let isBlackActive = true;
let isRedActive = false;
let isBlueActive = false;
let isGreenActive = false;

let activeColor ="black";

blackBtn.addEventListener('click',() => {
    isBlackActive = !isBlackActive;  
    if(isBlackActive) {
        blackBtn.style.border = '3px solid grey';
        redBtn.style.border = '3px solid red';
        blueBtn.style.border = '3px solid blue';
        greenBtn.style.border = '3px solid green';
        isRedActive = false;
        isBlueActive = false;
        isGreenActive = false;
        activeColor = "black";
        return activeColor;
        

    }
    else {
        blackBtn.style.border = '3px solid black';
    }

});
redBtn.addEventListener('click',() => {
    isRedActive = !isRedActive;  
    if(isRedActive) {
        blackBtn.style.border = '3px solid black';
        redBtn.style.border = '3px solid grey';
        blueBtn.style.border = '3px solid blue';
        greenBtn.style.border = '3px solid green';
        isBlackActive = false;
        isBlueActive = false;
        isGreenActive = false;
        activeColor = "red";
        return activeColor;
    } 
    else {
        redBtn.style.border = '3px solid red'; 

    }
    
});
blueBtn.addEventListener('click',() => {
    isBlueActive = !isBlueActive; 
    if(isBlueActive) {
        blueBtn.style.border = '3px solid grey'; 
        blackBtn.style.border = '3px solid black';
        redBtn.style.border = '3px solid red'; 
        greenBtn.style.border = '3px solid green'; 
        isRedActive = false;
        isBlackActive = false;
        isGreenActive = false;
        activeColor = "blue";
        return activeColor;
          
    }
    else {
        blueBtn.style.border = '3px solid blue'; 
    }
    
    
});
greenBtn.addEventListener('click',() => {
    isGreenActive = !isGreenActive;  
    if(isGreenActive) {
        blackBtn.style.border = '3px solid black';
        redBtn.style.border = '3px solid red'; 
        blueBtn.style.border = '3px solid blue';
        greenBtn.style.border = '3px solid grey'; 
        isRedActive = false;
        isBlueActive = false;
        isBlackActive = false;
        activeColor = "green";
        return activeColor;  
    }
    else {
        greenBtn.style.border = '3px solid green'; 
    }
});

// setting for hover event to only run if mouse left button is pressed //
let isLeftButtonPressed = false;
let isRightButtonPressed = false;

document.addEventListener("mousedown",(event)=> {
    if(event.button ===0) {
        isLeftButtonPressed = true;
    }
    else if(event.button ===2) {
        isRightButtonPressed = true;
    }
});
document.addEventListener("mouseup",()=> {
    isLeftButtonPressed = false;
    isRightButtonPressed = false;
});

for(i=1; i <= 16*16; i++) {
    const divs = document.createElement('div');
    divs.id = 'gridDiv';
    divs.addEventListener("mouseover",()=> {
       if(isLeftButtonPressed) {
        divs.style.backgroundColor = activeColor;
        }
       else if(isRightButtonPressed) {
        divs.style.backgroundColor = 'white';
        }
    });

    container.appendChild(divs);
};

// custom Grid without changing total pixel//
customGrid.addEventListener('click',pixelValue);

function pixelValue() {
    let gridValue = prompt("Enter a number of Squares per Side (MAX = 100)");
    gridValue = parseInt(gridValue);

    if (gridValue == "" || gridValue <1||gridValue > 100) {
        alert("Please Enter a number between 1 - 100")
        return;
    }
    createGrid(gridValue)
};

function createGrid (gridValue) {
    container.innerHTML = "";
    const containerWidth = 448;

    const pixelSize = (containerWidth/gridValue)-2;

    for(i=1; i <= gridValue * gridValue; i++) {
        const divs = document.createElement('div');
        divs.id = 'gridDiv';
        divs.style.width = `${pixelSize}px`;
        divs.style.height = `${pixelSize}px`;

        divs.addEventListener("mouseover",()=> {
            if(isLeftButtonPressed) {
             divs.style.backgroundColor = activeColor;
            }
            else if(isRightButtonPressed) {
             divs.style.backgroundColor = 'white';
            }
         });
     
         container.appendChild(divs);
     };
}

const btn16 = document.getElementById('16-size');
const btn32 = document.getElementById('32-size');
const btn64 = document.getElementById('64-size');

btn16.addEventListener('click',() => createGrid(16));
btn32.addEventListener('click',() => createGrid(32));
btn64.addEventListener('click',() => createGrid(64));

// border activationg and deactivating button
let isBorderActive = true;
borderBtn.addEventListener('click',() => {
    isBorderActive = !isBorderActive;
    // if(isBorderActive) {
        borderBtn.style.color = isBorderActive ?'white' :'grey';
        borderBtn.style.backgroundColor = isBorderActive ?'grey' :'white';

        const divs = document.querySelectorAll('#gridDiv');

        divs.forEach(div => {
            div.style.border = isBorderActive
            ? '1px solid rgba(128, 128, 128, 0.263)'
            : '1px solid rgba(128, 128, 128, 0)';
        });
    
});

