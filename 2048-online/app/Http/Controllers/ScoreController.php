<?php

namespace App\Http\Controllers;

use App\Models\Score;
use Illuminate\Http\Request;

/**
 * @author BenjaminDTS
 */
class ScoreController extends Controller
{
    public function index()
    {
        return Score::orderBy('score', 'desc')->take(20)->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'player_name' => 'required|string|max:20',
            'score' => 'required|integer'
        ]);
        return Score::create($validated);
    }
}
