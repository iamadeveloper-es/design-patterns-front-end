/**
 * ESCENARIO:
 * En nuestra aplicación para hacer las llamadas a las APIs estámos haciendo uso de la librería axios. La implementación es la siguiente:
 */

/**
 * PROBLEMA:
 * Nos han pedido cambiar la librería axios por fetch nativo ya que el proyecto axios se ha abandonado y no va a recibir más actualizaciones.
 * Además, se han encontrado grandes vulnerabilidades de seguridad que ponen en riesgo a todos los usuarios.
 * 1. Alto acoplamiento de la librería axios
 * 2. Poco escalable
 */

// Simulación de librería axios
const axios = {
    mssg: 'Realizando petición de tipo:',
    getAxios: function(url: string) {
        console.log(`${this.mssg} GET a url ${url}`)
    },
    postAxios: function(url: string) {
        console.log(`${this.mssg} POST a url ${url}`)
    },
    deleteAxios: function(url: string) {
        console.log(`${this.mssg} DELETE a url ${url}`)
    },
}

class ProductService{

    static getpPoducts(){
        return axios.getAxios('/products')
    }
    static findOne(){
        return axios.getAxios('/products/10')
    }
    static create(){
        return axios.postAxios('/products')
    }
    static delete(){
        return axios.deleteAxios('/products/10')
    }
}

class UserService{

    static getUsers(){
        return axios.getAxios('/users')
    }
    static findOne(){
        return axios.getAxios('/users/10')
    }
    static create(){
        return axios.postAxios('/users')
    }
    static delete(){
        return axios.deleteAxios('/users/10')
    }
}

class Test{

    static execute(){
        ProductService.getpPoducts()
        ProductService.findOne()
        ProductService.create()
        ProductService.delete()

        UserService.getUsers()
        UserService.findOne()
        UserService.create()
        UserService.delete()
    }
}

Test.execute()