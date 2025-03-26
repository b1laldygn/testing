document.addEventListener("DOMContentLoaded", function () {
    const numLeaves = 10; // Aynı anda ekranda olacak yaprak sayısı
    const container = document.body;

    function createLeaf() {
        const leaf = document.createElement("img");
        leaf.src = "assets/leaf.png"; // Yaprak görseli
        leaf.classList.add("leaf");
    
        // Check if the image loads successfully
        leaf.onerror = () => {
            console.error("Leaf image not found. Please check the path.");
        };
    
        // Rastgele başlangıç konumu ve animasyon süresi ayarla
        leaf.style.position = "absolute";
        leaf.style.top = "-100px"; // Start above the visible area
        leaf.style.left = Math.random() * window.innerWidth + "px"; // Random horizontal position
        leaf.style.animationDuration = 5 + Math.random() * 5 + "s"; // 5-10 seconds for falling
        leaf.style.animationDelay = Math.random() * 3 + "s"; // Random delay
    
        container.appendChild(leaf);
    
        // Yaprak ekranın altına ulaşınca sil
        setTimeout(() => {
            leaf.remove();
        }, 10000);
    }

    // Yaprakları belirli aralıklarla oluştur
    setInterval(createLeaf, 1000);
});