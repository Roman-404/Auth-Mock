import { Server } from 'react-mock';
const endPoint = '/api/user';

const response = {
        user: {
          email: 'hello@world',
          password: 'password',
          token: '86fasfgfsogHGad'
    }
};
 
const requestHandler = () => {
  return [200, { 'Content-Type': 'application/json' }, JSON.stringify(response)];
};
 
Server.mockGet(endPoint, requestHandler);
Server.on();