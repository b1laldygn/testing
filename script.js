document.addEventListener("DOMContentLoaded", function () {
    const numLeaves = 10; // Aynı anda ekranda olacak yaprak sayısı
    const container = document.body;

    function createLeaf() {
        const leaf = document.createElement("img");
        leaf.src = "assets/leaf.png"; // Yaprak görseli
        leaf.classList.add("leaf");

        // Rastgele başlangıç konumu ve animasyon süresi ayarla
        leaf.style.left = Math.random() * window.innerWidth + "px";
        leaf.style.animationDuration = 5 + Math.random() * 5 + "s"; // 5-10 saniye arasında süzülsün
        leaf.style.animationDelay = Math.random() * 3 + "s"; // Rastgele gecikme

        container.appendChild(leaf);

        // Yaprak ekranın altına ulaşınca sil
        setTimeout(() => {
            leaf.remove();
        }, 10000);
    }

    // Yaprakları belirli aralıklarla oluştur
    setInterval(createLeaf, 1000);
});
