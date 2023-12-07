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
        const data = await response.json({ message: 'Adventure started!' });
        console.log(data);

        // const div = document.getElementById('story-list');
        ////fetch to get new storyline_id
        const ihatemylife = await fetch(`api/storyline/`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        const dataHere = await ihatemylife.json();
        console.log(dataHere[0].id);

        document.location.replace(`storyline/${dataHere[0].id}`);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

// Event Listeners
document
  .querySelector('#save-begin')
  .addEventListener('click', startNewAdventureHandler);
