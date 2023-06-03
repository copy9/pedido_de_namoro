function sim() {
    window.open("https://img.ifunny.co/images/b6e14db2ac28c22801d8d008aea52f4e87bb2c6f3dc5fbbeb86fbc24bdc5ab72_1.webp", "_blank");
}
    
    function desviar(t) {
        var btn = t;
        btn.style.position = 'absolute';
        btn.style.bottom = randomNumber(10, 90);
        btn.style.left = randomNumber(10, 90);
        console.log("Aí não chefe!!")
    }

    function randomNumber(min, max) {
        return (Math.random() * (max - min) + min) + "%";
    }