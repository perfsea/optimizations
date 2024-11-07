provider "aws" {
  region = "us-west-2"
}

data "http" "myip" {
  url = "https://ipv4.icanhazip.com"
}

resource "aws_security_group" "allow_tls" {
  name        = "allow_tls"
  description = "Allow TLS inbound traffic and all outbound traffic"
  tags = {
    Name = "allow_tls"
  }
}

resource "aws_vpc_security_group_ingress_rule" "allow_tls_ipv4" {
  security_group_id = aws_security_group.allow_tls.id
  cidr_ipv4         = "${chomp(data.http.myip.response_body)}/32"
  from_port         = 22
  ip_protocol       = "tcp"
  to_port           = 22
}

resource "aws_vpc_security_group_egress_rule" "allow_all_traffic_ipv4" {
  security_group_id = aws_security_group.allow_tls.id
  cidr_ipv4         = "0.0.0.0/0"
  ip_protocol       = "-1" # semantically equivalent to all ports
}

resource "aws_vpc_security_group_egress_rule" "allow_all_traffic_ipv6" {
  security_group_id = aws_security_group.allow_tls.id
  cidr_ipv6         = "::/0"
  ip_protocol       = "-1" # semantically equivalent to all ports
}

resource "aws_instance" "redis_server" {
  ami                    = "ami-066a7fbea5161f451"
  instance_type          = "t2.micro"
  key_name               = "terraform_ec2_key"
  vpc_security_group_ids = [aws_security_group.allow_tls.id]
}

resource "aws_instance" "redis_client" {
  ami                    = "ami-066a7fbea5161f451"
  instance_type          = "t2.micro"
  key_name               = "terraform_ec2_key"
  vpc_security_group_ids = [aws_security_group.allow_tls.id]
}

resource "aws_key_pair" "terraform_ec2_key" {
  key_name   = "terraform_ec2_key"
  public_key = file("terraform_ec2_key.pub")
}

output "redis_server_ip" {
  description = "Redis server public IP"
  value       = aws_instance.redis_server.public_ip
}

output "redis_client_ip" {
  description = "Redis server public IP"
  value       = aws_instance.redis_client.public_ip
}
