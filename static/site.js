let plates = [];
let seconds = 0;
let movesNumber = 0;

// Start game
function StartStopGame(el) {
    let gameButtonText = el.innerHTML;
    if (gameButtonText == "Start Game") {
        MixPlates();

        // Start timer
        setInterval(gameTimer, 1000);
    }
    else {
        // Stop timer
        clearInterval();

        // Move to score page
        document.getElementById('gamePage').submit();
    }
}


// Shuffle plates
function MixPlates() {

    // Fid array with starting numbers
    for (let i = 0; i < 16; i++) {
        plates[i] = i;
    }

    //setStartTime();

    // Remove attribute 'hidden' from the last plate
    let emptyPlateId = 15;
    //removeHiddenAttribute(emptyPlateId);
    showAllPlates();

    shuffle(plates);

    // Renumber plates
    for (let i = 0; i < 16; i++) {
        document.getElementById(i).innerHTML = plates[i];
        //console.log('position number: ' + i + ' shaffled numbers: ' + plates[i]);
    }

    // Find new empty plate which has number 0 and hide it
    emptyPlateId = -1;
    for (let i = 0; i < 16; i++) {

        if (document.getElementById(i).innerHTML == 0) {

            addHiddenAttribute(i);

            emptyPlateId = i;
            //console.log('found emptyPlateId: ' + emptyPlateId);
        }
    }
    // console.log('use emptyPlateId: ' + emptyPlateId);
    setOnClickEvent(emptyPlateId);

    // Rename play button
    document.getElementById('play').innerHTML = "End Game";
    document.getElementById('headerText').innerHTML = "Click plates to recover the order";

    inPlaceCounter();
}

function setOnClickEvent(emptyPlateId) {

    clearAllOnClickEvents();

    switch (emptyPlateId) {
        case 0:
            //console.log('this is case 0');
            // Add onclick event to move plates #1 or #4 to #0
            document.getElementById(1).setAttribute('onclick', 'moveToEmptyPlate(this, 0)');
            document.getElementById(4).setAttribute('onclick', 'moveToEmptyPlate(this, 0)');
            break;
        case 1:
            //console.log('this is case 1');
            // Add onclick event to move plates #0 or #2 or #5 to #1
            document.getElementById(0).setAttribute('onclick', 'moveToEmptyPlate(this, 1)');
            document.getElementById(2).setAttribute('onclick', 'moveToEmptyPlate(this, 1)');
            document.getElementById(5).setAttribute('onclick', 'moveToEmptyPlate(this, 1)');
            break;
        case 2:
            //console.log('this is case 2');
            // Add onclick event to move plates #1 or #3 or #6 to #2
            document.getElementById(1).setAttribute('onclick', 'moveToEmptyPlate(this, 2)');
            document.getElementById(3).setAttribute('onclick', 'moveToEmptyPlate(this, 2)');
            document.getElementById(6).setAttribute('onclick', 'moveToEmptyPlate(this, 2)');
            break;
        case 3:
            //console.log('this is case 3');
            // Add onclick event to move plates #2 or #7 to #3
            document.getElementById(2).setAttribute('onclick', 'moveToEmptyPlate(this, 3)');
            document.getElementById(7).setAttribute('onclick', 'moveToEmptyPlate(this, 3)');
            break;
        case 4:
            //console.log('this is case 4');
            // Add onclick event to move plates #0 or #8 or #5 to #4
            document.getElementById(0).setAttribute('onclick', 'moveToEmptyPlate(this, 4)');
            document.getElementById(5).setAttribute('onclick', 'moveToEmptyPlate(this, 4)');
            document.getElementById(8).setAttribute('onclick', 'moveToEmptyPlate(this, 4)');
            break;
        case 5:
            //console.log('this is case 5');
            // Add onclick event to move plates #4 or #1 or #6 or #9 to #5
            document.getElementById(4).setAttribute('onclick', 'moveToEmptyPlate(this, 5)');
            document.getElementById(1).setAttribute('onclick', 'moveToEmptyPlate(this, 5)');
            document.getElementById(6).setAttribute('onclick', 'moveToEmptyPlate(this, 5)');
            document.getElementById(9).setAttribute('onclick', 'moveToEmptyPlate(this, 5)');
            break;
        case 6:
            //console.log('this is case 6');
            // Add onclick event to move plates #5 or #2 or #7 or #10 to #6
            document.getElementById(5).setAttribute('onclick', 'moveToEmptyPlate(this, 6)');
            document.getElementById(2).setAttribute('onclick', 'moveToEmptyPlate(this, 6)');
            document.getElementById(7).setAttribute('onclick', 'moveToEmptyPlate(this, 6)');
            document.getElementById(10).setAttribute('onclick', 'moveToEmptyPlate(this, 6)');
            break;
        case 7:
            //console.log('this is case 7');
            // Add onclick event to move plates #6 or #3 or # 11 to #7
            document.getElementById(6).setAttribute('onclick', 'moveToEmptyPlate(this, 7)');
            document.getElementById(3).setAttribute('onclick', 'moveToEmptyPlate(this, 7)');
            document.getElementById(11).setAttribute('onclick', 'moveToEmptyPlate(this, 7)');
            break;
        case 8:
            //console.log('this is case 8');
            // Add onclick event to move plates #4 or #9 or #12 to #8
            document.getElementById(4).setAttribute('onclick', 'moveToEmptyPlate(this, 8)');
            document.getElementById(9).setAttribute('onclick', 'moveToEmptyPlate(this, 8)');
            document.getElementById(12).setAttribute('onclick', 'moveToEmptyPlate(this, 8)');
            break;
        case 9:
            //console.log('this is case 9');
            // Add click event to move plates #8 or #5 or #10 or #13 to #9
            document.getElementById(8).setAttribute('onclick', 'moveToEmptyPlate(this, 9)');
            document.getElementById(5).setAttribute('onclick', 'moveToEmptyPlate(this, 9)');
            document.getElementById(10).setAttribute('onclick', 'moveToEmptyPlate(this, 9)');
            document.getElementById(13).setAttribute('onclick', 'moveToEmptyPlate(this, 9)');
            break;
        case 10:
            //console.log('this is case 10');
            // Add click event to move plates #9 or #6 or #11 or #14 to #10
            document.getElementById(9).setAttribute('onclick', 'moveToEmptyPlate(this, 10)');
            document.getElementById(6).setAttribute('onclick', 'moveToEmptyPlate(this, 10)');
            document.getElementById(11).setAttribute('onclick', 'moveToEmptyPlate(this, 10)');
            document.getElementById(14).setAttribute('onclick', 'moveToEmptyPlate(this, 10)');
            break;
        case 11:
            //console.log('this is case 11');
            // Add click event to move plates #10 or #7 or #15 to #11
            document.getElementById(10).setAttribute('onclick', 'moveToEmptyPlate(this, 11)');
            document.getElementById(7).setAttribute('onclick', 'moveToEmptyPlate(this, 11)');
            document.getElementById(15).setAttribute('onclick', 'moveToEmptyPlate(this, 11)');
            break;
        case 12:
            //console.log('this is case 12');
            // Add click event to move plates #8 or #13 to #12
            document.getElementById(8).setAttribute('onclick', 'moveToEmptyPlate(this, 12)');
            document.getElementById(13).setAttribute('onclick', 'moveToEmptyPlate(this, 12)');
            break;
        case 13:
            //console.log('this is case 13');
            // Add click event to move plates #12 or #9 or #14 to #13
            document.getElementById(12).setAttribute('onclick', 'moveToEmptyPlate(this, 13)');
            document.getElementById(9).setAttribute('onclick', 'moveToEmptyPlate(this, 13)');
            document.getElementById(14).setAttribute('onclick', 'moveToEmptyPlate(this, 13)');
            break;
        case 14:
            //console.log('this is case 14');
            // Add click event to move plates #13 or #10 or #15 to #14
            document.getElementById(13).setAttribute('onclick', 'moveToEmptyPlate(this, 14)');
            document.getElementById(10).setAttribute('onclick', 'moveToEmptyPlate(this, 14)');
            document.getElementById(15).setAttribute('onclick', 'moveToEmptyPlate(this, 14)');
            break;
        case 15:
            //console.log('this is case 15');
            // Add click event to move plates #14 or #11 to #15
            document.getElementById(14).setAttribute('onclick', 'moveToEmptyPlate(this, 15)');
            document.getElementById(11).setAttribute('onclick', 'moveToEmptyPlate(this, 15)');
            break;
        default:
            //console.log('this is default case');
            break;
    }
}

function moveToEmptyPlate(fromEl, i) {

    // Set number to just occupied plate
    document.getElementById(i).innerHTML = fromEl.innerHTML;

    // Unhide just occupied plate
    removeHiddenAttribute(i);

    // Set number 0 to new empty plate
    fromEl.innerHTML = 0;

    // Convert to num
    let numId = parseInt(fromEl.id);

    // Hide new empty plate
    addHiddenAttribute(numId);

    moveCounter();

    setOnClickEvent(numId);

    inPlaceCounter();
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function removeHiddenAttribute(elId) {
    document.getElementById(elId.toString()).style.visibility = 'visible';
    //console.log('removed hidden on plate id: ' + elId);
}

function showAllPlates() {

    for (let i = 0; i <= 15; i++) {
        document.getElementById(i.toString()).style.visibility = 'visible';
    }
}

function addHiddenAttribute(elId) {
    document.getElementById(elId.toString()).style.visibility = 'hidden';
    //console.log('set hidden to plate id: ' + elId);
}

function clearAllOnClickEvents() {
    //console.log('clearing click events...');
    for (let i = 0; i <= 15; i++) {

        let plate = document.getElementById(i);
        if (plate != null) {
            plate.onclick = '';
        }
    }
}

function moveCounter() {
    let currentMove = document.getElementById('counter').value;
    //console.log('current move: ' + currentMove);
    let currentMoveNum = parseInt(currentMove) + 1;
    document.getElementById('counter').value = currentMoveNum;
}

function inPlaceCounter() {
    let inPlaceCounter = 0;

    // Not looking at the very last sell as it should be empty
    for (let i = 0; i < 16; i++) {
        if (document.getElementById(i) == null) {
             continue;
        }

        if(document.getElementById(i).innerHTML == (i + 1).toString()) {

             inPlaceCounter += 1;
        }
    }
    console.log('-----------------------------------------------');
    document.getElementById('setedCounter').value = inPlaceCounter.toString();
}

function isItDone() {
    for (let i = 0; i < 1; i++) {
        if (document.getElementById(i).innerHTML != (i + 1).toString()) {
            console.log('plate # ' + document.getElementById(i).innerHTML + ' in wrong place: ' + (i + 1));
            return 0;
        }
    }
    return 1;
}

// Count seconds
function gameTimer () {
    seconds += 1;
    document.getElementById('timer').value = seconds;
}

