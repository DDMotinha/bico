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
    <main>
        <div>
            
        </div>
    </main>
    <footer class="container-fluid bg-warning align-content-center"><!---FECHA O FOOTER-->
        <div class="row">
            <div class="col">
                <img src="src/image/b-logo.png" class="p-bn-img">
            </div>
            <div class="col m-3">
                <div class="row">
                    <div class="col-3 p-bn-footer">
                        <a href="https://www.facebook.com/">
                            <img src="src/image/p-bn-facebook.png" alt="p-bn-facebook" class="p-bn-icon p-bn-width">
                        </a>
                    </div>
                    <div class="col-3 p-bn-footer">
                        <a href="https://www.instagram.com/">
                            <img src="src/image/p-bn-instagram.png" alt="p-bn-instagram" class="p-bn-icon p-bn-width">
                        </a>
                    </div>
                    <div class="col-3 p-bn-footer">
                        <a href="https://twitter.com/">
                            <img src="src/image/p-bn-twitter.png" alt="p-bn-twitter" class="p-bn-icon p-bn-width">
                        </a>
                    </div>
                    <div class="col-3 p-bn-footer">
                        <a href="https://www.youtube.com/">
                            <img src="src/image/p-bn-youtube.png" alt="p-bn-youtube" class="p-bn-icon p-bn-width">
                        </a>
                    </div>
                </div>
                <div class="col mt-3 p-bn-text-footer text-center p-bn-footer-text">
                    © 2020 Copyright: <strong>Bico LTDA</strong>
                </div>
            </div>
            <div class="col">

            </div>
        </div>
    </footer><!---FECHA O FOOTER-->

</body>

</html>