# Disneyphile
___
## Procédure d'installation du projet
1. Exécuter les commandes `composer install` et `npm install`.
2. Dupliquez le fichier `.env.example`, puis renommez le duplicata en `.env`.
3. Exécutez la commande `php artisan key:generate` afin de générer la clé de chiffrement des données.
4. Exécutez la commande `php artisan migrate` afin de préparer la base de données avec les tables.
5. Pour lancer le serveur, veuillez faire `composer run dev`.
