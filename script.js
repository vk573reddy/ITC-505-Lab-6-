document.getElementById('sortButton').addEventListener('click', function() {
    const input = document.getElementById('numberInput').value;
    const numbers = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
    const sortedNumbers = numbers.sort((a, b) => a - b);
    document.getElementById('sortedOutput').textContent = sortedNumbers.join(', ');
});