const writeUps = document.querySelectorAll('.write-up');
        writeUps.forEach(writeUp => {
            writeUp.addEventListener('mouseover', () => {
                writeUp.style.display = 'block';
                writeUp.style.opacity = '3';
            });
            writeUp.addEventListener('mouseout', () => {
                writeUp.style.display = 'block';
                writeUp.style.opacity = '0';
            });
        });