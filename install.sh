#!/bin/bash
set -e

echo "###########################################"
echo "Setup For Razer Blade Stealth i7"
echo "ctrl c now and edit for other systems"
echo "###########################################"

sleep 2
echo ""
echo "setting make flags...."
sudo sed -i 's/#MAKEFLAGS="-j2"/MAKEFLAGS="-j9"/g' /etc/makepkg.conf
sudo sed -i 's/COMPRESSXZ=(xz -c -z -)/COMPRESSXZ=(xz -c -T 8 -z -)/g' /etc/makepkg.conf
echo "/etc/makepkg.conf is set to use 8 cores"
echo ""
sleep 1
echo ""
echo "Installing Blackarch....."
echo ""
curl -O https://blackarch.org/strap.sh > /$HOME/Downloads/strap.sh
chmod +x /$HOME/Downloads/strap.sh
sudo ./$HOME/Downloads/strap.sh
rm /$HOME/Downloads/strap.sh
sudo sed -i 's/Arch Linux/--==[ BlackArch ]==--/g' /etc/issue
sudo pacman -S blackarch-mirrorlist blackarch-keyring --noconfirm --overwrite "*"
echo "edit /etc/pacman.d/blackarch-mirrorlist for servers"
echo ""
sleep 1
echo ""
echo "Installing Plasma...."
echo ""
sudo pacman -Syyu --noconfirm
sudo pacman -S --noconfirm --needed sddm plasma plasma-meta kde-applications-meta kf5
sudo systemctl enable sddm
sudo systemctl set-default graphical.target
echo ""
echo "Installing Extras....."
echo ""
sudo pacman -S --noconfirm --needed aria2 pacman-contrib reflector linux-headers
sudo pacman -S --noconfirm --needed xf86-video-intel vulkan-intel intel-ucode intel-compute-runtime xf86-input-evdev net-tools dnsutils iw dialog
sudo pacman -S --noconfirm --needed ruby rubygems python python2 python-pip python2-pip python-setuptools python2-setuptools
sudo pacman -S --noconfirm --needed pigz pbzip2 unzip pkgfile
sudo pacman -S --noconfirm --needed blackarch-config-bash blackarch/nmap yay
sudo pacman -S --noconfirm --needed scapy python-scapy python-matplotlib python-pyx python-cryptography ipython
sudo pacman -S --noconfirm --needed zsh zsh-theme-powerlevel9k
yay --save
yay -S oh-my-zsh-git --noconfirm
yay -S python-notify2 --noconfirm
yay -S openrazer-meta openrazer-driver-dkms python-openrazer openrazer-daemon --noconfirm
yay -S polychromatic --noconfirm
echo ""
echo "setting up razer"
echo ""
sudo gpasswd -a $USER plugdev
sleep 1
systemctl --user enable --now openrazer-daemon.service 

echo ""
echo "configuring zsh"
echo ""
cp -arv /usr/share/oh-my-zsh /$HOME/.oh-my-zsh
cp -arv /usr/share/zsh-theme-powerlevel9k /$HOME/.oh-my-zsh/themes/powerlevel9k
cp -v .zshrc /$HOME/.zshrc
cp -v .zshenv /$HOME/.zshenv
cp -v .aliases /$HOME/.aliases
sudo chsh -s /bin/zsh $USER

sleep 1

echo "##########################################"
echo "configuring root bash"
echo "##########################################"
sudo cp -v /usr/share/blackarch/config/bash/bashrc /root/.bashrc
sudo cp -v /usr/share/blackarch/config/bash/bash_profile /root/.bash_profile

sleep 1
echo ""
echo "setting up BlackArch net-tuning...."
echo ""
sudo cp -v .etc/sysctl.d/net-tuning.conf /etc/sysctl.d/ 
sudo sysctl -f /etc/sysctl.d/net-tuning.conf -q

sleep 1

echo "##################################"
echo "Finishing Up"
echo "##################################"
sudo mkinitcpio -P
sudo grub-mkconfig -o /boot/grub/grub.cfg

