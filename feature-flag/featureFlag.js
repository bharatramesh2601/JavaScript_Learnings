import { Storage } from "./utils/storage.js";
import { Network } from "./utils/network.js";

class FeatureFlags {
  constructor() {
    this.flags = Storage.getFlags();
  }

  // ✅ Load flags dynamically (from API or LocalStorage)
  async loadFlags() {
    const remoteFlags = await Network.fetchFlags();
    if (remoteFlags) {
      this.flags = remoteFlags;
      Storage.saveFlags(remoteFlags); // Persist in localStorage
    }
  }

  // ✅ Check if a feature is enabled
  isFeatureEnabled(feature, user = {}) {
    const rule = this.flags[feature];
    if (!rule) return false;

    if (typeof rule === "boolean") return rule; // Basic flag

    if (rule.percentage && user.id) {
      return this._hash(user.id) < rule.percentage;
    }

    if (rule.allowedUsers && rule.allowedUsers.includes(user.id)) {
      return true;
    }

    return false;
  }

  // ✅ Simple Hashing Function for Percentage Rollouts
  _hash(id) {
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
      hash = (hash << 5) - hash + id.charCodeAt(i);
      hash &= hash; // Convert to 32-bit integer
    }
    return Math.abs(hash) % 100;
  }
}

export const featureFlags = new FeatureFlags();
