const Database = require('better-sqlite3');

class ConexaoBanco {
    constructor() {
    
   
      this._criarTabela();
    }
 
    _criarTabela() {

        const sql = 
       
        this.db.prepare(sql).run();
    }
}

module.exports = new ConexaoBanco().db;
