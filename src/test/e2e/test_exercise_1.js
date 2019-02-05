const { remote } = require('webdriverio');

(async () => {
    const browser = await remote({
        logLevel: 'error',
        path: '/',
        capabilities: {
            browserName: 'firefox'
        }
    });

    await browser.url('http://localhost:3000');

    const title = await browser.getTitle();

    await browser.deleteSession();
})().catch((e) => console.error(e));
