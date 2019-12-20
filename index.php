<?php
$dir= "./images/";
$folder= scandir($dir);
array_splice($folder,0,2);

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet"   href="css/responsiveslides.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery.1.11.1.js"></script>
    <script src="js/responsiveslides.min.js"></script>
    <title>Slider</title>
</head>
<body>
<div class="container">
    <div id="wrapper">
        <div class="callbacks_container">
            <ul class="rslides" id="slider">
                <?php
                 for ($i=0;$i<count($folder);$i++){
                     echo "<li class='slider_li'><img class='slider_img' src='images/". $folder[$i] . "' alt=''></li>";
                 }
                ?>
            </ul>
            <ul id="slider-pager">
                <?php
                for ($i=0;$i<count($folder);$i++){
                    echo "<li class='inner'><a><img class='thumbnail' src='images/". $folder[$i] . "' alt=''></a></li>";
                }
                ?>
            </ul>
        </div>
    </div>
</div>
<script src="js/script.js"></script>
</body>
</html>