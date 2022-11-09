import { Stack } from '@mui/material';
import { FooterBox } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStore, faGooglePlay, faMicrosoft } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const apps = [
        { id: 1, name: 'App Store', icon: faAppStore },
        { id: 2, name: 'Google Play', icon: faGooglePlay },
        { id: 3, name: 'Microsoft Store', icon: faMicrosoft },
    ]

    return (
        <footer className='footerContainer'>
            <div className='footerContainer__content'>
                <div className='selfPromo'>
                    <div className='selfPromo__main'>
                        <FooterBox boxType='project' />
                        <FooterBox boxType='social' />
                        <div className='selfPromo__box selfPromo__box--apps'>
                            <div className='selfPromo__wrapper--texts'>
                                <div className='selfPromo__boxTitle'>Ứng dụng di động</div>
                                <div className='selfPromo__boxContent'>
                                    Ứng dụng di động của tôi được tối ưu hóa cho điện thoại của bạn. Tải xuống miễn phí liền!
                                </div>
                            </div>
                            <Stack direction='column' className='selfPromo__wrapper--stores'>
                                {
                                    apps.map((app) => {
                                        return (
                                            <a key={app.id} className='selfPromo__app' href="#">
                                                <FontAwesomeIcon className='selfPromo__icon' icon={app.icon} />
                                                <div className='selfPromo__appText'>{app.name}</div>
                                            </a>
                                        )
                                    })
                                }
                            </Stack>
                        </div>
                    </div>
                </div>
                <div className='footer'>

                </div>
            </div>
        </footer>
    )
}

export default Footer