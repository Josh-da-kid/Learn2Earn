const hamburgerMenu = document.getElementById("hamburgerMenu")
const mobileMenu = document.getElementById("mobileMenu")
const x = document.getElementById('x')
const video = document.getElementById('video')

const didYouKnowQuotes = [
    "An investment in knowledge pays the best interest. – Benjamin Franklin",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Learning never exhausts the mind. – Leonardo da Vinci",
    "Formal education will make you a living; self-education will make you a fortune. – Jim Rohn",
    "The more you learn, the more you earn. – Warren Buffett",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
    "The best way to predict your future is to create it. – Peter Drucker",
    "It’s not about ideas. It’s about making ideas happen. – Scott Belsky",
    "Your most valuable asset is your ability to learn. – Brian Tracy",
    "If you are not willing to learn, no one can help you. If you are determined to learn, no one can stop you. – Zig Ziglar",
    "Knowledge is power, but enthusiasm pulls the switch. – Ivern Ball",
    "The future belongs to those who learn more skills and combine them in creative ways. – Robert Greene",
    "Do not wait to strike till the iron is hot, but make it hot by striking. – William Butler Yeats",
    "The secret of getting ahead is getting started. – Mark Twain",
    "He who learns but does not think is lost. He who thinks but does not learn is in great danger. – Confucius",
    "Don’t let schooling interfere with your education. – Mark Twain",
    "Change is the end result of all true learning. – Leo Buscaglia",
    "You don’t learn to walk by following rules. You learn by doing, and by falling over. – Richard Branson",
    "Education is the most powerful weapon which you can use to change the world. – Nelson Mandela",
    "You can make excuses, or you can make money, but you can’t do both. – Unknown",
    "Wealth is not about having a lot of money; it’s about having a lot of options. – Chris Rock",
    "Great things are not done by impulse, but by a series of small things brought together. – Vincent Van Gogh",
    "Your income is directly related to your philosophy, not the economy. – Jim Rohn",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "The beautiful thing about learning is that no one can take it away from you. – B.B. King",
    "Knowledge without action is wastefulness and action without knowledge is foolishness. – Al-Ghazali",
    "Don’t sit down and wait for opportunities to come. Get up and make them. – Madam C.J. Walker",
    "If you don’t build your dream, someone else will hire you to help build theirs. – Dhirubhai Ambani",
    "Continuous learning is the minimum requirement for success in any field. – Brian Tracy",
    "Opportunities don’t happen. You create them. – Chris Grosser",
    "Success doesn’t come to you; you go to it. – Marva Collins",
    "Money never starts an idea. It is the idea that starts the money. – William J. Cameron",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "The key to success is to focus on goals, not obstacles. – Unknown",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "Action is the foundational key to all success. – Pablo Picasso",
    "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
    "Your big opportunity may be right where you are now. – Napoleon Hill",
    "Dream big, stay positive, work hard, and enjoy the journey. – Urijah Faber",
    "Do not wait for the perfect time and place to enter, for you are already onstage. – Unknown",
    "Success is not in what you have, but who you are. – Bo Bennett",
    "Always deliver more than expected. – Larry Page",
    "Success seems to be connected with action. Successful people keep moving. – Conrad Hilton",
    "To earn more, you must learn more. – Unknown",
    "Be so good they can’t ignore you. – Steve Martin",
    "A goal is a dream with a deadline. – Napoleon Hill",
    "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
    "Your education is a dress rehearsal for a life that is yours to lead. – Nora Ephron",
    "There are no secrets to success. It is the result of preparation, hard work, and learning from failure. – Colin Powell",
    "Hustle until you no longer need to introduce yourself. – Unknown",
  ];

  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * didYouKnowQuotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = didYouKnowQuotes[randomIndex];
  }

  setInterval(displayRandomQuote, 8000);

  displayRandomQuote();






