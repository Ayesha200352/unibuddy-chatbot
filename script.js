// ===== Data (from Horizon Campus Student Handbook) =====
const answers = [
  {
    keys: ["hi", "hello", "hey", "ayubowan", "kohomada"],
    reply: "Hi! I'm Horizon Buddy. Ask me about exams, GPA, fees, library, ID card or contacts."
  },
  {
    keys: ["about", "campus", "horizon", "malabe", "kandy", "faculties"],
    reply: "Horizon Campus (HCBT) is in Malabe, with a regional centre in Kandy. It has seven faculties: Law, Management, IT, Education, Science, Technology and Engineering, and Nursing."
  },
  {
    keys: ["hall", "admission", "late", "bring", "rules"],
    reply: "In the exam hall:\nBring your exam admission card, student record book and campus ID card.\nNo candidate is admitted after 30 minutes from the start of the exam."
  },
  {
    keys: ["timetable", "schedule", "dates"],
    reply: "Exam timetables are not in the handbook. Please check with your faculty's Programme Manager / Academic Coordinator."
  },
  {
    keys: ["exam", "exams", "eligible", "attendance", "attend"],
    reply: "To sit the end-semester exam you must:\n- be registered for the programme\n- attend at least 80% of the classes of each course unit\n- have paid all fees and dues\nIf you fail to keep 80% attendance in a subject, you have to sit the repeat exam."
  },
  {
    keys: ["medical", "sick", "ill", "absent", "absence"],
    reply: "If you cannot sit an exam for medical reasons, report to the campus medical officer at least half an hour before the exam starts. Otherwise submit a valid medical certificate to the Dean of your faculty as soon as possible.\nGovernment hospital certificates are accepted. Private hospital or Consultant certificates only in exceptional cases. Certificates from individual medical officers are not accepted."
  },
  {
    keys: ["gpa", "cgpa", "fgpa", "calculate"],
    reply: "GPA = total of (grade point value x credits) divided by total credits, computed to 2 decimal places.\nThe final CGPA counts all course units you registered for."
  },
  {
    keys: ["grade", "grades", "marks", "scale", "points"],
    reply: "Grade point values:\nA+ / A = 4.00\nA- = 3.70\nB+ = 3.30\nB = 3.00\nB- = 2.70\nC+ = 2.30\nC = 2.00\nC- = 1.70 (minimum pass)\nD+ = 1.30\nD = 1.00\nE = 0.00"
  },
  {
    keys: ["pass", "fail", "degree", "class", "classes", "first"],
    reply: "To get the degree you need at least C- in every course and a minimum FGPA of 2.00, within 8 academic years.\nClasses (finish within 4 years):\nFirst Class: FGPA 3.70+\nSecond Upper: 3.30+\nSecond Lower: 3.00+\nOtherwise: Pass."
  },
  {
    keys: ["refund", "withdraw", "discontinue"],
    reply: "Refund policy:\n- Discontinue within 7 days of the first commencement date: 50% of the course fee refunded.\n- After 8 days or more: no refund.\n- Registration, lab and campus fees are not refundable.\nYou must inform the Registrar in writing through your Head of Department / Dean."
  },
  {
    keys: ["fee", "fees", "payment", "pay", "tuition"],
    reply: "Fees follow Horizon Campus policies and must be paid by the specified due dates. Fee amounts are not in the handbook, so please ask the finance/registrar office. Unpaid fees can also stop you from sitting exams."
  },
  {
    keys: ["certificate", "transcript", "letter", "copy", "verification"],
    reply: "Undergraduate fees:\nDegree certificate (original): free\nDegree certificate copy: Rs. 10,000\nTranscript (original): free\nTranscript copy: Rs. 5,000\nSemester result sheet: Rs. 1,000\nProvisional result sheet: Rs. 2,000\nDegree completion letter: Rs. 1,000\nVerification (local): Rs. 2,000"
  },
  {
    keys: ["id", "identity", "card", "lost"],
    reply: "Every student gets a Student Identity Card at first registration. Keep it with you at all times. Re-issuing a lost ID card costs Rs. 1,500."
  },
  {
    keys: ["library", "open", "opening", "hours"],
    reply: "Library hours: Monday to Sunday, 8:00 AM to 4:30 PM.\nClosed on Poya days, public holidays and university holidays.\nThere are more than 10 computers with internet, and you can use your own laptop inside."
  },
  {
    keys: ["borrow", "book", "books", "loan", "renew", "return"],
    reply: "Undergraduate students can borrow up to 3 items: 2 lending books + 1 reference book.\nLending books: 14 days, renewable for 7 days if nobody else needs them.\nReference books: 1 day.\nBooks are issued from 8:00 AM to 4:00 PM. Bring your ID card."
  },
  {
    keys: ["contact", "phone", "number", "call", "marketing"],
    reply: "General number: 0117 737 000\nMarketing Department: 0713 531531\nProgramme Managers / Academic Coordinators of each faculty are listed on page 67 of the handbook."
  },
  {
    keys: ["thanks", "thank", "thx", "stuti"],
    reply: "You're welcome! Ask me anything else."
  }
];

const fallback = "Sorry, I don't know that yet. Try asking about exams, GPA, fees, library, ID card or contacts.";

// ===== Brain =====
function getReply(text) {
  const words = text.toLowerCase().replace(/[^a-z0-9 ]/g, "").split(" ");

  let bestMatch = null;
  let bestScore = 0;

  for (const item of answers) {
    let score = 0;

    for (const key of item.keys) {
      if (words.includes(key)) {
        score++;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch) {
    return bestMatch.reply;
  }
  return fallback;
}

// ===== Show messages =====
const chat = document.getElementById("chat");

function addMessage(role, text) {
  const div = document.createElement("div");
  div.className = "msg " + role;
  div.textContent = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

addMessage("bot", "Hi! I'm Horizon Buddy. Ask me about exams, GPA, fees, library, ID card or contacts.");

// ===== Send message =====
const form = document.getElementById("form");
const input = document.getElementById("input");

function sendMessage(text) {
  text = text.trim();
  if (text === "") return;

  addMessage("user", text);

  setTimeout(function () {
    addMessage("bot", getReply(text));
  }, 700);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  sendMessage(input.value);
  input.value = "";
});

// ===== Suggested questions =====
const suggestions = [
  "Library opening time",
  "How to borrow books?",
  "How to calculate GPA?",
  "What are the grade points?",
  "Exam hall rules",
  "Exam attendance requirement",
  "Medical absence",
  "How to get a refund?",
  "Transcript copy fee",
  "I lost my ID card",
  "Degree classes",
  "Contact number"
];

const box = document.getElementById("suggestions");

for (const q of suggestions) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "chip";
  btn.textContent = q;
  btn.addEventListener("click", function () {
    sendMessage(q);
  });
  box.appendChild(btn);
}