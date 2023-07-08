module.exports = function (content, options) {
    const translates = require('../i18n.json');
    const reg = /{i18n\(\'(?<key>.*?)\'\)}/g;
    const parsedKeys = Array.from(content.matchAll(reg)).map(link => link.groups.key);
    console.log('translates', translates);
    console.log('parsedKeys', parsedKeys);
    while (parsedKeys.length > 0) {
        console.log(content.match(reg))
        content = content.replace(reg, translates[parsedKeys[0]]);
        parsedKeys.shift();
    }
    console.log('content', content)
    // console.log('options', options)
    // console.log('meta', meta)
    return (content);
};