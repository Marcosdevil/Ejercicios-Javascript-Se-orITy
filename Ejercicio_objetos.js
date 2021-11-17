var suma = 0;
var curso = {
    'Alumnos' : [
        {
            'Nombre' : 'Juan',
            'Edad' : 18,
        },
        {
            'Nombre' : 'Esther',
            'Edad' : 48,            
        },
        {
            'Nombre' : 'Ernest',
            'Edad' : 24,
        },    
    ],
};

curso.Alumnos.forEach(edad => {
    suma += edad.Edad;
});

promedio = suma/curso.Alumnos.length;
console.log(promedio);