module.exports = function makeImportant(string, length = string.length) {
    const excl = "!";
    return string + `${excl}`.repeat(length);
};