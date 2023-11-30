const div = document.getElementById('game');

let createP = function(text) {
    let p = document.createElement('p');
    p.innerText = text;
    div.appendChild(p);
}

let createButton = function(text, nextPage) {
    let button = document.createElement('button');
    button.innerText = text;
    button.addEventListener('click', function() {
        page[nextPage]();
    });
    div.appendChild(button);

}

let page = {
    start: function() {
        div.innerHTML = '';
        createP('You wake up to the sounds of birds chirping, dogs barking, and an incredibly loud truck driving by. Time to start your day. What do you do?');
        createButton('I walk outside', 'walkOutside');
        createButton('I stay inside', 'stayInside');
    },
    walkOutside: function() {
        div.innerHTML = '';
        createP('You walk outside. The weather is nice and the trees are pretty. What do you do?');
        createButton('I get in my car', 'getInCar');
        createButton('I walk down the street', 'walkDownStreet');
    },
    stayInside: function() {
        div.innerHTML = '';
        createP('You stay inside. That\'s a good idea, there\'s people outside. What do you do?');
        createButton('I make hot cocoa', 'makeCocoa');
        createButton('I cry', 'cryBaby');
    },
    getInCar: function() {
        div.innerHTML = '';
        createP('You get in your car and turn on the radio and Imagine Dragons plays. What do you do?');
        createButton('I drive to the store', 'driveToStore');
        createButton('I drive off a bridge', 'driveOffBridge');
    },
    walkDownStreet: function() {
        div.innerHTML = '';
        createP('You walk down the street. You\' never done this before and notice new things. What do you do?');
        createButton('I say hi to a dog', 'hiToDog');
        createButton('I turn around', 'turnAround');
    },
    makeCocoa: function() {
        div.innerHTML = '';
        createP('You make hot cocoa. You drink it and feel better. What do you do?');
        createButton('I go outside', 'lol');
        createButton('I go back to bed', 'backToBed');
    },
    cryBaby: function() {
        div.innerHTML = '';
        createP('You remember the feeling of wonder from your childhood and cry gently. What do you do?');
        createButton('I cry again', 'cryAgain');
        createButton('I search the house for zombies', 'searchForZombies');
    },
};

page.start();