#!/bin/sh

slimbookbattery &
compton -b &
nm-applet &
/usr/lib/polkit-kde-authentication-agent-1 &
kgpg &
xmodmap ~/.Xmodmap &
feh --bg-fill ~/.config/qtile/wallpaper.png &
