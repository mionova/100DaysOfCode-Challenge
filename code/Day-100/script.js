const app = function () {
    const game = {};
    const suits = ["spades", "hearts", "clubs", "diams"];
    //const ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    const score = [0, 0];
    const ranks = ["A", 10, 10, 10];

    function init() {
        /// console.log('init ready');
        game.cash = 100;
        game.bet = 0;
        buildGameBoard();
        turnOff(game.btnHit);
        turnOff(game.btnStand);
        buildDeck();
        addClicker();
        scoreBoard();
        updateCash();
    }

    function updateCash() {
        console.log(isNaN(game.inputBet.value));
        if (isNaN(game.inputBet.value) || game.inputBet.value.length < 1) {
            game.inputBet.value = 0;
        }
        if (game.inputBet.value > game.cash) {
            game.inputBet.value = game.cash;
        }
        game.bet = Number(game.inputBet.value);
        game.playerCash.textContent = "Player Cash $" + (game.cash - game.bet);
    }

    function lockWager(tog) {
        game.inputBet.disabled = tog;
        game.betButton.disabled = tog;
        if (tog) {
            game.betButton.style.backgroundColor = "#ddd";
            game.inputBet.style.backgroundColor = "#ddd";
        } else {
            game.betButton.style.backgroundColor = "#000";
            game.inputBet.style.backgroundColor = "#fff";
        }
    }

    function setBet() {
        game.status.textContent = "You bet $" + game.bet;
        game.cash = game.cash - game.bet;
        game.playerCash.textContent = "Player Cash $" + game.cash;
        lockWager(true);
    }

    function scoreBoard() {
        game.scoreboard.textContent = `Dealer ${score[0]} vs Player ${score[1]}`;
    }

    function addClicker() {
        game.btnDeal.addEventListener('click', deal);
        game.btnStand.addEventListener('click', playerStand);
        game.btnHit.addEventListener('click', nextCard);
        game.betButton.addEventListener('click', setBet);
        game.inputBet.addEventListener('change', updateCash);
    }

    function deal() {
        game.dealerHand = [];
        game.playerHand = [];
        game.dealerScore.textContent = "*";
        game.start = true;
        lockWager(true);
        turnOff(game.btnDeal);
        game.playerCards.innerHTML = "";
        game.dealerCards.innerHTML = "";
        takeCard(game.dealerHand, game.dealerCards, true);
        takeCard(game.dealerHand, game.dealerCards, false);
        takeCard(game.playerHand, game.playerCards, false);
        takeCard(game.playerHand, game.playerCards, false);
        updateCount();
    }

    function playerStand() {
        dealerPlay();
        turnOff(game.btnHit);
        turnOff(game.btnStand);
    }

    function nextCard() {
        takeCard(game.playerHand, game.playerCards, false);
        updateCount();
    }

    function findWinner() {
        let player = scorer(game.playerHand);
        let dealer = scorer(game.dealerHand);
        console.log(player, dealer);
        if (player > 21) {
            game.status.textContent = "You Busted with " + player + " ";
        }
        if (dealer > 21) {
            game.status.textContent = "Dealer Busted with " + dealer + " ";
        }
        //check winner
        if (player == dealer) {
            game.status.textContent = "Draw no winners " + player + " ";
            game.cash = game.cash + game.bet;
        } else if ((player < 22 && player > dealer) || dealer > 21) {
            game.status.textContent += "You Win with " + player + " ";
            game.cash = game.cash + (game.bet * 2);
            score[1]++;
        } else {
            game.status.textContent += "Dealer wins with " + dealer + " ";
            score[0]++;
        }
        if (game.cash < 1) {
            game.cash = 0;
            game.bet = 0;
        }
        //updateCash();
        scoreBoard();
        game.playerCash.textContent = "Player Cash $" + game.cash;
        lockWager(false);
        turnOff(game.btnHit);
        turnOff(game.btnStand);
        turnOn(game.btnDeal);
    }

    function dealerPlay() {
        let dealer = scorer(game.dealerHand);
        game.cardBack.style.display = "none";
        /// console.log(dealer);
        game.status.textContent = "Dealer score " + dealer + " ";
        if (dealer >= 17) {
            game.dealerScore.textContent = dealer;
            findWinner();
        } else {
            takeCard(game.dealerHand, game.dealerCards, false);
            game.dealerScore.textContent = dealer;
            dealerPlay();
        }
    }

    function updateCount() {
        let player = scorer(game.playerHand);
        let dealer = scorer(game.dealerHand);
        /// console.log(player, dealer);
        game.playerScore.textContent = player;
        if (player < 21) {
            turnOn(game.btnHit);
            turnOn(game.btnStand);
            game.status.textContent = "Stand or take another card";
        } else if (player > 21) {
            findWinner();
        } else {
            game.status.textContent = "Dealer in Play to 17 minimum";
            dealerPlay(dealer);
        }
        if (dealer == 21 && game.dealerHand.length == 2) {
            game.status.textContent = "Dealer Got BlackJack";
            gameEnd();
            findWinner();
        }
    }

    function scoreAce(val, aces) {
        if (val < 21) {
            return val;
        } else if (aces > 0) {
            aces--;
            val = val - 10;
            return scoreAce(val, aces);
        } else {
            return val;
        }
    }

    function scorer(hand) {
        let total = 0;
        let ace = 0;
        hand.forEach(function (card) {
            /// console.log(card);
            if (card.rank == "A") {
                ace++;
            }
            total = total + Number(card.value);
        })
        if (ace > 0 && total > 21) {
            total = scoreAce(total, ace);
        }
        if (total > 21) {
            gameEnd();
            return Number(total);
        }
        /// console.log(hand);
        return Number(total);
    }

    function gameEnd() {
        game.cardBack.style.display = "none";
        turnOff(game.btnHit);
        turnOff(game.btnStand);
        console.log('ended');
    }

    function takeCard(hand, ele, h) {
        if (game.deck.length == 0) {
            buildDeck();
        }
        let temp = game.deck.shift();
        /// console.log(temp);
        hand.push(temp);
        /// console.log(game);
        showCard(temp, ele);
        if (h) {
            game.cardBack = document.createElement('div');
            game.cardBack.classList.add('cardB');
            ele.append(game.cardBack);
        }
    }

    function showCard(card, el) {
        if (card != undefined) {
            //el.innerHTML = card.rank + "&" + card.suit + ";";
            el.style.backgroundColor = "white";
            let div = document.createElement("div");
            div.classList.add('card');
            if (card.suit === "hearts" || card.suit === "diams") {
                div.classList.add('red');
            }
            let span1 = document.createElement('div');
            span1.innerHTML = card.rank + "&" + card.suit + ";";
            span1.classList.add('tiny');
            div.appendChild(span1);
            let span2 = document.createElement('div');
            span2.innerHTML = card.rank;
            span2.classList.add('big');
            div.appendChild(span2);
            let span3 = document.createElement('div');
            span3.innerHTML = "&" + card.suit + ";";
            span3.classList.add('big');
            div.appendChild(span3);
            el.appendChild(div);
        }
    }

    function turnOff(btn) {
        btn.disabled = true;
        btn.style.backgroundColor = "#ddd";
    }

    function turnOn(btn) {
        btn.disabled = false;
        btn.style.backgroundColor = "#000";
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
                ///// console.log(suits[i],ranks[j],tempValue);
                game.deck.push(card);
            }
        }
        shuffle(game.deck);
        /// console.log(game.deck);
    }

    function shuffle(cards) {
        cards.sort(function () {
            return .5 - Math.random();
        })
        return cards;
    }

    function buildGameBoard() {
        game.main = document.querySelector('#game');
        /// console.log(game);
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