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

        function getMaxId(elements) {
          return Math.max(
            ...elements
              .map((elements) => elements.id)
              .filter((id) => !isNaN(Number(id)))
              .map(Number)
          );
        }

        const div = document.getElementById('story-list');
        const allElementsInDiv = [...div.getElementsByTagName('*')];

        // If there are no elements, redirect to '/storyline/1'
        if (!allElementsInDiv.length) {
          document.location.replace('/storyline/1');
        } else {
          let maxId = getMaxId(allElementsInDiv);
          console.log(maxId);
          if (maxId === 0) {
            document.location.replace(`/storyline/${maxId ++ }`);
          } else if (maxId !== -Infinity) {
            document.location.replace(`/storyline/${maxId}`);
          } else {
            console.log('uh-oh error');
          }
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
