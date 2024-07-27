import SetImage from './media/dice-image/setting.png'
import './styles/dice.css'
export function SettingImage() {
    return <>
        <span>settings</span>
        <img className='setting' src={SetImage} alt="name" />
    </>
}