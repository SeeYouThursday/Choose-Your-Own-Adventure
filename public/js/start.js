const startNewAdventureHandler = async (event) => {
  event.preventDefault();
  try {
    const title = document.getElementById('story-title').value.trim();
    const storyline = 'Begin adventure!';

    console.log(title, storyline);
    if (title && storyline) {
      const response = await fetch('api/storyline/start', {
        method: 'POST',
        body: JSON.stringify({ title, storyline }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(title, storyline);
      if (response.ok) {
        response.status(201).json({ message: 'Adventure started!' });
        //TODO: Redirect to the story handling hb pages
        // document.location.replace('/dashboard');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

// Event Listeners
document
  .querySelector('#start-story')
  .addEventListener('submit', startNewAdventureHandler);
