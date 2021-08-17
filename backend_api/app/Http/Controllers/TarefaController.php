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
        // Lista as tarefas e faz a paginação
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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
