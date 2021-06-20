const Sections = require('../../models/sections');

module.exports.generateRandomSections = async () => {
    var s = []
    const noOfSections = Math.floor(Math.random() * 9 + 1);
    for (let i = 0; i < noOfSections; i++) {
        const rand = Math.floor(Math.random() * 50)
        const randomSection = await Sections.findOne().skip(rand);
        s.push(String(randomSection._id))
    }
    return s;
}