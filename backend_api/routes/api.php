<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TarefaController;

/*******************************************************************************
    Rotas da API
********************************************************************************/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Lista todos as tarefas
Route::get('/', [TarefaController::class, 'index'])->name('index');
Route::get('/index', [TarefaController::class, 'index'])->name('index');
Route::get('/home', [TarefaController::class, 'index'])->name('index');
Route::get('/tarefas', [TarefaController::class, 'index'])->name('index');

// Retorna as tarefas filtradas
Route::get('tarefa/filter/{busca?}/{concluido?}', [TarefaController::class, 'filter']);

// Retorna somente a tarefa solicitada
Route::match(['get', 'post'], 'tarefa/{id}', [TarefaController::class, 'show']);

// Cria uma nova tarefa
Route::post('tarefa', [TarefaController::class, 'store']);

// Atualiza uma tarefa
Route::put('tarefa/{id}', [TarefaController::class, 'update']);

// Apaga uma tarefa
Route::delete('tarefa/{id}', [TarefaController::class, 'destroy']);