// Инкапсуляция

// Инкапсуляция — это контроль доступа к полям и методам объекта. 
// Под контролем доступа подразумевается не только можно/неможно, 
// но и различные валидации, подгрузки, вычисления и прочее динамическое поведение.

// Во многих языках частью инкапсуляции является сокрытие данных. 
// Для этого существуют модификаторы доступа 

// Для сокрытия внутреннего интерфейса мы используем защищённые или приватные свойства:

// Защищённые поля имеют префикс _. 
// Это хорошо известное соглашение, не поддерживаемое на уровне языка. 
// Программисты должны обращаться к полю, начинающемуся с _, 
// только из его класса и классов, унаследованных от него.
// Приватные поля имеют префикс #. 
// JavaScript гарантирует, что мы можем получить доступ к таким полям только внутри класса.
// В настоящее время приватные поля не очень хорошо поддерживаются в браузерах, 
// но можно использовать полифил.

class Transformer{
    _constructor(){ }

    #setup(){ }

    #dance(){ }
}



