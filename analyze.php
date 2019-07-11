<?php

header("Access-Control-Allow-Origin: *");
if(!isset($_POST['postAPI']))
	{ 
		header('Location: index.php'); 
	}

$apiKey=$_POST['postAPI'];
$formID=$_POST['postFormID'];


$dataRequest=file_get_contents("https://api.jotform.com/form/".$formID."/submissions?apiKey=".$apiKey);
$dataResponse=json_decode($dataRequest,true);


$data = [];
$arrayAnswers=array();
$elementTypes=['control_radio','control_dropdown','control_textbox','control_checkbox','control_number','control_textarea']; // allowable elements







// if (count($dataResponse['content'])>0) 
// {
// 	foreach ($dataResponse['content'] as $submissions) 
// 	{
// 		foreach ($submissions['answers'] as $qID => $elements) 
// 		{
			
// 			if (isset($elements['answer']) && 
// 				isset($elements['type']) &&
// 				in_array($elements['type'], $elementTypes)) 
// 			{
// 				if (!isset($data[$qID])) $data[$qID] = array();
// 				$tempAnswer = !is_array($elements['answer']) ? array($elements['answer']) : $elements['answer'];

// 				foreach ($tempAnswer as $value) 
// 				{
// 					if(isset($data[$qID][$value]))
// 					{
// 						$data[$qID][$value]++;
// 					} 
// 					else 
// 					{
// 						$data[$qID][$value] = 1;
// 					}
// 				}
// 			}
// 		}
// 	}


// 	echo json_encode($data);

// }
// else echo "No submission!";







if (count($dataResponse['content'])>0)
{
	foreach ($dataResponse['content'] as $submissions) 
	{
		foreach ($submissions['answers'] as $qID => $elements) 
		{	
			$arrayAnswers=[];
			if (isset($elements['answer']) &&
				isset($elements['type']) &&
				in_array($elements['type'], $elementTypes)) 
			{	
				if (gettype($elements['answer']) != "array") 
				{
					array_push($arrayAnswers, $elements['answer']);
					
				}
				else
				{
					for ($i=0; $i <count($elements['answer']) ; $i++) 
					{
						array_push($arrayAnswers, $elements['answer'][$i]);
						
					}	
				}
				


				if (!isset($data[$qID])) 
				{
					$data[$qID] = array(
						'question' => $elements['text'],
						'answer' => $arrayAnswers
					);
				}

				else 
				{
					foreach ($arrayAnswers as $arrValue) 
					{
						array_push($data[$qID]["answer"], $arrValue);
					}
				}
			}
		}
	}
	
	foreach ($data as $qIndex => $qValue) 
	{
		$data[$qIndex]['answer'] = array_count_values($data[$qIndex]['answer']);
		
	}
	echo json_encode($data);
	
	
	
}
else echo "No submission!";