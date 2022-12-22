const { DataTypes } = require('sequelize')

const db = require('../utils/database')
const Users = require('./users.models')

const Follows = db.define('follows', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    userId:{
        type: DataTypes.UUID,
        allowNull: false,
        field: 'followersId',
        comment: 'Follower',
        references: {
            key: 'id',
            model: Users
        },
    },
    userId2:{
        type: DataTypes.UUID,
        allowNull: false,
        field: 'followingId',
        comment: 'Followed',
        references: {
            key: 'id',
            model: Users
        },
    }
})

module.exports = Follows
