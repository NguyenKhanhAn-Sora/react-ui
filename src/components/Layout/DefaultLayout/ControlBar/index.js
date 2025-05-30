import styles from './ControlBar.module.scss';
import classNames from 'classnames/bind';
import LifeImg from '../../../../assets/img/Music-Image/Life.jfif';
import { Fragment, useContext, useState, useEffect } from 'react';
import Context from '../../../../store/Context';

function ControlBar() {
    const cx = classNames.bind(styles);
    const { showAside, setShowAside } = useContext(Context);
    const { showLyricView, setShowLyricView } = useContext(Context);
    const { showQueueView, setShowQueueView } = useContext(Context);
    const { volumnValue, setVolumnValue } = useContext(Context);
    const [prevVolumn, setPrevVolumn] = useState(0);

    // -------------- Đặt giá trị của volumn khi ấn Icon

    const toggleVolumnValue = () => {
        if (prevVolumn === 0) {
            setPrevVolumn(volumnValue);
            setVolumnValue(0);
        } else {
            setVolumnValue(prevVolumn);
            setPrevVolumn(0);
        }
    };

    return (
        <div className={cx('control-bar')}>
            <div className={cx('control-bar-wrapper')}>
                <div className={cx('music-info-wrapper--cbar')}>
                    <div className={cx('music-image-cbar')}>{/* <img src={LifeImg} alt="Music Image" /> */}</div>
                    <div className={cx('music-info-cbar')}>
                        <span className={cx('music-name-cbar')}>Music Name</span>
                        <span className={cx('music-artist-cbar')}>Music Artist</span>
                    </div>
                    <button className={cx('add-to-likeplaylist')}>
                        <span>
                            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                                <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                                <path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75z"></path>
                            </svg>
                        </span>
                    </button>
                </div>
                <div className={cx('control-wrapper--cbar')}>
                    <div className={cx('control-cbar')}>
                        <div className={cx('control-cbar-leftside')}>
                            <button className={cx('btn-random')}>
                                <span>
                                    <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                                        <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path>
                                        <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path>
                                    </svg>
                                </span>
                            </button>
                            <button className={cx('btn-prev-music')}>
                                <span>
                                    <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                                        <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div className={cx('control-cbar-center')}>
                            <button className={cx('btn-play-music')}>
                                <span className={cx('btn-will-pause')}>
                                    <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                                        <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
                                    </svg>
                                </span>
                                <span className={cx('btn-will-play')}>
                                    <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                                        <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div className={cx('control-cbar-rightside')}>
                            <button className={cx('btn-next-music')}>
                                <span>
                                    <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                                        <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path>
                                    </svg>
                                </span>
                            </button>
                            <button className={cx('btn-loop-music')}>
                                <span>
                                    <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                                        <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className={cx('music-duration-wrapper-cbar')}>
                        <span className={cx('music-current-duration')}>00:00</span>
                        <div className={cx('process-bar-wrapper')}>
                            <div className={cx('process-bar')}></div>
                        </div>
                        <span className={cx('music-duration')}>00:00</span>
                    </div>
                </div>
                <div className={cx('action--cbar')}>
                    <button
                        onClick={() => {
                            setShowAside(!showAside);
                            if (showQueueView) {
                                setShowQueueView(!showQueueView);
                            }
                        }}
                        className={cx('btn-playing-view', showAside ? 'active' : '')}
                    >
                        <span aria-hidden="true">
                            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                                <path d="M11.196 8 6 5v6l5.196-3z"></path>
                                <path d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z"></path>
                            </svg>
                        </span>
                    </button>
                    <button
                        className={cx('btn-lyric-view', showLyricView ? 'active' : '')}
                        onClick={() => {
                            setShowLyricView(!showLyricView);
                        }}
                    >
                        <span>
                            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                                <path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z"></path>
                            </svg>
                        </span>
                    </button>
                    <button
                        className={cx('btn-queue', showQueueView ? 'active' : '')}
                        onClick={() => {
                            setShowQueueView(!showQueueView);
                            if (showAside) {
                                setShowAside(!showAside);
                            }
                        }}
                    >
                        <span>
                            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                                <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path>
                            </svg>
                        </span>
                    </button>
                    <div className={cx('volumn-wrapper')}>
                        <button
                            className={cx('btn-volumn', volumnValue === 0 ? 'btn-volumn-mute' : '')}
                            onClick={() => {
                                toggleVolumnValue();
                            }}
                        >
                            <span className={cx('volumn-icon')}>
                                <svg
                                    data-encore-id="icon"
                                    role="presentation"
                                    aria-label="Volume high"
                                    aria-hidden="false"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
                                    <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
                                </svg>
                            </span>
                            <span className={cx('mute-icon')}>
                                <svg
                                    data-encore-id="icon"
                                    role="presentation"
                                    aria-label="Volume off"
                                    aria-hidden="false"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path>
                                    <path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path>
                                </svg>
                            </span>
                        </button>
                        <input
                            type="range"
                            min="0.01"
                            step="0.01"
                            aria-valuemax="0.5"
                            max="1"
                            name="volumn"
                            id="volumn"
                            value={volumnValue}
                            onChange={(e) => {
                                setVolumnValue(e.target.value);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ControlBar;
