RESTful Routes:

A Table of all 7 RESTful Routes

=================================================================================================
NAME   |  PATH         | HTTP VERB  | PURPOSE
=================================================================================================
Index  | /dogs         | GET        | List all dogs
=================================================================================================
New    | /dogs/new     | GET        | Show New dog form
=================================================================================================
Create | /dogs         | POST       | Create a new dog, then redirect somewhere
=================================================================================================
Show   | /dogs/:id     | GET        | Show info about one specific dog
=================================================================================================
Edit   | /dogs/:id/edit| GET        | Show edit form for one dog
=================================================================================================
Update | /dogs/:id     | PUT        | Updaet a particular dog, then redirect somewhere
=================================================================================================
Destroy| /dogs/:id     | DELETE     | Delete a particular dog, then redirect somewhere
=================================================================================================
