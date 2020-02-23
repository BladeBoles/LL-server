function makeCurrentlyReadingArray () {
  return [
    {
      "media_name": "Moby Dick",
      "current_progress": 360,
      "finished": false,
      "media_type": "Book",
      "date_started": "2020-05-08",
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
      "date_started": "2019-03-07",
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
      "date_started": "2005-09-30",
      "date_finished": "2006-01-12",
      "author": "Willie Nelson",
      "url": "https://www.groovytunes.com/sleep",
      "notes": "Six hours isn't enough for anyone!"
    }
  ];
}

module.exports = { makeCurrentlyReadingArray };