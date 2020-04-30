pipeline {
  environment {
    registry = "chatthana/monorepo-app"
    dockerHubCredentialId = "docker-hub-personal"
  }
  agent any
  stages {
    stage("Initialise project") {
      steps {
        sh "ls -lah"
      }
    }
    stage('Build image') {
      steps {
        script {
          docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
  }
}