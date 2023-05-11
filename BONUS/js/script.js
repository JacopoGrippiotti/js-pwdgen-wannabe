let triangoloScelto = prompt("inserisci il nome del tuo triangolo scegliendo tra Scaleno, Equilatero e Isoscele");

document.getElementById("tuoTriangolo").innerHTML = triangoloScelto;

let areaTriangoloScelto;


let lato;

let base;

let radiceDiTre;

if (triangoloScelto == "isoscele"){

   lato = prompt("definisci la lunghezza di uno qualunque dei lati del triangolo")

}else if (triangoloScelto == "equilatero"){ 

   lato = prompt("definisci la lunghezza di uno qualunque dei lati del triangolo")

}else if (triangoloScelto == "scaleno"){

   lato = prompt("inserisci la lunghezza della base del triangolo")
   
}

let altezza

if (triangoloScelto == "isoscele"){

  altezza = prompt("inserisci l'altezza relativa al lato scelto")

}else if (triangoloScelto == "scaleno"){
 
  altezza = prompt("inserisci l'altezza relativa alla base del tuo triangolo")

}

if (triangoloScelto == "isoscele"){

   areaTriangoloScelto = lato * altezza / 2

}else if (triangoloScelto = "equilatero"){
   
   radiceDiTre = Math.sqrt(3)



   areaTriangoloScelto = ((radiceDiTre / 4) * (lato ** 2))


}else if (triangoloScelto == "scaleno"){

areaTriangoloScelto = (lato * altezza) / 2

}








document.getElementById("area").innerHTML = areaTriangoloScelto






