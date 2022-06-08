    //khai biến
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
    // console.log(idButton1);

    var arrIdButton = [idButton1, idButton2, idButton3, idButton4, idButton5, idButton6, idButton7, idButton8, idButton9, idButton10];
    // console.log(arrIdButton);
    // console.log(arrIdButton[0]);

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
    // console.log(idButton1);

    var arrClassButton = [classButton1, classButton2, classButton3, classButton4, classButton5, classButton6, classButton7, classButton8, classButton9, classButton10];
    // console.log(arrIdButton);
    // console.log(arrIdButton[0]);

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
    // console.log(idButton1);

    var arrIdText = [idText1, idText2, idText3, idText4, idText5, idText6, idText7, idText8, idText9, idText10];
    // console.log(arrIdButton);
    // console.log(arrIdButton[0]);
    var resultInnerHTMLEx1 = resultEx1;
    var resultInnerHTMLEx2 = resultEx2;
    var resultInnerHTMLEx3 = resultEx3;
    var resultInnerHTMLEx4 = resultEx4;
    var resultInnerHTMLEEx5 = resultEx5;
    var resultInnerHTMLEEx6 = resultEx6;
    var resultInnerHTMLEEx7 = resultEx7;
    var resultInnerHTMLEEx8 = resultEx8;
    var resultInnerHTMLEEx9 = resultEx9;
    var resultInnerHTMLEx10 = resultEx10;
    // console.log(resultInnerHTMLEx1);

    var arrResultEx1InnerHTML = [resultInnerHTMLEx1, resultInnerHTMLEx2, resultInnerHTMLEx3, resultInnerHTMLEx4, resultInnerHTMLEEx5, resultInnerHTMLEEx6, resultInnerHTMLEEx7, resultInnerHTMLEEx8, resultInnerHTMLEEx9, resultInnerHTMLEx10];
    // console.log(arrResultEx1InnerHTML[0]);

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
}

function clickButtonResult(e){
    findButtonActiving();
}

function findButtonActiving(e){
    for (var i = 0; i < arrIdButton.length; i++){
        if (arrClassButton[i].classList === buttonActive){
            document.getElementById('result').innerHTML = arrResultEx1InnerHTML[i];
            return;
        } 
    }
}




