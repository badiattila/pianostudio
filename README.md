# Piano Studio Kft. - Introduction of a Hungarian piano company  
This web page was made for Code Institute's Stream One Project: User-Centric Frontend Development and is now updated for Code Institute's Interactive Frontend Development assesment 


This page is ment to introduce Piano Studio Kft, a Hungarian family owned and operated pianos business.
It focuses on the owners, services, pianos for sale and provides a contact form to make it easy for customers to ask their questions. 


## Demo
The live outdated version of the webpage can be found [here](http://www.pianostudio.hu)
A live demo can be found [here](https://badiattila.github.io/pianostudio/).

## UX
My goal in the design was to have an easy to use yet fresh appearence. 
The red/black color scheme was chosen to reflect a conservative but elegant image. 

For potential customers I want to give as much guidance on our services and product as possible using pictures to illustrate.


## Technologies
1. HTML
2. CSS
3. Bootstrap 4.3.1
4. font-awesome 4.7.0
5. hover.css 2.1.1
6. Google Maps API
7. emailjs.com 
8. Instagram API


## Features
This site uses the native features of Bootstrap and Jumbotron Framework, integrates to Google maps api, emailjs API and Instagram API. 


### Features Left to Implement
The contact form can be better implemented, will need visual and functionality improvements. 
I might also include a dinamic section for piano renters to track their profile (piano rented and account status)
The Instagram API integration will need to be updated to use short term keys.

## Testing
The renter user story achieved the intended outcome of introducing the service and the gallery is providing customers with a showcase of available pianos to rent.
The buyer user story is satisfied by having the section Pianos to Sell.
The customer for services user story has the services section with piano tuning and restoration.
The contact form is sending out emails to attila.badi@gmail.com.
The Google map integration shows rented piano locations.
The Instagram API makes the gallery dinamic by showing all uploaded media.

If you try to submit the contact form with an invalid email address, there will be an error noting the invalid email address. 
Furthermore, the 'required' attribute is added to the First Name, Last Name and Email fields, so if those fields are not filled in, the form will not submit. If all field are valid, the form will send a mail to attila.badi@gmail.com. 

All links will open in a new tab using 'target="_blank"'.

Social media links are tested and work as intended to both facebook and instagram.

This site was tested across multiple browsers (Chrome, Internet Explorer, FireFox) and on mobile devices (iPhone 6 and Huawei P10) to ensure compatibility and responsiveness. 

## Deployment
This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named `index.html`.

To run locally, you can clone this repository directly into the editor of your choice by pasting `git clone https://github.com/badiattila/pianostudio.git` into your terminal. 
To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.


## Credits

### Content
All content in this site were written by me. 

### Media
Background photos were taken from [Pexels](https://www.pexels.com/), a stock image library.
Pictures used (pianos owned and for sale sections and introduction) are taken by the owners and workers of Piano Studio Kft. 

### Acknowledgements
Color schemes are inspired by an article found https://www.websitebuilderexpert.com/designing-websites/how-to-choose-color-for-your-website/
Jumbotron, a template for a simple marketing or informational website is used https://getbootstrap.com/docs/4.3/examples/jumbotron/
The example project is used as guide for building the site https://github.com/Code-Institute-Solutions/StudentExampleProjectGradeFive.git
font-awesome is used from cdn https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css
hover.css is used from cdn https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.1.1/css/hover-min.css
Hash tag positioning is inspired by https://css-tricks.com/hash-tag-links-padding/
Google maps integration uses the manuals found on the maps API intro page and course material.
Emailjs.com integration is inspired by the code institute lectures.
Instagram integration uses samlpe code from code institute and Instagrams own introductory how-to manuals.

**This is for educational use and possibly will be the successor of the currently hosted www.pianostudio.hu in the future.** 
