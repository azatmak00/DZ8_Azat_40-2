document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;
    const rooms = parseInt(document.getElementById('rooms').value, 10);
    const errorElement = document.getElementById('error');


    if (!checkInDate || !checkOutDate || isNaN(rooms)) {
        errorElement.textContent = 'Все поля должны быть заполнены';
        return;
    }


    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    if (checkOut <= checkIn) {
        errorElement.textContent = 'Дата выезда должна быть позже даты заезда';
        return;
    }


    if (rooms < 1 || rooms > 5) {
        errorElement.textContent = 'Количество комнат должно быть от 1 до 5';
        return;
    }


    errorElement.textContent = '';
    alert('Бронирование успешно!');
});
