//get initial story_id from data-story-id
const story_meta = document.getElementById('save-story');
// initial story_id below
let story_id = story_meta.getAttribute('data-story-id');

//update story_id
const updateStoryId = () => {
  console.log(story_id);
  if (story_id === 10) {
    return;
  }
  let updatedStoryId = ++story_id;
  return updatedStoryId.toString();
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
  const choiceOne = document.querySelector(
    'input[name="option-outlined1"]:checked'
  );
  const choiceTwo = document.querySelector(
    'input[name="option-outlined2"]:checked'
  );
  if (choiceOne) {
    continuingStory.push(choiceOne.value);
    console.log(`choice1 ${continuingStory}`);
    return continuingStory;
  } else if (choiceTwo) {
    continuingStory.push(choiceTwo.value);
    console.log(`choice1 ${continuingStory}`);
    return continuingStory;
  } else {
    console.log("we've got a problem here");
  }

  //Update (PUT) route
  const updatedStory = continuingStory.map((story) => story);
  console.log(147, updatedStory);
};

// let storyIdToReturn = updateStoryId();
const updateDb = async () => {
  try {
    let storyIdToReturn = updateStoryId();
    console.log(storyIdToReturn, 155);
    let id = document
      .getElementById('story-choice')
      .getAttribute('data-user-id');
    console.log(id);

    const updated = await fetch(`/api/storyline/update/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        story_id: storyIdToReturn.toString(),
        story_line: updatedStoryBtns.toString(),
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
const btnSubmitHandler = (event) => {
  event.preventDefault();
  event.stopPropagation();
  const answer = event.target.value;
  console.log(`this answer ${answer}`);
  continuingStory.push(answer);
  updatedStoryBtns = continuingStory.map((story) => story);
  console.log('bllooop', updatedStoryBtns);
  return updatedStoryBtns;
};

const verifyUpdate = async () => {
  try {
    const response = await fetch(`/api/storyline/`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const handleBtnandDb = async (event) => {
  btnSubmitHandler(event);
  // console.log(updateDBpls, 1122332);
  await updateDb();
  await verifyUpdate();
};
const pingPongNextPage = () => {
  const button = document.getElementById('continue');
  const pingPong = button.dataset.pingPong === 'false';
  const storylineId = window.location.pathname.split('/');
  const pingpongLoc = storylineId[storylineId.length - 1];

  const baseUrl = window.location.origin;
  const nextPageUrl = pingPong
    ? `${baseUrl}/storyline/pingpong/${pingpongLoc}`
    : `${baseUrl}/storyline/${pingpongLoc}`;

  window.location.replace(nextPageUrl);
};
//Event Listeners
// document
//   .getElementById('story-choice')
//   .addEventListener('submit', btnSubmitHandler);

//btns submit form with their value, but do not reload page
document.getElementById('continue').addEventListener('click', async () => {
  // await dbUpdate();
  // await verifyUpdate();
  // window.location.replace(`/storyline/`);
  pingPongNextPage();
});

//Save and Exit Function
story_meta.addEventListener('click', async () => {
  try {
    await updateDb();
    await verifyUpdate();
    window.location.replace(`/dashboard`);
  } catch (error) {
    console.log(error);
  }
});

document
  .querySelectorAll('.next-choice')
  .forEach((element) => element.addEventListener('click', handleBtnandDb));
//Continue goes to next page, clicking a btn submits the form with the value.
