<?php
$file="./the content.txt";
$doc=file_get_contents($file);
$array = explode("\n", file_get_contents($file));
$line=explode("\n",$doc);
foreach($line as $newline){
    
    echo $newline;
    
}

//echo $array[0];
//echo $array[2];
?>