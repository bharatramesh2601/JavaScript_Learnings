export const Storage = {
  saveFlags(flags) {
    localStorage.setItem("feature_flags", JSON.stringify(flags));
  },

  getFlags() {
    return JSON.parse(localStorage.getItem("feature_flags")) || {};
  },
};
