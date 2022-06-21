    //khai biến id button
    var idButton1 = document.getElementById('ex1button').id;
    var idButton2 = document.getElementById('ex2button').id;
    var idButton3 = document.getElementById('ex3button').id;
    var idButton4 = document.getElementById('ex4button').id;
    var idButton5 = document.getElementById('ex5button').id;
    var idButton6 = document.getElementById('ex6button').id;
    var idButton7 = document.getElementById('ex7button').id;
    var idButton8 = document.getElementById('ex8button').id;
    var idButton9 = document.getElementById('ex9button').id;
    var idButton10 = document.getElementById('ex10button').id;
    //mãng id button
    var arrIdButton = [idButton1, idButton2, idButton3, idButton4, idButton5, idButton6, idButton7, idButton8, idButton9, idButton10];
   

    // khai biến id text
    var idText1 = document.getElementById('ex1text').id;
    var idText2 = document.getElementById('ex2text').id;
    var idText3 = document.getElementById('ex3text').id;
    var idText4 = document.getElementById('ex4text').id;
    var idText5 = document.getElementById('ex5text').id;
    var idText6 = document.getElementById('ex6text').id;
    var idText7 = document.getElementById('ex7text').id;
    var idText8 = document.getElementById('ex8text').id;
    var idText9 = document.getElementById('ex9text').id;
    var idText10 = document.getElementById('ex10text').id;
    //mãng id text
    var arrIdText = [idText1, idText2, idText3, idText4, idText5, idText6, idText7, idText8, idText9, idText10];
    
   
    //khai biến class button
    var classButton1 = document.getElementById('ex1button').classList;
    var classButton3 = document.getElementById('ex3button').classList;
    var classButton2 = document.getElementById('ex2button').classList;
    var classButton4 = document.getElementById('ex4button').classList;
    var classButton5 = document.getElementById('ex5button').classList;
    var classButton6 = document.getElementById('ex6button').classList;
    var classButton7 = document.getElementById('ex7button').classList;
    var classButton8 = document.getElementById('ex8button').classList;
    var classButton9 = document.getElementById('ex9button').classList;
    var classButton10 = document.getElementById('ex10button').classList;
    //mãng class button
    var arrClassButton = [classButton1, classButton2, classButton3, classButton4, classButton5, classButton6, classButton7, classButton8, classButton9, classButton10];

    //  // khai biến input người dùng nhập dữ liệu vào đề bài tập
    //  var parameterEx1;
    //  var parameterEx2;
    //  var parameterEx3;
    //  var parameterEx4;
    //  var parameterEx5;
    //  var parameterEx6;
    //  var parameterEx7;
    //  var parameterEx8;
    //  var parameterEx9;
    //  var parameterEx10;
    
    // // khai biến kết quả bài tập
    
    // var resultInnerHTMLEx1;
    // var resultInnerHTMLEx2;
    // var resultInnerHTMLEx3;
    // var resultInnerHTMLEx4;
    // var resultInnerHTMLEEx5;
    // var resultInnerHTMLEEx6;
    // var resultInnerHTMLEEx7;
    // var resultInnerHTMLEEx8;
    // var resultInnerHTMLEEx9;
    // var resultInnerHTMLEx10;
    // //mãng kết quả bài tập
    // var arrResultInnerHTMLEx;


    // hàm các bài tập
    function resultEx1(n) {
        var res1 = "";
        var res2;
        for (var k = 0; k < n; k += 10){
            res2 = k + 1;
            if (res2 < 10){
                for (var i = res2; i <= 10; i++){
                   if (i === 10){
                    res1 += "0" + i;
                   } else {
                    res1 += "0" + "0" + i + " ";
                   }
                }
            }else if (res2 < 100){
                for (var i = res2; i < res2 + 10 && i <= n; i++){
                    if (i === 100){
                        res1 += i;
                    }else{
                        res1 += "0" + i + " ";
                    }
                }
            } else {
                for (var i = res2; i < res2 + 10 && i <= n; i++){
                        res1 += i + " ";
                }
            }
            res1 += "<br />" ;
        } 
        // console.log(res1)
        return res1
    }

    function resultEx2(arr) {
        var arrPrime = ""
        for (var i = 0; i < arr.length; i++){
            var n = arr[i]
            if (n === 0 || n === 1){
                continue;
            }
            var x = false;
            for (var j = 2; j <= n / 2; j++){
                if (n % j === 0) {
                    x = true;
                }
            }
            if (x === true){
                continue;
            } 
            arrPrime += n + " "
        }
        // console.log(arrPrime)
        // arrPrime = 2,3,5,7, 13 la so ng to
        return arrPrime + " là các số nguyên tố";
    }

    function resultEx3(n) {
        var sum = 0;
        for (var i = 2; i <= n; i++) {
            sum += i;
        
        }
        var res = sum + 2*n
        // console.log(res)
        return "S =" + " " + res;
    }

    function resultEx4(n){
        var result = "";
        var sum = 0;
        var divisor = []
        for(var i = 0; i <= n; i++) {
            if ( n % i === 0){
                sum += 1;
                divisor.push(i)
            }
        }
        // console.log("số lượng ước số của", n, "là",sum, "số")
        result = result + "số lượng ước số của " + n + " là " + sum + " số" + ", đó là các số: " + divisor + "."
        return result;
    }

    function resultEx5(n){
        var result = "";
        var arr = "" + n // =>> ""1234
        var rever = ""
        for (var i = arr.length - 1; i >= 0; i--) {
            rever += arr.charAt(i)
        }
        var res = +rever
        // console.log(res)
        result = result + "Số đảo ngược là " + res
        return result;
    }

    function resultEx6(n) {
        var sum = 0;
        var limit = n;
        var x = 0;
        var result = ""
        for (var i = 1; i > 0 ; i++){
            sum += i;
            if (sum > limit){
                x = i - 1
                // console.log(x);
                result = result + "x = " + x
                // console.log(result);
                return result;
            }
        }
    }

    function resultEx7(n) {
        var result = "";
        for (var i = 1; i <= 10; i++){
            var core = n*i ;
            var res = n + "x" + i + "=" + core
            // console.log(res);
            result += res + "<br />"
        }
        // console.log(result);
        return result;
    }

    function resultEx8(arr){

        var result = "";
        var players = [ [], [], [], [] ];
        var player1 = "";
        var player2 = "";
        var player3 = "";
        var player4 = "";
    
        for (var i = 0; i < arr.length; i++){
            if (i % 4 === 0) {
                players[0].push(arr[i]);
                
            } else if (i % 4 === 1) {
                players[1].push(arr[i]);
                
            } else if (i % 4 === 2) {
                players[2].push(arr[i]);
                
            } else {
                players[3].push(arr[i]);
                
            }
        };
        player1 = players[0]
        player2 = players[1];
        player3 = players[2];
        player4 = players[3];
        result = result + "Player1 có các là bài là " + player1 + "<br />" + "Player2 có các là bài là " + player2 + "<br />" + "Player3 có các là bài là " + player3 + "<br />" + "Player4 có các là bài là " + player4 + "<br />"
    
        // console.log(result);
        return result;
    }

    function resultEx9(m, n) {
        var dog = 0;
        var result = "";
        for (var i = 1; i <= m; i++){
            dog++
            var chicken = m - dog; 
            var chickkenFeet = chicken * 2; 
            var dogFeet = dog * 4;
            var totalFeet = dogFeet + chickkenFeet    
            if (totalFeet === n) {
                // console.log(i, "con chó và", m - i, "con gà");
                var k = m - i
                result = result + i + " con chó và " + k + " con gà"
                // console.log(result);
                return result;
            }  
        }
    }

    function resultEx10(arr) {
        var angleHours = arr[0] * 30 + arr[1] * 0.5;
        var angleMins = arr[1] * 6;
        var result = "";
        var deviationAngle = angleHours - angleMins;
        // console.log(deviationAngle);
        result = result + "góc lệch giữa kim giờ và kim phút là " + Math.abs(deviationAngle) + " độ";
        return result;
    }

    //Hàm chọn bài tập
    function clickButton(e) {

        for (var i = 0; i < arrIdButton.length; i++) {
            document.getElementById(arrIdButton[i]).classList.remove("buttonActive");
        }

        e.target.classList.add('buttonActive');
    
        for (var i = 0; i < arrIdText.length; i++) {
            document.getElementById(arrIdText[i]).classList.remove("textActive");
        }

        var activeText = e.target.getAttribute("data-target");

        document.getElementById(activeText).classList.add("textActive")

        document.getElementById('result').innerHTML = " "
    }
    // Hàm Show kết quả
    function clickButtonResult(e){
        //khai báo biến cho bài tập 1:
        var parameterEx1 = +document.getElementById('inputNumberEx1').value;
        // console.log(parameterEx1);


        //khai báo biến cho bài tập 2:
        var textInputEx2 = document.getElementById('inputNumberEx2').value.replace(/\s/g, '');
        // console.log(textInputEx2)
        var tempEx2 = new Array();
        tempEx2 = textInputEx2.split(",");
        for (a in tempEx2 ) {
        tempEx2[a] = parseInt(tempEx2[a], 10);
        }
        var parameterEx2 = tempEx2;


        //khai báo biến cho bài tập 3:
        var parameterEx3 = +document.getElementById('inputNumberEx3').value;


        //khai báo biến cho bài tập 4:
        var parameterEx4 = +document.getElementById('inputNumberEx4').value;

        
        //khai báo biến cho bài tập 5:
        var parameterEx5 = +document.getElementById('inputNumberEx5').value;


        //khai báo biến cho bài tập 6:
        var parameterEx6 = +document.getElementById('inputNumberEx6').value;


        //khai báo biến cho bài tập 7:
        var parameterEx7 = +document.getElementById('inputNumberEx7').value;

        
        //khai báo biến cho bài tập 8:
        var textInputEx8 = document.getElementById('inputNumberEx8').value.replace(/\s/g, '');
        var tempEx8 = new Array();
        tempEx8 = textInputEx8.split(",");
        var parameterEx8 = tempEx8;
        

        //khai báo biến cho bài tập 9:
        var parameterEx9a = +document.getElementById('inputNumberEx9a').value;
        var parameterEx9b = +document.getElementById('inputNumberEx9b').value;


        //khai báo biến cho bài tập 10:
        var textInputEx10 = document.getElementById('inputNumberEx10').value.replace(/\s/g, '');
        var tempEx10 = new Array();
        tempEx10 = textInputEx10.split(":");
        var parameterEx10 = tempEx10;


        // khai biến kết quả bài tập
        var resultInnerHTMLEx1 = resultEx1(parameterEx1);
        var resultInnerHTMLEx2 = resultEx2(parameterEx2);
        var resultInnerHTMLEx3 = resultEx3(parameterEx3);
        var resultInnerHTMLEx4 = resultEx4 (parameterEx4);
        var resultInnerHTMLEEx5 = resultEx5(parameterEx5);
        var resultInnerHTMLEEx6 = resultEx6(parameterEx6);
        var resultInnerHTMLEEx7 = resultEx7(parameterEx7);
        var resultInnerHTMLEEx8 = resultEx8(parameterEx8);
        var resultInnerHTMLEEx9 = resultEx9(parameterEx9a, parameterEx9b);
        var resultInnerHTMLEx10 = resultEx10(parameterEx10);


        //mãng kết quả bài tập
        var arrResultInnerHTMLEx = [resultInnerHTMLEx1, resultInnerHTMLEx2, resultInnerHTMLEx3, resultInnerHTMLEx4, resultInnerHTMLEEx5, resultInnerHTMLEEx6, resultInnerHTMLEEx7, resultInnerHTMLEEx8, resultInnerHTMLEEx9, resultInnerHTMLEx10];

        // Hàm dò tìm kết quả tương ứng với button
        function findButtonActiving(e){
        
            for (var i = 0; i < arrIdButton.length; i++){
                
                if (arrClassButton[i].contains("buttonActive")) {
                    break;
                }
            }
            // console.log(i);
            document.getElementById('result').innerHTML = arrResultInnerHTMLEx[i];
        }
        findButtonActiving();
    }

    
