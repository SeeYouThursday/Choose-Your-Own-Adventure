let continuingStory = [];
const getStoryId = () => {
  const id = document.getElementById('save-story');
  let currentId = id.getAttribute('data-id');
  console.log(id);
  return currentId;
};

const getStory = async () => {
  try {
    const id = document.getElementById('save-story').getAttribute('data-id');
    console.log(id);
    const response = await fetch(`${window.location.origin}/api/story/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log('this data', data);
      if (data.story_line !== null) {
        console.log('passed if statement');
        //TODO: Redirect to story page
        console.log(data.story_line);
        // document.location.replace(`/storyline/${id}`);
        continuingStory = [data.story_line];
        console.log(continuingStory);
      } else {
        console.log('failed if statement');
        const updateResponse = await fetch(`/api/storyline/update/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            story_id: 1,
            story_line: `Let's get started!`,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (updateResponse.ok) {
          const updateData = await updateResponse.json();
          console.log('updated', updateData);
        } else {
          console.log('Error:', updateResponse.status);
        }
        console.log('updated', updateResponse);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const savedStoryHandler = async (event) => {
  //PUT req
  event.preventDefault();
  try {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/storyline/update/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        story_line: continuingStory,
        story_id: parseInt(currentId),
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    }
  } catch (err) {
    console.log(err);
  }
};

// TODO: WIP logic for next choice
nextChoiceHandler = async (event) => {
  event.preventDefault();
  const id = document.getElementById('save-story');
  let currentId = id.getAttribute('data-id');
  console.log(id);
  try {
    const response = await fetch(`/api/story/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log('this data', data);
      if (data.story_line !== null) {
        console.log('passed if statement');
      }
    }
    id.setAttribute('data-id', ++currentId);
  } catch (error) {
    console.log(error);
  }
};

getStory();
// Event Listeners

//Waiting until the user clicks 'Save' to save the story
document
  .querySelector('#save-story')
  .addEventListener('submit', savedStoryHandler);

document.querySelectorAll('.next-choice').forEach((button) => {
  button.addEventListener('click', nextChoiceHandler);
});
