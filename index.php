<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="manifest" href="manifest.json">

    <link rel="shortcut icon" href="img/futbol.png">
    <link rel="icon" href="img/futbol.png">

    <link rel="apple-touch-icon" sizes="57x57" href="img/icons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="img/icons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="img/icons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="img/icons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="img/icons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="img/icons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="img/icons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="img/icons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="img/icons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="img/icons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="img/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="img/icons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="img/icons/favicon-16x16.png">

    <link rel="stylesheet" href="css/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="css/app/style.min.css">

	<script type="text/javascript" src="js/jquery/jquery-3.3.1.min.js"></script>
	<script type="text/javascript" src="js/bootstrap/popper.min.js"></script>
	<script type="text/javascript" src="js/bootstrap/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/fontawesome/all.min.js"></script>
	<script type="text/javascript" src="js/app/app.min.js?v=1.1"></script>

    <title>Stilling</title>

</head>
<body>

<div class="container-fluid mt-4">

    <div class="wrapper">

        <div class="text-center">
            <h1 class="display-3"><i class="fas fa-futbol"></i></h1>
            <h1>Stilling</h1>
        </div>

        <div class="mt-5" data-role="teams">
            <div class="row">
                <div class="col col-1"></div>
                <div class="col col-4 text-center" data-role="team" data-team="1">
                    <!-- Team 1 Box -->
                    <div data-role="add-goal" data-team="1">
                        <div data-role="team-box" class="team-box red m-auto">
                            <span><i class="fal fa-futbol fa-4x"></i></span>
                        </div>
                    </div>
                    <div data-role="score" class="display-1">0</div>
                </div>
                <div class="col col-2 text-center">
                    <div class="team-box m-auto"></div>
                    <div>
                        <span class="display-1">-</span>
                    </div>
                </div>
                <div class="col col-4 text-center" data-role="team" data-team="2">
                    <!-- Team 2 Box -->
                    <div data-role="add-goal" data-team="2">
                        <div data-role="team-box"  class="team-box black m-auto">
                            <span><i class="fal fa-futbol fa-4x"></i></span>
                        </div>
                    </div>
                    <div data-role="score" class="display-1">0</div>
                </div>
                <div class="col col-1"></div>
            </div>
        </div>

        <div class="fixed-bottom p-3">
            <div class="row">
                <div class="col px-2">
                    <div data-role="color-pick" data-team="1">
                        <button class="btn btn-primary">Bytt farge</button>
                    </div>
                </div>
                <div class="col text-center">
                    <button data-role="reset" class="btn btn-danger">Reset</button>
                </div>
                <div class="col px-2">
                    <div data-role="color-pick" data-team="2">
                        <button class="btn btn-primary">Bytt farge</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
</html>
