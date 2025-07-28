<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @vite("resources/css/app.css")
</head>
<body>
    <form method="post" action={{route('profile.update.image')}} enctype="multipart/form-data">
        @csrf
        @method('PATCH')
        <input type="file" name="image" />
        <button type="submit">Envoyer</button>
    </form>
</body>
</html>
