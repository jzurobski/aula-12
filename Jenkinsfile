
pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                git branch: 'main', url: 'https://github.com/jzurobski/aula-12.git'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                   sh 'NO_COLOR=1 npx cypress run'
            }
        }
    }
}
