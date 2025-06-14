import axios from 'axios';

// Configuration from environment variables
const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'https://obsidian-acute-cry.glitch.me',
  TOKEN: import.meta.env.VITE_API_SECRET_KEY
};

console.log('API Configuration:', {
  baseURL: API_CONFIG.BASE_URL,
  hasToken: !!API_CONFIG.TOKEN,
  tokenLength: API_CONFIG.TOKEN ? API_CONFIG.TOKEN.length : 0
});

// Create axios instance
const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: false
});

// Add request interceptor to include token in every request
api.interceptors.request.use(
  (config) => {
    // Clone the config to avoid mutating the original
    const newConfig = { ...config };
    
    // Add Authorization header if token exists
    if (API_CONFIG.TOKEN) {
      newConfig.headers = {
        ...newConfig.headers,
        'Authorization': `Bearer ${API_CONFIG.TOKEN}`
      };
    }
    
    console.log('Request Config:', {
      url: newConfig.url,
      method: newConfig.method,
      headers: newConfig.headers
    });
    
    return newConfig;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log('Request:', {
      method: config.method.toUpperCase(),
      url: config.url,
      headers: config.headers
    });
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    console.log('Response:', {
      status: response.status,
      url: response.config.url,
      data: response.data
    });
    return response;
  },
  (error) => {
    const errorInfo = {
      message: error.message,
      status: error.response?.status,
      url: error.config?.url,
      responseData: error.response?.data,
      headers: error.config?.headers
    };
    console.error('API Error:', errorInfo);
    return Promise.reject(errorInfo);
  }
);

// API methods organized by resource
export const certificationApi = {
  // Certification endpoints
  getAll: () => {
    console.log('Fetching all certifications');
    return api.get('/api/certifications');
  },
  getById: (id) => api.get(`/api/certifications/${id}`),
  create: (data) => api.post('/api/certifications', data),
  update: (id, data) => api.put(`/api/certifications/${id}`, data),
  delete: (id) => api.delete(`/api/certifications/${id}`)
};

export const projectApi = {
  // Project endpoints
  getAll: () => {
    console.log('Fetching all projects');
    return api.get('/api/projects');
  },
  getFeatured: () => api.get('/api/projects/featured'),
  getById: (id) => api.get(`/api/projects/${id}`),
  search: (query) => api.get(`/api/projects/search?q=${encodeURIComponent(query)}`),
  create: (data) => api.post('/api/projects', data),
  update: (id, data) => api.put(`/api/projects/${id}`, data),
  delete: (id) => api.delete(`/api/projects/${id}`)
};

export const skillApi = {
  // Skill endpoints
  getAll: () => {
    console.log('Fetching all skills');
    return api.get('/api/skills');
  },
  getByCategory: (category) => api.get(`/api/skills/category/${category}`),
  getById: (id) => api.get(`/api/skills/${id}`),
  create: (data) => api.post('/api/skills', data),
  update: (id, data) => api.put(`/api/skills/${id}`, data),
  delete: (id) => api.delete(`/api/skills/${id}`)
};

// Export the base API instance for custom requests
export default api;
