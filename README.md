# Placeholder

[**Live Demo**](https://shutupandwrite247.firebaseapp.com/)

## TODO

* [x] Now
    * [x] Form
* [ ] Today
    * [ ] Grid view of past form data
    * [ ] Expando to fetch comments
* [ ] Week
    * [ ] Visualizations
* [ ] Group
    * [ ] Grid view of most recent form data for all group members
        * [ ] MVP: All online users in same group
    * [ ] Expando to fetch comments
* [ ] Visual enhancements
    * [x] Drag and drop for background image
    * [ ] Store most recent picture per user in Firestore as blob
* [ ] CRUD
    * [ ] Smart saving
        * Always be aware of most recent entry
        * If most recent entry `created_at` is before `state.nextCutoff`, update instead of create
    * [ ] Fetching posts
        * Posts should belong to a user and a session
        * Supported operations:
            * Fetch all posts from a user
            * Fetch most recent post from a user (for smart saving)
            * Fetch all posts from a session
        * Index on: user, session
        * MVP: User operations only