let continuingStory = [];

const getStory = async () => {
  try {
    const id = document.getElementById('save-story').getAttribute('data-id');
    console.log(id);
    const response = await fetch(
      `${window.location.origin}/api/storyline/${id}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );
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

getStory();
// Event Listeners

//Waiting until the user clicks 'Save' to save the story
document
  .querySelector('#save-story')
  .addEventListener('click', savedStoryHandler);
