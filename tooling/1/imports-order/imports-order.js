module.exports = {
    meta: {
        fixable: "code"
    },

    create(context) {
        return {
            ImportDeclaration(node) {
                console.log(node.source.value);
            }
        };
    }
}