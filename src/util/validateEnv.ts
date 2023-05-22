import { cleanEnv, str, port, num } from "envalid";

export const validateEnv = (): void => {
  cleanEnv(process.env, {
    PORT: port({ default: 2100 }),
    DB: str(),
    DB_HOST: str(),
    DB_PORT: port({ default: 3306 }),
    DB_USERNAME: str(),
    DB_PASSWORD: str(),
    API_LEVEL: num(),
    SECRET: str(),
    SALT: num(),
  });
};
