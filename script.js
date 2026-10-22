const cloudButton = document.getElementById("cloudButton");
const cloudInfo = document.getElementById("cloudInfo");

cloudButton.addEventListener("click", function () {
    cloudInfo.textContent =
        "Хмарні обчислення — це модель надання обчислювальних ресурсів " +
        "через Інтернет. Вона дозволяє використовувати сервери, " +
        "сховища даних і програмне забезпечення без необхідності " +
        "самостійно підтримувати всю інфраструктуру.";

    cloudButton.textContent = "Інформацію показано ✓";
});
