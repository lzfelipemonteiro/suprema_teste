import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('apis_url', table => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('url').notNullable();
    table.string('type').notNullable();
    table.dateTime('created_at').notNullable().defaultTo(knex.fn.now());
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('apis_url');
}
