import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('signals', table => {
    table.string('id').primary();
    table.string('analysis_id').nullable();
    table.string('room_id').notNullable();
    table.dateTime('created_at').notNullable().defaultTo(knex.fn.now());
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

    // Estabelecendo a chave estrangeira para 'room_id'
    table.foreign('room_id').references('id').inTable('rooms').onUpdate('CASCADE').onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('signals');
}
