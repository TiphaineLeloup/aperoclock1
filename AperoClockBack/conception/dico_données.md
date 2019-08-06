| `Nom` | `Description` | `Type` | `Commentaire` | `Entité` |
|--|--|--|--|--|
| firstname | Prénom | STRING(60) NOT NULL |  | User |
| lastname | Nom | STRING(60)  NOT NULL |  | User |
| longitude |  | SMALLINT | Pour le calcul position | User |
| latitude |  | SMALLINT | Pour le calcul position | User |
|numero||SMALLINT NULLABLE| pour api qui remplira long et lat| User|
|type_voie||string(50) NULLABLE| pour api qui remplira long et lat| User|
|postal_code||SMALLINT(11)| pour api qui remplira long et lat| User|
|city||STRING NOT NULL| pour api qui remplira long et lat| User|
| email |  | STRING NOT NULL|  | User |
| password |  | STRING(60) NOT NULL | secure argon2i | User |
| description | Présentation perso | TEXT(500) NULLABLE|  | User |
| image | Nom | STRING NULLABLE |  | User |
| createdAt | date inscription | DATETIME NOT NULL | gestion event doctrine | User |
| updatedAt | dernière modification  | DATETIME NOT NULL| gestion event doctrine | User |
|--|--|--|--|--|

| `Nom` | `Description` | `Type` | `Commentaire` | `Entité` |
|--|--|--|--|--|
| name | nom du groupe | STRING(180) NOT NULL |  | Group |
| description | présentation du groupe | TEXT(500) NULLABLE |  | Group |
|created_by| membre qui a créé le groupe| STRING NOT NULL||Group
| createdAt | date création | DATETIME NOT NULL | gestion event doctrine | Group |
| updatedAt | dernière modification  | DATETIME NOT NULL | gestion event doctrine | Group|
|--|--|--|--|--|

| `Nom` | `Description` | `Type` | `Commentaire` | `Entité` |
|--|--|--|--|--|
| name | nom de l'alerte | STRING(180) NOT NULL |  | Alert |
| description | definition alerte | STRING NULLABLE |  | Alert |
| createdAt | date création | DATETIME NOT NULL | gestion event doctrine | Alert |
| updatedAt | dernière modification  | DATETIME NOT NULL | gestion event doctrine | Alert|
|--|--|--|--|--|

| `Nom` | `Description` | `Type` | `Commentaire` | `Entité` |
|--|--|--|--|--|
| name | nom du role | STRING(180) NOT NULL |  | Role |
| code | code role | STRING NOT NULL|  | Role |
| createdAt | date création | DATETIME NOT NULL | gestion event doctrine | Role |
| updatedAt | dernière modification  | DATETIME NOT NULL | gestion event doctrine | Role|
|--|--|--|--|--|

| `Nom` | `Description` | `Type` | `Commentaire` | `Entité` |
|--|--|--|--|--|
| name | nom de l'event | STRING NOT NULL |  | Event |
| description | présentation de l'event | STRING NULLABLE |  | Event |
|date| date de l'event | DATETIME NOT NULL | |event|
|numero||SMALLINT NULLABLE| pour api qui remplira long et lat| Event|
|type_voie||string(50) NULLABLE| pour api qui remplira long et lat| Event|
|postal_code||SMALLINT(11)| pour api qui remplira long et lat| Event|
|city||STRING NOT NULL| pour api qui remplira long et lat| Event|
| longitude |  | SMALLINT | Pour le calcul position | Event |
| latitude |  | SMALLINT | Pour le calcul position | Event |
|created_by| membre qui a créé l'event| STRING NOT NULL||Event
| createdAt | date création | DATETIME NOT NULL | gestion Event doctrine | Event |
| updatedAt | dernière modification  | DATETIME NOT NULL | gestion event doctrine | Event

|--|--|--|--|--|

| `Nom` | `Description` | `Type` | `Commentaire` | `Entité` |
|--|--|--|--|--|
| name | nom de la catégorie | STRING(180) NOT NULL |  | Category |
| description | présentation de la catégorie | STRING NULLABLE |  | Category |
| createdAt | date création | DATETIME NOT NULL | gestion event doctrine | Category |
| updatedAt | dernière modification  | DATETIME NOT NULL | gestion event doctrine | Category

|--|--|--|--|--|

| `Nom` | `Description` | `Type` | `Commentaire` | `Entité` |
|--|--|--|--|--|
| content | contenu du commentaire | TEXT NOT NULL |  | Comment |
| createdAt | date création | DATETIME NOT NULL | gestion event doctrine | Comment |
| updatedAt | dernière modification  | DATETIME NOT NULL | gestion event doctrine | Comment

|--|--|--|--|--|




TABLES INTERMEDIAIRES :
# alert_User 
# user_event










