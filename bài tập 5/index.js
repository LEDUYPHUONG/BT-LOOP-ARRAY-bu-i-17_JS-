function resultEx5(n){
    
    var arr = "" + n // =>> ""1234
    var rever = ""
    for (var i = arr.length - 1; i >= 0; i--) {
        rever += arr.charAt(i)
    }
    var res = +rever
    // console.log(res)
    
}

resultEx5(123456789)