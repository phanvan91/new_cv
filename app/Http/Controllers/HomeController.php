<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function downLoad ($filename)
    {
        $file = public_path('download/') . $filename;
        return response()->download($file);
    }
    public function sendEmail(Request $request)
    {
        dd($request->all());
    }
}
