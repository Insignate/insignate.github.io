'use strict'

const taskListContainer = document.getElementById("task-list-container")
const btnSaveWork = document.getElementById("save-my-work")

let courseInfo = [
  {
    header: "Week 1",
    checkbox: [
      {
        checked: false,
        text: 'Update profile image & announcement alert settings',
        for: 'update-profile'
      },
      {
        checked: false,
        text: 'Create your accounts - Github, freecodecamp, codecademy, linkedin',
        for: 'create-accounts'
      },
      {
        checked: false,
        text: 'Create Introduction in shared Google Doc',
        for: 'create-introduction'
      },
      {
        checked: false,
        text: 'Create your Github pages account',
        for: 'create-github'
      },
      {
        checked: false,
        text: 'Create your course github pages folder',
        for: 'create-course-github'
      },
      {
        checked: false,
        text: 'Create a sample index page in each folder',
        for: 'create-page-index'
      },
      {
        checked: false,
        text: 'Create folders inside your course folder: images, scripts, styles, components, z_archives',
        for: 'create-folders-course'
      },
      {
        checked: false,
        text: "Post to introductions discussion board that you've created your intro in the Google doc",
        for: 'post-introduction'
      },
      {
        checked: false,
        text: 'Make Journal starter post, & your Week 1 post as a reply (Reply to your your starter journal post with your week 1 post)',
        for: 'make-journal-start'
      },
      {
        checked: false,
        text: 'Peer review two intro as replies on discussion forum',
        for: 'peer-review'
      },
      {
        checked: false,
        text: "Make a journal reply to a classmate's week 1 post.",
        for: 'journal-replay'
      },
      {
        checked: false,
        text: 'Come up with your mascot',
        for: 'your-mascot'
      },
      {
        checked: false,
        text: 'Update your index page',
        for: 'update-index-page'
      },
      {
        checked: false,
        text: 'Create introduction page',
        for: 'create-intro-page'
      },
      {
        checked: false,
        text: 'Create your contract page',
        for: 'create-contract-page'
      },


    ]
  },
  {
    header: "Week 2",
    checkbox: [
      {
        checked: false,
        text: 'Make Journal Week 2',
        for: 'journal-week-2'
      },
      {
        checked: false,
        text: "Reply to another student's journal post",
        for: 'replay-week-2'
      }
    ]
  }
]


const initialize = () => {
  getWork()
  if (btnSaveWork !== null)
    btnSaveWork.addEventListener("click", saveWork)
  if (taskListContainer !== null)
    createContainer(courseInfo, taskListContainer)
}


const createContainer = (jsonObj, element) => {
  for(const items of jsonObj){
    const taskDiv = document.createElement("div")
    const header = document.createElement("h2")

    header.innerText = items.header
    taskDiv.appendChild(header)

    createCheckbox(items, taskDiv)

    element.appendChild(taskDiv)
  }
}

const createCheckbox = (checkBoxes, element) => {
  for (const item of checkBoxes.checkbox){
    const checkBoxDiv = document.createElement("div")
    const checkbox = document.createElement("input")

    checkbox.setAttribute("type", "checkbox")
    checkbox.checked = item.checked
    checkbox.setAttribute("id", item.for)
    checkbox.setAttribute("name", checkBoxes.header)
    checkbox.addEventListener("click", checkBoxClick)

    const label = document.createElement("label")
    label.innerText = " " + item.text
    label.setAttribute("for", item.for)

    checkBoxDiv.appendChild(checkbox)
    checkBoxDiv.appendChild(label)
    element.appendChild(checkBoxDiv)
  }
}

const checkBoxClick = e => { 
  courseInfo = courseInfo.map(item => {
    return item.header === e.target.name ? {
      ...item,
      checkbox: item.checkbox.map(checkItem => {
        return checkItem.for === e.target.id ? {...checkItem, checked: e.target.checked} :
        checkItem
      })
    } : item
  })
}

const saveWork = () => {
  const saveToCookies = courseInfo.map(item =>
    ({...item, 
      checkbox: item.checkbox.map(checkItem => 
      ({checked: checkItem.checked, for: checkItem.for}))
    }))
  const jsonCookie = JSON.stringify(saveToCookies)
  document.cookie = "boxes=" + jsonCookie + "; path=/; SameSite=Lax;"
  btnSaveWork.innerText = "Work Saved!"
  setTimeout(() => {
    btnSaveWork.innerText = "Save Work"
  }, 2000)
}


const getWork = () => {
  const workCookie = getCookie("boxes")

  if (workCookie !== ""){
    const parsedCookie = JSON.parse(workCookie)
    courseInfo = courseInfo.map(item => {
      for(let i = 0; i < parsedCookie.length; i++){
        if (item.header === parsedCookie[i].header){
          for(let j = 0; j < item.checkbox.length; j++){
            const chkCookie = parsedCookie[i].checkbox
            for(let k = 0; k < chkCookie.length; k++){
              if(chkCookie[k].for === item.checkbox[j].for){
                item.checkbox[j].checked = chkCookie[k].checked
              }
            }
          }
        }
      }
      return item
    })
  }
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(';')
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


initialize()