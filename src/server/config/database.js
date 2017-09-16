import Sequelize from 'sequelize';
import constants from './constants';

const sequelize = new Sequelize(constants.DATABASE_URL);

const db = {
  User: sequelize.import('../models/user')
};

sequelize.sync().then(() => {
  console.log('Sequelize running');
});

db.sequelize = sequelize;

export default db;
