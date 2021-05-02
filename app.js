/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
alert("This special edition of this game is dedicated to my special bro ASHFAQUL MAJID");
alert("GAME RULES\n\n\t- The game has 2 players, playing in rounds\n\t- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score\n\t- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn\n\t- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn\n\t- The first player to reach the winning points on GLOBAL score wins the game.\n\nIf you want to see the rules again, just simply reload this page.\n\nBefore starting this game enter your goal score in the bottom 'Winning scorre' field and click on 'Roll Dice' button\n\n\n");

var scores, roundScore, activePlayer, gamePlaying;

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').src = 'start.png';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    document.getElementById('name-0').textContent = 'Ashfaq';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    /*document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
    
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');*/
}

init();


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
        
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        
}

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = "block";
        document.querySelector('#current-' + activePlayer).textContent = dice;
        diceDom.src = 'dice-' + dice + '.png';
    
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        
        }
        else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    document.querySelector('.dice').style.display = 'none';
    
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    var winningScore = document.querySelector('.winning-score').value;
    
    if (scores[activePlayer] >= winningScore)  {
        gamePlaying = false;
        document.querySelector('#name-' + activePlayer).textContent = "WINNER !";
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;
        roundScore = 0;
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
    }
    else {
        nextPlayer();
    }
});

document.querySelector('.btn-new').addEventListener('click', init);
document.querySelector('#current-' + activePlayer).textContent = dice;
