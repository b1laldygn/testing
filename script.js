document.addEventListener("DOMContentLoaded", function () {
    function createLeaf() {
        const leaf = document.createElement("div");
        leaf.classList.add("leaf");
        
        // Rastgele konum ve animasyon süresi
        leaf.style.left = `${Math.random() * window.innerWidth}px`;
        const duration = 3 + Math.random() * 5; // 3-8 saniye
        leaf.style.animationDuration = `${duration}s`;

        document.body.appendChild(leaf);

        // Animasyon süresi sonunda yaprağı kaldır
        setTimeout(() => {
            leaf.remove();
        }, duration * 1000);
    }

    // Yaprakları sürekli oluştur
    setInterval(createLeaf, 500);
});
