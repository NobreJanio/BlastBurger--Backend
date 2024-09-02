/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('users', { 
        id: {
          primaryKey: true,
          allowNull: false, 
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
            validate:{
                isEmail:true
            }
        },
        password_hash: {
            type: Sequelize.STRING,
            allowNull: false
        },
        admin: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW,
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW,
        }
    })
  },
        
  async down (queryInterface) {
      await queryInterface.dropTable('users');
    
  }
};
