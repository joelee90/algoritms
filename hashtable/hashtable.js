const hash = (key, size) => {
  let hashedKey = 0;
  for (let i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i);
  }
  return hashedKey % size;
};

class HashTable {
  constructor() {
    this.size = 20;
    this.buckets = Array(this.size);

    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map();
    }
  }

  insert(key, value) {
    let idx = hash(key, this.size);
    this.buckets[idx].set(key, value);
  }

  remove(key) {
    let idx = hash(key, this.size);
    let deleted = this.buckets[idx].get(key);
    this.buckets[idx].delete(key);
    return deleted;
  }

  search(key) {
    let idx = hash(key, this.size);
    return this.buckets[idx].get(key);
  }
}

const hashTable = new HashTable();

hashTable.insert('Joe', 'Incheon');
hashTable.insert('Joo', 'Incheon');
hashTable.insert('Jun', 'Seoul');
hashTable.insert('Hwi', 'Jukjeon');
hashTable.insert('Choi', 'Ori');

// hashTable.remove('Joe');
// hashTable.remove('Joo');
// hashTable.remove('Jun');
// hashTable.remove('Hwi');
// hashTable.remove('Choi');

hashTable.remove('Hwi');
console.log(hashTable);
console.log(hashTable.search('Joo'));
