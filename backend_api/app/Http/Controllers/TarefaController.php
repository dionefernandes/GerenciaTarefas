<?php

namespace App\Http\Controllers;

use App\Models\Tarefa as Tarefa;
use App\Http\Resources\Tarefa as TarefaResource;
use App\Services\TimestampService as TimestampService;
use Illuminate\Http\Request;

class TarefaController extends Controller
{
    public function index()
    {
        // Lista todas as tarefas e faz a paginação
        $tarefas = Tarefa::paginate(15);
        return TarefaResource::collection($tarefas);
    }

    public function store(Request $request)
    {
        // Obtem o timestamp atual
        $timestamp_atual = new TimestampService();
        $momento_atual = $timestamp_atual->timestampAtual();

        // Faz o cadastro de uma nova tarefa
        $tarefa = new Tarefa();
        $tarefa->nome = $request->input('nome');
        $tarefa->descricao = $request->input('descricao');
        $tarefa->concluido = $request->input('concluido');
        $tarefa->created_at = $momento_atual;
        $tarefa->updated_at  = $momento_atual;
    }

    public function show($id)
    {
        // Recupera apenas a tarefa solicitada
        $tarefa = Tarefa::findOrFail($id);
        return new TarefaResource($tarefa);
    }

    public function update(Request $request)
    {
        // Obtem o timestamp atual
        $timestamp_atual = new TimestampService();
        $momento_atual = $timestamp_atual->timestampAtual();

        // Permite a atualização de uma tarefa
        $tarefa = Tarefa::findOrFail( $request->id );
        $tarefa->nome = $request->input('nome');
        $tarefa->descricao = $request->input('descricao');
        $tarefa->concluido = $request->input('concluido');
        $tarefa->updated_at  = $momento_atual;

        if( $tarefa->save() ) {
            return new TarefaResource( $tarefa );
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
