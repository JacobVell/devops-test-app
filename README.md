## 🚀 CI/CD Pipeline

This project is fully automated with **GitHub Actions**:

- ✅ **Build & Lint** – verifies code and Dockerfile
- ✅ **Run Tests** – executes unit tests (`npm test`)
- ✅ **Build Docker Image** – optimized multi-stage build
- ✅ **Push to Docker Hub** – image is automatically pushed to [Docker Hub](https://hub.docker.com/r/jacobvell/devops-test-app)
- ✅ **Deploy Ready** – you can pull and run the latest image with:

  ```bash
  docker pull jacobvell/devops-test-app:latest
  docker run -d -p 3000:3000 jacobvell/devops-test-app:latest
 
🌍 The application will be available at: http://localhost:3000 
### Access:
- **Grafana** → [http://localhost:3001](http://localhost:3001)  
  - Username: `admin`  
  - Password: `admin` 
- **Prometheus** → [http://localhost:9090](http://localhost:9090)  
- **cAdvisor** → [http://localhost:8080](http://localhost:8080)
