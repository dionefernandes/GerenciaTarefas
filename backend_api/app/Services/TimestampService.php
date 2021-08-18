<?php
    namespace App\Services;

    Class TimestampService
    {
        public function timestampAtual() {
            // Retorna o timestamp atual para registrar atualizações na tarefa
            $date = date_create();
            $timestamp_atual = date_timestamp_get($date);

            return $timestamp_atual;
        }
    }
?>