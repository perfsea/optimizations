// Utility functions

const checkNan = (value) => {
  if (isNaN(value)) {
    throw new TypeError("bad");
  }
  return value;
};

const makeRound = (value, places) => {
  return Math.round(value * places) / places;
};

// Calculate metrics

newmetrics = []

newmetrics.push({
  metric: "CPI",
  value: makeRound(checkNan(events["cycles"] / events["instructions"]), 100),
});
newmetrics.push({
  metric: "Cache miss",
  value: makeRound(
    checkNan((events["cache-misses"] / events["cache-references"]) * 100),
    10
  ),
});
newmetrics.push({
  metric: "Branch miss",
  value: makeRound(
    checkNan((events["branch-misses"] / events["branches"]) * 100),
    10
  ),
});
newmetrics.push({
  metric: "L1d cache miss",
  value: makeRound(
    checkNan((events["l1d_cache_refill"] / events["l1d_cache"]) * 100),
    10
  ),
});
newmetrics.push({
  metric: "L1i cache miss",
  value: makeRound(
    checkNan((events["l1i_cache_refill"] / events["l1i_cache"]) * 100),
    10
  ),
});
newmetrics.push({
  metric: "L2d cache miss",
  value: makeRound(
    checkNan((events["l2d_cache_refill"] / events["l2d_cache"]) * 100),
    10
  ),
});
newmetrics.push({
  metric: "L1d TLB miss",
  value: makeRound(
    checkNan((events["l1d_tlb_refill"] / events["l1d_tlb"]) * 100),
    10
  ),
});
newmetrics.push({
  metric: "L1i TLB miss",
  value: makeRound(
    checkNan((events["l1i_tlb_refill"] / events["l1i_tlb"]) * 100),
    10
  ),
});
newmetrics.push({
  metric: "L2d TLB miss",
  value: makeRound(
    checkNan((events["l2d_tlb_refill"] / events["l2d_tlb"]) * 100),
    10
  ),
});
newmetrics.push({
  metric: "Architectural CPI",
  value: makeRound(checkNan(events["cpu_cycles"] / events["inst_retired"]), 100),
});
newmetrics.push({
  metric: "Speculative CPI",
  value: makeRound(checkNan(events["cpu_cycles"] / events["inst_spec"]), 100),
});
newmetrics.push({
  metric: "Branch miss",
  value: makeRound(
    checkNan((events["br_mis_pred_retired"] / events["br_retired"]) * 100),
    10
  ),
});
newmetrics.push({
  metric: "% direct branch instructions",
  value: makeRound(
    checkNan((events["br_immed_spec"] / events["inst_spec"]) * 100),
    10
  ),
});
newmetrics.push({
  metric: "% indirect branch instructions",
  value: makeRound(
    checkNan((events["br_indirect_spec"] / events["inst_spec"]) * 100),
    10
  ),
});
newmetrics.push({
  metric: "% crypto instructions",
  value: makeRound(
    checkNan((events["crypto_spec"] / events["inst_spec"]) * 100),
    10
  ),
});
newmetrics.push({
  metric: "% SIMD instructions",
  value: makeRound(
    checkNan((events["ase_spec"] / events["inst_spec"]) * 100),
    10
  ),
});
newmetrics.push({
  metric: "% integer instructions",
  value: makeRound(checkNan((events["dp_spec"] / events["inst_spec"]) * 100), 10),
});
newmetrics.push({
  metric: "% load instructions",
  value: makeRound(checkNan((events["ld_spec"] / events["inst_spec"]) * 100), 10),
});
newmetrics.push({
  metric: "% floating point instructions",
  value: makeRound(
    checkNan((events["vfp_spec"] / events["inst_spec"]) * 100),
    10
  ),
});
newmetrics.push({
  metric: "% store instructions",
  value: makeRound(checkNan((events["st_spec"] / events["inst_spec"]) * 100), 10),
});
newmetrics.push({
  metric: "% frontend stall cycles",
  value: makeRound(
    checkNan((events["stall_frontend"] / events["cpu_cycles"]) * 100),
    10
  ),
});
newmetrics.push({
  metric: "% backend stall cycles",
  value: makeRound(
    checkNan((events["stall_backend"] / events["cpu_cycles"]) * 100),
    10
  ),
});

// Create metric map

let metricMap = {};
for (const m of newmetrics) {
  metricMap[m.metric] = m.value;
}
console.log(metricMap);

// Add notes to metrics

for (const m of newmetrics) {
  if (["CPI", "Architectural CPI"].includes(m.metric) && m.value > 2) {
    m.notes =
      "Less than one instruction is being executed every clock cycle, modern cpu's can retire multiple. Look for a bottleneck";
  } else if (
    "Speculative CPI" == m.metric &&
    metricMap.hasOwnProperty("Architectural CPI") &&
    m.value / metricMap["Architectural CPI"] > 0.4
  ) {
    m.notes =
      "A large portion of instructions being fetched never get executed. Look for possible speculative bottlenecks";
  } else if ("Branch miss" == m.metric && m.value > 6) {
    m.notes =
      "Your code is branch miss predicting more than average. Try to reduce branches or create more conditional fall throughs";
  } else if (m.metric == "% SIMD instructions" && m.value < 2) {
    m.notes =
      "You are either not utilizing advanced SIMD instructions or they are being groups with Loads and Stores. Try compiling the latest version with -march=native";
  } else if (m.metric == "% indirect branch instructions" && m.value > 2) {
    m.notes =
      "Try to mostly use direct branches because indirect branches are harder to predict and impacted by spectre meltdown mitigations.";
  } else if (m.metric == "% frontend stall cycles" && m.value > 50) {
    m.notes =
      "Your system is very front-end bound. This means the cpu is struggling to fill its execution units. Try binary optimization techniques like autoFDO or disable hyperthreading.";
  } else if (m.metric == "% backend stall cycles" && m.value > 50) {
    m.notes =
      "Your system is very back-end bound. This often means your memory subsystem latencies are the bottleneck. Profile memory and optimize with faster disks more cache etc.";
  }
}