function showRandomImage() {
  const imageCount = 9;
  const randomIndex = Math.floor(Math.random() * imageCount) + 1; // Випадковий індекс від 1 до 9
  const imagePath = `images/${randomIndex}.jpg`;

  const imageElement = document.getElementById("randomImage");
  imageElement.src = imagePath;
  imageElement.alt = `Image ${randomIndex}`;

  // Перевірка завантаження зображення
  imageElement.onerror = function () {
    console.error(`Не вдалося завантажити зображення: ${imagePath}`);
    imageElement.alt = "Image not found";
    imageElement.src = "";
  };

  imageElement.onload = function () {
    console.log(`Успішно завантажено зображення: ${imagePath}`);
  };
}

document.addEventListener("DOMContentLoaded", showRandomImage);
