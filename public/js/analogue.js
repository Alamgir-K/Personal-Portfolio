// cycleOne = document.querySelectorAll('.cycle1')
// cycleTwo = 
// cycleThree = 
// cycleFour = 

function toggleDisplayOn(columns) {
    for (column of columns) {
        const columnChar = column.firstChild;
        columnChar.classList.replace('analogue-text', 'analogue-active');
    }
}

function toggleDisplayOff(columns) {
    for (column of columns) {
        const columnChar = column.firstChild;
        columnChar.classList.replace('analogue-active', 'analogue-text');
    }
}

function cycleAnalogueDisplay() {
    const cycleOne = document.querySelectorAll('.cycle-1');
    setTimeout(() => {
        toggleDisplayOn(cycleOne);
    }, 0);
    setTimeout(() => {
        toggleDisplayOff(cycleOne);
    }, 3000);
    const cycleTwo = document.querySelectorAll('.cycle-2');
    setTimeout(() => {
        toggleDisplayOn(cycleTwo);
    }, 3000);
    setTimeout(() => {
        toggleDisplayOff(cycleTwo);
    }, 6000);
    const cycleThree = document.querySelectorAll('.cycle-3');
    setTimeout(() => {
        toggleDisplayOn(cycleThree);
    },6000);
    setTimeout(() => {
        toggleDisplayOff(cycleThree);
    }, 9000);
    const cycleFour = document.querySelectorAll('.cycle-4');
    setTimeout(() => {
        toggleDisplayOn(cycleFour);
    }, 9000);
    setTimeout(() => {
        toggleDisplayOff(cycleFour);
    }, 12000);    
}

cycleAnalogueDisplay();
setInterval(() => {
    cycleAnalogueDisplay();
}, 12000);