/**
 * @param {Knex} knex 
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', t => {
        t.bigincrements('id');
        t.string('name');
        t.string('email');
        t.unique('email');
        t.string('password');
        t.timestamps();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
