import { useState } from 'react'
import './styles/dice.css'
import { SettingImage } from './SettingImage'
import DiceArea from './DiceArea'
import Human from './Human'
import Computer from './Computer'
import { images } from './diceImage'
import al from './media/dice-image/al.png'
import al2 from './media/dice-image/al.png'
import img from './media/trophy.png'
import Background from './Background'
import Header from './Header'
import { Minute, Seconds} from './Timer'




function App() {
    const [rollDice, setRollDice] = useState(al);
    const [rollDice2, setRollDice2] = useState(al2);
    const [animate, setAnimate] = useState(false);
    let [play, setPlay] = useState(true);
    let [play2, setPlay2] = useState(false);
    let [totalP1, setTotalP1] = useState(0);
    let [totalP2, setTotalP2] = useState(0);

    // useEffect(()=>{
    //     let out = setInterval(()=>{
    //         setString('')
    //     },2000)
    //     return ()=>out
    // },[string])
    function row() {
        let ran = Math.floor(Math.random() * 6) + 1;
        let ran2 = Math.floor(Math.random() * 6) + 1;
        setAnimate(true)
        setPlay(false)
        setRollDice(al)
        setRollDice2(al2)
        setTimeout(() => {
            setRollDice(images[ran])
            setRollDice2(images[ran2])
            setAnimate(false)
            setPlay(true)
            let toroll = ran + ran2;
            if (ran === 6 || ran2 === 6 || toroll === 6) {
                setAnimate(false)
                // setNum(num += 2)
                setTotalP1(pre => pre += 2)
                // setNum(0)
                setPlay(true)
                if (toroll === 12) {
                    setTotalP1(pre => pre += 4)
                }
            } else {
                // setNum(0)
                setAnimate(false)
                setPlay(false)
                setPlay2(true)
            }
        }, 2000)
    }



    function autoPlays() {
        let ran = Math.floor(Math.random() * 6) + 1;
        let ran2 = Math.floor(Math.random() * 6) + 1;
        setRollDice(al)
        setRollDice2(al2)
        setAnimate(true)
        setPlay2(false)
        setTimeout(() => {
            setPlay2(true)
            setRollDice(images[ran])
            setRollDice2(images[ran2])
            setRollDice(images[ran])
            setRollDice2(images[ran2])
            setAnimate(false)
            let toroll = ran + ran2;
            if (ran === 6 || ran2 === 6 || toroll === 6) {
                setAnimate(false)
                // setNum2(num2 += 2)
                setTotalP2(totalP2 += 2)
                setPlay2(true)
                if (toroll === 12) {
                    setTotalP2(pre => pre += 4)
                }
            } else {
                setAnimate(false)
                setPlay2(false)
                setPlay(true)

            }
        }, 2000)
    }









    const first =Minute() % 2 ===0 && totalP1 >= 10 && totalP1 > totalP2;
    const second =Minute() % 2 ===0 && totalP2 >= 10 && totalP1 < totalP2;
    const draw = Minute() % 2 ===0 && totalP1 > 2 && totalP2 > 2 && totalP2 === totalP1;
    let check = first || second || draw;

    function Winners() {


        let win;

        if (first) {
            win = <div className='winner'>
                <div className='wins'>
                    <h1 className='fs-1 fw-lighter win'>{`player 1 wins the game with total score of ${totalP1}`}</h1>
                    <img className='img' src={img} alt="" />
                    <button onClick={restart}>↪</button>
                    <p className='text-center fs-4'>click on the top left button to restart</p>

                </div>
            </div>

        } else if (second) {
            win = <div className='winner'>
                <div className='wins'>
                    <h1 className='fs-1 fw-lighter win'>{`player 2 wins the game with total score of ${totalP2}`}</h1>
                    <img className='img' src={img} alt="" />
                    <button onClick={restart}>↪</button>
                    <p className='text-center fs-4'>click on the top left button to restart</p>

                </div>
            </div>

        } else if (draw) {
            win = <div className='winner'>
                <div className='wins'>
                    <h1 className='fs-1 fw-lighter win'>Draw game</h1>
                    <button onClick={restart}>↪</button>
                    <p className='text-center fs-4'>click on the top left button to restart</p>

                </div>
            </div>
        }
        return win


    }

    function restart() {
        setRollDice(al)
        setRollDice2(al2)
        setPlay(true)
        setPlay2(false)
        setTotalP1(0)
        setTotalP2(0)
        setAnimate(false)
    }

    return (
        <>
        <div className='text-center'>

        {Seconds()}
        </div>
            {
                check && <div>
                    {Winners()}
                </div>
            }
            <Background>
                <Header />
                <div className='container'>
                    <div className="set">
                        <SettingImage />
                    </div>
                    <Human changeDice={row} total={totalP1} animate={animate} play={play} />
                    <DiceArea rollDice={rollDice} rollDice2={rollDice2}
                        animate={animate} play={play} />
                    <Computer total={totalP2} play2={play2}
                        animate={animate} autoPlay={autoPlays} />
                    <section className="setting-container">
                        <button className=' mx-1' onClick={restart}>↪</button>
                    </section>
                </div>
            </Background>
        </>
    )
}

export default App
