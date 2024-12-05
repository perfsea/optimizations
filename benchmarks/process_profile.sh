sudo pkill -SIGINT perf
sudo pkill iostat
pidwait perf
sudo perf script > out.perf &
pidwait perf
git clone https://github.com/brendangregg/FlameGraph.git
./FlameGraph/stackcollapse-perf.pl out.perf > profile.col