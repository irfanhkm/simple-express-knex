/**
 * @param {Knex} knex 
 */
exports.up = function(knex) {
    return knex.schema.createTable('wallets', t => {
        t.bigincrements('id');
        t.bigInteger('user_id').unsigned().nullable();
        t.string('name');
        //t.foreign('user_id').references('users.id');
        t.timestamps();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('wallets')
};
