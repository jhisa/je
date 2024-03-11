pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'ansible-playbook playbook.yml'
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
}
