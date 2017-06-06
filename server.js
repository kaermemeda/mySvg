const Sequelize = require('sequelize');
const sequelize = new Sequelize('sparrow', null, null, {
    dialect: 'sqlite',
    storage: './sparrow.db'
});

sequelize.authenticate();

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});
// // force: true will drop the table if it already exists
// User.sync({force: true}).then(() => {
//   // Table created
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });

async function getAll() {
    const data = await User.findAll({
        where: {
            id: 1
        }
    });
}
