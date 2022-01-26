const fs = require('fs')

//Opcion 1

// function atTheEnd(error){
//     if(error){
//         console.log('Hubo un error al crear el archivo')
//         return
//     } 
//     console.log('El archivo se creo exitosamente')
// };

// fs.writeFile('hola.txt', 'Hola a todos desde el nuevo archivo con WriteFile', 'utf-8', atTheEnd)

//Opcopn 2

// fs.writeFile('hola.txt', 'Hola a todos desde el nuevo archivo', 'utf-8', (error) =>{
//     console.log('Se creo el archivo')
// })

//Unlink

// function deleteFile(error){
//     if(error){
//         console.log('Hubo un error al tratar de eliminar el archivo')
//         return
//     }
//     console.log('Se elimino el archivo exitosamente')
// }

// fs.unlink('hola.txt', deleteFile)

// Copiar archivos 

// Create Read Stream 

fs.createReadStream('hola.txt').pipe(fs.createWriteStream('hola_backup.txt'))

