export enum ENVIRONMENT {
    TESTING = 'TESTING',
    DEVELOPMENT = 'DEVELOPMENT',
    STAGING = 'STAGING',
    PRODUCTION = 'PRODUCTION',
}

const API_BASE_URL_DEV = '';

const testing = {
    API_BASE_URL: API_BASE_URL_DEV,
    API_CUSTOM: `${API_BASE_URL_DEV}/custom`,
}

const development = {
    API_BASE_URL: API_BASE_URL_DEV,
    API_CUSTOM: `${API_BASE_URL_DEV}/custom`,
}
const staging = {
    API_BASE_URL: API_BASE_URL_DEV,
    API_CUSTOM: `${API_BASE_URL_DEV}/custom`,
}

const production = {
    API_BASE_URL: API_BASE_URL_DEV,
    API_CUSTOM: `${API_BASE_URL_DEV}/custom`,
}

export const CURRENT_ENVIRONMENT: ENVIRONMENT = ENVIRONMENT.DEVELOPMENT;


const environments = {
    TESTING: testing,
    DEVELOPMENT: development,
    STAGING: staging,
    PRODUCTION: production,
};

const environmentProject = environments[CURRENT_ENVIRONMENT];

export const API_BASE_URL = environmentProject.API_BASE_URL;
export const API_CUSTOM = environmentProject.API_CUSTOM;
