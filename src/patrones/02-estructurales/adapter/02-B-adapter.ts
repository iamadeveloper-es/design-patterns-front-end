/**
 * Adapter es un patrón de diseño estructural que permite la colaboración entre objetos con interfaces incompatibles.
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

// Clase adaptadora o envoltorio
// Mientras los métodos que exponen se llamen igual todo funcionará de la misma manera
// Además sigue el principio S.O.L.I.D Abierto/Cerrado - Abierto para la extensión pero cerrado a la modificación
class HttpClientAdapter {

    static get(url: string){
        return axios.getAxios(url)
    }

    static post(url: string){
        return axios.postAxios(url)
    }

    static delete(url: string){
        return axios.deleteAxios(url)
    }
}

class ProductService{


    static getpPoducts(){
        return HttpClientAdapter.get('/products')
    }
    static findOne(){
        return HttpClientAdapter.get('/products/10')
    }
    static create(){
        return HttpClientAdapter.post('/products')
    }
    static delete(){
        return HttpClientAdapter.delete('/products/10')
    }
}

class UserService{

    static getUsers(){
        return HttpClientAdapter.get('/users')
    }
    static findOne(){
        return HttpClientAdapter.get('/users/10')
    }
    static create(){
        return HttpClientAdapter.post('/users')
    }
    static delete(){
        return HttpClientAdapter.delete('/users/10')
    }
}

class ClientTest{

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

ClientTest.execute()