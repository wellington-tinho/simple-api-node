import fs from "node:fs/promises";

const databasePath = new URL("../db.json", import.meta.url);

export class Database {
  #database = {};

  constructor() {
    fs.readFile(databasePath, "utf8")
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch(() => {
        this.#persist();
      });
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database));
  }

  select(table, search) {
    let data = this.#database[table] ?? [];

    if (search) {
      data = data.filter((row) => {
        return Object.entries(search).some(([key, value]) => {
          return value && row[key]?.toLowerCase().includes(value?.toLowerCase());
        });
      });
    }
    return data;
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }

    this.#persist();
    return data;
  }

  delete(table, id) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id);

    if (rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1);
      this.#persist();
    }
  }
  update(table, id, data) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id);
    
    if (rowIndex > -1) {
      
      const taskIsCompleted = this.#database[table][rowIndex].completed_at;
      const dataKeyIsCompletedAt = Object.keys(data)[0] === "completed_at";
      
      if(taskIsCompleted && dataKeyIsCompletedAt){
        data = { completed_at: null };
      }

      this.#database[table][rowIndex] = {
        id, // id (opcional)
        ...this.#database[table][rowIndex], // propriedades existentes
        ...data, // propriedades novas
      };
      this.#persist();
    }
  }
}
