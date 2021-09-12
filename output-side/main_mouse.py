#!/usr/bin/python3

import socket
import struct

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

sock.bind(("0.0.0.0", 5005))

fd = open('/dev/hidg1', 'ab+', buffering=0)

mouse1State = False
mouse2State = False
reportId = 1

while True:
  data, addr = sock.recvfrom(1024)
  processedData = data.decode('utf-8')
  parts = processedData.split('_');

  value = int(parts[1])

  if value > -127 and value < 127:
    movement = struct.pack("h", value)[0]

    msg = bytearray(4)

    msg[0] = struct.pack("h", reportId)[0] 

    if parts[0] == 'M1':
      mouse1State = bool(int(parts[1]))

    if parts[0] == 'M2':
      mouse2State = bool(int(parts[1]))

    buttonsState = int(mouse1State) + int(mouse2State) * 2 

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



 
