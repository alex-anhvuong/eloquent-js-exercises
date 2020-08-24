function loop(iCount, test, update, body) {
    for (iCount; test(iCount); iCount = update(iCount)) {
        body(iCount);
    }
}

loop(
    0,
    i => i < 10,
    i => i + 1,
    i => i % 2 != 0 || console.log(i)
);