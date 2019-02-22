import { defineSupportCode } from 'cucumber';
import checkModalText from '../support/check/checkModalText';
import isVisible from '../support/check/isVisible';
import checkTableRowOne from '../support/check/checkTableRowOne';
import doMaths from '../support/check/doMaths';

defineSupportCode(({ Then }) => {

    Then(/^I expect that element "([^"]*)?" is( not)* visible$/, isVisible);

    Then(/^I expect that a (alertbox|confirmbox|prompt)( not)* contains the text "([^"]*)?"$/, checkModalText);

    Then(/^I can create an array from the row "([^"]*)?"$/, checkTableRowOne);

    Then(/^Do maths on array "([^"]*)?"$/, doMaths);

});
