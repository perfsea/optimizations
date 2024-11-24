# install redis
sudo yum install -y redis6
sudo sed -i -e 's/bind 127.0.0.1 -::1/bind * -::*/g' /etc/redis6/redis6.conf
sudo systemctl start redis6
sudo systemctl enable redis6
sudo systemctl is-enabled redis6
redis6-server --version
redis6-cli ping