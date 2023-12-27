$(document).ready(function(){
    $('.add-to-cart-btn').on('click', function(){
        // Добавление товара в корзину
        alert('Товар добавлен в корзину!');
        // Здесь будет код для добавления товара в массив корзины или обновления DOM
    });

    $('.category').on('click', function(){
        var category = $(this).attr('data-category');
        // Скрываем все товары
        $('.card').hide();
        // Показываем товары выбранной категории
        $('.card.' + category).show();
    });

    $('.nav-link').on('click', function(){
        // Удаляем класс 'active' у всех ссылок
        $('.nav-link').removeClass('active');
        // Добавляем класс 'active' к кликнутой ссылке
        $(this).addClass('active');
    });

    $.ajax({
        url: 'path/to/your/api/products', // URL вашего API
        method: 'GET',
        success: function(data) {
            // Обработка данных товаров, полученных от сервера
            console.log(data);
            // Здесь будет код для вставки товаров в HTML
        }
    });

    $('#order-form').on('submit', function(e){
        e.preventDefault(); // Предотвращаем стандартное поведение отправки формы
        var formData = $(this).serialize(); // Сериализуем данные формы
        // Отправляем данные формы на сервер
        $.ajax({
            url: 'path/to/your/api/order',
            method: 'POST',
            data: formData,
            success: function(response) {
                alert('Заказ оформлен!');
                // Здесь код для обработки ответа сервера
            }
        });
    });
});