# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH
export PATH="${HOME}/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:"
export PATH="${PATH}/usr/local/sbin:/opt/bin:/usr/bin/core_perl:/usr/games/bin:$(ruby -e 'puts Gem.user_dir')/bin"
export LANG="en_US.UTF-8"
export LC_ALL="en_US.UTF-8"
export XDG_CONFIG_HOME="$HOME/.config"
export XDG_CACHE_HOME="$HOME/.cache"
export XDG_DATA_HOME="$HOME/.local/share"
export LANGUAGE="en_US.UTF-8"
export EDITOR="nano"
export TERM="xterm-256color"

export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8
if ! pgrep -u "$USER" ssh-agent > /dev/null; then
    ssh-agent > ~/.ssh-agent-thing
fi
if [[ ! "$SSH_AUTH_SOCK" ]]; then
    eval "$(<~/.ssh-agent-thing)"
fi

ZSH_CACHE_DIR=$HOME/.cache/oh-my-zsh
if [[ ! -d $ZSH_CACHE_DIR ]]; then
  mkdir $ZSH_CACHE_DIR
fi
export GPG_TTY=$(tty)
