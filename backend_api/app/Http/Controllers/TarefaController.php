<?php

namespace App\Http\Controllers;

use App\Models\Tarefa as Tarefa;
use App\Http\Resources\Tarefa as TarefaResource;
use App\Services\TimestampService;
use Illuminate\Http\Request;

class TarefaController extends Controller
{
    public function index()
    {
        // Lista todas as tarefas e faz a paginação
        $tarefas = Tarefa::all();
        return TarefaResource::collection($tarefas);
    }

    public function filter($busca = '', $concluido = '')
    {
        if($busca == '' || $concluido == '') {
            if($busca != '' && $concluido == '') {
                $concluido = $busca;
            }
            
            // Lista todas as tarefas e faz a paginação
            $tarefas = Tarefa::where('concluido', "{$concluido}")->get();
        } else {
            // Lista todas as tarefas e faz a paginação
            $tarefas = Tarefa::where('nome', 'LIKE', "%{$busca}%")
            ->where('concluido', "{$concluido}")
            ->get();
        }

        return TarefaResource::collection($tarefas);
    }

    public function store(Request $request)
    {
        try {
            // Faz o cadastro de uma nova tarefa
            $tarefa = new Tarefa();
            $tarefa->nome = $request->input('nome');
            $tarefa->descricao = $request->input('descricao');
            $tarefa->concluido = $request->input('concluido');

            if( $tarefa->save() ) {
                return new TarefaResource($tarefa);
            }
        } catch (Exception $e) {
            return 'Houve um problema e a tarefa não pode ser cadastrada. Tente novamente mais tarde.';
        }
        
    }

    public function show($id)
    {
        try {
            // Recupera apenas a tarefa solicitada
            $tarefa = Tarefa::findOrFail($id);
            return new TarefaResource($tarefa);
        } catch (Exception $e) {
            return 'Houve uma falha ao tentar exibir a tarefa solicitada. Tente novamente mais tarde.';
        }
    }

    public function update(Request $request)
    {
        try {
            // Permite a atualização de uma tarefa
            $tarefa = Tarefa::findOrFail( $request->id );
            $tarefa->nome = $request->input('nome');
            $tarefa->descricao = $request->input('descricao');
            $tarefa->concluido = $request->input('concluido');

            if( $tarefa->save() ) {
                return new TarefaResource($tarefa);
            }
        } catch (Exception $e) {
            return 'Houve um problema ao tentar atualizar a tarefa. Tente novamente mais tarde.';
        }
    }

    public function destroy($id)
    {
        // Recupera e exclui a tarefa solicitada
        $tarefa = Tarefa::findOrFail($id);

        if( $tarefa->delete() ) {
            return new TarefaResource($tarefa);
        }
    }
}
