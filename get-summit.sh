#!/bin/bash
mkdir ~/Public/summit/
cd ~/Public/summit/
now=`date +%Y_%m_%d_%H_%M_%S.jpg`
wget "http://camera.ac7il.org/lemmon2.jpg" -O "$now"
dir /s *.jpg >listjpg.txt
