# 0.6: New note in Single page app diagram
> Create a diagram depicting the situation where the user creates a new note using the single-page version of the app.
```mermaid
sequenceDiagram
	autonumber
	
    box Server Client comunication in SPA(single page aplicatiiton) website
    	participant Client
    	participant Server
    end
	
	Client->> Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate Server
    Server-->> Client: 304 Not Modified HTML5 Document
    deactivate Server
    
	Client->>Server: GET /main.css
    activate Server
    Server-->>Client: 304 Not Modified The css styles file
    deactivate Server
    
    Client->>Server: GET /spa.js
    activate Server
    Server-->>Client: 200 the JavaScript file
    deactivate Server
        
    Client->>Server: GET /data.json
    activate Server
    Server-->>Client: 200 [the notes in .json format]
    deactivate Server

	Note over Server, Client: Creating a new note

	Client->>Server: POST /new_note_spa
    activate Server
    Server-->>Client: 201 Created
    deactivate Server
    
```
_SPA_ apps just sent the AJAX request throw POST and the list was just re-redered, so no need for a new HTML5 Document.
In the console was printed `{"message":"note created"}` when the 201 returned.

![2024-06-03_11-15.png](./2024-06-03_11-15.png)