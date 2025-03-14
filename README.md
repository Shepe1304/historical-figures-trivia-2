# Web Development Project 3 - _Historical Figures Trivia 2_

Submitted by: **Quynh Giang Ho**

This web app: **A flashcards app that helps you learn trivia about some of the most famous historical figures on the planet, now with partial score, correct streak tracking, longest streak tracking, and difficulty count for guessing mode, as well as a shuffle button for you to shuffle the deck as many times as you want. Try it out and have some fun!!!**

Time spent: **2** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess in a box before seeing the flipside of the card**
- [x] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [x] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [x] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [x] A shuffle button is used to randomize the order of the cards
- [x] A user's answer may be counted as correct even when it is slightly different from the target answer
- [x] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

The following **additional** features are implemented:

- [x] Making the website fully responsive
- [x] Making guessing mode separate from the normal flashcards mode
- [x] Disabling buttons like Previous and Shuffle in guessing mode to make the guessing more fair and challenging

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src="./src/assets/images/trivia2.gif" title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->

GIF created with [Chrome Capture - screenshot & GIF](https://chromewebstore.google.com/detail/chrome-capture-screenshot/ggaabchcecdbomdcnbahdfddfikjmphe)

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

During the app's development, these are a few challenges I encountered and resolved:

- Accurately managing current card after each shuffle
- Fairly evaluate partial scores (for example, I did not just use answer.includes(guess) (suppose that answer and guess are both string variables), because an answer like "George Washington" includes "a", but the response "a" is not good enough for partial score!)
- Making guessing mode and normal flashcards mode separate (users can turn enter or exit guessing mode when they want)
- Disabling "Previous" button for guessing mode to make sure users can not just go back to previous questions and answer 1 question specifically over and over again for scores

## License

    Copyright 2025 Quynh Giang Ho (Shepe1304)

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
