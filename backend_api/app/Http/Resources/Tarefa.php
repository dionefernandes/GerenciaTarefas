<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Tarefa extends JsonResource
{
    public function toArray($request)
    {
        //return parent::toArray($request);

        return [
            'id' => $this->id,
            'nome' => $this->nome,
            'descricao' => $this->descricao,
            'concluido' => $this->concluido
        ];
    }
}
