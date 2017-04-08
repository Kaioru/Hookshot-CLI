# Hookshot
The OG CLI app for Hookshot, a Discord webhook manager.

## Installation
`npm install -g hookshot-cli`

## Usage
### Adding webhooks
`hookshot add <name> <url`
Use the -f option to force override existing webhooks of the same name.
### Removing webhooks
`hookshot rm <name>`
### Listing webhooks
`hookshot ls`
`hookshot ls <name>`
### Executing webhooks
`hookshot send <name> <message>`
