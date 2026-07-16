/* ===========================================================================
 * Interview Prep Roadmap — content
 * ---------------------------------------------------------------------------
 * This is the ONLY file you need to edit to change the roadmap.
 * All resources here are FREE. Links are curated starting points — feel free
 * to refine URLs, add/remove items, or reorder. Each item needs a UNIQUE id
 * (progress is tracked by id, so keep ids stable once people start using it).
 *
 * item.type: "video" | "article" | "practice" | "course" | "repo" | "book"
 * item.hours: rough estimate, used for the "time remaining" figure.
 * =========================================================================== */
window.ROADMAP = {
  title: "Interview Prep Roadmap",
  subtitle: "A curated, free-resources path for software engineering interviews — DSA · LLD · HLD · Behavioral. Progress saves in your browser.",
  updated: "2026-07-16",
  sections: [
    {
      id: "dsa",
      title: "1 · DSA Foundations",
      goal: "Rebuild core data structures & algorithms and a repeatable pattern-based problem-solving approach.",
      items: [
        { id: "dsa-neetcode-roadmap", title: "NeetCode Roadmap (pattern-based path)", type: "practice", provider: "NeetCode", url: "https://neetcode.io/roadmap", hours: 40, note: "The backbone: work the roadmap topic by topic." },
        { id: "dsa-fcc-course", title: "Free full DSA course", type: "course", provider: "freeCodeCamp", url: "https://www.freecodecamp.org/news/tag/data-structures/", hours: 15, note: "Pick one comprehensive course to fill gaps." },
        { id: "dsa-visualgo", title: "Visualize data structures & algorithms", type: "article", provider: "VisuAlgo", url: "https://visualgo.net", hours: 3, note: "Great for building intuition on trees/graphs/sorting." },
        { id: "dsa-leetcode", title: "Practice problems (start with Top Interview 150)", type: "practice", provider: "LeetCode", url: "https://leetcode.com/studyplan/top-interview-150/", hours: 60, note: "Consistency > volume. Review mistakes." },
        { id: "dsa-gfg", title: "Reference articles & explanations", type: "article", provider: "GeeksforGeeks", url: "https://www.geeksforgeeks.org", hours: 5, note: "Use as a lookup when stuck on a concept." }
      ]
    },
    {
      id: "lld",
      title: "2 · Low-Level Design (OOP · SOLID · Patterns)",
      goal: "Design clean, extensible class-level solutions and speak fluently about OOP and design patterns.",
      items: [
        { id: "lld-solid", title: "SOLID principles & design principles", type: "article", provider: "Refactoring.Guru", url: "https://refactoring.guru/design-patterns/what-is-pattern", hours: 3, note: "Read the intro + principles before patterns." },
        { id: "lld-patterns-guru", title: "Design Patterns catalog (with examples)", type: "article", provider: "Refactoring.Guru", url: "https://refactoring.guru/design-patterns/catalog", hours: 10, note: "Creational, structural, behavioral — with code." },
        { id: "lld-sourcemaking", title: "Design Patterns (alternate explanations)", type: "article", provider: "SourceMaking", url: "https://sourcemaking.com/design_patterns", hours: 4, note: "Second angle when a pattern doesn't click." },
        { id: "lld-conceptcoding", title: "LLD playlist (patterns + real designs in Java)", type: "video", provider: "Concept && Coding", url: "https://www.youtube.com/@ConceptandCoding", hours: 20, note: "The channel we archived — great LLD walkthroughs." },
        { id: "lld-practice", title: "Practice: design Parking Lot, Splitwise, BookMyShow, Elevator", type: "practice", provider: "self", url: "", hours: 12, note: "Write actual class diagrams + code. Time-box each to 45 min." }
      ]
    },
    {
      id: "hld",
      title: "3 · High-Level / System Design",
      goal: "Reason about scalable systems: APIs, storage, caching, queues, sharding, trade-offs.",
      items: [
        { id: "hld-primer", title: "The System Design Primer", type: "repo", provider: "GitHub · donnemartin", url: "https://github.com/donnemartin/system-design-primer", hours: 25, note: "The canonical free HLD resource. Work the examples." },
        { id: "hld-gauravsen", title: "System design concepts (videos)", type: "video", provider: "Gaurav Sen", url: "https://www.youtube.com/@gkcs", hours: 12, note: "Great for intuition on distributed systems." },
        { id: "hld-bytebytego", title: "System design explainers", type: "video", provider: "ByteByteGo", url: "https://www.youtube.com/@ByteByteGo", hours: 8, note: "Crisp visual breakdowns of common designs." },
        { id: "hld-awesome", title: "Awesome Scalability (deep-dive reading list)", type: "repo", provider: "GitHub", url: "https://github.com/binhnguyennus/awesome-scalability", hours: 6, note: "Real-world architecture write-ups." },
        { id: "hld-practice", title: "Practice: design a URL shortener, news feed, chat, rate limiter", type: "practice", provider: "self", url: "", hours: 12, note: "Follow a template: requirements → API → data → scale → trade-offs." }
      ]
    },
    {
      id: "behavioral",
      title: "4 · Behavioral & Interview Craft",
      goal: "Tell structured, high-signal stories and handle the non-coding rounds well.",
      items: [
        { id: "beh-star", title: "Master the STAR method", type: "article", provider: "general", url: "https://www.themuse.com/advice/star-interview-method", hours: 2, note: "Structure every story: Situation, Task, Action, Result." },
        { id: "beh-amazon-lp", title: "Amazon Leadership Principles (if targeting Amazon)", type: "article", provider: "Amazon", url: "https://www.aboutamazon.com/about-us/leadership-principles", hours: 3, note: "Prepare 2 stories per principle." },
        { id: "beh-stories", title: "Write 8–10 reusable STAR stories from your experience", type: "practice", provider: "self", url: "", hours: 5, note: "Cover: conflict, failure, leadership, ambiguity, impact." }
      ]
    },
    {
      id: "mock",
      title: "5 · Mock Practice & Review",
      goal: "Simulate the real thing under time pressure and get feedback.",
      items: [
        { id: "mock-pramp", title: "Free peer mock interviews", type: "practice", provider: "Pramp", url: "https://www.pramp.com", hours: 8, note: "Do 1–2 per week; practice thinking aloud." },
        { id: "mock-interviewingio", title: "Anonymous mock interviews (free tier)", type: "practice", provider: "interviewing.io", url: "https://interviewing.io", hours: 4, note: "Great for realistic pressure + feedback." },
        { id: "mock-retro", title: "Keep a mistakes/retro log", type: "practice", provider: "self", url: "", hours: 3, note: "After each session, note what to improve. Review weekly." }
      ]
    }
  ]
};
