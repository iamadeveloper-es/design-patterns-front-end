/**
 * ESCENARIO:
 * Para un E-commerce necesitamos hacer el desarrollo para que acepte diferentes modalidades de pago a través de diferentes APIs (PayPal, Stripe, Tarjeta bancaria)
 */

/**
 * PROBLEMA:
 * 1. El código está completamente acoplado
 * 2. La aplicación depende directamente de las APIs de pago (cualquier cambio supondrá un desastre)
 * 3. No facilita el mantenimiento
 * 4. No es escalable
 */



class PayPal{
    constructor(){}

    sendPayment(amount: number){
        console.log(`Pago de ${amount}$ realizado con PayPal`)
    }
}

class Stripe{
    constructor(){}

    makePayment(amount: number){
        console.log(`Pago de ${amount}$ realizado con Stripe`)
    }
}

class CreditCard{
    constructor(){}

    pay(amount: number){
        console.log(`Pago de ${amount}$ realizado con Tarjeta de Credito`)
    }
}


class ClientTest{

    static execute(){

        const payPalPayment = new PayPal()
        payPalPayment.sendPayment(104.98)

        const stripePayment = new Stripe()
        stripePayment.makePayment(98.74)

        const creditCardPayment = new CreditCard()
        creditCardPayment.pay(500.19)

    }
}

ClientTest.execute()