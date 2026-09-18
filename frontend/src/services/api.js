// src/services/api.js

export const BASE_URL = "http://localhost:8080/api";

export const API = {
  AUTH: {
    REGISTER: `${BASE_URL}/auth/register`,
    LOGIN: `${BASE_URL}/auth/login`,
  },

  USER: {
    TEST: `${BASE_URL}/user/test`,
  },

  TECHNICIAN: {
    TEST: `${BASE_URL}/technician/test`,
  },
};

export default BASE_URL;