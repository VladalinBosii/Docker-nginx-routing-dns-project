# infra3project_vladalinbosiiacs202

## Prerequisites

- Docker and Docker Compose installed

---

## DNS and /etc/hosts Setup

Before running locally, **add this line to your hosts file** (needed for HTTPS and DNS to work):

**Linux/macOS:**  
`sudo nano /etc/hosts`  
Add:  
127.0.0.1 infra3projectvladalinbosiiacs202.duckdns.org

**Windows:**  
Open `C:\Windows\System32\drivers\etc\hosts` as Administrator  
Add:  
127.0.0.1 infra3projectvladalinbosiiacs202.duckdns.org


---

## Environment Variables

1. Add `.env` in the project root.
2. Paste these values into the `.env`:

    ```
    SPRING_DATASOURCE_URL=jdbc:postgresql://vb_db:5432/infra3project_vladalinbosiiacs202
    SPRING_DATASOURCE_USERNAME=spring
    SPRING_DATASOURCE_PASSWORD=spring
    ```

---

## How to Run the Project

1. Run the project from the root directory:
    ```sh
    docker compose up --build
    ```
2. Wait until all containers are "Started".

---

## Accessing the App

Open in your browser:
https://infra3projectvladalinbosiiacs202.duckdns.org/static/templates/index.html


- **Accept the browser security warning** (self-signed certificate for local assignment)
- Use the professional dashboard to add and view students.

---

## SSL Certificates

- Self-signed certs are included for local use (`nginx/certs/`).
- For public deployment, it should use Let’s Encrypt + Certbot for real, trusted certificates.

---

## Bind Mounts

**All files and folders referenced by Docker Compose `volumes` are included in this zip:**
- `nginx/nginx.conf`
- `nginx/certs/`
- `src/main/resources/static/js/`
- `src/main/resources/static/css/`
- `src/main/resources/static/templates/`

---







