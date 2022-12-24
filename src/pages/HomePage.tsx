import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
      <h1>Выполнение тестовых заданий. Ответы на вопросы.</h1>
      <div>
        <p className="question">
          1. Знакомы ли вы с AndDesign? Какой опыт работы с этой библиотекой?
        </p>
        <p>
          Да, знаком, изучал ее вместе с tailwind в одном из пет-проектов,
          использовал ее в данном тестовом задании, однако при создании
          пет-проектов использовую обычно css-in-js
        </p>
        <p className="question">
          2. Знаком ли React Native. Какой опыт работы?
        </p>
        <p>
          Изучал в ходе чтения книги{" "}
          <a href="https://www.jseverywhere.io/">JS everywhere</a>, где создавал
          кроссплатформенное приложение на React, React Native, Electron.
          <a href="https://github.com/khanchenkov/notedly-mobile">
            Cсылка на репозиторий
          </a>
        </p>
        <p className="question">
          3. Писали ли вы тест с использованием jest? Может быть на чем то
          другом приходилось писать тесты?
        </p>
        <p className="answer">Пробовал писать тесты на cypress для Vue.</p>
        <p className="question">
          (4.) [...] если у вас уже есть профиль на гитхабе с интересными
          проектами, то просто скиньте нам ссылку, на то что хотели бы показать.
        </p>
        <p>
          <a href="https://github.com/khanchenkov">Мой профиль github</a>. Самым
          интересным проектом является, пожалуй, приложение для чтения книг PDF.
          Пользователь может авторизоваться, добавлять книги, устанавливать цели
          по чтению, отслеживать свой прогресс, редактировать свои данные и т.д.
          - <a href="https://github.com/khanchenkov/verbum-app">репозиторий</a>
          {". "}
          Также есть вики:{" "}
          <a href="https://github.com/khanchenkov/verbum-app/wiki">Вики</a>
        </p>
      </div>
    </>
  );
};

export default HomePage;
