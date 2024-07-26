document.addEventListener("DOMContentLoaded", () => {
    const targetName = "    Hacker";
    const nameElement = document.getElementById("name");
    let currentIndex = 0;
    let currentNameArray = Array(targetName.length).fill('');

    function getRandomChar() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz ";
        return chars.charAt(Math.floor(Math.random() * chars.length));
    }

    function updateName() {
        let displayName = '';

        for (let i = 0; i < targetName.length; i++) {
            if (i <= currentIndex) {
                if (currentNameArray[i] !== targetName[i]) {
                    currentNameArray[i] = getRandomChar();
                } else {
                    currentNameArray[i] = targetName[i];
                }
            } else {
                currentNameArray[i] = getRandomChar();
            }
            displayName += currentNameArray[i];
        }

        nameElement.textContent = displayName;

        if (currentNameArray[currentIndex] === targetName[currentIndex]) {
            currentIndex++;
        }

        if (currentIndex < targetName.length) {
            setTimeout(updateName, 100);
        } else {
            nameElement.textContent = targetName;
        }
    }

    updateName();
});
