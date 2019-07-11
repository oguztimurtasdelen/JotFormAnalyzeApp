<?php
include 'connection.php';


// Posted info will be here!
$formID="14233241506978";
$question="Injection blocked?";
$answer="Yes or No";


$statement = $conn->prepare("SELECT formID FROM formInfo WHERE formID=$formID");
$statement->execute();
$statement->setFetchMode(PDO::FETCH_ASSOC);
$data = $statement->fetch();

if (gettype($data) == "boolean") $functionIndex=0;
elseif (gettype($data)== "array") $functionIndex=1;
else $functionIndex=2;
switch ($functionIndex) 
{
	case 0:
		addQuestion();
		break;
	case 1:
		updateQuestion();
		break;

	default:
		echo "We will die all for a day!";
		die;
		break;
}

function updateQuestion()
{
	try 
	{
		global $conn, $formID, $answer;
		$getQuestionID = $conn->prepare("SELECT questionID FROM questioninfo WHERE formID=:formID");
		$getQuestionID->bindParam(':formID', $formID);
		$getQuestionID->execute();
		$getQuestionID->setFetchMode(PDO::FETCH_ASSOC);
		$data = $getQuestionID->fetch();
		foreach ($data as $key => $value) 
		{
			$updateQuestion = "UPDATE answerinfo SET answer='$answer' WHERE questionID=$value";
			$conn->exec($updateQuestion);
		}
		
		echo "Question has been updated!"; die;
		die;
		
	} catch (PDOException $error) 
	{
		echo $error->getMessage();
	}

}




function addQuestion() //Injection blocked
{
	global $conn, $formID, $question, $answer;

	try 
	{
		$queryForm = $conn->prepare("INSERT INTO forminfo (formID) VALUES (:formID)");
		$queryQuestion = $conn->prepare("INSERT INTO questioninfo (questionText,formID) VALUES (:question, :formID)");
		$queryAnswer = $conn->prepare("INSERT INTO answerinfo (answer) VALUES (:answer)");

		$queryForm->bindParam(':formID', $formID);
		$queryQuestion->bindParam(':question', $question);
		$queryQuestion->bindParam(':formID', $formID);
		$queryAnswer->bindParam(':answer', $answer);

		$queryForm->execute();
		echo " Query Form has completed! | ";
		$queryQuestion->execute();
		echo " Query Question has completed! | ";
		$queryAnswer->execute();
		echo " Query Answer has completed! | ";

		
	} catch (PDOException $error) 
	{
		echo $error->getMessage();
	}
}