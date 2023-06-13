let search = document.getElementById("searchInput");

let spinner = document.getElementById("spinner");

let resultContainer = document.getElementById("searchResults");



function createandappendtoresult(result) {



    let container = document.createElement("div");

    container.classList.add("result-item")

    resultContainer.appendChild(container)



    let {

        title,

        link,

        description

    } = result;



    let displaytitle = document.createElement("a");

    displaytitle.classList.add("result-title");

    displaytitle.href = link;

    displaytitle.target = "_blank";

    displaytitle.textContent = title;

    container.appendChild(displaytitle);



    let break1 = document.createElement("br");

    container.appendChild(break1)



    let displaylink = document.createElement("a");

    displaylink.href = link;

    displaylink.target = "_blank";

    displaylink.textContent = link;

    displaylink.classList.add("result-url");

    container.appendChild(displaylink);



    let break2 = document.createElement("br");

    container.appendChild(break2)



    let para = document.createElement("p");

    para.classList.add("result-description");

    para.textContent = description;

    container.appendChild(para);

}







function displayresult(searchresult) {

    spinner.classList.toggle("d-none");

    for (let result of searchresult) {

        createandappendtoresult(result)

    }

}







function enterKey(event) {

    if (event.key === "Enter") {

        resultContainer.textContent = "";

        spinner.classList.toggle("d-none");

        let value = search.value;

        let url = "https://apis.ccbp.in/wiki-search?search=" + value;

        let options = {

            method: "GET"

        }

        fetch(url, options)

            .then(function (response) {

                return response.json()

            })

            .then(function (data) {

                let {

                    search_results

                } = data

                displayresult(search_results);

            })

    }

}





search.addEventListener("keydown", enterKey);