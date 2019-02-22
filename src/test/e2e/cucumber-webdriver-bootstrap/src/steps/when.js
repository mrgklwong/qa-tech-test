import { defineSupportCode } from 'cucumber';
import clickElement from '../support/action/clickElement';
import setInputField from '../support/action/setInputField';


defineSupportCode(({ When }) => {
    When(/^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/, clickElement);

    When(/^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/, setInputField);

});
