
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step_number: '1', instruction: 'fry egg', recipe_id: '1'},
        {id: 2, step_number: '2', instruction: 'mix in bowl', recipe_id: '2'}
       
        
       
      ]);
    });
};
