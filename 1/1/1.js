"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const albums = [
  { title: "first", artist: "Ivan", year: 2000 },
  { title: "second", artist: "Dmitry", year: 1995 },
  { title: "third", artist: "Vlad", year: 2013 },
];

const musicCollection = {
  albums,
  *[Symbol.iterator]() {
    for (const el of albums) {
      yield el;
    }
  },
};

for (const el of albums) {
  console.log(`${el.title} - ${el.artist} (${el.year})`);
}
