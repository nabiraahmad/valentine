
const gifs = [
    "teddybeargif.gif",
    "spongebib.gif",
    "cat.gif",
    "bee.gif",
    "bear.gif",
    "weird.gif",
    "baby.gif"
];

function showGif(answer) {
    const message = document.getElementById('valentineMessage');
    const gifContainer = document.getElementById('gifContainer');
    const gifImage = document.getElementById('valentineGif');

    if (answer) {
        message.textContent = "yayy! MY VALENTINE IS SO CUTE!";
        gifContainer.style.display = 'block';
        const randomIndex = Math.floor(Math.random() * gifs.length);
        gifImage.src = gifs[randomIndex];
    } else {
        message.textContent = ":( please try again, you don't mean that";
        gifContainer.style.display = 'none';
    }
}
