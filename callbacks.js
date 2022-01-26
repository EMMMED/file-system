
/**
 * Construir un muro
 * 
 * - Construir
 * - Aplanar
 * - Pintar
 */

 const muro = {
    construido: false,
    aplanado: false,
    pintado: false
  }
  
  function construir (unMuro, unaFuncion) {
    setTimeout(() => {
      unMuro.construido = true
      unaFuncion(null, unMuro)
    }, 2000)
  }
  
  function aplanar (unMuroConstruido) {
    unMuroConstruido.aplanado = true
    return unMuroConstruido
  }
  
  function pintar (unMuroAplanado) {
    unMuroAplanado.pintado = true
    return unMuroAplanado
  }
  
  construir({ ...muro }, (error, muroConstruido) => {
    console.log('muro construido', muroConstruido)
    console.log('error: ', error)
  
    pintar(muroConstruido)
  })