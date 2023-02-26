# Используем образ Node.js
FROM node:14

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы проекта
COPY . .

# Устанавливаем зависимости
RUN npm install

# Собираем приложение
RUN npm run build

# Запускаем сервер
CMD [ "npm", "start" ]
