<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ruleRegister extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */

    public $validator = null;
    protected function failedValidation($validator)
    {
        $this->validator = $validator;
    }

    public function rules()
    {
        return [
            'name' => 'bail|required|min:4',
            'email' => 'required|email',
            'password' => 'required|min:6',
           
        ];
    }

    public function attributes()
    {
        return [
           
            
        ];
    }
    public function messages()
    {
        return [
            'name.required' => 'Tên không được bỏ trống',
            'email.unique' => 'Email đã tồn tại',
           
        ];
    }


    public function withValidator($validator)
    {
        // $validator->after(function ($validator) {
        //     $validator->errors()->add('field', 'Something is wrong with this field!');
        // });
    }
}
