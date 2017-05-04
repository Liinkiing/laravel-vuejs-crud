<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name') }} @if(isset($title)) {{ $title }} @endif</title>
    <link rel="stylesheet" type="text/css" href="{{asset('css/app.css')}}">
</head>
<body>
    <div id="app">
        <h1>Vue</h1>
        <router-view></router-view>
    </div>
</body>
<script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
</html>