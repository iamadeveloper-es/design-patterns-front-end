/**
 * ESCENARIO:
 * En nuestra aplicación estamos usando fetch nativo para realizar las peticiones http.
 * Nos han pedido que desarrollemos unos *INTERCEPTORES para añadir las siguientes funcionalidades a las llamadas fetch:
 * 1. Manejo de autenticación con token
 * 2. Logs de peticiones
 * 3. Transformaciones de respuesta
 */

/**
 * *INTERCEPTORES: Son funciones o capas intermedias que se ejecutan antes de enviar la petición o antes de recibirla, los podemos comparar con los middlewares.
 */

/**
 * PROBLEMA:
 * Hemos tenido que tocar nuestra clase base HttpClient acoplando la lógica de los interceptors dentro de ella.
 * Pero... En nuestra aplicaciones podemos tener diferentes APIs que no necesiten llevar tokens o no necesiten tener logs implementados.
 * 
 * Alto acoplamiento (difícil agregar/quitar/cambiar funcionalidades)
 * 
 */


// 1.
// class HttpClient{

//     async request(url: string, options: RequestInit = {}): Promise<Response>{
//         console.log(`Llamada fetch a url: ${url}`)
//         return fetch(url, options)
//     }
// }


// 2.
class HttpClient{

    async request(url: string, options: RequestInit = {}): Promise<Response>{

        // Agregamos el manejo de autenticación con token
        options.headers = {
            ...options.headers,
            Authorization: `Bearer mi-token-secreto`,
        };
        console.log("Token agregado al header");

        // Agregamos los logs de las peticiones
        console.log(`Haciendo request a ${url} con opciones:`, options)

        console.log(`Llamada fetch a url: ${url}`)
        return fetch(url, options)
    }
}

class ClientTest{

    static async execute(){
        await new HttpClient().request('https://fakestoreapi.com/products/1')
    }
}

ClientTest.execute()