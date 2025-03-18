import { featureFlags } from "./featureFlags.js";

(async () => {
  await featureFlags.loadFlags(); // ✅ Load from API or localStorage

  console.log("Dark Mode:", featureFlags.isFeatureEnabled("darkMode"));
  console.log(
    "Beta Feature:",
    featureFlags.isFeatureEnabled("betaFeature", { id: "user123" })
  );
})();
