# *Gamebits - Project Portfolio 5 - Advanced Front End (React) with Django REST Framework API*

You can view the live site here - [Gamebits](https://gamebits-579c6fd85599.herokuapp.com/)

Repository: [Github Repo](https://github.com/BiagiarelliAdriano/GameBits)

The platform is developed by Biagiarelli Adriano.

![Gamebits Platform](https://i.ibb.co/1Y9mcYsV/gamebits.png)

# About
Gamebits should be an online social platform focused on providing a safe place for everyone who enjoy videogames to share bits of their experiences and achievements in different worlds in videogames. The platform should offer Sign Up functionality, Sign In functionality, and provide the users with the possibility of creating posts, liking posts, comment on posts, follow other users, filter posts by liked posts, posts by followed users, search specific posts by name, key words in their content and/or game. Users should also be able to create small threads of comments to continue their conversation and be able to collapse these comments to better view the entire comment section. Furthermore, each time a user posts something, receive likes or is followed by other users, they will receive a certain, undefined amount of experience points so they are awarded correctly for providing good content for the platform. Doing so will achieve them by increasing in levels and users will be displayed on a future leaderboard page with the entire of users of the page in order from the highest to the lowest, so higher leveled users are easier to find and be appreciated, even though this doesn't mean that lower leveled users are obscured. Each time a user receives a like, a comment under their own post or comment, when a user follows them or when they level up, they will receive a notification on their future applied Notifications page.

# User Experience Design
## Strategy
The platform is designed to be easy to use and intuitive for anyone that would like to use the platform, not only people interested in videogames. The main goal of the page is to offer a place to share your gaming bits of experiences and cool moments with anyone and share that special moment with as many people as possible. As a final goal, the page was aiming at increasing the positive feedback and social communication and sharing experience in any gaming community.

### Color palette
The following color palette was chosen for the website. The colors were chosen with the strategy to present a more modern color scheme, with darker colors for backgrounds and bright neon lights and colors for the details.

![Color palette](https://i.ibb.co/zhd8YLNG/colorpalette.png)

## Wireframes
These are representations of how the page should've looked like. At least parts of it.

![Home page](https://i.ibb.co/hF8d4qvK/wireframe1.png)

![Post page](https://i.ibb.co/b5gcmY09/wireframe2.png)

![Post creation or edit page](https://i.ibb.co/xKtLPC3s/wireframe3.png)

## User stories
I started out my project by mapping out all of the different features my page should have had. Starting with User Stories, with prioritization from Must-have to Could-have, present in the GitHub repository:
[User Stories.](https://github.com/BiagiarelliAdriano/GameBits/issues?page=1)
Most of the Backend functionalities described in the User stories were actually implemented and are present in the final project. Many of the Frontend side of the functionalities were unfortunately not implemented due to timing issues and several bugs and errors, so they are either not present or not fully functional.

# Technologies used

 - ### Languages:
	 - [JavaScript](https://www.javascript.com/) - A dynamic programming language that's used for web development. 
	 - [HTML](https://en.wikipedia.org/wiki/HTML5) - A markup language used for structuring and presenting content.
	 - [CSS](https://en.wikipedia.org/wiki/CSS) - A style sheet language used for the general aesthetic design in web development.
	 - [Python](https://www.python.org/) - A programming language that lets you work quickly and integrate systems more effectively.
- ### Libraries and Frameworks:
	- [React](https://react.dev/) - Advanced front-end JavaScript library for building user interfaces.
	- [Bootstrap](https://getbootstrap.com/) - Popular CSS Framework for developing response and mobile-first websites.
	- [Font Awesome](https://fontawesome.com/) - A font and icon toolkit based on CSS.
	- [Google Fonts](https://fonts.google.com/) - A library of 1482 open source font families and APIs for convenient use via CSS.
	- [Django](https://pypi.org/project/Django/) - Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.
	 - [Django REST Framework](https://pypi.org/project/djangorestframework/) - A powerful and flexible toolkit for building Web APIs.
- ### NPM Packages / Dependencies:
	- [axios](https://www.npmjs.com/package/axios) - HTTP client for making network requests.
	- [jwt-decode](https://jwt.io/) - Library for decoding JWT tokens.
	- [react-bootstrap](https://react-bootstrap.github.io/) - React components for using Bootstrap with React.
	- [react-dom](https://legacy.reactjs.org/docs/react-dom.html) - React library for rendering components on the DOM.
	- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component) - Component for implementing infinite scrolling in React.
	- [react-modal](https://www.npmjs.com/package/react-modal) - Library for creating modal dialogs in React.
	- [react-paginate](https://www.npmjs.com/package/react-paginate) - Library for creating pagination controls in React.
	- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - Library for routing in single-page applications.
	- [react-scripts](https://www.npmjs.com/package/react-scripts) - Scripts for creating and building React projects with Create React App.
	- [dj-database-url](https://pypi.org/project/dj-database-url/) - Allows you to utilize the 12factor inspired DATABASE_URL environment variable to configure your Django application.
	- [dj-rest-auth](https://pypi.org/project/dj-rest-auth/) - API endpoints for handling authentication securely in Django Rest Framework.
	- [django-allauth](https://pypi.org/project/django-allauth/) - Integrate set of Django applications addressing authentication, registration, account management as well as 3rd party (social) account authentication.
	- [django-cloudinary-storage](https://pypi.org/project/django-cloudinary-storage/) - package that facilitates integration with Cloudinary by implementing Django Storage API.
	- [charset-normalizer](https://pypi.org/project/charset-normalizer/) - A library that helps you read text from an unknown charset encoding.
	- [django-cors-headers](https://pypi.org/project/django-cors-headers/) - Adds Cross-Origin Resource Sharing (CORS) headers to responses.
	- [django-filter](https://pypi.org/project/django-filter/) - Declaratively add dynamic QuerySet filtering from URL parameters.
	- [djangorestframework-simplejwt](https://pypi.org/project/djangorestframework-simplejwt/) - JSON Web Token authentication plugin for the Django REST Framework.
	- [gunicorn](https://pypi.org/project/gunicorn/) - A Python WSGI HTTP Server for UNIX.
	- [Pillow](https://pypi.org/project/pillow/) - Adds image processing capabilities to your Python interpreter.
	- [psycopg2](https://pypi.org/project/psycopg2/) - PostgreSQL database adapter for Python.
	- [requests](https://pypi.org/project/requests/) - Allows you to send HTTP/1.1 requests.
	- [urllib3](https://pypi.org/project/urllib3/) - A powerful, user-friendly HTTP client for Python.
- ### Other Tools:
	- [Favicon](https://favicon.io/) - Used to create the favicon.
	- [VSCode](https://code.visualstudio.com/) - Used to create and edit the website.
	- [GitHub](https://github.com/) - Used to manage the project.
	- [Heroku](https://dashboard.heroku.com/apps#) - Used to host and deploy the website.
	- [GitBash](https://en.wikipedia.org/wiki/Bash_%28Unix_shell%29) - Terminal used to push changes to the GitHub repository.
	- [Google Chrom DevTools](https://developer.chrome.com/docs/devtools/) - Used to test responsiveness and debug.
	- [MockFlow](https://mockflow.com/) - Used to create mock-up designs.
	- [Krita](https://krita.org/en/) - Used to create/edit images for the website.
	- [ImgBB](https://imgbb.com/) - Used to upload images for the README.md file.
	- [Cloudinary](https://cloudinary.com/) - Used to upload and store images uploaded to the website.
	- [Coolors](https://coolors.co/) - Used to create the color palette.
	- [DBDiagram](https://dbdiagram.io/home) - Used to create the Entity Relationship Diagram.
	- [JSHint](https://jshint.com/) - Used to validate JavaScript code.
	- [Postman](https://www.postman.com/) - Used to test and convalidate database responses.
	- [PEP8CI](https://pep8ci.herokuapp.com/#) - Used to validate Python code.
	- [Postgresql](https://www.postgresql.org/) - PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.
	- [Virtual Environment](https://docs.python.org/3/library/venv.html) - Used to create a virtual environment.
