#!/usr/bin/env node

const buffer = require("buffer");
const child_process = require('child_process');

const udp = require('dgram');

let config = {
  port: 5005,
  ip:   '192.168.0.120',
  device: '/dev/input/by-id/usb-DaKai_2.4G_RX-if01-event-mouse'
};

async function sendEvent(evt) {
  return new Promise((res, rej) => {
    client.send(evt, config.port, config.ip, err => {
      if (err) {
        rej(err);

        return;
      }

      res();
    });
  });
}

let child;
let client;

async function exec() {
  client = udp.createSocket('udp4');

  try {
    child = child_process.spawn('./a.out', [config.device]);


    child.stderr.on("data", (data) => {
      console.error(`stderr: ${data.toString()}`);
    });

    child.stdout.on("data", data => {
      const splitData = data.toString().split('\n').filter(e => !!e);

      for (const processedData of splitData) {
        const elements = processedData.split(' ');

        const type = parseInt(elements[0]);
        const code = parseInt(elements[1]);
        const value = parseInt(elements[2]);

        let sentData;

        if (type == 2) {
          if (code == 0) {
            sentData = `X_${value}_${Date.now()}`;
          } else if (code == 1) {
            sentData = `Y_${value}_${Date.now()}`; 
          }
        }

        if (type == 1) {
          if (code == 272) {
            sentData = `M1_${value}_${Date.now()}`;
          } else if (code == 273) {
            sentData = `M2_${value}_${Date.now()}`;
          }
        }
        
        if (sentData) {
          sendEvent(sentData);
        }
      }
    });

  } catch (e) {
    console.log(e);
  }
}

process.title = 'main-mouse-process'

exec();

function reload() {
  if (!child) {
    return;
  }

  child.on("exit", function (code, signal) {
    process.stderr.write("child process exited with " + `code ${code} and signal ${signal}\n`);

    exec();

  });


  child.kill('SIGINT');
}

process.on('SIGUSR2', reload);

function cleanup() {
  if (!child) {
    return;
  }

  process.stderr.write('Exiting... killed child process\n');

  child.kill('SIGINT');

  process.exit();
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

