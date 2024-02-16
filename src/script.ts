const container = document.querySelector('.container') as HTMLElement;
const bikeCover = document.getElementById('bikeCover') as HTMLDivElement;

let isDragging = false;
let initialX = 0;
let initialY = 0;

function handleStart(event: MouseEvent | TouchEvent): void {
    if (event instanceof MouseEvent) {
        initialX = event.clientX;
        initialY = event.clientY;
    } else if (event instanceof TouchEvent) {
        initialX = event.touches[0].clientX;
        initialY = event.touches[0].clientY;
    }
    isDragging = true;
}

function handleMove(event: MouseEvent | TouchEvent): void {
    if (isDragging) {
        const currentX = (event instanceof MouseEvent ? event.clientX : event.touches[0].clientX) - initialX;
        const currentY = (event instanceof MouseEvent ? event.clientY : event.touches[0].clientY) - initialY;
        const backgroundPosition = getComputedStyle(container).backgroundPosition.split(' ');
        const offsetX = parseInt(backgroundPosition[0]) || 0;
        const offsetY = parseInt(backgroundPosition[1]) || 0;
        container.style.backgroundPosition = `${offsetX + currentX}px ${offsetY + currentY}px`;
        initialX = (event instanceof MouseEvent ? event.clientX : event.touches[0].clientX);
        initialY = (event instanceof MouseEvent ? event.clientY : event.touches[0].clientY);
    }
}

function handleEnd(): void {
    isDragging = false;
}

container.addEventListener('mousedown', handleStart);
container.addEventListener('touchstart', handleStart);

document.addEventListener('mousemove', handleMove);
document.addEventListener('touchmove', handleMove);

document.addEventListener('mouseup', handleEnd);
document.addEventListener('touchend', handleEnd);
