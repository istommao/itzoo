# Pyenv 虚拟环境

## Pyenv 安装

```bash
git clone https://github.com/pyenv/pyenv.git ~/.pyenv
```

`bash`

```bash
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init -)"' >> ~/.bashrc
```

`zsh`

```bash
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
```

## Pyenv virtualenv 安装

```bash
# pyenv-virtualenv
git clone https://github.com/pyenv/pyenv-virtualenv.git $(pyenv root)/plugins/pyenv-virtualenv

echo 'eval "$(pyenv virtualenv-init -)"' >> ~/.bashrc
````


## Pyenv install 国内加速

- pyenv淘宝镜像源加速：[https://npm.taobao.org/mirrors/python/](https://npm.taobao.org/mirrors/python/)
- 下载需要的版本放到~/.pyenv/cache文件夹下面
- 然后执行 pyenv install 版本号 安装对应的python版本


```bash
v=3.8.2;  wget https://npm.taobao.org/mirrors/python/$v/Python-$v.tar.xz -P ~/.pyenv/cache/; pyenv install $v
```

