pipeline {
  environment {
    registry = "chatthana/monorepo-app"
    dockerHubCredentialId = "docker-hub-personal"
    appName = "app1"
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
          docker.build registry + ":${BUILD_NUMBER}", "-f Dockerfile.${appName}"
        }
      }
    }
  }
}