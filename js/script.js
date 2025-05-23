let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for(list of lists){
    list.addEventListener("dragstart", function(e){
        let selected = e.target;

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected = null;
        });

        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        leftBox.addEventListener("drop", function(e){
            leftBox.appendChild(selected);
            selected = null;
        });
    })
}

// counter part start
function startCounting(elementId, start = 1, end = 1000, interval = 1000) {
    let current = start;    
    const counterElement = document.getElementById(elementId);
    const intervalId = setInterval(() => {
        counterElement.textContent = current + " ";
        if (current >= end) {
            clearInterval(intervalId);
        } else {
            current++;
        }
    }, interval);
}
// Call the function for the four counters
startCounting('achiv_title_1', 100, 123, 20);
startCounting('achiv_title_2', 500, 564, 20);
startCounting('achiv_title_3', 800, 859, 20);
// startCounting('counter4', 1, 369, 20);
// startCounting('counter5', 1, 209, 20);

// counter part end