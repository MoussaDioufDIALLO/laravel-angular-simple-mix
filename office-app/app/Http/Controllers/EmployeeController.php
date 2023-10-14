<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;  

class EmployeeController extends Controller
{
    public function index()
    {
        $employees = Employee::all(); 
        return response()->json($employees);
    }
    
    public function store(Request $request)
    {
        $employees = new Employee([
            'name' => $request->input('name'),
            'address' => $request->input('address'),
            'mobile' => $request->input('mobile'),
        ]);;
        $employees->save();
        return response()->json(['message'=>"Data saved successfully"]);
    }
    public function show($id)
    {
        $employee = Employee::find($id);
        return response()->json($employee); 
    }

}