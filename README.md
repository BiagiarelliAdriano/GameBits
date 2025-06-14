# *Gamebits - Project Portfolio 5 - Advanced Front End (React) with Django REST Framework API*

You can view the live site here - [Gamebits](https://gamebits-579c6fd85599.herokuapp.com/)

Repository: [Github Repo](https://github.com/BiagiarelliAdriano/GameBits)

The platform is developed by Biagiarelli Adriano.

![Gamebits Platform](https://i.ibb.co/S412tDYZ/gamebits.png)

# About
GameBits is an online social platform focused on providing a safe place for everyone who enjoys video games to share bits of their experiences and achievements across different game worlds. The platform offers Sign Up and Sign In functionality, and allows users to create posts, like posts, comment on posts, follow other users, filter posts by liked posts or posts by followed users, and search for specific posts by name, keywords, or game.

# User Experience Design
## Strategy
The platform is designed to be easy to use and intuitive for anyone, not just those interested in video games. Its main goal is to provide a space where users can share their own game bits — moments, experiences, and highlights from their favorite games — and connect with others who appreciate them. Ultimately, GameBits aims to foster positive feedback, social interaction, and the sharing of experiences across gaming communities.

### Color palette
The following color palette was selected to give the website a modern and vibrant look, combining dark backgrounds with bright neon accents for a striking visual contrast.

![Color palette](https://i.ibb.co/zhd8YLNG/colorpalette.png)

## Media

- The Sign Up and Sign In images are sourced from [Pexels](https://www.pexels.com).
- All other images currently used in the live version of GameBits were uploaded directly from my personal computer and do not represent media that I own or claim ownership of.

## Wireframes
Initial Wireframes.

![Home page](https://i.ibb.co/hF8d4qvK/wireframe1.png)

![Post page](https://i.ibb.co/b5gcmY09/wireframe2.png)

![Post creation or edit page](https://i.ibb.co/xKtLPC3s/wireframe3.png)

## User stories
The Agile Methodology was used to plan this project. This was implemented through Github and the Project Board which can be seen in this GitHub repository:

[User Stories.](https://github.com/BiagiarelliAdriano/GameBits/issues?page=1)

GitHub Issues were used to create and manage User Stories, as well as track fixes, improvements, and updates throughout the development process. Each issue was assigned, labeled, and categorized to provide clarity and organization. The User Stories were divided between Frontend and Backend tasks to better structure the development workflow. Additionally, some User Stories remain open in the ToDo list, serving as future updates and potential improvements for the project.

# Technologies Used

### Languages
- [JavaScript](https://www.javascript.com/) — A dynamic programming language used for web development.
- [HTML](https://en.wikipedia.org/wiki/HTML5) — Markup language for structuring and presenting content.
- [CSS](https://en.wikipedia.org/wiki/CSS) — Style sheet language used for web design and layout.
- [Python](https://www.python.org/) — A versatile programming language for backend development and system integration.

### Frontend Libraries & Frameworks
- [React](https://react.dev/) — A powerful JavaScript library for building user interfaces.
- [Bootstrap](https://getbootstrap.com/) — Popular CSS framework for responsive, mobile-first web design.
- [React Router DOM](https://www.npmjs.com/package/react-router-dom) — Declarative routing for React single-page applications.
- [Axios](https://www.npmjs.com/package/axios) — HTTP client for making API requests.
- [React Bootstrap](https://react-bootstrap.github.io/) — React components built with Bootstrap styles.
- [React Infinite Scroll Component](https://www.npmjs.com/package/react-infinite-scroll-component) — Implements infinite scrolling in React.
- [React Modal](https://www.npmjs.com/package/react-modal) — Accessible modal dialogs for React.
- [React Paginate](https://www.npmjs.com/package/react-paginate) — Pagination component for React applications.
- [JWT Decode](https://jwt.io/) — Decode JSON Web Tokens on the client side.
- [React DOM](https://legacy.reactjs.org/docs/react-dom.html) — Library for rendering React components to the DOM.

### Backend Libraries & Frameworks
- [Django](https://www.djangoproject.com/) — High-level Python web framework encouraging rapid, clean design.
- [Django REST Framework](https://www.django-rest-framework.org/) — Toolkit for building Web APIs in Django.
- [Django Allauth](https://django-allauth.readthedocs.io/en/latest/) — Authentication, registration, and account management for Django.
- [dj-rest-auth](https://dj-rest-auth.readthedocs.io/en/latest/) — REST API endpoints for authentication.
- [Django Cloudinary Storage](https://pypi.org/project/django-cloudinary-storage/) — Integrates Cloudinary media storage with Django.
- [django-cors-headers](https://github.com/adamchainz/django-cors-headers) — Adds Cross-Origin Resource Sharing headers to Django responses.
- [django-filter](https://django-filter.readthedocs.io/en/stable/) — Dynamic QuerySet filtering based on URL parameters.
- [djangorestframework-simplejwt](https://github.com/jazzband/djangorestframework-simplejwt) — JWT authentication for Django REST Framework.
- [gunicorn](https://gunicorn.org/) — WSGI HTTP server for UNIX.
- [Pillow](https://python-pillow.org/) — Image processing capabilities for Python.
- [psycopg2](https://www.psycopg.org/) — PostgreSQL adapter for Python.
- [requests](https://docs.python-requests.org/en/latest/) — HTTP library for Python.
- [urllib3](https://urllib3.readthedocs.io/en/latest/) — HTTP client for Python.

### DevOps & Deployment
- [Heroku](https://www.heroku.com/) — Cloud platform for hosting and deploying web applications.
- [PostgreSQL](https://www.postgresql.org/) — Powerful open-source object-relational database system.
- [Virtual Environment](https://docs.python.org/3/library/venv.html) — Isolated Python environment for dependency management.

### Testing & Validation Tools
- [Postman](https://www.postman.com/) — API testing and development environment.
- [JSHint](https://jshint.com/) — JavaScript code quality tool.
- [PEP8CI](https://pep8ci.herokuapp.com/) — Python code style validation.

### Design & Media Tools
- [MockFlow](https://mockflow.com/) — Wireframing and mockup tool.
- [Krita](https://krita.org/en/) — Open-source digital painting software.
- [ImgBB](https://imgbb.com/) — Image hosting service for README assets.
- [Cloudinary](https://cloudinary.com/) — Cloud-based media management and delivery.
- [Coolors](https://coolors.co/) — Color palette generator.
- [DBDiagram](https://dbdiagram.io/) — Tool to create database entity-relationship diagrams.

### Development Tools
- [VSCode](https://code.visualstudio.com/) — Source code editor.
- [GitHub](https://github.com/) — Version control and project management platform.
- [Git Bash](https://git-scm.com/downloads) — Command-line shell for Git operations.
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) — Browser-based development and debugging tools.
- [StackEdit](https://stackedit.io/) — Online Markdown editor used to create this README.

### Other
- [Favicon.io](https://favicon.io/) — Favicon generator.

# Features
## Entity Relationship Diagram
To create the entity relationship diagram, I used a graph modelling tool [DBDiagram](https://dbdiagram.io/home). It shows the entire relationship between all models in the database.

![DBDiagram](https://i.ibb.co/yFFVp1zb/entityrelationshipdiagram.png)

## Database
The production database for this project is primarily powered by PostgreSQL.

## Models

### Users

The **Users** model is a custom user profile extending Django's built-in `AbstractUser` model. It includes additional fields for profile customization, a leveling system, and timestamps for creation and updates.

| Database Field      | Field Type           | Description                                         |
|---------------------|----------------------|-----------------------------------------------------|
| `username`          | CharField            | Unique username (max length 150, inherited)         |
| `email`             | EmailField           | Unique email address (max length 254, inherited)    |
| `password`          | CharField            | Hashed password managed by Django authentication    |
| `profile_picture`   | CloudinaryField      | Optional profile image, stored via Cloudinary       |
| `bio`               | TextField            | Optional short biography (max length 500)           |
| `level`             | IntegerField         | User level, defaults to 1                            |
| `experience_points` | IntegerField         | Experience points, defaults to 0                     |
| `is_active`         | BooleanField         | Active user status, defaults to True                 |
| `created_at`        | DateTimeField        | Timestamp of creation, auto-generated                |
| `updated_at`        | DateTimeField        | Timestamp of last update, auto-generated             |
| `groups`            | ManyToManyField      | User groups with custom related name                  |
| `user_permissions`  | ManyToManyField      | User permissions with custom related name             |

---

**Notes:**  
- This model inherits core fields like `username`, `email`, and `password` from Django’s `AbstractUser`.  
- Profile pictures use Cloudinary for cloud storage.  
- Custom related names are set on `groups` and `user_permissions` fields to avoid conflicts.  
- The model automatically orders users by creation date descending.

### Posts

The **Posts** model represents content created and shared by users. It includes information about the author, post title, associated game, content text, and an optional image. It also tracks creation and update timestamps through a mixin.

| Database Field | Field Type    | Description                                           |
|----------------|---------------|-------------------------------------------------------|
| `author`       | ForeignKey    | References the user who created the post (CASCADE on delete), related name: `posts` |
| `title`        | CharField    | Title of the post (max length 255)                    |
| `game`         | CharField    | Name of the game related to the post (max length 100)|
| `content`      | TextField    | The main textual content of the post                  |
| `image`        | ImageField   | Optional image uploaded with the post (`upload_to='images/'`) |
| `created_at`   | DateTimeField| Timestamp when the post was created (from mixin)      |
| `updated_at`   | DateTimeField| Timestamp when the post was last updated (from mixin) |

---

**Notes:**  
- The model inherits timestamp fields `created_at` and `updated_at` from `CreatedAtUpdatedAtMixin`.  
- Posts are ordered by most recent creation date first.  
- The string representation shows the post title and the author’s username.

### Likes

The **Likes** model enables users to like posts, tracking which user liked which post. It also includes timestamps for when the like was created or updated.

| Database Field | Field Type | Description                                        |
|----------------|------------|--------------------------------------------------|
| `user`         | ForeignKey | References the user who liked the post (CASCADE on delete) |
| `post`         | ForeignKey | References the liked post (CASCADE on delete), related name: `likes` |
| `created_at`   | DateTimeField | Timestamp when the like was created (from mixin)  |
| `updated_at`   | DateTimeField | Timestamp when the like was last updated (from mixin) |

---

**Notes:**  
- The model inherits timestamp fields `created_at` and `updated_at` from `CreatedAtUpdatedAtMixin`.  
- The combination of user and post is unique, so a user can like a post only once.  
- The string representation shows the username and the title of the liked post.

### Comments

The **Comments** model allows users to comment on posts, storing the comment content along with timestamps.

| Database Field | Field Type  | Description                                  |
|----------------|-------------|----------------------------------------------|
| `user`         | ForeignKey  | References the user who made the comment (CASCADE on delete), related name: `comments` |
| `post`         | ForeignKey  | References the post being commented on (CASCADE on delete), related name: `comments` |
| `content`      | TextField   | The text content of the comment              |
| `created_at`   | DateTimeField | Timestamp when the comment was created (from mixin)  |
| `updated_at`   | DateTimeField | Timestamp when the comment was last updated (from mixin) |

---

**Notes:**  
- The model inherits `created_at` and `updated_at` timestamp fields from `CreatedAtUpdatedAtMixin`.  
- The string representation includes the username of the commenter and the title of the post.

### Replies

The **Replies** model enables threaded reply functionality by allowing users to reply to comments and to other replies.

| Database Field  | Field Type  | Description                                                  |
|-----------------|-------------|--------------------------------------------------------------|
| `user`          | ForeignKey  | References the user who created the reply (CASCADE on delete), related name: `replies` |
| `comment`       | ForeignKey  | References the comment being replied to (CASCADE on delete), related name: `replies` |
| `content`       | TextField   | The text content of the reply                                 |
| `parent_reply`  | ForeignKey  | Self-referential field for nested replies (nullable, blank), related name: `nested_replies` |
| `created_at`    | DateTimeField | Timestamp when the reply was created (from mixin)          |
| `updated_at`    | DateTimeField | Timestamp when the reply was last updated (from mixin)     |

---

**Notes:**  
- Replies are ordered by creation time (`created_at`).  
- The string representation shows the username of the replier and the ID of the comment replied to.
- Although the backend code for Replies exists, this functionality is currently not integrated with the frontend and remains unimplemented in the live application. It is planned for future updates.

**Follow**

The Follow model is designed to represent the following relationship between users.

| Database Value | Field Type  | Field Argument                                                      |
|----------------|-------------|-------------------------------------------------------------------|
| follower       | ForeignKey  | UserProfile, related_name="following", on_delete=models.CASCADE    |
| following      | ForeignKey  | UserProfile, related_name="followers", on_delete=models.CASCADE    |

This model enforces uniqueness to prevent duplicate follow relationships between the same two users.

**Notes:**

- The model uses a mixin to automatically track creation and update timestamps (`created_at` and `updated_at`).

**Notifications**

The Notifications model is designed to manage notification functionality for various user interactions.

| Database Value     | Field Type   | Field Argument                                                            |
|--------------------|--------------|---------------------------------------------------------------------------|
| user               | ForeignKey   | get_user_model(), on_delete=models.CASCADE, related_name="notifications"  |
| created_by         | ForeignKey   | get_user_model(), on_delete=models.CASCADE, related_name="created_notifications" |
| notification_type  | CharField    | max_length=50, choices=NOTIFICATION_TYPES                                |
| content            | TextField    | None                                                                      |
| post               | ForeignKey   | Post, on_delete=models.CASCADE, null=True, blank=True                    |
| comment            | ForeignKey   | Comment, on_delete=models.CASCADE, null=True, blank=True                 |
| reply              | ForeignKey   | Reply, on_delete=models.CASCADE, null=True, blank=True                   |
| is_read            | BooleanField | default=False                                                             |

`NOTIFICATION_TYPES` include: Likes, Follow, Comment, Reply, and Level Up.

**Notes:**

- The model uses a mixin to automatically track creation and update timestamps (`created_at` and `updated_at`).
- Although the backend code for notifications is implemented and supports multiple notification types, these notification features are currently **not used or integrated in the frontend** and remain for future development.

## Frontend

### Sign Up Page

![SignUpFormPage](https://i.ibb.co/3mpsDwq3/signup.png)

The Sign Up page allows new users to create an account on the platform. Accessible by clicking the **Sign Up** button located in the NavBar, users are presented with a simple and intuitive form where they can provide the necessary information to register. Upon successful registration, users are automatically redirected to the Sign In page, allowing them to immediately log in and start using their newly created account without additional navigation.

The Sign Up page is designed with accessibility and user experience in mind, ensuring a smooth onboarding process. The background image used on this page was sourced for free from [Pexels](https://www.pexels.com).

## Sign In Page

![SignInFormPage](https://i.ibb.co/KzDfBx4K/signin.png)

The Sign In page allows existing users to log into their accounts by providing their **username** and **password**. Upon successful authentication, users are immediately redirected to the homepage, where they are fully signed in and able to interact with all features of the platform.

For users who find themselves on the Sign In page but do not yet have an account, a convenient **"Don't have an account? Sign up now!"** button is available. Clicking this button redirects users to the Sign Up page, where they can easily create a new account and join the platform.

The authentication system includes **token-based session management**. When a user successfully signs in, an authorization token is generated and stored securely. This token allows the user to remain logged in for up to **7 days**. Each time the user accesses the platform within this period, the token is automatically refreshed, ensuring a seamless experience without the need for repeated logins. If the user remains inactive for more than 7 days, the token expires, and they will be prompted to log in again upon returning.

The Sign In page maintains a user-friendly interface and is designed for quick and secure access. As with the Sign Up page, the background image used here was sourced for free from [Pexels](https://www.pexels.com).

### NavBar while user is not logged in

![Navbar while user is not logged in](https://i.ibb.co/vC8sQtdY/navbar.png)

The NavBar for a user that access the page for the first time presents a Home button, a Sign In button to access the Sign In Form and a Sign Up button to access the Sign Up Form. The User can also click on the page logo to access the Home page.

### NavBar while user is logged in

![NavBar while user is logged in](https://i.ibb.co/PG1XBC3X/navbarloggedin.png)

When the user logs in their account, the Navigation bar presents a New Post button to access the Post Creation Form, a Feed button to filter posts on the main page to view posts only by users followed by the current user, a Liked button to filter posts on the main page to view only posts that were liked by the current user, a Sign Out button that logs the user out and returns the state of the NavBar to the previous one and a Profile button to access the Profile page of the current User.

### Page Not Found

![Page Not Found](https://i.ibb.co/jPLVpYs9/pagenotfound.png)

When a user tries to access a non-existent page, this is the page they find themselves in, so they can still access the Navigation bar and return to normal site pages.

### Post Creation Form

![Post Creation Form](https://i.ibb.co/WNbkrsMJ/newpost.png)

Users can interact with the button to upload an image and with the text contents. Clicking on the Cancel button will bring users back to the most previous page they accessed. Clicking on the Create button should create the post in the database, return the user to the Home page and present the newly created post in the Home page. After uploading an image, a Change image button will appear so Users can still change the image before posting.

### Post

![Post](https://i.ibb.co/5hy2SMXz/post.png)

Example post viewed in the Home page. Users should be able to interact with the user's name and profile picture to access their user profile, click the image of the post to open the post page, click on the heart icon to like the post, click the text bubbles icon to open the comment section.

### Search Bar

![Search Bar](https://i.ibb.co/KjBMKqvc/searchbear.png)

A search bar is present on the top of each Home, Feed, Liked page to let users filter the posts searching key names or contents.

### Spinner Icon

![Spinner Icon](https://i.ibb.co/qLM9vygH/spinner.png)

A spinner icon is used while content is loading or fails to load to make users understand that either the content is loading or failed loading.

### Logo

![Logo](https://i.ibb.co/C335BKKS/logo.png)

The Gamebits logo was created by myself on Krita writing the letters G and B in the font called Magneto , coloring them blue and applying an outer glow layer style.

## Typography
The main font used in the application is [Montserrat](https://fonts.google.com/specimen/Montserrat?query=montserrat). The use of this font is consistent with the color scheme. Needless to say, the font was chosen due to its readability and its feel of modern typography together with the whole page scheme.

## Future Features
I do intend to continue on working on Gamebits to make it fully functional, with all correct features applied that were described in the About section of this document. This includes Notifications, Experience Points and Leveling system, comments threads. Future features that can be included in this style of page are chat functions between users, with post sharing capabilities, special designed badges for users that reach certain levels to specially customize their own profile and a list of achievements, objectives of certain actions taken on the page, that could push futher engagement on the platform.

# Testing

## Bugs

Many bugs were found during development. Each frontend feature was or is having troubles working correctly. 

### Solved Bugs

Main bugs include the project not functioning on deployment because of the initial structure of the project in its repository, having a main folter called gamebits, inside two folders that divide the files in both backend and frontend. This caused Heroku to not being able to find and deploy the backend correctly, so I had to restructure the entire project to have all the backend folders and files directly in the root of the project.
Another main bug was due to Frontend deployment where it would not load the React build correctly, missing the index.html in deployment and not correctly applying changes pushed to GitHub and deployed on Heroku due to having in the axiosDefaults.js file a / that should not have been there. So this bug was resolved by removin the / from the URL in this code section of the axiosDefaults.js file

    const  apiUrl  =  process.env.NODE_ENV  ===  "development"
	    ?  "http://127.0.0.1:8000"
	    :  "https://gamebits-579c6fd85599.herokuapp.com";

### Known Bugs

Many, if not all features applied to the Frontend are not functional. Users are not able to functionaly register their user, they are not able to functionaly sign in and cannot functionality create a new post. Like and comments functionality are present, but not functional and the Popular Users list does not correctly load. The backend is accessible, but some URL paths are not accessible due to authorization functionalities, but most backend URL paths are functional.

### PEP8 Validation

I've tested all the files through the CI PEP8 Linter and although I found a few errors, I have rectified these and now all files are passing with "All clear, no errors found".

# Deployment To Heroku

The project was deployed to Heroku. The deployment process used was taken from the [Advanced Front End: Deployment of both applications guide from Code Institute](https://code-institute-students.github.io/advfe-unified-workspace/deployment/00-deployment).

# Credits

### Content

This project was inspired by the Code Institute walkthrough Moments project but has been modified to fit the Gamebits idea. Many Frontend files were taken from the walkthrough Moments project and adapted to my own project set up and adapted for the functionalities present in my project, not present in the walkthrough project.
As mentioned above, the Logo was created by myself using Krita.

# Acknowledgments

I have thoroughly enjoyed developing not only this project, but all other project during the course as well, and although I found React to have a challenging learning curver, after much perseverance I feel like I have a good baseline knowledge when it comes to developing applications that use an advanced front-end framework like React that talk to a back-end API developed using the Django REST Framework. With this knowledge acquired with also the help of the course provided by Code Institute, I feel confident that in the future I can do a better job at showcasing my abilities to make a functional page using React for the front-end and DRF-API for the back-end. I do understand that the submitted project does not respect the initial concept descripted in the README file, so I look forward to continue working on this project even beyond the premised deadline to finally complete Gamebits, as it is a project that be actually utilized and expanded upon to create something actually useful for the Internet.

I would like to thank my mentor Marcel for providing me with their time and patience to go over the project and code and help me figure out some of the biggest problems I was having. I also thank Code Institute Tutor Assistance for helping me find the cause of my biggest bug of the deployed backend version.

I also need to thank my family and my friends for supporting throughout development, encouraging me to continue on working and giving me constructed feedback and critics that helped me with the concept of Gamebits and helped with certain decisions taken with the design of the site.
It has been an incredible journey, I'm extremely excited to see where this adventure will take me and to continue on working on my personal project to hopefully provide some useful and fun experience for everyone.

Thank you so much for a fantastic experience [Code Institute](https://codeinstitute.net/de/) !

Biagiarelli Adriano, 2025.

[Back to top](https://github.com/BiagiarelliAdriano/GameBits).
