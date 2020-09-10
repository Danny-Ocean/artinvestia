<?php

//$db = new SQLite3('u855730178_galdb', SQLITE3_OPEN_CREATE | SQLITE3_OPEN_READWRITE);

//$db = new mysqli('localhost', 'artinvestia', '12ar6tdetstrdzfugg76t657ghiö,mnjhvhvzj', 'artinvestia')
$db = new mysqli('localhost', 'u855730178_josua', '12ar6tdetstrdzfugg76t657ghi', 'u855730178_galdb');
    /* check connection */
    if ($db->connect_errno) {
        printf("Connect failed: %s\n", $db->connect_error);
        exit();
    }



    $q = 'INSERT INTO searches (q1, q2, q3, q4, q5, email, name, notes) VALUES (' . (int)$_GET["q1"] . ',' . (int)$_GET["q2"] . ',' . (int)$_GET["q3"] . ',' . (int)$_GET["q4"] . ',' . (int)$_GET["q5"] . ',"' . $_GET["email"] . '", "' . $_GET["name"] . '", "' . $_GET["notes"] . '");';

$result = $db -> prepare($q);
$result -> execute();


//echo $q;
header('Location: thanks.html');
 ?>
