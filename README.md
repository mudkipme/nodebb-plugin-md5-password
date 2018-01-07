nodebb-plugin-md5-password
==========================

[![NPM version](https://img.shields.io/npm/v/nodebb-plugin-md5-password.svg)](https://npmjs.org/package/nodebb-plugin-md5-password)

A [NodeBB](https://github.com/NodeBB/NodeBB) plugin to support login of users imported from ancient forum softwares saving password in plain md5.

## Installation

Run this command to install the plugin and restart your NodeBB instance.

```bash
npm install nodebb-plugin-md5-password
```

## Notice

Remember the password should no longer store in plain md5 after imported to NodeBB, the md5 hash should be encrypted via the internal encryption (bcrypt) of NodeBB.

Please destroy your original user data from ancient forum softwares after the migration be done.