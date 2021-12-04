var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/index.ts
__export(exports, {
  add: () => add
});
var add = (left, right) => left + right;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  add
});
//# sourceMappingURL=index.js.map
