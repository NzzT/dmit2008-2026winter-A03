/*
Enter JS here
HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/

// 1) Select form and list

let topicForm = document.querySelector(".new-topic-form")

let topicList = document.querySelector(".topics-list")

// 5) create a function to add the text input to the topic list

const addTopicToPage = (topicName, topicListElement) => {

    // 6a) create new list and element

    `<li class="list-group-item">${topicName}</li>`
    topicListElement.innerHTML += newTopicElement
}

// 2) add event listener and stop default form submission

topicForm.addEventListener("submit",
    (event) => {
        event.preventDefault()
        // 3) grab input and store value

        let topicInput = event.target.elements["new-topic"]

        let topicText = topicInput.value

        // 4) Input validation, no empty strings

        if (!topicText) {
            topicInput.classList.add("is-invalid")
        } else {
            topicInput.classList.remove("is-invalid")
        }

        // 6b) call function

        addTopicToPage(topicText, topicList)
    }
)