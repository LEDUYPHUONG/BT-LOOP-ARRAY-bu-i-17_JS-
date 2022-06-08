function resultEx9(m, n) {
    var dog = 0;
    for (var i = 1; i <= m; i++){
        dog++
        var chicken = m - dog; 
        var chickkenFeet = chicken * 2; 
        var dogFeet = dog * 4;
        var totalFeet = dogFeet + chickkenFeet    
        if (totalFeet === n) {
            // console.log(i, "con chó và", m - i, "con gà");
        }  
    }
}
resultEx9(36, 100);