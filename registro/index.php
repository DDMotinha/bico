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

    <main className="text-center justify-content-center container-sm align-text-center">
        <div class="text-center justify-content-center align-text-center">
            <div className="text-center col-3 justify-content-center container-lg align-text-center">
                <div class="text-center justify-content-center m-5 align-text-center">
                    <form class="form-signin">
                        <a href="/">
                            <img class="m-4 b-logo" src="../src/image/b-logo.png" alt="b-logo"/>
                        </a>
                        <div className="m-2">
                            <label for="inputEmail" class="sr-only">Usuário</label>
                            <input type="email" id="inputEmail" class="form-control m-2" placeholder="Usuário" required="" autofocus=""/>
                        </div>
                        
                        <div className="m-2">
                            <label for="inputPassword" class="sr-only">Senha</label>
                            <input type="password" id="inputPassword" class="form-control m-2" placeholder="Senha" required=""/>
                        </div>

                        <div className="m-2">
                            <label for="inputPassword" class="sr-only">Confirmação de senha</label>
                            <input type="password" id="inputPassword" class="form-control m-2" placeholder="Confirmação de senha" required=""/>
                        </div>

                        <div className="m-2">
                            <label for="inputEmail" class="sr-only">Email</label>
                            <input type="email" id="inputEmail" class="form-control m-2" placeholder="E-mail" required=""/>
                        </div>
                        
                        
                        <button class="btn btn-lg btn-outline-success btn-block m-2" type="submit">Registrar</button>
                        <a href="/login">
                            <div class="col m-3 p-bn-text-footer text-center p-bn-footer-text color text-color-success">
                                Já possui uma <strong>conta</strong>?
                            </div>
                        </a>
                    </form>
                </div>
            </div>
        </div>
    </main>

</body>
</html>