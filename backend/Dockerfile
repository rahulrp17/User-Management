# Use JDK 21 base image
FROM eclipse-temurin:21-jdk

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Build the JAR file
RUN ./mvnw clean package -DskipTests

# Run the built JAR
CMD ["java", "-jar", "$(ls target/*.jar | head -n 1)"]




