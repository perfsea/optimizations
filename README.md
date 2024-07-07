<p align="center">
<img  src="https://perfsea.com/favicon.svg" width="25%" />
</p>



# [Perf Sea](https://perfsea.com/) open source optimizations
Perf Sea avidly supports industry wide collaboration and in performance engineering we are all on the same team. Most of our optimizations remain in open source for the benefit of everyone. PR's must match our format.

## Flamegraph
```json
{
  "regex matching related symbols": {
        "name": "Name of functionality",
        "opt": [
                "List of key optimizations that apply"
        ]
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
  m.notes =
    "A large portion of instructions being fetched never get executed. Look for branchy code or binary layout issues";
}
...
```

## System Configuration
Flag problematic system configurations by associating regex with common commands.
```js
{
  cmd: "findmnt",
  regex: "atime",
  exists: false,
  note: "Mounting with atime can improve performance on filesystem heavy workloads by not tracking last accessed dates for files."
}
...
```
