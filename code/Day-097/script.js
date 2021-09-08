isNaN()

https: //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

    Conditional(ternary) operator

https: //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator



    const app = function () {
        const game = {};
        const suits = ["spades", "hearts", "clubs", "diams"];
        const ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

        function init() {
            console.log('init ready');
            buildGameBoard();
            buildDeck();
        }

        function buildDeck() {
            game.deck = [];
            for (let i = 0; i < suits.length; i++) {
                for (let j = 0; j < ranks.length; j++) {
                    let card = {};
                    let tempValue = isNaN(ranks[j]) ? 10 : ranks[j];
                    tempValue = (ranks[j] == "A") ? 11 : tempValue;
                    card.suit = suits[i];
                    card.rank = ranks[j];
                    card.value = tempValue;
                    //console.log(suits[i],ranks[j],tempValue);
                    game.deck.push(card);
                }
            }
            console.log(game.deck);
        }

        function buildGameBoard() {
            game.main = document.querySelector('#game');
            console.log(game);
            game.scoreboard = document.createElement('div');
            game.scoreboard.textContent = "Dealer 0 vs Player 0";
            game.scoreboard.style.fontSize = "2em";
            game.main.append(game.scoreboard);
            game.table = document.createElement('div');
            game.dealer = document.createElement('div');
            game.dealerCards = document.createElement('div');
            game.dealerCards.textContent = "DEALER CARD";
            game.dealerScore = document.createElement('div');
            game.dealerScore.textContent = "-";
            game.dealerScore.classList.add('score');
            game.dealer.append(game.dealerScore);
            game.table.append(game.dealer);
            game.dealer.append(game.dealerCards);
            game.player = document.createElement('div');
            game.playerCards = document.createElement('div');
            game.playerCards.textContent = "PLAYER CARD";
            game.playerScore = document.createElement('div');
            game.playerScore.textContent = "-";
            game.playerScore.classList.add('score');
            game.player.append(game.playerScore);
            game.table.append(game.player);
            game.player.append(game.playerCards);
            game.dashboard = document.createElement('div');
            game.status = document.createElement('div');
            game.status.classList.add('message');
            game.status.textContent = "Message for Player";
            game.dashboard.append(game.status);
            game.btnDeal = document.createElement('button');
            game.btnDeal.textContent = "DEAL";
            game.btnDeal.classList.add('btn');
            game.dashboard.append(game.btnDeal);
            game.btnHit = document.createElement('button');
            game.btnHit.textContent = "HIT";
            game.btnHit.classList.add('btn');
            game.dashboard.append(game.btnHit);
            game.btnStand = document.createElement('button');
            game.btnStand.textContent = "STAND";
            game.btnStand.classList.add('btn');
            game.dashboard.append(game.btnStand);
            game.playerCash = document.createElement('div');
            game.playerCash.classList.add('message');
            game.playerCash.textContent = "Player Cash $100";
            game.dashboard.append(game.playerCash);
            game.inputBet = document.createElement('input');
            game.inputBet.setAttribute('type', 'number');
            game.inputBet.style.width = "4em";
            game.inputBet.style.fontSize = "1.4em";
            game.inputBet.style.marginTop = "1em";
            game.inputBet.value = 0;
            game.dashboard.append(game.inputBet);
            game.betButton = document.createElement('button');
            game.betButton.textContent = "Bet Amount";
            game.betButton.classList.add('btn');
            game.dashboard.append(game.betButton);
            game.table.append(game.dashboard);
            game.main.append(game.table);
        }
        return {
            init: init
        }
    }();