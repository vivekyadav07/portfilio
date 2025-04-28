import axios from 'axios'

const BASE_URL = 'https://www.redmine.org/users/715891m' // Replace with your Redmine URL
const API_KEY = 'YOUR_REDMINE_API_KEY' // Store in .env for security

const redmineApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Redmine-API-Key': API_KEY,
  },
})

// Fetch all issues
export function getIssues() {
  return redmineApi
    .get('/issues.json')
    .then((response) => response.data.issues)
    .catch((error) => {
      console.error('Error fetching issues:', error)
      throw error
    })
}

// Create an issue
export function createIssue(projectId, subject, description) {
  return redmineApi
    .post('/issues.json', {
      issue: { project_id: projectId, subject, description },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error creating issue:', error)
      throw error
    })
}

export default redmineApi
