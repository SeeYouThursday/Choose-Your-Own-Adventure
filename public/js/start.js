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
        const div = document.getElementById('story-list');
        ////fetch to get new storyline_id
        
        // if (div.getElementsByTagName('*').length > 0) {
        //   function getMaxId(elements) {
        //     return Math.max(
        //       ...elements
        //         .map((el) => el.id)
        //         .filter((id) => !isNaN(Number(id)))
        //         .map(Number)
        //     );
        //   }

          // const div = document.getElementById('story-list');
      //     const allElementsInDiv = [...div.getElementsByTagName('*')];

      //     // If there are no elements, redirect to '/storyline/1'
      //     if (!allElementsInDiv.length) {
      //       // document.location.replace('/storyline/1'); //doesn't always go to one
      //     } else {
      //       let maxId = getMaxId(allElementsInDiv);
      //       console.log(maxId);
      //       if () {
      //         document.location.reload();
      //         document.location.replace(`/storyline/${maxId++}`);
      //       } else if (maxId !== -Infinity) {
      //         document.location.reload();
      //         document.location.replace(`/storyline/${maxId}`);
      //       } else {
      //         console.log('uh-oh error');
      //       }
      //     }
      //   }
      // } else {
      // }
    // }
  } catch (error) {
    console.log(error);
  }
};

// Event Listeners
document
  .querySelector('#save-begin')
  .addEventListener('click', startNewAdventureHandler);
