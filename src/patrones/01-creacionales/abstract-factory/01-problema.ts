/**
 * ESCENARIO:
 * Estamos desarrollando una aplicación web que necesita guardar datos del usuario (como preferencias o configuraciones). Dependiendo de los requisitos, podrías querer almacenar la información en LocalStorage, SessionStorage o Cookies.
 * 
 */

/**
 * PROBLEMA:
 * 1. Código acoplado a la lógica de negocio
 * 2. Poco mantenible
 * 3. Poco flexible a la hora de agregar nuevas posibles opciones
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

class ClientTest{

    static execute(){
        const localStorage = new LocalStorageHandler()
        localStorage.setItem('theme', 'dark')
        localStorage.getItem('theme')

        console.log('\n')

        const sessionStorage = new SessionStorageHandler()
        sessionStorage.setItem('Nombre', 'Antonio Márquez')
        sessionStorage.getItem('Nombre')

        console.log('\n')

        const cookies = new CookieStorageHandler()
        cookies.setItem('token', 'AH43258DS53F')
        cookies.getItem('token')
    }
}

ClientTest.execute()