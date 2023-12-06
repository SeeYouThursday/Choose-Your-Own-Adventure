// const continuingStory = [];

// const updateStoryVar = () => {
//   const story = document.querySelector('#save-story').getAttribute('data-id');
//   continuingStory.push(story);
//   return continuingStory;
// };

// const savedStoryHandler = async (event) => {
//   event.preventDefault();

//   try {
//     const id = event.target.getAttribute('data-choice-set-id');
//     const storyId = event.target.getAttribute('data-story-id');
//     const response = await fetch(`/api/storyline/update/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify({
//         story_line: continuingStory,
//         story_id: storyId,
//         title: document.querySelector('#save-story').getAttribute('data-title'),
//       }),
//       headers: { 'Content-Type': 'application/json' },
//     });
//     response.json({ message: 'Story saved!' });
//     if (response.ok) {
//       document.location.replace('/dashboard');
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// const btnHandler = async (event) => {
//   event.preventDefault();
//   event.stopPropagation();
//   const btns = document.querySelectorAll('.next-choice');
//   btns.forEach((btn) => {
//     btn.setAttribute('disabled', true);
//   });
// };

// const nextChoiceHandler = async (event) => {
//   event.preventDefault();
//   event.stopPropagation();

//   let storyId = event.target.getAttribute('data-story-choice-id');
//   let updatedStoryId = parseInt(storyId) + 1;

//   const storyChoice = event.target.value;
//   if (storyChoice) {
//     continuingStory.push(storyChoice);
//   } else {
//     console.log('no choice');
//   }

//   try {
//     const id = event.target.getAttribute('data-choice-set-id');

//     const response = await fetch(`/api/storyline/update/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify({
//         story_line: continuingStory,
//         story_id: updatedStoryId,
//         title: document.querySelector('#save-story').getAttribute('data-title'),
//       }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       console.log({ message: 'Story saved!' });
//       document.location.replace('/dashboard');
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// const updateStory = async (selectedOption) => {
//   continuingStory.push(selectedOption);
//   return continuingStory;
// };

// document.addEventListener('DOMContentLoaded', (event) => {
//   document
//     .getElementById('continue')
//     .addEventListener('click', async function (event) {
//       event.preventDefault();
//       const selectedOptionElement = document.querySelector(
//         'input[name="options-outlined"]:checked'
//       );
//       if (selectedOptionElement) {
//         const selectedOption = selectedOptionElement.value;
//         updateStory(selectedOption);
//       } else {
//         console.log('No option selected');
//       }
//     });
// });

// document
//   .querySelector('#story-choice')
//   .addEventListener('submit', nextChoiceHandler);

// document.querySelectorAll('.next-choice').forEach((choice) => {
//   choice.addEventListener('click', btnHandler);
// });

//get initial story_id from data-story-id
const story_meta = document.getElementById('save-story');
// initial story_id below
let story_id = story_meta.getAttribute('data-story-id');

//update story_id
const updateStoryId = () => {
  console.log(story_id);
  let updatedStoryId = story_id++;
  return updatedStoryId;
};

// console.log('updated', updateStoryId()); //returns incremented story_id

//will hold the story_line
const continuingStory = [];
//get initial story_line from data-id
let storyLine = story_meta.getAttribute('data-id');
continuingStory.push(storyLine);
console.log(`initial update ${continuingStory}`);
//update story_line

const storyToStore = () => {
  const choiceOne = document.querySelector('input[name="option-outlined1"]');
  const choiceTwo = document.querySelector('input[name="option-outlined2"]');
  if (choiceOne) {
    continuingStory.push(choiceOne.value);
    console.log(`choice1 ${continuingStory}`);
    return continuingStory;
  } else if (document.querySelector('input[name="option-outlined2"]:checked')) {
    continuingStory.push(choiceTwo.value);
    console.log(`choice1 ${continuingStory}`);
    return continuingStory;
  } else {
    console.log("we've got a problem here");
  }

  //Update (PUT) route

  // continuingStory.push(storyToStore);

  // return continuingStory;
};

const storyIdToReturn = updateStoryId();
const updateDb = async (event) => {
  event.preventDefault();
  event.stopPropagation();
  try {
    let id = event.target.getAttribute('data-story-id');
    console.log(id);

    const updated = await fetch(`/api/storyline/update/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        story_line: storyToStore(),
        story_id: storyIdToReturn,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await updated.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const choiceHandler = async (event) => {
  try {
    storyToStore();
    await updateDb(event);
    // window.location.reload();
  } catch (error) {
    console.error(error);
  }
};
//Event Listeners
document
  .getElementById('story-choice')
  .addEventListener('submit', choiceHandler);
