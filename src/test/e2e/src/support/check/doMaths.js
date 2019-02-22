module.exports = (element) => {
    const row = `tbody tr:nth-child(${element})`;
    const inputField = `input[data-test-id="submit-${element}"]`;
    const rowValues = browser.getText(row).split(' ').map(Number);
    const sumbitButton = $('#challenge button[tabindex=\'0\']');
    let i;
    function Total(total, value) {
        return total + (value);
    }
    for (i = 0; i < rowValues.length; i++) {
        const leftSide = rowValues.slice(0, i);
        const rightSide = rowValues.slice(i + 1, rowValues[-1]);
        try {
            var leftSideTotal = leftSide.reduce(Total);
        } catch (err) {
            console.log('left side is null');
        }
        try {
            var rightSideTotal = rightSide.reduce(Total);
        } catch (err) {
            console.log('right side is null');
        }
        if (leftSideTotal == rightSideTotal) {
            console.log(`the center of the array is ${rowValues[i]}`);
            browser.setValue(inputField, i);
        }
    }
};
