var boton = document.getElementById("enviar")
boton.addEventListener("click", jugar)

var arreglo = [
    {
        Nombre: "E s t u d i a r ",
        Longitud: 8
    },
    {
        Nombre: "C o m e r ",
        Longitud: 5
    },
    {
        Nombre: "D o r m i r ",
        Longitud: 6
    },
    {
        Nombre: "C e l u l a r ",
        Longitud: 7
    },
    {
        Nombre: "J a z z ",
        Longitud: 4
    },
    {
        Nombre: "T e r m i n a l ",
        Longitud: 7
    },
    {
        Nombre: "L e n o v o ",
        Longitud: 6
    },
    {
        Nombre: "S u p e r ",
        Longitud: 5
    },
    {
        Nombre: "S m a s h ",
        Longitud: 5
    },
    {
        Nombre: "E s c r i b i r ",
        Longitud: 8
    },
];

var l = 0;
var res = [];

var escoger = Math.floor(Math.random() * 10);
var lineas = arreglo[escoger].Longitud;

for (let i = 0; i < lineas; i++) {
    var crear = document.getElementById("area");
    crear.innerHTML += "_ ";
    
}

var palabra = arreglo[escoger].Nombre;

function jugar() {
    var letr = document.getElementById("letra");
    var letra = letr.value;
    if (palabra.toLowerCase().includes(letra.toLowerCase())) {
        res = palabra.split("");
        for (let j = 0; j < res.length; j++) {
             if (res[j].toLowerCase() == letra.toLowerCase()) {
                 crear.innerHTML = remove_character(crear.innerHTML,j);
                 if (palabra == crear.innerHTML) {
                    var figura = document.getElementById("ahorcado");
                    figura.innerHTML = "Ganaste!";
                 }
             }
            
        }
    } 
    else{
        l++;
        var figura = document.getElementById("ahorcado");
        if (l == 1) {
                figura.innerHTML = ` <br>
                +---+<br>
                 |     |<br>
                O    |<br>
                       |<br>
                       |<br>
                       |<br>
        =========<br>
                `;
        }
        if (l == 2) {
            var s = 'he\'s'
            figura.innerHTML = ` <br>
                +---+<br>
                 |     |<br>
                O    |<br>
                /|\\    |<br>
                       |<br>
                       |<br>
        =========<br>
            ` ;
        }
        if (l == 3) {
            figura.innerHTML = ` <br>
                +---+<br>
                 |     |<br>
                O    |<br>
                /|\\    |<br>
                / \\    |<br>
                       |<br>
        =========<br>
            ` ;
            boton.setAttribute("type", "hidden"); 
        }
    }
}

function remove_character(str, char_pos) 
 {
  res = palabra.split("");
  part1 = str.substring(0, char_pos);
  part2 = res[char_pos];
  part3 = str.substring(char_pos + 1, str.length);
  return (part1 + part2 + part3);
 }