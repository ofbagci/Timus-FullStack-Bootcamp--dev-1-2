// var dolap = ["Shirt", "Pant", "Tshirt"];

//                                  ----- 1. Soru -----

// let last = dolap.pop();
// console.log(last);
// console.log(dolap);

//                                  ----- 2. Soru -----

// let dltfirst = dolap.shift();
// let addfirst = dolap.unshift("Hat");
// console.log(dolap);

//                                  ----- 3. Soru -----

// let ctrl = Array.isArray(dolap);
// console.log(ctrl);

//                                  ----- 4. Soru -----
// -----------------------------------------------------------------------------
//                  --- I. indexOf() ile ---
// if(dolap.indexOf("Pant") !== -1){
//     console.log('Element found.');
// }else{
//     console.log('Element not found.');
// }
// -----------------------------------------------------------------------------
//                  --- II. includes() ile ---
// let control = dolap.includes("Pant");
// if(control === true){
//     console.log('Element found.');
// }else{
//     console.log('Element not found.');
// }
// -----------------------------------------------------------------------------
//                  --- III. find() ile ---
// let found = dolap.find((element) => element === "Pant");
// console.log(found);

//                                  ----- 5. Soru -----

// let sum = 0;
//  for(let i=0; i<dolap.length; i++){
//     let chars = dolap[i];
//     sum += chars.length;
// }
//     console.log(sum);

//                                  ----- 6. Soru -----
// -----------------------------------------------------------------------------
//                  --- I. forEach() ile ---
// let upperList = [];
// dolap.forEach(function (e){
//     upperList.push(e.toUpperCase())
// })
// console.log(upperList);
// -----------------------------------------------------------------------------
//                  --- II. map() ile ---
// let upperList = dolap.map(function(e) { return e.toUpperCase(); });
// console.log(upperList);
// -----------------------------------------------------------------------------
//                  --- III. Stringe çevirme sonra virgül ile ayırma ---
// var upperList = String.prototype.toUpperCase.apply(dolap).split(",");
// console.log(upperList);
// -----------------------------------------------------------------------------
//                                  ----- 7. Soru -----

// let obje = Object.assign({}, dolap);
// console.log(obje);

//                                  ----- 8. Soru -----

/*.slice() metotu parametre olarak başlangıç ve bitiş indeksi olmak üzere iki parametre alır. 
Başlangıç indeksinden başlayarak bitiş indeksine kadar olan bütün elemanları siler ve yeni bir array oluşturur. 
Bitiş indeksi ise silinen elemanlara dahil değildir. Ayrıca .slice() metotu original arrayi de değiştirmez.

Eğer tek bir değer parametre olarak yazılırsa bu başlangıç indeksi olarak kabul edilir 
ve o indeksten başlayarak dizinin geri kalanı silinir.*/

// console.log(numbers.slice(2)); // 2. indexten başlayarak sonraki elemanları siler.
// console.log(numbers.slice(2, 6)); // 2. indexten başlayarak 6.index dahil olmamak üzere aradaki elemanları siler.

/*.splice() metotu sonuç olarak yeni bir array döndürür ve iki parametre alır. 
Bunlardan birincisi başlangıç indeksi iken ikinci indeks silinecek eleman sayısını gösterir. 
Eğer parametre olarak tek bir sayı verilirse bu, o indeksten sonraki bütün elemanları silerek yeni bir array oluştur demektir. 
Eğer başlangıç indeksi pozitif bir sayıysa dizinin başından, eğer negatif bir sayıysa dizinin sonundan silmeye başlar.*/

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let deleted = numbers.splice(2, 3); // [3, 4, 5] silindi.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let deleted = numbers.splice(-3, 2);  // Burada dizinin sonundan 3 eleman geri gider ve 2 tane elemanı siler.


// ----------------------------------------------------------------------------------------------------------

// const arr = [1,2,3,4,5,6,7,7,6,10];

//                                  ----- 1. Soru -----

// function tekrarBul(arr) {
//     const tekilSayilar = new Set(arr);
// 	console.log(tekilSayilar)
 
//     const filtreSayilar = arr.filter(sayi => {
//         if (tekilSayilar.has(sayi)) {
//             tekilSayilar.delete(sayi);
//         } else {
//             return sayi;
//         }
//     });
 
//     return [...new Set(filtreSayilar)]
// }

// const tekrarEdenSayilar = tekrarBul(arr);
// console.log(tekrarEdenSayilar);

//                                  ----- 2. Soru -----
// -----------------------------------------------------------------------------
//                      --- I. Yöntem ---
// function removeDuplicates(arr){
//     console.log('remove')
//     uniqueArray = arr.filter(function(item, pos, self) {
//         return self.indexOf(item) == pos;
//     })
//     console.log(uniqueArray)
// }

// removeDuplicates(arr)
// -----------------------------------------------------------------------------
//                      --- II. Yöntem ---
// let removeDuplicates = new Set(arr)
// console.log(removeDuplicates)
// -----------------------------------------------------------------------------
//                                  ----- 3. Soru -----
// -----------------------------------------------------------------------------
//                      --- En Büyük I. Yöntem ---
// const max = arr.reduce((acc, cur) => {
//  return Math.max(acc, cur);
// });
// console.log(max)
// -----------------------------------------------------------------------------
//                      --- En Büyük II. Yöntem ---
// let max = Math.max(...arr);

// console.log(max);
// -----------------------------------------------------------------------------
//                      --- En Küçük I. Yöntem ---
// const min = arr.reduce((acc, cur) => {
//   return Math.min(acc, cur);
// });
// console.log(min);
// -----------------------------------------------------------------------------
//                      --- En Küçük II. Yöntem ---
// let min = Math.min(...arr);

// console.log(min);