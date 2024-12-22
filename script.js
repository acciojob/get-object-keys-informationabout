//your JS code here. If required.
// Create the student object
const student = {
  name: "John Doe",
};

Object.prototype.getKeys = function () {
  return Object.keys(this);
};
const keys = student.getKeys();
document.getElementById("output").textContent = `Keys: ${keys.join(", ")}`;