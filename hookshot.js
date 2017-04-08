#!/usr/bin/env node
var Configstore = require('configstore');

var program = require('commander');
var unirest = require('unirest')
var pkg = require('./package.json');
var cfg = new Configstore(pkg.name);

program
  .version(pkg.version)

program
  .command('ls [name]')
  .description('Lists webhook(s)')
  .action((name, options) => {
    if (typeof name === 'undefined') {
      console.log(cfg.get('webhooks'));
    } else {
      var target = cfg.get('webhooks.' + name)

      if (typeof target === 'undefined')
        console.log('No webhook found with the name of "' + name + '".');
      else
        console.log(target);
    }
  });
program
  .command('add <name> <webhook>')
  .description('Adds a webhook with a specified name')
  .option('-f, --force','Force add the webhook')
  .action((name, webhook, options) => {
    var target = cfg.get('webhooks.' + name);

    if (typeof target === 'undefined' || options.force) {
      cfg.set('webhooks.' + name, webhook);
      console.log('Added webhook ' + name + ' with url ' + webhook);
    } else console.log('Failed to add webhook; name already taken.');
  });
program
  .command('rm <name>')
  .description('Removes a webhook with the specified name')
  .action((name, options) => {
    cfg.delete('webhooks.' + name);
  });
program
  .command('send <name> <message>')
  .description('Sends a message to the webhook')
  .action((name, message, options) => {
    var url = cfg.get('webhooks.' + name);
    unirest.post(url)
      .send({
        "content": message
      })
      .end((response) => {
        if (response.ok)
          console.log('Message sent to webhook ' + name + ' successfully.')
        else
          console.log('Failed to send message to webhook ' + name + '.');
      });
  });

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

program.parse(process.argv);
