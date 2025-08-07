const checkbox = document.getElementById("check");
const mode = document.getElementById("mode")

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        const theme = document.body.setAttribute("data-theme", "dark");
        mode.textContent = "Light";
    }
    else {
        const theme = document.body.setAttribute("data-theme", "light");
        mode.textContent = "Dark";
    }
});

function closeSidebar() {
    const sidebar = document.getElementById("sidebar");

    sidebar.classList.remove("show");
}

function showSidebar() {
    const sidebar = document.getElementById("sidebar");

    sidebar.classList.add("show");
}

function changeCard(cardShow, btnClicked) {
    const cards = document.querySelectorAll('.card-skill');
    cards.forEach(card => card.classList.remove('ativo'));

    const selectedCard = document.getElementById(cardShow);
    if (selectedCard) selectedCard.classList.add('ativo');

    const buttons = document.querySelectorAll('.skill-btn');
    buttons.forEach(btn => btn.classList.remove('able'));

    btnClicked.classList.add('able');
}

function download() {

    const link = document.createElement("a");
    link.href = "/assets/curriculo_dev.pdf"
    link.download = "Alleson_Curriculo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const message = document.getElementById("messageDownload");
    message.style.display = 'block';

    setTimeout(() => {
        message.style.display = 'none';
    }, 3000);
 
}
