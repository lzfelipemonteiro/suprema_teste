import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('signals_analysis', table => {
    table.string('signal_id', 100).notNullable();
    table.string('analysis_id', 100).notNullable();

    table.foreign('signal_id').references('id').inTable('signals').onUpdate('CASCADE').onDelete('CASCADE');
    table.foreign('analysis_id').references('id').inTable('analysis').onUpdate('CASCADE').onDelete('CASCADE');

    // Definindo chave primária composta
    table.primary(['signal_id', 'analysis_id']);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('signals_analysis');
}
