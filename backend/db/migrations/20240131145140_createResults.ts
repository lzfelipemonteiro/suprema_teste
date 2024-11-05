import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('results', table => {
    table.string('id').primary();
    table.string('number').notNullable();
    table.integer('gale').notNullable();
    table.boolean('is_won').notNullable().defaultTo(false);
    table.string('signal_id').notNullable();
    table.dateTime('created_at').notNullable().defaultTo(knex.fn.now());
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

    // Estabelecendo a chave estrangeira para 'signal_id'
    table.foreign('signal_id').references('id').inTable('signals').onUpdate('CASCADE').onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('results');
}
