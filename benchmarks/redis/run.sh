rm terraform_ec2_key*
ssh-keygen -t ed25519 -q -N '' -f terraform_ec2_key

terraform init
terraform apply -auto-approve

redis_server_ip="$(terraform output -raw redis_server_ip)"
redis_client_ip="$(terraform output -raw redis_client_ip)"
redis_server_ip_private="$(terraform output -raw redis_server_ip_private)"

sleep 5

ssh -i "terraform_ec2_key" -o "StrictHostKeyChecking no" ec2-user@$redis_server_ip 'bash' < setup_server.sh
ssh -i "terraform_ec2_key" -o "StrictHostKeyChecking no" ubuntu@$redis_client_ip 'bash' < setup_workload.sh
ssh -i "terraform_ec2_key" -o "StrictHostKeyChecking no" ubuntu@$redis_client_ip 'bash' < run_benchmark.sh
ssh -i "terraform_ec2_key" -o "StrictHostKeyChecking no" ubuntu@$redis_client_ip "memtier_benchmark -s $redis_server_ip_private"
# terraform destroy -auto-approve