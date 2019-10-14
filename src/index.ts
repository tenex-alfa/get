const get = (_object: any) => {
    const { object, out } = _object;
    let obj = object;
    if (out) {
        const path = out.split(/>/g);

        console.log(path)
        for (const str of path) {
            obj = obj[str];
        }

    }
    return obj;
}
export default get; 