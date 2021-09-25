function myNes() {
    var myStorage = {
        "car": {
            "inside": {
                "glove box": "maps",
                "passenger seat": "crumbs"
            },
            "outside": {
                "trunk": "jack"
            }
        }
    };
    // Only change code below this line
    var myBoxContents;
    myBoxContents = myStorage.car.inside["glove box"];
    return myBoxContents;
    // Only change above below this line
}
console.log(myNes());
module.exports = myNes;