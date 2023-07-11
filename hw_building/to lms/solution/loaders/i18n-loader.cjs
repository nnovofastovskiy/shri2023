module.exports = function (content) {
    const { translates } = this.getOptions();
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
    return (content);
};