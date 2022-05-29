# OOP
трансформеры

git add .
git commit -m "наследование"
git push origin master

Объектно-Ориентированное Программирование

В качестве примеров будут выступать трансформеры.

Объектно-ориентированная идеология разрабатывалась как попытка связать поведение сущности с её данными и спроецировать объекты реального мира и бизнес-процессов в программный код. Задумывалось, что такой код проще читать и понимать человеком, т. к. людям свойственно воспринимать окружающий мир как множество взаимодействующих между собой объектов, поддающихся определенной классификации.

Если вам требуется написать одноразовый скрипт, который не нуждается в последующей поддержке, то и ООП в этой задаче, вероятнее всего, не пригодится. Однако, значительную часть жизненного цикла большинства современных проектов составляют именно поддержка и расширение.

Иногда можно столкнуться с критикой в адрес быстродействия ООП-программ. Это правда, незначительный оверхед присутствует, но настолько незначительный, что в большинстве случаев им можно пренебречь в пользу преимуществ.

Oбъектно-ориентированный подход возможен и без классов, но мы будем рассматривать, классическую схему, где классы — наше всё.
=============================================================================================

Классы и объекты

Kласс — это описание того, какими свойствами и поведением будет обладать объект. А объект — это экземпляр с собственным состоянием этих свойств.

«свойства» — это такие же обычные переменные, просто они являются атрибутами какого-то объекта (их называют полями объекта). Аналогично «поведение» — это функции объекта (их называют методами), которые тоже являются атрибутами объекта. Разница между методом объекта и обычной функцией лишь в том, что метод имеет доступ к собственному состоянию через поля.

методы и свойства являются атрибутами

