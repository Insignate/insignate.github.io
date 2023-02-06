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
  },
  {
    header: "Week 3",
    checkbox: [
      {
        checked: false,
        text: 'Journal week 3 - update yours and reply to at least 1',
        for: 'journal-week-3'
      },
      {
        checked: false,
        text: 'Review the Web Applications for Everyone Course at: ',
        for: 'review-web-app-everyone',
        link: 'https://www.wa4e.com/',
        linkName: 'WA4E'
      },
      {
        checked: false,
        text: '	Take some time to go over the course, the textbook (free via link), the author, and the way the course is set up. Create a login account and poke around.',
        for: 'textbook-chapter-1'
      },
      {
        checked: false,
        text: 'Review the Videos (in high speed if they are boring) for the first 3 chapters. These should be review but if not, take longer to fully understand the contents.',
        for: 'textbook-chapter-2'
      },
      {
        checked: false,
        text: "See lecture about using github/gh pages with student work: Webex meeting recording: D.I. von Briesen's Personal Room-20230126 1835-1 Recording link: ",
        for: 'meeting-1',
        link: "https://cpcc.webex.com/cpcc/ldr.php?RCID=8c38979e6bd9f464be3ac82f87a6c48e",
        linkName: "Webex Recording"
      }
    ]
  },
  {
    header: "Week 4",
    checkbox: [
      {
        checked: false,
        text: 'Journal week 4, make one and replay to one',
        for: 'journal-week-4'
      },
      {
        checked: false,
        text: 'Chapter 4: ',
        for: 'chp4-wa4e',
        link: 'https://wa4e.com/',
        linkName: 'WA4E'
      },
      {
        checked: false,
        text: 'Complete Codecademy PHP Lesson: ',
        for: 'codeacademy-php-1',
        link: 'https://www.codecademy.com/learn/learn-php',
        linkName: 'Code Academy PHP'
      }
    ]
  },
  {
    header: "Week 5",
    current: true,
    checkbox: [
      {
        checked: false,
        text: 'Journal Week 5 make 1 replay to 1',
        for: 'journal-week-5'
      },
      {
        checked: false,
        text: 'Chapter 5: ',
        for: 'chp5-wa4e',
        link: 'https://wa4e.com/',
        linkName: 'WA4E'
      }
    ]
  },
  {
    header: "Week 6",
    checkbox: [
      {
        checked: false,
        text: 'Journal Week 6 make 1 reply to 1',
        for: 'journal-week-6'
      },
      {
        checked: false,
        text: "Complete Codecademy SQL Lesson, Once done, post to forum with link to your CA profile showing completion of that course: ",
        for: 'codeacademy-sql-start',
        link: 'https://www.codecademy.com/learn/learn-sql',
        linkName: 'Codeacademy Sql'
      }
    ]
  },
  {
    header: "Not defined, but still do it ASAP",
    current: true,
    checkbox: [
      {
        checked: false,
        text: 'Link: ',
        for: 'codeacad-welcome',
        link: 'https://www.codecademy.com/learn/welcome-to-codecademy',
        linkName: 'Codeacademy Welcome'
      },
      {
        checked: false,
        text: 'Link: ',
        for: 'codeacad-learn-code',
        link: 'https://www.codecademy.com/learn/learn-how-to-code',
        linkName: 'Codeacademy Learn How To Code'
      },
      {
        checked: false,
        text: 'Link: ',
        for: 'codeacad-html',
        link: 'https://www.codecademy.com/learn/learn-html',
        linkName: 'Codeacademy HTML'
      },
      {
        checked: false,
        text: 'Link: ',
        for: 'codeacad-css',
        link: 'https://www.codecademy.com/learn/learn-css',
        linkName: 'Codeacademy CSS'
      },
      
    ]
  },
  
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
    if (items.current) taskDiv.className = "current-week"
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

    if (item.link){
      const link = document.createElement("a")
      link.innerText = item.linkName
      link.setAttribute("href", item.link)
      checkBoxDiv.appendChild(link)
    }
    
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