const app = function () {
    const game = {};

    function init() {
        console.log('init ready');
        game.main = document.querySelector('#game');
        console.log(game);
        game.scoreboard = document.createElement('div');
        game.scoreboard.textContent = "Dealer 0 vs Player 0";
        game.scoreboard.style.fontSize = "2em";
        game.main.append(game.scoreboard);
    }
    return {
        init: init
    }
}();