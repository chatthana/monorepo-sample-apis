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
        echo "COMMIT = $GIT_COMMIT"
        script {
          docker.withRegistry("", "docker-hub-personal") {
            def image = docker.build registry + ":cidev"
            image.push()
          }
        }
      }
    }
  }
}