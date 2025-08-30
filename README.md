🚀 DevOps Test Assignment: Sample App Deployment
📋 Overview
This project showcases a complete DevOps pipeline, encompassing containerization, orchestration, CI/CD, and monitoring. It demonstrates the power of modern tools like Docker, Docker Compose, GitHub Actions, Prometheus, and Grafana to streamline the development and deployment process.

⚙️ How to Run Locally
Clone the repository:

git clone [https://github.com/your-repo-link.git](https://github.com/your-repo-link.git)
cd devops-assignment

Start all services with Docker Compose:

docker-compose up -d

The application will be accessible at: http://localhost:8888

Grafana: http://localhost:3001 (Username: admin, Password: admin)

Prometheus: http://localhost:9090

cAdvisor: http://localhost:8080

📁 Project Structure
getting-started-app/: The core application code.

Dockerfile: Instructions for building a clean, optimized Docker image.

docker-compose.yaml: The orchestration file to manage all services.

nginx.conf: Nginx reverse proxy configuration.

.github/workflows/main.yaml: The heart of the CI/CD pipeline.

monitoring/prometheus.yml: Prometheus configuration file.

monitoring/grafana-provisioning/: Grafana provisioning setup.

🔄 CI/CD Pipeline
Our automated pipeline is built with GitHub Actions.  It triggers on every push to the main branch and executes a series of crucial stages:

Build & Lint: Verifies code quality and the Dockerfile.

Run Tests: Executes the application's built-in tests.

Build & Push Docker Image: Creates and publishes a versioned image to Docker Hub.

Deploy: Deploys the new image to a staging server.

Rollback: A safety mechanism that reverts to the last working image if deployment fails.

📊 Monitoring
We use an industry-standard monitoring stack:

Prometheus: Collects metrics from all containers.

Grafana: Provides beautiful, insightful dashboards for visualizing performance metrics.

You can access the dashboards and metrics at the specified local ports.
