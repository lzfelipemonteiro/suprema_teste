import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('session_times', table => {
    table.string('id', 191).primary();
    table.string('time', 191).notNullable();
    table.string('room_id', 191).notNullable();
    table.dateTime('created_at').defaultTo(knex.fn.now());
    table.dateTime('updated_at').defaultTo(knex.fn.now());

    table.foreign('room_id').references('id').inTable('rooms');
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('session_times');
}

