sudo yum install -y memcached
TOKEN=`curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600"`
LOCALIP=`curl -H "X-aws-ec2-metadata-token: $TOKEN" http://169.254.169.254/latest/meta-data/local-ipv4`
sudo sed -i -e "s/127.0.0.1,::1/$LOCALIP/g" /etc/sysconfig/memcached
sudo systemctl start memcached
sudo systemctl enable memcached