// const canvas = document.getElementById('flowerCanvas');

// const ctx = canvas.getContext('2d');
// console.log(ctx);



//const flowerImage = new Image();
// flowerImage.src = "../sprites/sproutLands.png";
// const flowerImage = document.getElementById('flowerImage');

// function animate()
// {
//     ctx.clearRect(0, 0, canvas_width, canvas_height);
//     ctx.fillRect(100, 50, 100, 100);
//     ctx.drawImage(flowerImage, 100, 100);
//     requestAnimationFrame(animate);

// };
// animate();

window.onload = function(){
    const canvas = document.getElementById('flowerCanvas');
    const ctx = canvas.getContext('2d');
    const canvas_width = canvas.width = 100;
    const canvas_height = canvas.height = 100;
    const img = document.getElementById('flowerImage');
    ctx.drawImage(img, 0, 0, canvas_width, canvas_height);
};