#!/bin/bash

git clone https://github.com/powerline/fonts.git --depth=1 /tmp/fonts
./tmp/fonts/install.sh
rm -rf /tmp/fonts  
cp -vf RazerBlackwidow-Regular.ttf /$HOME/.local/share/fonts
mkfontdir /$HOME/.local/share/fonts
xset +fp /$HOME/.local/share/fonts
fc-cache -fv /$HOME/.local/share/fonts

