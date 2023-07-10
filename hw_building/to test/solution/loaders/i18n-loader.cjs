module.exports = function (content) {
    const { translates } = this.getOptions();
    const reg = /{i18n\(\'(?<key>.*?)\'\)}/g;
    const parsedKeys = Array.from(content.matchAll(reg)).map(link => link.groups.key);
    while (parsedKeys.length > 0) {
        // console.log(content.match(reg))
        if (translates[parsedKeys[0]]) {
            content = content.replace(reg, translates[parsedKeys[0]]);
            parsedKeys.shift();
        } else {
            throw new Error('i18n key not found');
        }
    }
    // console.log('content', content)
    return (content);
};