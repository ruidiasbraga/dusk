# dusk
Dusk Colours is a basic colour changer based on the time of day with a very relaxing pattern.


Very basic JS for a simple necessity... changing colours of text based on time of day on a colour pattern resembling dusk time.
Easy to use, just import dusk.js on your project and use the function to execute it based on you refresh time.


dusk(/*DOM Element*/, /* miliseconds interval */);

/* Example */

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" type="text/css" href="./css/main.css">
    <title>Dusk Colours</title>
</head>
<body>
	<div class="content">
		<div class="title" id="title" name="title">Dusk Colours</div>
		<div class="paragraph" id="paragraph" name="paragraph">Dusk Colours is a basic colour changer based on the time of day with a very relaxing pattern.</div>
	</div>
</body>
	<script type="text/javascript" src="./js/dusk.js" charset="UTF-8"></script>
</html>


dusk('title', 2000);
