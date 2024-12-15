# Language Translation



## Getting Started

Below is a brief guide to help you set up the project environment.

### 1. Clone the Repository

```bash
git clone 
cd <repository-directory>
```

### 2. Set Up the Environment

- **Node.js Dependencies**:
  ```bash
  cd frontend 
  npm install
  npm start

  cd backend
  npm install
  npm run dev
  ```



- **Frontend Services**: Run at [http://localhost:3000]
- **Backend Services**: Run at [http://localhost:4000]
- **Start Translibre Docker Services**  Service runs at [http://localhost:5001]
   ```bash
    // start docker using the command 
    docker run -ti  -p 5001:5000 libretranslate/libretranslate
   ```
- **Start Redis Docker Service**
  ```bash
     docker run -p 6379:6379 -it redis/redis-stack-server:latest
  ```
- **Why Redis**
 ```
    Redis is an open-source, in-memory key-value store used for caching.
    Once the translation for the world is available by hitting the libreTranslate API. It will store the result in the cache.
    So, for next API hit to libreTranslate with the same key word, it wont hit the libreTranslate API, saving the the cost.
    The key pair used to chaching is "text:language"
 ```





