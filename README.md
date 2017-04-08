# Hookshot
The OG CLI app for Hookshot, a Discord webhook manager.

## Installation
`npm install -g hookshot-cli`

## Usage
### Adding webhooks
```shell
hookshot add <name> <url>
```
Use the -f option to force override existing webhooks of the same name.

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
