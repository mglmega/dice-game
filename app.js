// global values
var activePlayer, score, roundScore, diceNumber, isNewGame;
// shoo
var diceDom = document.querySelector('.dice');
initGame();


// shoo shideh event listener
document.querySelector('.btn-roll').addEventListener('click', function(){
    if ( isNewGame ) {
        // 1-6 number
        diceNumber = Math.floor( Math.random() * 6 ) + 1;

        // zurag haruulah
        diceDom.style.display = "block";

        // buusan shoonii zurag solih
        diceDom.src  = "dice-" + diceNumber + '.png';

        // toglogchiin eeljiin onoog nemeh
        if( diceNumber !== 1 ){
            // current onoo ogoh
            roundScore += diceNumber;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
            switchToNextPlayer();
        }
    } else {
        alert('Game over');
    }
});



document.querySelector('.btn-hold').addEventListener('click',function(){
    if ( isNewGame ) {
        // eeljiin onoog undsen onoond ogoh
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer ).textContent = scores[activePlayer];
        
        if( scores[activePlayer] >= 100 ){
            isNewGame = false;

            document.getElementById('name-' + activePlayer).textContent = 'WINNER!!!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            diceDom.style.display = 'none';

            // document.querySelector('.btn-new').style.display = 'block';
            // document.querySelector('.btn-roll').style.display = 'none';
            // document.querySelector('.btn-hold').style.display = 'none';
        } else {
            switchToNextPlayer();
        }
    } else {
        alert('Game over');
    }
});


document.querySelector('.btn-new').addEventListener('click',initGame());


// eelj solih
function switchToNextPlayer() {
    // eelj solih
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;

    activePlayer  = activePlayer === 1 ? 0 : 1; 
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.toggle('active');

    diceDom.style.display = 'none';
}

function initGame() {
    isNewGame = true;
    activePlayer = 0;

    // scores
    scores = [0,0];

    // eeljiin onoo
    roundScore = 0;

    // shoonii utga
    diceNumber = Math.floor( Math.random() * 6 ) + 1;

    diceDom.style.display = 'none';

    document.getElementById('score-0').textContent = "0";
    document.getElementById('score-1').textContent = "0";

    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";

    // player name restart
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    // winner class 
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    // active  class
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    // document.querySelector('.btn-new').style.display = 'none';
    // document.querySelector('.btn-roll').style.display = 'block';
    // document.querySelector('.btn-hold').style.display = 'block';
}
// Warning: file_get_contents(): https:// wrapper is disabled in the server configuration by allow_url_fopen=0 in /home/bestpric/public_html/filemanager/config/config.php on line 49