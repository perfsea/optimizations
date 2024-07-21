# Summary
Releases 1.1.1 and 3.1 provided substantial performance improvements through architectural changes and optimized cryptographic operations, benefiting both ARM and x86 architectures.

## Timeline

### OpenSSL 1.1.1 (Released September 2018)
**Key Features:**
- **TLS 1.3 Support:** Introduced major improvements in connection times and security.
- **Cryptographic Algorithms:** Support for SHA3, EdDSA (Ed25519 and Ed448), and several others.
- **Random Number Generator:** Complete rewrite to utilize AES-CTR DRBG for better performance and security.

**Performance Impact:**
- The support for TLS 1.3 significantly reduced connection times by minimizing the number of round trips between client and server, improving overall performance on both ARM and x86 systems.

### OpenSSL 3.0 (Released September 2021)
**Key Features:**
- **Provider-Based Architecture:** Modular approach to adding and managing cryptographic algorithms.
- **Improved Security:** Enhanced side-channel attack protections and new algorithms.

**Performance Impact:**
- Introduced better performance through architectural changes that allowed for more efficient cryptographic operations and modularity, benefiting both ARM and x86 processors by optimizing resource usage and execution paths.

### OpenSSL 3.1 (Released March 2023)
**Key Features:**
- **FIPS 140-3 Compliant Provider:** Updated FIPS provider for better security compliance.
- **Performance Improvements:** 
  - Refactoring of internal code to reduce locking overhead.
  - Optimizations in encoder and decoder frameworks.
  - Enhanced performance for RSA key generation in FIPS mode.
  - Assembler optimizations for algorithms like AES-GCM, ChaCha20, SM3, and SM4 across multiple architectures.

**Performance Impact:**
- Significant performance gains from refactoring and assembler optimizations, notably benefiting ARM and x86 platforms with improved efficiency in cryptographic processing.

### OpenSSL 3.2 (Released November 2023)
**Key Features:**
- **QUIC Support:** Added client-side QUIC, enhancing connection speed and performance.
- **New Algorithms:** Support for Argon2, HPKE, and Brainpool curves in TLS 1.3.
- **Performance Enhancements:** Continued focus on optimizing internal data structures and improving algorithm performance.

**Performance Impact:**
- QUIC support and performance optimizations further reduced latency and improved throughput, particularly beneficial for network-intensive applications on ARM and x86 systems.