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
        const data = response.json({ message: 'Adventure started!' });
        console.log(data);

        //??get id of last element in story-list and add 1 to get to new storyline
        function getMaxId(elements) {
          return Math.max(
            ...elements
              .map((el) => el.id)
              .filter((id) => !isNaN(Number(id)))
              .map(Number)
          );
        }

        const div = document.getElementById('story-list');
        const allElementsInDiv = [...div.getElementsByTagName('*')];
        const maxId = getMaxId(allElementsInDiv);

        if (maxId !== -Infinity) {
          document.location.replace(`/storyline/${maxId}`);
        }
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
