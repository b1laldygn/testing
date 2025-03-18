document.addEventListener("DOMContentLoaded", function () {
    function createLeaf() {
        const leaf = document.createElement("div");
        leaf.classList.add("leaf");
        
        // Rastgele bir konum belirleme
        leaf.style.left = `${Math.random() * window.innerWidth}px`;
        leaf.style.animationDuration = `${3 + Math.random() * 5}s`; // 3-8 saniye arasında sürebilir
        
        document.body.appendChild(leaf);

        // Animasyon tamamlandığında yaprağı kaldır
        setTimeout(() => {
            leaf.remove();
        }, 8000); // En uzun animasyon süresinden sonra temizleme
    }

    // Belirli aralıklarla yaprak oluştur
    setInterval(createLeaf, 500);
});
