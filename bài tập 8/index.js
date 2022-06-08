var cards = ["4K", "KH", "5C", "KA", "QH", "KD", "2H", "10S",
"AS", "7H", "9K", "10D"]

var players = [ [], [], [], [] ];
function resultEx8(arr){
    for (var i = 0; i < arr.length; i++){
        if (i % 4 === 0) {
            players[0].push(cards[i]);
            
        } else if (i % 4 === 1) {
            players[1].push(cards[i]);
            
        } else if (i % 4 === 2) {
            players[2].push(cards[i]);
            
        } else {
            players[3].push(cards[i]);
            
        }
    }
    // console.log(players);
}

resultEx8(cards);