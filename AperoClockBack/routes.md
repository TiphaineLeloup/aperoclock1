
EventForm : 
​
  input: EventName
  TextArea: EventDesc

  input: EventDate
  input: EventPlace
​
​
LoginForm :
​
  input: UserName
  input: UserPassword
  Checkbox: RememberMe
  btn: SignInButton
​
GroupForm :
​
  input: GroupName
  TextArea: GroupDesc
  Btn: CreateGroup
​
​
SignIn: 
  input: Name
  input: Password
  input: ConfirmPassword
  input: EMail
  input: BirthDate
  Text: FullName (facultatif)
  Text: addressComplementInside
  Text: addressComplementOutside
  Tex: addressNumber
  Text: addressCity
  Text: addressPostalCode
  Text: Country
  TextArea: UserDesc
  img: profilePic
  Btn: SendForm
​
UserProfile:
​
  input: Name
  input: NewPassword
  input: ConfirmNewPassword
  input: EMail
  input: Age
  Text: FullName(facultatif)
  Text: addressComplementInside
  Text: addressComplementOutside
  Tex: addressNumber
  Text: addressCity
  Text: addressPostalCode
  Text: Country
  TextArea: UserDesc
  img: profilePic
  Btn: EditProfile
​
​
Alerts:
​
  checkbox: EmailAlert
  number: AlertRange
  checkbox: AddSuppAlert
  checkbox: EditAlert
  number: EventRange





| URL | Name | Description de la page | Méthode HTTP | Controller | Méthode | commentaire |
|--|--|--|--|--|--|--|
|`/` | home| page accueil | GET | MainController | home |  |
|`/signup`|signup|créer un user en bdd|GET/POST|UserController|signUp||
|`/login`|login|Récupère un user pour le connecter|GET/POST|UserController|login||
|`/[UserId]/profile/infos/list`|profile_infos_list|Informations du compte |GET|UserController|infosList||
|`/[UserId]/profile/infos/edit`|profile_edit|Modifiction des informations perso du compte utilisateur|POST|UserController|ProfileEdit||
|`/[UserId]/profile/alerts/list`|profile_alerts_list|liste des alertes perso du compte utilisateur|POST|AlertController|list||
|`/[UserId]/profile/alerts/edit`|profile_alerts_edit|Modifiction des alertes perso du compte utilisateur|POST|AlertController|alertsEdit||
|`/[userId]/dashboard`|dashboard|infos du dashboard|GET|UserController|dashboard|
|`/events`|events_list|liste de tous les events|GET|EventController|list|| 
|`/[UserId]/events`|events_user_list|liste des events de l'user|GET|EventController|listByUser| | 
|`/[eventId]`|event_show|infos d'un event selon son Id|GET|EventController|show| |
|`/[GroupId]/events`|group_events_list|liste des events selon un groupe|GET|GroupController|eventsList| |
|`/[GroupId]/[eventId]`|group_event_show|un event d' un groupe selon leurs id|GET|GroupController|eventShow| |
|`/[UserId]/groups`|user_groups|les groupes auxquels appartient le user|GET|UserController|userGroups| Groups auxquels l'user est inscrit (ou créateur)| 
|`/groups`|groups_list|liste de tous les  groupes|GET|GroupController|list| |
|`/[groupId]`|group_show|infos d'un groupe selon son Id|GET|GroupController|show| | 
|`/[userId]/[eventId]/choice`|user_event_choice|choix de participation du user|POST|UserController|choice| | 
|`/[userId]/[eventId]/comment/new`|comment_new|création d'un commentaire d'un user sur un event|POST|CommentController|new| | 
|`/[userId]/[eventId]/comment/update`|comment_edit|modification d'un commentaire d'un user sur un event|POST|CommentController|edit| | 
|`/[userId]/[eventId]/comment/delete`|comment_delete|suppresion d'un commentaire d'un user sur un event|POST|CommentController|delete| | 
|`/[UserId]/event/create`|event_new| création d'un event|POST|EventController|new| | 
|`/[UserId]/event/edit`|event_edit| modification d'un event|POST|EventController|edit| | 
|`/[UserId]/event/delete`|event_delete| suppression d'un event|POST|EventController|delete| | 
|`/[UserId]/group/create`|group_new| création d'un groupe|POST|GroupController|new| | 
|`/[UserId]/group/edit`|group_edit| modification d'un groupe|POST|GroupController|edit| | 
|`/[UserId]/group/delete`|group_delete| suppression d'un groupe|POST|GroupController|delete| | 



						
URL	Name	Description de la page	Méthode HTTP	Controller	Méthode	commentaire
						
URL	Name	Description de la page	Méthode HTTP	Controller	Méthode	commentaire
/	home	page accueil	GET	HomeController	home	
/signup	signup	créer un user en bdd	POST	\API\UserController	signUp	
/login	login	Récupère un user pour le connecter	GET/POST	\API\UserController	login	
/[UserId]/profile/infos/list	profile_infos_list	Informations du compte	GET	\API\UserController	infosList	
/[UserId]/profile/infos/edit	profile_edit	Modifiction des informations perso du compte utilisateur	POST	\API\UserController	ProfileEdit	
/[UserId]/profile/alerts/list	profile_alerts_list	liste des alertes perso du compte utilisateur	POST	\API\AlertController	list	
/[UserId]/profile/alerts/edit	profile_alerts_edit	Modifiction des alertes perso du compte utilisateur	POST	\API\AlertController	alertsEdit	
/[userId]/dashboard	dashboard	infos du dashboard	GET	\API\UserController	dashboard	
/events	events_list	liste de tous les events	GET	\Backend\EventController	list	ADMIN
/[UserId]/events	events_user_list	liste des events de l'user	GET	EventController	listByUser	
/[eventId]	event_show	infos d'un event selon son Id	GET	\Backend\EventController	show	ADMIN
/[GroupId]/events	group_events_list	liste des events selon un groupe	GET	\Backend\GroupController	eventsList	ADMIN
/[GroupId]/[eventId]	group_event_show	un event d' un groupe selon leurs id	GET	GroupController	eventShow	
/[UserId]/groups	user_groups	les groupes auxquels appartient le user	GET	UserController	userGroups	
/groups	groups_list	liste de tous les groupes	GET	\Backend\GroupController	list	ADMIN
/[groupId]	group_show	infos d'un groupe selon son Id	GET	\Backend\GroupController	show	ADMIN
/[userId]/[eventId]/choice	user_event_choice	choix de participation du user	POST	UserController	choice	
/[userId]/[eventId]/comment/new	comment_new	création d'un commentaire d'un user sur un event	POST	CommentController	new	
/[userId]/[eventId]/comment/update	comment_edit	modification d'un commentaire d'un user sur un event	POST	CommentController	edit	
/[userId]/[eventId]/comment/delete	comment_delete	suppresion d'un commentaire d'un user sur un event	POST	CommentController	delete	
/[UserId]/event/create	event_new	création d'un event	POST	EventController	new	
/[UserId]/event/edit	event_edit	modification d'un event	POST	EventController	edit	
/[UserId]/event/delete	event_delete	suppression d'un event	POST	EventController	delete	
/[UserId]/group/create	group_new	création d'un groupe	POST	GroupController	new	
/[UserId]/group/edit	group_edit	modification d'un groupe	POST	GroupController	edit	
/[UserId]/group/delete	group_delete	suppression d'un groupe	POST	GroupController	delete	
/[UserId]/group/delete						
/users/	users_list	liste des users	GET	\Backend\UserController	list	ADMIN
/contact/	contact	envoi mail contact	POST	HomeController	contact	
