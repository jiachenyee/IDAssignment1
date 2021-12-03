class Project {
    constructor(name, year, description, image, link) {
        this.name = name;
        this.year = year;
        this.description = description;
        this.image = image;
        this.link = link;
    }
}

const TimelineCategory= {
    EDUCATION: 'education',
    WORK: 'work',
    EVENT: 'event'
}
class TimelineObject {
    constructor(year, category, name, description, link) {
        this.name = name;
        this.year = year;
        this.description = description;
        this.category = category;
        this.link = link;
    }
}

let timelineObject = [
    [
        new TimelineObject(
            2021,
            TimelineCategory.EDUCATION,
            "Ngee Ann Polytechnic",
            "I am currently pursuing a diploma in Information Technology at Ngee Ann Polytechnic",
            "https://np.edu.sg"
        ),
        new TimelineObject(
            2021,
            TimelineCategory.WORK,
            "Swift Accelerator Programme Trainer",
            "After volunteering in 2019 and 2020, I decided to formally become the assistant trainer of the programme. As the assistant trainer, I redeveloped the curriculum, switching from UIKit to SwiftUI.",
            "https://swiftinsg.org"
        )
    ],
    [
        new TimelineObject(
            2020,
            TimelineCategory.WORK,
            "Tinkertanker Pte Ltd.",
            "I started working at Tinkertanker over a year ago where I develop iOS development (with UIKit and SwiftUI) curriculum and play around with new technologies.",
            "https://tinkertanker.com"
        )
    ],
    [
        new TimelineObject(
            2019,
            TimelineCategory.EVENT,
            "SST Inc. iOS Development Course",
            "I ran a 9-month long App Development with Swift course for the Secondary 1 Batch. The course covered a range of topics from fundamentals, such as conditionals and datatypes to databases.",
            "https://swiftinsg.org"
        ),
        new TimelineObject(
            2019,
            TimelineCategory.EVENT,
            "Swift Accelerator Programme Volunteering",
            "After volunteering in 2019, I decided to do it again in 2020. In 2020, there were many new challenges we never encountered before having to conduct a fully online class on Webex.",
            "https://swiftinsg.org"
        ),
        new TimelineObject(
            2019,
            TimelineCategory.EVENT,
            "Swift Accelerator Programme Volunteering",
            "Having graduated from the programme in 2018, I decided to volunteer as a helper in 2019 where I aided the formal trainers in debugging student's work and assisted with UI/UX design and ideation.",
            "https://swiftinsg.org"
        ),
        new TimelineObject(
            2019,
            TimelineCategory.EVENT,
            "GeeksHacking Hackomania",
            "I volunteered at Hackomania 2019, a 24-hour hackathon by Geekshacking Community that aimed to bring together the tech community in Singapore to tackle real-world issues with tech solutions.",
            "https://swiftinsg.org"
        )
    ],
    [
        new TimelineObject(
            2018,
            TimelineCategory.EVENT,
            "Swift Accelerator Programme",
            "I was selected as one of the 50 students in the Swift Accelerator Programme pilot. The programme, by Apple and IMDA, helped to develop my interest in programming and got me into the field of iOS development.",
            "https://swiftinsg.org"
        )
    ],
    [
        new TimelineObject(
            2017,
            TimelineCategory.EDUCATION,
            "School of Science and Technology, Singapore",
            "I got into SST successfully via DSA and spent 4 years in the school. During which, I joined SST Inc., a infocomm talent development programme and went for the Computing+ Applied Subject.",
            "https://sst.edu.sg"
        )
    ]
]

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
        "https://apps.apple.com/us/app/tasks-productivity-elevated/id1440454388"
    ),
    new Project(
        "SST Announcer",
        2020,
        "SST Announcer is an app designed to help students stay up to date with information and announcements from the school.",
        "assets/projects/announcer.png",
        "https://apps.apple.com/us/app/sst-announcer/id683929182"
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

let awards = [
    new Project(
        "WWDC21 Swift Student Challenge", 
        2021, 
        "In 2021, I won Apple's WWDC21 Swift Student Challenge and built a 3D Playground that used Apple's SceneKit along with CoreML to create a simple way to learn SwiftUI.",
        "assets/awards/wwdc21.png", 
        "https://github.com/jiachenyee/wwdc21explorer",
    ),
    new Project(
        "WWDC20 Swift Student Challenge", 
        2020, 
        "In 2020, I won Apple's WWDC20 Swift Student Challenge with a Playground based on Singapore's heritage and the last surviving kampong using SceneKit and machine learning.",
        "assets/awards/wwdc20.png", 
        "https://www.hardwarezone.com.sg/tech-news-16-year-old-jia-chen-singapore-wwdc20-swift-student-challenge-winner",
    ),
    new Project(
        "App Development with Swift Level 1 Certification", 
        2020, 
        "In 2020, I got Certiport's App Development with Swift Level 1 certification. The certification tested knowledge in UIKit, Xcode, Storyboards and more.",
        "assets/awards/appdevcertification.png", 
        "https://www.credly.com/badges/84bc4333-5e41-4da2-8b18-25fcf67f4532/linked_in_profile",
    ),
    new Project(
        "11 Dec Tim Cook Presentation", 
        2019, 
        "I presented 2 of my apps, PortableCL and Tasks to Apple's CEO Tim Cook when he was in Singapore back in 2019. During the ",
        "assets/awards/timcook.png", 
        "https://youtu.be/3_Rm46-EI9c",
    ),
    new Project(
        "Empactathon Salesforce / Design for Change Presentation", 
        2019, 
        "At Empactathon, I had the opportunity to pitch my app to Salesforce's Senior Vice-President & General Manager (Asia), Renzo Taal and Executive Vice-President & General Manager (APAC), Ulrik. Nehammer.",
        "assets/awards/salesforce.png", 
        "https://www.credly.com/badges/84bc4333-5e41-4da2-8b18-25fcf67f4532/linked_in_profile",
    ),
    new Project(
        "SST Inventive Minds Award", 
        2019, 
        "In 2019, my app, PortableCL won SST's Inventive Minds Award. The award's goal is to recognise student's work in creativity and innovation.",
        "assets/awards/sst.png", 
        "http://sst.edu.sg/",
    ),
    new Project(
        "App of the Year", 
        2018, 
        "In 2018, my app, PortableCL won SST Inc.'s App of the Year award. PortableCL was chosen from nearly 20 other apps created by other students within SST Inc.",
        "assets/awards/sstinc.png", 
        "http://sst.edu.sg/",
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
            para.className = "projectcardcontainer";
            para.innerHTML = `
            <section class="projectscard" onclick="window.open('${project.link}');">
                <h2><span style="color: #EF626C;">${project.year}</span> ${project.name}</h2>
                <p>${project.description}</p>
            </section>
            `
            parent.appendChild(para);
        }
    }

    let elementID = String(year ?? "all");

    document.getElementById("all").className = "yearselectorbutton"
    document.getElementById("2021").className = "yearselectorbutton"
    document.getElementById("2020").className = "yearselectorbutton"
    document.getElementById("2019").className = "yearselectorbutton"
    document.getElementById("2018").className = "yearselectorbutton"

    document.getElementById(elementID).className = "yearselectorbuttonselected";
}

function showAwards() {
    let parent = document.getElementById("awardscards")

    for (let i = 0; i < awards.length; i++) {
        let award = awards[i];

        var para = document.createElement("DIV");
        
        para.innerHTML = `
        <section class="awardsection" onclick="window.open('${award.link}');">
            <img src="${award.image}" alt="${award.name}"/>
            <h2><span style="color: #EF626C;">${award.year}</span> ${award.name}</h2>
            <p>${award.description}</p>
        </section>
        `
        parent.appendChild(para);
    }
}

function loadTimeline() {
    let parent = document.getElementById("timeline")

    for (let i = 0; i < timelineObject.length; i++) {
        let year = timelineObject[i];

        let timelineYear = document.createElement("SECTION");
        timelineYear.className = "timelineyear"
        
        timelineYear.innerHTML = `
        <h2>${year[0].year}</h2>
        <h2 style="opacity: 0;">${year[0].year}</h2>
        `
        
        var yearSection = document.createElement("SECTION");
        yearSection.className = "timelineyearcontents";

        for (let eventIndex = 0; eventIndex < year.length; eventIndex++) {
            let event = year[eventIndex]

            var para = document.createElement("DIV");
            para.className = "timelineitem"
            para.innerHTML = `
            <section class="timelinesection" onclick="window.open('${event.link}');">
                <h2><img src="assets/icons/${event.category}.svg" alt="${event.category} icon"/> ${event.name}</h2>
                <p>${event.description}</p>
            </section>
            <div/>
            `
            yearSection.appendChild(para);
        }

        
        timelineYear.insertBefore(yearSection, timelineYear.childNodes[2]);

        parent.appendChild(timelineYear)
    }
}