var casper = require('casper').create();
// casper.options.waitTimeout = 10000; //setting timeout to 10secs.

casper.options.viewportSize = { width: 950, height: 950 };

casper.start('http://localhost:3000/', function() {
    this.echo("Loaded Page with page title => "+this.getTitle());
    casper.capture('screenshots/1.png');

});

casper.waitForSelector("button[data-test-id=\"render-challenge\"]", function () {
    this.click('button[data-test-id="render-challenge"]');
    this.echo('Pressed button with selector  => button[data-test-id="render-challenge"]');
    casper.capture('screenshots/2.png');
});


// casper.waitForSelector("td[data-test-id=\"array-item-1-0\"]", function () {
//     var text = casper.evaluate(function(){
//         return document.querySelector("d[data-test-id=\"array-item-1-0\"]").textContent;
//     });
//     this.echo("first row and column loaded with this number  => "+text);
//     var firstRowArray = [];
//     firstRowArray[0] = text;
//     this.echo("first row array is  => "+ firstRowArray[0]);
//
// });

