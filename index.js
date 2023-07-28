const data = [
  {
    id: 1,
    question: 'Which of these fish is actually a fish?',
    answers: [
      { answer: 'swordfish', isCorrect: true },
      { answer: 'jellyfish', isCorrect: false },
      { answer: 'starfish', isCorrect: false },
      { answer: 'crayfish', isCorrect: false },
    ],
  },
  {
    id: 2,
    question: 'A flutter is a group of: ',
    answers: [
      { answer: 'bees', isCorrect: false },
      { answer: 'penguins', isCorrect: false },
      { answer: 'butterflies', isCorrect: true },
      { answer: 'camels', isCorrect: false },
    ],
  },
  {
    id: 3,
    question: 'Which of these are stands for HTML: ',
    answers: [
      { answer: 'HOW TO MAKE LUMPIA', isCorrect: false },
      { answer: 'HYPERTEXT MARK-UP LANGUAGE', isCorrect: true },
      { answer: 'HOW TO MAKE LAKE', isCorrect: false },
      { answer: 'HYPERTEXT MAKEUP', isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector('.game');
const result = document.querySelector('.result');
const question = document.querySelector('.question');
const answersContainer = document.querySelector('.answers');
const submit = document.querySelector('.submit');
const play = document.querySelector('.play');

let qIndex = 0;
let correctAnswer = 0;
let wrongAnswer = 0;
let totalScore = 0;
let selectedAns;

const showResult = () => {
  result.style.display = 'block';
  gameScreen.style.display = 'none';

  result.querySelector(
    '.correct'
  ).textContent = `Correct Answer: ${correctAnswer}`;
  result.querySelector('.wrong').textContent = `Wrong Answers: ${wrongAnswer}`;
  result.querySelector('.score').textContent = `Score: ${correctAnswer * 10}`;
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAns = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) => `
             <div class="answer">
              <input type="radio" name="ans1" id="${index}" value="${item.isCorrect}" />
              <label for="${index}">${item.answer}</label>
            </div>
   `
    )
    .join('');

  selectedAnswers();
};

const selectedAnswers = () => {
  answersContainer.querySelectorAll('input').forEach((el) => {
    el.addEventListener('click', (e) => {
      selectedAns = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener('click', () => {
    if (selectedAns !== null) {
      selectedAns === 'true' ? correctAnswer++ : wrongAnswer++;
      qIndex++;
      showQuestion(qIndex);
    } else {
      alert('Please Select An Answers...');
    }
  });
};

showQuestion(qIndex);
submitAnswer();
