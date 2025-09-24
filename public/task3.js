fetch("/Kuzma_InoverOlga_mail_ru?a=12&b=16")
  .then((response) => response.json())
  .then((data) => {
    const element = document.createElement("div");
    element.innerHTML = `<h3>Демо: НОК(12, 16) = ${data.nok}</h3>`;
    document.body.appendChild(element);
  })
  .catch((error) => {
    console.log("Ошибка:", error);
  });
