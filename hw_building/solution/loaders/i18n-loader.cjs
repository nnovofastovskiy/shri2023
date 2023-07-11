module.exports = function (content) {
    const { translates } = this.getOptions();
<<<<<<< HEAD
    const reg = /{i18n\(["'`](?<key>.*?)["'`]\)}/;
    const regg = /{i18n\(["'`](?<key>.*?)["'`]\)}/g;
    const parsedKeys = Array.from(content.matchAll(regg)).map(link => link.groups.key);
    console.log(parsedKeys);
    for (let i = 0; i < parsedKeys.length; i++) {
        const key = parsedKeys[i];
        // console.log('key', key);
        if (translates[key]) {
            content = content.replace(reg, `{'${translates[key]}'}`);
            // parsedKeys.pop();
        } else {
            throw new Error('i18n key not found');
        }
        console.log('content', content)
    }
=======
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
>>>>>>> f45b8aa64936e4de02f968df094937f465c0e081
    return (content);
};