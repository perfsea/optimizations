sudo yum install -y perf git
nohup sudo perf record -a -g -F 11 > foo.log 2> foo.err < /dev/null &
nohup iostat 5 > profile_iostat.txt 2> foo.err < /dev/null &