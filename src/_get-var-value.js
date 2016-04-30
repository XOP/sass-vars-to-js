function resolveVarValue (name, values = {}) {
    const varName = name.slice(1);

    return values[varName] || null;
}

export default resolveVarValue;
