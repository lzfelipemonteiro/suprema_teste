import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('rooms', table => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('user_id').notNullable();
    table.string('bot_id').notNullable();
    table.string('chat_id').notNullable();
    table.string('type').notNullable();
    table.string('api_id').notNullable();
    table.string('link_game').notNullable();
    table.string('link_sign_up').notNullable();
    table.dateTime('created_at').notNullable().defaultTo(knex.fn.now());
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

    table.foreign('user_id').references('id').inTable('users').onUpdate('CASCADE').onDelete('SET NULL');
    table.foreign('api_id').references('id').inTable('apis_url').onUpdate('CASCADE').onDelete('SET NULL');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('rooms');
}
