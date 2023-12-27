"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
  #books = [];

  constructor(books) {
    this.#books = books;
  }
  checkUnicBooks() {
    const unicBooks = new Set(this.#books);
    if (this.#books.length !== unicBooks.size) {
      throw new Error("Есть повторяющиеся книги");
    }
    return console.log("Уникальная библиотека");
  }

  getAllBooks() {
    return console.log(this.#books.join(", "));
  }
  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error("Такая книга уже добавлена");
    }
    this.#books.push(title);
    return console.log("Книга добавлена");
  }
  removeBook(title) {
    const index = this.#books.indexOf(title);
    if (!this.#books.includes(title)) {
      throw new Error("Такой книги не было добавлено");
    }
    this.#books.splice(index, 1);
    return console.log("Книга удалена");
  }
  hasBook(title) {
    if (!this.#books.includes(title)) {
      return false;
    }
    return true;
  }
}

const library = new Library([
  //   "Идиот",
  "Идиот",
  "Ревизор",
  "Евгений Онегин",
  "Дети капитана Гранта",
]);

library.checkUnicBooks();
library.getAllBooks();
// library.addBook("Идиот");
library.addBook("Остров сокровищ");
library.getAllBooks();
// library.removeBook("Человек на картине");
library.removeBook("Идиот");
library.getAllBooks();
console.log(library.hasBook("Остров сокровищ"));
console.log(library.hasBook("Человек на картине"));
