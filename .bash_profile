# colors
darkgrey="$(tput bold ; tput setaf 0)"
white="$(tput bold ; tput setaf 7)"
red="$(tput bold; tput setaf 1)"
nc="$(tput sgr0)"


# exports
export PATH="${HOME}/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:"
export PATH="${PATH}/usr/local/sbin:/opt/bin:/usr/bin/core_perl:/usr/games/bin:$(ruby -e 'puts Gem.user_dir')/bin"
export PS1="\[$darkgrey\][ \[$red\]::r00t:: \[$white\]\W\[$red\] \[$darkgrey\]]\\[$red\] > \[$nc\]"
export LD_PRELOAD=""
export EDITOR="nano"
export PWD="/root"
export XDG_CONFIG_DIRS="/etc/xdg"
export XDG_DATA_DIRS="/usr/local/share:/usr/share"
export LANG="en_US.UTF-8"
export LC_COLLATE="C"
export TERM="xterm-256color"
export GDK_SCALE=2
export GDK_DPI_SCALE=1

# alias
alias ls="ls --color"
alias vi="vim"
alias shred="shred -zf"
#alias python="python2"
alias wget="wget -U 'noleak'"
alias curl="curl --user-agent 'noleak'"
alias mv="mv -bv"
alias rm="rm -v"


# source files
[ -r /usr/share/bash-completion/completions ] &&
  . /usr/share/bash-completion/completions/*
