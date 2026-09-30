# Horizon Buddy - Student Helper Chatbot

A rule-based chatbot that answers common student questions using information from the Horizon Campus Student Handbook.

## Features
- Answers questions about exams, GPA and grading, fees and refunds, library, ID card and contacts
- Keyword matching with a scoring system to pick the best answer
- Suggested question buttons under the chat box
- Chat interface with separate user and bot message bubbles
- Runs in any browser with no installation

## Technologies
- HTML
- CSS
- JavaScript

## How it works
1. The user's message is converted to lowercase, punctuation is removed, and it is split into words.
2. Each topic in the `answers` list is scored by how many of its keywords appear in the message.
3. The topic with the highest score gives the reply. If nothing matches, a fallback message is shown.

## How to run
Download the files and open `index.html` in a browser.
To run on localhost: `python -m http.server 8080`, then open http://localhost:8080

## Live demo
(add your GitHub Pages link here)

## Data source
Horizon Campus Student Handbook (updated November 2025)

## Author
Ayesha Kodithuwakku
