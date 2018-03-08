<?php
$file = __DIR__ . '/../settings.json';
//$content = json_decode(file_get_contents($file));
$content = file_get_contents($file);
//echo '<pre>';
//echo PHP_EOL;
//echo gettype($content);
//echo PHP_EOL;
//echo $content->categoryList;
//echo PHP_EOL;
//echo json_encode($content, JSON_PRETTY_PRINT);
//echo file_get_contents($file);
echo $content;