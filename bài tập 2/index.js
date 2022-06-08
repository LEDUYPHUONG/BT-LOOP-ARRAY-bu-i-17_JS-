function resultEx2(arr) {
    for (var i = 0; i < arr.length; i++){
        var n = arr[i]
        function testPrime(n){
            if (n === 0 || n === 1){
                return false;
            }
            for (var i = 2; i <= n / 2 ; i++){
                if (n % i === 0){
                    return false;
                }
            }
            // console.log(n, "là số nguyên tố");
            return true;
        }
        testPrime(n)
    }


}

resultEx2([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -3])
