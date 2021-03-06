// Наследование

// Наследование — это механизм системы, который позволяет, как бы парадоксально это не звучало, 
// наследовать одними классами свойства и поведение других классов для дальнейшего расширения или модификации

// ООП позволяет нам путем разделения логики на сходства и различия с последующим 
// выносом сходств в родительский класс, а различий в классы-потомки.

// Оптимус Прайм и Мегатрон — оба трансформеры, но один является автоботом, а второй десептиконом. 
// Допустим, что различия между автоботами и десептиконами будут заключаться только в том, 
// что автоботы трансформируются в автомобили, а десептиконы — в авиацию. 
// Все остальные свойства и поведение не будут иметь никакой разницы. 
// В таком случае можно спроектировать систему наследования так: 
// общие черты (бег, стрельба) будут описаны в базовом классе «Трансформер», 
// а различия (трансформация) в двух дочерних классах «Автобот» и «Десептикон».

class Transformer { // базовый класс
    run(){
        // код, отвечающий за бег
    }
    fire(){
        // код, отвечающий за стрельбу
    }
}

class Autobot extends Transformer { // дочерний класс, наследование от Transformer
    transform(){
        // код, отвечающий за трансформацию в автомобиль
    }
}

class Decepticon extends Transformer { // дочерний класс, наследование от Transformer
    transform(){
        // код, отвечающий за трансформацию в самолет
    }
}

optimus = new Autobot()
megatron = new Decepticon()

//=============================================================================
//пример 2 

class Block {
    //создаем функцию конструктор, которая заполнится когда создастся объект на основе этого класса
    constructor (c, a, d) {
        //для того чтобы обратиться внутри конструктора к самому классу используем this
        this.cssClassColor = c; //color - имя свойства, которое будем заполнять
        this.message = a;
        this.classBlock = d;
    }
    //добавим в класс метод действия 
    showBlock () {
       document.querySelector(this.classBlock).innerHTML = `<p class='${this.cssClassColor}'>${this.message}</p>`;
       // чтобы метод заработал его нужно вызвать
    }
}
// создаем объект c данными
let myAlert = new Block('blue', 'Я главный класс', '.test');
console.log(myAlert);
//вызываем метод класса у объекта:
myAlert.showBlock();

// преимущество классов в том что можно добавить еще елементы не ламая исходный код
// используем наследование класса
// для этого нужно создать новый класс
// создадим класс блок2 который будет расширять возможности блока1
class Block2 extends Block {
    // чтобы получить возможности кода из класса "Блок"
    // нужно вызвать конструктор родителя с помощью "супер" в своем конструкторе
    constructor (c, a, d, icon) {
        super(c, a, d);
        this.icon = icon;
    }
    showIcon () {
       document.querySelector(this.classBlock).innerHTML = `<p class='${this.cssClassColor}'>${this.message}<span class="material-icons">
       ${this.icon}
       </span></p>`;
       // чтобы метод заработал его нужно вызвать
    }

}
let myAlert2 = new Block2('red', 'Я класс потомок', '.test2', 'help');
myAlert2.showIcon();
//======================================================================================================

//вернемся к трансформерам

// Перегрузка

// Если же в классе-потомке переопределить уже существующий метод в классе-родителе, 
// то сработает перегрузка. Это позволяет не дополнять поведение родительского класса, 
// а модифицировать. В момент вызова метода или обращения к полю объекта, 
// поиск атрибута происходит от потомка к самому корню — родителю. 
// То есть, если у автобота вызвать метод fire(), сначала поиск метода производится в классе-потомке — Autobot, 
// а поскольку его там нет, поиск поднимается на ступень выше — в класс Transformer, 
// где и будет обнаружен и вызван. 
// Следует отметить, что модификация нарушает LSP из набора принципов SOLID, 
// но мы рассматриваем только техническую возможность.

// Неуместное применение

// Любопытно, что чрезмерно глубокая иерархия наследования может привести к обратному 
// эффекту — усложнению при попытке разобраться, кто от кого наследуется, 
// и какой метод в каком случае вызывается. 
// К тому же, не все архитектурные требования можно реализовать с помощью наследования. 
// Поэтому применять наследование следует без фанатизма. 
// Существуют рекомендации, призывающие предпочитать композицию наследованию там, 
// где это уместно.


// Как при описании отношений двух сущностей определить, 
// когда уместно наследование, а когда — композиция? 
// Можно воспользоваться популярной шпаргалкой: 
// спросите себя, сущность А является сущностью Б? Если да, то скорее всего, тут подойдет наследование. 
// Если же сущность А является частью сущности Б, то наш выбор — композиция.

// Применительно к нашей ситуации это будет звучать так:

// Автобот является Трансформером? Да, значит выбираем наследование.
// Пушка является частью Трансформера? Да, значит — композиция.

// Наследование статично

// Еще одно важное отличие наследования от композиции в том,
// что наследование имеет статическую природу и устанавливает отношения классов 
// только на этапе интерпретации/компиляции. Композиция же, как мы видели в примерах, 
// позволяет менять отношение сущностей на лету прямо в рантайме — иногда это очень важно, 
// поэтому об этом нужно помнить при выборе отношений

// Множественное наследование

// Мы рассмотрели ситуацию, когда два класса унаследованы от общего потомка. 
// Но в некоторых языках можно сделать и наоборот — унаследовать один класс от двух и более родителей, 
// объединив их свойства и поведение. Возможность наследоваться от нескольких 
// классов вместо одного — это множественное наследование.

// Вообще, в кругах иллюминатов бытует мнение, что множественное наследование — это грех, 
// оно несет за собой ромбовидную проблему и неразбериху с конструкторами. 
// Кроме того, задачи, которые решаются множественным наследованием, 
// можно решать другими механизмами, например, механизмом интерфейсов (о котором мы тоже поговорим). 
// Но справедливости ради, следует отметить, что множественное наследование удобно использовать 
// для реализации примесей.