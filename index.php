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
                <a href="/vagas" class="btn text-warning">Vagas</a>
            </div><!--Fecha Vagas-->

        </div><!--Fecha Elementos de pesquisa-->

        <div class="col-3"><!-- Abre Clique de login -->
            <div class="text-center">
                <button onclick="redirecionar()" class="btn btn-outline-success">Entre aqui!</button>
            </div>
        </div><!-- Fecha Clique de login -->

    </nav><!-- Fecha barra de navegação -->

    <main class="container-fluid mt-5 bg-warning p-0">

        <div class="row container bg-warning text-center rounded mx-auto bg-white p-5 m-5"><!--ABRE SISTEMA DE BUSCAS-->
            <div class="row">
                <div class="text-center row">
                    <div class="input-group mb-3 col">
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="b-pesquisa">
                    </div>
                    <div class="col">
                        <button class="btn btn-primary">Procurar bicos</button>
                    </div>
                </div>
            </div>
        </div> <!--Fecha o sistema de busca-->

        <div class="col bg-top text-center container-fluid bg-light rounded-lg"> <!---Abre os banners de engajamento-->
            <div class="row p-3 rounded">
                <div class="col text-justify m-1">
                    <div class="col p-paraph ">
                        <div class="col mb-5 mt-5 text-center p-text-tittle">
                            Encontre a <strong>independência</strong> financeira!
                        </div>
                        <div class="row p-text-body ">
                            <div class="col rounded-lg p-3 m-5 text-center rounded rounded-lg p-1 mb-5 shadow-sm">
                                <img src="./src/image/b-1-banner.svg" alt="p-bn-promo" class="p-bn-banner col p-1 mb-5 ">
                                <div class="mb-5">
                                    <div class="row-3">
                                        Consquiste o <strong>seu</strong> mercado!
                                    </div>
                                </div>
                            </div>
                            <div class="col rounded-lg p-3 m-5 text-center rounded rounded-lg p-1 mb-5 shadow-sm">
                                <img src="./src/image/b-4-banner.svg" alt="p-bn-promo" class="p-bn-banner col p-1 mb-5 ">
                                <div class="mb-5">
                                    <div class="row-3">
                                        Construa sua <strong>independência</strong>!
                                    </div>
                                </div>
                            </div>
                            <div class="col rounded-lg p-3 m-5 text-center rounded rounded-lg p-1 mb-5 shadow-sm">
                                <img src="./src/image/b-3-banner.svg" alt="p-bn-promo" class="p-bn-banner col mb-5 ">
                                <div class="mb-5">
                                    <div class="row-3">
                                        <div class="col p-text-tittle mb-3">Quer saber mais?</div>
                                        <button class="btn btn-outline-success" onclick="redirecionar()">
                                            Clique aqui!
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!---Fecha o banners de engajamento-->

    </main><!-- Fecha o main -->

</body>
</html>