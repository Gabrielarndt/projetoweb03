var container = document.querySelector('.container');
var bikeCover = document.getElementById('bikeCover');
var isDragging = false;
var initialX = 0;
var initialY = 0;
function handleStart(event) {
    if (event instanceof MouseEvent) {
        initialX = event.clientX;
        initialY = event.clientY;
    }
    else if (event instanceof TouchEvent) {
        initialX = event.touches[0].clientX;
        initialY = event.touches[0].clientY;
    }
    isDragging = true;
}
function handleMove(event) {
    if (isDragging) {
        var currentX = (event instanceof MouseEvent ? event.clientX : event.touches[0].clientX) - initialX;
        var currentY = (event instanceof MouseEvent ? event.clientY : event.touches[0].clientY) - initialY;
        var backgroundPosition = getComputedStyle(container).backgroundPosition.split(' ');
        var offsetX = parseInt(backgroundPosition[0]) || 0;
        var offsetY = parseInt(backgroundPosition[1]) || 0;
        container.style.backgroundPosition = "".concat(offsetX + currentX, "px ").concat(offsetY + currentY, "px");
        initialX = (event instanceof MouseEvent ? event.clientX : event.touches[0].clientX);
        initialY = (event instanceof MouseEvent ? event.clientY : event.touches[0].clientY);
    }
}
function handleEnd() {
    isDragging = false;
}
container.addEventListener('mousedown', handleStart);
container.addEventListener('touchstart', handleStart);
document.addEventListener('mousemove', handleMove);
document.addEventListener('touchmove', handleMove);
document.addEventListener('mouseup', handleEnd);
document.addEventListener('touchend', handleEnd);
