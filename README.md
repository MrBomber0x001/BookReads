# BookReads

:star: BookReads is a complete solution for book worms from a social network for readers and authors to a marketplace platform for stores bundled into single place
just for readers and to readers.

:one: The main idea was to make a centralized place which can connect readers which each other, connecting them with stores to simplify the buying and selling process instead of the regular old way of contacting each store to find specific book, or to actually head over to a store which can be relative distant from the user.

:two: The second idea was to make a centralized place for readers to be able to sell their **used** old books to another users without the need to meet them on place, just with a simple click the user can assign a delivery man to deliver his shipment to the buyer without any effort.

## Documentation and Project Structure

Head over to [Documentation.md](./Doc/README.md) For A detailed Documentation for The Database, API endpoints, Building and Running, etc.

## DB Schema Diagram

![Schema Diagram](./schema.png)

## API endpoints

## Building and Running

## Demo and Features

**Chatting**

**Selling and buying**

**Reviewing**

**Authentication (Login/Signup)**

**User profile and notifications**

**Club**

**Buying From stores**

**Selling your used books**

## Running Tests

## Logs

- [x] User Authentication
  - [x] Signup
  - [x] Login
  - [x] Reset Password (3 steps)
  - [x] Verify
  - [x] Update/change password

- [ ] Upload
  - [ ] Upload a profile picture (use sharp to crop image to circular width)
- [ ] Can
  - [x] Update status (READ, TO READ, READING)
  - [ ] Update Progress (in_page) # use hooks for percentage_progress
  - [ ] Follow/Unfollow author
  - [ ] Follow/unFollow (Friends) Other Readers
  - [x] Make Shelfs and add Books to them
  - [ ] Make Request to join a group (if he's a group owner, he can see list of Request) [group owner make(generate) an invitation link users can use to join club ]
    - readers can send join request to the club
    - club owner get notified [...] need to join your club <accept, decline>
    - can club private (member), public (public)
    - delete reader from club
    - club has a category (History, science)
    - if the user created more than 3 clubs, he should pay for more [premium membership]
  - [ ] like review, share post

- [ ] Comments

- [ ] Notifications
