
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable()
  })
  .createTable('ingredients', tbl => {
    tbl.increments();
    tbl.string('name', 255).notNullable()
})
.createTable('junction', tbl => {
    tbl.increments();
    tbl.float('quantity')
    tbl.integer('recipe_id').notNullable().references('id').inTable('recipes').onDelete("RESTRICT").onUpdate('CASCADE')
    tbl.integer('ingredient_id').notNullable().references('id').inTable('ingredients').unsigned().onDelete("RESTRICT").onUpdate('CASCADE')
    
})
.createTable('steps', tbl => {
    tbl.increments();
    tbl.string('step_number', 255).notNullable()
    tbl.string('instruction', 255).notNullable()
    tbl.integer('recipe_id').notNullable().references('id').inTable('recipes').onDelete("RESTRICT").onUpdate('CASCADE')

})

};

exports.down = function(knex) {
    return knex.schema  
        .dropTableIfExists('steps')
        .dropTableIfExists('junction')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')

  
};
