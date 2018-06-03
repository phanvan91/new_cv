<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{asset('CV/css/bootstrap.min.css')}}"/>
    <link rel="stylesheet" href="{{asset('CV/css/font-awesome.min.css')}}"/>
    <link rel="stylesheet" href="{{asset('CV/css/flaticon.css')}}"/>
    <link rel="stylesheet" href="{{asset('CV/css/owl.carousel.css')}}"/>
    <link rel="stylesheet" href="{{asset('CV/css/magnific-popup.css')}}"/>
    <link rel="stylesheet" href="{{asset('CV/css/style.css')}}"/>
    <link rel="stylesheet" href="{{asset('style.css')}}"/>

    <title>CV Nguyễn Văn Phan </title>


</head>
<body>
    <div id="root"></div>

    <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
    <script src="{{asset('CV/js/jquery-2.1.4.min.js')}}"></script>
    <script src="{{asset('CV/js/bootstrap.min.js')}}"></script>
    <script src="{{asset('CV/js/owl.carousel.min.js')}}"></script>
    <script src="{{asset('CV/js/magnific-popup.min.js')}}"></script>
    <script src="{{asset('CV/js/circle-progress.min.js')}}"></script>
    <script src="{{asset('CV/js/main.js')}}"></script>
</body>
</html>
