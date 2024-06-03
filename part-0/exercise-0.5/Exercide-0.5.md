# 0.5: Single page app diagram

> Create a diagram depicting the situation where the user goes to the [single-page app](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#single-page-app) version of the notes app at [https://studies.cs.helsinki.fi/exampleapp/spa](https://studies.cs.helsinki.fi/exampleapp/spa).

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
```

It's visible that _spa_ apps make less requests than the tradition form and it just make request to `.js` and `.css`, `.json` etc, but it does not make requests to more HTML5 documents, the main idea of _SPA_. 

![2024-06-03_10-46.png](./2024-06-03_10-46.png)