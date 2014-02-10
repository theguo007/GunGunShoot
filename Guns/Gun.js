function players(){
	this.bullets = 0;
	this.reloads = function() {
		this.bullets += 1;
	};
	this.shoot = function() {
		if (this.bullets >= 5) {
			this.bullets -= 5;
		}
		else if (this.bullets > 0) {
			this.bullets -= 1;
		}
	};
}

var player = new players();
var computer = new players();
var winner = null;
var playerWins = 0;
var computerWins = 0;

function computerActions() {
	var actions = ['reload', 'shoot', 'block'];
	var numberOfActions = 3;
	if (player.bullets == 0 || player.bullets >= 5) {
		delete actions[2];
		numberOfActions -= 1;
	}
	if (computer.bullets === 0) {
		delete actions[1];
		numberOfActions -= 1;
	}
	return actions[Math.floor(Math.random() * numberOfActions)];
}

function computerResult(choice) {
	element=document.getElementById("computerImage");
	if (choice === 'reload') {
		computer.reloads();
		element.src="C:/Users/Kevin Guo/Documents/Guns/ammunition.jpg";
	}
	else if (choice === 'shoot') {
		computer.shoot();
		element.src='C:/Users/Kevin Guo/Documents/Guns/Gun.jpg';
	} else {
		element.src='C:/Users/Kevin Guo/Documents/Guns/shield.jpg';
	}
};

function computerPicture(choice) {
	element=document.getElementById("computerImage");
	if (choice === 'reload') {
		element.src="C:/Users/Kevin Guo/Documents/Guns/ammunition.jpg";
	}
	else if (choice === 'shoot') {
		element.src='C:/Users/Kevin Guo/Documents/Guns/Gun.jpg';
	} else {
		element.src='C:/Users/Kevin Guo/Documents/Guns/shield.jpg';
	}
};

function reloading() {
    if (winner === null) {
	    element=document.getElementById("playerImage");
	    element.src="C:/Users/Kevin Guo/Documents/Guns/ammunition.jpg";
	    computerChoice = computerActions();
	    computerPicture(computerChoice);
	    if (computerChoice === 'shoot' && computer.bullets > 0) {
	        computerWinning();
    	}
    	player.reloads();
    	computerResult(computerChoice);
    }	
};

function blocking() {
	if (winner === null) {
		element=document.getElementById("playerImage");
		element.src="C:/Users/Kevin Guo/Documents/Guns/shield.jpg";
		computerChoice = computerActions();
		computerPicture(computerChoice);
		if (computerChoice === 'shoot' && computer.bullets >= 5) {
			computerWinning();
		}
		computerResult(computerChoice);
	}
};

function shooting() {
	if (winner === null) {
		element=document.getElementById("playerImage");
		element.src="C:/Users/Kevin Guo/Documents/Guns/Gun.jpg";
		computerChoice = computerActions();
		computerPicture(computerChoice);
		if (computerChoice === 'reload' && player.bullets > 0) {
			playerWinning();
		}
		else if (computerChoice === 'block' && player.bullets >=5) {
			playerWinning();
		}
		computerResult(computerChoice);
		player.shoot();
	}
};
function playerWinning() {
	winner = player;
	document.getElementById("winner").innerHTML="You Win!";
	playerWins+=1
	document.getElementById("playerwins").innerHTML=playerWins;
}
function computerWinning() {
	winner = computer;
	document.getElementById("winner").innerHTML="You Lose.";
	computerWins += 1;
	document.getElementById("computerwins").innerHTML = computerWins;
}
function reset() {
	player = new players();
	computer = new players();
	winner = null;
	document.getElementById("winner").innerHTML="";
	element1=document.getElementById("playerImage");
	element1.src="C:/Users/Kevin Guo/Documents/Guns/bond.jpg";
	element2=document.getElementById("computerImage");
	element2.src="C:/Users/Kevin Guo/Documents/Guns/bond.jpg";
}
