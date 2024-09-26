import React from 'react'

const Navbar = () => {
    return (
        <div className='p-[20px] fixed w-full '>
            <nav className="navbar ">
                <ul className="flex justify-between items-center w-full">
                    <li className="logo">
                        <svg width="152" height="22" viewBox="0 0 152 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.65643 18.797L6.38397 21.6758C5.58834 21.1996 4.84304 20.6616 4.15707 20.0681C2.67838 18.7665 1.54482 17.194 0.837292 15.4629C0.12976 13.7318 -0.134303 11.8848 0.0639482 10.0537C0.2622 8.22254 0.917878 6.45245 1.98419 4.86972C3.0505 3.28698 4.50116 1.93062 6.23264 0.89743L9.47489 3.74943C8.68407 4.13867 7.95764 4.62129 7.31588 5.18384C6.41136 5.97883 5.69385 6.92262 5.20433 7.96132C4.71481 9.00002 4.46285 10.1133 4.46285 11.2376C4.46285 12.3619 4.71481 13.4751 5.20433 14.5138C5.69385 15.5525 6.41136 16.4963 7.31588 17.2913C7.90715 17.8107 8.81334 18.4195 9.65643 18.797Z" fill="black" />
                            <path d="M24.2508 20.0694C23.6415 20.6021 22.9802 21.0867 22.2746 21.5178L19.0299 18.6734C21.9632 17.1964 23.944 14.4172 23.944 11.2387C23.9474 10.1141 23.697 8.99994 23.2073 7.96088C22.7175 6.92182 21.9982 5.97846 21.0908 5.18539C20.4137 4.59002 19.9633 4.31402 19.1768 3.87452L22.4118 1.02252C23.1715 1.50855 23.5767 1.81793 24.2487 2.40857C25.5693 3.5676 26.617 4.94408 27.3318 6.45929C28.0467 7.9745 28.4146 9.5987 28.4146 11.239C28.4146 12.8793 28.0467 14.5035 27.3318 16.0187C26.617 17.5339 25.5693 18.9104 24.2487 20.0694H24.2508Z" fill="black" />
                            <path d="M12.4556 6.36298L8.72559 9.64133L15.9291 15.9726L19.6591 12.6942L12.4556 6.36298Z" fill="black" />
                            <path d="M46.1158 0.878815H44.403V21.4558H46.1158V0.878815Z" fill="#E9204F" />
                            <path d="M61.7919 4.2853H63.8814V9.69897H66.1228V4.2853H68.2123V17.582H66.1228V11.5985H63.8814V17.582H61.7919V4.2853ZM74.7072 4.2853H76.7967V17.582H74.7072V4.2853ZM83.3004 4.2853H88.999V6.18483H85.3899V9.69897H88.2582V11.5985H85.3899V15.6825H88.999V17.582H83.3004V4.2853ZM103.121 4.2853H105.21V9.69897H107.452V4.2853H109.541V17.582H107.452V11.5985H105.21V17.582H103.121V4.2853ZM122.191 18.8167C121.241 18.8167 120.658 18.3925 120.443 17.544C120.051 17.696 119.588 17.772 119.056 17.772C118.031 17.772 117.246 17.4807 116.701 16.8982C116.156 16.3157 115.884 15.4925 115.884 14.4288V7.43852C115.884 6.37478 116.156 5.55165 116.701 4.96913C117.246 4.3866 118.031 4.09534 119.056 4.09534C120.082 4.09534 120.867 4.3866 121.412 4.96913C121.956 5.55165 122.229 6.37478 122.229 7.43852V14.4288C122.229 15.3153 122.032 16.0434 121.64 16.6133C121.716 16.7399 121.811 16.8222 121.925 16.8602C122.039 16.8982 122.203 16.9172 122.419 16.9172H122.742V18.8167H122.191ZM119.056 15.8725C119.778 15.8725 120.139 15.4356 120.139 14.5618V7.30556C120.139 6.43177 119.778 5.99488 119.056 5.99488C118.335 5.99488 117.974 6.43177 117.974 7.30556V14.5618C117.974 15.4356 118.335 15.8725 119.056 15.8725Z" fill="black" />
                        </svg>

                    </li>

                    <div className="Inter font-[500] px-2 mx-3 nav-links flex items-center ">
                        <li className='w-[99px] h-[20px] mx-1 list-none'><a href="#">Home</a></li>
                        <li className='w-[99px] h-[20px] mx-1 list-none'><a href="#">Work</a></li>
                        <li className='w-[99px] h-[20px] mx-1 list-none'><a href="#">Our Services</a></li>
                        <li ><a href="#"><svg width="190" height="50" viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="159" height="49" rx="24.5" stroke="#252525" />
                            <path d="M21.4382 32V18.9091H23.4134V30.2997H29.3452V32H21.4382ZM35.6765 32.1982C34.7092 32.1982 33.8761 31.9915 33.1772 31.5781C32.4826 31.1605 31.9457 30.5746 31.5664 29.8203C31.1914 29.0618 31.0039 28.1733 31.0039 27.1548C31.0039 26.1491 31.1914 25.2628 31.5664 24.4957C31.9457 23.7287 32.4741 23.13 33.1516 22.6996C33.8335 22.2692 34.6303 22.054 35.5423 22.054C36.0962 22.054 36.6332 22.1456 37.1531 22.3288C37.6729 22.5121 38.1396 22.7997 38.5529 23.1918C38.9663 23.5838 39.2923 24.093 39.5309 24.7195C39.7695 25.3416 39.8889 26.098 39.8889 26.9886V27.6662H32.0842V26.2344H38.016C38.016 25.7315 37.9137 25.2862 37.7092 24.8984C37.5046 24.5064 37.217 24.1974 36.8462 23.9716C36.4798 23.7457 36.0494 23.6328 35.555 23.6328C35.0181 23.6328 34.5494 23.7649 34.1488 24.0291C33.7525 24.2891 33.4457 24.63 33.2283 25.0518C33.0153 25.4695 32.9087 25.9233 32.9087 26.4134V27.532C32.9087 28.1882 33.0238 28.7464 33.2539 29.2067C33.4883 29.6669 33.8143 30.0185 34.2319 30.2614C34.6495 30.5 35.1374 30.6193 35.6957 30.6193C36.0579 30.6193 36.3881 30.5682 36.6864 30.4659C36.9847 30.3594 37.2425 30.2017 37.4599 29.9929C37.6772 29.7841 37.8434 29.5263 37.9585 29.2195L39.7674 29.5455C39.6225 30.0781 39.3626 30.5447 38.9876 30.9453C38.6168 31.3416 38.1502 31.6506 37.5877 31.8722C37.0295 32.0895 36.3924 32.1982 35.6765 32.1982ZM46.5925 22.1818V23.7159H41.2296V22.1818H46.5925ZM42.6678 19.8295H44.579V29.1172C44.579 29.4879 44.6344 29.767 44.7452 29.9545C44.856 30.1378 44.9988 30.2635 45.1735 30.3317C45.3525 30.3956 45.5463 30.4276 45.7551 30.4276C45.9086 30.4276 46.0428 30.4169 46.1578 30.3956C46.2729 30.3743 46.3624 30.3572 46.4263 30.3445L46.7715 31.9233C46.6607 31.9659 46.503 32.0085 46.2985 32.0511C46.0939 32.098 45.8382 32.1236 45.5314 32.1278C45.0286 32.1364 44.5598 32.0469 44.1252 31.8594C43.6905 31.6719 43.339 31.3821 43.0705 30.9901C42.802 30.598 42.6678 30.1058 42.6678 29.5135V19.8295ZM50.1577 18.9091V23.5689H48.5724V18.9091H50.1577ZM59.9838 24.5788L58.2516 24.8857C58.1792 24.6641 58.0641 24.4531 57.9064 24.2528C57.753 24.0526 57.5442 23.8885 57.28 23.7607C57.0158 23.6328 56.6855 23.5689 56.2892 23.5689C55.748 23.5689 55.2963 23.6903 54.9341 23.9332C54.5719 24.1719 54.3908 24.4808 54.3908 24.8601C54.3908 25.1882 54.5123 25.4524 54.7551 25.6527C54.998 25.853 55.3901 26.017 55.9313 26.1449L57.4909 26.5028C58.3944 26.7116 59.0676 27.0334 59.5108 27.468C59.954 27.9027 60.1756 28.4673 60.1756 29.1619C60.1756 29.75 60.0051 30.2741 59.6642 30.7344C59.3276 31.1903 58.8567 31.5483 58.2516 31.8082C57.6507 32.0682 56.954 32.1982 56.1614 32.1982C55.062 32.1982 54.165 31.9638 53.4703 31.495C52.7757 31.022 52.3496 30.3509 52.1919 29.4815L54.0392 29.2003C54.1543 29.6818 54.3908 30.0462 54.7488 30.2933C55.1067 30.5362 55.5733 30.6577 56.1486 30.6577C56.775 30.6577 57.2757 30.5277 57.6507 30.2678C58.0257 30.0036 58.2132 29.6818 58.2132 29.3026C58.2132 28.9957 58.0982 28.7379 57.8681 28.5291C57.6422 28.3203 57.2949 28.1626 56.8262 28.0561L55.1642 27.6918C54.248 27.483 53.5705 27.1506 53.1316 26.6946C52.6969 26.2386 52.4796 25.6612 52.4796 24.9624C52.4796 24.3828 52.6415 23.8757 52.9654 23.4411C53.2892 23.0064 53.7367 22.6676 54.3077 22.4247C54.8787 22.1776 55.5328 22.054 56.2701 22.054C57.3311 22.054 58.1664 22.2841 58.7757 22.7443C59.3851 23.2003 59.7878 23.8118 59.9838 24.5788ZM66.5485 20.6094V18.9091H76.6799V20.6094H72.5953V32H70.6266V20.6094H66.5485ZM80.2866 32.2173C79.6644 32.2173 79.1019 32.1023 78.5991 31.8722C78.0962 31.6378 77.6978 31.299 77.4038 30.8558C77.114 30.4126 76.9691 29.8693 76.9691 29.2259C76.9691 28.6719 77.0756 28.2159 77.2887 27.858C77.5018 27.5 77.7894 27.2166 78.1516 27.0078C78.5138 26.799 78.9187 26.6413 79.3661 26.5348C79.8136 26.4283 80.2695 26.3473 80.734 26.2919C81.3221 26.2237 81.7994 26.1683 82.1658 26.1257C82.5323 26.0788 82.7987 26.0043 82.9648 25.902C83.131 25.7997 83.2141 25.6335 83.2141 25.4034V25.3587C83.2141 24.8004 83.0565 24.3679 82.7411 24.0611C82.43 23.7543 81.9656 23.6009 81.3477 23.6009C80.7042 23.6009 80.1971 23.7436 79.8263 24.0291C79.4599 24.3104 79.2063 24.6236 79.0657 24.9688L77.2695 24.5597C77.4826 23.9631 77.7937 23.4815 78.2028 23.1151C78.6161 22.7443 79.0913 22.4759 79.6282 22.3097C80.1651 22.1392 80.7298 22.054 81.3221 22.054C81.7141 22.054 82.1296 22.1009 82.5685 22.1946C83.0117 22.2841 83.4251 22.4503 83.8086 22.6932C84.1964 22.9361 84.5138 23.2834 84.761 23.7351C85.0082 24.1825 85.1317 24.7642 85.1317 25.4801V32H83.2653V30.6577H83.1886C83.065 30.9048 82.8796 31.1477 82.6325 31.3864C82.3853 31.625 82.0678 31.8232 81.68 31.9808C81.2923 32.1385 80.8278 32.2173 80.2866 32.2173ZM80.7021 30.6832C81.2305 30.6832 81.6822 30.5788 82.0572 30.37C82.4364 30.1612 82.7241 29.8885 82.9201 29.5518C83.1204 29.2109 83.2205 28.8466 83.2205 28.4588V27.1932C83.1523 27.2614 83.0202 27.3253 82.8242 27.3849C82.6325 27.4403 82.413 27.4893 82.1658 27.532C81.9187 27.5703 81.6779 27.6065 81.4435 27.6406C81.2092 27.6705 81.0131 27.696 80.8555 27.7173C80.4847 27.7642 80.146 27.843 79.8391 27.9538C79.5366 28.0646 79.2937 28.2244 79.1104 28.4332C78.9315 28.6378 78.842 28.9105 78.842 29.2514C78.842 29.7244 79.0167 30.0824 79.3661 30.3253C79.7156 30.5639 80.1609 30.6832 80.7021 30.6832ZM89.5886 18.9091V32H87.6774V18.9091H89.5886ZM93.9176 28.6697L93.9048 26.3366H94.2372L98.1491 22.1818H100.438L95.9759 26.9119H95.6754L93.9176 28.6697ZM92.1598 32V18.9091H94.071V32H92.1598ZM98.3601 32L94.8445 27.3338L96.1612 25.9979L100.706 32H98.3601Z" fill="#252525" />
                            <circle cx="135" cy="25" r="25" fill="#252525" />
                            <path d="M142.95 34C140.8 34 138.704 33.5207 136.663 32.562C134.621 31.604 132.813 30.3373 131.238 28.762C129.663 27.1873 128.396 25.379 127.438 23.337C126.479 21.2957 126 19.2 126 17.05C126 16.75 126.1 16.5 126.3 16.3C126.5 16.1 126.75 16 127.05 16H131.1C131.333 16 131.542 16.075 131.725 16.225C131.908 16.375 132.017 16.5667 132.05 16.8L132.7 20.3C132.733 20.5333 132.729 20.7457 132.688 20.937C132.646 21.129 132.55 21.3 132.4 21.45L130 23.9C130.7 25.1 131.575 26.225 132.625 27.275C133.675 28.325 134.833 29.2333 136.1 30L138.45 27.65C138.6 27.5 138.796 27.3873 139.038 27.312C139.279 27.2373 139.517 27.2167 139.75 27.25L143.2 27.95C143.433 28 143.625 28.1123 143.775 28.287C143.925 28.4623 144 28.6667 144 28.9V32.95C144 33.25 143.9 33.5 143.7 33.7C143.5 33.9 143.25 34 142.95 34Z" fill="white" />
                        </svg>
                        </a></li>

                    </div>
                </ul>
            </nav>
            
        </div>
    )
}

export default Navbar