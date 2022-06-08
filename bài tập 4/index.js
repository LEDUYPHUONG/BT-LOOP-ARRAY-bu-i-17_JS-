function resultEx4(n){
    var sum = 0;
    for(var i = 0; i <= n; i++) {
        if ( n % i === 0){
            sum += 1;
        }
        
    }
    // console.log("số lượng ước số của", n, "là",sum, "số")
}

resultEx4(8);