import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hidden Gem Indie Game Board</h1>
      <h3>A listing of a few hidden indie game gems to purchase/play for free. Click on the Game Images to navigate to the game's public page!</h3>

      <div className='container'>
            <Card name="Speed Farmers" description="An experimental yet profound game by developer Alpernter, free to play on his website." img={'../src/assets/speedfarmers.png'} gameLink='https://www.alpenter.com/experiments/speedfarmer/speedfarmer.html' />
            <Card name="LanVodis" description="LanVodis is an experimental treasure-hunting and overworld navigation game made in RPG Maker 2000. Learn how to make your way through the overworld without the traditional givens of RPG travel." img={'../src/assets/lanvodis.png'} gameLink='https://tunditur-unda.itch.io/lanvodis' />
            <Card name="Squirm" description="After a previous adventure, you and your rat friend stop for a snooze. When you wake up, the rat is gone and strange creatures have appeared across the land as if from out of nowhere! What has happened while you were asleep? Where is your rat friend? " img={'../src/assets/squirmBanner.png'} gameLink='https://store.steampowered.com/app/778330/Squirm/'/>
            <Card name="WARP-TEK" description="WARP-TEK is a horizontal space shooter wherein you have to rescue your pet after it got abducted by aliens and consequently imprisoned on a distant planet! " img={'../src/assets/warptek.jpg'} gameLink='https://store.steampowered.com/app/924870/WARPTEK/' />
            <Card name="Eatwell" description="Collecting bloods cells throughout each stage you can accumulate a variety of weird and wonderful power-ups and abilities to help you defeat whatever the damned throw at you. Be warned, it's not going to be easy." img={'../src/assets/eatwell.jpg'} gameLink='https://store.steampowered.com/app/678870/EatWell/'/>
            <Card name="Mushroom: The Ruckus" description="Mushroom: The Ruckus is a 2D top-down hack-n-slash type deal where you play as a mushroom with a vendetta against his kind." img={'../src/assets/mushroomBanner.png'} gameLink='https://store.steampowered.com/app/845700/Mushroom_The_Ruckus/' />
            <Card name="Anodyne" description="In this unique Zelda-lite game, explore and fight your way through surreal and creepy, nature, urban and abstract themed areas in the human Young's subconscious, evoked by a 16-bit-era visual style and a moody, dream-like soundtrack." img={'../src/assets/anodyneBanner.jpg'} gameLink='https://store.steampowered.com/app/234900/Anodyne/'/>
            <Card name="Wazhack" description="Time moves forward only when you do in the dungeons of WazHack. Think your way out of problems instead of just spamming 'attack' and 'drink healing potion'. " img={'../src/assets/wazhackBanner.png'} gameLink='https://store.steampowered.com/app/264160/WazHack/' />
            <Card name="Loop-Loop DX" description="Loop-Loop DX is a retro-style space shooter that makes extensive use of one simple idea: Going off one side of the screen and coming out the other. With the advanced tech of the spectacular 'Loop Gun', your bullets may also loop around the screen! Use this devastating weapon to blast away all who oppose you!" img={'../src/assets/looploopdxBanner.png'} gameLink='https://store.steampowered.com/app/875610/LoopLoop_DX/' />
            <Card name="The Little Slime" description="The Little Slime is a shooter action platformer with roguelike elements. Enjoy the adventure of a slime with 4 Stage, Random Map, 100 Item, 5 Character, 5 Ending, 63 Monster, 10 Boss, 3 Mode. " img={'../src/assets/littleslimeBanner.jpg'} gameLink='https://store.steampowered.com/app/788200/The_Little_Slime/' />
            <Card name="Critters for Sale" description="A compilation of 5 short stories: Snake, Goat, Monkey, Dragon, and Spider. All of which occur in different eras and locations, touching on themes like time travel, black magic, and immortality." img={'../src/assets/crittersBanner.jpg'} gameLink='https://store.steampowered.com/app/1078420/Critters_for_Sale/' />
            <Card name="Dujanah" description="A fun game." img={'../src/assets/dujanahBanner.jpg'} gameLink='https://store.steampowered.com/app/681240/Dujanah/' />
      </div>
      
    </div>
  )
}

export default App
