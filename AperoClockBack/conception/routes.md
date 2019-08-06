| URL | Name | Description de la page | Méthode HTTP | Controller | Méthode | commentaire |
|--|--|--|--|--|--|--|
|`/` | home | page accueil site | GET | EventController | home | Page d'accueil avec son adresse à entrer et les events à proximité |
|`/signup`|signup|formulaire d'inscription|GET/POST|UserController|signUp||
`/login`|login|Formulaire de connexion|GET/POST|UserController|login||
|`/event/[id]` | event_show | L'event et ses commentaires | GET | EventController | show |   |
|`/event/tag/{name}` | event_tag | liste des events selon un tag | GET | EventController | eventByTag ||
`/user/profile`|profile_show|Informations du compte et liste des events crées ou auxquels on a participé |GET|UserController|show||
`/user/profile/edit`|profile_edit|Modifiction des informations perso du compte utilisateur|POST|UserController|edit||
|`/user/event/new`|event_new|Formulaire création d'event|POST|EventController|form||
|`/user/event/update`|event_update|Formulaire modif d'event|POST|EventController|form||
|`/backend/event/[id]/toggle`|backend_event_toggle|Bloquer /débloquer uneevent|POST|Backend\EventController|toggle||
|`/backend/event/comment/[id]/toggle`|backend_comment_toggle|Bloquer/débloquer une réponse à un event|POST|Backend\ReviewController|toggle||
|`/backend/users`|backend_users_list|Permet à un admin de consulter les users|POST|Backend\UserController|list||
|`/backend/users/[id]/role`|backend_users_role|Permet à un admin de modifier le role d'un user|POST|Backend\UserController|toggleRole||
|`/backend/tag/list`|backend_tag_list|liste des tags|GET|Backend\TagController|list||
|`/backend/tag/new`|backend_tag_new|Créer un tag|POST|TagController|form|Méthode commune creation update|
|`/backend/tag/[id]/edit`|backend_tag_edit|Modifier un tag|POST|TagController|form||
|`/backend/tag/[id]/delete`|backend_tag_delete|Supprimer un tag|POST|TagController|delete||
|`/backend/event/alerts`|backend_event_alerts|lister les alertes disponibles|GET|EventController|alerts||
