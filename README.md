# *Gamebits - Project Portfolio 5 - Advanced Front End (React) with Django REST Framework API*

You can view the live site here - [Gamebits](https://gamebits-579c6fd85599.herokuapp.com/)

Repository: [Github Repo](https://github.com/BiagiarelliAdriano/GameBits)

The platform is developed by Biagiarelli Adriano.

![Gamebits Platform](https://i.ibb.co/fYppbnd5/gamebits.png)

# About
GameBits is an online social platform focused on providing a safe place for everyone who enjoys video games to share bits of their experiences and achievements across different game worlds. The platform offers Sign Up and Sign In functionality, and allows users to create posts, like posts, comment on posts, follow other users, filter posts by liked posts or posts by followed users, and search for specific posts by name, keywords, or game.

# User Experience Design
## Strategy
The platform is designed to be easy to use and intuitive for anyone, not just those interested in video games. Its main goal is to provide a space where users can share their own game bits — moments, experiences, and highlights from their favorite games — and connect with others who appreciate them. Ultimately, GameBits aims to foster positive feedback, social interaction, and the sharing of experiences across gaming communities.

### Color palette
The following color palette was selected to give the website a modern and vibrant look, combining dark backgrounds with bright neon accents for a striking visual contrast.

![Color Palette](https://i.ibb.co/zhd8YLNG/colorpalette.png)

## Media

- The Sign Up and Sign In images are sourced from [Pexels](https://www.pexels.com).
- All other images currently used in the live version of GameBits were uploaded directly from my personal computer and do not represent media that I own or claim ownership of.

## Wireframes
Initial Wireframes.

![Home Page](https://i.ibb.co/hF8d4qvK/wireframe1.png)

![Post Page](https://i.ibb.co/b5gcmY09/wireframe2.png)

![Post Creation Or Edit Page](https://i.ibb.co/xKtLPC3s/wireframe3.png)

## User stories
The Agile Methodology was used to plan this project. This was implemented through Github and the Project Board which can be seen in this GitHub repository:

[User Stories](https://github.com/BiagiarelliAdriano/GameBits/issues?page=1)

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
- The string representation shows the username of the replier and the ID of the comment replied to, to help debug threaded comments.
- Although the backend code for Replies exists, this functionality is currently not integrated with the frontend and remains unimplemented in the live application. It is planned for future updates.

### Follows

The Follows model is designed to represent the following relationship between users.

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

`NOTIFICATION_TYPES` include:
- Likes
- Follow
- Comment
- Reply
- Level Up

**Notes:**

- The model uses a mixin to automatically track creation and update timestamps (`created_at` and `updated_at`).
- Although the backend code for notifications is implemented and supports multiple notification types, these notification features are currently **not used or integrated in the frontend** and remain for future development.

## Frontend

### Sign up page

![Sign Up Form Page](https://i.ibb.co/S9B1JH1/signup.png)

The Sign Up page allows new users to create an account on the platform. Accessible by clicking the **Sign Up** button located in the NavBar, users are presented with a simple and intuitive form where they can provide the necessary information to register. Upon successful registration, users are automatically redirected to the Sign In page, allowing them to immediately log in and start using their newly created account without additional navigation.

The Sign Up page is designed with accessibility and user experience in mind, ensuring a smooth onboarding process. The background image used on this page was sourced for free from [Pexels](https://www.pexels.com).

## Sign in page

![Sign In Form Page](https://i.ibb.co/spzGzzXn/signin.png)

The Sign in page allows existing users to sign in by providing their **username** and **password**. Upon successful authentication, users are immediately redirected to the homepage, where they are fully signed in and able to interact with all features of the platform.

For users who find themselves on the Sign in page but do not yet have an account, a convenient **"Don't have an account? Sign up now!"** button is available. Clicking this button redirects users to the Sign up page, where they can easily create a new account and join the platform.

The authentication system includes **token-based session management**. When a user successfully signs in, an authorization token is generated and stored securely. This token allows the user to remain logged in for up to **7 days**. Each time the user accesses the platform within this period, the token is automatically refreshed, ensuring a seamless experience without the need for repeated logins. If the user remains inactive for more than 7 days, the token expires, and they will be prompted to log in again upon returning.

The Sign in page maintains a user-friendly interface and is designed for quick and secure access. As with the Sign up page, the background image used here was sourced for free from [Pexels](https://www.pexels.com).

### NavBar while user is not logged in

![Navbar While User Is Not Logged In](https://i.ibb.co/vC8sQtdY/navbar.png)

When a user accesses the platform without being logged in, the Navbar displays the following options: **Home**, **Sign In**, and **Sign Up**. The **Sign In** button directs the user to the Sign in form, while the **Sign Up** button leads to the account registration form. Additionally, clicking on the platform logo also redirects the user to the Home page.

### Navbar while user is logged in

![NavBar While User Is Logged In](https://i.ibb.co/gLL9rGD8/navbarloggedin.png)

When the user logs into their account, the Navigation bar presents a New Post button to access the Post creation form, a Feed button to filter posts on the main page to view posts only by users followed by the current user, a Liked button to filter posts on the main page to view only posts that were liked by the current user, a Sign Out button that logs the user out and returns the state of the NavBar to the previous one and a Profile button to access the Profile page of the current user.

## Home page (not logged in)

![Home Page While Not Logged In](https://i.ibb.co/Ng5trfxq/gamebitsloggedout.png)

When a user is not logged in, they have limited access to the Home page. The following features are available:

- **Navigation bar:**
  - The NavBar contains only the following buttons:
    - **Home** (returns to the Home page)
    - **Sign In** (redirects to the login page)
    - **Sign Up** (redirects to the account creation page)

- **Post browsing:**
  - The user can view all posts created by other users.
  - Infinite scrolling is enabled, allowing continuous browsing through all posts.

- **Post interactions:**
  - The user can see the number of likes and comments for each post.
  - The user can hover over the Like button, but cannot click it. When they hover, a small tooltip appears saying they need to log in to like posts.
  - The user can click on the **author's username** or **profile picture** to visit that user's profile page.
  - If the user clicks on the **post image** or the **Comments button**, they are redirected to the **Sign Up** page to create an account and gain full access to post details and comments.

## Home page (logged in)

![Home Page While Logged In](https://i.ibb.co/fYppbnd5/gamebits.png)

When a user is logged in, they have full access to the Home page with the following features:

- **Navigation bar:**
  - The NavBar contains the following buttons:
    - **Home** (returns to the Home page)
    - **New Post** (redirects to the post creation form)
    - **Feed** (shows posts from followed users)
    - **Liked** (shows posts the user has liked)
    - **Sign Out** (logs the user out)
    - **Profile Picture** (clickable, redirects to the user's own profile page)

- **Post browsing:**
  - The user can view all posts created by other users.
  - Infinite scrolling is enabled, allowing continuous browsing through all posts.

- **Post interactions:**
  - The user can see the number of likes and comments for each post.
  - The user can click the Like button to like or unlike any post.
  - The user can click on the **author's username** or **profile picture** to visit that user's profile page.
  - When the user clicks on the **post image** or the **Comments button**, they are redirected to that post's detail page to view and write comments.

- **Popular users list:**
  - The user can see the complete list of users, ordered by creation date (most recent first).
  - They can follow or unfollow other users directly from this list.
  - The Follow / Unfollow button is not displayed next to their own name.

## Feed page

![Feed Page](https://i.ibb.co/wZK7BLN6/feedpage.png)

- The **Feed** page can be accessed by clicking the **Feed** button in the Navigation bar.
- This page displays all posts created by users that the currently logged-in user follows.
- The posts are filtered from the general list of posts available on the Home page.
- Infinite scrolling is enabled for continuous browsing.

## Liked page

![Liked Page](https://i.ibb.co/7d93BLfd/likedpage.png)

- The **Liked** page can be accessed by clicking the **Liked** button in the Navigation bar.
- This page displays all posts that the currently logged-in user has previously liked.
- The posts are filtered from the general list of posts available on the Home page.
- Infinite scrolling is enabled for continuous browsing.

### Search bar

![Search Bar](https://i.ibb.co/zTGj1gbM/searchbar.png)

A search bar is present at the top of the Home, Feed, and Liked pages, allowing users to filter the displayed posts based on specific keywords. Users can search for posts by:

- **Username** of the author
- **Title** of the post
- **Game** associated with the post

This enables users to easily find posts related to specific users or topics of interest. The search results are dynamically filtered within the current page context (Home, Feed, or Liked).

### Page not found

![Page Not Found](https://i.ibb.co/jZbXxLpn/pagenotfound.png)

When a user attempts to access a non-existent or invalid route, they are presented with this custom "Page Not Found" screen. The navigation bar remains accessible at the top, allowing users to easily return to the home page or navigate to other valid sections of the website.

## Popular users section

![Popular Users List](https://i.ibb.co/Vcq0HkBJ/popularuserslist.png)

The **Popular users** list displays the complete list of all users on the server, ordered by their account creation date — from the most recent to the oldest.

- **For users who are not logged in:**
  - They can click on any profile picture in the list to visit that user's profile page.
  - However, they **cannot see** or interact with the Follow button.

- **For logged-in users:**
  - They can click on any profile picture to visit that user's profile page.
  - They **can see and interact** with the Follow button next to every user except themselves (users cannot follow themselves).
  - They can follow and unfollow other users directly from the Popular Users list.

The Popular users list is accessible and interactive on the following pages:
- Home page
- Any post page
- Feed page
- Liked posts page
- Any user profile page

This ensures users can always discover and connect with others throughout the platform.

### Post creation form

![Post Creation Form](https://i.ibb.co/gbym777V/newpost.png)

The Post creation form allows users to create new posts by filling out all the required fields: title, game, content, and optionally uploading an image. Users cannot submit the form if any required field is left empty or if they attempt to create a post containing only an image without text content.

Users can upload an image using the provided button; there is a limit image size that can be uploaded of 5MB. Once an image has been selected, a Change image button appears to allow them to modify their selection before submission. The Create button triggers the post submission process. While the form is processing, the button changes to Creating... to provide feedback that the submission is in progress.

Upon successful creation, the user is automatically redirected to the newly created post's dedicated page, where they can view and interact with their content. Clicking the Cancel button before clicking the Create button returns the user to the previous page they were visiting before accessing the post creation form.

### Post page

![Post Page](https://i.ibb.co/9ktCkChH/postpage.png)

The Post page displays the full details of an individual post. Users can access this page by clicking on a post image from the Home, Feed, or Liked pages, or immediately after successfully creating a new post.

Only logged-in users are able to access and interact with this page.

On the Post page, users can:

- View the complete post details, including title, game, content, image, author, like count, and comment count.
- Click on the author's username or profile picture to visit the author's profile page.
- Like or unlike the post.
- View and write comments in the comment section.
- Navigate through the site using the Navigation bar and interact with the Popular Users list, both of which remain accessible on this page.

### Comment section

![Comment Section](https://i.ibb.co/bgK6MhhK/commentsection.png)

The Comment section allows users to interact with posts by writing and managing comments.

- Logged-in users can write their own comments using the comment form located at the top of the comment section.
- The **Post** button is disabled until the user writes a comment.
- After posting, the new comment appears immediately below the form. Comments are displayed in order of creation, with the most recent comments appearing first.
- All users can view comments from other users, but can only edit or delete their own comments.

For comments owned by the logged-in user:

- A blue action button appears on the right side of the comment.
- Clicking this button opens a dropdown menu with two options: **Edit Comment** and **Delete Comment**.

![Comment With Edit Options](https://i.ibb.co/h1gKBXL2/commentwitheditoptions.png)

**Edit comment:**
- Selecting **Edit Comment** closes the dropdown and turns the comment into an editable text field.
- After making changes, users can click **Save** to apply the updates, which are reflected dynamically.
- Clicking **Cancel** will discard any changes and return the comment to its original state.

![Comment While Editing](https://i.ibb.co/6RK8xy5k/commentwhileediting.png)

**Delete comment:**
- Selecting **Delete Comment** immediately removes the comment from the comment section dynamically.

### User profile

![User Profile page](https://i.ibb.co/N2VY5q3Z/userprofilepage.png)

The User profile page provides a detailed view of each user's profile and posts.

- The profile page can be accessed in multiple ways:  
  - By clicking the user's profile picture or username in any post.
  - Through the Popular users list.
  - Through the profile picture in the Navigation bar (to access your own profile).

The page displays the following information:

- User profile picture.
- Username.
- Number of followers.
- Number of users the profile is following.
- Total number of posts created by the user.
- User bio (only if a bio has been set).
- A section titled "*username*'s posts", displaying all posts created by the user. These posts can be fully interacted with as described in the Post section.
- The Popular users list remains available, as does the Navigation bar.

**Interaction options:**

- If the logged-in user is viewing their own profile:
  - An **Edit** button is displayed.
  - Clicking the Edit button opens a dropdown with the following options:
    - **Edit User** (to modify profile details)
    - **Change Username**
    - **Change Password**

![User Profile Edit Options](https://i.ibb.co/r2vfxzrM/usereditprofileoptions.png)

- If the logged-in user is viewing another user's profile:
  - A **Follow / Unfollow** button is shown instead of the Edit button, allowing the user to follow or unfollow the profile owner.

![User Profile Not Owner](https://i.ibb.co/DPKq21mx/userprofilefollow.png)

### Edit user page

![Edit User page](https://i.ibb.co/jkMWN53r/usereditpage.png)

The Edit user page allows users to update their profile information.

- This page is accessible through the **Edit** dropdown menu located in the user’s own profile page.
- Only the owner of the profile can access this page.

The page displays:

- The current profile picture.
- A **Change the image** button to upload a new profile picture.
- A text area to modify the user's bio.
- Two buttons:
  - **Cancel**: Redirects the user back to the previous page without applying any changes.
  - **Save**: Saves any changes made (or none, if no changes were made) and redirects the user back to the profile page, where the updated information will be immediately visible.

### Change username page

![Change Username Page](https://i.ibb.co/20LrbYh2/usereditusernamepage.png)

The Change username page allows users to update their current username.

- This page is accessible through the **Edit** dropdown menu in the user’s own profile page.
- Only the owner of the profile can access this page.

The page contains:

- A single input field to enter the new username.
- Two buttons:
  - **Cancel**: Redirects the user back to the previous page without saving any changes.
  - **Save**: Applies the new username (or keeps the existing one if no changes were made) and redirects the user back to the profile page, where the updated username will be immediately visible.

### Change password page

![Change Password Page](https://i.ibb.co/Lhv2zSXT/usereditpasswordpage.png)

The Change password page allows users to update their current password.

- This page is accessible through the **Edit** dropdown menu in the user’s own profile page.
- Only the owner of the profile can access this page.

The page contains:

- A **New Password** input field to enter the desired new password.
- A **Confirm Password** input field to confirm the new password matches.
- Two buttons:
  - **Cancel**: Redirects the user back to the previous page without applying any changes.
  - **Save**: Applies the password change (only if both fields match and are valid) and redirects the user back to the profile page. 

### Spinner icon

![Spinner Icon](https://i.ibb.co/qLM9vygH/spinner.png)

A spinner icon is used while content is loading or fails to load to make users understand that either the content is loading or failed loading.

### Logo

![Logo](https://i.ibb.co/C335BKKS/logo.png)

The Gamebits logo was created by myself on Krita writing the letters G and B in the font called Magneto , coloring them blue and applying an outer glow layer style.

## Typography
The main font used in the application is [Montserrat](https://fonts.google.com/specimen/Montserrat?query=montserrat). The use of this font is consistent with the color scheme. Needless to say, the font was chosen due to its readability and its feel of modern typography together with the whole page scheme.

## Future Features

Gamebits is now fully functional and operational with all the core features implemented. However, I still have many ideas and improvements I would like to bring to the platform in future iterations, to further expand its possibilities and deliver an even more complete and engaging experience for users.

Some of the future features I plan to work on include:

- **Comment Threads:** Allow users to reply to specific comments, creating structured discussions under posts.
- **Liking Comments:** Introduce the ability to like individual comments, adding more interaction possibilities.
- **Notification System:** Develop a complete notifications system to inform users when they receive likes, comments, follows, or level-ups.
- **Experience-Based Level System:** Implement a leveling system where users gain experience points for their activity and engagement on the platform.
- **Mobile Adaptations:** Further refine and optimize the mobile experience to ensure smooth usability across all devices.
- **Other Expansions:** Explore additional features such as chat functionality, post sharing, custom badges for users who reach certain levels, and a system of achievements that reward users for accomplishing specific objectives and milestones on the platform.

I strongly believe in the potential of Gamebits as a continuously expandable project, capable of offering an even richer, more interactive, and fun experience for all users.

# Testing

## Manual Testing

Every feature included in this project has been manually tested according to the User Stories defined during development. Throughout testing, multiple issues were encountered and resolved to ensure full functionality of both the backend and frontend components. After iterative testing, debugging, and fixes, all features are now working as intended.

The following manual tests were performed, directly based on the User Stories created for this project. Each User Story was tested individually to confirm that all acceptance criteria were met.

The full manual testing results are documented in the following spreadsheet:

[Manual Testing Spreadsheet Document](https://docs.google.com/spreadsheets/d/1p3gPO1n-VXaZmwSIVtsoFPNIGuuC_DYJr0Dne3J61Ts/edit?usp=sharing)

## Messaging / Alerts

Throughout the frontend, several custom alerts and error messages have been implemented to improve user experience and give clear feedback on actions and errors. Below are the various messages displayed to the user:

**Sign Up Alerts**:

- **Empty Fields Alert**: Triggered when a user attempts to sign up with any field left blank. The alert specifies which fields cannot be blank.

![Sign Up Empty Fields Alerts](https://i.ibb.co/GSNrptZ/signupalerts.png)

- **Password Mismatch Alert**: Displayed when the two entered passwords do not match. The alert informs the user that both passwords must match.

![Sign Up Password Mismatch Alert](https://i.ibb.co/kVCPmfcd/signuppasswordalert.png)

- **Invalid Email Alert**: Shown when the provided email field is incomplete or not properly formatted.

![Sign Up Email Alert](https://i.ibb.co/0z9ddvD/emailsignupalert.png)

- **Sign Up Password Too Short Alert**: Shown when the provided password is shorter than 8 characters for security.

![Sign Up Password Too Short Alert](https://i.ibb.co/MyfKn8fP/signuppasswordtooshortalert.png)

**Sign Up Success**:

- **Welcome Alert**: After successful registration, the user receives a confirmation welcoming them to the platform.

![Sign Up Welcome Alert](https://i.ibb.co/n8gCJ9m8/signupwelcomealert.png)

**Sign In Alerts**:

- **Empty Fields Alert**: Triggered when attempting to log in with any blank field, specifying which fields cannot be blank.

![Sign In Empty Fields Alerts](https://i.ibb.co/RpLCwF2t/signinalerts.png)

- **Invalid Credentials Alert**: Displayed when incorrect username or password are provided, or if the account does not exist.

![Sign In Invalid Credentials Alert](https://i.ibb.co/CK8dt7P2/signinalertwrongusernameorpassword.png)

**Sign In Success**:

- **Successful Login Alert**: After successfully signing in, the user is shown a confirmation of successful login.

![Sign In Login Alert](https://i.ibb.co/8gvXxWnC/signinalert.png)

**Sign Out**:

- **Successful Sign Out Alert**: Displayed when the user successfully logs out of their account.

![Sign Out Alert](https://i.ibb.co/xtMXJvYV/signoutalert.png)

**Post Creation Alerts**:

- **Image Size Limit Alert**: Shown when user tries to upload a bigger image than the image size limit of 5MB.

![Post Image Limit Size](https://i.ibb.co/KxPJhLLT/postcreationsizelimit.png)

- **Missing Fields Alert**: Triggered when attempting to create a post while leaving any of the required fields empty (Title, Game, or Content).

![Post Creation Missing Fields Alert](https://i.ibb.co/GQ8TPk9c/postalert1.png)

- **Successful Post Creation Alert**: Displayed after successfully creating a post.

![Post Creation Success Alert](https://i.ibb.co/zhHd4nc4/postcreationalert.png)

**Post Deletion**:

- **Post Deletion Alert**: Shown when a user successfully deletes a post.

![Post Deletion Alert](https://i.ibb.co/Lh1ss0Vv/postdeletionalert.png)

**Comment Deletion**:

- **Comment Deletion Alert**: Shown when a user successfully deletes a comment.

![Comment Deletion Success Alert](https://i.ibb.co/Pzm5smk2/commentdeletionalert.png)

## CLI Python Linter Testing

All relevant Python files present in the backend were passed through the [CLI-based Python Linter](https://pep8ci.herokuapp.com) to ensure consistent code formatting and adherence to PEP 8 standards. Any formatting issues or warnings identified by the linter were resolved, resulting in clean, well-formatted code across the entire backend.

Here is the list of all code that was passed through the Linter Testing, in alphabetical order.

- **Comments Mixin**:

![Comments Mixin](https://i.ibb.co/9mW2MYNb/commentsmixinfile.png)

- **Comments Models**:

![Comments Models](https://i.ibb.co/FL3msc8G/commentsmodelfile.png)

- **Comments Serializers**:

![Comment Serializers](https://i.ibb.co/S4VKXmkH/commentserializer.png)

- **Comments Urls**:

![Comments Urls](https://i.ibb.co/zVp8v820/commenturls.png)

- **Comments Views**:

![Comments Views](https://i.ibb.co/cj3n1CH/commentviews.png)

- **Follows Mixin**:

![Follows Mixin](https://i.ibb.co/wrb9ndhS/followmixin.png)

- **Follows Models**:

![Follows Models](https://i.ibb.co/LzhhyvW3/followmodel.png)

- **Follows Serializers**:

![Follows Serializers](https://i.ibb.co/5XJxDNyz/followserializer.png)

- **Follows Urls**:

![Follows Urls](https://i.ibb.co/svtJy46K/followurls.png)

- **Follows Views**:

![Follows Views](https://i.ibb.co/gZBt1drr/followviews.png)

- **Likes Mixin**:

![Likes Mixin](https://i.ibb.co/99HqmQM6/likesmixin.png)

- **Likes Models**:

![Likes Models](https://i.ibb.co/fYjvWPW1/likesmodel.png)

- **Likes Serializers**:

![Likes Serializers](https://i.ibb.co/7dhRxTbH/likesserializer.png)

- **Likes Urls**:

![Likes Urls](https://i.ibb.co/wNZqVWFD/likesurls.png)

- **Likes Views**:

![Likes Views](https://i.ibb.co/BVZ6bwpP/likesviews.png)

- **GameBits Main Settings**:

![GameBits Main Settings](https://i.ibb.co/ymsYHQSY/mainsettingspy.png)

- **GameBits Main Urls**:

![GameBits Main Urls](https://i.ibb.co/Z6VVxhYn/mainurls.png)

- **Posts Mixin**:

![Posts Mixin](https://i.ibb.co/CpPkMsvj/postsmixin.png)

- **Posts Models**:

![Posts Models](https://i.ibb.co/DHz0Fpm0/postsmodel.png)

- **Posts Serializers**:

![Posts Serializers](https://i.ibb.co/S1HJ9bs/postsserializer.png)

- **Posts Urls**:

![Posts Urls](https://i.ibb.co/ZR4BkbXf/postsurls.png)

- **Posts Views**:

![Posts Views](https://i.ibb.co/YBRWZcPW/postsviews.png)

- **Users Models**:

![Users Models](https://i.ibb.co/MDQXYPPq/usersmodel.png)

- **Users Serializers**:

![Users Serializers](https://i.ibb.co/svg1j7MM/usersserializer.png)

- **Users Urls**:

![Ursers Url](https://i.ibb.co/tM5W56Ks/userurls.png)

- **Users Views**:

![Users Views](https://i.ibb.co/Tx1JfRmb/usersviews.png)

### Code Quality (JavaScript Linter)

All relevant JavaScript files in the frontend were passed through both **JSHint** and **ESLint** directly within the local development environment. All important errors and warnings were reviewed and resolved, ensuring proper code quality and consistency across the frontend codebase.

### HTML Validation (W3C Markup Validator)

The deployed version of the project was tested using the **W3C Markup Validation Service**. The validator reported no relevant HTML errors, with only a small number of informational messages that do not affect rendering or functionality.

![HTML Validation](https://i.ibb.co/GvwsTSwT/htmlchecker.png)

### CSS Validation (W3C CSS Validator)

The deployed version of the project was tested using the **W3C CSS Validation Service**. The validator reported no relevant CSS errors, confirming that the stylesheet is valid and properly structured.![CSS Validation](https://i.ibb.co/5XBLYm0t/csschecker.png)

### Performance & Accessibility (Google Lighthouse)

The deployed version of the project was tested using **Google Lighthouse**. The audit reported only some minor Cookie warnings related to the internal Cloudinary media service. These do not hinder user experience or functionality in any way and are considered non-critical.

![Google Lighthouse Validation](https://i.ibb.co/14wYbzn/lighthouse.png)

## Bugs

### Solved Bugs
- **Frontend full functionality issues:**

Originally, most frontend features (registration, login, post creation, likes, comments, and popular users) were not fully functional due to multiple implementation bugs. All these issues have since been resolved and the entire frontend is now fully operational.

- **Project structure issue (Deployment - Backend):**

Initially, the project structure included an unnecessary `gamebits/` folder inside which the backend resided. This prevented Heroku from correctly locating and deploying the backend. The project structure were reorganized by moving all backend files directly into the project root, which resolved the issue.

- **Deployment bug (Frontend - Axios issue):**

Another main bug was related to the frontend deployment where the React build would not correctly load the `index.html` and apply changes pushed to GitHub, resulting in broken API calls and missing updates. This was originally caused by an incorrect slash `/` present in the Axios base URL inside `axiosDefaults.js`, which was interfering with the routing on the deployed version. The bug was initially resolved by removing the slash from the URL logic.

After further development and improvements to the project structure, I decided to fully refactor how the frontend handled the API URL configuration. Instead of hardcoding the API URL directly inside the code based on `NODE_ENV`, I implemented the use of environment variables for cleaner configuration management.

I created a `.env` file inside the frontend folder with the following:

```
REACT_APP_API_URL=https://gamebits-579c6fd85599.herokuapp.com
```
And I modified the Axios configuration like this:
```
const apiUrl = process.env.REACT_APP_API_URL;

axios.defaults.baseURL = `${apiUrl}/api/`;
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;
```
This solution allows the frontend to dynamically receive the correct API URL at build time, simplifies deployment, and follows standard best practices for environment management in React applications.

### Known Bugs

- **Limited mobile visual support:**

On certain very small mobile devices (screen width smaller than ~320px), the CSS may break slightly on the right side of the screen. This is purely a visual issue and does not affect functionality.

![Broken Mobile View](https://i.ibb.co/KjwyjVGj/mobileviewbugged.png)

# Deployment
This section will fully explain how to deploy both the backend and frontend of the GameBits project to production, as well as how to run both locally for development.

The project is deployed using:
- Heroku (for both backend and frontend)
- Neon PostgreSQL (external database for production)
- Cloudinary (for media storage)
- GitHub (for version control and repository management)
The live link can be found here: [Gamebits](https://gamebits-579c6fd85599.herokuapp.com/)
Both frontend and backend are deployed from the same GitHub repository.

## Backend Deployment
1. **Install the required dependencies**

The backend of this project is built with Django REST Framework, and uses several additional libraries. Install all dependencies with:

```
pip install -r requirements.txt
```

> Make sure your virtual environment is activated before running this. All the commands explained in this section will assume you are using a Git Bash terminal. 

If you're starting from scratch locally, also install PostgreSQL and set up your local database.

2. **PostgreSQL database setup (local development)**

For local development, PostgreSQL 15 is installed manually on the local machine. 

To start PostgreSQL manually on Windows (inside Git Bash or similar terminal):

```
"/c/Program Files/PostgreSQL/15/bin/pg_ctl.exe" -D "D:/PostgreSQL/data" start
```

You should see a message confirming the server has started.

> This step is only required for local development. PostgreSQL is not installed on Heroku because Neon is used.

3. **Create environment variables file (`env.py`)**

Ensure all environment variables are properly set in both development and production. The environment variables used are:

-   `SECRET_KEY`: Your Django secret key.
    
-   `DEBUG`: Set to `False` in production.
    
-   `DATABASE_URL`: The full database URL (PostgreSQL).
    
-   `CLOUDINARY_URL`: Your Cloudinary URL for media storage.
    
-   `ALLOWED_HOSTS`: Comma-separated list of allowed hosts.
    
-   `CLIENT_ORIGIN`: The frontend URL allowed for CORS.

> In local development these variables are loaded via `env.py` file:

```python
import os

# Local environment variables for development/testing only
os.environ['CLOUDINARY_URL'] = 'cloudinary://<cloud_name>:<api_key>:<api_secret>@<cloud>'
os.environ.setdefault("SECRET_KEY", "your-local-secret-key")
os.environ['DEBUG'] = 'True'
os.environ['DEV'] = 'True'
os.environ['DATABASE_URL'] = "postgresql://<username>:<password>@<host>:<port>/<database>"
os.environ['ALLOWED_HOSTS'] = "<your-local-frontend-and-backend-urls>"
os.environ['CLIENT_ORIGIN'] = "<frontend_URL>"
```
> In production you must set these directly as Config Vars in Heroku.

**Never commit your `env.py` to GitHub** — make sure it is included in `.gitignore`.

4. **Django project setup**

Start your Django project with:

```
django-admin startproject gamebits .
```

> The `.` at the end ensures the project files are created in the current directory.

5. **Add installed apps in `settings.py`**

In your `settings.py`, add:

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'cloudinary_storage',
    'cloudinary',
    'corsheaders',
    'rest_framework',
    'rest_framework_simplejwt',
    'rest_framework.authtoken',
    'dj_rest_auth',
    'dj_rest_auth.registration',
    'comments',
    'follow',
    'likes',
    'notifications',
    'posts',
    'replies',
    'users',
]
```

6. **Configure Cloudinary (media storage)**

In `settings.py`:

```python
import os

if os.path.exists('env.py'):
    import env

CLOUDINARY_STORAGE = {
    'CLOUDINARY_URL': os.environ.get('CLOUDINARY_URL')
}
MEDIA_URL = '/media/'
DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'
```

7. **Configure Database in `settings.py`**

```python
import dj_database_url

if 'DEV' in os.environ:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'gamebits',
            'USER': '<your_username>',
            'PASSWORD': '<your_password>',
            'HOST': '<your_local_host>',
            'PORT': '<your_local_port>',
        }
    }
else:
    database_url = os.environ.get("DATABASE_URL")
    if isinstance(database_url, bytes):
        database_url = database_url.decode('utf-8')
    if not database_url:
        raise ValueError("DATABASE_URL is not set in the environment.")
    DATABASES = {
        'default': dj_database_url.parse(database_url)
    }
```

In production, you are using a fully hosted PostgreSQL instance via Neon or a similar provider, connected via your `DATABASE_URL`. No Heroku Postgres Add-on is used.

8. **Configure Middleware**

```python
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
```

9. **JWT Authentication (Simple JWT with dj-rest-auth)**

In `settings.py`:

```python
REST_FRAMEWORK  = {
	'DEFAULT_AUTHENTICATION_CLASSES': (
		'rest_framework_simplejwt.authentication.JWTAuthentication',
	),
	'DEFAULT_PERMISSION_CLASSES': (
		'rest_framework.permissions.IsAuthenticated',
	),
	'DEFAULT_PAGINATION_CLASS':
		'rest_framework.pagination.PageNumberPagination',
	'PAGE_SIZE': 10,
	'DEFAULT_RENDERER_CLASSES': (
		'rest_framework.renderers.JSONRenderer',
	)
}

SIMPLE_JWT  = {
	'ACCESS_TOKEN_LIFETIME': timedelta(days=1), # Token expires in 1day
	'REFRESH_TOKEN_LIFETIME': timedelta(days=7), # Refresh token lasts 7 days
	'ROTATE_REFRESH_TOKENS': True,
	'BLACKLIST_AFTER_ROTATION': True,
} 
```
10. **Static Files (using WhiteNoise)**

```python
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'frontend', 'build', 'static'),
]
WHITENOISE_ROOT = BASE_DIR / 'frontend' / 'build'
```
>`WhiteNoise` serves both backend static files and the React build.

11. **Custom User Model**

You use a custom user model:

```
AUTH_USER_MODEL = 'users.UserProfile'
```

You also have custom serializers properly configured in your `users/serializers.py` for registration and profile management. These include:

-   `UserProfileSerializer`
    
-   `UserSerializer`
    

>This is fully configured, no additional deployment configuration is required for these.

## Frontend Deployment

The React frontend is contained inside the `/frontend` directory and is deployed together with the Django backend on Heroku.

### Build the Frontend

You must build the React app before deployment so Django can serve it statically:

```
cd frontend
npm install
npm run build
```
This creates the `frontend/build` directory that Django serves through WhiteNoise.

### Axios Configuration

Your Axios client should point to the deployed backend API URL. For example:

```
import axios from 'axios';

axios.defaults.baseURL = 'https://gamebits-579c6fd85599.herokuapp.com/';
```

### Environment Variables
To avoid hardcoding the backend URL directly into your frontend code, the React app uses an environment variable stored in a `.env` file inside the `/frontend` directory:

```
REACT_APP_API_URL=https://gamebits-579c6fd85599.herokuapp.com
```

In the code, Axios reads this variable:

```
const apiUrl = process.env.REACT_APP_API_URL;

axios.defaults.baseURL = `${apiUrl}/api/`;
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;
```

-   When deploying to Heroku, you can set this environment variable as a Config Var on Heroku just like your backend env variables.
    
-   Locally, make sure to create the `.env` file inside `/frontend` before building the project.

### CORS Configuration

Your Django `settings.py` includes:

```python
if 'CLIENT_ORIGIN' in os.environ:
    CORS_ALLOWED_ORIGINS = [os.environ.get('CLIENT_ORIGIN')]
else:
    CORS_ALLOWED_ORIGINS = [
        'https://gamebits-579c6fd85599.herokuapp.com',
        'http://localhost:3000',
    ]
CORS_ALLOW_CREDENTIALS = True
```

## Deployment to Heroku

1. **Prepare Procfile**

Create a file named `Procfile` in your root directory:

```
web: gunicorn --workers 3 --timeout 60 gamebits.wsgi:application
```

2. **Install Gunicorn & WhiteNoise**

Ensure these are present in your `requirements.txt`:
```
gunicorn
whitenoise
dj-database-url
psycopg2
cloudinary
cloudinary-storage
django-cors-headers
django-environ
django
rest_framework
dj_rest_auth
rest_framework_simplejwt
```

>(You may have additional packages depending on your full `requirements.txt` file.)

3. **Git Push**

Ensure everything is committed and pushed to GitHub.

```
git add .
git commit -m "Prepare for deployment"
git push
```

4. **Create Heroku App**

```
heroku create gamebits
```

5. **Add Heroku Buildpacks**

```
heroku buildpacks:add heroku/python
heroku buildpacks:add heroku/node.js
```

6. **Set Heroku Config Vars**

Set all required environment variables in Heroku dashboard (VERY IMPORTANT):
Set these in **Heroku → Settings → Config Vars**.
-   `SECRET_KEY`
-   `DEBUG` = `False`
-   `DATABASE_URL`
-   `CLOUDINARY_URL`
-   `ALLOWED_HOSTS`
-   `CLIENT_ORIGIN`

7. **Push to Heroku**

```
git push heroku main
```

8. **Run Migrations & Collectstatic**

```
heroku run python manage.py migrate
heroku run python manage.py collectstatic --noinput
```

**Deployment complete.** Both backend and frontend are fully deployed and served from the same Heroku instance using WhiteNoise to serve static files.

## **Important Final Notes**

- You do not need `SITE_ID` because you're not using Django Sites Framework.
    
- You do not need to modify your serializers — they are fully working as-is.
    
- Your `settings.py` file is already correctly structured — I have adjusted the deployment instructions to perfectly match your exact setup.
    
- WhiteNoise is fully used for serving your React frontend build and static files.
    
- PostgreSQL is fully handled through your Neon-hosted database URL.

# Credits

### Content

This project was originally inspired by the Code Institute walkthrough project **Moments**, but has been significantly adapted to fit the concept and features of **GameBits**. Many frontend files were initially taken from the Moments project as a base, but have since been customized, extended, and restructured to support the specific functionalities, user flows, and design choices implemented in this project.

As mentioned earlier, the GameBits logo was created entirely by myself using Krita.

All images used throughout the README file are stored within the Media folder of the project repository for consistency and documentation purposes. However, in order to ensure that the images would display reliably when rendering the README on GitHub and other platforms (which sometimes have issues accessing relative local images), the images were uploaded and referenced through ImgBB image hosting service. This approach ensures proper rendering of the README file across all devices and viewers.

Many additional features are also planned for future updates, including a complete Notifications System, an Experience Leveling System, and a Leaderboard Functionality. These features are intended to further enhance user engagement and provide a more interactive experience, potentially leading to a full public deployment of GameBits as an entertainment platform for all users.

# Acknowledgments

I have thoroughly enjoyed developing not only this project, but all the projects completed throughout the course. While I initially found React to present a challenging learning curve, with time, dedication, and continuous practice, I feel that I have built a strong foundation in developing full-stack applications that utilize an advanced frontend framework like React alongside a Django REST Framework (DRF) backend API.

Thanks to the knowledge and skills acquired during the Code Institute Full Stack Software Development program, I now feel fully confident in my ability to create complete, fully functional web applications that combine both frontend and backend technologies effectively. I am extremely proud to say that GameBits is now fully operational and performs exactly as originally envisioned, successfully delivering the core functionalities and user experience I had planned.

I would like to sincerely thank my mentor Marcel for generously offering their time, guidance, and valuable insights throughout the development process, helping me overcome some of the most challenging technical issues. My thanks also go to the Code Institute Tutor Support team, whose assistance was instrumental in helping me resolve one of the most critical deployment issues affecting the backend. Additionally, their guidance after my previous project submission allowed me to identify areas that required improvement, ultimately enabling me to refine the project and reach its fully functional state presented here.

I am deeply grateful to my family and friends for their continuous support, encouragement, and constructive feedback throughout the entire development journey. Their input played a key role in shaping the design and concept of GameBits, as well as keeping me motivated to push through difficult stages of the project.

This has been an incredible learning experience, and I am very excited to see where this journey will lead me next. I look forward to continuing to improve and expand GameBits even further, and hopefully, to one day release the platform publicly for others to enjoy.

Thank you so much for a fantastic experience [Code Institute](https://codeinstitute.net/de/) !

Biagiarelli Adriano, 2025.

[Back to top](https://github.com/BiagiarelliAdriano/GameBits).
