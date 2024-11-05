import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('rooms_tips', table => {
    table.string('tip_id', 100).notNullable();
    table.string('room_id', 100).notNullable();

    // Definindo as chaves estrangeiras
    table.foreign('tip_id').references('id').inTable('tips').onUpdate('CASCADE').onDelete('CASCADE');
    table.foreign('room_id').references('id').inTable('rooms').onUpdate('CASCADE').onDelete('CASCADE');

    // Definindo a chave primária composta
    table.primary(['tip_id', 'room_id']);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('rooms_tips');
}
