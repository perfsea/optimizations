rm terraform_ec2_key*
ssh-keygen -t ed25519 -q -N '' -f terraform_ec2_key

terraform init
terraform apply -auto-approve

server_ip="$(terraform output -raw server_ip)"
client_ip="$(terraform output -raw client_ip)"
server_ip_private="$(terraform output -raw server_ip_private)"

sleep 5

ssh -i "terraform_ec2_key" -o "StrictHostKeyChecking no" ec2-user@$server_ip 'bash' < $1
ssh -i "terraform_ec2_key" -o "StrictHostKeyChecking no" ubuntu@$client_ip 'bash' < setup_memtier.sh
ssh -i "terraform_ec2_key" -o "StrictHostKeyChecking no" ec2-user@$server_ip 'bash' < profile.sh
ssh -i "terraform_ec2_key" -o "StrictHostKeyChecking no" ubuntu@$client_ip "memtier_benchmark -s $server_ip_private --key-maximum=10000 $2"
ssh -i "terraform_ec2_key" -o "StrictHostKeyChecking no" ec2-user@$server_ip 'bash' < process_profile.sh
scp -i "terraform_ec2_key" -o "StrictHostKeyChecking no" ec2-user@$server_ip:profile* .

terraform destroy -auto-approve