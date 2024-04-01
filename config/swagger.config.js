import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';

const swaggerJsDoc = YAML.load("apis.yaml");

export const swaggerServe = swaggerUI.serve;
export const swaggerSetup = swaggerUI.setup(swaggerJsDoc);
