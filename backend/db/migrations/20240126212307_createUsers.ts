import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', table => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('phone').notNullable();
    table.boolean('is_admin').notNullable().defaultTo(false);
    table.dateTime('created_at').notNullable().defaultTo(knex.fn.now());
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}
