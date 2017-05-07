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
        <nav class="sidebar-nav" :class="{folded, unfolded: !folded}">
            <ul class="brand">
                <li class="brand-item only-unfolded"><h1>{{ config('app.name') }}</h1></li>
                <li class="brand-item only-folded"><h1>{{ config('app.shortcut_name') }}</h1></li>
            </ul>
            <ul class="items">
                <li v-for="route in $router.options.routes" v-if="route.showInMenu" @click.self="navItemClick" class="item" :class="{ active: $route.name === route.name}">
                    <router-link :to="{ name: route.name }"><icon v-if="route.icon" :name="route.icon"></icon><span class="page-name">@{{ route.title }}</span></router-link>
                </li>
            </ul>
            <button @click="toggleMenu"><icon name="fold"></icon></button>
        </nav>
        <main>
            @yield('body')
            <header class="page-header">
                <ul class="breadcrumb">
                    <li>Shopper</li>
                    <li>@{{ pagesNames[$route.name] }}</li>
                </ul>
                <div class="actions">
                    <router-link class="btn btn-primary login" :to="{ name: 'login' }"><icon name="user"></icon> Se connecter / S'inscrire</router-link>
                </div>
            </header>
            <router-view class="view"></router-view>
        </main>
    </div>
</body>
<script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
</html>