const { RuleTester } = require("eslint");

const rule = require("./imports-order");
// const parser = require("typescript-eslint/parser")

const ruleTetser = new RuleTester({
    // parser: parser,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
    }

});

const validTestCases = [
    `
    import fs from 'fs';
    import _ from 'lodash';
    import path from 'path';
    `,
]
const inValidTestCases = [
    `
    import fs from 'fs';
    import path from 'path';

    import _ from 'lodash';
    `,
]

ruleTetser.run("imports-order", rule,
    {
        valid: validTestCases.map(c => { return { code: c } }),
        invalid: inValidTestCases.map(c => { return { code: c, errors: [{ message: 'bad order' }] } }),
    });