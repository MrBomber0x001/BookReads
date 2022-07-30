//

/**
 * UserBooks_Status 
 * progress_book: {
        type: DataTypes.INTEGER,
    },
    {
    hooks: {
        beforeCreate: (book) => {
            const progress = (book.progress_book / book.totalPages) * 100;
            book.progress_book = progress;
        }
    }
 * | UserId | BookId  | Status  | Progress | 
 * | 1      | 1       | "reading" | 10%    | 
 * | 1      | 2       | "to-read" | -      | 
 * | 2      | 1       | "will-read" | -    |
 * 
 */

/**
 * Books
 * | Book_name | author_Id | description | totalPages | genre_id | 
 * | "Alice"   | 1         | "Bla bla "  | 1011       | 2        |
 */

/**
 * Books_Fav
 * | UserId | BookId | DateFaviored | 
 * | 1      | 2      | "2022-12-12" | 
 */

/**
 * Saved_Posts
 * 
 */

/**
 * Tasks
 * | task_name | projectId | 
 */

/**
 * Project
 * | project_name | userId | 
 */

/**
 * Shelf 
 * | shelf_id | Shelf_name | book_id | user_id 
 * | 1        | literacy | 1 | 1
 * | 2        | Programming | 1 | 1
 * | 3        | Programming | 3 | 2
 * 
 */