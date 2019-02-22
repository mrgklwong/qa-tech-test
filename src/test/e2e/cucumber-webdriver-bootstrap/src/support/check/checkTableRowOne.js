module.exports = (element) => {
    const row = `tbody tr:nth-child(${element})`;
    const rowValues = browser.getText(row).split(' ');
    console.log(`Created array from row ${element} has values ${rowValues}`);
};
