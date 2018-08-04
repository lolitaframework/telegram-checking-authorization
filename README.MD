# telegram-checking-authorization

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/lolitaframework/telegram-checking-authorization/master/LICENSE)

Check [Telegram Login Widget](https://core.telegram.org/widgets/login) hash manually

## Installation

Install through npm:
```
npm install --save telegram-checking-authorization
```

## Usage

Use it in your app like so:

```javascript
import telegramCheckingAuthorization from 'telegram-checking-authorization';

if(telegramCheckingAuthorization(data, token)) console.log('Data is from telegram! ;)');
if(!telegramCheckingAuthorization(data, token)) console.log('Data is NOT from telegram :(')
