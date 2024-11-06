terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "redis_server" {
  ami           = "ami-830c94e3"
  instance_type = "t2.micro"

  tags = {
    Name = "RedisServer"
  }
}

resource "aws_instance" "redis_client" {
  ami           = "ami-830c94e3"
  instance_type = "t2.micro"

  tags = {
    Name = "RedisClient"
  }
}

output "redis_server_ip" {
  description = "Redis server public IP"
  value       = aws_instance.redis_server.public_ip
}

output "redis_client_ip" {
  description = "Redis server public IP"
  value       = aws_instance.redis_server.public_ip
}
