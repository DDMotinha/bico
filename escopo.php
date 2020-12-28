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

    <nav class="container-fluid navbar navigation bg-light border border-warning rounded-bottom rounded border-top-0"><!--Abre nav-->
        
        <div class="col"><!--Abre B-Logo-->
            <div class="col p-bn-icon">
                <a class="navbar-brand" href="/">
                    <img src="../src/image/b-logo.png" alt="b-logo" class="b-logo">
                </a>
            </div>
        </div><!--Fecha B-Logo-->

        <div class="col navbar"><!--Abre Elementos de pesquisa-->

            <div class="col text-center"><!--Abre Vagas-->
                <a href="/bicos" class="btn text-warning">Bicos</a>
            </div><!--Fecha Vagas-->

        </div><!--Fecha Elementos de pesquisa-->

        <div class="col"><!-- Abre Clique de login -->
            <div class="text-center">
                <a href="/login">
                    <button class="btn btn-outline-success">Postar bico</button>
                </a>
            </div>
        </div><!-- Fecha Clique de login -->

    </nav><!-- Fecha barra de navegação -->

    <main class="container-fluid mt-5 bg-warning p-0">

        <div class="col bg-top text-center container-fluid bg-light rounded-lg"> <!---Abre os banners de engajamento-->
            <div class="row rounded">
                <div class="col text-center">
                    <div class="col p-paraph ">
                        <div class="col mb-5 mt-5 text-center p-text-tittle">
                            Encontre a <strong>independência</strong> financeira!
                        </div>
                        <div class="row p-text-body ">
                            <div class="col rounded-lg p-3 m-5 text-center rounded rounded-lg p-1 mb-5 shadow-sm">
                                <img src="../src/image/b-1-banner.svg" alt="p-bn-promo" class="p-bn-banner col p-1 mb-5 ">
                                <div class="mb-5">
                                    <div class="row-3">
                                        Consquiste o <strong>seu</strong> mercado!
                                    </div>
                                </div>
                            </div>
                            <div class="col rounded-lg p-3 m-5 text-center rounded rounded-lg p-1 mb-5 shadow-sm">
                                <img src="../src/image/b-4-banner.svg" alt="p-bn-promo" class="p-bn-banner col p-1 mb-5 ">
                                <div class="mb-5">
                                    <div class="row-3">
                                        Construa sua <strong>independência</strong>!
                                    </div>
                                </div>
                            </div>
                            <div class="col rounded-lg p-3 m-5 text-center rounded rounded-lg p-1 mb-5 shadow-sm">
                                <img src="../src/image/b-3-banner.svg" alt="p-bn-promo" class="p-bn-banner col mb-5 ">
                                <div class="mb-5">
                                    <div class="row-3">
                                        <div class="col p-text-tittle mb-3">Quer saber mais?</div>
                                        <a href="/login">
                                            <button class="btn btn-outline-success">Ver vagas!</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!---Fecha o banners de engajamento-->

    </main><!-- Fecha o main -->

    <footer class="container-fluid bg-warning text-center"><!---FECHA O FOOTER-->
        <div class="row">
            <div class="col m-3">
                <div class="row">
                    <div class="col p-bn-footer">
                        <a href="https://www.facebook.com/">
                            <img src="../src/image/p-bn-facebook.png" alt="p-bn-facebook" class="p-bn-icon p-bn-width">
                        </a>
                    </div>
                    <div class="col p-bn-footer">
                        <a href="https://www.instagram.com/">
                            <img src="../src/image/p-bn-instagram.png" alt="p-bn-instagram" class="p-bn-icon p-bn-width">
                        </a>
                    </div>
                    <div class="col p-bn-footer">
                        <a href="https://twitter.com/">
                            <img src="../src/image/p-bn-twitter.png" alt="p-bn-twitter" class="p-bn-icon p-bn-width">
                        </a>
                    </div>
                    <div class="col p-bn-footer">
                        <a href="https://www.youtube.com/">
                            <img src="../src/image/p-bn-youtube.png" alt="p-bn-youtube" class="p-bn-icon p-bn-width">
                        </a>
                    </div>
                </div>
                <div class="col mt-2 p-bn-text-footer text-center p-bn-footer-text">
                    © 2020 Copyright: <strong>Bico LTDA</strong>
                </div>
            </div>
        </div>
    </footer><!---FECHA O FOOTER-->

</body>
</html>