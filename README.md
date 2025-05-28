# infra3project_vladalinbosiiacs202

## Prerequisites

- Docker and Docker Compose installed

---

## DNS Setup


The domain [`vladalinbosiiproject.duckdns.org`](https://vladalinbosiiproject.duckdns.org) is **already configured** to point to `127.0.0.1` (localhost).  
**No DuckDNS setup is needed.**


---

## How to Run the Project

1. Run the project from the root directory:
    ```
    docker compose up 
    ```
2. Wait until all containers are "Started".

---

## Accessing the App

Open in your browser:
https://vladalinbosiiproject.duckdns.org
If it doesn't work to access the link from the first time, please refresh the page and it will work
---

## SSL Certificates and ENV file

- Let's Encrypt certificates generated via Certbot are automatically generated
- In order to facilitate running the project, I have included the .env file, normally the file would be included in .gitignore, and the person running the project should create a .env file with their own credentials

---







