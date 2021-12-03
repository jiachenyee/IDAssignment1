# Portfolio

This is my personal portfolio site coded using vanilla HTML, CSS & JS. This project serves as a portfolio intended to form a good and lasting first impression on recruiters considering to hire me. Therefore, I built a simple, clean site with the goal of putting as little in the way of the user as possible.

## Design Process

When designing the site, I had to first consider the target users, recruiters. Through empathy, I realised that their goals of the site are to find out as much information as possible, as quickly as possible. This guided most of the design process with a clean, minimalistic interface to show off projects, achievements and awards.

Understanding the user is vital to creating a useful and effective site, therefore, to best optimise for the user, I decided to focus on creating a desktop-first site. I felt that a desktop-first site made most sense in this case as recruiters were less likely to be looking through portfolios on their mobile devices.

![image](https://user-images.githubusercontent.com/36725840/144599937-bc763653-c825-41c4-a046-8de5c3cb8a69.png)
![image](https://user-images.githubusercontent.com/36725840/144599953-05553cc5-176b-44a9-8ae5-7675024a5ead.png)

Optimising the site for mobile was still going to be important, but throughout the design process, the primary focus was the experience on a desktop. These findings helped to shape many of the micro-interactions present throughout the site such as small hover interactions, designed for users on the desktop. 

![Hover interactions](https://user-images.githubusercontent.com/36725840/144600343-4b48bd6a-7cb3-4551-821e-4c263a59b77b.gif)

Another key emphasis on the site was ensuring consistency. Consistency is key to allow for faster development, as many custom components is more work and to simple, yet beautiful interfaces. This led me to choose a card-based layout where data is presented in various cards while varying contrast slightly to differentiate between foreground and background elements.
![cards](https://user-images.githubusercontent.com/36725840/144600694-5dac9774-490a-42e8-86a2-cf1b37becc06.png)

## Features

### Existing Features
1. Filter projects by year
> I felt that this feature was important as, from the perspective of a recruiter, they may be more interested in projects from certain years and having the option to quickly filter the data makes their lives easier. Furthermore, I grouped the projects on the **All** tab based on their relevance, such as more emphasis on flagship projects and those on the Apple App Store.
![Projects - Firefox  2021-12-03 at 08 18 29 PM](https://user-images.githubusercontent.com/36725840/144601401-88096432-dca1-476f-ba7e-fc66770eedbf.gif)

2. Scroll through awards
> Adding large feature graphics would draw the user's attention towards certain pieces of information. Therefore, I designed the Awards page with large banners to show off each award. I chose to make it horizontally scrolling to dedicate more room towards each piece of information and because I felt that a horizontal scrolling interaction would allow for more space and time for a potential recruiter to view each award. Just like the projects section, these achievements are sorted based on their prominance, with those from notable institutions and organisations such as Apple and Certiport ranked ahead.
![Achievements - Firefox  2021-12-03 at 08 22 21 PM](https://user-images.githubusercontent.com/36725840/144601971-42e55932-9674-4596-82bc-9efb0b52ad48.gif)

3. Timeline
> The timeline page was designed to be a simple page where a potential recruiter can quickly and easily scroll through to understand more about my prior experiences, educational qualifications and any events that might be relevant. For this section. I used icons to denote the meaning of each section as I found it more elegant than having a subtitle or a text indicating that. Furthermore, I experimented with varying levels of contrast to add emphasis on the content itself, while still showing the year and the timeline indicator.
> ![image](https://user-images.githubusercontent.com/36725840/144602777-a4ad8c70-91a9-46d6-aad3-e5353634ca3f.png)

4. Contact
> The contact screen is probably the simplest. The emails are grouped into 3 cards for Personal, Work and School and hovering the emails will show a small change in opacity while clicking on it will open the user's email client. The change in opacity helps to indicate that the emails are clickable and the purpose of directing the user to their mail client is meant to make it as frictionless as possible for a recruiter to contact me.
> ![Contact - Firefox  2021-12-03 at 08 34 10 PM](https://user-images.githubusercontent.com/36725840/144603463-5819b71c-14c1-4f93-bc34-bcde75b7d5c9.gif)

### Features Left to Implement
- More images: With more time, I could have probably added more images to better illustrate some of the projects and achievements. Having graphics and images can help to draw the user's attention to specific information and I feel that adding additional ones will help making the site look more complete.

## Technologies Used

- HTML/CSS
    - I used HTML and CSS to layout and style the entire interface
- JavaScript
    - I used JS to provide the logic behind the interface, from filtering down projects to loading achivements. I found it a lot easier to create objects and iterate over them to generate cards as opposed to manually creating them in HTML/CSS as using JS seemed less error-prone.
- [CodeCollab](https://codecollab.io)
    - I used CodeCollab to quickly test out the site physically on multiple devices as it's real-time editor allowed me to make changes and instantly see them on my phone. While I found the browser's developer tools useful, I found that it was still vital to test it on a physical device to allow me to better understand how the site worked, especially with touch input.


## Testing

1. Filtering Projects:
    1. From the home page (index.html) hover over the hammer button -> The icon should mvoe up, making way for a text indicating the title.
    2. Tap on the button and open the Projects page (projects.html) -> Projects page should launch in the same tab
    3. Hover over a project -> the background colour should change slightly to indicate that it's clickable.
    4. Click on it -> it should open a relevant page.
    5. Below the header, there is a list of options to filter by year. Tap on a year -> The projects collection below should update based on the year chosen.
2. Browse achievements:
    1. From the home page (index.html) hover over the award button -> The icon should mvoe up, making way for a text indicating the title.
    2. Tap on the button and open the Awards page (awards.html) -> Awards page should launch in the same tab
    3. Hover over a project -> the background colour should change slightly to indicate that it's clickable.
    4. Click on it -> opens a relevant site.
3. Browse Timeline:
    1. From the home page (index.html) hover over the timeline button -> The icon should mvoe up, making way for a text indicating the title.
    2. Tap on the button and open the Timeline page (timeline.html) -> Timeline page should launch in the same tab
    3. Scroll through the timeline -> The timeline objects should be sorted chronologically
4. Contact:
    1. From the home page (index.html) hover over the contact button -> The icon should mvoe up, making way for a text indicating the title.
    2. Tap on the button and open the Contact page (contact.html) -> Contact page should launch in the same tab
    3. Hover over an email address -> the text colour should change slightly to indicate that it's clickable.
    4. Click on it -> opens up your native email client.

To ensure the site's layout scaled well, it was tested on the smallest screen size on Firefox and Safari -- the iPhone SE 2 at 375 x 667.

## Credits

### Media
- Some of the photos from the site were obtained from [Apple Developer](https://developer.apple.com).
- Images of several achievements and awards were obtained from the [School of Science and Technology Singapore](https://sst.edu.sg) and [SST Inc.](https://sstinc.org).

### Acknowledgements
- I relied on [Mozilla's documentation](https://developer.mozilla.org/en-US/) as a reference for the various CSS attributes and properties to customise the site
- I used [w3schools](https://www.w3schools.com/)'s extensive tutorials to guide me through as I built my site
- Finally, I used the various materials found on [Mel](https://mel.np.edu.sg) to assist me in understanding the project's scope as well as how to create the site.
