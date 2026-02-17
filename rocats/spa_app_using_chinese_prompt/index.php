<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Reader</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        #bookdiv {
            background-color: #FFFACD;
            font-family: Georgia, serif;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
            white-space: pre-wrap;
            line-height: 1.8;
            font-size: 16px;
        }
    </style>
</head>
<body>

<?php
$bookcontent = file_get_contents("https://www.gutenberg.org/cache/epub/1661/pg1661.txt");
?>

<div id="bookdiv"><?php echo htmlspecialchars($bookcontent); ?></div>

</body>
</html>
