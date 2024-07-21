# Summary
- **ARM**: With the introduction of multithreading in Redis 6.0, there were significant performance improvements, especially on ARM architectures that benefit from multi-core processing. The ARM-specific optimizations included better handling of atomic operations and memory access patterns, which are crucial for ARM's architecture.
- **x86**: Performance improvements have been consistent across Redis releases, with optimizations for x86 architectures leveraging advanced SIMD instructions and enhanced parallel processing capabilities. The introduction of features like PSYNC2 and active memory defragmentation in Redis 4.0 and 5.0 helped reduce latency and improve throughput.

## Timeline

### Redis 4.0 (July 2017)
- **Modules API**: Enabled extending Redis with dynamically loaded modules, allowing custom commands and data types.
- **PSYNC2**: Improved replication mechanism.
- **Caching Policies**: Added least-frequently-used (LFU) eviction policy for better cache management.
- **Memory Management**: Introduced memory introspection and active memory defragmentation.

### Redis 5.0 (October 2018)
- **Streams**: New data structure for handling log-like data, enabling consumer groups.
- **ZPOP Commands**: Added ZPOPMAX and ZPOPMIN for removing elements from sorted sets.
- **Memory and Network Improvements**: Enhanced memory management and networking.

### Redis 6.0 (May 2020)
- **Multithreading**: Introduced for I/O handling, improving performance on multi-core systems.
- **SSL/TLS Support**: Enhanced security with encrypted connections.
- **ACLs (Access Control Lists)**: Provided more granular control over user permissions.

### Redis 7.0 (April 2022)
- **Redis Functions**: Extended scripting capabilities.
- **ACLv2**: Improved access control.
- **Sharded Pub/Sub**: Enhanced publish/subscribe system for better scalability.
- **Performance Enhancements**: Improved memory, computing, network, and storage subsystems.