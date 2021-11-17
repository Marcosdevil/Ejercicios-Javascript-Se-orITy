
var edad_al_uno = 0;
var edad_al_dos = 0;
var edad_al_tres = 0;
var tempo = 0;
var menor = 0;
var joven = 0;
var curso = {
    'Alumno1' : {
            'Nombre' : 'Juan',
            'Edad' : 18,
        },   
    'Alumno2' :   {
            'Nombre' : 'Esther',
            'Edad' : 48,
        },
    'Alumno3' :   {                
            'Nombre' : 'Ernest',
            'Edad' : 24,    
        },
};
var edad_al_uno = curso.Alumno1.Edad;
var edad_al_dos = curso.Alumno2.Edad;
var edad_al_tres = curso.Alumno3.Edad;

if (edad_al_uno < edad_al_dos) {
    tempo = edad_al_uno;
    joven = curso.Alumno1.Nombre
    ;
}else {
    tempo = edad_al_dos;
    joven = curso.Alumno2.Nombre;
};

if (tempo < edad_al_tres) {
    menor = tempo;
} else {
    menor = edad_al_tres;
    joven = curso.Alumno3.Nombre; 
};

console.log("La persona más joven del grupo es: " + menor + "y su nombre es: " + joven);


