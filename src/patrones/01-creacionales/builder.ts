/**
 * Builder es un patrón de diseño creacional que nos permite construir objetos complejos paso a paso.
 * 
 * Problema:
 * Tenemos un E-commerce y queremos implementar un sistema de pedidos. Cada pedido puede tener diferentes productos, 
 * estos productos no siempre tienen la misma configuración ya que por ejemplo algunos pueden tener descuentos, opciones para envolver para regalo, etc.
 */

enum shippingType{
    STANDARD = 'Standard',
    EXPRESS = 'Express'
}

enum PaymentMethod {
    CARD = 'Tarjeta',
    TRANSFER = 'Transferencia'
}

interface ProductItem{
    name: string;
    price: number;
    quantity: number;
}

// Clase principal
class Order{
    customerName: string = '';
    address: string = '';
    products: ProductItem[] = [];
    shippingMethod: shippingType = shippingType.STANDARD;
    paymentMethod: PaymentMethod = PaymentMethod.CARD;
    discountCode: string = '';
    isAGift: boolean = false;

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

interface OrderBuilder{
    setCustomerName(name: string): OrderBuilder;
    setAddress(address: string): OrderBuilder;
    addProduct(product: ProductItem): OrderBuilder;
    setShippingMethod(method: string): OrderBuilder;
    setPaymentMethod(method: PaymentMethod): OrderBuilder;
    setDiscountCode(code: string): OrderBuilder;
    setGiftOption(isAGift: boolean): OrderBuilder;
    build(): Order;
}

class OrderBuilderImpl implements OrderBuilder{

    constructor(private order: Order = new Order()){}

    setCustomerName(name: string): OrderBuilder {
        this.order.customerName = name;
        return this;
    }

    setAddress(address: string): OrderBuilder {
        this.order.address = address;
        return this;
    }

    addProduct(product: ProductItem): OrderBuilder {
        this.order.products.push(product);
        return this;
    }

    setShippingMethod(method: shippingType): OrderBuilder {
        this.order.shippingMethod = method;
        return this;
    }

    setPaymentMethod(method: PaymentMethod): OrderBuilder {
        this.order.paymentMethod = method;
        return this;
    }

    setDiscountCode(code: string): OrderBuilder {
        this.order.discountCode = code;
        return this;
    }

    setGiftOption(isAGift: boolean): OrderBuilder {
        this.order.isAGift = isAGift;
        return this;
    }

    build(): Order {
        return this.order;
    }
}

// Uso
class BuilderTest{
    static execute(){
        const order1 = new OrderBuilderImpl()
        .setCustomerName('María José')
        .setAddress('Alameda 123')
        .addProduct({name: 'Micrófono', price: 129.99, quantity: 2})
        .setShippingMethod(shippingType.EXPRESS)
        .setPaymentMethod(PaymentMethod.CARD)
        .setDiscountCode('10OFF')
        .build();

        const order2 = new OrderBuilderImpl()
        .setCustomerName('Antonio López')
        .setAddress('Sector Islas 4, 7º A')
        .addProduct({name: 'Ratón', price: 49, quantity: 1})
        .addProduct({name: 'Teclado', price: 109, quantity: 1})
        .setShippingMethod(shippingType.STANDARD)
        .setPaymentMethod(PaymentMethod.TRANSFER)
        .setGiftOption(true)
        .build();

        console.log(order1.toString());
        console.log(order2.toString());
    }
}

BuilderTest.execute();


