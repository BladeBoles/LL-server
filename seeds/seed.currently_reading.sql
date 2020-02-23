INSERT INTO profiles (user_login, user_password, weekly_hours, progress, days_left)
VALUES
(
    'fred',
    'password1',
    10,
    2,
    3
),
(
    'user2',
    'password2',
    5,
    0.3,
    6
);

INSERT INTO currently_reading (media_name, current_progress, finished, media_type, date_started, date_finished, author, media_url, notes, library_owner)
VALUES
(
    'Moby Dick', 
    360, 
    false,
    'Book', 
    '2020-02-03', 
    null, 
    'Herman Melville', 
    'https://en.wikipedia.org/wiki/Moby-Dick', 
    'A real whale of a tale.', 1
),
(
    'Little Women',
    180,
    false,
    'Audiobook',
    '2019-10-31',
    null,
    'Louisa May Alcott',
    'https://en.wikipedia.org/wiki/Little-Women',
    'Was the movie better than the book?',
    2
),
(
    'How Much Sleep Do You Need?',
    15,
    false,
    'Article',
    '2020-02-09',
    null,
    'Willie Nelson',
    'https://www.groovytunes.com/sleep',
    'Six hours isn''t enough for anyone!',
    2
),
(
    'Whale Mating Sounds, vol 5',
    900,
    true,
    'other',
    '2020-02-11',
    '2020-02-12',
    'Humpback Harry',
    'https://www.savethewhales.com',
    'My favorite part: "oooOOOOOouuuaaauuoOOOu eeeeiiii" ',
    1
)
;