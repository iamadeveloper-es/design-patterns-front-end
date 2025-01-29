/**
 * ESCENARIO:
 * Estamos trabajando en una aplicación de creación y gestión de tareas como puede ser Trello o Jira.
 * En esta aplicación los usuarios pueden crear tarjetas personalizadas con diferentes configuraciones (color, fuente, etiquetas, ...)
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

class Test{

    static execute(){
        const taskCard = new TaskCard(
            'Maquetación menú', 
            'Realizar la maquetación del menú acorde al diseño adjunto',
            Priorities.high,
            BGColor.red,
            FontFamily.roboto)
        
        console.log('original: ',{taskCard})
        taskCard.display()

        taskCard.priority = Priorities.medium

        // 1. Copiando el objeto operador spread
        const taskCard2 = {...taskCard}
        // taskCard2.title = 'Otro título' -> no existe la propiedad 'title' ya que la definimos privada en nuestra clase
        console.log('spread: ',{taskCard2})
        
        // ERROR: La propiedad "display" no existe
        // taskCard2.display()

        // 2.Copiando el objeto con structuredClone
        const taskCard3 = structuredClone(taskCard)
        console.log('structuredClone: ', {taskCard3})
        
        // ERROR: taskCard3.display is not a function
        // taskCard3.display()

        // 3. Con JSON.stringify
        const taskCard4 = JSON.stringify(taskCard)
        const parsedTask = JSON.parse(taskCard4)
        console.log('JSON.stringify', parsedTask)
        
        // ERROR: parsedTask.display is not a function
        // parsedTask.display()
        
    }
}

Test.execute()