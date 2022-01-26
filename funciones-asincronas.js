const fs = require('fs')
/**
 * Usando funciones asicronas
 * 1. Crear un archivo hola.txt
 * 2. usar la funcion appendFile para agregar una segunda linea
 * 3. despues de 5 segundos eliminar el archivo (fs.unlink)
 */

function createFile () {
    fs.writeFile('async-text.txt', 'Texto desde una función asincrona', 'utf-8', (error) => {
        if(error){
            console.error('Error al crear el archivo')
            return
        }
        console.log('Se creo el archivo exitosamente')
        addLine()
        })
    }

function addLine () {
    fs.appendFile('async-text.txt', '\n agregando una segunda linea', (error) => {
        if(error) {
            console.error('Error al agregar la segunda linea')
            return
        }
        console.log('Se agrego la segunda linea con éxito')
        byebyeText()
    })
}

function byebyeText () {
    setTimeout( () => {
        fs.unlink('async-text.txt', (error) => {
            if (error) {
                console.error('Error al eliminar el archivo');
                return
            }
            console.log('Se elimino el archivo correctamente')
        })
    }, 5000)
}

createFile()