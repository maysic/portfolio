import Link from "next/link";
import styles from './header.module.css'
import Logo from './logo/logo';
import Nav from './nav/Nav';


export default function Header() {
  return ( 
    <header className={styles.header}>
        <div className="container">
          <div className={styles.content}>

            <Logo/>

            <Nav/>

            <div className={styles.right}>
              <a href="tel:+74958235412" className={styles.link}>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="telephone 1" clip-path="url(#clip0_1_208)">
                  <g id="Group">
                  <g id="Group_2">
                  <path id="Vector" d="M2.25241 4.81643C0.750584 6.31823 0.750584 8.7618 2.25238 10.2636L3.05007 9.46592C1.98816 8.40402 1.98814 6.67613 3.0501 5.61417C4.11203 4.55224 5.83992 4.55224 6.90185 5.61414L7.69953 4.81646C6.19776 3.31463 3.75418 3.31466 2.25241 4.81643Z" fill="#6E9C9F"/>
                  </g>
                  </g>
                  <g id="Group_3">
                  <g id="Group_4">
                  <path id="Vector_2" d="M3.84127 6.39119C3.2091 7.02336 3.20907 8.05201 3.84124 8.68421L4.63895 7.88653C4.54578 7.79335 4.49446 7.66947 4.49446 7.53772C4.49446 7.40599 4.54581 7.2821 4.63898 7.18893C4.73215 7.09576 4.85603 7.04444 4.98776 7.04444C5.11952 7.04444 5.24343 7.09576 5.33658 7.18893L6.13426 6.39122C5.50209 5.75902 4.47344 5.75902 3.84127 6.39119Z" fill="#6E9C9F"/>
                  </g>
                  </g>
                  <g id="Group_5">
                  <g id="Group_6">
                  <path id="Vector_3" d="M13.7483 4.43513L11.8551 2.54848L7.92337 6.47367L9.44758 8.04781C9.19214 8.50125 8.6379 9.3699 7.69334 10.3145C6.74865 11.2592 5.87366 11.8197 5.41587 12.0792L3.87261 10.5556L0.0022583 14.4029L1.8851 16.2983C2.60485 17.0181 3.69998 17.2046 4.6102 16.7625C5.99921 16.0879 8.09546 14.8431 10.1943 12.7443C12.2931 10.6455 13.5379 8.54924 14.2125 7.16023C14.3723 6.83109 14.45 6.47787 14.45 6.12692C14.45 5.5072 14.2078 4.89464 13.7483 4.43513ZM13.1977 6.66732C12.5609 7.97846 11.3845 9.95865 9.39661 11.9466C7.40868 13.9345 5.42849 15.1109 4.11735 15.7477C3.63935 15.9799 3.06287 15.8806 2.6842 15.5019L1.59746 14.4079L3.87543 12.1436L5.19015 13.4415L5.5419 13.2849C5.59905 13.2595 6.95947 12.6438 8.49116 11.1121C10.0239 9.57947 10.6267 8.23054 10.6515 8.17386L10.8041 7.82683L9.50677 6.48705L11.8559 4.14178L12.9512 5.23327C13.3307 5.6133 13.4298 6.18952 13.1977 6.66732Z" fill="#6E9C9F"/>
                  </g>
                  </g>
                  </g>
                  <defs>
                  <clipPath id="clip0_1_208">
                  <rect width="17" height="17" fill="black"/>
                  </clipPath>
                  </defs>
                </svg>

              +7 (495) 823-54-12
              </a>
  
              <Link href='/bags' className={styles.bags_link}>
                <svg className={styles.svg} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="shopping-bags 1" clip-path="url(#clip0_1_219)">
                <g id="Group">
                <g id="Group_2">
                <g id="Group_3">
                <path id="Vector" d="M23.8454 8.2243C23.7281 8.10906 23.5642 8.05442 23.4012 8.07624H17.0343V5.26295C17.0343 2.4826 14.7804 0.228699 12.0001 0.228699C9.21971 0.228699 6.96582 2.4826 6.96582 5.26295V8.07624H0.598861C0.421164 8.07624 0.243523 8.07624 0.154646 8.2243C0.0352739 8.33902 -0.0201042 8.5051 0.00659291 8.66851L2.22761 20.81C2.53789 22.5037 4.00034 23.7431 5.72199 23.7713H18.278C20.0046 23.7289 21.464 22.4797 21.7724 20.7804L23.9934 8.66851C24.0201 8.5051 23.9648 8.33902 23.8454 8.2243ZM8.1503 5.26295C8.1503 3.13682 9.87388 1.41324 12 1.41324C14.1261 1.41324 15.8497 3.13682 15.8497 5.26295V8.07624H8.1503V5.26295ZM20.5879 20.6323C20.3884 21.7547 19.4179 22.5759 18.278 22.5868H5.72199C4.58212 22.5759 3.61161 21.7547 3.41215 20.6323L1.30959 9.26078H22.6904L20.5879 20.6323Z" fill="black"/>
                <path id="Vector_2" d="M16.4421 15.0354C16.7692 15.0354 17.0343 14.7702 17.0343 14.4431V12.6663C17.0343 12.3392 16.7692 12.074 16.4421 12.074C16.1149 12.074 15.8498 12.3392 15.8498 12.6663V14.4431C15.8497 14.7702 16.1149 15.0354 16.4421 15.0354Z" fill="black"/>
                <path id="Vector_3" d="M7.55803 15.0354C7.88514 15.0354 8.1503 14.7702 8.1503 14.4431V12.6663C8.1503 12.3392 7.88514 12.074 7.55803 12.074C7.23092 12.074 6.96576 12.3392 6.96576 12.6663V14.4431C6.96576 14.7702 7.23092 15.0354 7.55803 15.0354Z" fill="black"/>
                </g>
                </g>
                </g>
                </g>
                <defs>
                <clipPath id="clip0_1_219">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>
              </Link>
            </div>
          </div>
        </div>
    </header>
   );
}

