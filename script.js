document.addEventListener("DOMContentLoaded", function () {
    function createLeaf() {
        const leaf = document.createElement("div");
        leaf.classList.add("leaf");
        
        // Rastgele konum ve animasyon süresi belirle
        leaf.style.left = `${Math.random() * window.innerWidth}px`;
        const duration = 5 + Math.random() * 5; // 5-10 saniye arasında değişen süre
        leaf.style.animation = `fall ${duration}s linear forwards`;

        document.body.appendChild(leaf);

        // Animasyon süresi sonunda yaprağı kaldır
        setTimeout(() => {
            leaf.remove();
        }, duration * 1000);
    }

    // Yaprakları sürekli oluştur
    setInterval(createLeaf, 500);
});
