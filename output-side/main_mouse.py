#!/usr/bin/python3

import socket
import struct
import signal
import os
import sys

sock = None
fd = None

config = {
  "reportId": 1,
  "deviceFilePath": "/dev/hidg1",
  "socketBindAddress": "0.0.0.0",
  "socketBindPort": 5005
}

mouseState = {
  "mouse1State": False,
  "mouse2State": False
}

def init_socket():
  global sock

  sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM) 
  sock.bind((config["socketBindAddress"], config["socketBindPort"]))

def init_fd():
  global fd

  fd = open(config["deviceFilePath"], 'ab+', buffering=0)

def listen():
  global config
  global mouseState
  global fd

  if fd == None:
    init_fd()

  if sock == None:
    init_socket()

  while True:
    if fd == None:
      break;

    data, addr = sock.recvfrom(1024)
    processedData = data.decode('utf-8')
    parts = processedData.split('_');

    value = int(parts[1])

    if value >= -127 and value <= 127:
      movement = struct.pack("h", value)[0]

      msg = bytearray(4)

      msg[0] = struct.pack("h", config['reportId'])[0] 

      if parts[0] == 'M1':
        mouseState['mouse1State'] = bool(int(parts[1]))

      if parts[0] == 'M2':
        mouseState['mouse2State'] = bool(int(parts[1]))

      buttonsState = int(mouseState['mouse1State']) + int(mouseState['mouse2State']) * 2 

      msg[1] = struct.pack("h", buttonsState)[0]

      if parts[0] == 'X':
        msg[2] = movement
      else:
        msg[2] = b'\x00'[0];

      if parts[0] == 'Y':
        msg[3] = movement 
      else:
        msg[3] = b'\x00'[0]

      fd.write(msg)

def cleanup(signum, frame):
  global fd

  if fd != None:
    fd.close()
    fd = None

  if sock != None:
    sock.close()
    sock = None

  print('Cleaned up. Exiting...')

  sys.exit()

signal.signal(signal.SIGUSR2, cleanup)

if __name__ == "__main__": 
  print(os.getpid())

  listen()
 
