# Summary
1. **JIT Compiler Enhancements (OpenJDK 8-9)**: Significant optimizations and the introduction of Graal.
2. **Garbage Collection Improvements (OpenJDK 11-12, 15)**: Introduction and enhancements of ZGC and Shenandoah GC.
3. **NUMA-Aware Memory Allocation (OpenJDK 14)**: Beneficial for multi-core x86 systems.
4. **Vector API (OpenJDK 16)**: Boosted performance for SIMD computations.
5. **Virtual Threads (OpenJDK 19-20)**: Improved concurrency performance.

## Timeline

### OpenJDK 8 (March 2014)
- **Lambda Expressions**: Introduced to support functional programming.
- **Stream API**: For processing sequences of elements.
- **New Date and Time API**: Provided a new date/time library.
- **Nashorn JavaScript Engine**: Replaced the old Rhino engine.
- **Removal of the Permanent Generation**: Improved memory management.

**Performance Improvements**:
- Enhanced JVM garbage collection.
- Improved JIT compiler optimizations, which benefit both ARM and x86.

### OpenJDK 9 (September 2017)
- **Modular System (Project Jigsaw)**: Introduced modules to better organize code.
- **JShell**: Interactive tool for learning and prototyping Java code.
- **Improved JIT Compiler (JVM Compiler Interface)**: Allowed JVM to interoperate with different JIT compilers.
- **Enhanced Method Handles**: Improved performance for dynamic language support.

**Performance Improvements**:
- Introduction of the new JIT compiler, Graal, which brought performance benefits, particularly on ARM.
- Enhanced JVM optimizations that benefitted both ARM and x86 architectures.

### OpenJDK 10 (March 2018)
- **Local Variable Type Inference**: Introduced `var` keyword.
- **Parallel Full GC for G1**: Improved garbage collection performance.
- **Application Class-Data Sharing**: Reduced startup and footprint for applications.

**Performance Improvements**:
- Parallel Full GC for G1 reduced garbage collection pauses, benefiting ARM and x86.

### OpenJDK 11 (September 2018)
- **New HTTP Client**: Replaced the old HttpURLConnection API.
- **Flight Recorder**: Low-overhead data collection framework.
- **Epsilon Garbage Collector**: A no-op garbage collector for testing.
- **Z Garbage Collector (Experimental)**: A scalable low-latency garbage collector.

**Performance Improvements**:
- The Z Garbage Collector and Epsilon Garbage Collector introduced significant performance and latency improvements for both ARM and x86.

### OpenJDK 12 (March 2019)
- **Switch Expressions (Preview)**: Extended switch statements.
- **Default CDS Archives**: Improved startup performance.
- **Shenandoah Garbage Collector (Experimental)**: Aimed at reducing GC pause times.

**Performance Improvements**:
- Shenandoah Garbage Collector reduced pause times, beneficial for large heap sizes on both ARM and x86.

### OpenJDK 13 (September 2019)
- **Text Blocks (Preview)**: Simplified multi-line string literals.
- **Dynamic CDS Archives**: Improved class data sharing.
- **ZGC on macOS and Windows**: Extended ZGC support to more platforms.

**Performance Improvements**:
- Enhanced ZGC performance on macOS and Windows provided better cross-platform performance.

### OpenJDK 14 (March 2020)
- **JEP 305: Pattern Matching for instanceof (Preview)**: Simplified the code.
- **JEP 343: Packaging Tool (Incubator)**: For packaging self-contained Java applications.
- **JEP 345: NUMA-Aware Memory Allocation for G1**: Improved performance on NUMA systems.

**Performance Improvements**:
- NUMA-Aware Memory Allocation for G1 enhanced memory management on multi-core processors, benefiting x86 systems.

### OpenJDK 15 (September 2020)
- **JEP 339: Edwards-Curve Digital Signature Algorithm (EdDSA)**: New cryptographic signatures.
- **JEP 360: Sealed Classes (Preview)**: Restricted which classes or interfaces can implement or extend them.
- **JEP 379: Shenandoah: A Low-Pause-Time Garbage Collector**: Made Shenandoah production-ready.

**Performance Improvements**:
- Shenandoah GC improvements provided low-pause time benefits for applications on both ARM and x86.

### OpenJDK 16 (March 2021)
- **JEP 338: Vector API (Incubator)**: For SIMD computations.
- **JEP 395: Records**: Simplified data carrier classes.
- **JEP 376: ZGC: Concurrent Thread-Stack Processing**: Improved garbage collection.

**Performance Improvements**:
- The Vector API improved performance for vector computations, benefiting both ARM and x86.

### OpenJDK 17 (September 2021)
- **JEP 356: Enhanced Pseudo-Random Number Generators**: New interface and implementations for random number generation.
- **JEP 382: New macOS Rendering Pipeline**: Improved performance on macOS.
- **JEP 391: macOS/AArch64 Port**: Ported JDK to Apple Silicon.

**Performance Improvements**:
- macOS/AArch64 port provided native support and improved performance on ARM-based Apple Silicon.

### OpenJDK 18 (March 2022)
- **JEP 400: UTF-8 by Default**: Made UTF-8 the default charset.
- **JEP 408: Simple Web Server**: Provided a minimal HTTP server for testing.
- **JEP 413: Code Snippets in Java API Documentation**: Improved API documentation with code snippets.

**Performance Improvements**:
- General performance improvements and optimizations in the JVM.

### OpenJDK 19 (September 2022)
- **JEP 405: Record Patterns (Preview)**: Pattern matching for record types.
- **JEP 425: Virtual Threads (Preview)**: Lightweight concurrency model.
- **JEP 428: Structured Concurrency (Incubator)**: Simplified concurrent programming.

**Performance Improvements**:
- Virtual Threads provided a lightweight concurrency model, improving performance for high-concurrency applications on both ARM and x86.

### OpenJDK 20 (March 2023)
- **JEP 429: Scoped Values (Incubator)**: Enhanced the handling of scoped data.
- **JEP 436: Virtual Threads (Second Preview)**: Continued improvements to virtual threads.
- **JEP 437: Pattern Matching for switch (Third Preview)**: Extended pattern matching to switch statements.

**Performance Improvements**:
- Continued improvements to Virtual Threads enhanced performance for concurrent applications.

### OpenJDK 21 (September 2023)
- **JEP 441: Pattern Matching for switch (Fourth Preview)**: Further extended pattern matching.
- **JEP 442: Foreign Function & Memory API (Third Preview)**: Simplified interaction with native code.
- **JEP 443: Unnamed Patterns and Variables (Preview)**: Simplified the use of patterns and variables.

**Performance Improvements**:
- Enhancements to the Foreign Function & Memory API improved performance when interacting with native libraries on both ARM and x86.