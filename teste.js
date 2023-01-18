// async function f(A, B) {

//   const X = Math.random()
// //   console.log('Valor de x: ' + X)

//   if (X >= 0.5) {

// 	A.push(f, X)

//   } else {

// 	B.push(f, X)

//   }
//   return new Promise(resolve => {
//     console.log('A promise ' + X)
// 	setTimeout(() => resolve(X), 500)

//   })

// }

// list = [[f, 100], [f, 0],[f, 5000]];
// A = []
// B= []
// C = []
// function main(minimum, callbackDelayPairs){
    
//     if (minimum < 1) {
//         console.log('Minimun nao pode ser um numero negativo');
//         return 0;
//     }
//     tam = callbackDelayPairs.length;
//     // console.log(tam)
//     // let aux = 0
//     for (let i = 0; i < tam; i++) {
//         aux = callbackDelayPairs[i].length
//         list = callbackDelayPairs[i]
//         // console.log('VALOR DE AUX' + aux)
//         for (let j = 0; j < aux; j++) {
//             // C.push (list[0](A,B))
//             list[0](A,B)
//             if (C != null) {
//                 console.log('Await: ' + list[1])
//             }
//             // console.log(list[0](A,B));
//         }
        
//     }

//     console.log('Valor C:' + C)
//     // await f(minimum,callbackDelayPairs);

// }

// main(3,list)
 
