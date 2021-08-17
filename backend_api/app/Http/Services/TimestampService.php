<?php
    namespace App\Services;

    Class TimestampService
    {
        public function timestampAtual() {
            // Retorna o timestamp atual para registrar atualizações na tarefa
            $date = date_create();
            date_timestamp_get($date);
        }
    }
?>