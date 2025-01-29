/**
 * Adapter es un patrón de diseño estructural que permite la colaboración entre objetos con interfaces incompatibles.
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

interface Payment{
    pay(amount: number): void
}

// Adaptadores
class PayPalAdapter implements Payment{
    paypal: PayPal
    constructor(){
        this.paypal = new PayPal()
    }

    pay(amount: number){
        this.paypal.sendPayment(amount)
    }
}

class StripeAdapter implements Payment{
    stripe: Stripe
    constructor(){
        this.stripe = new Stripe()
    }

    pay(amount: number){
        this.stripe.makePayment(amount)
    }
}

class CreditCardAdapter implements Payment{
    creditCard: CreditCard
    constructor(){
        this.creditCard = new CreditCard()
    }

    pay(amount: number){
        this.creditCard.pay(amount)
    }
}

// Clase que usa los adaptadores sin preocuparse por el API específica
class ProcessPayment{
    paymentAdapter: Payment

    constructor(paymentAdapter: Payment){
        this.paymentAdapter = paymentAdapter
    }

    process(amount: number){
        this.paymentAdapter.pay(amount)
    }
}

class Test{

    static execute(){

        const payPalPayment = new ProcessPayment(new PayPalAdapter())
        payPalPayment.process(104.98)

        const stripePayment = new ProcessPayment(new StripeAdapter())
        stripePayment.process(98.74)

        const creditCardPayment = new ProcessPayment(new CreditCardAdapter())
        creditCardPayment.process(500.19)

    }
}

Test.execute()