<!DOCTYPE html>
<html lang="pt-br">
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-150292189-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-150292189-1');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>1°/2°Grupo de Transporte</title>
    <link rel="stylesheet" type="text/css" href="./css/style.css" />
</head>
<body>
    <?php
        $id_militar = $_GET['id'];
        $result = file_get_contents("https://api12gt.herokuapp.com/missao/".$id_militar."");
        $missoes = json_decode($result);
    ?>
    <div class="header">
        <h3>1°/2°Grupo de Transporte</h3> 
    </div>
    <div class="container">
        <div class="row_links">
            <div class="col">
                <div class="col col-2">
                    <div class="links-container">
                        <div class="unidades butn">
                            <a href="diaria.html">Calculadora</a> 
                        </div>
                        <div class="unidades butn">
                            <a href="unidades.html">Esquadrões</a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <hr>
        </div>
        <div class="row">
            <div class="col">
                <div class="col col-2">  
                    <div class="table-container">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Número</th>
                                    <th>Início</th>
                                    <th>Fim</th>
                                    <th>Localidade</th>
                                    <th>Diária</th>
                                </tr>
                            </thead>
                            <tbody>
                            <?php foreach($missoes as $missao): ?>
                                <tr>
                                    <td data-label="Número"><?php echo $missao->numero; ?></td>
                                    <td data-label="Início"><?php echo $missao->inicio; ?></td>
                                    <td data-label="Fim"><?php echo $missao->fim; ?></td>
                                    <td data-label="Localidade"><?php echo $missao->localidade; ?></td>
                                    <td data-label="Diária"><?php echo $missao->diaria; ?></td>
                                </tr>
                            <?php endforeach; ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <hr>
        </div>
    </div>
    <div class="footer">
        <div class="row">
            <div class="col">
                <div class="feedback">
                    <div class="butn">
                        <a href="https://form.jotformz.com/92893915435671">Formulário de Feedback</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="direitos">
                    <span>Desenvolvido por Luiz Alberto - 1°/2°GT.</span>
                </div>
            </div>
        </div>
    </div>
</body>
</html>