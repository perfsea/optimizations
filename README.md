<p align="center">
<img  src="https://github.com/user-attachments/assets/f5d47c05-69ce-4d74-b84e-c203ba3b8da4" width="25%" />
</p>

# [Perf Sea](https://perfsea.com/) open source optimizations

Perf Sea avidly supports industry wide collaboration and in performance engineering we are all on the same team. Most of our optimizations remain in open source for the benefit of everyone.

## Flamegraph

```json
"ConcurrentFailedRuleFactory_TEXT_WARN": {
      "name": "Garbage Collector Concurrent Mode Failure",
      "link": "GarbageCollectionJava.md",
      "note": "Garbage Collection hasn't been able to keep up with the Java Program. Try lowering the value of [XX:InitiatingHeapOccupancePercent]"
  },
...
```

## HW Counter

Define metrics derived from multiple raw hardware events with javascript.

```js
{
  metric: "Speculative CPI",
  value: (events["cpu_cycles"] / events["inst_spec"]).toFixed(2),
}
...
```

Express complex relationships between counter metrics with javascript.

```js
if (
  "Speculative CPI" == m.metric &&
  metricMap.hasOwnProperty("Architectural CPI") &&
  m.value / metricMap["Architectural CPI"] > 0.4
) {
  m.notes = "A large portion of instructions being fetched never get executed. Look at other metrics for speculation bottlenecks";
}
...
```

## System Configuration

Flag problematic system configurations by associating regex with common commands.

```json
[
  {
    "cmd": "findmnt",
    "notes": [
      {
        "regex": "(?<!\\w)noatime(?!\\w)",
        "exists": false,
        "note": "Mounting with noatime can improve performance on filesystem heavy workloads by not tracking last accessed dates for files."
      },
      {
        "regex": "(?<!\\w)discard(?!\\w)",
        "exists": true,
        "note": "Mounting with discard can cause intermittent latency spike when TRIM operations occur"
      }
...
```
