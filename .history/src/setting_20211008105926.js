let API_SERVER_VAL = "";

switch (process.env.NODE_ENV) {
  case "development":
    API_SERVER_VAL = "http://seriapp.pythonanywhere.com/api/signin/";
    break;
  case "production":
    API_SERVER_VAL = "https://seriapp.pythonanywhere.com/api/signin/";
    break;
  default:
    API_SERVER_VAL = "http://seriapp.pythonanywhere.com/api/signin/";
    break;
}

defuexport const API_SERVER = API_SERVER_VAL;
