const App = {
    data() {
        return {
            placeholderString: 'Введите текст задачи...',
            appTitle: 'Todo List',
            inputValue: '',
            notesAll: [],
            notesDone: []

        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value;
        },
        addNewNote() {
            this.notesAll.push(this.inputValue);
            this.inputValue = '';
        },
        noteToDone(element) {
            this.notesDone.push(element);
            this.notesAll.splice(this.notesAll.indexOf(element), 1);
        },
        noteReturn(element) {
            this.notesAll.push(element);
            this.notesDone.splice(this.notesDone.indexOf(element), 1);
        }
    }
};


Vue.createApp(App).mount('#app');







































// let toast = document.querySelector("#liveToast"),
//     closeBtn = document.querySelector(".btn-close"),
//     toastText = document.querySelector('.toast-body'),
//     doneBtn = document.querySelector

// showToast = function() {
//     toast.classList.add('show');
//     toastText.textContent = "toast shown";
//     setTimeout(3000);
// }

// closeBtn.onclick = function() {
//     toast.classList.remove('show');
// }
// closeBtn.addEventListener(click, showToast);
