import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);


function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img src='https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-1/362642983_2013560672340910_6601869634510222777_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=106&ccb=1-7&_nc_sid=5740b7&_nc_ohc=Ykghvr9n-MkAX-tkoJm&_nc_ht=scontent-lax3-2.xx&oh=00_AfBkxn83wqoozpv8Q3h0GE6C-iLOtl_i93pGxM_LR-HNhQ&oe=65EB3B17' alt='Hoa' className={cx('avatar')}/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span >Nguyen Van A</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}/>
                </h4>
                <span className={cx('username')}>Thai</span>
            </div>
        </div>
     );
}

export default AccountItem;