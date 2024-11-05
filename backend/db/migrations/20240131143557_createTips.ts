import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('tips', table => {
    table.string('id').primary();
    table.string('title').notNullable();
    table.string('text').notNullable();
    table.dateTime('schedule').notNullable();
    table.string('user_id').notNullable();
    table.dateTime('created_at').notNullable().defaultTo(knex.fn.now());
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

    // Configuração de chave estrangeira para vincular à tabela de usuários
    table.foreign('user_id').references('id').inTable('users').onUpdate('CASCADE').onDelete('SET NULL');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('tips');
}
