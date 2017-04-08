# Hookshot
The OG CLI app for Hookshot, a Discord webhook manager.

## Installation
`npm install -g hookshot-cli`

## Usage
### Adding webhooks
```shell
hookshot add <name> <url>
```

### Removing webhooks
```shell
hookshot rm <name>
```

### Listing webhooks
```shell
hookshot ls
```
```shell
hookshot ls <name>
```

### Executing webhooks
```shell
hookshot send <name> <message>
```
