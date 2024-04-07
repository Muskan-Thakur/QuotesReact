import React from "react";
import Name from "./Name";

function App()
{
  // const username="Sunil";

  // const indianNames = [
  //   'Aarav', 'Aditi', 'Amit', 'Ananya', 'Arjun', 'Asha', 'Chetan', 'Deepak',
  //   'Gita', 'Ishaan', 'Jai', 'Kiran', 'Lakshmi', 'Manish', 'Neha', 'Om', 'Priya',
  //   'Rahul', 'Rohan', 'Sanjay', 'Simran', 'Tara', 'Uma', 'Vijay', 'Vikram',
  //   'Yash', 'Zara', 'Ravi', 'Sonia', 'Raj'
  // ];

  const arrayOfObjects = [
    { name: 'Aarav', quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.' },
    { name: 'Aditi', quote: 'The way to get started is to quit talking and begin doing.' },
    { name: 'Amit', quote: 'Your time is limited, don’t waste it living someone else’s life.' },
    { name: 'Ananya', quote: 'If life were predictable it would cease to be life, and be without flavor.' },
    { name: 'Arjun', quote: 'If you look at what you have in life, you’ll always have more.' },
    { name: 'Asha', quote: 'Life is what happens when you’re busy making other plans.' },
    { name: 'Chetan', quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.' },
    { name: 'Deepak', quote: 'The future belongs to those who believe in the beauty of their dreams.' },
    { name: 'Gita', quote: 'It is during our darkest moments that we must focus to see the light.' },
    { name: 'Ishaan', quote: 'Whoever is happy will make others happy too.' },
    { name: 'Jai', quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail.' },
    { name: 'Kiran', quote: 'You will face many defeats in life, but never let yourself be defeated.' },
    { name: 'Lakshmi', quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.' },
    { name: 'Manish', quote: 'In the end, it’s not the years in your life that count. It’s the life in your years.' },
    { name: 'Neha', quote: 'Never let the fear of striking out keep you from playing the game.' },
    { name: 'Om', quote: 'Life is either a daring adventure or nothing at all.' },
    { name: 'Priya', quote: 'Many of life’s failures are people who did not realize how close they were to success when they gave up.' },
    { name: 'Rahul', quote: 'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.' },
    { name: 'Rohan', quote: 'The only impossible journey is the one you never begin.' },
    { name: 'Sanjay', quote: 'Life is really simple, but we insist on making it complicated.' },

  { name: 'Oliver', quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.' },
  { name: 'Charlotte', quote: 'Believe you can and you’re halfway there.' },
  { name: 'James', quote: 'Start where you are. Use what you have. Do what you can.' },
  { name: 'Ava', quote: 'Everything you’ve ever wanted is on the other side of fear.' },
  { name: 'William', quote: 'Challenges are what make life interesting and overcoming them is what makes life meaningful.' },
  { name: 'Sophia', quote: 'The only limit to our realization of tomorrow will be our doubts of today.' },
  { name: 'Henry', quote: 'What you get by achieving your goals is not as important as what you become by achieving your goals.' },
  { name: 'Amelia', quote: 'Life is 10% what happens to us and 90% how we react to it.' },
  { name: 'Michael', quote: 'The only way to do great work is to love what you do.' },
  { name: 'Harper', quote: 'Change your thoughts and you change your world.' },

  { name: 'Ethan', quote: 'It does not matter how slowly you go as long as you do not stop.' },
  { name: 'Mia', quote: 'We may encounter many defeats but we must not be defeated.' },
  { name: 'Alexander', quote: 'Life is about making an impact, not making an income.' },
  { name: 'Ella', quote: 'Strive not to be a success, but rather to be of value.' },
  { name: 'Sebastian', quote: 'The best revenge is massive success.' },
  { name: 'Abigail', quote: 'The mind is everything. What you think you become.' },
  { name: 'Logan', quote: 'An unexamined life is not worth living.' },
  { name: 'Lily', quote: 'Eighty percent of success is showing up.' },
  { name: 'Carter', quote: 'Your life does not get better by chance, it gets better by change.' },
  { name: 'Zoe', quote: 'The only way to have a friend is to be one.' },
  { name: 'Benjamin', quote: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.' },
  { name: 'Grace', quote: 'The only person you are destined to become is the person you decide to be.' },
  { name: 'Jackson', quote: 'Go confidently in the direction of your dreams! Live the life you’ve imagined.' },
  { name: 'Sophie', quote: 'When you have a dream, you’ve got to grab it and never let go.' },
  { name: 'Wyatt', quote: 'I can’t change the direction of the wind, but I can adjust my sails to always reach my destination.' },
  { name: 'Isabella', quote: 'No matter what people tell you, words and ideas can change the world.' },
  { name: 'Gabriel', quote: 'Each person must live their life as a model for others.' },
  { name: 'Charlotte', quote: 'A hero is someone who has given his or her life to something bigger than oneself.' },
  { name: 'Lucas', quote: 'Life is never fair, and perhaps it is a good thing for most of us that it is not.' },
  { name: 'Emily', quote: 'The only limit to our realization of tomorrow is our doubts of today.' },
  
];
  console.log(arrayOfObjects[0].name)
  return(
    <div>
    <h1>QUOTES</h1>
    <div className="container">
   
     {arrayOfObjects.map(function(quote,index)
{
  return(<Name sr={index+1} name={quote.name}  quote={quote.quote}/>   )
})}



    {/* {indianNames.map(function(data){
    return(<Name username={data}/>)
    })} */}
    </div></div>
    
)



}



export default App;

