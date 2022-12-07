pipeline {
    agent any
    stages {
        stage('install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Start test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Start dev') {
            steps {
               sh 'npm run dev'
            }
        }
    }
}
