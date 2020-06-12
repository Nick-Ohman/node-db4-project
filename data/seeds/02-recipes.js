
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'bread'},
        {id: 2, name: 'tortillas'},
        {id: 3, name: 'fried eggs'}
      ]);
    });
};
