<?php

namespace App\Http\Controllers;

use App\Models\Thread;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ThreadController extends Controller{

    public function index(){
        $threads = Thread::all();

        return Inertia::render('Threads/All', [
            'threads' => $threads
        ]);
    }

    public function create(){

    }
}
