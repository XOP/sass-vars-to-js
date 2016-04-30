function getValueType (value) {
    let type = 'value';
    const varNameRegexp = new RegExp(/^\$[\w-]+$/);

    if (varNameRegexp.test(value)) {
        type = 'var';
    }

    return type;
}

export default getValueType;
