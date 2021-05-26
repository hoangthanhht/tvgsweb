<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth; 
class PassportAuthController extends Controller
{
    /**
     * Registration
     */
    public function register(Request $request)
    {
        $this->validate($request, [
            //'name' => 'required|min:4',
            'email' => 'required|email',
            'password' => 'required|min:8',
        ]);
 
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
       
        $token = $user->createToken('LaravelAuthApp')->accessToken;
 
        return response()->json(['token' => $token], 200);
    }
 
    /**
     * Login
     */
    public function login(Request $request)
    {
        $data = [
            'email' => $request->email,
            'password' => $request->password
        ];
        
        
        if (auth()->attempt($data)) {
            $user = Auth::user(); 
            $token = auth()->user()->createToken('LaravelAuthApp')->accessToken;
            return response()->json(['token' => $token,'user' => $user], 200);
        } else {
            return response()->json(['error' => 'Mật khẩu hoặc password không đúng',
                                     'status'=> '401'
        
        ], 401);

        }
    }   
    public function details() 
    {
        $user = Auth::user(); 
        $token = auth()->user()->createToken('LaravelAuthApp')->accessToken;
        return response()->json(['token' => $token,'user' => $user], 200); 
    } 
}