FROM gradle:8.7.0-jdk21 AS build
COPY . /app
WORKDIR /app
RUN gradle build -x test --no-daemon

FROM eclipse-temurin:21-jdk-alpine
COPY --from=build /app/build/libs/*.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
