function makeCurrentlyReadingArray () {
  return [
    {
      "media_name": "Moby Dick",
      "current_progress": 360,
      "finished": false,
      "media_type": "Book",
      "date_started": "02-03-20",
      "date_finished": "",
      "author": "Herman Melville",
      "url": "https://en.wikipedia.org/wiki/Moby-Dick",
      "notes": "A real whale of a tale."
    },
    {
      "media_name": "Little Women",
      "current_progress": 180,
      "finished": false,
      "media_type": "Audiobook",
      "date_started": "10-31-19",
      "date_finished": "",
      "author": "Louisa May Alcott",
      "url": "https://en.wikipedia.org/wiki/Little-Women",
      "notes": "Was the movie better than the book?"
    },
    {
      "media_name": "How Much Sleep Do You Need?",
      "current_progress": 15,
      "finished": false,
      "media_type": "Article",
      "date_started": "02-09-20",
      "date_finished": "",
      "author": "Willie Nelson",
      "url": "https://www.groovytunes.com/sleep",
      "notes": "Six hours isn't enough for anyone!"
    }
  ];
}

module.exports = { makeCurrentlyReadingArray };