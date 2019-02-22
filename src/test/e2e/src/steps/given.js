import { defineSupportCode } from 'cucumber';

import openWebsite from '../support/action/openWebsite';

defineSupportCode(({ Given }) => {
    Given(/^I open the (url|site) "([^"]*)?"$/, openWebsite);
});
