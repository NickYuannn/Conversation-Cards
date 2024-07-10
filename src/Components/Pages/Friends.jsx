import React from "react";
import CardPage from "/src/Components/CardPage";

function Friends() {
  return (
    <div>
      <CardPage
        packname="Friends"
        prompts={[
          "What's something you've learned about yourself recently?",
          "What's a goal you're currently working towards, and how can I support you?",
          "What's a difficult decision you've had to make, and how did you come to that decision?",
          "What's a belief or opinion you've held for a long time, and has it changed recently?",
          "What's a memorable experience from your childhood that has shaped who you are today?",
          "If you could have dinner with any fictional character, who would it be and why?",
          "What's one thing you appreciate about our friendship that you don't often say?",
          "What's a lesson you've learned from a mistake you've made?",
          "What do you think is the most important value to uphold in any relationship?",
          "If you could travel anywhere in the world right now, where would you go and why?",
          "What's a skill or hobby you've always wanted to try, but haven't yet?",
          "What's a book or movie that has deeply influenced how you see the world?",
          "What's one thing you wish more people knew about you?",
          "What's your idea of a perfect day spent together?",
          "What's a song that reminds you of a significant moment in your life, and why?",
          "What's a quality in someone else that you admire and why?",
          "What's one of your biggest fears and how do you cope with it?",
          "What's a piece of advice you would give your younger self?",
          "What's something you're passionate about that not many people know?",
          "If you could change one thing about the world, what would it be and why?",
          "What's an achievement you're proud of that others might not know about?",
          "What's a tradition or ritual from your family or culture that means a lot to you?",
          "What's something you're currently struggling with, and how can I support you?",
          "What's a moment in your life when you felt the most alive?",
          "What's a dream you've had that you're still pursuing?",
          "What's a place you've visited that left a lasting impression on you?",
          "What's a skill or talent of yours that you're proud of?",
          "What's a decision you made that changed the course of your life?",
          "What's an experience that taught you the importance of friendship?",
          "What's something you wish you could do more often, but haven't had the chance?",
          "What's a cause or issue you feel strongly about, and why?",
          "What's a belief you hold that some people might find unconventional?",
          "What's a goal you have for the next year, and how do you plan to achieve it?",
          "What's something you've recently discovered that has brought you joy?",
          "What's a challenge you faced that made you stronger?",
          "What's a question you've always wanted to ask but haven't yet?",
          "What's a memory with me that you cherish?",
          "What's something you've been reading or learning about lately?",
          "What's a skill you admire in others that you're working on improving yourself?",
          "What's a place you'd love to visit together someday?",
          "What's a movie or show you've watched recently that you recommend?",
          "What's a small gesture someone has done for you that meant a lot?",
          "What's something you've done recently that you're proud of?",
          "What's a goal you have for our friendship?",
          "What's a lesson you've learned from a challenging experience?",
          "What's a place in our city or town you think we should explore together?",
          "What's a quality you admire in me that you strive to embody yourself?",
          "What's a hobby or interest of yours that you're passionate about?",
          "What's something you've been curious about lately?",
          "What's a skill or talent you wish you had, and why?",
          "What's a tradition or ritual from your childhood that you've carried into adulthood?",
          "What's something you've learned from our friendship?",
          "What's a moment we've shared that has strengthened our bond?",
          "What's a fear you've overcome, and how did you do it?",
          "What's a quote or saying that inspires you?",
          "What's a decision you made that you regret, and what did you learn from it?",
          "What's something you'd like to do differently in your life, and why?",
          "What's a piece of advice you would give your future self?",
          "What's a book or article you've read recently that resonated with you?",
          "What's something you think our friendship brings to your life?",
          "What's a skill or talent you've admired in someone else that you'd like to learn?",
          "What's a movie or show you think everyone should watch, and why?",
          "What's a place you'd like to travel to someday, and why?",
          "What's a hobby or interest of yours that you'd like to pursue more?",
          "What's something you've been passionate about since you were young?",
          "What's a cause or issue you care deeply about, and why?",
          "What's a skill or talent of yours that you'd like to share with others?",
          "What's a moment in our friendship that you'll always remember?",
          "What's a belief or value you hold that guides your life?",
          "What's a question you've always wanted to ask me?",
          "What's a memory with me that always makes you smile?",
          "What's a hobby or interest of yours that you think others should try?",
          "What's something you've always wanted to learn, and why?",
          "What's a challenge you've faced recently, and how did you overcome it?",
          "What's a goal you have for the next year, and how can I support you?",
          "What's a belief or opinion you've had for a long time, and has it changed recently?",
          "What's a moment in your life when you felt the most proud?",
          "What's a dream you have that you're actively working towards?",
          "What's a lesson you've learned from a difficult experience?",
          "What's something you're passionate about that you'd like to share with others?",
          "What's a place you'd love to visit together someday, and why?",
          "What's a book or movie that has deeply influenced your perspective?",
          "What's something you're currently struggling with, and how can I support you?",
          "What's a tradition or ritual from your family or culture that is important to you?",
          "What's a memory from our friendship that has stuck with you?",
          "What's a skill or talent of yours that you're proud of?",
          "What's a decision you made that you're glad about, and why?",
          "What's a quality you admire in someone else that you strive to embody?",
          "What's a hobby or interest you have that you'd like to pursue further?",
          "What's something you've been curious about lately?",
          "What's a belief or value that is important to you?",
          "What's a moment in our friendship that you cherish?",
          "What's a fear you've faced and how did you overcome it?",
          "What's a quote or saying that inspires you?",
          "What's a decision you made that you regret, and what did you learn from it?",
          "What's something you'd like to change about your life, and why?",
          "What's a piece of advice you would give your future self?",
          "What's a book or article you've read recently that resonated with you?",
          "What's a skill or talent you admire in someone else that you'd like to learn?",
          "What's a movie or show you think everyone should watch, and why?",
          "What's a place you'd like to travel to someday, and why?",
          "What's a hobby or interest of yours that you'd like to pursue more?",
          "What's something you've been passionate about since you were young?",
          "What's a cause or issue you care deeply about, and why?",
          "What's a skill or talent of yours that you'd like to share with others?",
          "What's a moment in our friendship that you'll always remember?",
          "What's a belief or value you hold that guides your life?",
          "What's a question you've always wanted to ask me?",
          "What's a memory with me that always makes you smile?",
          "What's a hobby or interest of yours that you think others should try?",
          "What's something you've always wanted to learn, and why?",
          "What's a challenge you've faced recently, and how did you overcome it?",
          "What's a goal you have for the next year, and how can I support you?",
          "What's a belief or opinion you've had for a long time, and has it changed recently?",
          "What's a moment in your life when you felt the most proud?",
          "What's a dream you have that you're actively working towards?",
          "What's a lesson you've learned from a difficult experience?",
          "What's something you're passionate about that you'd like to share with others?",
          "What's a place you'd love to visit together someday, and why?",
          "What's a book or movie that has deeply influenced your perspective?",
          "What's something you're currently struggling with, and how can I support you?",
          "What's a tradition or ritual from your family or culture that is important to you?",
        ]}
      />
    </div>
  );
}

export default Friends;
