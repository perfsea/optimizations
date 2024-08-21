# Summary

- **ARM**: With the introduction of multithreading in Redis 6.0, there were significant performance improvements, especially on ARM architectures that benefit from multi-core processing. The ARM-specific optimizations included better handling of atomic operations and memory access patterns, which are crucial for ARM's architecture.
- **x86**: Performance improvements have been consistent across Redis releases, with optimizations for x86 architectures leveraging advanced SIMD instructions and enhanced parallel processing capabilities. The introduction of features like PSYNC2 and active memory defragmentation in Redis 4.0 and 5.0 helped reduce latency and improve throughput.
