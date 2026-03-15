function isPrimitive(value) {
  const type = typeof value;

  if (
    value === null ||
      type === "string" ||
        type === "number" ||
          type === "boolean" ||
            type === "undefined" ||
              type === "symbol" ||
                type === "bigint"
  ){
    return "primitive";
  } else {
    return "non-primitive";
  }

  
}
