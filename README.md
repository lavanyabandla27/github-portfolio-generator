# Resume Backend API

This backend powers the ATS-friendly AI Resume Generator. It receives user input and returns AI-enhanced resume suggestions.

## API Endpoint

`POST /api/resume/generate`

### Request body:
```json
{
  "name": "John Doe",
  "skills": ["JavaScript", "Node.js"],
  "experience": "2 years at XYZ Corp"
}
```