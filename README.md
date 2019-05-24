# archlinuxrazerblade
![Screenshot](screen.png)
![Screenshot](geekbench-1.png)

GRUB_CMDLINE_LINUX_DEFAULT="quiet nvme_core.default_ps_max_latency_us=5500 button.lid_init_state=open"

Plasma settings change font dpi to 150.

X WM use Xft.dpi: 150 in ~/.Xresources

razer settings:
  
--  first install python-notify2 via AUR
  
--  then install open-razer-meta and polychromatic
  
--  ** must have linux headers installed and add user to plugdev group
  
I intstalled blackarch and login with root to  Qtile.  

I added the exports in the zshrc to easily su user and access AUR.

net-tuning.conf is from blackarch

change /etc/issue from archlinux to BlackArch

I have yet to make a razer theme.  Plasma I use Breeze Blurred window decs.  Breeze-Darker-Transparent plasma theme. Numix-Circle Icons.  

updated tlp and i915 config.  Benchmark link https://browser.geekbench.com/v4/cpu/13253832

running drm-intel-next-git from AUR.



