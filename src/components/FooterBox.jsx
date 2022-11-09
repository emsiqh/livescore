import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const FooterBox = ({ boxType }) => {

    const projectBoxItems = [
        { id: 1, name: 'Điều khoản sử dụng' },
        { id: 2, name: 'Quảng cáo' },
        { id: 3, name: 'Liên hệ' },
    ];

    const socialBoxItems = [
        { id: 1, name: 'Facebook', url: 'https://www.facebook.com/emsiqh', icon: faFacebook },
        { id: 2, name: 'Twitter', url: 'https://www.facebook.com/emsiqh', icon: faTwitter },
        { id: 3, name: 'Instagram', url: 'https://www.facebook.com/emsiqh', icon: faInstagram },
    ];

    return (
        <div className={`selfPromo__box selfPromo__box--${boxType}`}>
            <div className='selfPromo__boxTitle'>
                {boxType === 'project' ? 'QuangHuy.com' : 'Theo dõi tôi'}
            </div>
            <div className='selfPromo__boxContent'>
                {
                    boxType === 'project'
                        ?
                        // link
                        <div className='selfPromo__boxContent--links'>
                            {
                                projectBoxItems.map((item) => {
                                    return (
                                        <div key={item.id} className='selfPromo__boxItemWrapper'>
                                            <a href='#' className='selfPromo__boxItem'>{item.name}</a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        // directly wrapper
                        socialBoxItems.map((item) => {
                            return (
                                <div key={item.id} className='selfPromo__boxItemWrapper'>
                                    <a href={item.url} className='selfPromo__boxItem'>
                                        <FontAwesomeIcon className='selfPromo__icon' icon={item.icon}></FontAwesomeIcon>
                                        <div className='selfPromo__linkText'>{item.name}</div>
                                    </a>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default FooterBox