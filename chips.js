//const x = ['w','b'];
//var y = x[Math.floor(Math.random() * x.length)];
//var arr = [];
//arr.push(y);
//console.log(arr);

//var x = 6;
//var arr = [];
//for(i =1;i <= x; i++){
   // var y =['W','B'];
  //  var z = y[Math.floor(Math.random() * y.length)]
   // arr.push(z);
//}

//console.log(arr);

//const cunt = arr.slice(-3)[0];
//console.log(cunt);
//var x = 3

//var cunt = [2,3,4,5,6,7,8,9];
//console.log(cunt.slice((cunt.length -1) - 3));

// var x = 6;
// var arr = [];
// for(i =1;i <= x; i++){
//     var y =['W','B'];
//     var z = y[Math.floor(Math.random() * y.length)]
//     arr.push(z);
// }

// console.log(arr);
// for(i = 1; i <= arr.length; i++){
// if(arr[i] == 'W'){
//         if(arr[i + 1] == 'W' && arr[i - 1] == 'W'){
//          console.log("SOME");
//         } else if(arr[i + 1] == 'W' && arr[i - 1] == 'B'){
//             console.log("CUNT");
//         } else if(arr[i + 1] == 'B' && arr[i - 1] == 'B'){
//             console.log("Bitch");
//         } else if(arr[i + 1] == 'B' && arr[i = 1] == 'W'){
//             console.log("Thanks")
//         }
// }
// else if(arr[i] == 'B'){
//         if(arr[i + 1] == 'W' && arr[i - 1] == 'W'){
//          console.log("SOMEe");
//         } else if(arr[i + 1] == 'W' && arr[i - 1] == 'B'){
//             console.log("CUNTe");
//         } else if(arr[i + 1] == 'B' && arr[i - 1] == 'B'){
//             console.log("Bitche");
//         } else if(arr[i + 1] == 'B' && arr[i = 1] == 'W'){
//             console.log("Thankse");
//         }
// }


//for(i = 0; i <= arr.length; i++){
//if(arr[i] == 'W'){
    //if(arr[i + 1] == 'W' && arr[i - 1] == 'W'){
     //console.log("SOME");
    //} else if(arr[i + 1] == 'W' && arr[i - 1] == 'B'){
       // console.log("CUNT");
        // } else if(arr[i + 1] == 'B' && arr[i - 1] == 'B'){
        //console.log("Bitch");
    //}
//}
//else if(arr[i] == 'B'){
 //   if(arr[i + 1] == 'W' && arr[i - 1] == 'W'){
   //  console.log("SOMEe");
    //} else if(arr[i + 1] == 'W' && arr[i - 1] == 'B'){
      //  console.log("CUNTe");
    //} else if(arr[i + 1] == 'B' && arr[i - 1] == 'B'){
      //  console.log("Bitche");
    //}
//};
// };

var x = 6;
var arr = [];
for(i =1;i <= x; i++){
    var y =['W','B'];
    var z = y[Math.floor(Math.random() * y.length)]
    arr.push(z);
}
console.log(arr);
var car = [];
for(l = 0; l <= 3; l++){
if(arr[0] == 'W'){
    if(arr[1] == 'W' && arr.slice(-1)[0] == 'W'){
        car.push('W');
    }
    else if(arr[1] == 'W' && arr.slice(-1)[0] == 'B'){
        car.push('W');
    } else if(arr[1] == 'B' && arr.slice(-1)[0] == 'B'){
        car.push('B');
    } else  if(arr[1] == 'B' && arr.slice(-1)[0] == 'W'){
        car.push('W');
    }
} else if(arr[0] == 'B'){
    if(arr[1] == 'W' && arr.slice(-1)[0] == 'W'){
        car.push('W');
    }
    else if(arr[1] == 'W' && arr.slice(-1)[0] == 'B'){
        car.push('B');
    } else if(arr[1] == 'B' && arr.slice(-1)[0] == 'B'){
        car.push('B');
    } else  if(arr[1] == 'B' && arr.slice(-1)[0] == 'W'){
        car.push('B')
    }
} 
for(i = 1; i < arr.length - 1; i++){
if(arr[i] == 'W'){
    if(arr[i + 1] == 'W' && arr[i - 1] == 'W'){
        car.push("W");
    } else if(arr[i + 1] == 'W' && arr[i - 1] == 'B'){
         car.push("W");
    } else if(arr[i + 1] == 'B' && arr[i - 1] == 'W'){
         car.push("W");
    } else if(arr[i + 1] == 'B' && arr[i - 1] == 'B'){
         car.push("B");
    }
} else if(arr[i] == 'B'){
    if(arr[i + 1] == 'W' && arr[i - 1] == 'W'){
         car.push("W");
    } else if(arr[i + 1] == 'W' && arr[i - 1] == 'B'){
         car.push("B");
    } else if(arr[i + 1] == 'B' && arr[i - 1] == 'W'){
         car.push("B");
    } else if(arr[i + 1] == 'B' && arr[i - 1] == 'B'){
         car.push("B");
    }
}
}

if(arr.slice(-1)[0] == 'W'){
    if(arr[0] == 'W' && arr[arr.length - 2] == 'W'){
         car.push('W')
    }
    else if(arr[0] == 'W' && arr[arr.length - 2] == 'B'){
         car.push('W')
    } else if(arr[0] == 'B' && arr[arr.length - 2] == 'B'){
         car.push('B')
    } else  if(arr[0] == 'B' && arr[arr.length - 2] == 'W'){
         car.push('W')
    }
    
} else if(arr.slice(-1)[0] == 'B'){
    if(arr[0] == 'W' && arr[arr.length - 2] == 'W'){
         car.push('W')
    }
    else if(arr[0] == 'W' && arr[arr.length - 2] == 'B'){
         car.push('B')
    } else if(arr[0] == 'B' && arr[arr.length - 2] == 'B'){
         car.push('B')
    } else  if(arr[0] == 'B' && arr[arr.length - 2] == 'W'){
         car.push('B')
    }
    
};
};

console.log(car);
console.log(car.slice((car.length -1) - (x - 1)));

