# 🚀 DevOps Test Assignment: Sample App Deployment

Этот проект демонстрирует полный **DevOps-процесс** — от контейнеризации до CI/CD и мониторинга.  
Он показывает, как современные инструменты, такие как **Docker, Docker Compose, GitHub Actions, Prometheus и Grafana**, помогают автоматизировать разработку и деплой приложений.

---

## 📋 Быстрый старт (Run Locally)

### 1. Клонируем репозиторий
```bash
git clone https://github.com/JacobVell/devops-test-app.git && cd devops-test-app
```
### 2. Запускаем все сервисы через Docker Compose
```bash
docker-compose up -d
```
3. Доступ к приложениям
Сервис	URL	Username	Password
Приложение	http://localhost:8888
	—	—
Grafana	http://localhost:3001
	admin	admin
Prometheus	http://localhost:9090
	—	—
cAdvisor	http://localhost:8080
	—	—
