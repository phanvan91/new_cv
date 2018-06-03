<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
class HomeController extends Controller
{
    public function downLoad ($filename)
    {
        $file = public_path('download/') . $filename;
        return response()->download($file);
    }
    public function sendEmail(Request $request)
    {
        $data = [
            'name'=>$request->name,
            'email'=>$request->email,
            'subject'=>$request->subject,
            'tin_nhan'=>$request->message,
        ];
        $mail = Mail::send('Mail',$data,function($msg){
            $msg->from('phanvan91@gmail.com');
            $msg->to('phanvan91@gmail.com','Web CV');
            $msg->subject('Mail phanvan91.club');
        });
        return response()->json('You have successfully sent the message',200);
    }
}
