<?php
//VARIABLES
$server = 'localhost';
$username = 'root';
$password = '';
$database = 'sweepstake_db';
$query = 'SELECT * FROM tb_agent';
$filename = $database;
//DATABASE CONNECTION
$mysql = mysql_connect($server, $username, $password);
mysql_select_db($database, $mysql);
$result = mysql_query($query, $mysql) or die(mysql_error());
mysql_close($mysql);
//CSV PROCESS
$header = $csv_output = '';
$fields = mysql_num_fields($result);
for ($i = 0; $i < $fields; $i++)
{
    $header .= mysql_field_name($result, $i) . ",";
}
$header .= "\n";
while ($rowr = mysql_fetch_row($result))
{
    for ($j = 0; $j < $i; $j++)
    {
        $csv_output .= $rowr[$j] . ", ";
    }
    $csv_output .= "\n";
}
//CSV OUTPUT
$csv_output = $header . $csv_output;
header("Content-type: text/x-csv");
header("Content-Disposition: attachment; filename=" . $filename . ".csv");
header("Pragma: no-cache");
header("Expires: 0");
print "$csv_output";
exit;
?>
