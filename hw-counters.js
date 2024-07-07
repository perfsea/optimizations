// Metrics

{
  metric: "Speculative CPI",
  value: (events["cpu_cycles"] / events["inst_spec"]).toFixed(2),
}


// Notes
if (
  "Speculative CPI" == m.metric &&
  metricMap.hasOwnProperty("Architectural CPI") &&
  m.value / metricMap["Architectural CPI"] > 0.4
) {
  m.notes =
    "A large portion of instructions being fetched never get executed. Look for branchy code or binary layout issues";
}