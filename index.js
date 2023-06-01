function range(start, end, step = 1) {
    const args = Object.values(arguments)

    if (args.length === 1) {
        start = 0
        end = args[0]
    }

    const arr = [];
    for (let i = start; i < end; i+= !step ? 1 : step) {
        arr.push(!step ? start : i)
    }

    return arr
}