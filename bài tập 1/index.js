function resultEx1(n) {
    var res1 = "";
    var res2;
    for (var k = 0; k < n; k += 10){
        res2 = k + 1;
        if (res2 < 10){
            for (var i = res2; i < res2 + 10; i++){
                res1 += i + " " + " " ;
            }
        }else {
            for (var i = res2; i < res2 + 10; i++){
                res1 += i +" ";
            }
        }
        res1 += "<br />" ;
    } 
    // console.log(res1)
    return res1
}
resultEx1(100);






// // cách khác
// function tableNumber(n) {
//     // debugger;
//     var row1 =[[], [], [], [], [], [], [], [], [], []];
//     var row2 =[[], [], [], [], [], [], [], [], [], []];
//     var row3 =[[], [], [], [], [], [], [], [], [], []];
//     var row4 =[[], [], [], [], [], [], [], [], [], []];
//     var row5 =[[], [], [], [], [], [], [], [], [], []];
//     var row6 =[[], [], [], [], [], [], [], [], [], []];
//     var row7 =[[], [], [], [], [], [], [], [], [], []];
//     var row8 =[[], [], [], [], [], [], [], [], [], []];
//     var row9 =[[], [], [], [], [], [], [], [], [], []];
//     var row10 =[[], [], [], [], [], [], [], [], [], []];

//     for (var i = 0; i < n; i++){
//         if(i < 10){
//             row1[i].push(i+1);
//         } else if (i < 20){
//             row2[i - 10].push(i+1);
//         } else if (i < 30){
//             row3[i - 20].push(i+1);
//         } else if (i < 40){
//             row4[i - 30].push(i+1);
//         } else if (i < 50){
//             row5[i - 40].push(i+1);
//         } else if (i < 60){
//             row6[i - 50].push(i+1);
//         } else if (i < 70){
//             row7[i - 60].push(i+1);
//         } else if (i < 80){
//             row8[i - 70].push(i+1);
//         } else if (i < 90){
//             row9[i - 80].push(i+1);
//         } else if (i < 100){
//             row10[i - 90].push(i+1);
//         } 
//     }

//     console.log(row1, row2, row3, row4, row5, row6, row7, row8, row9, row10 )
// }

// tableNumber(100)