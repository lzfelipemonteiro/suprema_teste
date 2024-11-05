import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('variables_messages', table => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('trigger_id').notNullable();
    table.dateTime('created_at').notNullable().defaultTo(knex.fn.now());
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

    // Estabelecendo a chave estrangeira para 'trigger_id'
    table.foreign('trigger_id').references('triggers.id');
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('variables_messages');
}

