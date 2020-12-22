<!DOCTYPE html>
<html lang="pt-BR">

<head>

    <!-- Tags metas funcionais -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="/src/style/home.css">
    <link rel="stylesheet" href="/src/style/style.css">
    <!-- CSS bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    
    <!-- Script bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    <script src="./src/controller/script.js"></script>
    <title>Bico Online</title>

</head>

<body>

    <nav class="container-fluid navbar fixed-top navigation bg-light border border-warning rounded-bottom rounded border-top-0"><!--Abre nav-->
        
        <div class="col-3"><!--Abre B-Logo-->
            <div class="col-3">
                <a class="navbar-brand" href="/">
                    <img src="./src/image/b-logo.png" alt="b-logo" class="b-logo">
                </a>
            </div>
        </div><!--Fecha B-Logo-->

        <div class="col-6 navbar"><!--Abre Elementos de pesquisa-->

            <div class="col-3"><!--Abre Vagas-->
                <a href="/bicos" class="btn text-warning"><strong>Bicos</strong></a>
            </div><!--Fecha Vagas-->

        </div><!--Fecha Elementos de pesquisa-->

        <div class="col-3"><!-- Abre Clique de login -->
            <div class="text-center">
                <button onclick="redirecionar()" class="btn btn-outline-success">Entre aqui!</button>
            </div>
        </div><!-- Fecha Clique de login -->

    </nav><!-- Fecha barra de navegação -->

</body>

</html>