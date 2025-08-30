# 🚀 DevOps Test Assignment: Sample App Deployment

This project demonstrates a complete **DevOps workflow** — from containerization to CI/CD and monitoring.  
It shows how modern tools like **Docker, Docker Compose, GitHub Actions, Prometheus, and Grafana** help automate application development and deployment.

---

## 📋 Quick Start (Run Locally)

### 1. Clone the repository
```bash
git clone https://github.com/JacobVell/devops-test-app.git && cd devops-test-app
```
### 2. Start all services with Docker Compose
```bash
sudo docker-compose up -d
```
### 3. Access the applications

| Service    | URL                         | Username | Password |
|------------|-----------------------------|----------|----------|
| App           | [http://localhost:8888](http://localhost:8888) | —        | —        |
| Grafana    | [http://localhost:3001](http://localhost:3001) | admin    | admin    |
| Prometheus | [http://localhost:9090](http://localhost:9090) | —        | —        |
| cAdvisor   | [http://localhost:8080](http://localhost:8080) | —        | —        |
