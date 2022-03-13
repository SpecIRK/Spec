class Block {
    constructor(timestamp = "", data = []) {
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.getHash();
        this.prevHash = "";
        this.nonce = 0;
    }

    // Наша хеш-функция.
    getHash() {
        return SHA256(this.prevHash + this.timestamp + JSON.stringify(this.data) + this.nonce);
    }

    mine(difficulty) 
        // 0...000 длины <difficulty>.
        while (!this.hash.startsWith(Array(difficulty + 1).join("0"))) {
            this.nonce++;
           
            this.hash = this.getHash();
        }
    }
}
