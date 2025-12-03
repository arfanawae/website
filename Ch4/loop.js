var student = {
    67022456: { name: "Alice", age: 20 },
    67022457: { name: "Bob", age: 22 },
    67022458: { name: "Charlie", age: 23 }  
}

for (var id in student) {
    console.log("ID: %s, Name: %s, Major: %s ,Age: %d", id,
        student[id]["name"], student[id]["major"], student[id]["age"])

} 