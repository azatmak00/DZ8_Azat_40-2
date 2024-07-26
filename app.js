document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Получаем значения из формы
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;
    const rooms = parseInt(document.getElementById('rooms').value, 10);
    const errorElement = document.getElementById('error');

    // Проверяем, чтобы все поля были заполнены
    if (!checkInDate || !checkOutDate || isNaN(rooms)) {
        errorElement.textContent = 'Все поля должны быть заполнены';
        return;
    }

    // Проверяем правильность дат
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    if (checkOut <= checkIn) {
        errorElement.textContent = 'Дата выезда должна быть позже даты заезда';
        return;
    }

    // Проверяем количество комнат
    if (rooms < 1 || rooms > 5) {
        errorElement.textContent = 'Количество комнат должно быть от 1 до 5';
        return;
    }

    // Очищаем сообщение об ошибке и показываем успешное сообщение
    errorElement.textContent = '';
    alert('Бронирование успешно!');
});
