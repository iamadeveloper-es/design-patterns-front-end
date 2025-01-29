/**
 * Abstract Factory es un patrón de diseño creacional que nos permite construir familias de objetos relacionados sin especificar las clases
 * concretas.
 * 
 */

/**
 * VENTAJAS: 
 * 1. Código encapsulado y centralizado en un único punto
 * 2. Fácil de escalar sin tocar la lógica de negocio
 * 3. Evita el acoplamiento
 */


interface Storage{
    setItem(key: string, value: string): void
    getItem(key: string): void
}

class LocalStorageHandler implements Storage{

    setItem(key: string, value: string): void {
        console.log(`Guardando ${key} con el valor ${value} en el localStorage...`)
    }
    getItem(key: string): void {
        console.log(`Recuperando ${key} del localStorage...`)
    }

}

class SessionStorageHandler implements Storage{

    setItem(key: string, value: string): void {
        console.log(`Guardando ${key} con el valor ${value} en el sessionStorage...`)
    }
    getItem(key: string): void {
        console.log(`Recuperando ${key} del sessionStorage...`)
    }

}

class CookieStorageHandler implements Storage{

    setItem(key: string, value: string): void {
        console.log(`Guardando ${key} con el valor ${value} en las cookies del navegador...`)
    }
    getItem(key: string): void {
        console.log(`Recuperando ${key} de las cookies del navegador...`)
    }

}

//Interface StorageFactory
interface StorageFactory{
    create(type: string): Storage
}
// Clase con el patrón Abstract Factory
class ClientStorageFactory implements StorageFactory{

    create(type: string): Storage {
        switch (type) {
            case 'localStorage':
                return new LocalStorageHandler();
            case 'sessionStorage':
                return new SessionStorageHandler();
            case 'cookie':
                return new CookieStorageHandler();
            default:
                throw new Error(`Tipo de almacenamiento no soportado: ${type}`);
        }
    }
    
}


class ClientTest{

    static execute(){
        const localStorage = new ClientStorageFactory().create('localStorage')
        localStorage.setItem('theme', 'dark')
        localStorage.getItem('theme')

        console.log('\n')

        const sessionStorage = new ClientStorageFactory().create('sessionStorage')
        sessionStorage.setItem('Nombre', 'Antonio Márquez')
        sessionStorage.getItem('Nombre')

        console.log('\n')

        const cookies = new ClientStorageFactory().create('cookie')
        cookies.setItem('token', 'AH43258DS53F')
        cookies.getItem('token')
    }
}

ClientTest.execute()
