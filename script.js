class Project {
    constructor(name, year, description, image, link) {
        this.name = name;
        this.year = year;
        this.description = description;
        this.image = image;
        this.link = link;
    }
}

let projects = [
    new Project(
        "Friction", 
        2021,
        "Friction is a simple app that allows users to annotate directly on their Mac's screens.",
        "assets/projects/friction.png",
        "https://friction.tk.sg"
    ),
    new Project(
        "PortableCL",
        2018,
        "PortableCL is a Chinese learning app designed to help students learn easily with flashcards.",
        "assets/projects/portablecl.png",
        "https://apps.apple.com/sg/app/portablecl/id1389024983"
    ),
    new Project(
        "Tasks",
        2018,
        "Tasks is a productivitiy app designed to help students focus by placing their phones faced down.",
        "assets/projects/tasks.png",
        "https://apps.apple.com/sg/app/portablecl/id1389024983"
    ),
    new Project(
        "SST Announcer",
        2020,
        "SST Announcer is an app designed to help students stay up to date with information and announcements from the school.",
        "assets/projects/announcer.png",
        "https://apps.apple.com/sg/app/portablecl/id1389024983"
    ),
    new Project(
        "TT Stickers",
        2020,
        "TT Stickers was built to help promote the company's mascot — T Krobot with fun and light-hearted Telegram, WhatsApp & iMessage stickers.",
        "assets/projects/ttstickers.png",
        "https://tk.sg/stickers"
    ),
    new Project(
        "#SSTOH19",
        2019,
        "#SSTOH19 was the 2019 Open House app built for SST. The app was designed to help visitors navigate through the school and make the most out of their day.",
        "assets/projects/sstoh19.png",
        "https://apps.apple.com/sg/app/sst-open-house-2019/id1459040697?l=en"
    ),
    new Project(
        "SST Inc. Attendance",
        2019,
        "The SST Inc. Attendance app was an internal app designed to streamline the attendance taking process within SST Inc. through the use of QR codes.",
        "assets/projects/incattendance.png",
        "https://sstinc.org"
    ),
    new Project(
        "#SSTOH20",
        2020,
        "#SSTOH20 was the successor of #SSTOH19, unfortunately, due to COVID-19, we were unable to use it during the open house in 2020.",
        "assets/projects/sstoh20.png",
        "https://github.com/sst-inc/openhouse2020"
    ),
    new Project(
        "sstinc.org",
        2020,
        "In 2020, I redesigned and redeveloped SST Inc.'s homepage, providing a simple landing page for those who wish to learn more about SST Inc.",
        "assets/projects/sstinc.png",
        "https://sstinc.org"
    ),
    new Project(
        "Leaderboards",
        2019,
        "I built a simple collaborative leaderboards app that helped motivate students while working on their final project for the Swift Accelerator Programme.",
        "assets/projects/leaderboards.png",
        "https://swiftinsg.org"
    ),
    new Project(
        "Buzzer",
        2019,
        "Buzzer was built as a fun introduction for students from the 2019 Swift Accelerator Programme to play a simple trivia as a bonding activity on day 1.",
        "assets/projects/leaderboards.png",
        "https://swiftinsg.org"
    ),
    new Project(
        "Flag Raising App",
        2021,
        "The flag raising app originally started as a joke when we thought it would be funny to have a flag raising while running an virtual class. The app got increasingly ridiculous featuring augmented reality, collaboration and even a Discord bot.",
        "assets/projects/leaderboards.png",
        "https://swiftinsg.org"
    ),
    new Project(
        "Let's Not",
        2021,
        "Let's Not was created as a demo app to teach students how to publish to the App Store. It provides users with over a hundred AI-generated homework excuses. We're all still surprised it got approved by App Review.",
        "assets/projects/leaderboards.png",
        "https://tk.sg/sis22-letsnot"
    )
]

function changeYear(year) {
    let parent = document.getElementById("projectsDiv")
    
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
    
    for (let i = 0; i < projects.length; i++) {
        let project = projects[i];

        if (project.year === year || year == null) {
            var para = document.createElement("DIV");
            
            para.innerHTML = `
            <section class="projectscard" onclick="window.open('${project.link}');">
                <h2><a style="color: #EF626C;">${project.year}</a> ${project.name}</h2>
                <p>${project.description}</p>
            </section>
            `
            parent.appendChild(para);
        }
    }
}