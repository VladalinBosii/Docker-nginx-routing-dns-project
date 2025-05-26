# infra3project_vladalinbosiiacs202

## Prerequisites

- Docker and Docker Compose installed

---

## DNS Setup


The domain [`infra3projectvladalinbosiiacs202.duckdns.org`](https://infra3projectvladalinbosiiacs202.duckdns.org) is **already configured** to point to `127.0.0.1` (localhost).  
**No DuckDNS setup is needed.**


---

## How to Run the Project

1. Run the project from the root directory:
    ```
    docker compose up --build
    ```
2. Wait until all containers are "Started".

---

## Accessing the App

Open in your browser:
https://infra3projectvladalinbosiiacs202.duckdns.org

---

## SSL Certificates

- Let's Encrypt certificates generated via Certbot are included in nginx/certs/ for secure HTTPS 

---

## Bind Mounts

**All files and folders referenced by Docker Compose `volumes` are included in this zip:**
- `nginx/nginx.conf`
- `nginx/certs/`
- `/src/main/resources/static/`
---







