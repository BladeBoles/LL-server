INSERT INTO profiles (firstname, lastname, email, user_login, user_password)
VALUES
(
    'Fred',
    'Smith',
    'fred.smith@aol.com',
    'fred',
    'password1'
),
(
    'Billy',
    'TheBlueRanger',
    'rueblanger@gmail.com',
    'user2',
    'password2'
);

INSERT INTO currently_reading (media_name, current_progress, finished, media_type, date_started, date_finished, author, media_url, notes, library_owner)
VALUES
(
    'Moby Dick', 360, false, 'Book', '02-03-20', null, 'Herman Melville', 'https://en.wikipedia.org/wiki/Moby-Dick', 'A real whale of a tale.', 1
),
(
    'Little Women',
    180,
    false,
    'Audiobook',
    '10-31-19',
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
    '02-09-20',
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
    '02-11-20',
    '02-12-20',
    'Humpback Harry',
    'https://www.savethewhales.com',
    'My favorite part: "oooOOOOOouuuaaauuoOOOu eeeeiiii" ',
    1
)
;