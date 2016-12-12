#!/bin/bash
dir="Summit/"
now=`date +"%Y_%m_%d_%H_%M_%S.jpg"`
mkdir "Summit"
wget "http://camera.ac7il.org/lemmon2.jpg" -O "$dir$now"
