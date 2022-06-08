function resultEx6() {
    var sum = 0;
    var limit = 50;
    for (var i = 1; i > 0 ; i++){
        sum += i;
        if (sum > limit){
            // console.log(i-1);
            return
        }
    }
}
resultEx6();
