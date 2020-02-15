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
        $result = file_get_contents("https://api12gt.herokuapp.com/trip/".$id_militar."");
        $trips = json_decode($result);
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
                                    <th>Pst/Grd</th>
                                    <th>Nome</th>
                                    <th>Status</th>
                                    <th>Módulo</th>
                                    <th>Dias</th>
                                    <th>Missões</th>
                                </tr>
                            </thead>
                            <tbody>
                            <?php foreach($trips as $trip): ?>
                                <tr>
                                    <td data-label="Pst / Grd"><?php echo $trip->pst_grd; ?></td>
                                    <td data-label="Nome"><?php echo $trip->nome; ?></td>
                                    <td data-label="Status"><?php echo $trip->status; ?></td>
                                    <td data-label="Módulo"><?php echo $trip->modulo; ?></td>
                                    <?php if($trip->status === "COMISSIONADO"){ ?>
                                        <td data-label="Dias Restantes"><?php echo $trip->dias; ?></td>
                                    <?php } else { ?>
                                        <td data-label="Diárias Realizadas"><?php echo $trip->dias; ?></td>
                                    <?php }; ?>
                                    <td><div class="btn-missoes"><a href="missao.php?id=<?php echo $trip->_id; ?>">MISSÕES</a></div></td>
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