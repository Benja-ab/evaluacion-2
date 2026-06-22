function limpiarModos() {
    document.body.classList.remove("anime-mode", "manga-mode", "manwha-mode");

    let caja = document.getElementById("imagenModo");
    caja.classList.remove("anime-card", "manga-card", "manwha-card");
}

// ANIME
function modoAnime() {
    limpiarModos();

    document.body.classList.add("anime-mode");

    let caja = document.getElementById("imagenModo");
    caja.innerHTML = "🔥 Modo Anime Activado";
    caja.classList.add("anime-card");
}

// MANGA
function modoManga() {
    limpiarModos();

    document.body.classList.add("manga-mode");

    let caja = document.getElementById("imagenModo");
    caja.innerHTML = "⚫ Modo Manga Activado";
    caja.classList.add("manga-card");
}

// MANWHA
function modoManwha() {
    limpiarModos();

    document.body.classList.add("manwha-mode");

    let caja = document.getElementById("imagenModo");
    caja.innerHTML = "💙 Modo Manwha Activado";
    caja.classList.add("manwha-card");
}