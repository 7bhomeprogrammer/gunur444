document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("phonk-container");
  database.phonk.forEach(song => {
    const card = document.createElement("div");
    card.className = "song-card";
    card.innerHTML = `
      <img src="${song.image}" alt="${song.title}">
      <h3>${song.title}</h3>
      <p>${song.info}</p>
      <a href="${song.video}" target="_blank">Слушать</a>
    `;
    container.appendChild(card);
  });
});