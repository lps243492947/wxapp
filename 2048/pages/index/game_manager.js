const Grid = require('./gird.js')

function GameManager(size, startTiles = 2) {
    this.size = size;
    this.addStartTiles = startTiles;
}
GameManager.prototype = {
    setup: function() {
        this.grid = new Grid(this.size);
        // 随机添加方块
        this.addStartTiles();
        return this.grid.cells;
    },
    addStartTiles: function() {
        // 有几块 就调用几次
        for(let i = 0; i < this.startTiles; i++) {
            this.addRandomTiles();
        }
    },
    addRandomTiles: function() {
        // 添加方法
        // 1.位置 2.数值
        
        const value = Math.random() < 0.9 ? 2 : 4;
    }
},
module.exports = GameManager;