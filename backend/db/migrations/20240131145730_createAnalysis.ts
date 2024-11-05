import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('analysis', table => {
    table.string('id').primary();
    table.string('pattern').notNullable();
    table.string('possible_result').notNullable();
    table.string('strategy_id').notNullable();
    table.boolean('is_active').notNullable().defaultTo(true); // Assume que a coluna is_active também é necessária aqui
    table.dateTime('created_at').notNullable().defaultTo(knex.fn.now());
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

    // Estabelecendo a chave estrangeira para 'strategy_id'
    table.foreign('strategy_id').references('id').inTable('strategies').onUpdate('CASCADE').onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('analysis');
}
