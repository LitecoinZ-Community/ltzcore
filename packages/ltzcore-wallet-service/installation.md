The following document is a step-by-step guide to run BWS.

### Prerequisites
Ensure MongoDB (2.6+) is installed and running. This document assumes that mongod is running at the default port 27017.
See the configuration section to configure a different host/port.

### Install BWS from NPM
Use the following steps to Install BWS from the npmjs repository and run it with defaults.
```bash
npm install ltzcore-wallet-service
cd ltzcore-wallet-service
```
To change configuration before running, see the Configuration section.
```bash
npm start
```

### Install BWS from github source
Use the following steps to Install BWS from github source and run it with defaults.
```bash
git clone https://github.com/LitecoinZ-Community/ltzcore-wallet-service.git
cd ltzcore-wallet-service
npm install
```
To change configuration before running, see the Configuration section.
```bash
npm start
```
### Configuration
Configuration for all required modules can be specified in https://github.com/LitecoinZ-Community/ltzcore-wallet-service/blob/master/config.js

BWS is composed of 4 separate node services -
Message Broker - messagebroker/messagebroker.js
Blockchain Monitor - bcmonitor/bcmonitor.js (This service talks to the Blockchain Explorer service configured under blockchainExplorerOpts - see Configure blockchain service below.)
Email Service - emailservice/emailservice.js
Ltzcore Wallet Service - bws.js

#### Configure MongoDB
Example configuration for connecting to the MongoDB instance:
```javascript
  storageOpts: {
    mongoDb: {
      uri: 'mongodb://localhost:27017/bws',
    },
  }
```

#### Configure Message Broker service
Example configuration for connecting to message broker service:
```javascript
  messageBrokerOpts: {
    messageBrokerServer: {
      url: 'http://localhost:3380',
    },
  }
```

#### Configure blockchain service. Ltzcore v8 is required.
Note: this service will be used by blockchain monitor service as well as by BWS itself.
An example of this configuration is:
```javascript
  blockchainExplorerOpts: {
      'ltz': {
        livenet: {
            provider: 'v8',
            url: 'https://insight.litecoinz.org:443',
         },
        testnet: {
            provider: 'v8',
            url: 'https://test-insight.litecoinz.org:443',
         },
      },
  }
```

#### Configure Email service
Example configuration for connecting to email service (using postfix):
```javascript
  emailOpts: {
    host: 'localhost',
    port: 25,
    ignoreTLS: true,
    subjectPrefix: '[Wallet Service]',
    from: 'wallet-service@litecoinz.org',
  }
```

#### Enable clustering
Change `config.js` file to enable and configure clustering:
```javascript
{
  cluster: true,
  clusterInstances: 4,
}
```

