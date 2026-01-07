/**
 * API Client Module
 * 
 * This module provides a client for making API requests to the backend.
 * It includes methods for GET, POST, PUT, DELETE, and PATCH requests,
 * with support for authentication headers and error handling.
 * 
 * @module api
 */

class APIClient {
  /**
   * Initialize the API client
   * @param {string} baseURL - The base URL for all API requests
   * @param {object} options - Optional configuration
   */
  constructor(baseURL = '/api', options = {}) {
    this.baseURL = baseURL;
    this.timeout = options.timeout || 30000;
    this.headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
    this.token = options.token || null;
  }

  /**
   * Set authentication token
   * @param {string} token - JWT or API token
   */
  setToken(token) {
    this.token = token;
    if (token) {
      this.headers['Authorization'] = `Bearer ${token}`;
    } else {
      delete this.headers['Authorization'];
    }
  }

  /**
   * Make an HTTP request
   * @param {string} method - HTTP method (GET, POST, PUT, DELETE, PATCH)
   * @param {string} endpoint - API endpoint path
   * @param {object} data - Request payload
   * @param {object} options - Additional request options
   * @returns {Promise} Response data
   */
  async request(method, endpoint, data = null, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const fetchOptions = {
      method,
      headers: { ...this.headers, ...options.headers },
      signal: AbortSignal.timeout(this.timeout),
    };

    if (data) {
      fetchOptions.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(url, fetchOptions);

      if (!response.ok) {
        const error = await this.handleError(response);
        throw error;
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      }

      return response;
    } catch (error) {
      if (error instanceof AbortSignal) {
        throw new Error(`Request timeout after ${this.timeout}ms`);
      }
      throw error;
    }
  }

  /**
   * Handle API errors
   * @param {Response} response - Fetch response object
   * @returns {Error} Error object
   */
  async handleError(response) {
    let errorMessage = `HTTP ${response.status}: ${response.statusText}`;

    try {
      const data = await response.json();
      if (data.message) {
        errorMessage = data.message;
      }
    } catch (e) {
      // Response is not JSON, use default error message
    }

    const error = new Error(errorMessage);
    error.status = response.status;
    return error;
  }

  /**
   * GET request
   * @param {string} endpoint - API endpoint
   * @param {object} options - Request options
   * @returns {Promise} Response data
   */
  get(endpoint, options = {}) {
    return this.request('GET', endpoint, null, options);
  }

  /**
   * POST request
   * @param {string} endpoint - API endpoint
   * @param {object} data - Request payload
   * @param {object} options - Request options
   * @returns {Promise} Response data
   */
  post(endpoint, data, options = {}) {
    return this.request('POST', endpoint, data, options);
  }

  /**
   * PUT request
   * @param {string} endpoint - API endpoint
   * @param {object} data - Request payload
   * @param {object} options - Request options
   * @returns {Promise} Response data
   */
  put(endpoint, data, options = {}) {
    return this.request('PUT', endpoint, data, options);
  }

  /**
   * PATCH request
   * @param {string} endpoint - API endpoint
   * @param {object} data - Request payload
   * @param {object} options - Request options
   * @returns {Promise} Response data
   */
  patch(endpoint, data, options = {}) {
    return this.request('PATCH', endpoint, data, options);
  }

  /**
   * DELETE request
   * @param {string} endpoint - API endpoint
   * @param {object} options - Request options
   * @returns {Promise} Response data
   */
  delete(endpoint, options = {}) {
    return this.request('DELETE', endpoint, null, options);
  }
}

// Create and export a default instance
const apiClient = new APIClient();

export { APIClient, apiClient as default };
