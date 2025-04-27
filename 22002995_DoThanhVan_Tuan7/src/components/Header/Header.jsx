import './Header.css';
import search from '../../assets/images/search_bar.png';
import quesmark from '../../assets/images/quesmark.png';
import bell from '../../assets/images/bell.png';
import avatar from '../../assets/images/avatar_head.png';

export default function Header() {
    return (
        <div className="header-container">
            <span className='left-header'>Dashboard</span>
            <div className='right-header'>
                <img src={search}></img>
                <img src={bell}></img>
                <img src={quesmark}></img>
                <img src={avatar}></img>
            </div>
        </div>
    );
}