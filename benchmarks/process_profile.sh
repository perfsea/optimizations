sudo pkill -SIGINT perf
sudo pkill iostat
pidwait perf
sudo perf script report stackcollapse > profile.col