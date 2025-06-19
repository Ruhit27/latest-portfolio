const responses = [
  { keywords: ["name"], response: "I'm Majharul Islam Ruhit." },
  { keywords: ["age"], response: "I'm 22 years old." },
  {
    keywords: ["from", "hometown", "birthplace"],
    response: "I'm from Bangladesh.",
  },
  {
    keywords: ["location", "current city"],
    response: "I'm currently based in Malaysia.",
  },
  {
    keywords: ["job", "experience", "experiences", "work"],
    response:
      "I'm currently working as a software engineer at a company in Hong Kong.",
  },
  {
    keywords: ["university", "college", "institution"],
    response: "I studied at Asia Pacific University in Malaysia.",
  },
  {
    keywords: ["major", "degree", "study", "field"],
    response: "I majored in Computer Science and Engineering.",
  },
  {
    keywords: ["email", "contact"],
    response: "You can reach me at majharulislamruhit72@gmail.com.",
  },
  {
    keywords: ["phone", "mobile"],
    response: "Sorry, I don't share my phone number publicly.",
  },
  {
    keywords: ["hobby", "hobbies", "interest", "pastime"],
    response: "I enjoy playing football in my free time.",
  },
  {
    keywords: ["skills", "skill", "technologies"],
    response:
      "I have experience with Java, Python, C++, and some web technologies.",
  },
  {
    keywords: ["project", "projects", "portfolio"],
    response:
      "I've worked on various academic and personal projects, including web apps and automation tools.",
  },
  {
    keywords: ["favorite food", "food", "dish"],
    response: "My favorite foods are pizza, biryani, and burgers.",
  },
  {
    keywords: ["language", "languages spoken"],
    response: "I speak Bengali and English fluently.",
  },
  {
    keywords: ["goals", "aspiration", "dream"],
    response:
      "I aspire to build impactful software and contribute to open-source projects.",
  },
  {
    keywords: ["personality", "describe yourself"],
    response: "I'm curious, hardworking, and passionate about technology.",
  },
  {
    keywords: ["hello", "hi", "hey"],
    response: "Hi there! How can I assist you today?",
  },
  {
    keywords: ["bye", "exit", "goodbye"],
    response: "Goodbye! Have a great day!",
  },
  {
    keywords: ["music", "favorite music"],
    response:
      "I enjoy relaxing music and sometimes upbeat tracks while coding.",
  },
  {
    keywords: ["movie", "movies", "favorite movie"],
    response:
      "I enjoy action and sci-fi movies. Inception is one of my favorites.",
  },

  {
    keywords: ["sport", "sports", "game"],
    response: "I enjoy playing and watching football.",
  },
  {
    keywords: ["travel", "places", "country"],
    response: "I’d love to visit Japan and Switzerland someday.",
  },
];

export default function Chat(query) {
  const lowerQuery = query.toLowerCase();

  for (const { keywords, response } of responses) {
    if (keywords.some((keyword) => lowerQuery.includes(keyword))) {
      console.log(response);
      return;
    } else {
      console.log("Ask a different question or Ask in a different way");
    }
  }
}
