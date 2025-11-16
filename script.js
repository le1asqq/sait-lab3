
document.addEventListener('DOMContentLoaded', function () {

    //  СКРИПТ ЧАСОВ 
    const clockElement = document.getElementById('page-clock');

    function updateClocks() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;

        
        if (clockElement) {
            clockElement.textContent = timeString;
        }

       
        let baseTitle = document.title.split('|')[0].trim();
        document.title = `${baseTitle} | ${timeString}`;
    }

   
    updateClocks();
    // обновление  каждую секунду
    setInterval(updateClocks, 1000);


    // СКРИПТЫ 
    const removeLongWordsBtn = document.getElementById('remove-long-words-btn');
    const textInput = document.getElementById('text-input');

    if (removeLongWordsBtn && textInput) {
        removeLongWordsBtn.addEventListener('click', function () {
            const originalText = textInput.value;
            if (!originalText) {
                alert('Пожалуйста, введите текст в поле.');
                return;
            }
            const words = originalText.split(' ');
            const shortWords = words.filter(word => word.length <= 7);
            const resultText = shortWords.join(' ');
            alert('Результат:\n\n' + resultText);
        });
    }

    const findCommonCharBtn = document.getElementById('find-common-char-btn');
    if (findCommonCharBtn && textInput) {
        findCommonCharBtn.addEventListener('click', function () {
            const text = textInput.value.toLowerCase().replace(/[^а-я]/g, '');
            if (!text) {
                alert('Пожалуйста, введите текст на русском языке.');
                return;
            }
            const charMap = {};
            let maxCount = 0;
            let mostCommonChar = '';
            for (const char of text) {
                charMap[char] = (charMap[char] || 0) + 1;
                if (charMap[char] > maxCount) {
                    maxCount = charMap[char];
                    mostCommonChar = char;
                }
            }
            alert(`Самая частая буква в тексте: "${mostCommonChar}"\nОна встречается ${maxCount} раз(а).`);
        });
    }

});