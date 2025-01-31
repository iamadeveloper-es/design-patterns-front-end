/**
 * Decorator es un patrón de diseño estructural que permite añadir funcionalidades a un objeto de manera dinámica, sin modificar su estructura original.
 */

/**
 * VENTAJAS: 
 * 1. Los decoradores añaden funcionalidad sin modificar la clase principal
 * 2. Construcción muy flexible y modular
 * 3. Código escalable y mantenible
 */

interface BaseApiCall{
    request(url: string, options?: RequestInit): Promise<Response>
}


class HttpClient implements BaseApiCall{

    async request(url: string, options: RequestInit = {}): Promise<Response>{
        console.log(`Llamada fetch a url: ${url}`)
        return fetch(url, options)
    }
}

// Decorador base
class HttpClientDecorator implements BaseApiCall{

    constructor(protected httpClient: BaseApiCall){}

    request(url: string, options?: RequestInit): Promise<Response> {
        return this.httpClient.request(url, options)
    }
}

// Decorador para agregar Token
class AuthInterceptor extends HttpClientDecorator{

    request(url: string, options: RequestInit = {}): Promise<Response> {
        options.headers = {
            ...options.headers,
            Authorization: `Bearer mi-token-secreto`,
        };

        console.log("Token agregado al header");

        return super.request(url, options)
    }
}

// Decorador para agregar Logs
class LogInterceptor extends HttpClientDecorator{

    request(url: string, options: RequestInit = {}): Promise<Response> {
        console.log(`Haciendo request a ${url} con opciones:`, options)

        return super.request(url, options)
    }
}

// Uso
class ClientTest{

    static async execute(){

        console.log('\n******Llamada con el interceptor del Token e interceptor de Logs:\n')
        await new HttpClientDecorator(
            new AuthInterceptor(
                new LogInterceptor(
                    new HttpClient()
                )
            )
        ).request('https://fakestoreapi.com/products/1')

        console.log('\n******Llamada solo con el interceptor del Token:\n')

        // Solo necesitamos mandar el Token
        await new HttpClientDecorator(
            new AuthInterceptor(
                new HttpClient()
            )
        ).request('https://fakestoreapi.com/products/1')

        console.log('\n******Llamada solo usando fetch sin interceptores\n')
        // Solo necesitamos hacer el fetch (porque llamamos a otro API)
        await new HttpClientDecorator(
            new HttpClient()
        ).request('https://fakestoreapi.com/products/1')
    }
}

ClientTest.execute()