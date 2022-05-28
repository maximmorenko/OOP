// объявление класса с помощью ключевого слова class
class Transformer {
    // объявление поля x (свойство)
    x;
    // объявление метода конструктора (сюда нам чуть ниже передадут 0)
    constructor(x){
        // инициализация поля x 
        // (переданный конструктору 0 превращается в свойство объекта)
        this.x = x
    }
	
    // объявление метода run
    run(){
        // обращение к собственному атрибуту через this
        this.x += 1
    }
}

// а теперь клиентский код:

// создаем новый экземпляр трансформера с начальной позицией 0
let optimus = new Transformer(0);

optimus.run() // приказываем Оптимусу бежать
console.log(optimus.x); // выведет 1
optimus.run() // приказывает Оптимусу еще раз бежать
console.log(optimus.x) // выведет 2

//1. this — это специальная локальная переменная (внутри методов), 
// которая позволяет объекту обращаться из своих методов к собственным атрибутам. 
// Обращаю внимание, что только к собственным, то бишь, 
// когда трансформер вызывает свой метод, либо меняет собственное состояние. 
// Если снаружи обращение будет выглядеть так: optimus.x, то изнутри, 
// если Оптимус захочет сам обратиться к своему полю x, 
// в его методе обращение будет звучать так: this.x, то есть "я (Оптимус) обращаюсь к своему атрибуту x"

// 2. constructor — это специальный метод, который автоматически вызывается при создании объекта. 
// Конструктор может принимать любые аргументы, как и любой другой метод. 
// В каждом языке конструктор обозначается своим именем. 
// Где-то это специально зарезервированные имена типа __construct или __init__, 
// а где-то имя конструктора должно совпадать с именем класса. 
// Назначение конструкторов — произвести первоначальную инициализацию объекта, заполнить нужные поля.

// 3. new — это ключевое слово, которое необходимо использовать для создания 
// нового экземпляра какого-либо класса. В этот момент создается объект и вызывается конструктор. 
// В нашем примере, конструктору передается 0 в качестве стартовой позиции 
// трансформера (это и есть вышеупомянутая инициализация). 
// Ключевое слово new в некоторых языках отсутствует, и конструктор вызывается 
// автоматически при попытке вызвать класс как функцию, например так: Transformer().

// 4. Методы constructor и run работают с внутренним состоянием, 
// а во всем остальном не отличаются от обычных функций. Даже синтаксис объявления совпадает.

// 5. Классы могут обладать методами, которым не нужно состояние и, 
// как следствие, создание объекта. В этом случае метод делают статическим.

// SRP

// (Single Responsibility Principle / Принцип единственной ответственности / Первый принцип SOLID). 
// С ним вы, наверняка, уже знакомы из других парадигм: «одна функция должна 
// выполнять только одно законченное действие». Этот принцип справедлив и для классов: 
// «Один класс должен отвечать за какую-то одну задачу». 
// К сожалению с классами сложнее определить грань, которую нужно пересечь, чтобы принцип нарушался.

// Существуют попытки формализовать данный принцип с помощью описания 
// назначения класса одним предложением без союзов, но это очень спорная методика, 
// поэтому доверьтесь своей интуиции и не бросайтесь в крайности. 
// Не нужно делать из класса швейцарский нож, но и плодить 
// миллион классов с одним методом внутри — тоже глупо.