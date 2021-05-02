/**
 * @param {Knex} knex 
 */
exports.up = function(knex) {
    return knex.schema.createTable('spendings', t => {
        t.bigincrements('id');
        t.bigInteger('user_id').unsigned().nullable();
        t.string('title');
        t.date('date');
        t.bigInteger('wallet_id').unsigned().nullable();
        t.foreign('user_id').references('users.id');
        t.foreign('wallet_id').references('wallets.id');
        t.timestamps();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('spendings')
};
