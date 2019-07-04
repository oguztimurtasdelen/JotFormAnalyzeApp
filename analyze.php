<?php

if(!isset($_POST['postAPI'])) 
{
	header('Location: index.php');
}
$apiKey=$_POST['postAPI'];
$formID=$_POST['postFormID'];

$dataRequest=file_get_contents("https://api.jotform.com/form/".$formID."/submissions?apiKey=".$apiKey);
$dataResponse=json_decode($dataRequest,true);

$allData = [];
$arrayAnswers=array();
$elementTypes=['control_radio','control_dropdown','control_textbox','control_checkbox','control_number','control_textarea']; // allowable elements

for ($i=1; $i <= count($dataResponse['content'][0]['answers']) ; $i++) //turns up number of elements
{ 
	if (array_key_exists("answer", $dataResponse['content'][0]['answers'][$i])) //checks if element is a question
	{
		if (in_array($dataResponse['content'][0]['answers'][$i]['type'], $elementTypes)) //checks elements allowable
		{
			$arrayAnswers=[]; //clear the array after Bucket function
			for ($j=0; $j < count($dataResponse['content']) ; $j++)
			{ 
				if (gettype($dataResponse['content'][$j]['answers'][$i]['answer']) != "array") 
				{
					array_push($arrayAnswers, $dataResponse['content'][$j]['answers'][$i]['answer']);
				}
				else
				{
					for ($k=0; $k < count($dataResponse['content'][$j]['answers'][$i]['answer']) ; $k++) 
					{
						array_push($arrayAnswers, $dataResponse['content'][$j]['answers'][$i]['answer'][$k]);
					}
				}
			}
				
			$data = 
			[
				'question' => $dataResponse['content'][0]['answers'][$i]['text'],
				'answers' => array_count_values($arrayAnswers)
			];
				
			$allData[$i] = $data;
		}
			
	}
}
return $allData;
//print_r($allData);
?>