## JavaMaster — учебная платформа по Java

Коротко: фронтенд (Vite + React + TS) и бэкенд (Spring Boot). Без регистрации и прогресса. Уроки и задания приходят с бэкенда по `/api/lessons`.

### Стек
- Frontend: Vite, React, TypeScript, TailwindCSS, Lucide Icons
- Backend: Java 17, Spring Boot (Web)

### Структура
```
backend/            # Spring Boot приложение
frontend/           # Vite + React фронтенд
```

### Быстрый старт

1) Запуск бэкенда (Spring Boot)
- Windows:
```
cd backend
mvnw.cmd spring-boot:run
```
- macOS/Linux:
```
cd backend
./mvnw spring-boot:run
```
Сервис поднимется на `http://localhost:8080`

Проверка API: `http://localhost:8080/api/lessons`

2) Запуск фронтенда (Vite)
```
cd frontend
npm install
npm run dev
```
Откройте: `http://localhost:5173`

Proxy настроен: запросы с фронта на `/api` идут на `http://localhost:8080` (см. `frontend/vite.config.ts`).

### Как это работает
- Фронтенд показывает главную страницу, список уроков, конспекты и задания. При выборе урока — отображает теорию и практику.
- Бэкенд отдаёт список уроков: `GET /api/lessons` (заголовок, описание, длительность, темы, теория, задание).
- Прогресс, профиль и уведомления отключены по требованиям (сайт для анонимного использования).

### Полезные команды
- Backend тесты: `cd backend && mvnw.cmd test` (Windows) или `./mvnw test`
- Сборка backend JAR: `cd backend && mvnw.cmd package` или `./mvnw package`
- Lint/типизация фронта: `cd frontend && npm run typecheck` (если настроено) или `tsc --noEmit`

### Примечания
- Требуется: Java 17+, Node.js 18+.
- Если порт 8080 занят — измените `server.port` в `backend/src/main/resources/application.properties` или освободите порт.


