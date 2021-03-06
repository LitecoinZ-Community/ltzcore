Ltzcore Node
============
_Requirements_:
- Trusted P2P Peer
- MongoDB Server >= v3.4

Checkout the repo

```
git clone git@github.com:LitecoinZ-Community/ltzcore.git
git checkout master
npm install
```

## Setup Guide

**1. Setup Ltzcore config**

<details>
<summary>Example ltzcore.config.json</summary>
<br>

```
{
  "ltzcoreNode": {
    "chains": {
      "LTZ": {
        "mainnet": {
          "chainSource": "p2p",
          "trustedPeers": [
            {
              "host": "127.0.0.1",
              "port": 20008
            }
          ],
          "rpc": {
            "host": "127.0.0.1",
            "port": 20009,
            "username": "username",
            "password": "password"
          }
        },
        "regtest": {
          "chainSource": "p2p",
          "trustedPeers": [
            {
              "host": "127.0.0.1",
              "port": 20020
            }
          ],
          "rpc": {
            "host": "127.0.0.1",
            "port": 20021,
            "username": "username",
            "password": "password"
          }
        }
      }
    }
  }
}
```

</details>
<br>

**2. Setup LitecoinZ Node**

<details>
<summary>Example LitecoinZ Mainnet Config</summary>
<br>

```
whitelist=127.0.0.1
txindex=0
listen=1
server=1
irc=1
upnp=1

# Make sure port & rpcport matches the 
# ltzcore.config.json ports for LTZ mainnet

port=20008
rpcport=20009
rpcallowip=127.0.0.1

rpcuser=username
rpcpassword=password
```
</details>
<br>

**3. Run LitecoinZ node**
<details>
<summary>Example Starting a LitecoinZ Node</summary>
<br>
  
```
# Path to your litecoinz application and path to the config above
/Applications/LitecoinZ-Qt.app/Contents/MacOS/LitecoinZ-Qt -datadir=/Users/username/blockchains/litecoinz-core/networks/mainnet/
```

</details>
<br>

**4. Start Ltzcore**

```
npm run node
```

## API Documentation

[REST API parameters and example responses](./packages/ltzcore-node/docs/api-documentation.md)

[Websockets API namespaces, event names, and parameters](./packages/ltzcore-node/docs/sockets-api.md)

[Testing ltzcore-node in RegTest](./packages/ltzcore-node/docs/wallet-guide.md)

[Wallet Guide - Creating, Signing, Import Address](./packages/ltzcore-client/README.md)

## Contributing

See [CONTRIBUTING.md](https://github.com/LitecoinZ-Community/ltzcore) on the main ltzcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/LitecoinZ-Community/ltzcore/blob/master/LICENSE).

Copyright 2015-2019 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
