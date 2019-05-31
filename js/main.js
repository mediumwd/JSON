//problem 1(look on template.json)


//problem 2
let request = new XMLHttpRequest();
request.open("GET", "./js/template.json", false);
request.send(null)
let data = JSON.parse(request.responseText);

//problem 3

function findLabel() {
    try {
        let searchID = document.getElementById('findValue').value,
            results = [];
        console.log("searchID: " + searchID);
        if (data[0].id == searchID) {
            results.push(data[0]);
        } else {
            for (let i = 0; i < data[0].children.length; i++) {
                console.log("i: " + i);
                if (data[0].children[i].id == searchID) {
                    results.push(data[0].children[i]);
                }
                if (data[0].children[i].children) {
                    for (let j = 0; j < data[0].children[i].children.length; j++) {
                        console.log("j: " + j);
                        if (data[0].children[i].children[j].id == searchID) {
                            results.push(data[0].children[i].children[j]);
                        }
                    }
                }
            }
        }
        document.getElementById('findValueResult').innerHTML = "result: " + results[0].label;
    } catch (e) {
        document.getElementById('findValueResult').innerHTML = "There are no label with that id";
    }

}

document.getElementById('findValueSubmit').onclick = findLabel;

//problem 4
document.getElementById('input-clear').onclick = function(){
    let clear = document.getElementsByClassName('input-holders');
    for(let i=0; i<clear.length; i++) {
        clear[i].value = "";
    }
};
