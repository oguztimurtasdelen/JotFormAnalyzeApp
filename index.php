<!DOCTYPE html>
<html>
<head>
	<title>JT Quiz App</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<script src="http://js.jotform.com/JotForm.min.js"></script>
	<script src="http://js.jotform.com/FormPicker.js"></script>
	<script type="text/javascript" src="jquery-3.4.1.min.js"></script>
</head>

<body>
	<a href="#"><img src="quantumlogo.png" style="width:10%"></a>
	<br>
	<a href="#">About Us</a>
	<br>
	<a href="#">How It Works</a>
	<br>
	<a href="#">FAQ</a>
	<hr>
	<button onclick="startApp()">Let's Get Started</button>
	<form action="analyze.php" style="display:none" id="getForm" method="post">
		<input type="text" name="postAPI">
		<input type="text" name="postFormID">
		<input type="submit">
	</form>
	<script type="text/javascript">
	function startApp()
	{
		JF.init({
			enableCookieAuth: false,
			appName: "JF Quiz App",
			accessType:'full'
		});

		JF.login(()=>
		{
			
			JF.FormPicker
			({
				multiSelect:false,
				infinite_scroll:true,
				search:true,
				onSelect:(r)=>
				{
					JF.getSettings((response) => 
					{
						var apiKey=JF.getAPIKey();
						var formID=r[0.].id;
						$('input[name="postAPI"]').val(apiKey);
						$('input[name="postFormID"]').val(formID);
						$('#getForm').submit();
					});
				}
			});

		}, (e)=> {
			document.write("Error Message: " + e);
		});
		
	}
	</script>

	
</body>
</html>