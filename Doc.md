# Documentation

## Database

### DB Diagram

### Queries

## API endpoints

BASE: /api/
User can only delete his own project

- [ ] User
    GET /user/:id (get user profile)
    PUT /user/:id (update user profile)
- [ ] ME

    GET /me (get authenticated user profile)
    UPDATE /me (update user profile)
    DELETE /me (DELETE the authenticated profile)

- [ ] Project
  - [ ]

- [ ] Tasks

- [x] Auth
  - [x] POST /auth/login
  - [x] POST /auth/signup

## Building and Running

## Running PostgreSQL image

## Logs

- [x] User Authentication
  - [x] Signup
  - [x] Login
  - [ ] Reset Password (3 steps)
  - [ ] Forget Password
  - [ ] Verify
  - [ ] Update/change password
- [ ] Projects

## User

- [ ] Upload
  - [ ] Upload a profile picture (use sharp to crop image to circular width)
  - [ ] Upload an attatchment to individual task (audio, img, comments)
  - [ ] Upload a cover and avatar to project
- [ ] Can
  - [ ] Add/remove Books to favirote
  - [ ] Update status (READ, TO READ, READING)
  - [ ] Update Progress (in_page) # use hooks for percentage_progress
  - [ ] Follow Author
  - [ ] Follow Other Readers/unFollow
  - [x] Make Shelfs and add Books to them
  - [ ] Make Request to join a group (if he's a group owner, he can see list of Request)
  - [ ] like review, share post

- [ ] Comments

- [ ] Notifications

- [ ] Books:

## Ideas

- invite a collab with you on a project

- Book tracking web application (for me)
