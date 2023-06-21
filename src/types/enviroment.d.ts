export {};
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SECRET_KEY: string;
      AUTHSERVICEURL: string;
      PORT: string;
    }
  }
}
