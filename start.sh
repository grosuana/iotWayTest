#!/bin/bash
cd /helloWorld

 udevd &
 udevadm trigger

#bash

xinit /usr/bin/electron .