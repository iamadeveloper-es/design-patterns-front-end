/**
 * ESCENARIO:
 * Tenemos un E-commerce y queremos implementar un sistema de pedidos. 
 * Cada pedido puede tener diferentes productos, estos pedidos no siempre tienen la misma configuración 
 * ya que por ejemplo algunos pueden tener descuentos, opciones para envolver para regalo, etc.
 */

/**
 * PROBLEMA:
 * 1. Constructor con demasiados parámetros. El código puede ser difícil de leer, de mantener y propenso a errores (orden incorrecto, valores nulos, etc.)
 * 2. No es escalable. Si necesitamos añadir más opciones, el constructor se vuelve aún más complejo.
 * 3. No es flexible. No podemos crear pedidos con diferentes configuraciones ya que no se puede construir el objeto de manera parcial.
 */


enum shippingType{
    STANDARD = 'Standard',
    EXPRESS = 'Express'
}

enum PaymentMethod {
    CARD = 'Tarjeta',
    TRANSFER = 'Transferencia'
}

class ProductItem{
    
    constructor(
        public name: string,
        public price: number,
        public quantity: number
    ){}
}

class Order{
    customerName: string;
    address: string;
    products: ProductItem[] = [];
    shippingMethod: string;
    paymentMethod: PaymentMethod;
    discountCode: string;
    isAGift: boolean;

    constructor(customerName: string, address: string, products: ProductItem[], shippingMethod: string, paymentMethod: PaymentMethod, discountCode: string, isAGift: boolean){
        this.customerName = customerName;
        this.address = address;
        this.products = products;
        this.shippingMethod = shippingMethod;
        this.paymentMethod = paymentMethod;
        this.discountCode = discountCode;
        this.isAGift = isAGift;
    }

    toString(): string{
        return `\n**************************
        \nPedido realizado
        \n* Nombre: ${this.customerName}
        \n* Dirección: ${this.address}
        \n* Productos ${this.products.map(p => p.name).join(', ')}
        \n* Método de envío: ${this.shippingMethod}
        \n* Método de pago: ${this.paymentMethod}
        ${this.discountCode ? `\n* Código de descuento : ${this.discountCode}` : ''}
        ${this.isAGift ? `\n* Este producto es para regalo` : ''}`;
    }
}

// Uso
class Test{
    static execute(){
        const order1 = new Order('María José', 'Alameda 123', [{name: 'Micrófono', price: 129.99, quantity: 2}], shippingType.EXPRESS, PaymentMethod.CARD, '10OFF', false);

        const order2 = new Order('Antonio López', 'Sector Islas 4, 7º A', [{name: 'Ratón', price: 49, quantity: 1}, {name: 'Teclado', price: 109, quantity: 1}], shippingType.STANDARD, PaymentMethod.TRANSFER, '', true);

        console.log(order1.toString());
        console.log(order2.toString());
    }
}

Test.execute();