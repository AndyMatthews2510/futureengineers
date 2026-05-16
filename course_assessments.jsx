import { useState } from "react";

const ACCENT = "#C84B31";

const tabs = [
  { id: "exam1", label: "Written Exam 1", sub: "Week 8 · 90 min", icon: "✍️" },
  { id: "exam2", label: "Written Exam 2", sub: "Week 13 · 90 min", icon: "✍️" },
  { id: "pres", label: "Presentation Rubric", sub: "Week 11 · Holistic", icon: "🎤" },
  { id: "meeting", label: "Meeting Rubric", sub: "Week 9 · Holistic", icon: "🤝" },
  { id: "peer", label: "Peer Feedback Form", sub: "Weeks 2 & 7", icon: "👥" },
];

const exam1 = {
  title: "Written Exam 1",
  subtitle: "Communication Foundations: Vinh Giang Framework, Vocal Delivery, Body Language & Professional Vocabulary",
  info: "Week 8 · 90 minutes · 25% of final grade · Closed book · B2+/C1 English expected throughout",
  sections: [
    {
      label: "Section A",
      title: "Multiple Choice — Identifying Communication Techniques",
      marks: "20 marks · 1 mark each · approximately 15 minutes",
      instruction: "Circle the best answer for each question.",
      items: [
        {
          q: "1. According to Vinh Giang's vocal foundations, a speaker who delivers every sentence at the same pace and volume most directly fails to use which foundation?",
          options: ["A. Articulation", "B. Melody and Rate", "C. Tonality", "D. Projection"],
          answer: "B"
        },
        {
          q: "2. Vinh Giang describes a person's 'habitual voice' as:",
          options: ["A. The voice they were born with and cannot change", "B. A set of behaviours developed from mimicking others that can be retrained", "C. The voice they use only in formal, high-stakes situations", "D. A sign of low confidence that requires therapy to address"],
          answer: "B"
        },
        {
          q: "3. In Vinh Giang's body language framework, a 'monotone body' most likely leads to:",
          options: ["A. Greater audience focus on the speaker's words", "B. A monotone voice and reduced perceived credibility", "C. Stronger eye contact and audience trust", "D. Clearer articulation and slower rate of speech"],
          answer: "B"
        },
        {
          q: "4. Which of the following best describes Method 2 from Vinh Giang's five anxiety-management techniques? (Assume students have studied the video.)",
          options: ["A. Memorising the entire script word for word", "B. Reframing anxiety symptoms as excitement and energy", "C. Speaking only to friendly faces in the audience", "D. Avoiding eye contact to reduce self-consciousness"],
          answer: "B"
        },
        {
          q: "5. A speaker who slightly smiles before beginning to talk, according to Vinh Giang, is primarily influencing which vocal foundation?",
          options: ["A. Volume", "B. Rate", "C. Tonality", "D. Articulation"],
          answer: "C"
        },
        {
          q: "6. Which of the following best describes Vinh Giang's 'Siren Technique'?",
          options: ["A. Using dramatic pauses to signal importance", "B. Sliding the voice up and down the pitch range to expand vocal variety", "C. Projecting the voice toward the back wall of a room", "D. Recording and reviewing oneself to identify habits"],
          answer: "B"
        },
        {
          q: "7. According to body language principles discussed in the course, when speaking to a large audience you should generally:",
          options: ["A. Reduce gesture size to avoid appearing aggressive", "B. Maintain the same body language as in a one-on-one conversation", "C. Scale up gesture, movement, and energy to match the space", "D. Face sideways to appear more relaxed and approachable"],
          answer: "C"
        },
        {
          q: "8. In the context of professional English, which sentence uses the most appropriate hedging language for a written engineering proposal?",
          options: [
            "A. 'This solution will definitely reduce costs by 40%.'",
            "B. 'This solution could reduce costs by approximately 40%.'",
            "C. 'Maybe this solution reduces costs, we think.'",
            "D. 'This solution must reduce costs a lot.'"
          ],
          answer: "B"
        },
        {
          q: "9. Vinh Giang's storytelling framework emphasises that the most common mistake speakers make is being too:",
          options: ["A. Emotional", "B. Specific", "C. General and vague", "D. Structured"],
          answer: "C"
        },
        {
          q: "10. Which of the following represents an example of 'high-context' communication that an engineer working globally should be aware of?",
          options: [
            "A. Giving direct feedback immediately in a team meeting",
            "B. Relying on shared understanding, indirect language, and relationship context rather than explicit statements",
            "C. Using technical jargon to establish credibility with non-technical audiences",
            "D. Speaking loudly and slowly to be understood across cultures"
          ],
          answer: "B"
        },
      ],
      note: "Items 11–20 follow the same format, covering: STAR structure, filler word impact, virtual body language, professional meeting expressions, and cross-cultural register."
    },
    {
      label: "Section B",
      title: "Short Answer — Explain in Your Own Words",
      marks: "30 marks · 5–6 marks each · approximately 25 minutes",
      instruction: "Answer THREE of the following five questions. Write in complete sentences. Answers should be 60–100 words each. You will be assessed on accuracy of content AND quality of professional English.",
      items: [
        { q: "B1. Explain what Vinh Giang means when he says your current voice is your 'habitual voice', not your 'natural voice'. Why is this distinction important for a professional communicator?" },
        { q: "B2. Describe TWO of Vinh Giang's five anxiety-management methods. For each, explain what a speaker should do and why it helps." },
        { q: "B3. Explain how body language can affect the quality of a speaker's voice. Use a specific example to support your answer." },
        { q: "B4. What are the three core ingredients of a good professional story according to Vinh Giang's storytelling framework? Give one example of how each ingredient could be applied in an engineering presentation." },
        { q: "B5. A colleague tells you: 'I am just not a confident communicator — it is my personality.' Using ideas from this course, how would you respond? What evidence would you give that communication skill can be developed?" },
      ]
    },
    {
      label: "Section C",
      title: "Extended Writing — Scenario Analysis",
      marks: "30 marks · approximately 35 minutes",
      instruction: "Read the scenario below. Then answer both parts.",
      scenario: `Arjun is a third-year mechanical engineering student presenting his capstone project to a panel of three people: his academic supervisor, a potential industry sponsor, and a fellow student. He has prepared thoroughly and knows his content well.\n\nDuring his presentation, Arjun speaks very quickly and rarely pauses. He looks mostly at his slides rather than at the panel. His voice stays at the same volume and pitch throughout. He holds his notes tightly with both hands and does not gesture. When the sponsor asks a challenging question, Arjun says "Um… I'm not sure… I think… maybe…" and looks at the floor.`,
      parts: [
        { label: "Part 1 (15 marks)", text: "Identify and analyse THREE specific communication problems Arjun has in his presentation. For each problem, name the Vinh Giang principle or concept involved and explain clearly why this is a problem in this professional context. Write approximately 180–200 words." },
        { label: "Part 2 (15 marks)", text: "Write practical, specific advice for Arjun that he could apply before and during his next presentation. Your advice must address voice, body language, AND anxiety management. You may draw on any techniques or frameworks studied in this course. Write approximately 180–200 words." }
      ]
    },
    {
      label: "Section D",
      title: "Vocabulary — Professional English in Context",
      marks: "20 marks · approximately 15 minutes",
      instruction: "Complete both tasks.",
      parts: [
        {
          label: "D1. Match (10 marks)",
          text: "Match each professional expression (1–10) to its correct function (A–J). Expressions include: 'I would like to propose…', 'If I could just finish my point…', 'That is a fair concern, however…', 'To summarise what we have agreed…', 'I appreciate your perspective, and…', 'Could you elaborate on that?', 'Shall we move to the next item?', 'I take your point, though I would suggest…', 'We appear to have reached a consensus on…', 'Let me rephrase that…'. Functions: Making a proposal; Holding the floor; Conceding then countering; Summarising agreements; Showing empathy before disagreeing; Asking for clarification; Chairing a transition; Polite disagreement with alternative; Confirming agreement; Correcting or clarifying oneself."
        },
        {
          label: "D2. Register Transformation (10 marks)",
          text: "Rewrite each of the following informal sentences in appropriate B2+ professional English for a formal meeting or written proposal. (2 marks each)\n\n1. 'We don't really know if this is gonna work out.'\n2. 'Honestly, their idea is way better than ours.'\n3. 'We need more cash to finish the project.'\n4. 'The client keeps changing their mind and it's really annoying.'\n5. 'Let's just go with option B.'"
        }
      ]
    }
  ]
};

const exam2 = {
  title: "Written Exam 2",
  subtitle: "Professional English: Negotiation, Proposals, Vocabulary & Error Correction",
  info: "Week 13 · 90 minutes · 25% of final grade · Closed book · B2+/C1 English expected throughout",
  sections: [
    {
      label: "Section A",
      title: "Vocabulary in Context",
      marks: "20 marks · approximately 15 minutes",
      instruction: "Complete the gap-fill passage using the words in the box. There are TWO extra words you will not need.",
      scenario: `Word box: negotiate / concession / scope / leverage / counterproposal / stakeholders / feasibility / consensus / articulate / hedge / assertive / ambiguous\n\nWhen entering a professional (1)________ with a client or partner, it is essential to (2)________ your position clearly before making any (3)________. Engineers who can communicate (4)________ — stating their needs directly while remaining open to compromise — are far more effective than those who are either aggressive or overly passive. Before the meeting, you should identify your (5)________ — what you have that the other party needs — and understand the concerns of all (6)________. If the other party makes an offer that is unclear or (7)________, do not hesitate to ask for clarification before responding. A strong (8)________ shows that you have listened and are engaging seriously with their position. To protect your claims in formal documents, it is appropriate to (9)________ language with phrases such as 'it is anticipated that' or 'the data suggests'. Reaching a (10)________ may require several rounds of discussion, but this collaborative outcome is almost always stronger than one side simply winning.`,
      answer_note: "Answer key: 1-negotiate, 2-articulate, 3-concession, 4-assertive, 5-leverage, 6-stakeholders, 7-ambiguous, 8-counterproposal, 9-hedge, 10-consensus"
    },
    {
      label: "Section B",
      title: "Short Answer — Negotiation Scenario",
      marks: "25 marks · approximately 25 minutes",
      instruction: "Read the scenario. Then answer all three questions.",
      scenario: `Your engineering team has proposed a new drainage system for a municipal client. The project was quoted at 4.2 million baht and a 16-week timeline. The client has responded: "We need this done in 10 weeks and our budget cap is 3.5 million baht. We have two other firms we are considering."\n\nYou believe the 10-week timeline is technically impossible without compromising safety standards.`,
      parts: [
        { label: "B1 (8 marks)", text: "Write your opening response to the client (approximately 80 words). You must: acknowledge their position respectfully, hold firm on the safety concern, and introduce the possibility of an alternative." },
        { label: "B2 (8 marks)", text: "The client says: 'We appreciate your concern, but our board has already approved the 10-week schedule.' Write your counterproposal (approximately 80 words). Offer a realistic alternative that addresses both cost and timeline. Use appropriate hedging and professional register." },
        { label: "B3 (9 marks)", text: "After the meeting, write a follow-up email (approximately 100 words) to a colleague summarising the negotiation outcome and identifying two strategies that were effective or that you would use differently next time." }
      ]
    },
    {
      label: "Section C",
      title: "Extended Writing — Business Proposal Section",
      marks: "35 marks · approximately 35 minutes",
      instruction: "Read the brief below. Write the THREE sections of a business proposal as indicated. You will be assessed on structure, persuasive language, professional vocabulary, and accuracy.",
      scenario: `BRIEF: A local municipality wants proposals from engineering students for a low-cost, sustainable solution to reduce flooding in a residential neighbourhood during monsoon season. The review panel includes both technical engineers and non-technical community representatives.\n\nWrite the following three sections of your proposal:\n• Problem Statement (approximately 80 words): Describe the problem clearly for a mixed audience.\n• Proposed Solution (approximately 100 words): Describe your solution specifically. Use appropriate technical language but ensure non-technical readers can follow.\n• Key Benefits (approximately 70 words): Explain 2–3 concrete benefits using persuasive but measured language.`,
      marks_breakdown: "Structure & coherence: 10 marks | Persuasive language & hedging: 10 marks | Vocabulary level (B2+): 10 marks | Grammar & accuracy: 5 marks"
    },
    {
      label: "Section D",
      title: "Error Correction — Professional Email",
      marks: "20 marks · 2 marks each · approximately 15 minutes",
      instruction: "The email below contains TEN errors. Each error is underlined. Identify the type of error and write the correct version. Error types include: register (too informal), vocabulary (wrong word), grammar, punctuation, and spelling.",
      scenario: `Subject: Update on The Project\n\nDear Mr. Somchai,\n\nI am (1)writing to you about giving some update on the progress of the water treatment project. We have been working very (2)hardly over the past two weeks and I am (3)pride to report that Phase One is now (4)completly finished.\n\nUnfortuantely, we have (5)meet a small challenge with the supplier. The (6)equipments we ordered has been delayed by 10 days. We (7)apologise this inconvenience and are (8)current exploring alternative suppliers to (9)insure the timeline is not significantly effected.\n\nI will (10)touch base with you next week with a full update.\n\nBest regards,\nKritsada`,
      answer_note: "Errors: 1-register (remove 'giving', write 'to provide an update on'), 2-hardly→hard, 3-pride→proud, 4-completly→completely, 5-meet→encountered, 6-equipments→equipment, 7-apologise this→apologise for, 8-current→currently, 9-insure→ensure / effected→affected, 10-register (touch base→follow up)"
    }
  ]
};

const presRubric = {
  title: "Technical Presentation — Holistic Rubric",
  subtitle: "Week 11 · 5-minute presentation to a mixed audience · 15% of final grade",
  task: "Deliver a 5-minute structured presentation on your engineering innovation or project idea to a panel that includes both technical and non-technical members. You will be assessed holistically across all four Vinh Giang communication pillars.",
  bands: [
    {
      grade: "Distinction",
      range: "85–100%",
      color: "#2D6A4F",
      accent: "#52B788",
      desc: "The presenter commands the room from the opening moment. Voice is varied, dynamic, and precisely controlled — rate, volume, melody, and tonality all serve the message. Body language is natural, intentional, and calibrated to the audience: gestures reinforce meaning, eye contact is distributed and genuine, and physical presence conveys authority without rigidity. The presentation follows a compelling narrative structure with a clear hook, logically sequenced evidence, and a memorable close. Storytelling is specific and sensory — the audience can feel the problem and the solution. Language is fluent, accurate, and consistently at C1 level; technical content is made accessible to non-technical listeners without oversimplification. Anxiety, if present at all, is visibly managed and channelled into energy. The speaker appears to be performing a service for the audience, not performing for themselves. Q&A responses are composed, specific, and professional."
    },
    {
      grade: "Merit",
      range: "70–84%",
      color: "#1B6CA8",
      accent: "#3A9AD9",
      desc: "The presenter demonstrates clear competence across all four pillars, with moments of genuine strength. Voice shows meaningful variation in rate and volume, though one or two foundations (e.g., tonality or melody) are inconsistently applied. Body language is generally open and supportive of the message, though gesture or eye contact may feel slightly rehearsed or unevenly distributed across the panel. Structure is logical and clear; the argument flows and the main point is evident. Storytelling is present but may lack full sensory specificity or a fully resolved meaning-link. Language is largely accurate at B2+ level; occasional vocabulary choices reduce precision or register. Anxiety is managed and does not significantly undermine delivery, though some physical signals (e.g., gripping notes, rushed pace) remain. Q&A responses are mostly appropriate but may lack the depth or confidence of a Distinction performance."
    },
    {
      grade: "Pass",
      range: "55–69%",
      color: "#A05C00",
      accent: "#D4860A",
      desc: "The presenter shows an emerging grasp of professional communication but inconsistencies limit overall impact. Voice delivery is functional but largely flat — limited use of variation in rate, volume, or melody results in a monotone effect across portions of the presentation. Body language is present but partly closed or distracting: limited gesture, infrequent eye contact, or physical tension (rigid posture, held notes) reduces perceived confidence. Structure is recognisable but may feel formulaic or have gaps in logic; the narrative thread is not consistently maintained. Language is generally intelligible at B1–B2 level but contains errors that occasionally impede comprehension or undermine professional register. Anxiety is visible and affects delivery at moments — rushes, long pauses, loss of thread — though the presenter recovers. Responses to Q&A questions are attempted but may be brief, vague, or grammatically inconsistent."
    },
    {
      grade: "Fail",
      range: "0–54%",
      color: "#6B1A1A",
      accent: "#C84B31",
      desc: "The presentation does not yet meet the minimum professional communication standard expected at this level. Significant issues across two or more pillars are present: voice is monotone and undifferentiated, delivery is rushed or inaudibly quiet, or all four vocal foundations are absent. Body language is closed, avoidant, or disruptive to the message — the speaker may read from notes, avoid all eye contact, or remain physically frozen. There is no clear narrative structure; the audience cannot follow the argument or identify the central message. Language errors are frequent enough to impede understanding, or the register is consistently inappropriate for a professional context. Anxiety overwhelms the delivery — the speaker loses place, is unable to complete the presentation, or communicates primarily through filler words and silence. Q&A responses are missing, monosyllabic, or not in professional English."
    }
  ],
  note: "Holistic grading means the assessor reads all four band descriptors and selects the one that best describes the overall performance. A single weak moment does not determine the band — the overall impression across all four pillars does. Borderline cases: if a performance sits between two bands, the assessor considers whether the strengths or weaknesses are more characteristic of the student's communication overall."
};

const meetingRubric = {
  title: "Meeting Participation — Holistic Rubric",
  subtitle: "Week 9 · 45-minute meeting simulation · 10% of final grade",
  task: "Participate in a role-play professional meeting ('The Greenfield Solar Project'). You will be assessed on the quality, frequency, and language of your contributions — not on whether your team reaches the 'right' outcome.",
  bands: [
    {
      grade: "Distinction",
      range: "85–100%",
      color: "#2D6A4F",
      accent: "#52B788",
      desc: "The participant contributes substantively and strategically throughout the meeting. Contributions are well-timed, relevant, and move the discussion forward rather than simply repeating points already made. The participant uses a varied range of meeting language naturally and accurately: they propose, challenge, concede, redirect, and summarise with precision and confidence. Turn-taking is managed skillfully — the participant holds the floor when needed and yields gracefully. They invite others to contribute and acknowledge other speakers' points before building on or countering them. Body language reinforces engagement: they lean in, maintain eye contact, and nod to signal active listening. Professional English is at C1 level: vocabulary is precise, hedging is appropriate, and disagreement is expressed diplomatically. The participant remains composed and constructive even when challenged or interrupted."
    },
    {
      grade: "Merit",
      range: "70–84%",
      color: "#1B6CA8",
      accent: "#3A9AD9",
      desc: "The participant makes regular, relevant contributions that demonstrate engagement with the task and with other speakers. A reasonable range of meeting language is used, though some functions — such as redirecting or politely challenging — may be less confident or less varied than at Distinction level. Turn-taking is mostly appropriate; the participant joins the conversation consistently without dominating or withdrawing. They show awareness of other speakers' contributions, though they may not always build directly upon them. Body language is generally attentive and professional. English is at a solid B2 level: communication is clear and meetings language is mostly accurate, with occasional errors in register, vocabulary precision, or grammatical complexity. Disagreement or challenge, when made, is largely appropriate in tone."
    },
    {
      grade: "Pass",
      range: "55–69%",
      color: "#A05C00",
      accent: "#D4860A",
      desc: "The participant contributes to the meeting but does so unevenly — with long periods of silence followed by brief or generic contributions. Comments are mostly relevant but tend to state positions without elaboration, evidence, or connection to what others have said. Meeting language is limited to a narrow set of expressions and may feel formulaic or over-rehearsed. Turn-taking may be awkward — the participant either struggles to enter the conversation or makes contributions that do not connect clearly to the flow of discussion. Body language suggests partial engagement: limited eye contact, distraction, or closed posture. English is at B1–B2 level with errors that occasionally reduce clarity or professional register. Challenging or disagreeing with other speakers is avoided or handled imprecisely."
    },
    {
      grade: "Fail",
      range: "0–54%",
      color: "#6B1A1A",
      accent: "#C84B31",
      desc: "The participant contributes minimally or not at all to the meeting — making fewer than three substantive contributions across the 45-minute simulation, or contributions that are off-task, inaudible, or in a language other than English. Where contributions are made, they do not demonstrate command of professional meeting language. Turn-taking is absent or disruptive. The participant appears disengaged or unaware of the meeting's progress. Body language signals withdrawal or non-participation. English, where used, contains errors that prevent comprehension or fall significantly below B2 level. The participant does not engage with other speakers' ideas or demonstrate any collaborative communicative behaviour."
    }
  ],
  note: "The assessor observes the full meeting and assigns a band at the end based on the overall pattern of participation. Brief periods of silence are normal in meetings and do not determine the grade. The key question is: did this participant make the meeting more effective through their communication?"
};

const peerForm = {
  title: "Peer Feedback Form — Impromptu & Interview Speech",
  subtitle: "Used in Weeks 2, 3 & 7 · Not graded — formative feedback only",
  instruction: "Your role is observer. Watch and listen carefully. Be specific and kind — vague feedback ('good job') is not helpful. Focus on what you actually noticed, not what you expected.",
  sections: [
    {
      label: "Speaker details",
      fields: [
        { label: "Speaker's name", type: "text" },
        { label: "Observer's name", type: "text" },
        { label: "Task (circle one)", type: "choice", options: ["Impromptu speech", "Mock interview answer", "Professional story"] },
        { label: "Topic / Question", type: "text" },
      ]
    },
    {
      label: "Voice (Vinh Giang's Vocal Foundations)",
      fields: [
        { label: "Rate of speech", type: "scale", desc: "Did they vary their pace, or stay the same throughout?", lo: "Too fast / flat", hi: "Well-varied" },
        { label: "Volume", type: "scale", desc: "Could you hear them clearly? Did volume change for emphasis?", lo: "Too quiet / flat", hi: "Clear & varied" },
        { label: "Melody / Pitch", type: "scale", desc: "Did the pitch go up and down naturally?", lo: "Monotone", hi: "Expressive" },
        { label: "What was ONE specific thing you noticed about their voice?", type: "open" },
      ]
    },
    {
      label: "Body Language",
      fields: [
        { label: "Eye contact", type: "scale", desc: "Did they look at you? Did it feel natural or avoidant?", lo: "Avoided / floor", hi: "Natural & direct" },
        { label: "Gestures", type: "scale", desc: "Did their hands support or distract from the message?", lo: "None / distracting", hi: "Natural & clear" },
        { label: "Posture & presence", type: "scale", desc: "Did they seem confident and grounded?", lo: "Closed / tense", hi: "Open & confident" },
        { label: "What was ONE specific thing you noticed about their body language?", type: "open" },
      ]
    },
    {
      label: "Structure & Content",
      fields: [
        { label: "Clear opening", type: "yn", desc: "Did you know what they were going to talk about within the first 15 seconds?" },
        { label: "Logical flow", type: "yn", desc: "Could you follow the argument or story from beginning to end?" },
        { label: "Specific detail", type: "yn", desc: "Did they use concrete examples, not just general statements?" },
        { label: "Clear close", type: "yn", desc: "Did the ending feel complete, or did it just stop?" },
        { label: "What was the single clearest moment in the whole speech?", type: "open" },
      ]
    },
    {
      label: "Anxiety & Confidence",
      fields: [
        { label: "Filler words", type: "count", desc: "Tally every 'um', 'uh', 'like', 'you know' you hear." },
        { label: "Visible anxiety signals", type: "check", options: ["Fast breathing", "Gripping notes", "Looking at floor", "Rushed ending", "Fidgeting", "Long silences", "None noticed"] },
        { label: "Overall confidence impression", type: "scale", lo: "Clearly nervous", hi: "Calm & assured" },
      ]
    },
    {
      label: "Strengths & Next Steps",
      fields: [
        { label: "Write ONE thing this speaker did well. Be specific — name the moment.", type: "open", big: true },
        { label: "Write ONE thing that would make the biggest difference if they changed it next time.", type: "open", big: true },
        { label: "One word that describes the overall impression this speaker left on you:", type: "text" },
      ]
    }
  ]
};

function ScaleRow({ lo, hi }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", margin: "4px 0 2px" }}>
      <span style={{ fontSize: "11px", color: "#888", fontFamily: "sans-serif", width: "100px", textAlign: "right" }}>{lo}</span>
      {[1,2,3,4,5].map(n => (
        <div key={n} style={{
          width: "28px", height: "28px", borderRadius: "50%",
          border: "1.5px solid #444", display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "11px", color: "#666", fontFamily: "sans-serif"
        }}>{n}</div>
      ))}
      <span style={{ fontSize: "11px", color: "#888", fontFamily: "sans-serif", width: "100px" }}>{hi}</span>
    </div>
  );
}

function ExamSection({ section, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div style={{ marginBottom: "12px", border: "1px solid #2A2A2A", borderRadius: "8px", overflow: "hidden" }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: "100%", background: open ? "#1C1C1C" : "#161616",
          border: "none", padding: "16px 20px", textAlign: "left", cursor: "pointer",
          display: "flex", justifyContent: "space-between", alignItems: "center"
        }}
      >
        <div>
          <span style={{ fontSize: "11px", letterSpacing: "2px", color: ACCENT, textTransform: "uppercase", fontFamily: "sans-serif" }}>{section.label} · </span>
          <span style={{ fontSize: "14px", color: "#E8E0D0", fontFamily: "sans-serif" }}>{section.title}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "11px", color: "#666", fontFamily: "sans-serif" }}>{section.marks?.split("·")[0]}</span>
          <span style={{ color: "#666", fontSize: "16px" }}>{open ? "▲" : "▼"}</span>
        </div>
      </button>
      {open && (
        <div style={{ padding: "20px", background: "#111" }}>
          {section.marks && <div style={{ fontSize: "12px", color: "#888", fontFamily: "sans-serif", marginBottom: "10px", fontStyle: "italic" }}>{section.marks}</div>}
          {section.instruction && (
            <div style={{ fontSize: "13px", color: "#C8C0B0", fontFamily: "sans-serif", marginBottom: "14px", padding: "10px 14px", background: "#1A1A1A", borderLeft: "3px solid #444", borderRadius: "4px" }}>
              <strong>Instructions: </strong>{section.instruction}
            </div>
          )}
          {section.scenario && (
            <div style={{ fontSize: "13px", color: "#B0A898", fontFamily: "sans-serif", lineHeight: "1.8", marginBottom: "14px", padding: "14px", background: "#161616", border: "1px solid #2A2A2A", borderRadius: "6px", whiteSpace: "pre-line" }}>
              {section.scenario}
            </div>
          )}
          {section.items && section.items.map((item, i) => (
            <div key={i} style={{ marginBottom: "16px", padding: "14px", background: "#161616", borderRadius: "6px", border: "1px solid #222" }}>
              <div style={{ fontSize: "13px", color: "#E8E0D0", fontFamily: "sans-serif", marginBottom: item.options ? "10px" : "0", lineHeight: "1.6" }}>{item.q}</div>
              {item.options && (
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  {item.options.map((opt, j) => (
                    <div key={j} style={{ fontSize: "12px", color: "#AAA", fontFamily: "sans-serif", padding: "4px 8px" }}>{opt}</div>
                  ))}
                </div>
              )}
              {item.answer && <div style={{ fontSize: "11px", color: "#52B788", fontFamily: "sans-serif", marginTop: "8px" }}>✓ Answer: {item.answer}</div>}
            </div>
          ))}
          {section.note && <div style={{ fontSize: "12px", color: "#666", fontFamily: "sans-serif", fontStyle: "italic", marginTop: "8px" }}>{section.note}</div>}
          {section.parts && section.parts.map((p, i) => (
            <div key={i} style={{ marginBottom: "12px", padding: "14px", background: "#161616", borderRadius: "6px", border: "1px solid #222" }}>
              <div style={{ fontSize: "12px", color: ACCENT, fontFamily: "sans-serif", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>{p.label}</div>
              <div style={{ fontSize: "13px", color: "#C8C0B0", fontFamily: "sans-serif", lineHeight: "1.7", whiteSpace: "pre-line" }}>{p.text}</div>
            </div>
          ))}
          {section.marks_breakdown && (
            <div style={{ fontSize: "12px", color: "#888", fontFamily: "sans-serif", marginTop: "10px", padding: "10px 14px", background: "#1A1A1A", borderRadius: "4px" }}>
              <strong style={{ color: "#C8C0B0" }}>Marks breakdown: </strong>{section.marks_breakdown}
            </div>
          )}
          {section.answer_note && (
            <div style={{ fontSize: "11px", color: "#52B788", fontFamily: "sans-serif", marginTop: "10px", padding: "8px 12px", background: "#0D1A0F", borderRadius: "4px" }}>
              ✓ {section.answer_note}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function RubricBand({ band }) {
  return (
    <div style={{
      border: `1px solid ${band.color}66`,
      borderLeft: `4px solid ${band.accent}`,
      borderRadius: "8px",
      marginBottom: "12px",
      overflow: "hidden",
      background: "#161616",
    }}>
      <div style={{ padding: "14px 20px", display: "flex", alignItems: "center", gap: "16px", borderBottom: `1px solid #222` }}>
        <div style={{
          background: band.color,
          color: "#fff",
          fontFamily: "sans-serif",
          fontWeight: "700",
          fontSize: "14px",
          padding: "6px 16px",
          borderRadius: "4px",
          minWidth: "80px",
          textAlign: "center"
        }}>{band.grade}</div>
        <div style={{ fontSize: "13px", color: "#888", fontFamily: "sans-serif" }}>{band.range}</div>
      </div>
      <div style={{ padding: "16px 20px", fontSize: "13px", color: "#C8C0B0", fontFamily: "sans-serif", lineHeight: "1.85" }}>
        {band.desc}
      </div>
    </div>
  );
}

function PeerFormDisplay() {
  return (
    <div>
      <div style={{ fontSize: "13px", color: "#AAA", fontFamily: "sans-serif", lineHeight: "1.7", marginBottom: "20px", padding: "12px 16px", background: "#1A1A1A", borderLeft: "3px solid #555", borderRadius: "4px" }}>
        {peerForm.instruction}
      </div>
      {peerForm.sections.map((sec, si) => (
        <div key={si} style={{ marginBottom: "20px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "3px", color: ACCENT, textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: "12px" }}>{sec.label}</div>
          <div style={{ background: "#161616", border: "1px solid #222", borderRadius: "8px", padding: "16px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
            {sec.fields.map((f, fi) => (
              <div key={fi}>
                <div style={{ fontSize: "13px", color: "#E8E0D0", fontFamily: "sans-serif", marginBottom: "4px" }}>{f.label}</div>
                {f.desc && <div style={{ fontSize: "12px", color: "#666", fontFamily: "sans-serif", marginBottom: "6px", fontStyle: "italic" }}>{f.desc}</div>}
                {f.type === "scale" && <ScaleRow lo={f.lo} hi={f.hi} />}
                {f.type === "open" && (
                  <div style={{ borderBottom: `1px solid #333`, height: f.big ? "60px" : "30px", marginTop: "4px" }} />
                )}
                {f.type === "text" && <div style={{ borderBottom: "1px solid #333", height: "28px", marginTop: "4px" }} />}
                {f.type === "yn" && (
                  <div style={{ display: "flex", gap: "20px", marginTop: "4px" }}>
                    {["Yes", "No", "Partly"].map(o => (
                      <div key={o} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <div style={{ width: "16px", height: "16px", border: "1.5px solid #444", borderRadius: "50%" }} />
                        <span style={{ fontSize: "12px", color: "#888", fontFamily: "sans-serif" }}>{o}</span>
                      </div>
                    ))}
                  </div>
                )}
                {f.type === "choice" && (
                  <div style={{ display: "flex", gap: "20px", marginTop: "4px" }}>
                    {f.options.map(o => (
                      <div key={o} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <div style={{ width: "16px", height: "16px", border: "1.5px solid #444", borderRadius: "50%" }} />
                        <span style={{ fontSize: "12px", color: "#888", fontFamily: "sans-serif" }}>{o}</span>
                      </div>
                    ))}
                  </div>
                )}
                {f.type === "count" && (
                  <div style={{ display: "flex", gap: "8px", marginTop: "6px", flexWrap: "wrap" }}>
                    {Array(10).fill(0).map((_, i) => (
                      <div key={i} style={{ width: "28px", height: "28px", border: "1.5px solid #333", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", color: "#555", fontFamily: "sans-serif" }}>{i + 1}</div>
                    ))}
                    <div style={{ fontSize: "12px", color: "#666", fontFamily: "sans-serif", alignSelf: "center", marginLeft: "4px" }}>Total: ____</div>
                  </div>
                )}
                {f.type === "check" && (
                  <div style={{ display: "flex", gap: "12px", marginTop: "6px", flexWrap: "wrap" }}>
                    {f.options.map(o => (
                      <div key={o} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <div style={{ width: "14px", height: "14px", border: "1.5px solid #444", borderRadius: "2px" }} />
                        <span style={{ fontSize: "12px", color: "#888", fontFamily: "sans-serif" }}>{o}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Assessments() {
  const [activeTab, setActiveTab] = useState("exam1");

  return (
    <div style={{ fontFamily: "Georgia, serif", background: "#0F0F0F", minHeight: "100vh", color: "#E8E0D0" }}>
      {/* Header */}
      <div style={{ background: "#0A0A0A", borderBottom: "2px solid #222", padding: "24px 36px 0" }}>
        <div style={{ fontSize: "10px", letterSpacing: "4px", color: "#666", textTransform: "uppercase", marginBottom: "6px" }}>
          5501 216 · Assessment Materials
        </div>
        <h1 style={{ fontSize: "22px", fontWeight: "400", color: "#F5F0E8", margin: "0 0 20px" }}>
          English for Future Entrepreneurs in Engineering
        </h1>
        <div style={{ display: "flex", gap: "0", overflowX: "auto" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "12px 20px",
                background: "transparent",
                border: "none",
                borderBottom: activeTab === t.id ? `2px solid ${ACCENT}` : "2px solid transparent",
                cursor: "pointer",
                textAlign: "left",
                whiteSpace: "nowrap",
                marginBottom: "-2px",
              }}
            >
              <div style={{ fontSize: "12px", color: activeTab === t.id ? "#F5F0E8" : "#666", fontFamily: "sans-serif", fontWeight: activeTab === t.id ? "600" : "400" }}>
                {t.icon} {t.label}
              </div>
              <div style={{ fontSize: "10px", color: "#555", fontFamily: "sans-serif", marginTop: "2px" }}>{t.sub}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "28px 36px", maxWidth: "860px" }}>
        {(activeTab === "exam1" || activeTab === "exam2") && (() => {
          const exam = activeTab === "exam1" ? exam1 : exam2;
          return (
            <div>
              <h2 style={{ fontSize: "20px", fontWeight: "400", color: "#F5F0E8", margin: "0 0 4px" }}>{exam.title}</h2>
              <div style={{ fontSize: "13px", color: "#AAA", fontFamily: "sans-serif", marginBottom: "6px" }}>{exam.subtitle}</div>
              <div style={{ fontSize: "12px", color: "#666", fontFamily: "sans-serif", marginBottom: "24px", padding: "8px 14px", background: "#161616", borderRadius: "4px", borderLeft: `3px solid ${ACCENT}` }}>{exam.info}</div>
              {exam.sections.map((s, i) => <ExamSection key={i} section={s} index={i} />)}
            </div>
          );
        })()}

        {activeTab === "pres" && (
          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "400", color: "#F5F0E8", margin: "0 0 4px" }}>{presRubric.title}</h2>
            <div style={{ fontSize: "13px", color: "#AAA", fontFamily: "sans-serif", marginBottom: "6px" }}>{presRubric.subtitle}</div>
            <div style={{ fontSize: "13px", color: "#B0A898", fontFamily: "sans-serif", lineHeight: "1.7", marginBottom: "20px", padding: "12px 16px", background: "#161616", borderLeft: `3px solid ${ACCENT}`, borderRadius: "4px" }}>
              <strong>Task: </strong>{presRubric.task}
            </div>
            {presRubric.bands.map((b, i) => <RubricBand key={i} band={b} />)}
            <div style={{ fontSize: "12px", color: "#666", fontFamily: "sans-serif", lineHeight: "1.7", marginTop: "16px", padding: "12px 16px", background: "#161616", borderRadius: "6px", borderLeft: "3px solid #333" }}>
              <strong style={{ color: "#AAA" }}>Assessor note: </strong>{presRubric.note}
            </div>
          </div>
        )}

        {activeTab === "meeting" && (
          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "400", color: "#F5F0E8", margin: "0 0 4px" }}>{meetingRubric.title}</h2>
            <div style={{ fontSize: "13px", color: "#AAA", fontFamily: "sans-serif", marginBottom: "6px" }}>{meetingRubric.subtitle}</div>
            <div style={{ fontSize: "13px", color: "#B0A898", fontFamily: "sans-serif", lineHeight: "1.7", marginBottom: "20px", padding: "12px 16px", background: "#161616", borderLeft: `3px solid ${ACCENT}`, borderRadius: "4px" }}>
              <strong>Task: </strong>{meetingRubric.task}
            </div>
            {meetingRubric.bands.map((b, i) => <RubricBand key={i} band={b} />)}
            <div style={{ fontSize: "12px", color: "#666", fontFamily: "sans-serif", lineHeight: "1.7", marginTop: "16px", padding: "12px 16px", background: "#161616", borderRadius: "6px", borderLeft: "3px solid #333" }}>
              <strong style={{ color: "#AAA" }}>Assessor note: </strong>{meetingRubric.note}
            </div>
          </div>
        )}

        {activeTab === "peer" && (
          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "400", color: "#F5F0E8", margin: "0 0 4px" }}>{peerForm.title}</h2>
            <div style={{ fontSize: "13px", color: "#AAA", fontFamily: "sans-serif", marginBottom: "20px" }}>{peerForm.subtitle}</div>
            <PeerFormDisplay />
          </div>
        )}
      </div>
    </div>
  );
}
