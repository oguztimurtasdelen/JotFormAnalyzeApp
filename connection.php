<?php

$serverName="localhost:3306";
$dbName="jfquizapp";
$userName="root";
$password="";


try 
{
	$conn = new PDO ("mysql:host=$serverName;dbname=$dbName", $userName, $password);
	$conn -> setAttribute(PDO::ATTR_ERRMODE, PDO:: ERRMODE_EXCEPTION);
} catch (PDOException $error) 
{
	echo "Connection Failed: ". $error->getMessage();
	die;
}