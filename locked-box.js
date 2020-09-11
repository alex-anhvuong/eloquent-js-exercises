const box = {
    locked: true,
    unlock() {
        console.log('Unlocking');
        this.locked = false;
    },
    lock() {
        console.log('Locking');
        this.locked = true;
    },
    _content: [1, 2],
    get content() {
        if (this.locked) throw new Error('Locked!');
        return this._content;
    },

    set content(value) {
        throw new Error("Can't change the content of the box");
    },

    withBoxUnlocked(doSomething) {
        let isInitLocked = this.locked;

        if (this.locked) this.unlock();

        try {
            doSomething();
        } catch (e) {
            console.log(e);
        }

        if (isInitLocked) this.lock();
    },
};

box.withBoxUnlocked(() => {
    box.content = [1, 3];
    console.log(box.content);
});