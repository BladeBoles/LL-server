
function makeUserArray() {
  return [
    {
      user_login: 'fred', 
      user_password: 'password', 
      weekly_hours: 10, 
      progress: 180, 
      days_left: 3
    },
    {
      user_login: 'billy', 
      user_password: 'password2', 
      weekly_hours: 2, 
      progress: 1, 
      days_left: 1
    }
  ];
}

function makeLibraryArray() {
  return [
    {
      id: 1,
      media_name: 'Frankenstein', 
      current_progress: 15, 
      finished: false, 
      media_type: "book", 
      date_started: "1999-05-22T00:00:00.000Z", 
      date_finished: null, 
      author: 'Mary Shelley', 
      media_url: '', 
      notes: 'Good ole book',
      library_owner: null
    },

    {
      id: 2,
      media_name: 'Frankenstan', 
      current_progress: 115, 
      finished: false, 
      media_type: "book", 
      date_started: "2001-01-22T00:00:00.000Z", 
      date_finished: null, 
      author: 'Sary Mhelley', 
      media_url: '', 
      notes: 'Good ole book',
      library_owner: null
    }
  ];
}

module.exports = {
  makeUserArray,
  makeLibraryArray
};