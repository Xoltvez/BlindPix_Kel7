module.exports = (sequelize, Sequelize) => {
    const Quiz = sequelize.define('quiz', {
        question: {
            type: Sequelize.STRING,
        },
        image: {
            type: Sequelize.STRING,
        },
        a: {
            type: Sequelize.STRING,
        },
        b: {
            type: Sequelize.STRING,
        },
        c: {
            type: Sequelize.STRING,
        },
        d: {
            type: Sequelize.STRING, 
        },
        key: {
            type: Sequelize.STRING,
        },
        levelId: {
            type: Sequelize.INTEGER, 
        },
    });
    return Quiz;
}