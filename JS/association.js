// ассоциация это композиция и агрегация

// Ассоциация

// Традиционно в полях объекта могут храниться не только обычные переменные стандартных типов, 
// но и другие объекты. А эти объекты могут в свою очередь хранить 
// какие-то другие объекты и так далее, образуя дерево (иногда граф) объектов. 
// Это отношение называется ассоциацией.

// Предположим, что наш трансформер оборудован пушкой. 
// Хотя нет, лучше двумя пушками. В каждой руке. 
// Пушки одинаковые (принадлежат к одному классу, или, если будет угодно, выполненные по одному чертежу), 
// обе одинаково умеют стрелять и перезаряжаться, 
// но в каждой есть свое хранилище боеприпасов (собственное состояние). 
// Как теперь это описать в ООП? С помощью ассоциации:

class Gun { // объявляем класс Пушка
    ammo_count; // объявляем количество боеприпасов

    constructor(){ // конструктор
        this.reload() // вызываем собственный метод "перезарядить"
    }

    fire(){ // объявляем метод пушки "стрелять"
        this.ammo_count -= 1 // расходуем боеприпас из собственного магазина
    }

    reload(){ // объявляем метод "перезарядить"
        this.ammo_count = 10 // забиваем собственный магазин боеприпасами
    }
}

class Transformer { // объявляем класс Трансформер
    gun_left; // объявляем поле "левая пушка" типа Пушка
    gun_right; // объявляем поле "правая пушка" тоже типа Пушка
    
    /*
    теперь конструктор Трансформера принимает
    в качестве аргументов две уже конкретные созданные пушки,
    которые передаются извне
    */
    constructor(gun_left, gun_right){
        this.gun_left = gun_left // устанавливаем левую пушку на борт
        this.gun_right = gun_right // устанавливаем правую пушку на борт
    }
    
    // объявляем метод Трансформер "стрелять", который сначала стреляет...
    fire(){
        // левой пушкой, вызывая ее метод "стрелять"
        this.gun_left.fire()
        // а затем правой пушкой, вызывая такой же метод "стрелять"
        this.gun_right.fire()
    }
}

let gun1 = new Gun() // создаем первую пушку
let gun2 = new Gun() // создаем вторую пушку
let optimus = new Transformer(gun1, gun2) // создаем трансформера, передавая ему обе пушки

optimus.fire() // приказываем Оптимусу стрелять из обеих пушек
console.log(gun2.ammo_count, gun1.ammo_count); // выведет 9, 9

optimus.fire() // приказываем Оптимусу стрелять из обеих пушек
optimus.fire() // приказываем Оптимусу стрелять из обеих пушек
console.log(gun2.ammo_count, gun1.ammo_count); // выведет 7, 7

optimus.gun_left.fire() // приказываем Оптимусу стрелять из левой
optimus.gun_left.fire() // приказываем Оптимусу стрелять из левой
console.log(gun2.ammo_count, gun1.ammo_count); // выведет 7, 5

// this.gun_left.fire() и this.gun_right.fire() — это обращения к дочерним объектам, 
// которые происходят так же через точки. По первой точке мы обращаемся 
// к атрибуту себя (this.gun_right), получая объект пушки, 
// а по второй точке обращаемся к методу объекта пушки (this.gun_right.fire()).

// Итог: робота сделали, табельное оружие выдали, теперь разберемся, что тут происходит. 
// В данном коде один объект стал составной частью другого объекта. 
// Это и есть ассоциация. Она в свою очередь бывает двух видов:

// 1. Композиция — случай, когда на фабрике трансформеров, собирая Оптимуса, 
// обе пушки ему намертво приколачивают к рукам гвоздями, и после смерти Оптимуса, 
// пушки умирают вместе с ним. Другими словами, жизненный цикл дочернего объекта 
// совпадает с жизненным циклом родительского.

// 2. Агрегация — случай, когда пушка выдается как пистолет в руку, 
// и после смерти Оптимуса этот пистолет может подобрать его боевой товарищ Олег, 
// а затем взять в свою руку, либо сдать в ломбард. 
// То бишь жизненный цикл дочернего объекта не зависит от жизненного цикла родительского, 
// и может использоваться другими объектами.
