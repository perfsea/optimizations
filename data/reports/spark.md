## Summary

Try using a modern execution engine like velox

**Adaptive Query Execution (AQE) and Dynamic Partition Pruning** introduced in Spark 3.0.0 and 3.1.0 are some of the most impactful performance features. AQE dynamically adjusts query plans based on runtime statistics, leading to significant performance gains on both ARM and x86 platforms by optimizing resource utilization and reducing unnecessary computations.

**Whole-Stage Code Generation**, enhanced in Spark 3.3.0, further improves execution speed by generating optimized Java bytecode for entire query stages. This feature is beneficial for both ARM and x86 architectures, especially in compute-intensive operations.

**Vectorization Enhancements**: Improved vectorized reading and processing of data benefit both ARM and x86 architectures by reducing the overhead of interpreting data formats and enabling more efficient CPU usage.
