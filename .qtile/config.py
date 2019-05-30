# Copyright (c) 2010 Aldo Cortesi
# Copyright (c) 2010, 2014 dequis
# Copyright (c) 2012 Randall Ma
# Copyright (c) 2012-2014 Tycho Andersen
# Copyright (c) 2012 Craig Barnes
# Copyright (c) 2013 horsik
# Copyright (c) 2013 Tao Sauvage
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

import os
import subprocess
from libqtile.config import Key, Screen, Group, Drag, Click
from libqtile.command import lazy
from libqtile import layout, bar, widget, hook
from libqtile.bar import Bar
from libqtile.widget import Spacer
from powerline.bindings.qtile.widget import PowerlineTextBox

try:
    from typing import List  # noqa: F401
except ImportError:
    pass

@hook.subscribe.startup_once
def autostart():
    home = os.path.expanduser('~/.config/qtile/autostart.sh')
    subprocess.call([home])

mod = "mod4"

keys = [
    # Switch between windows in current stack pane
    Key([mod], "j", lazy.layout.down()),
    Key([mod], "k", lazy.layout.up()),
    Key([mod], "h", lazy.layout.left()),
    Key([mod], "l", lazy.layout.right()),

    # Move windows up or down in current stack
    Key([mod, "control"], "k", lazy.layout.shuffle_down()),
    Key([mod, "control"], "j", lazy.layout.shuffle_up()),

    # Switch window focus to other pane(s) of stack
    Key([mod], "space", lazy.layout.next()),

    # Swap panes of split stack
    Key([mod, "shift"], "space", lazy.layout.rotate()),

    # Toggle between split and unsplit sides of stack.
    # Split = all windows displayed
    # Unsplit = 1 window displayed, like Max layout, but still with
    # multiple stack panes
    Key([mod, "shift"], "Return", lazy.layout.toggle_split()),
    Key([mod], "Return", lazy.spawn("xfce4-terminal")),
    Key([mod], "w", lazy.spawn("vivaldi-stable")),
    Key([], "Print", lazy.spawn("xfce4-screenshooter")),

    # Toggle between different layouts as defined below
    Key([mod], "Tab", lazy.next_layout()),
    Key([mod], "q", lazy.window.kill()),
    Key([mod], "Right", lazy.screen.next_group()),
    Key([mod], "Left", lazy.screen.prev_group()),
    Key([mod], "Up", lazy.window.toggle_fullscreen()),
    Key([mod], "Down", lazy.spawn("rofi -show run")),

    Key([mod, "control"], "r", lazy.restart()),
    Key([mod, "control"], "q", lazy.shutdown()),
    Key([mod], "r", lazy.spawncmd()),

    # ArchLabs qtile 
    # INCREASE/DECREASE BRIGHTNESS
    Key([], "XF86MonBrightnessUp", lazy.spawn("xbacklight -inc 5")),
    Key([], "XF86MonBrightnessDown", lazy.spawn("xbacklight -dec 5")),
    
    # INCREASE/DECREASE/MUTE VOLUME
    Key([], "XF86AudioMute", lazy.spawn("amixer -q set Master toggle")),
    Key([], "XF86AudioLowerVolume", lazy.spawn("amixer -q set Master 5%-")),
    Key([], "XF86AudioRaiseVolume", lazy.spawn("amixer -q set Master 5%+")),

    Key([], "XF86AudioPlay", lazy.spawn("playerctl play-pause")),
    Key([], "XF86AudioNext", lazy.spawn("playerctl next")),
    Key([], "XF86AudioPrev", lazy.spawn("playerctl previous")),
    Key([], "XF86AudioStop", lazy.spawn("playerctl stop")),

]

groups = [Group(i) for i in "asdfuiop"]

for i in groups:
    keys.extend([
        # mod1 + letter of group = switch to group
        Key([mod], i.name, lazy.group[i.name].toscreen()),

        # mod1 + shift + letter of group = switch to & move focused window to group
        Key([mod, "shift"], i.name, lazy.window.togroup(i.name)),
    ])

default_layouts = {
    "margin":8,
    "bordersize":2,
    "border_focus":"#FFFFFF",
    "border_normal":"#282828",
}


layouts = [
    layout.Bsp(**default_layouts),
    layout.RatioTile(**default_layouts),
    layout.MonadWide(**default_layouts),
    layout.Floating(**default_layouts),
    layout.Max(**default_layouts),
    layout.Stack(num_stacks=2, **default_layouts)
]

widget_defaults = dict(
    font='Source Sans Pro',
    fontsize=20,
    padding=10,
    foreground="55ff55",
    markup=True,
)
extension_defaults = widget_defaults.copy()

arrow_text = {
    "text":"",
    "font":"FontAwesome",
    "fontsize":58,
    "padding":-1,
}

screens = [
    Screen(
        top=bar.Bar(
            [
                widget.GroupBox(
                    padding=3,
                    spacing=3,
                    font="Razer Blackwidow",
                    fontsize=22,
                    active="e1e1e1",
                    highlight_method="text",
                    this_current_screen_border="55ff55",
                    center_aligned=True,
                    ),
                widget.Sep(foreground="005500"),
                widget.CurrentLayout(),
                widget.Sep(foreground="005500"),
                widget.Prompt(),
                widget.Notify(default_timeout=5, font="Hack", fontsize=16),
                widget.Spacer(),
                widget.Net(),
                widget.Wlan(
                    format="--==[ {essid} ]==--"
                    ),
                widget.Sep(foreground="005500"),
                widget.Memory(
                    fmt="{MemUsed}/{MemTotal}M",
                    update_interval=10,
                    ),
                widget.Sep(foreground="005500"),
                widget.LaunchBar(
                    progs=[("", "pavucontrol", "volume")],
                    padding=0,
                    default_icon=None,
                    ),
                widget.Volume(),
                widget.Sep(foreground="005500"),
                widget.Battery(
                    discharge_char="  ",
                    charge_char="  ",
                    format="{char}{percent:2.0%}",
                    ),
                widget.Sep(foreground="005500"),
                widget.Clock(
                    format=' %a %b %d, %I:%M %p',
                    ),
                widget.Sep(foreground="005500"),
                widget.LaunchBar(
                    progs=[
                        ('  ', 'networkmanager_dmenu', 'menu'),
                        ('', 'polychromatic-controller', 'razer config')],
                    default_icon=None,
                    padding=0,
                    ),
            ],
            40, background="000000",
        ),
    ),
]

# Drag floating layouts.
mouse = [
    Drag([mod], "Button1", lazy.window.set_position_floating(),
         start=lazy.window.get_position()),
    Drag([mod], "Button3", lazy.window.set_size_floating(),
         start=lazy.window.get_size()),
    Click([mod], "Button2", lazy.window.bring_to_front())
]

dgroups_key_binder = None
dgroups_app_rules = []  # type: List
main = None
follow_mouse_focus = True
bring_front_click = True
cursor_warp = False
floating_layout = layout.Floating(float_rules=[
    {'wmclass': 'confirm'},
    {'wmclass': 'dialog'},
    {'wmclass': 'download'},
    {'wmclass': 'error'},
    {'wmclass': 'file_progress'},
    {'wmclass': 'notification'},
    {'wmclass': 'splash'},
    {'wmclass': 'toolbar'},
    {'wmclass': 'confirmreset'},  # gitk
    {'wmclass': 'makebranch'},  # gitk
    {'wmclass': 'maketag'},  # gitk
    {'wname': 'branchdialog'},  # gitk
    {'wname': 'pinentry'},  # GPG key password entry
    {'wmclass': 'ssh-askpass'},  # ssh-askpass
    {'wmclass': 'smb4k'},
    {'wmclass': 'leafpad'},
    {'wmclass': 'spotify'},
    {'wmclass': 'Spotify'},
    {'wmclass': 'polychromatic-controller'},
    {'wmclass': 'pavucontrol'},
    {'wmclass': 'nemo'},
    {'wmclass': 'Nemo'},
])
auto_fullscreen = True
focus_on_window_activation = "smart"

# XXX: Gasp! We're lying here. In fact, nobody really uses or cares about this
# string besides java UI toolkits; you can see several discussions on the
# mailing lists, github issues, and other WM documentation that suggest setting
# this string if your java app doesn't work correctly. We may as well just lie
# and say that we're a working one by default.
#
# We choose LG3D to maximize irony: it is a 3D non-reparenting WM written in
# java that happens to be on java's whitelist.
wmname = "LG3D"
