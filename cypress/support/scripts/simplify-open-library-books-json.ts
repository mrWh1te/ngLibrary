const https = require('https')
const bookISBNs = require("../../../src/app/books/books-data/book-isbns.seed.json").bookISBNs

run()

function run() {
  // grab the copy of the verbose Open Library API Books Response
  https.get(
    `https://openlibrary.org/api/books?bibkeys=ISBN:${bookISBNs.join()}&format=json&jscmd=data`, 
    resp => {
      let data = ''
      resp.on('data', (chunk) => {
        data += chunk
      })
  
      // The whole response has been received. Normalize the result and save
      resp.on('end', () => {
        buildCleanJSONFile(JSON.parse(data))
      })
    })
    .on("error", (err) => {
      console.log(" ❌ Unable to Complete the API Call to OpenLibrary.org: " + err.message)
    })
}

/**
 * 
 * @param data 
 */
function buildCleanJSONFile(booksHashMap: JSON): void {
  // const booksHashMap = JSON.parse(data)
  const booksHashMapKeys = Object.keys(booksHashMap)

  // Build a simpler version of that hash map which omits a few keys
  const newBooksHashMap = {}

  for(let i = 0; i < booksHashMapKeys.length; i++) {
    // keys to delete:
    // 1. subject_places
    // 2. subjects
    // 3. subject_people
    // 4. identifiers
    // 5. publish_places
    // 6. subject_times
    newBooksHashMap[booksHashMapKeys[i]] = {...booksHashMap[booksHashMapKeys[i]]}
    safeDeleteKey('subject_places', newBooksHashMap[booksHashMapKeys[i]])
    safeDeleteKey('subjects', newBooksHashMap[booksHashMapKeys[i]])
    safeDeleteKey('subject_people', newBooksHashMap[booksHashMapKeys[i]])
    safeDeleteKey('identifiers', newBooksHashMap[booksHashMapKeys[i]])
    safeDeleteKey('publish_places', newBooksHashMap[booksHashMapKeys[i]])
    safeDeleteKey('subject_times', newBooksHashMap[booksHashMapKeys[i]])
  }

  // write to fixture file
  var fs = require('fs')
  fs.writeFile(__dirname + '/../../fixtures/open-library-books-clean.json', JSON.stringify(newBooksHashMap), (err) => {
    if(err) {
      return console.log(" ❌ Unable to write the fixtures/open-library-books-clean.json file: " + err.message)
    }

    console.log(" ✔️  fixtures/open-library-books-clean.json was written & saved");
  })
}

/**
 * 
 * @param key 
 * @param source 
 */
function safeDeleteKey(key: string, source: any): void {
  if (typeof source[key] !== undefined) {
    delete source[key]
  }
}