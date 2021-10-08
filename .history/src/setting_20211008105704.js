let API_SERVER_VAL = '';

switch (process.env.NODE_ENV) {
    case 'development':
        API_SERVER_VAL = 'http://seriapp.pythonanywhere.com/api/signin/';
        break;
    case 'production':
        API_SERVER_VAL = process.env.REACT_APP_API_SERVER;
        break;
    default:
        API_SERVER_VAL = 'https://ppmvalue.pythonanywhere.com/';
        break;
}

export const API_SERVER = API_SERVER_VAL;