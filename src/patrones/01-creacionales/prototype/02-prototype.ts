/**
 * Prototype es un patrón de diseño creacional que nos permite crear copias exactas de un objeto existente
 */

enum BGColor {
    red = '#fa484800',
    blue = '#4882fa00',
    lightGreen = '#00e9c5',
    pink = '#e2017b'
}

enum FontFamily {
    arial = 'Arial',
    roboto = 'Roboto'
}

enum Priorities {
    low = 'Baja',
    medium = 'Media',
    high = 'Alta'
}

class TaskCard{
    private title: string
    private description: string
    public priority: Priorities
    public bgColor: BGColor
    public fontFamily: FontFamily

    constructor(title: string, description: string, priorities?: Priorities, bgColor?: BGColor, fontFamily?: FontFamily){
        this.title = title,
        this.description = description,
        this.priority = priorities ? priorities : Priorities.low
        this.bgColor = bgColor ? bgColor : BGColor.blue,
        this.fontFamily = fontFamily ? fontFamily : FontFamily.arial
    }

    clone(): TaskCard{
        return new TaskCard(this.title, this.description, this.priority, this.bgColor, this.fontFamily)
    }

    display(){
        console.log(`
            Título: ${this.title}
            Descripción: ${this.description}
            Prioridad: ${this.priority}
            Color Fondo: ${this.bgColor}
            FontFamily: ${this.fontFamily}
        `)
    }
}


// Uso
class Test{

    static execute(){
        const taskCard = new TaskCard(
            'Maquetación menú', 
            'Realizar la maquetación del menú acorde al diseño adjunto',
            Priorities.high,
            BGColor.red,
            FontFamily.roboto)

        taskCard.priority = Priorities.medium

        console.log('original: ',{taskCard})
        taskCard.display()
        
        // Copia exacta
        const taskCard2 = taskCard.clone()
        taskCard2.priority = Priorities.high
        taskCard2.bgColor = BGColor.lightGreen
        taskCard2.fontFamily = FontFamily.arial
        console.log('Copia: ', taskCard2)

        taskCard2.display()
        
    }
}

Test.execute()