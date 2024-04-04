# Build stage
FROM node:18.19.0 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g @ionic/cli
COPY . .
RUN npx ionic build

# Serve stage
FROM nginx:stable-alpine as serve-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
